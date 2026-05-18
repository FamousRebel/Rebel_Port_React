import type { ReactNode } from "react";

const CardHeader = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-4 flex justify-between items-center">{children}</div>
  );
};
export default CardHeader;
