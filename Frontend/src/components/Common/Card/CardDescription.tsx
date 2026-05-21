import { cn } from "@/lib/utils";

const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("text-sm text-[#666666] mt-3", className)}>
      {children}
    </div>
  );
};

export default CardDescription;
