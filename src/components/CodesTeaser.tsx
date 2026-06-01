import Link from "next/link";
import { type Locale } from "@/i18n/config";

type Props = {
  dict: Record<string, any>;
  locale: Locale;
};

export function CodesTeaser({ dict, locale }: Props) {
  const codes = [
    { key: "e", color: "bg-red-500/10 border-red-500/30" },
    { key: "a", color: "bg-blue-500/10 border-blue-500/30" },
    { key: "t", color: "bg-green-500/10 border-green-500/30" },
    { key: "p", color: "bg-purple-500/10 border-purple-500/30" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-display font-bold mb-3">
            {dict.codes.section_title}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            {dict.codes.section_subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {codes.map(({ key, color }) => {
            const code = dict.codes[key];
            return (
              <div
                key={key}
                className={`rounded-lg border p-5 text-center ${color}`}
              >
                <div className="text-3xl font-display font-bold text-navy mb-1">
                  {code.letter}
                </div>
                <div className="text-xs text-text-secondary uppercase tracking-wide mb-2">
                  {code.english}
                </div>
                <h3 className="font-bold text-sm mb-2">{code.name}</h3>
                <p className="text-xs text-text-secondary">{code.meaning}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <Link
            href={`/${locale}/codes`}
            className="inline-flex bg-navy hover:bg-indigo text-white font-bold text-sm px-6 py-3 rounded transition-colors"
          >
            {dict.codes.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
