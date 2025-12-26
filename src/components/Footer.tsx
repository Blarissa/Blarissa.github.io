import githubIcon from "../assets/images/icons/github.png";
import emailIcon from "../assets/images/icons/gmail.png";
import linkedinIcon from "../assets/images/icons/linkedin.png";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../locales";
import '../index.css';

function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <footer
        className="flex flex-col gap-3 sm:gap-4 justify-center items-center bg-[var(--primary-100)] shadow-top p-4 sm:p-6 section-padding-x text-center text-xs sm:text-sm text-[var(--primary-700)]">
        <nav className="nav grid grid-cols-3 gap-4 sm:gap-6 justify-center w-fit">
            <a className="nav-link" href="https://github.com/Blarissa" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" className="inline w-6 h-6 sm:w-8 sm:h-8 align-middle"></img>
            </a>
            <a className="nav-link" href="mailto:larissabrasil009@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={emailIcon} alt="Gmail" className="inline w-6 h-6 sm:w-8 sm:h-8 align-middle"></img>
            </a>
            <a className="nav-link" href="https://www.linkedin.com/in/brasil-larissa/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="Linkedin" className="inline w-6 h-6 sm:w-8 sm:h-8 align-middle"></img>
            </a>
        </nav>

        <p className="text-center">&copy; {new Date().getFullYear()} Larissa Brasil. {t.footer.rights}</p>
    </footer>
  );
}

export default Footer;