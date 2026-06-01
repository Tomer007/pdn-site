"use client";

import Link from "next/link";
import { type Locale } from "@/i18n/config";
import { FadeInView } from "@/components/animations/FadeInView";

type Props = {
  dict: Record<string, any>;
  locale: Locale;
};

export function ProofSection({ dict, locale }: Props) {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInView>
          <h2 className="text-2xl sm:text-4xl font-display font-bold mb-3">
            {dict.proof.title}
          </h2>
          <p className="text-text-secondary mb-12 max-w-2xl mx-auto">
            {dict.proof.subtitle}
          </p>
        </FadeInView>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            {
              he: "גילוי קוד המקור שלי שינה לי את החיים. הבנתי סוף סוף למה חזרתי על אותם דפוסים ואיך לשחרר אותם. היום אני מנווטת את חיי מתוך בהירות.",
              en: "Discovering my Source Code changed my life. I finally understood why I kept repeating the same patterns and how to release them. Today I navigate my life with clarity.",
              name: { he: "מיכל כ.", en: "Michal K." },
              program: { he: "מסלול התמרה", en: "Transformation" },
            },
            {
              he: "האתגר נתן לי כלים מעשיים שאני משתמש בהם כל יום. המאמן היומי עזר לי להישאר ממוקד ולהגשים מטרה שדחיתי שנים.",
              en: "The challenge gave me practical tools I use every day. The daily coach helped me stay focused and achieve a goal I'd been postponing for years.",
              name: { he: "דוד ר.", en: "David R." },
              program: { he: "אתגר 21 יום", en: "21-Day Challenge" },
            },
            {
              he: "כבר מהאבחון הראשון הרגשתי שמישהו רואה אותי באמת. המפה האישית נתנה לי שפה חדשה להבין את עצמי ואת הסביבה.",
              en: "From the very first assessment I felt truly seen. The personal map gave me a new language to understand myself and my environment.",
              name: { he: "שרה ל.", en: "Sarah L." },
              program: { he: "מסלול לגלות", en: "Discover" },
            },
          ].map((testimonial, i) => (
            <FadeInView key={i} delay={i * 0.15}>
              <div className="border border-border rounded-2xl p-6 bg-paper card-hover text-start h-full flex flex-col">
                <div className="flex items-center gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-gold text-lg">★</span>
                  ))}
                </div>
                <p className="text-sm text-text-secondary italic mb-5 leading-relaxed flex-1">
                  &ldquo;{locale === "he" ? testimonial.he : testimonial.en}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-sm">
                      {testimonial.name[locale].charAt(0)}
                    </div>
                    <p className="text-sm font-bold">{testimonial.name[locale]}</p>
                  </div>
                  <span className="text-xs text-text-secondary bg-white px-2 py-1 rounded">
                    {testimonial.program[locale]}
                  </span>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>

        <FadeInView delay={0.5}>
          <Link
            href={`/${locale}/success`}
            className="inline-flex text-gold hover:underline font-bold text-lg group"
          >
            {dict.proof.cta}{" "}
            <span className="inline-block transition-transform group-hover:-translate-x-1 ms-1">←</span>
          </Link>
        </FadeInView>
      </div>
    </section>
  );
}
