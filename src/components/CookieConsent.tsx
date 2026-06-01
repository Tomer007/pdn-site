"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type Locale } from "@/i18n/config";

type Props = {
  dict: Record<string, any>;
  locale: Locale;
};

export function CookieConsent({ dict, locale }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("pdn-cookie-consent");
    if (!consent) {
      setTimeout(() => setVisible(true), 2000);
    }
  }, []);

  function accept() {
    localStorage.setItem("pdn-cookie-consent", "accepted");
    setVisible(false);
  }

  function reject() {
    localStorage.setItem("pdn-cookie-consent", "rejected");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 inset-x-0 z-50 p-4"
        >
          <div className="max-w-xl mx-auto bg-navy text-white rounded-xl p-4 shadow-2xl border border-white/10 flex flex-col sm:flex-row items-center gap-3">
            <p className="text-sm text-white/80 flex-1">
              {dict.cookie_consent.message}
            </p>
            <div className="flex gap-2 shrink-0">
              <button
                onClick={reject}
                className="text-xs text-white/60 hover:text-white px-3 py-1.5 border border-white/20 rounded transition-colors"
              >
                {dict.cookie_consent.reject}
              </button>
              <button
                onClick={accept}
                className="text-xs bg-gold hover:bg-gold-hover text-navy font-bold px-4 py-1.5 rounded transition-colors"
              >
                {dict.cookie_consent.accept}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
