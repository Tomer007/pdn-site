"use client";

import { useState, useEffect } from "react";
import { type Locale } from "@/i18n/config";

type Props = { locale: Locale };

export function CountdownTimer({ locale }: Props) {
  // Next challenge starts in ~12 days from now (dynamic)
  const [target] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 12);
    d.setHours(20, 0, 0, 0);
    return d.getTime();
  });

  const [timeLeft, setTimeLeft] = useState({ days: 12, hours: 8, minutes: 30, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = target - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [target]);

  const labels = locale === "he"
    ? { days: "ימים", hours: "שעות", minutes: "דקות", seconds: "שניות", title: "האתגר הבא מתחיל בעוד", spots: "12 אנשים כבר נרשמו למחזור הקרוב" }
    : { days: "Days", hours: "Hours", minutes: "Min", seconds: "Sec", title: "Next Challenge Starts In", spots: "12 people already registered for the next cohort" };

  return (
    <div className="bg-navy text-white py-6 border-t border-white/10">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-sm text-gold font-bold mb-3">{labels.title}</p>
        <div className="flex justify-center gap-3 sm:gap-5 mb-3">
          {[
            { value: timeLeft.days, label: labels.days },
            { value: timeLeft.hours, label: labels.hours },
            { value: timeLeft.minutes, label: labels.minutes },
            { value: timeLeft.seconds, label: labels.seconds },
          ].map((item, i) => (
            <div key={i} className="bg-white/10 rounded-lg px-3 sm:px-4 py-2 min-w-[60px]">
              <div className="text-2xl sm:text-3xl font-bold font-display">{String(item.value).padStart(2, "0")}</div>
              <div className="text-[10px] text-white/60">{item.label}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-white/50">{labels.spots}</p>
      </div>
    </div>
  );
}
