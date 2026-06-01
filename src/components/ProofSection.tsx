"use client";

import Link from "next/link";
import { type Locale } from "@/i18n/config";
import { FadeInView } from "@/components/animations/FadeInView";

type Props = {
  dict: Record<string, any>;
  locale: Locale;
};

export function ProofSection({ dict, locale }: Props) {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInView>
          <h2 className="text-2xl sm:text-4xl font-display font-bold mb-3">
            {dict.proof.title}
          </h2>
          <p className="text-text-secondary mb-12 max-w-2xl mx-auto">
            {dict.proof.subtitle}
          </p>
        </FadeInView>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[1, 2, 3].map((i) => (
            <FadeInView key={i} delay={i * 0.15}>
              <div className="border border-border rounded-2xl p-6 bg-paper card-hover text-start">
                <div className="flex items-center gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-gold text-lg">★</span>
                  ))}
                </div>
                <p className="text-sm text-text-secondary italic mb-5 leading-relaxed">
                  {locale === "he"
                    ? "הכלי הזה שינה לי את החיים. גיליתי את הנווט הפנימי שלי ומאז אני מנווט את חיי בביטחון."
                    : "This tool changed my life. I discovered my inner navigator and since then I navigate my life with confidence."}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-sm">
                    {locale === "he" ? `ב${i}` : `G${i}`}
                  </div>
                  <p className="text-sm font-bold">
                    {locale === "he" ? `בוגר/ת ${i}` : `Graduate ${i}`}
                  </p>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>

        <FadeInView delay={0.5}>
          <Link
            href={`/${locale}/success`}
            className="inline-flex text-gold hover:underline font-bold text-lg group"
          >
            {dict.proof.cta}{" "}
            <span className="inline-block transition-transform group-hover:-translate-x-1 ms-1">←</span>
          </Link>
        </FadeInView>
      </div>
    </section>
  );
}
