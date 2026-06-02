"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { type Locale } from "@/i18n/config";

type Props = { locale: Locale };

export function EmotionalHook({ locale }: Props) {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <motion.p
          className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-navy leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {locale === "he"
            ? "האם אתה מרגיש שיש בך הרבה יותר ממה שאתה חי עכשיו?"
            : "Do you feel there's so much more within you than you're living right now?"}
        </motion.p>
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            href={`/${locale}/programs`}
            className="inline-flex bg-gold hover:bg-gold-hover text-navy font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,160,78,0.4)] hover:scale-105"
          >
            {locale === "he" ? "הגיע הזמן לגלות" : "It's Time to Discover"}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
