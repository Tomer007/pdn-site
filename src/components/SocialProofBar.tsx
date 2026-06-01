"use client";

import { type Locale } from "@/i18n/config";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { FadeInView } from "@/components/animations/FadeInView";

type Props = {
  locale: Locale;
};

export function SocialProofBar({ locale }: Props) {
  const stats = [
    { value: 30, suffix: "+", label: { he: "שנות מחקר", en: "Years of Research" } },
    { value: 1000, suffix: "+", label: { he: "בוגרים", en: "Graduates" } },
    { value: 12, suffix: "", label: { he: "צפנים", en: "Ciphers" } },
    { value: 4, suffix: "", label: { he: "מסלולים", en: "Programs" } },
  ];

  return (
    <section className="py-10 bg-navy/5 border-y border-border/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="group">
                <div className="text-3xl sm:text-4xl font-bold text-navy">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={1.5} />
                </div>
                <p className="text-sm text-text-secondary mt-1 group-hover:text-gold transition-colors">
                  {stat.label[locale]}
                </p>
              </div>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
