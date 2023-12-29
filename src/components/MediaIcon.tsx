import { IconType } from "react-icons";

type Props = {
  href: string;
  icon: IconType;
};

export default function MediaIcon({ href, icon }: Props) {
  return (
    <a
      href={href}
      rel="noreferrer"
      target="_blank"
      className="group group-hover/list:opacity-50 hover:!opacity-100 transition-all"
    >
      {icon({ className: "group-hover:text-red-300/80 text-4xl transition-all" })}
    </a>
  );
}
