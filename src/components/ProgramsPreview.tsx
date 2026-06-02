"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { type Locale } from "@/i18n/config";
import { FadeInView } from "@/components/animations/FadeInView";

type Props = {
  dict: Record<string, any>;
  locale: Locale;
};

export function ProgramsPreview({ dict, locale }: Props) {
  const [active, setActive] = useState(0);

  const programs = [
    { key: "discover", href: `/${locale}/programs/discover`, price: "₪970" },
    { key: "transformation", href: `/${locale}/programs/transformation`, price: "₪1,800" },
    { key: "challenge", href: `/${locale}/programs/challenge`, price: "₪2,800" },
  ];

  const current = programs[active];
  const program = dict.programs[current.key];
  const isPopular = current.key === "transformation";

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-center mb-10">
            {dict.programs.section_title}
          </h2>
        </FadeInView>

        {/* Tab buttons */}
        <div className="flex justify-center gap-2 mb-8">
          {programs.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-4 sm:px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${
                i === active
                  ? "bg-gold text-navy shadow-lg"
                  : "bg-paper text-text-secondary hover:bg-gold/10"
              }`}
            >
              {dict.programs[p.key].name}
            </button>
          ))}
        </div>

        {/* Single card display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className={`relative rounded-2xl border-2 p-8 sm:p-10 bg-white ${
              isPopular ? "border-gold shadow-xl ring-2 ring-gold/20" : "border-border shadow-md"
            }`}
          >
            {isPopular && (
              <span className="absolute -top-3.5 start-6 bg-gold text-navy text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                {dict.programs.popular_badge}
              </span>
            )}

            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-display font-bold mt-2 mb-1">
                {program.name}
              </h3>
              <p className="text-text-secondary mb-4">
                {program.subtitle}
              </p>
              <div className="text-4xl sm:text-5xl font-bold text-navy mb-2">
                {current.price}
              </div>
              <p className="text-sm text-text-secondary mb-8">
                {program.description}
              </p>
            </div>

            <ul className="space-y-3 mb-8 max-w-md mx-auto">
              {program.includes.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-base">
                  <span className="text-gold text-lg shrink-0">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="text-center">
              <Link
                href={current.href}
                className={`inline-block font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 ${
                  isPopular
                    ? "bg-gold hover:bg-gold-hover text-navy shadow-lg hover:shadow-[0_0_30px_rgba(200,160,78,0.4)] hover:scale-105"
                    : "border-2 border-navy hover:bg-navy hover:text-white text-navy"
                }`}
              >
                {program.cta}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {programs.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === active ? "bg-gold scale-125" : "bg-border"
              }`}
              aria-label={`Program ${i + 1}`}
            />
          ))}
        </div>

        <FadeInView delay={0.3}>
          <div className="text-center mt-8">
            <Link
              href={`/${locale}/programs`}
              className="text-gold hover:underline font-bold text-lg group"
            >
              {dict.programs.compare_cta}{" "}
              <span className="inline-block transition-transform group-hover:-translate-x-1">&larr;</span>
            </Link>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
