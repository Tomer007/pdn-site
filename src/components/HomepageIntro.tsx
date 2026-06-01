"use client";

import { type Locale } from "@/i18n/config";
import { FadeInView } from "@/components/animations/FadeInView";

type Props = {
  dict: Record<string, any>;
  locale: Locale;
};

export function HomepageIntro({ dict, locale }: Props) {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInView>
          <h2 className="text-2xl sm:text-3xl font-display font-bold mb-6">
            {dict.homepage_intro.title}
          </h2>
        </FadeInView>

        <FadeInView delay={0.1}>
          <p className="text-text-secondary leading-relaxed mb-6 text-lg">
            {dict.homepage_intro.body}
          </p>
        </FadeInView>

        <FadeInView delay={0.2}>
          <div className="bg-paper border border-gold/20 rounded-xl p-6 mt-6">
            <p className="text-text-secondary leading-relaxed mb-4">
              {dict.homepage_intro.ahava}
            </p>
            <p className="text-2xl font-display font-bold text-gold">
              {dict.homepage_intro.ahava_letters}
            </p>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
