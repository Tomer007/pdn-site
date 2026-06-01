"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (progress < 2) return null;

  return (
    <motion.div
      className="fixed top-0 start-0 end-0 h-[3px] bg-gold/80 z-[60] origin-left"
      style={{ scaleX: progress / 100 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    />
  );
}
