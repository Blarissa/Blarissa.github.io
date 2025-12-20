import githubIcon from "../assets/images/icons/github.png";
import emailIcon from "../assets/images/icons/gmail.png";
import linkedinIcon from "../assets/images/icons/linkedin.png";
import '../index.css';

function Footer() {
  return (
    <footer
        className="bg-[var(--primary-100)] shadow-md p-4 px-[150px] text-center text-sm text-[var(--primary-700)]">
        <nav className="nav">
            <a className="nav-link" href="https://github.com/Blarissa" target="_blank">
                <img src={githubIcon} alt="GitHub" className="inline w-6 h-6 align-middle"></img>
            </a>
            <a className="nav-link" href="mailto:larissabrasil009@gmail.com" target="_blank">
                <img src={emailIcon} alt="Gmail" className="inline w-6 h-6 align-middle"></img>
            </a>
            <a className="nav-link" href="https://www.linkedin.com/in/brasil-larissa/" target="_blank">
                <img src={linkedinIcon} alt="Linkedin" className="inline w-6 h-6 align-middle"></img>
            </a>
        </nav>

        &copy;  {new Date().getFullYear()} Larissa Brasil. Todos os direitos reservados.
    </footer>
  );
}

export default Footer;