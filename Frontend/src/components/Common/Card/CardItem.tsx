import { useContext, type ReactNode } from "react";
import { CardGroupContext } from "./CardGroup";

const CardItem = ({ children }: { children: ReactNode }) => {
  const itemAlignClass: Record<string, string> = {
    left: "items-start",
    center: "items-center",
    right: "items-end",
  };

  const _align: string = useContext(CardGroupContext);

  return (
    <div
      className={`border-r border-gray-300 p-4 flex flex-col justify-center gap-1 last:border-r-0 ${itemAlignClass[_align]}`}
    >
      {children}
    </div>
  );
};
export default CardItem;
