import Image from "next/image";
import { useId } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { SmallProject } from "../../types/Project";

type Props = SmallProject;

export default function PortfolioSmallItem({
  title,
  description,
  tags,
  github,
}: Props) {
  const id = useId();

  return (
    <a
      href={github}
      target="_blank"
      rel="noreferrer"
      className="p-8 bg-bunker-950/50 ring-1 ring-bunker-500/20 rounded-lg flex group/item cursor-pointer hover:bg-gradient-to-b hover:from-bunker-950/50 hover:to-red-300/5"
    >
      <div className="flex flex-col p-2">
        <div>
          <h5 className="text-bunker-200 font-medium text-lg group-hover/item:text-red-300 transition-all flex items-center">
            <span>{title}</span>
            <BiLinkExternal className="transition-transform ml-2 group-hover/item:translate-x-2 group-hover/item:-translate-y-2" />
          </h5>
          <p className="mt-4">{description}</p>
        </div>
        <ul className="flex flex-wrap mt-6">
          {tags.map((tag) => (
            <li className="mr-1.5 mt-2" key={id + tag}>
              <div className="flex items-center rounded-full py-1 text-xs font-medium px-3 leading-5 text-red-300 bg-red-300/10">
                {tag}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}
