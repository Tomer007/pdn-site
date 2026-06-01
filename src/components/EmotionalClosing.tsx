"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { type Locale } from "@/i18n/config";

type Props = { locale: Locale };

export function EmotionalClosing({ locale }: Props) {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/pnina.png"
          alt=""
          fill
          className="object-cover opacity-10"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/95 to-navy/80" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {locale === "he"
            ? "הגיע הזמן לגלות את הנווט הפנימי שלך"
            : "It's Time to Discover Your Inner Navigator"}
        </motion.h2>

        <motion.p
          className="text-lg text-white/70 mb-8 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {locale === "he"
            ? "גלה את קוד המקור שלך והפוך את החיים ממסלול אקראי - לניווט מודע, מדויק ומשמעותי."
            : "Discover your Source Code and transform life from a random path - to conscious, precise, and meaningful navigation."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Link
            href={`/${locale}/programs`}
            className="inline-flex bg-gold hover:bg-gold-hover text-navy font-bold px-10 py-5 rounded-xl text-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(200,160,78,0.5)] hover:scale-105"
          >
            {locale === "he" ? "מכאן מתחילים" : "Start Here"}
          </Link>
        </motion.div>

        <motion.p
          className="mt-6 text-xs text-white/40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {locale === "he"
            ? "30+ שנות מחקר · פטנט בינלאומי · 1,000+ בוגרים מרוצים"
            : "30+ years of research · International patent · 1,000+ satisfied graduates"}
        </motion.p>
      </div>
    </section>
  );
}
