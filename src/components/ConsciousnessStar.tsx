"use client";

import Link from "next/link";
import { type Locale } from "@/i18n/config";
import { FadeInView } from "@/components/animations/FadeInView";
import { FloatingOrb } from "@/components/animations/FloatingOrb";

type Props = {
  dict: Record<string, any>;
  locale: Locale;
};

export function ConsciousnessStar({ dict, locale }: Props) {
  return (
    <section className="py-16 sm:py-20 bg-cosmic-subtle text-white relative overflow-hidden">
      <FloatingOrb size={300} color="rgba(200,160,78,0.05)" className="top-0 start-1/4" delay={1} />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInView>
          <h2 className="text-2xl sm:text-3xl font-display font-bold mb-3 text-gold">
            {dict.consciousness_star.title}
          </h2>
          <p className="text-white/70 mb-6">
            {dict.consciousness_star.subtitle}
          </p>
          <Link
            href={`/${locale}/codes`}
            className="inline-flex bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold text-sm px-6 py-3 rounded-lg border border-white/20 transition-all duration-300 hover:border-gold"
          >
            {dict.consciousness_star.cta}
          </Link>
        </FadeInView>
      </div>
    </section>
  );
}
