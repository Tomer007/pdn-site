"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function GlowText({ children, className = "" }: Props) {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <span className="relative z-10">{children}</span>
      <span
        className="absolute inset-0 blur-xl bg-gold/20 rounded-full -z-10"
        aria-hidden="true"
      />
    </motion.span>
  );
}
