"use client";

import Link from "next/link";
import { type Locale } from "@/i18n/config";
import { FadeInView } from "@/components/animations/FadeInView";

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
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #222845 1px, transparent 0)", backgroundSize: "40px 40px" }} aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-center mb-4">
            {dict.programs.section_title}
          </h2>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-14 md:px-0 -mx-4 px-4 md:mx-0 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none flex md:grid">
          {programs.map(({ key, href }, index) => {
            const program = dict.programs[key];
            const isPopular = key === "transformation";

            return (
              <FadeInView key={key} delay={index * 0.15}>
                <div
                  className={`relative rounded-2xl border p-6 sm:p-8 flex flex-col bg-white card-hover min-w-[280px] md:min-w-0 snap-center ${
                    isPopular
                      ? "border-gold shadow-xl ring-2 ring-gold/20 scale-[1.02]"
                      : "border-border shadow-sm"
                  }`}
                >
                  {isPopular && (
                    <span className="absolute -top-3.5 start-1/2 -translate-x-1/2 bg-gold text-navy text-xs font-bold px-4 py-1.5 rounded-full shadow-lg glow-gold">
                      {dict.programs.popular_badge}
                    </span>
                  )}

                  <h3 className="text-xl font-display font-bold mb-1 mt-2">
                    {program.name}
                  </h3>
                  <p className="text-sm text-text-secondary mb-2">
                    {program.subtitle}
                  </p>

                  {/* Price - bold and prominent */}
                  <div className="mb-3">
                    {key === "discover" && <span className="text-2xl font-bold text-navy">₪970</span>}
                    {key === "transformation" && <span className="text-2xl font-bold text-navy">₪1,800</span>}
                    {key === "challenge" && <span className="text-2xl font-bold text-navy">₪2,800</span>}
                  </div>

                  <p className="text-sm text-text-secondary mb-5">
                    {program.description}
                  </p>

                  <ul className="flex-1 space-y-2.5 mb-6">
                    {program.includes.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm">
                        <span className="text-gold mt-0.5 text-base">✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={href}
                    className={`block text-center font-bold py-3.5 rounded-lg transition-all duration-300 ${
                      isPopular
                        ? "bg-gold hover:bg-gold-hover text-navy glow-gold hover:scale-105"
                        : "border-2 border-navy hover:bg-navy hover:text-white text-navy"
                    }`}
                  >
                    {program.cta}
                  </Link>
                </div>
              </FadeInView>
            );
          })}
        </div>

        <FadeInView delay={0.5}>
          <div className="text-center mt-10">
            <Link
              href={`/${locale}/programs`}
              className="text-gold hover:underline font-bold text-lg group"
            >
              {dict.programs.compare_cta}{" "}
              <span className="inline-block transition-transform group-hover:-translate-x-1">←</span>
            </Link>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
