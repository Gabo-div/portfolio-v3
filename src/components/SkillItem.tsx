import { IconType } from "react-icons";

type Props = {
  name: string;
  icon: IconType;
};

export default function SkillItem({ icon, name }: Props) {
  return (
    <div className="text-red-300/80 p-2 bg-bunker-800/10 rounded-lg flex flex-col items-center justify-center">
      {icon({ className: "text-5xl" })}
      <h5 className="text-sm lg:text-md font-medium mt-2">{name}</h5>
    </div>
  );
}
