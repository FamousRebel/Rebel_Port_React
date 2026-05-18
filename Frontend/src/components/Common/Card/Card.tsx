import type { ReactNode } from "react";

const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="border border-gray-300 rounded-md p-4">{children}</div>
  );
};
export default Card;
