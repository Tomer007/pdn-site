"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type Locale } from "@/i18n/config";

type Props = { locale: Locale };

const proofItems = {
  he: [
    "דוד מתל אביב הצטרף לאתגר 21 יום",
    "מיכל סיימה את האבחון וקיבלה את המפה שלה",
    "יוסי מירושלים התחיל את מסלול ההתמרה",
    "רונית גילתה שהמנוע שלה הוא E - אדנות",
    "אבי מחיפה השלים את קורס המנוע הראשי",
    "שרה הצטרפה למסלול לגלות",
    "עמית מנתניה קיבל את תוצאות האבחון",
    "נועה סיימה את אתגר 21 הימים בהצלחה",
  ],
  en: [
    "David from Tel Aviv joined the 21-Day Challenge",
    "Michal completed her assessment and received her map",
    "Yossi from Jerusalem started the Transformation program",
    "Ronit discovered her engine is E - Mastery",
    "Avi from Haifa completed the Main Engine course",
    "Sarah joined the Discover program",
    "Amit from Netanya received his assessment results",
    "Noa successfully completed the 21-Day Challenge",
  ],
};

export function SocialProofTicker({ locale }: Props) {
  const [current, setCurrent] = useState(0);
  const items = proofItems[locale];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className="bg-navy/5 border-y border-border/50 py-2.5 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={current}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-sm text-text-secondary"
          >
            <span className="text-gold">✦</span>{" "}
            {items[current]}
            <span className="text-xs text-text-secondary/60 ms-2">
              {locale === "he" ? "לפני דקות" : "minutes ago"}
            </span>
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
