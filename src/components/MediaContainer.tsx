import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MediaContainer({ children }: Props) {
  return (
    <div className="mt-12 flex w-full flex-row justify-center space-x-6 lg:mt-0 lg:w-fit lg:space-x-0 lg:ml-auto lg:flex-col lg:space-y-6 group/list">
      {children}
    </div>
  );
}
