import { Card, CardItem } from "@/components/Common/Card";
import type { ReactNode } from "react";
import React, { createContext } from "react";

interface CardGroupProps {
  children: ReactNode;
  align?: "left" | "center" | "right";
  width?: string;
}

export const CardGroupContext = createContext("center");

const CardGroup = ({
  children,
  align = "center",
  width = "2xl",
}: CardGroupProps) => {
  const widthClass: Record<string, string> = {
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    full: "max-w-full",
    "1/2": "max-w-1/2",
    "1/3": "max-w-1/3",
  };

  return (
    <div
      className={`grid grid-cols-3 border border-gray-300 bg-white rounded-md w-full ${widthClass[width]} h-32`}
    >
      <CardGroupContext.Provider value={align}>
        {children}
      </CardGroupContext.Provider>
    </div>
  );
};

export default CardGroup;
