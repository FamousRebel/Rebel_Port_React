import { cn } from "@/lib/utils";

const CardHorizontalLine = ({
  className,
  ...props
}: {
  className?: string;
}) => {
  return <span className={cn("border-b border-gray-300 my-4", className)} />;
};
export default CardHorizontalLine;
