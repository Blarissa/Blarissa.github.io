/* eslint-disable react-hooks/static-components */
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../locales";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const LanguageSelector = () => (
    <div className="flex gap-2 items-center px-3 py-1.5 bg-[var(--primary-200)] rounded-full transition-all hover:bg-[var(--primary-300)]">
      <button
        onClick={() => setLanguage('en')}
        className={`text-xs font-semibold uppercase transition-all duration-200 ${
          language === 'en' 
            ? 'text-[var(--primary-700)] scale-110' 
            : 'text-[var(--primary-500)] hover:text-[var(--primary-700)]'
        }`}
      >
        en
      </button>
      <span className="text-[var(--primary-500)] text-xs">|</span>
      <button
        onClick={() => setLanguage('pt')}
        className={`text-xs font-semibold uppercase transition-all duration-200 ${
          language === 'pt' 
            ? 'text-[var(--primary-700)] scale-110' 
            : 'text-[var(--primary-500)] hover:text-[var(--primary-700)]'
        }`}
      >
        pt
      </button>
    </div>
  );

  return (
    <header>
      <nav className="bg-white shadow-md p-4 section-padding-x fixed top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[var(--primary-700)] m-0">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold">blarissa</h2>
          
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <div className="flex space-x-4 lg:space-x-6 text-sm lg:text-base">
              <a href="#home" className="nav-link">{t.nav.home}</a>
              <a href="#about" className="nav-link">{t.nav.about}</a>
              <a href="#projects" className="nav-link">{t.nav.projects}</a>
              <a href="#technologies" className="nav-link">{t.nav.technologies}</a>
              <a href="/Curriculo - Larissa dos Santos Brasil.pdf" target="_blank" rel="noopener noreferrer" className="nav-link">{t.nav.resume}</a>
            </div>
            <LanguageSelector />
          </div>

          <div className="md:hidden flex items-center gap-3">
            <LanguageSelector />
            <button
              className="flex flex-col gap-1 w-8 h-8 justify-center items-center focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className={`hamburger-line transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`hamburger-line transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`hamburger-line transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-3 text-center pb-4 animate-fade-in">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="nav-link">{t.nav.home}</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="nav-link">{t.nav.about}</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="nav-link">{t.nav.projects}</a>
            <a href="#technologies" onClick={() => setIsMenuOpen(false)} className="nav-link">{t.nav.technologies}</a>
            <a href="/Curriculo - Larissa dos Santos Brasil.pdf" target="_blank" rel="noopener noreferrer" className="nav-link">{t.nav.resume}</a>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
