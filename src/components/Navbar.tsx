export default function Navbar() {
  return (
    <div className="w-full absolute h-fit border-b border-b-transparent inset-0 z-30 px-2 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="mx-auto font-medium flex space-x-4 text-sm lg:mx-0 lg:ml-auto">
          <li>
            <a href="#home" className="hover:text-red-300/80">
              Inicio
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-red-300/80">
              Sobre mi
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-red-300/80">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-red-300/80">
              Contacto
            </a>
          </li>
          <li>
            <a
              href="/resume.pdf"
              className="font-bold text-red-300/80 border-2 border-red-300/80 px-4 py-2  hover:bg-red-300/10 rounded-md"
            >
              CV
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
