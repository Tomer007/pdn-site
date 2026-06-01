import Link from "next/link";
import { type Locale } from "@/i18n/config";

type Props = {
  dict: Record<string, any>;
  locale: Locale;
};

export function MethodSection({ dict, locale }: Props) {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-display font-bold mb-2">
            {dict.method.section_title}
          </h2>
          <p className="text-sm text-gold font-bold mb-6">
            {dict.method.section_subtitle}
          </p>
          <p className="text-text-secondary mb-4 leading-relaxed">
            {dict.method.description}
          </p>
          <p className="text-text-secondary mb-4 leading-relaxed">
            {dict.method.core}
          </p>
          <p className="text-ink font-medium italic mb-8">
            {dict.method.metaphor}
          </p>
          <Link
            href={`/${locale}/method`}
            className="inline-flex border-2 border-navy hover:bg-navy hover:text-white text-navy font-bold text-sm px-6 py-3 rounded transition-colors"
          >
            {dict.method.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
