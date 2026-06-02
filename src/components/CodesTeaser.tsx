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
    { key: "e", gradient: "from-[#8B1A1A] to-[#C0392B]", shadow: "shadow-red-500/20" },
    { key: "a", gradient: "from-[#1A3A8B] to-[#2980B9]", shadow: "shadow-blue-500/20" },
    { key: "t", gradient: "from-[#1A6B3A] to-[#27AE60]", shadow: "shadow-green-500/20" },
    { key: "p", gradient: "from-[#6B1A8B] to-[#8E44AD]", shadow: "shadow-purple-500/20" },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#0f1629] text-white relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-4xl font-display font-bold mb-3 text-gradient-gold">
              {dict.codes.section_title}
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-sm">
              {dict.codes.section_subtitle}
            </p>
          </div>
        </FadeInView>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {codes.map(({ key, gradient, shadow }, index) => {
            const code = dict.codes[key];
            return (
              <FadeInView key={key} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -8 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`rounded-2xl bg-gradient-to-br ${gradient} p-5 sm:p-6 text-center cursor-pointer shadow-xl ${shadow} hover:shadow-2xl transition-shadow duration-300`}
                >
                  <div className="text-4xl sm:text-5xl font-display font-bold text-white/90 mb-2">
                    {code.letter}
                  </div>
                  <div className="text-[10px] sm:text-xs text-white/60 uppercase tracking-widest mb-3 font-bold">
                    {code.english}
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-white mb-2">{code.name}</h3>
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
              className="inline-flex bg-gold hover:bg-gold-hover text-navy font-bold text-sm px-8 py-3.5 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(200,160,78,0.4)]"
            >
              {dict.codes.cta}
            </Link>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
