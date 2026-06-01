import Link from "next/link";
import { type Locale } from "@/i18n/config";

type HeroProps = {
  dict: Record<string, any>;
  locale: Locale;
};

export function Hero({ dict, locale }: HeroProps) {
  return (
    <section className="relative bg-navy text-white overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/90 to-indigo/80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6">
            {dict.hero.headline}
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            {dict.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/programs`}
              className="bg-gold hover:bg-gold-hover text-navy font-bold px-8 py-3.5 rounded text-lg transition-colors"
            >
              {dict.hero.cta_primary}
            </Link>
            <Link
              href={`/${locale}/method`}
              className="border-2 border-white/40 hover:border-gold hover:text-gold text-white font-bold px-8 py-3.5 rounded text-lg transition-colors"
            >
              {dict.hero.cta_secondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
