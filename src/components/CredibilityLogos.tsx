"use client";

import { type Locale } from "@/i18n/config";
import { FadeInView } from "@/components/animations/FadeInView";

type Props = { locale: Locale };

export function CredibilityLogos({ locale }: Props) {
  return (
    <section className="py-8 bg-white border-y border-border/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <p className="text-center text-xs text-text-secondary mb-4 uppercase tracking-wider">
            {locale === "he" ? "מוכר ומאושר" : "Recognized & Certified"}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-60">
            {/* Patent offices */}
            <div className="text-center">
              <div className="text-lg font-bold text-navy">IL Patent</div>
              <div className="text-[10px] text-text-secondary">{locale === "he" ? "פטנט ישראל" : "Israel Patent"}</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-navy">US Patent</div>
              <div className="text-[10px] text-text-secondary">{locale === "he" ? "פטנט ארה\"ב" : "US Patent"}</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-navy">30+</div>
              <div className="text-[10px] text-text-secondary">{locale === "he" ? "שנות מחקר" : "Years Research"}</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-navy">1,000+</div>
              <div className="text-[10px] text-text-secondary">{locale === "he" ? "בוגרים" : "Graduates"}</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-navy">PDN</div>
              <div className="text-[10px] text-text-secondary">{locale === "he" ? "שיטה ייחודית" : "Unique Method"}</div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
