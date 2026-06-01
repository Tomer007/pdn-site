"use client";

import { motion } from "framer-motion";

type Props = {
  size?: number;
  color?: string;
  delay?: number;
  className?: string;
};

export function FloatingOrb({ size = 200, color = "rgba(200,160,78,0.08)", delay = 0, className = "" }: Props) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      style={{ width: size, height: size, background: color }}
      animate={{
        y: [0, -20, 0, 20, 0],
        x: [0, 10, 0, -10, 0],
        scale: [1, 1.05, 1, 0.95, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 8,
        delay,
        ease: "easeInOut",
      }}
      aria-hidden="true"
    />
  );
}
