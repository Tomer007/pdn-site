"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { type Locale } from "@/i18n/config";
import { FadeInView } from "@/components/animations/FadeInView";

type Props = { locale: Locale };

const packages = [
  {
    name: { he: "לגלות את קוד המקור", en: "Discover Source Code" },
    price: 970,
    tag: { he: "התחלה", en: "Starter" },
    features: { he: ["אבחון אישי", "מפת קוד המקור"], en: ["Personal assessment", "Source Code map"] },
    href: "discover",
    color: "border-blue-300 bg-blue-50/50",
  },
  {
    name: { he: "התמרה עם קוד המקור", en: "Transformation" },
    price: 1800,
    tag: { he: "הכי פופולרי", en: "Most Popular" },
    features: { he: ["אבחון + מפה", "2 קורסים דיגיטליים", "59 שיעורים"], en: ["Assessment + map", "2 digital courses", "59 lessons"] },
    href: "transformation",
    color: "border-gold bg-gold/5 ring-2 ring-gold/20",
    popular: true,
  },
  {
    name: { he: "אתגר 21 יום", en: "21-Day Challenge" },
    price: 2800,
    tag: { he: "אינטנסיבי", en: "Intensive" },
    features: { he: ["הכל בהתמרה", "מאמן AI ל-21 יום", "4 מפגשי זום"], en: ["Everything in Transform", "AI coach for 21 days", "4 Zoom sessions"] },
    href: "challenge",
    color: "border-purple-300 bg-purple-50/50",
  },
];

export function PackageCarousel({ locale }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scrollLeft() {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  }
  function scrollRight() {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  }

  return (
    <section className="py-16 sm:py-20 bg-paper">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-2">
              {locale === "he" ? "בחר את המסלול שלך" : "Choose Your Path"}
            </h2>
            <p className="text-text-secondary text-sm">
              {locale === "he" ? "גלול לצדדים לראות את כל המסלולים" : "Scroll to see all programs"}
            </p>
          </div>
        </FadeInView>

        {/* Scroll buttons */}
        <div className="relative">
          <button onClick={scrollLeft} className="absolute start-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-navy hover:bg-gold hover:text-white transition-colors hidden sm:flex" aria-label="Scroll left">
            &lsaquo;
          </button>
          <button onClick={scrollRight} className="absolute end-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-navy hover:bg-gold hover:text-white transition-colors hidden sm:flex" aria-label="Scroll right">
            &rsaquo;
          </button>

          {/* Carousel */}
          <div ref={scrollRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                className={`min-w-[85vw] sm:min-w-[400px] md:min-w-[450px] flex-shrink-0 snap-center rounded-2xl border-2 p-8 sm:p-10 ${pkg.color} relative`}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 start-4 bg-gold text-navy text-xs font-bold px-4 py-1.5 rounded-full shadow">
                    {pkg.tag[locale]}
                  </span>
                )}
                {!pkg.popular && (
                  <span className="text-[11px] text-text-secondary uppercase tracking-wider font-bold">
                    {pkg.tag[locale]}
                  </span>
                )}

                <h3 className="text-xl sm:text-2xl font-display font-bold mt-3 mb-2">{pkg.name[locale]}</h3>
                <div className="text-4xl sm:text-5xl font-bold text-navy mb-6">
                  ₪{pkg.price.toLocaleString()}
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features[locale].map((f, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-base text-text-secondary">
                      <span className="text-gold text-lg">✦</span> {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/${locale}/programs/${pkg.href}`}
                  className={`block text-center font-bold py-4 rounded-lg text-lg transition-all ${
                    pkg.popular
                      ? "bg-gold hover:bg-gold-hover text-navy shadow-md"
                      : "border-2 border-navy text-navy hover:bg-navy hover:text-white"
                  }`}
                >
                  {locale === "he" ? "לפרטים ורכישה" : "Details & Purchase"}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
