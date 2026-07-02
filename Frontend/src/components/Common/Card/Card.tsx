import { cn } from "@/utils/shadcnUtils";
import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";

const cardVariants = cva(
  "group relative flex flex-col justify-center border border-gray-300 rounded-md p-6 bg-white transition-all duration-300",
  {
    variants: {
      cursor: {
        default: "",
        pointer: "cursor-pointer hover:-translate-y-1 hover:shadow-lg",
      },
    },
    defaultVariants: {
      cursor: "default",
    },
  },
);

const Card = ({
  children,
  className,
  cursor = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof cardVariants>) => {
  return (
    <div className={cn(cardVariants({ cursor, className }))} {...props}>
      {children}
    </div>
  );
};
export default Card;
