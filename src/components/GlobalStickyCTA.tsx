"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { type Locale } from "@/i18n/config";

type Props = { locale: Locale; label: string };

export function GlobalStickyCTA({ locale, label }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-navy/95 backdrop-blur-md border-t border-gold/20 p-3 safe-bottom">
      <Link
        href={`/${locale}/programs`}
        className="block w-full bg-gold hover:bg-gold-hover text-navy font-bold text-center py-3.5 rounded-lg text-base shadow-lg"
      >
        {label}
      </Link>
    </div>
  );
}
