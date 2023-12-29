import { Project, SmallProject } from "../../types/Project";
import PortfolioItem from "./PortfolioItem";
import PortfolioSmallItem from "./PortfolioSmallItem";

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

export default function Projects() {
  return (
    <>
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
    </>
  );
}
