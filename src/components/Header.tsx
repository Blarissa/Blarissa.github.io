function Header() {
  return (
    <header>
      <nav className="bg-white shadow-md p-4 px-[100px] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[var(--primary-700)] m-0">
          <h2>blarissa</h2>
          <div className="space-x-4">
            <a href="#home">home</a>
            <a href="#about">about</a>
            <a href="#projects">projects</a>
            <a href="#technologies">technologies</a>
            <a href="/Curriculo - Larissa dos Santos Brasil.pdf" target="_blank" rel="noopener noreferrer">resume</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
