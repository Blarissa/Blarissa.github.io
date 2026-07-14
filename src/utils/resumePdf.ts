import type { Resume } from "../data/curriculo.data";
import type { TranslationKeys } from "../locales";

type Language = "pt" | "en";

const labels = {
  en: {
    about: "About",
    location: "Location",
    phone: "Phone",
    projects: "Projects",
    skills: "Technical skills",
    technologies: "Technologies",
    professionalExperiences: "Professional experience",
    present: "Present",
  },
  pt: {
    about: "Resumo profissional",
    location: "Local",
    phone: "Telefone",
    skills: "Competências técnicas",
    technologies: "Tecnologias",
    professionalExperiences: "Experiência profissional",
    present: "Atual",
  },
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatDate(value: string, language: Language) {
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));

  return new Intl.DateTimeFormat(language === "pt" ? "pt-BR" : "en-US", {
    month: "short",
    timeZone: "UTC",
    year: "numeric",
  }).format(date);
}

function renderContactItem(label: string, value: string, href?: string) {
  const safeValue = escapeHtml(value);
  const content = href
    ? `<a href="${escapeHtml(href)}">${safeValue}</a>`
    : safeValue;

  return `<li><strong>${escapeHtml(label)}:</strong> ${content}</li>`;
}

function buildResumeHtml(
  resume: Resume,
  t: TranslationKeys,
  language: Language
) {
  const copy = labels[language];
  const { contact } = resume;

  const contactItems = [
    renderContactItem(copy.location, contact.location),
    renderContactItem(copy.phone, contact.phone, `tel:${contact.phone}`),
    renderContactItem("Email", contact.email, `mailto:${contact.email}`),
    renderContactItem("LinkedIn", contact.linkedin, contact.linkedin),
    renderContactItem("GitHub", contact.github, contact.github),
  ].join("");

  const about = t.about.text
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");

  const skills = resume.technical_skills
    .map((skill) => `<li>${escapeHtml(skill.technology)}</li>`)
    .join("");

  const professionalExperiences = resume.professional_experiences
    .map((experience) => {
      const translatedExperience = t.resume.professionalExperiences[experience.id];
      const startDate = formatDate(experience.startDate, language);
      const endDate = experience.endDate
        ? formatDate(experience.endDate, language)
        : copy.present;
      const dateRange = `${startDate} - ${endDate}`;

      return `
        <article>
          <h3>${escapeHtml(experience.company.trim())}</h3>
          <p><strong>${escapeHtml(translatedExperience.role)}</strong> - ${escapeHtml(dateRange)}</p>
          <p>${escapeHtml(experience.location)}</p>
          <ul>
            ${translatedExperience.description
              .map((description) => `<li>${escapeHtml(description)}</li>`)
              .join("")}
          </ul>
        </article>
      `;
    })
    .join("");

  return `
    <!doctype html>
    <html lang="${language === "pt" ? "pt-BR" : "en"}">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>${escapeHtml(contact.name)} - ${escapeHtml(t.nav.resume)}</title>
        <style>
          @page {
            margin: 14mm;
            size: A4;
          }

          * {
            box-sizing: border-box;
          }

          body {
            color: #1f2340;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 11px;
            line-height: 1.45;
            margin: 0;
          }

          header {
            border-bottom: 2px solid #8f8fcb;
            margin-bottom: 16px;
            padding-bottom: 12px;
          }

          h1 {
            color: #53509b;
            font-size: 26px;
            margin: 0 0 6px;
          }

          h2 {
            color: #53509b;
            font-size: 14px;
            letter-spacing: 0;
            margin: 18px 0 8px;
            text-transform: uppercase;
          }

          h3 {
            font-size: 12px;
            margin: 0 0 4px;
          }

          p {
            margin: 0 0 8px;
          }

          a {
            color: #53509b;
            text-decoration: none;
          }

          ul {
            margin: 0;
            padding-left: 16px;
          }

          .contact-list {
            column-count: 2;
            list-style: none;
            padding-left: 0;
          }

          .skills-list {
            column-count: 3;
          }

          article {
            break-inside: avoid;
            margin-bottom: 12px;
          }
        </style>
      </head>
      <body>
        <header>
          <h1>${escapeHtml(contact.name)}</h1>
          <ul class="contact-list">${contactItems}</ul>
        </header>

        <main>
          <section>
            <h2>${copy.about}</h2>
            ${about}
          </section>

          <section>
            <h2>${copy.skills}</h2>
            <ul class="skills-list">${skills}</ul>
          </section>

          <section>
            <h2>${copy.professionalExperiences}</h2>
            ${professionalExperiences}
          </section>
        </main>
      </body>
    </html>
  `;
}

export function generateResumePdf(
  resume: Resume,
  t: TranslationKeys,
  language: Language
) {
  const printFrame = document.createElement("iframe");
  printFrame.style.bottom = "0";
  printFrame.style.height = "0";
  printFrame.style.left = "0";
  printFrame.style.position = "fixed";
  printFrame.style.width = "0";
  printFrame.style.border = "0";

  document.body.appendChild(printFrame);

  const printDocument = printFrame.contentDocument;
  const printWindow = printFrame.contentWindow;

  if (!printDocument || !printWindow) {
    printFrame.remove();
    return;
  }

  const cleanup = () => printFrame.remove();

  printDocument.open();
  printDocument.write(buildResumeHtml(resume, t, language));
  printDocument.close();
  printWindow.focus();

  printWindow.addEventListener("afterprint", cleanup, { once: true });
  window.setTimeout(() => {
    printWindow.print();
    window.setTimeout(cleanup, 1000);
  }, 250);
}
