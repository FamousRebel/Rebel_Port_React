import React from "react";
import Icons, { type IconsProps } from "../Icons";
import { cn } from "@/utils/shadcnUtils";
import type { IconName } from "../Icons/icons";

interface CardChevronProps extends Omit<IconsProps, "name"> {
  name?: IconName;
}

const CardChevron = ({
  name = "chevronRight",
  size = 20,
  className,
}: CardChevronProps) => {
  return (
    <Icons
      name={name}
      size={size}
      color="#cccccc"
      className={cn("group-hover:scale-110 absolute right-4 top-4", className)}
    />
  );
};

export default CardChevron;
