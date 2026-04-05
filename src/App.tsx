import { useEffect } from "react";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import larissa_welcome from "./assets/images/larissa_welcome.png";
import larissa_about from "./assets/images/larissa_about.png";
import { curriculoLarissa } from "./data/curriculo.data";
import ProjectCard from "./components/ProjectCard.tsx";
import { useLanguage } from "./contexts/LanguageContext";
import { translations } from "./locales";

function upsertMetaByName(name: string, content: string) {
  let meta = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", name);
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
}

function upsertMetaByProperty(property: string, content: string) {
  let meta = document.querySelector<HTMLMetaElement>(
    `meta[property="${property}"]`
  );

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("property", property);
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
}

function App() {
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const htmlLang = language === "pt" ? "pt-BR" : "en";
    const ogLocale = language === "pt" ? "pt_BR" : "en_US";

    document.documentElement.lang = htmlLang;
    document.title = t.seo.title;

    upsertMetaByName("description", t.seo.description);
    upsertMetaByName("theme-color", "#f0f0fb");
    upsertMetaByName("twitter:card", "summary");
    upsertMetaByName("twitter:title", t.seo.title);
    upsertMetaByName("twitter:description", t.seo.description);

    upsertMetaByProperty("og:title", t.seo.title);
    upsertMetaByProperty("og:description", t.seo.description);
    upsertMetaByProperty("og:type", "website");
    upsertMetaByProperty("og:locale", ogLocale);
  }, [language, t.seo.description, t.seo.title]);

  return (
    <>
      <Header />
      <main>
        <section
          id="home"
          aria-labelledby="home-title"
          className="anchor-section w-full min-h-screen bg-[var(--primary-100)] section-padding-x flex justify-center items-center py-20 md:py-0"
        >
          <div className="grid grid-cols-1 md:grid-cols-[60%_auto] items-center gap-8 md:gap-12 lg:gap-16 w-full max-w-7xl">
            <h1
              id="home-title"
              className="w-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center md:text-left text-[var(--primary-600)] order-2 md:order-1 leading-relaxed md:leading-relaxed"
            >
              {t.home.greeting} <br></br> {t.home.name}
            </h1>
            <img
              src={larissa_welcome}
              alt="Larissa Brasil"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-48 sm:w-64 md:w-72 lg:w-80 h-auto mx-auto order-1 md:order-2"
            ></img>
          </div>
        </section>

        <section
          id="about"
          aria-labelledby="about-title"
          className="anchor-section section-padding"
        >
          <h2 id="about-title" className="section-title">
            {t.about.title}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-[40%_auto] gap-6 md:gap-8 w-full items-center">
            <img
              src={larissa_about}
              alt="Larissa Brasil"
              loading="lazy"
              decoding="async"
              className="h-auto w-full max-w-sm mx-auto"
            ></img>
            <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-white shadow-lg rounded-[3rem]">
              {t.about.text.map((text, index) => (
                <p
                  key={index}
                  className="mb-4 body-text text-center md:text-justify"
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          aria-labelledby="projects-title"
          className="anchor-section"
        >
          <ProjectCard
            headingId="projects-title"
            title={t.projects.title}
            projects={curriculoLarissa.projects}
          />
        </section>

        <section
          id="technologies"
          aria-labelledby="technologies-title"
          className="anchor-section section-padding"
        >
          <h2 id="technologies-title" className="section-title">
            {t.technologies.title}
          </h2>
          <div className="flex flex-wrap w-full items-center justify-center gap-2 sm:gap-4">
            {curriculoLarissa.technical_skills.map((skill) => (
              <img
                key={skill.technology}
                src={skill.icon}
                alt={skill.technology}
                loading="lazy"
                decoding="async"
                className="icon-img"
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
