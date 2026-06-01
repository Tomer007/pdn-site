"use client";

import { type Locale } from "@/i18n/config";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { FadeInView } from "@/components/animations/FadeInView";

type Props = { locale: Locale };

export function OutcomeStats({ locale }: Props) {
  const stats = [
    { value: 92, suffix: "%", label: { he: "שיפור בבהירות ומיקוד", en: "Improvement in clarity & focus" } },
    { value: 87, suffix: "%", label: { he: "שיפור בביטחון עצמי", en: "Improvement in self-confidence" } },
    { value: 78, suffix: "%", label: { he: "שיפור במערכות יחסים", en: "Improvement in relationships" } },
    { value: 95, suffix: "%", label: { he: "ממליצים לחברים", en: "Recommend to friends" } },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-paper to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-center mb-3">
            {locale === "he" ? "תוצאות מוכחות" : "Proven Results"}
          </h2>
          <p className="text-text-secondary text-center mb-10 text-sm">
            {locale === "he" ? "על פי משוב בוגרי השיטה" : "Based on graduate feedback"}
          </p>
        </FadeInView>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <FadeInView key={i} delay={i * 0.1}>
              <div className="text-center p-4 rounded-xl bg-white border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl sm:text-4xl font-bold text-gold mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={1.5} />
                </div>
                <p className="text-xs sm:text-sm text-text-secondary">{stat.label[locale]}</p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
