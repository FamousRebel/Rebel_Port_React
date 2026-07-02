import { cn } from "@/utils/shadcnUtils";

const CardHorizontalLine = ({
  className,
  ...props
}: {
  className?: string;
}) => {
  return (
    <span className={cn("w-full border-b border-gray-300 my-4", className)} />
  );
};
export default CardHorizontalLine;
