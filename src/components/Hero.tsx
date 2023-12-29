import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import MediaIcon from "./MediaIcon";
import MediaContainer from "./MediaContainer";
import Navbar from "./Navbar";

export default function Hero() {
  return (
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

        <MediaContainer>
          <MediaIcon href="https://github.com/Gabo-div" icon={AiFillGithub} />
          <MediaIcon href="https://www.linkedin.com/in/gabriel-h-valles/" icon={AiFillLinkedin} />
          <MediaIcon href="mailto:hernandezvallesgabriel@gmail.com" icon={HiOutlineMail} />
        </MediaContainer>
      </div>
    </header>
  );
}
