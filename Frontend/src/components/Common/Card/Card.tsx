import type { ReactNode } from "react";

const Card = ({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={
        "flex flex-col justify-center border border-gray-300 rounded-md p-4 bg-white "
      }
    >
      {children}
    </div>
  );
};
export default Card;
