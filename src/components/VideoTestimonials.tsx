"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { type Locale } from "@/i18n/config";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { FadeInView } from "@/components/animations/FadeInView";

type Props = { locale: Locale };

const videos = [
  { id: "uDHsOFU2pWY", quote: { he: "הכלי הזה שינה לי את החיים", en: "This tool changed my life" }, name: { he: "בוגרי השיטה", en: "Method Graduates" } },
  { id: "ZPmjocGI9Pw", quote: { he: "גיליתי את העוצמה הפנימית שלי", en: "I discovered my inner power" }, name: { he: "סיפור הצלחה", en: "Success Story" } },
  { id: "3C6MLpPHZho", quote: { he: "כמו GPS לחיים שלי", en: "Like a GPS for my life" }, name: { he: "חוויה אישית", en: "Personal Experience" } },
];

export function VideoTestimonials({ locale }: Props) {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 sm:py-24 bg-navy text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-center mb-10">
            {locale === "he" ? "בוגרי השיטה מספרים" : "Graduates Share Their Stories"}
          </h2>
        </FadeInView>

        {/* Active video */}
        <div className="max-w-3xl mx-auto mb-8">
          <YouTubeEmbed
            videoId={videos[active].id}
            title={videos[active].name[locale]}
            className="shadow-2xl"
          />
        </div>

        {/* Carousel dots + quotes */}
        <div className="flex justify-center gap-4 flex-wrap">
          {videos.map((video, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-4 py-3 rounded-xl text-sm transition-all duration-300 ${
                i === active
                  ? "bg-gold text-navy font-bold shadow-lg"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              <span className="block text-xs opacity-70">{video.name[locale]}</span>
              <span className="block mt-0.5">&ldquo;{video.quote[locale]}&rdquo;</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
