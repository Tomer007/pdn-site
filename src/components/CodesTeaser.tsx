"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { type Locale } from "@/i18n/config";
import { FadeInView } from "@/components/animations/FadeInView";

type Props = {
  dict: Record<string, any>;
  locale: Locale;
};

export function CodesTeaser({ dict, locale }: Props) {
  const codes = [
    { key: "e", gradient: "from-red-500/10 to-orange-500/10", border: "border-red-400/40", glow: "hover:shadow-red-500/10" },
    { key: "a", gradient: "from-blue-500/10 to-cyan-500/10", border: "border-blue-400/40", glow: "hover:shadow-blue-500/10" },
    { key: "t", gradient: "from-green-500/10 to-emerald-500/10", border: "border-green-400/40", glow: "hover:shadow-green-500/10" },
    { key: "p", gradient: "from-purple-500/10 to-pink-500/10", border: "border-purple-400/40", glow: "hover:shadow-purple-500/10" },
  ];

  return (
    <section className="py-20 sm:py-28 bg-cosmic-subtle text-white relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-4xl font-display font-bold mb-3">
              {dict.codes.section_title}
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              {dict.codes.section_subtitle}
            </p>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {codes.map(({ key, gradient, border, glow }, index) => {
            const code = dict.codes[key];
            return (
              <FadeInView key={key} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`rounded-xl border p-6 text-center bg-gradient-to-br ${gradient} ${border} backdrop-blur-sm hover:shadow-xl ${glow} transition-shadow duration-300`}
                >
                  <div className="text-4xl font-display font-bold text-gold mb-1">
                    {code.letter}
                  </div>
                  <div className="text-[10px] text-white/50 uppercase tracking-widest mb-3">
                    {code.english}
                  </div>
                  <h3 className="font-bold text-sm mb-2 text-white">{code.name}</h3>
                  <p className="text-xs text-white/60 leading-relaxed">{code.meaning}</p>
                </motion.div>
              </FadeInView>
            );
          })}
        </div>

        <FadeInView delay={0.5}>
          <div className="text-center mt-10">
            <Link
              href={`/${locale}/codes`}
              className="inline-flex bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold text-sm px-6 py-3 rounded-lg border border-white/20 transition-all duration-300 hover:border-gold hover:shadow-[0_0_20px_rgba(200,160,78,0.2)]"
            >
              {dict.codes.cta}
            </Link>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
