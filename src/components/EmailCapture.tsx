"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeInView } from "@/components/animations/FadeInView";

type Props = {
  dict: Record<string, any>;
};

export function EmailCapture({ dict }: Props) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-cosmic relative overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute top-0 start-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 end-1/4 w-48 h-48 bg-gold/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <FadeInView>
          {/* Book offer */}
          <div className="mb-6">
            <span className="inline-block bg-gold/20 text-gold text-xs font-bold px-3 py-1 rounded-full mb-3">
              {dict.email_capture.title === "הישאר מעודכן" ? "מתנה חינמית" : "Free Gift"}
            </span>
            <h2 className="text-xl sm:text-2xl font-display font-bold mb-2">
              {dict.email_capture.title === "הישאר מעודכן"
                ? "ספרון \"קוד המקור\" - השראה קטנה ללב גדול"
                : "\"Source Code\" Booklet - Small Inspiration for a Big Heart"}
            </h2>
            <p className="text-sm text-white/60 mb-2">
              {dict.email_capture.title === "הישאר מעודכן"
                ? "5 כלים עוצמתיים לתקופה זו - למעבר מפחד לחיים מתוך תודעת א.ה.ב.ה"
                : "5 powerful tools for this time - transitioning from fear to living from A.H.B.H consciousness"}
            </p>
            <p className="text-xs text-white/40">
              {dict.email_capture.subtitle}
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-success/20 border border-success/30 rounded-xl p-4"
            >
              <p className="text-success font-bold">
                {dict.email_capture.title === "הישאר מעודכן"
                  ? "✦ הספרון בדרך אליך למייל!"
                  : "✦ The booklet is on its way to your email!"}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={dict.email_capture.placeholder}
                className="flex-1 px-4 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 backdrop-blur-sm transition-all"
                required
                dir="ltr"
              />
              <button
                type="submit"
                className="bg-gold hover:bg-gold-hover text-navy font-bold px-6 py-3.5 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(200,160,78,0.4)] shrink-0"
              >
                {dict.email_capture.button}
              </button>
            </form>
          )}
        </FadeInView>
      </div>
    </section>
  );
}
