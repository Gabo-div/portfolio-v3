export default function Navbar() {
  return (
    <div className="fixed h-fit inset-0 z-30 px-4 mt-4">
      <div className="container max-w-lg mx-auto">
        <ul className="w-full h-10 bg-bunker-950 ring-1 ring-bunker-500/50 rounded-full text-bunker-200 font-medium flex text-sm">
          <li className="grow">
            <a href="#home" className="pl-2 w-full h-full flex items-center justify-center hover:text-red-300/80">
              Inicio
            </a>
          </li>
          <li className="grow">
            <a href="#about" className="w-full h-full flex items-center justify-center hover:text-red-300/80">
              Sobre mi
            </a>
          </li>
          <li className="grow">
            <a href="#projects" className="w-full h-full flex items-center justify-center hover:text-red-300/80">
              Proyectos
            </a>
          </li>
          <li className="grow">
            <a href="#contact" className="pr-2 w-full h-full flex items-center justify-center hover:text-red-300/80">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
