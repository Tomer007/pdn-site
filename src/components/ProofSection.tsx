import Link from "next/link";
import { type Locale } from "@/i18n/config";

type Props = {
  dict: Record<string, any>;
  locale: Locale;
};

export function ProofSection({ dict, locale }: Props) {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-display font-bold mb-3">
          {dict.proof.title}
        </h2>
        <p className="text-text-secondary mb-10 max-w-2xl mx-auto">
          {dict.proof.subtitle}
        </p>

        {/* Testimonial cards placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="border border-border rounded-lg p-6 bg-paper"
            >
              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-gold text-sm">★</span>
                ))}
              </div>
              <p className="text-sm text-text-secondary italic mb-4">
                {locale === "he"
                  ? "הכלי הזה שינה לי את החיים. גיליתי את הנווט הפנימי שלי ומאז אני מנווט את חיי בביטחון."
                  : "This tool changed my life. I discovered my inner navigator and since then I navigate my life with confidence."}
              </p>
              <p className="text-sm font-bold">
                {locale === "he" ? `בוגר/ת ${i}` : `Graduate ${i}`}
              </p>
            </div>
          ))}
        </div>

        <Link
          href={`/${locale}/success`}
          className="inline-flex text-gold hover:underline font-bold"
        >
          {dict.proof.cta} ←
        </Link>
      </div>
    </section>
  );
}
