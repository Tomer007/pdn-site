import Link from "next/link";
import { type Locale } from "@/i18n/config";

type Props = {
  dict: Record<string, any>;
  locale: Locale;
};

export function ProgramsPreview({ dict, locale }: Props) {
  const programs = [
    { key: "discover", href: `/${locale}/programs/discover` },
    { key: "transformation", href: `/${locale}/programs/transformation` },
    { key: "challenge", href: `/${locale}/programs/challenge` },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-center mb-4">
          {dict.programs.section_title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {programs.map(({ key, href }) => {
            const program = dict.programs[key];
            const isPopular = key === "transformation";

            return (
              <div
                key={key}
                className={`relative rounded-lg border p-6 flex flex-col ${
                  isPopular
                    ? "border-gold shadow-lg ring-2 ring-gold/20"
                    : "border-border"
                }`}
              >
                {isPopular && (
                  <span className="absolute -top-3 start-1/2 -translate-x-1/2 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">
                    {dict.programs.popular_badge}
                  </span>
                )}

                <h3 className="text-xl font-display font-bold mb-1">
                  {program.name}
                </h3>
                <p className="text-sm text-text-secondary mb-4">
                  {program.subtitle}
                </p>
                <p className="text-sm text-text-secondary mb-4">
                  {program.description}
                </p>

                <ul className="flex-1 space-y-2 mb-6">
                  {program.includes.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-gold mt-0.5">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={href}
                  className={`block text-center font-bold py-3 rounded transition-colors ${
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

        <div className="text-center mt-8">
          <Link
            href={`/${locale}/programs`}
            className="text-gold hover:underline font-bold"
          >
            {dict.programs.compare_cta} ←
          </Link>
        </div>
      </div>
    </section>
  );
}
