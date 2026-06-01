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

      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <FadeInView>
          <h2 className="text-xl sm:text-2xl font-display font-bold mb-2">
            {dict.email_capture.title}
          </h2>
          <p className="text-sm text-white/60 mb-8">
            {dict.email_capture.subtitle}
          </p>

          {submitted ? (
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-gold font-bold text-lg"
            >
              ✦ {dict.common.success}
            </motion.p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={dict.email_capture.placeholder}
                className="flex-1 px-4 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 backdrop-blur-sm transition-all"
                required
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
