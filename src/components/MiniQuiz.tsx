"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { type Locale } from "@/i18n/config";

type Props = {
  locale: Locale;
};

const questions = {
  he: [
    { q: "מה הכי חשוב לך בחיים?", options: ["חופש ועצמאות", "הצלחה והישגים", "שלווה והרמוניה", "שמחה ושפע"] },
    { q: "כשאתה מתמודד עם אתגר, אתה נוטה:", options: ["לקחת פיקוד ולהוביל", "לתכנן אסטרטגיה מנצחת", "לחפש איזון ופתרון שקט", "למצוא את הצד החיובי וליהנות"] },
    { q: "מה הפחד הכי גדול שלך?", options: ["לאבד את החופש שלי", "לא להצליח", "להיות לבד", "לפספס את החיים"] },
  ],
  en: [
    { q: "What matters most to you in life?", options: ["Freedom & independence", "Success & achievement", "Peace & harmony", "Joy & abundance"] },
    { q: "When facing a challenge, you tend to:", options: ["Take command and lead", "Plan a winning strategy", "Seek balance and quiet solutions", "Find the positive side and enjoy"] },
    { q: "What is your biggest fear?", options: ["Losing my freedom", "Not succeeding", "Being alone", "Missing out on life"] },
  ],
};

const results = {
  he: [
    { code: "E", name: "אדנות ומנהיגות", desc: "המנוע הראשי שלך הוא הובלה, חופש ועצמאות. אתה נולדת להנהיג ולפרוץ דרך." },
    { code: "A", name: "הישגיות והצלחה", desc: "המנוע הראשי שלך הוא הצלחה והישגים. אתה שואף תמיד לצמרת ולמצוינות." },
    { code: "T", name: "ביטחון והרמוניה", desc: "המנוע הראשי שלך הוא שלווה וביטחון. אתה יוצר הרמוניה בכל מקום." },
    { code: "P", name: "הנאה ושפע", desc: "המנוע הראשי שלך הוא שמחה ושפע. אתה מביא אור ויצירתיות לעולם." },
  ],
  en: [
    { code: "E", name: "Mastery & Leadership", desc: "Your main engine is leadership, freedom, and independence. You were born to lead and break through." },
    { code: "A", name: "Achievement & Success", desc: "Your main engine is success and achievement. You always strive for the top and excellence." },
    { code: "T", name: "Security & Harmony", desc: "Your main engine is peace and security. You create harmony everywhere you go." },
    { code: "P", name: "Pleasure & Abundance", desc: "Your main engine is joy and abundance. You bring light and creativity to the world." },
  ],
};

export function MiniQuiz({ locale }: Props) {
  const [step, setStep] = useState(0); // 0=intro, 1-3=questions, 4=result
  const [answers, setAnswers] = useState<number[]>([]);
  const qs = questions[locale];
  const rs = results[locale];

  function handleAnswer(optionIndex: number) {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);
    setStep(step + 1);
  }

  function getResult() {
    // Most common answer index determines the code
    const counts = [0, 0, 0, 0];
    answers.forEach(a => counts[a]++);
    const maxIndex = counts.indexOf(Math.max(...counts));
    return rs[maxIndex];
  }

  function reset() {
    setStep(0);
    setAnswers([]);
  }

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-navy to-indigo text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,160,78,0.05),transparent_70%)]" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div key="intro" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              <h2 className="text-2xl sm:text-3xl font-display font-bold mb-3">
                {locale === "he" ? "גלה איזה מנוע מניע אותך" : "Discover Which Engine Drives You"}
              </h2>
              <p className="text-white/60 mb-6">
                {locale === "he" ? "3 שאלות קצרות - 30 שניות - תוצאה מיידית" : "3 quick questions - 30 seconds - instant result"}
              </p>
              <button
                onClick={() => setStep(1)}
                className="bg-gold hover:bg-gold-hover text-navy font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,160,78,0.4)] hover:scale-105"
              >
                {locale === "he" ? "בוא נתחיל" : "Let's Start"}
              </button>
            </motion.div>
          )}

          {step >= 1 && step <= 3 && (
            <motion.div key={`q${step}`} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }}>
              {/* Progress */}
              <div className="flex gap-2 justify-center mb-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className={`w-16 h-1.5 rounded-full ${i <= step ? "bg-gold" : "bg-white/20"}`} />
                ))}
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold mb-8">
                {qs[step - 1].q}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {qs[step - 1].options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    className="bg-white/10 hover:bg-gold/20 border border-white/20 hover:border-gold text-white px-5 py-4 rounded-xl transition-all duration-200 text-sm hover:scale-[1.02]"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="result" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
              <div className="text-5xl font-display font-bold text-gold mb-2">{getResult().code}</div>
              <h3 className="text-xl font-display font-bold mb-2">{getResult().name}</h3>
              <p className="text-white/70 mb-6 max-w-md mx-auto">{getResult().desc}</p>
              <p className="text-xs text-white/40 mb-6">
                {locale === "he" ? "זהו רק טעימה - האבחון המלא חושף את הצופן השלם שלך" : "This is just a taste - the full assessment reveals your complete cipher"}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href={`/${locale}/programs`}
                  className="bg-gold hover:bg-gold-hover text-navy font-bold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(200,160,78,0.4)]"
                >
                  {locale === "he" ? "גלה את הצופן המלא" : "Discover Your Full Code"}
                </Link>
                <button onClick={reset} className="text-white/60 hover:text-white text-sm underline">
                  {locale === "he" ? "נסה שוב" : "Try Again"}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
