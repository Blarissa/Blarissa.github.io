import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className="bg-white shadow-md p-4 section-padding-x sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[var(--primary-700)] m-0">
          <h2 className="text-lg sm:text-xl md:text-2xl">blarissa</h2>
          
          {}
          <button
            className="md:hidden flex flex-col gap-1 w-8 h-8 justify-center items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger-line ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>

          <div className="hidden md:flex space-x-4 lg:space-x-6 text-sm lg:text-base">
            <a href="#home" className="nav-link">home</a>
            <a href="#about" className="nav-link">about</a>
            <a href="#projects" className="nav-link">projects</a>
            <a href="#technologies" className="nav-link">technologies</a>
            <a href="/Curriculo - Larissa dos Santos Brasil.pdf" target="_blank" rel="noopener noreferrer" className="nav-link">resume</a>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-3 text-center pb-4">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="nav-link">home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="nav-link">about</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="nav-link">projects</a>
            <a href="#technologies" onClick={() => setIsMenuOpen(false)} className="nav-link">technologies</a>
            <a href="/Curriculo - Larissa dos Santos Brasil.pdf" target="_blank" rel="noopener noreferrer" className="nav-link">resume</a>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
