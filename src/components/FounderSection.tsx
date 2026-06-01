"use client";

import Link from "next/link";
import Image from "next/image";
import { type Locale } from "@/i18n/config";
import { FadeInView } from "@/components/animations/FadeInView";

type Props = {
  dict: Record<string, any>;
  locale: Locale;
};

export function FounderSection({ dict, locale }: Props) {
  return (
    <section className="py-20 sm:py-28 bg-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
          {/* Photo with glow */}
          <FadeInView direction="right">
            <div className="relative">
              <div className="absolute inset-0 bg-gold/20 rounded-full blur-2xl scale-110" aria-hidden="true" />
              <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl ring-4 ring-gold/20">
                <Image
                  src="/images/pnina.png"
                  alt={dict.founder.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 208px, 256px"
                />
              </div>
            </div>
          </FadeInView>

          {/* Content */}
          <FadeInView direction="left" delay={0.2}>
            <div className="text-center md:text-start">
              <p className="text-sm text-gold font-bold mb-1 tracking-wide">
                {dict.founder.title}
              </p>
              <h2 className="text-2xl sm:text-3xl font-display font-bold mb-1">
                {dict.founder.name}
              </h2>
              <p className="text-sm text-text-secondary mb-5">
                {dict.founder.role}
              </p>
              <p className="text-text-secondary leading-relaxed mb-6 max-w-xl text-lg">
                {dict.founder.short_bio}
              </p>
              <Link
                href={`/${locale}/about`}
                className="inline-flex border-2 border-navy hover:bg-navy hover:text-white text-navy font-bold text-sm px-5 py-2.5 rounded-lg transition-all duration-300"
              >
                {dict.founder.cta}
              </Link>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
