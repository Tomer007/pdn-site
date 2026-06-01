"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { type Locale } from "@/i18n/config";
import { StarField } from "@/components/animations/StarField";

type HeroProps = {
  dict: Record<string, any>;
  locale: Locale;
};

export function Hero({ dict, locale }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-[#0f1629] via-navy to-indigo text-white overflow-hidden min-h-[85vh] flex items-center">
      {/* Background image - cosmic/spiritual */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/pnina.png')", filter: "blur(60px) saturate(0.3)" }}
        aria-hidden="true"
      />

      {/* Animated star background */}
      <StarField />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/8 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 start-1/4 w-[300px] h-[300px] bg-indigo/30 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-28 lg:py-36 w-full">
        <div className="max-w-3xl mx-auto text-center">
          {/* Animated headline - responsive sizing */}
          <motion.h1
            className="text-2xl sm:text-4xl lg:text-6xl font-display font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {dict.hero.headline}
          </motion.h1>

          {/* Subheadline with delay */}
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {dict.hero.subheadline}
          </motion.p>

          {/* CTAs with stagger */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          >
            <Link
              href={`/${locale}/programs`}
              className="group relative bg-gold hover:bg-gold-hover text-navy font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,160,78,0.4)] hover:scale-105"
            >
              <span className="relative z-10">{dict.hero.cta_primary}</span>
            </Link>
            <Link
              href={`/${locale}/method`}
              className="border-2 border-white/30 hover:border-gold hover:text-gold text-white font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(200,160,78,0.2)]"
            >
              {dict.hero.cta_secondary}
            </Link>
          </motion.div>

          {/* Scroll indicator - hidden on mobile */}
          <motion.div
            className="mt-16 justify-center hidden sm:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
            >
              <div className="w-1.5 h-3 bg-gold/60 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
