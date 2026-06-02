"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
    popular: false,
  },
  {
    name: { he: "התמרה עם קוד המקור", en: "Transformation" },
    price: 1800,
    tag: { he: "הכי פופולרי", en: "Most Popular" },
    features: { he: ["אבחון + מפה", "2 קורסים דיגיטליים", "59 שיעורים"], en: ["Assessment + map", "2 digital courses", "59 lessons"] },
    href: "transformation",
    popular: true,
  },
  {
    name: { he: "אתגר 21 יום", en: "21-Day Challenge" },
    price: 2800,
    tag: { he: "אינטנסיבי", en: "Intensive" },
    features: { he: ["הכל בהתמרה", "מאמן AI ל-21 יום", "4 מפגשי זום"], en: ["Everything in Transform", "AI coach for 21 days", "4 Zoom sessions"] },
    href: "challenge",
    popular: false,
  },
];

export function PackageCarousel({ locale }: Props) {
  const [active, setActive] = useState(1); // Start on popular

  const pkg = packages[active];

  return (
    <section className="py-16 sm:py-20 bg-paper">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-2">
              {locale === "he" ? "בחר את המסלול שלך" : "Choose Your Path"}
            </h2>
          </div>
        </FadeInView>

        {/* Tab buttons */}
        <div className="flex justify-center gap-2 mb-6">
          {packages.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-4 sm:px-5 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                i === active
                  ? "bg-gold text-navy shadow-md"
                  : "bg-white text-text-secondary border border-border hover:border-gold/50"
              }`}
            >
              {p.name[locale].split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Single card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`rounded-2xl border-2 p-8 sm:p-10 bg-white text-center ${
              pkg.popular ? "border-gold shadow-xl" : "border-border shadow-md"
            }`}
          >
            {pkg.popular && (
              <span className="inline-block bg-gold text-navy text-xs font-bold px-4 py-1 rounded-full mb-4">
                {pkg.tag[locale]}
              </span>
            )}
            {!pkg.popular && (
              <span className="inline-block text-xs text-text-secondary uppercase tracking-wider font-bold mb-4">
                {pkg.tag[locale]}
              </span>
            )}

            <h3 className="text-2xl font-display font-bold mb-2">{pkg.name[locale]}</h3>
            <div className="text-5xl font-bold text-navy mb-6">
              ₪{pkg.price.toLocaleString()}
            </div>

            <ul className="space-y-3 mb-8 text-start max-w-sm mx-auto">
              {pkg.features[locale].map((f, j) => (
                <li key={j} className="flex items-center gap-3 text-base">
                  <span className="text-gold text-lg">✦</span> {f}
                </li>
              ))}
            </ul>

            <Link
              href={`/${locale}/programs/${pkg.href}`}
              className="inline-block w-full sm:w-auto bg-gold hover:bg-gold-hover text-navy font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(200,160,78,0.4)]"
            >
              {locale === "he" ? "לפרטים ורכישה" : "Details & Purchase"}
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-5">
          {packages.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${i === active ? "bg-gold scale-125" : "bg-border"}`}
              aria-label={`Package ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
