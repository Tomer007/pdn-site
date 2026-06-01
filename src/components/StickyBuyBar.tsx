"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { type Locale } from "@/i18n/config";

type Props = {
  programName: string;
  price: number | null;
  ctaText: string;
  checkoutHref: string;
  locale: Locale;
};

export function StickyBuyBar({ programName, price, ctaText, checkoutHref, locale }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 400px
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-white border-t border-border shadow-lg sm:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <p className="text-sm font-bold truncate">{programName}</p>
          {price && (
            <p className="text-xs text-gold font-bold">₪{price.toLocaleString()}</p>
          )}
        </div>
        <Link
          href={checkoutHref}
          className="bg-gold hover:bg-gold-hover text-navy font-bold text-sm px-5 py-2.5 rounded transition-colors shrink-0"
        >
          {ctaText}
        </Link>
      </div>
    </div>
  );
}
