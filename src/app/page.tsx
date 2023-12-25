import { AiFillGithub, AiFillHtml5, AiOutlineMessage, AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoJavascript, BiLogoReact, BiLogoSass, BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import PortfolioItem from "@/components/PortfolioItem";
import PortfolioSmallItem from "@/components/PortfolioSmallItem";
import ContactForm from "@/components/ContactForm";
import { Project, SmallProject } from "../../types/Project";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const items: Project[] = [
  {
    title: "Clon de Discord",
    description:
      "Una aplicación de chat y comunicación en tiempo real diseñada para brindar una experiencia similar a la aplicación original. Incluye funciones de chat de texto y voz.",
    tags: ["React", "Nextjs", "TypeScript", "GraphQL"],
    imageURL: "/discord-clon.png",
    github: "https://github.com/Gabo-div/discord-clon",
  },
  {
    title: "Plano Cartesiano",
    description:
      "Aplicación de software para visualizar y analizar funciones matemáticas en un plano. Interfaz intuitiva, gráficas interactivas y algoritmos eficientes.",
    tags: ["React", "Nextjs", "TypeScript"],
    imageURL: "/plano-cartesiano.png",
    github: "https://github.com/Gabo-div/plano-cartesiano",
  },
];

const smallItems: SmallProject[] = [
  {
    title: "Infinity Bot",
    description:
      "Un bot de moderación de Discord que incluye características como eliminar mensajes, silenciar usuarios, agregar y eliminar roles, y algunas funciones de economía y juegos.",
    tags: ["JavaScript"],
    github: "https://github.com/Gabo-div/infinity-bot",
  },
  {
    title: "Portafolio",
    description:
      "Mi portafolio de programador web. Una plataforma que presenta mis habilidades y experiencia en desarrollo web. Incluye proyectos realizados Y tecnologías utilizadas.",
    tags: ["React", "Nextjs", "Tailwind"],
    github: "https://github.com/Gabo-div/portfolio-v3",
  },
];

export default function Home() {
  return (
    <>
      <header id="home" className="h-screen flex items-center relative">
        <Navbar />

        <div className="px-6 container mx-auto flex flex-col lg:flex-row flex-wrap justify-center items-center absolute inset-0">
          <div className="text-center lg:text-left w-full lg:max-w-3xl">
            <h1 className="text-6xl lg:text-8xl font-bold text-bunker-100">
              Gabriel H<span className="text-red-300/80">.</span> Vallés
            </h1>
            <h2 className="text-bunker-200 mt-2 text-xl md:text-2xl lg:text-4xl font-medium">
              Programador Web Full-Stack <span className="mx-auto text-red-300/80">{"</>"}</span>
            </h2>
            <p className="mt-4">
              Desarrollador web full stack con experiencia en diseño y desarrollo de aplicaciones web utilizando
              tecnologías front-end y back-end. Experto en crear soluciones interactivas y funcionales.
            </p>
          </div>

          <div className="mt-12 flex w-full flex-row justify-center space-x-6 lg:mt-0 lg:w-fit lg:space-x-0 lg:ml-auto lg:flex-col lg:space-y-6 group/list">
            <a
              href="https://github.com/Gabo-div"
              rel="noreferrer"
              target="_blank"
              className="group group-hover/list:opacity-50 hover:!opacity-100 transition-all"
            >
              <AiFillGithub className="group-hover:text-red-300/80 text-4xl transition-all" />
            </a>

            <a
              href="https://www.linkedin.com/in/gabriel-h-valles/"
              rel="noreferrer"
              target="_blank"
              className="group group-hover/list:opacity-50 hover:!opacity-100 transition-all"
            >
              <AiFillLinkedin className="group-hover:text-red-300/80 text-4xl transition-all" />
            </a>

            <a
              href="mailto:hernandezvallesgabriel@gmail.com"
              className="group group-hover/list:opacity-50 hover:!opacity-100 transition-all"
            >
              <HiOutlineMail className="group-hover:text-red-300/80 text-4xl transition-all" />
            </a>
          </div>
        </div>
      </header>

      <main>
        <div id="about" className="container mx-auto mt-60 px-4">
          <div className="bg-bunker-950/50 px-6 lg:px-10 py-16 rounded-md ring-1 ring-bunker-500/20 flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:pl-4 lg:pr-12">
              <h3 className="text-bunker-200 font-medium text-2xl">SOBRE MI</h3>
              <div className="mt-8 space-y-6">
                <p>
                  Como desarrollador web full-stack, mi historial demuestra el desarrollo de aplicaciones web de alta
                  calidad que satisfacen las necesidades de los clientes. Poseo competencia en diversas tecnologías,
                  como HTML, CSS, JavaScript, TypeScript, React y Next.js, y experiencia en front-end y back-end.
                </p>
                <p>
                  En{" "}
                  <a href="#projects" className="text-red-300/80 decoration-red-300 decoration-wavy hover:underline ">
                    proyectos anteriores
                  </a>
                  , se ha evidenciado mi habilidad para crear interfaces de usuario intuitivas y diseños atractivos que
                  mejoran la experiencia del usuario. También he construido arquitecturas de back-end sólidas utilizando
                  Node.js, Express y GraphQL, garantizando la seguridad y escalabilidad de las aplicaciones.
                </p>
                <p>
                  Soy un profesional altamente motivado y orientado a los detalles, comprometido con estar al tanto de
                  las últimas tendencias y mejores prácticas de la industria. Busco constantemente nuevos desafíos y
                  oportunidades para expandir mis habilidades. Confío en que mi experiencia y conocimientos me
                  convierten en un activo valioso para cualquier equipo.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pr-4 lg:pl-12">
              <h3 className="text-bunker-200 font-medium text-2xl mt-8 lg:mt-0">HABILIDADES</h3>
              <div className="mt-8 grid grid-cols-3 lg:grid-cols-3 gap-2 lg:gap-6 group/list">
                <div className="text-red-300/80 p-2 bg-bunker-800/10 rounded-lg flex flex-col items-center justify-center">
                  <AiFillHtml5 className="text-5xl" />
                  <h5 className="text-sm lg:text-md font-medium mt-2">HTML</h5>
                </div>
                <div className="text-red-300/80 p-2 bg-bunker-800/10 rounded-lg flex flex-col items-center justify-center">
                  <FaCss3Alt className="text-5xl" />
                  <h5 className="text-sm lg:text-md font-medium mt-2">CSS</h5>
                </div>
                <div className="text-red-300/90 p-2 bg-bunker-800/10 rounded-lg flex flex-col items-center justify-center">
                  <BiLogoSass className="text-5xl" />
                  <h5 className="text-sm lg:text-md font-medium mt-2">Sass</h5>
                </div>
                <div className="text-red-300/80 p-2 bg-bunker-800/10 rounded-lg flex flex-col items-center justify-center">
                  <BiLogoJavascript className="text-5xl" />
                  <h5 className="text-sm lg:text-md font-medium mt-2">JavaScript</h5>
                </div>
                <div className="text-red-300/80 p-2 bg-bunker-800/10 rounded-lg flex flex-col items-center justify-center">
                  <BiLogoTypescript className="text-5xl" />
                  <h5 className="text-sm lg:text-md font-medium mt-2">TypeScript</h5>
                </div>
                <div className="text-red-300/80  p-2 bg-bunker-800/10 rounded-lg flex flex-col items-center justify-center">
                  <BiLogoReact className="text-5xl" />
                  <h5 className="text-sm lg:text-md font-medium mt-2">React</h5>
                </div>
                <div className="text-red-300/80 p-2 bg-bunker-800/10 rounded-lg flex flex-col items-center justify-center">
                  <SiNextdotjs className="text-5xl" />
                  <h5 className="text-sm lg:text-md font-medium mt-2">NextJs</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="projects" className="container mx-auto mt-96 px-4">
          <h3 className="text-5xl font-bold text-red-300">Proyectos Destacables</h3>
          <div className="flex flex-col space-y-12 mt-20">
            {items.map((item) => (
              <PortfolioItem {...item} key={item.title} />
            ))}
          </div>
        </div>

        <div className="container mx-auto mt-96 px-4">
          <h3 className="text-5xl font-bold text-red-300">Otros Proyectos</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  mt-20">
            {smallItems.map((item) => (
              <PortfolioSmallItem {...item} key={item.title} />
            ))}
          </div>
        </div>

        <div id="contact" className="container mx-auto mt-96 px-4">
          <p className="text-xl mb-2">¿Necesitas un programador?</p>
          <h3 className="text-5xl font-bold text-red-300">Ponte En Contacto</h3>

          <div className="bg-bunker-950/50 px-10 py-16 rounded-md ring-1 ring-bunker-500/20 p-8 mt-20 flex">
            <div className="w-full lg:w-1/2">
              <ContactForm />
            </div>
            <div className="w-1/2 grow items-center justify-center hidden lg:flex">
              <AiOutlineMessage className="text-9xl text-red-300" />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-bunker-950/50 mt-96 border-t-bunker-500/20 border-t">
        <div className="container mx-auto flex flex-wrap justify-between items-center p-8">
          <p className="w-full lg:w-fit text-sm text-center lg:text-left">© 2023 Todos los derechos reservados</p>

          <div className="w-full lg:w-fit justify-center mt-8 lg:mt-0 flex space-x-6 group/list">
            <a
              href="https://github.com/Gabo-div"
              rel="noreferrer"
              target="_blank"
              className="group group-hover/list:opacity-50 hover:!opacity-100 transition-all"
            >
              <AiFillGithub className="group-hover:text-red-300/80 text-2xl transition-all" />
            </a>

            <a
              href="https://www.linkedin.com/in/gabriel-h-valles/"
              rel="noreferrer"
              target="_blank"
              className="group group-hover/list:opacity-50 hover:!opacity-100 transition-all"
            >
              <AiFillLinkedin className="group-hover:text-red-300/80 text-2xl transition-all" />
            </a>

            <a
              href="mailto:hernandezvallesgabriel@gmail.com"
              className="group group-hover/list:opacity-50 hover:!opacity-100 transition-all"
            >
              <HiOutlineMail className="group-hover:text-red-300/80 text-2xl transition-all" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
