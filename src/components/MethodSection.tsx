"use client";

import Link from "next/link";
import { type Locale } from "@/i18n/config";
import { FadeInView } from "@/components/animations/FadeInView";

type Props = {
  dict: Record<string, any>;
  locale: Locale;
};

export function MethodSection({ dict, locale }: Props) {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInView>
            <h2 className="text-2xl sm:text-4xl font-display font-bold mb-2">
              {dict.method.section_title}
            </h2>
            <p className="text-sm text-gold font-bold mb-8 tracking-wide">
              {dict.method.section_subtitle}
            </p>
          </FadeInView>

          <FadeInView delay={0.2}>
            <p className="text-text-secondary mb-5 leading-relaxed text-lg">
              {dict.method.description}
            </p>
          </FadeInView>

          <FadeInView delay={0.3}>
            <p className="text-text-secondary mb-5 leading-relaxed">
              {dict.method.core}
            </p>
          </FadeInView>

          <FadeInView delay={0.4}>
            <blockquote className="text-xl font-display italic text-navy my-8 px-6 py-4 border-s-4 border-gold bg-gold/5 rounded-e-lg text-start">
              {dict.method.metaphor}
            </blockquote>
          </FadeInView>

          <FadeInView delay={0.5}>
            <Link
              href={`/${locale}/method`}
              className="inline-flex border-2 border-navy hover:bg-navy hover:text-white text-navy font-bold text-sm px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              {dict.method.cta}
            </Link>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
