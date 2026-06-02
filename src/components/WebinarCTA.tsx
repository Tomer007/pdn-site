"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { type Locale } from "@/i18n/config";
import { FadeInView } from "@/components/animations/FadeInView";

type Props = { locale: Locale };

export function WebinarCTA({ locale }: Props) {
  const [email, setEmail] = useState("");
  const [registered, setRegistered] = useState(false);

  function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    if (email) setRegistered(true);
  }

  const content = locale === "he" ? {
    badge: "אירוע קרוב",
    title: "וובינר היכרות עם קוד המקור",
    subtitle: "בהנחייתי, פנינה אוהנה לובלצ'יק",
    date: "יום חמישי | 17.7 | 20:00",
    description: "אם גם בך יש קול פנימי שמבקש יותר... לא עוד מידע, אלא הבנה עמוקה. לא עוד פתרון מהיר, אלא מפגש עם עצמך. זה הרגע שלך להתחיל.",
    cta: "להרשמה חינמית",
    bonus: "הרשמה חינמית + גישה לספרון מתנה",
    success: "נרשמת בהצלחה! נשלח לך פרטים למייל.",
    placeholder: "כתובת אימייל",
  } : {
    badge: "Upcoming Event",
    title: "Introduction Webinar: Source Code",
    subtitle: "Hosted by Pnina Ohana Lublchik",
    date: "Thursday | July 17 | 8:00 PM",
    description: "If you too have an inner voice asking for more... not more information, but deep understanding. Not another quick fix, but a meeting with yourself. This is your moment to begin.",
    cta: "Register Free",
    bonus: "Free registration + access to gift booklet",
    success: "You're registered! We'll send details to your email.",
    placeholder: "Email address",
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-navy to-[#0f1629] text-white relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInView>
          <span className="inline-block bg-gold/20 text-gold text-[11px] font-bold px-3 py-1 rounded-full mb-4 leading-none whitespace-nowrap">
            {content.badge}
          </span>

          <h2 className="text-2xl sm:text-4xl font-display font-bold mb-2">
            {content.title}
          </h2>
          <p className="text-white/60 mb-1">{content.subtitle}</p>
          <p className="text-gold font-bold text-lg mb-4">{content.date}</p>
          <p className="text-white/70 mb-8 max-w-lg mx-auto leading-relaxed">
            {content.description}
          </p>

          {registered ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-success/20 border border-success/30 rounded-xl p-4 text-success font-bold"
            >
              {content.success}
            </motion.div>
          ) : (
            <form onSubmit={handleRegister} className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={content.placeholder}
                  required
                  className="flex-1 px-4 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-gold"
                  dir="ltr"
                />
                <button
                  type="submit"
                  className="bg-gold hover:bg-gold-hover text-navy font-bold px-6 py-3.5 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(200,160,78,0.4)] shrink-0"
                >
                  {content.cta}
                </button>
              </div>
              <p className="text-xs text-white/40 mt-3">{content.bonus}</p>
            </form>
          )}
        </FadeInView>
      </div>
    </section>
  );
}
