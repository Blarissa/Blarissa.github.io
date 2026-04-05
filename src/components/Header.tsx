import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../locales";

const resumePath = "/Curriculo - Larissa dos Santos Brasil.pdf";

interface LanguageSelectorProps {
  language: "pt" | "en";
  onChange: (language: "pt" | "en") => void;
  label: string;
}

function LanguageSelector({
  language,
  onChange,
  label,
}: LanguageSelectorProps) {
  return (
    <div
      role="group"
      aria-label={label}
      className="flex gap-2 items-center px-3 py-1.5 bg-[var(--primary-200)] rounded-full transition-all hover:bg-[var(--primary-300)]"
    >
      <button
        type="button"
        onClick={() => onChange("en")}
        aria-pressed={language === "en"}
        className={`language-button text-xs font-semibold uppercase transition-all duration-200 ${
          language === "en"
            ? "text-[var(--primary-700)] scale-110"
            : "text-[var(--primary-500)] hover:text-[var(--primary-700)]"
        }`}
      >
        en
      </button>
      <span className="text-[var(--primary-500)] text-xs" aria-hidden="true">
        |
      </span>
      <button
        type="button"
        onClick={() => onChange("pt")}
        aria-pressed={language === "pt"}
        className={`language-button text-xs font-semibold uppercase transition-all duration-200 ${
          language === "pt"
            ? "text-[var(--primary-700)] scale-110"
            : "text-[var(--primary-500)] hover:text-[var(--primary-700)]"
        }`}
      >
        pt
      </button>
    </div>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const mobileNavigationId = "mobile-navigation";
  const navItems = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#projects", label: t.nav.projects },
    { href: "#technologies", label: t.nav.technologies },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header>
      <nav
        aria-label={t.nav.primaryLabel}
        className="bg-white shadow-md p-4 section-padding-x fixed top-0 z-50 w-full"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[var(--primary-700)] m-0">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold">blarissa</h2>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <div className="flex space-x-4 lg:space-x-6 text-sm lg:text-base">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="nav-link px-2 py-1">
                  {item.label}
                </a>
              ))}
              <a
                href={resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link px-2 py-1"
              >
                {t.nav.resume}
              </a>
            </div>
            <LanguageSelector
              language={language}
              onChange={setLanguage}
              label={t.nav.languageLabel}
            />
          </div>

          <div className="md:hidden flex items-center gap-3">
            <LanguageSelector
              language={language}
              onChange={setLanguage}
              label={t.nav.languageLabel}
            />
            <button
              type="button"
              className="menu-button flex flex-col gap-1 w-8 h-8 justify-center items-center"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={isMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={isMenuOpen}
              aria-controls={mobileNavigationId}
            >
              <span
                className={`hamburger-line transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`hamburger-line transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`hamburger-line transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div
            id={mobileNavigationId}
            className="md:hidden mt-4 flex flex-col space-y-3 text-center pb-4 fade-in"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="nav-link py-1"
              >
                {item.label}
              </a>
            ))}
            <a
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="nav-link py-1"
            >
              {t.nav.resume}
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
