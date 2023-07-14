import {
  AiFillGithub,
  AiFillHtml5,
  AiFillTwitterCircle,
  AiOutlineInstagram,
  AiOutlineMessage,
} from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { FaCss3Alt } from "react-icons/fa";
import {
  BiFolder,
  BiLinkExternal,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoSass,
  BiLogoTypescript,
} from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="h-screen flex items-center relative">
        <div className="w-full absolute h-fit inset-0 z-30">
          <div className="container mx-auto px-2 py-6 flex justify-between items-center">
            <ul className="mx-auto font-medium flex space-x-4 text-sm lg:mx-0 lg:ml-auto">
              <li>
                <a href="#" className="hover:text-red-300/80">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-300/80">
                  Sobre mi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-300/80">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-300/80">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-6 container mx-auto flex flex-col lg:flex-row flex-wrap justify-center items-center absolute inset-0">
          <div className="text-center lg:text-left w-full lg:max-w-3xl">
            <h1 className="text-6xl lg:text-8xl font-bold text-bunker-100">
              Gabriel H<span className="text-red-300/80">.</span> Vallés
            </h1>
            <h2 className="text-bunker-200 mt-2 text-xl md:text-2xl lg:text-4xl font-medium">
              Programador Web Full-Stack{" "}
              <span className="mx-auto text-red-300/80">{"</>"}</span>
            </h2>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              ratione ducimus in nihil eum harum debitis, dolorum dignissimos
              laboriosam suscipit saepe tempore quibusdam molestiae. Iure
              consectetur voluptas minus quaerat soluta?
            </p>
          </div>

          <div className="mt-12 flex w-full flex-row justify-center space-x-6 lg:mt-0 lg:w-fit lg:space-x-0 lg:ml-auto lg:flex-col lg:space-y-6 group/list">
            <button className="group group-hover/list:opacity-50 hover:!opacity-100 transition-all">
              <AiFillGithub className="group-hover:text-red-300/80 text-3xl transition-all" />
            </button>
            <button className="group group-hover/list:opacity-50 hover:!opacity-100 transition-all">
              <AiFillTwitterCircle className="group-hover:text-red-300/80 text-3xl transition-all" />
            </button>
            <button className="group group-hover/list:opacity-50 hover:!opacity-100 transition-all">
              <AiOutlineInstagram className="group-hover:text-red-300/80 text-3xl transition-all" />
            </button>
            <button className="group group-hover/list:opacity-50 hover:!opacity-100 transition-all">
              <HiOutlineMail className="group-hover:text-red-300/80 text-3xl transition-all" />
            </button>
          </div>
        </div>
      </header>

      <main>
        <div className="container mx-auto mt-60 px-4">
          <div className="bg-bunker-950/50 px-6 lg:px-10 py-16 rounded-md ring-1 ring-bunker-500/20 flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:px-3">
              <h3 className="text-bunker-200 font-medium text-2xl">SOBRE MI</h3>
              <div className="mt-8 space-y-6">
                <p>
                  Soy un desarrollador web full-stack con amplia experiencia en
                  el desarrollo de aplicaciones web. He trabajado en una
                  variedad de proyectos utilizando tecnologías como HTML, CSS,
                  JavaScript y TypeScript para crear diseños atractivos e
                  interfaces de usuario intuitivas. También he utilizado
                  librerías y marcos como React y Next.js para construir
                  aplicaciones web escalables y rápidas. Además, tengo
                  experiencia en el desarrollo de aplicaciones backend
                  utilizando Node.js, Express y GraphQL para crear una
                  arquitectura de aplicación sólida y segura.
                </p>
                <p>
                  Soy un profesional apasionado y en constante aprendizaje,
                  siempre busco mejorar mis habilidades y conocimientos en las
                  tecnologías web para poder ofrecer soluciones de alta calidad
                  a mis clientes.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:px-3">
              <h3 className="text-bunker-200 font-medium text-2xl mt-8 lg:mt-0 lg:text-right">
                HABILIDADES
              </h3>
              <div className="mt-8 grid grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-6 group/list">
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
                  <h5 className="text-sm lg:text-md font-medium mt-2">
                    JavaScript
                  </h5>
                </div>
                <div className="text-red-300/80 p-2 bg-bunker-800/10 rounded-lg flex flex-col items-center justify-center">
                  <BiLogoTypescript className="text-5xl" />
                  <h5 className="text-sm lg:text-md font-medium mt-2">
                    TypeScript
                  </h5>
                </div>
                <div className="text-red-300/80  p-2 bg-bunker-800/10 rounded-lg flex flex-col items-center justify-center">
                  <BiLogoReact className="text-5xl" />
                  <h5 className="text-sm lg:text-md font-medium mt-2">React</h5>
                </div>
                <div className="text-red-300/80 p-2 bg-bunker-800/10 rounded-lg flex flex-col items-center justify-center">
                  <SiNextdotjs className="text-5xl" />
                  <h5 className="text-sm lg:text-md font-medium mt-2">
                    NextJs
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto mt-96 px-4">
          <h3 className="text-5xl font-bold text-red-300">
            Proyectos Destacables
          </h3>
          <div className="flex flex-col space-y-12 mt-20">
            <div className="p-8 bg-bunker-950/50 ring-1 flex-wrap ring-bunker-500/20 rounded-lg flex group/item cursor-pointer hover:bg-gradient-to-b hover:from-bunker-950/50 hover:to-red-300/5">
              <div className="w-full lg:w-1/2 grow flex flex-col justify-between p-2">
                <div>
                  <h5 className="text-bunker-200 font-medium text-lg group-hover/item:text-red-300 transition-all flex items-center">
                    <span>Clon de Discord </span>
                    <BiLinkExternal className="transition-transform ml-2 group-hover/item:translate-x-2 group-hover/item:-translate-y-2" />
                  </h5>
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque aliquam veniam molestias dolorem, illo facere!
                    Consequuntur error incidunt, totam alias accusantium
                    inventore vero eum tempora, repudiandae ipsam deleniti iure
                    repellendus!
                  </p>
                </div>
                <ul className="flex flex-wrap">
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full py-1 text-xs font-medium px-3 leading-5 text-red-300 bg-red-300/10">
                      React
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full py-1 text-xs font-medium px-3 leading-5 text-red-300 bg-red-300/10">
                      Nextjs
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full py-1 text-xs font-medium px-3 leading-5 text-red-300 bg-red-300/10">
                      TypeScript
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full py-1 text-xs font-medium px-3 leading-5 text-red-300 bg-red-300/10">
                      GraphQL
                    </div>
                  </li>
                </ul>
              </div>
              <div className="w-full mt-8 lg:mt-0 lg:w-1/2 p-2">
                <Image
                  src="/discord-clon.png"
                  alt="clon de discord"
                  width="1920"
                  height="1080"
                  className="rounded-lg aspect-video"
                />
              </div>
            </div>

            <div className="p-8 bg-bunker-950/50 ring-1 flex-wrap ring-bunker-500/20 rounded-lg flex group/item cursor-pointer hover:bg-gradient-to-b hover:from-bunker-950/50 hover:to-red-300/5">
              <div className="w-full lg:w-1/2 grow flex flex-col justify-between p-2">
                <div>
                  <h5 className="text-bunker-200 font-medium text-lg group-hover/item:text-red-300 transition-all flex items-center">
                    <span>Plano Cartesiano</span>
                    <BiLinkExternal className="transition-transform ml-2 group-hover/item:translate-x-2 group-hover/item:-translate-y-2" />
                  </h5>
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque aliquam veniam molestias dolorem, illo facere!
                    Consequuntur error incidunt, totam alias accusantium
                    inventore vero eum tempora, repudiandae ipsam deleniti iure
                    repellendus!
                  </p>
                </div>
                <ul className="flex flex-wrap">
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full py-1 text-xs font-medium px-3 leading-5 text-red-300 bg-red-300/10">
                      React
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full py-1 text-xs font-medium px-3 leading-5 text-red-300 bg-red-300/10">
                      Nextjs
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full py-1 text-xs font-medium px-3 leading-5 text-red-300 bg-red-300/10">
                      TypeScript
                    </div>
                  </li>
                </ul>
              </div>
              <div className="w-full mt-8 lg:mt-0 lg:w-1/2 p-2">
                <Image
                  src="/plano-cartesiano.png"
                  alt="clon de discord"
                  width="1920"
                  height="1080"
                  className="rounded-lg aspect-video"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto mt-96 px-4">
          <h3 className="text-5xl font-bold text-red-300">Otros Proyectos</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  mt-20">
            <div className="p-8 bg-bunker-950/50 ring-1 ring-bunker-500/20 rounded-lg flex group/item cursor-pointer hover:bg-gradient-to-b hover:from-bunker-950/50 hover:to-red-300/5">
              <div className="flex flex-col p-2">
                <div>
                  <h5 className="text-bunker-200 font-medium text-lg group-hover/item:text-red-300 transition-all flex items-center">
                    <span>Infinity Bot</span>
                    <BiLinkExternal className="transition-transform ml-2 group-hover/item:translate-x-2 group-hover/item:-translate-y-2" />
                  </h5>
                  <p className="mt-4">
                    Un bot de moderación de Discord que incluye características
                    como eliminar mensajes, silenciar usuarios, agregar y
                    eliminar roles, y algunas funciones de economía y juegos.
                  </p>
                </div>
                <ul className="flex flex-wrap mt-6">
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full py-1 text-xs font-medium px-3 leading-5 text-red-300 bg-red-300/10">
                      JavaScript
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-8 bg-bunker-950/50 ring-1 ring-bunker-500/20 rounded-lg flex group/item cursor-pointer hover:bg-gradient-to-b hover:from-bunker-950/50 hover:to-red-300/5">
              <div className="flex flex-col p-2">
                <div>
                  <h5 className="text-bunker-200 font-medium text-lg group-hover/item:text-red-300 transition-all flex items-center">
                    <span>Portafolio</span>
                    <BiLinkExternal className="transition-transform ml-2 group-hover/item:translate-x-2 group-hover/item:-translate-y-2" />
                  </h5>
                  <p className="mt-4">
                    Mi portafolio de programador web. Una plataforma que
                    presenta mis habilidades y experiencia en desarrollo web.
                    Incluye proyectos realizados Y tecnologías utilizadas.
                  </p>
                </div>
                <ul className="flex flex-wrap mt-6">
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full py-1 text-xs font-medium px-3 leading-5 text-red-300 bg-red-300/10">
                      React
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full py-1 text-xs font-medium px-3 leading-5 text-red-300 bg-red-300/10">
                      NextJs
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full py-1 text-xs font-medium px-3 leading-5 text-red-300 bg-red-300/10">
                      Tailwind
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto mt-96 px-4">
          <p className="text-xl mb-2">¿Necesitas un programador?</p>
          <h3 className="text-5xl font-bold text-red-300">Ponte En Contacto</h3>
          <p className="mt-4 max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex mollitia
            velit iusto, nemo placeat laudantium nam eius ullam aliquid qui.
          </p>
          <div className="bg-bunker-950/50 px-10 py-16 rounded-md ring-1 ring-bunker-500/20 p-8 mt-20 flex">
            <form className="w-full lg:w-1/2 flex flex-col space-y-4">
              <div className="flex flex-col">
                <label htmlFor="contact-name" className="mb-4">
                  Nombre
                </label>
                <input
                  type="text"
                  id="contact-name"
                  className="bg-bunker-900/50 p-2 h-10 rounded-lg focus:outline-red-300/50"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="contact-email" className="mb-4">
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  className="bg-bunker-900/50 p-2 h-10 rounded-lg focus:outline-red-300/50"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="contact-message" className="mb-4">
                  Mensaje
                </label>
                <textarea
                  id="contact-message"
                  className="bg-bunker-900/50 p-2 h-40 resize-none rounded-lg focus:outline-red-300/50"
                />
              </div>
              <button
                type="submit"
                className="bg-red-300 p-2 rounded-lg font-bold text-bunker-950 hover:bg-red-400/80"
              >
                Enviar
              </button>
            </form>
            <div className="w-1/2 grow items-center justify-center hidden lg:flex">
              <AiOutlineMessage className="text-9xl text-red-300" />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-bunker-950/50 mt-96 border-t-bunker-500/20 border-t">
        <div className="container mx-auto flex flex-wrap justify-between items-center p-8">
          <p className="w-full lg:w-fit text-sm text-center lg:text-left">
            © 2023 Todos los derechos reservados
          </p>

          <div className="w-full lg:w-fit justify-center mt-8 lg:mt-0 flex space-x-6 group/list">
            <button className="group group-hover/list:opacity-50 hover:!opacity-100 transition-all">
              <AiFillGithub className="group-hover:text-red-300/80 text-2xl transition-all" />
            </button>
            <button className="group group-hover/list:opacity-50 hover:!opacity-100 transition-all">
              <AiFillTwitterCircle className="group-hover:text-red-300/80 text-2xl transition-all" />
            </button>
            <button className="group group-hover/list:opacity-50 hover:!opacity-100 transition-all">
              <AiOutlineInstagram className="group-hover:text-red-300/80 text-2xl transition-all" />
            </button>
            <button className="group group-hover/list:opacity-50 hover:!opacity-100 transition-all">
              <HiOutlineMail className="group-hover:text-red-300/80 text-2xl transition-all" />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
