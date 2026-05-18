import type { ReactNode } from "react";

const CardContent = ({ children }: { children: ReactNode }) => {
  return <div className="p-4">{children}</div>;
};
export default CardContent;
