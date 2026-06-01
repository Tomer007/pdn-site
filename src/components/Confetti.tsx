"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Confetti() {
  const [particles, setParticles] = useState<{ id: number; x: number; color: string; delay: number }[]>([]);

  useEffect(() => {
    const items = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: ["#C8A04E", "#222845", "#E8D5A0", "#FFD700", "#FFF"][Math.floor(Math.random() * 5)],
      delay: Math.random() * 0.5,
    }));
    setParticles(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute w-2 h-2 rounded-full"
          style={{ left: `${p.x}%`, backgroundColor: p.color }}
          initial={{ top: "-5%", rotate: 0, opacity: 1 }}
          animate={{ top: "105%", rotate: 720, opacity: 0 }}
          transition={{ duration: 2.5 + Math.random(), delay: p.delay, ease: "easeIn" }}
        />
      ))}
    </div>
  );
}
