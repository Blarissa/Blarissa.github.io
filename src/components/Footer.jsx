import githubIcon from "../assets/images/icons/github.png";
import emailIcon from "../assets/images/icons/gmail.png";
import linkedinIcon from "../assets/images/icons/linkedin.png";
import '../index.css';

function Footer() {
  return (
    <footer className="bg-[var(--primary-100)]">
      <nav className="footer-nav">
        <a
          className="nav-link"
          href="https://github.com/Blarissa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <img className="inline w-6 h-6 align-middle" src={githubIcon} alt="GitHub Icon" width="32" height="32" />
        </a>
        <a
          className="nav-link"
          href="mailto:larissabrasil009@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <img className="inline w-6 h-6 align-middle" src={emailIcon} alt="Email Icon" width="32" height="32" />
        </a>
        <a
          className="nav-link"
          href="https://www.linkedin.com/in/brasil-larissa/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img className="inline w-6 h-6 align-middle" src={linkedinIcon} alt="LinkedIn Icon" width="32" height="32" />
        </a>
      </nav>
      <p>© {new Date().getFullYear()} Blarissa. All rights reserved.</p>
    </footer>
  );
}

export default Footer;