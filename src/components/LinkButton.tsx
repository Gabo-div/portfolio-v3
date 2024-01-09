import { BiLinkExternal } from "react-icons/bi";

type Props = {
  children: React.ReactNode;
  external?: boolean;
} & React.HTMLProps<HTMLAnchorElement>;


export function LinkButton({ children, external, ...rest }: Props) {
  return (
    <a
      className="flex items-center font-medium hover:text-red-300 hover:ring-red-300 ring-1 ring-bunker-500/50 bg-bunker-950/50  px-4 py-2 rounded-full"
      {...rest}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
      {external ? <BiLinkExternal className="ml-2" /> : null}
    </a>
  );
}
