function Header() {
  return (
    <header>
      <nav className="bg-white shadow-md p-4 px-[100px] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[var(--primary-700)] m-0">
          <h2 className="font-bold text-sm">blarissa</h2>
          <div className="space-x-4">
            <a href="#inicio" className="font-bold text-sm">
              início
            </a>
            <a href="#sobre" className="font-bold text-sm">
              sobre
            </a>
            <a href="#projetos" className="font-bold text-sm">
              projetos
            </a>
            <a href="#experiencias_profissionais" className="font-bold text-sm">
              currículo
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
