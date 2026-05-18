import type { ReactNode } from "react";

const CardTitle = ({ children }: { children: ReactNode }) => {
  return <div className="text-2xl font-bold">{children}</div>;
};
export default CardTitle;
