import Link from "next/link";
import Image from "next/image";
import { type Locale } from "@/i18n/config";

type Props = {
  dict: Record<string, any>;
  locale: Locale;
};

export function FounderSection({ dict, locale }: Props) {
  return (
    <section className="py-16 sm:py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Photo */}
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shrink-0 shadow-lg relative">
            <Image
              src="/images/pnina.png"
              alt={dict.founder.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 192px, 224px"
            />
          </div>

          {/* Content */}
          <div className="text-center md:text-start">
            <p className="text-sm text-gold font-bold mb-1">
              {dict.founder.title}
            </p>
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-1">
              {dict.founder.name}
            </h2>
            <p className="text-sm text-text-secondary mb-4">
              {dict.founder.role}
            </p>
            <p className="text-text-secondary leading-relaxed mb-6 max-w-xl">
              {dict.founder.short_bio}
            </p>
            <Link
              href={`/${locale}/about`}
              className="inline-flex border-2 border-navy hover:bg-navy hover:text-white text-navy font-bold text-sm px-5 py-2.5 rounded transition-colors"
            >
              {dict.founder.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
