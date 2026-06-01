"use client";

import { useState } from "react";

type Props = {
  dict: Record<string, any>;
};

export function EmailCapture({ dict }: Props) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // TODO: Connect to email service
      setSubmitted(true);
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-navy text-white">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xl sm:text-2xl font-display font-bold mb-2">
          {dict.email_capture.title}
        </h2>
        <p className="text-sm text-white/70 mb-6">
          {dict.email_capture.subtitle}
        </p>

        {submitted ? (
          <p className="text-gold font-bold">✔ {dict.common.success}</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={dict.email_capture.placeholder}
              className="flex-1 px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-gold"
              required
            />
            <button
              type="submit"
              className="bg-gold hover:bg-gold-hover text-navy font-bold px-6 py-3 rounded transition-colors shrink-0"
            >
              {dict.email_capture.button}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
