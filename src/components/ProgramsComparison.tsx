import Link from "next/link";
import { type Locale } from "@/i18n/config";

type Props = {
  dict: Record<string, any>;
  locale: Locale;
};

export function ProgramsComparison({ dict, locale }: Props) {
  const programs = [
    {
      key: "discover",
      price: 970,
      priceWithAddon: 1450,
      href: `/${locale}/programs/discover`,
    },
    {
      key: "transformation",
      price: 1800,
      priceWithAddon: 2280,
      href: `/${locale}/programs/transformation`,
    },
    {
      key: "challenge",
      price: null, // Price TBD
      priceWithAddon: null,
      href: `/${locale}/programs/challenge`,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {programs.map(({ key, price, href }) => {
            const program = dict.programs[key];
            const isPopular = key === "transformation";

            return (
              <div
                key={key}
                className={`relative rounded-xl border-2 p-6 sm:p-8 flex flex-col bg-white transition-shadow hover:shadow-lg ${
                  isPopular
                    ? "border-gold shadow-lg scale-[1.02] md:scale-105"
                    : "border-border"
                }`}
              >
                {/* Popular badge */}
                {isPopular && (
                  <div className="absolute -top-4 start-1/2 -translate-x-1/2">
                    <span className="bg-gold text-navy text-sm font-bold px-4 py-1.5 rounded-full shadow">
                      {dict.programs.popular_badge}
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-6 pt-2">
                  <h2 className="text-2xl font-display font-bold mb-1">
                    {program.name}
                  </h2>
                  <p className="text-sm text-text-secondary mb-4">
                    {program.subtitle}
                  </p>

                  {/* Price */}
                  <div className="mb-2">
                    {price ? (
                      <span className="text-4xl font-bold text-navy">
                        {dict.common.currency}
                        {price.toLocaleString()}
                      </span>
                    ) : (
                      <span className="text-2xl font-bold text-navy">
                        {locale === "he" ? "צרו קשר" : "Contact Us"}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-text-secondary">
                    {program.description}
                  </p>
                </div>

                {/* Includes */}
                <ul className="flex-1 space-y-3 mb-8">
                  {program.includes.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm">
                      <span className="text-gold text-base mt-0.5 shrink-0">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={href}
                  className={`block text-center font-bold py-3.5 rounded-lg text-base transition-colors ${
                    isPopular
                      ? "bg-gold hover:bg-gold-hover text-navy"
                      : "border-2 border-navy hover:bg-navy hover:text-white text-navy"
                  }`}
                >
                  {program.cta}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Reassurance */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-text-secondary">
          <span className="flex items-center gap-2">
            <span className="text-gold">🔒</span>
            {locale === "he" ? "תשלום מאובטח" : "Secure Payment"}
          </span>
          <span className="flex items-center gap-2">
            <span className="text-gold">🎁</span>
            {locale === "he" ? "אבחון מתנה" : "Free Assessment"}
          </span>
          <span className="flex items-center gap-2">
            <span className="text-gold">📅</span>
            {locale === "he" ? "גישה ל-180 יום" : "180-Day Access"}
          </span>
          <span className="flex items-center gap-2">
            <span className="text-gold">💳</span>
            {locale === "he" ? "אפשרות לתשלומים" : "Installments Available"}
          </span>
        </div>
      </div>
    </section>
  );
}
