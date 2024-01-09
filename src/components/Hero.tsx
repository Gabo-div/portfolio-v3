import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaFilePdf } from "react-icons/fa";
import Navbar from "./Navbar";
import Image from "next/image";
import { LinkButton } from "./LinkButton";

export default function Hero() {
  return (
    <header id="home" className="full-screen flex items-center relative">
      <Navbar />

      <div className="mt-14 max-w-xl lg:max-w-3xl px-4 container mx-auto flex flex-col  justify-center items-center absolute inset-0 text-center">

        <Image src="/me.png" alt="logo" width={300} height={300} className="rounded-full mb-8 h-48 lg:h-60 w-auto" />

        <h1 className="mb-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-bunker-100">
          Gabriel H<span className="text-red-300/80">.</span> Vallés
        </h1>

        <p className="text-bunker-300 text-lg md:text-xl lg:text-2xl">
          Desarrollador Web Full-Stack con <span className="text-red-300/80 underline decoration-wavy">+4 años de experiencia.</span> Amante de la programación y el aprendizaje.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <LinkButton
            href="https://github.com/Gabo-div"
            external
          >
            <AiFillGithub className="text-2xl mr-2" />
            GitHub
          </LinkButton>


          <LinkButton
            href="https://www.linkedin.com/in/gabriel-h-valles/"
            external
          >
            <AiFillLinkedin className="text-2xl mr-2" />
            LinkedIn
          </LinkButton>

          <LinkButton
            href="/resume.pdf"
            external
          >
            <FaFilePdf className="text-2xl mr-2" />
            Curriculum
          </LinkButton>
        </div>
      </div>
    </header >
  );
}
