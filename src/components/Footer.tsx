import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import FooterMediaIcon from "./FooterMediaIcon";

export default function Footer() {
  return (
    <footer className="bg-bunker-950/50 mt-96 border-t-bunker-500/20 border-t">
      <div className="container mx-auto flex flex-wrap justify-between items-center p-8">
        <p className="w-full lg:w-fit text-sm text-center lg:text-left">© 2023 Todos los derechos reservados</p>

        <div className="w-full lg:w-fit justify-center mt-8 lg:mt-0 flex space-x-6 group/list">
          <FooterMediaIcon href="https://github.com/Gabo-div" icon={AiFillGithub} />
          <FooterMediaIcon href="https://www.linkedin.com/in/gabriel-h-valles/" icon={AiFillLinkedin} />
          <FooterMediaIcon href="mailto:hernandezvallesgabriel@gmail.com" icon={HiOutlineMail} />
        </div>
      </div>
    </footer>
  );
}
