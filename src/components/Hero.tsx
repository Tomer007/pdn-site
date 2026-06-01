"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { type Locale } from "@/i18n/config";
import { StarField } from "@/components/animations/StarField";
import { TypeWriter } from "@/components/animations/TypeWriter";
import { FloatingOrb } from "@/components/animations/FloatingOrb";

type HeroProps = {
  dict: Record<string, any>;
  locale: Locale;
};

export function Hero({ dict, locale }: HeroProps) {
  const typewriterWords = locale === "he"
    ? ["קריירה", "זוגיות", "ביטחון עצמי", "הגשמה", "משמעות"]
    : ["career", "relationships", "confidence", "fulfillment", "purpose"];

  return (
    <section className="relative bg-gradient-to-b from-[#0a0f1f] via-navy to-indigo text-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Background layers */}
      <div
        className="absolute inset-0 opacity-15 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/pnina.png')", filter: "blur(80px) saturate(0.2)" }}
        aria-hidden="true"
      />
      <StarField />

      {/* Text contrast overlay - stronger on mobile */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent sm:from-black/30 sm:via-black/10 sm:to-transparent" aria-hidden="true" />

      {/* Floating orbs for depth */}
      <FloatingOrb size={400} color="rgba(200,160,78,0.06)" className="top-1/4 start-1/4" delay={0} />
      <FloatingOrb size={300} color="rgba(46,53,89,0.3)" className="bottom-1/4 end-1/4" delay={2} />
      <FloatingOrb size={200} color="rgba(200,160,78,0.04)" className="top-1/2 end-1/3" delay={4} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-28 lg:py-36 w-full">
        <div className="max-w-3xl mx-auto text-center">
          {/* Animated headline */}
          <motion.h1
            className="text-2xl sm:text-4xl lg:text-6xl font-display font-bold leading-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {dict.hero.headline}
          </motion.h1>

          {/* Typewriter effect */}
          <motion.div
            className="text-lg sm:text-xl text-gold font-bold mb-8 h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {locale === "he" ? "נווט להצלחה ב" : "Navigate to success in "}
            <TypeWriter words={typewriterWords} className="text-white" />
          </motion.div>

          {/* Subheadline */}
          <motion.p
            className="text-base sm:text-lg text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {dict.hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          >
            <Link
              href={`/${locale}/programs`}
              className="group relative bg-gold hover:bg-gold-hover text-navy font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(200,160,78,0.5)] hover:scale-105 overflow-hidden"
            >
              {/* Shimmer effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative z-10">{dict.hero.cta_primary}</span>
            </Link>
            <Link
              href={`/${locale}/method`}
              className="border-2 border-white/20 hover:border-gold hover:text-gold text-white/90 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(200,160,78,0.15)] backdrop-blur-sm"
            >
              {dict.hero.cta_secondary}
            </Link>
          </motion.div>

          {/* Trust line */}
          <motion.p
            className="mt-8 text-xs text-white/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            {locale === "he"
              ? "30+ שנות מחקר  ·  פטנט בינלאומי  ·  1,000+ בוגרים"
              : "30+ years of research  ·  International patent  ·  1,000+ graduates"}
          </motion.p>

          {/* Scroll indicator - hidden on mobile */}
          <motion.div
            className="mt-12 justify-center hidden sm:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
            >
              <div className="w-1.5 h-3 bg-gold/60 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
