import type React from "react";
import { ICONS, type IconName } from "./icons";
import { motion, type MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface IconsProps {
  name: IconName; // 图标名称
  size?: number | string; // 图标大小
  className?: string; // 图标类名
  color?: string; // 图标颜色
  onClick?: () => void; // 点击事件
  animated?: boolean; // 是否动画
  animationType?: "bounce" | "pulse" | "spin" | "slide-down" | "slide-up"; // 动画类型
  animationProps?: MotionProps; // 动画属性
}

const Icons = ({
  name,
  size = 24,
  color,
  className,
  onClick,
  animated = false,
  animationType = "bounce",
  animationProps,
}: IconsProps) => {
  const icon = ICONS[name];

  if (!icon) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  const getAnimationVariants = () => {
    switch (animationType) {
      case "bounce": // 上下跳动
        return {
          animate: {
            y: [0, 8, 0],
            transition: {
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
            },
          },
        };
      case "pulse": // 脉冲
        return {
          animate: {
            scale: [1, 1.1, 1],
            transition: {
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            },
          },
        };
      case "spin": // 旋转
        return {
          animate: {
            rotate: 360,
            transition: {
              duration: 2,
              ease: "linear",
              repeat: Infinity,
            },
          },
        };
      case "slide-down": // 下滑动
        return {
          animate: {
            y: [0, 12, 0],
            transition: {
              duration: 1.8,
              ease: "easeInOut",
              repeat: Infinity,
            },
          },
        };
      case "slide-up": // 上滑动
        return {
          animate: {
            y: [0, -12, 0],
            transition: {
              duration: 1.8,
              ease: "easeInOut",
              repeat: Infinity,
            },
          },
        };
      default:
        return {};
    }
  };

  const Container = animated ? motion.div : "span";
  const animationConfig = animated ? getAnimationVariants() : {};

  return (
    <Container
      className={cn(
        "cursor-pointer flex items-center justify-center transition-transform hover:scale-110",
        className,
      )}
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        color: color,
      }}
      {...animationConfig}
      {...animationProps}
    >
      {icon}
    </Container>
  );
};

export default Icons;
