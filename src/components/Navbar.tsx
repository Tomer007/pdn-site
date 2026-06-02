"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { type Locale } from "@/i18n/config";

type NavbarProps = {
  locale: Locale;
  dict: Record<string, any>;
};

export function Navbar({ locale, dict }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const otherLocale = locale === "he" ? "en" : "he";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: dict.nav.method, href: `/${locale}/method` },
    { label: dict.nav.programs, href: `/${locale}/programs` },
    { label: dict.nav.codes, href: `/${locale}/codes` },
    { label: dict.nav.success, href: `/${locale}/success` },
    { label: dict.nav.about, href: `/${locale}/about` },
    { label: dict.nav.articles, href: `/${locale}/articles` },
    { label: dict.nav.contact, href: `/${locale}/contact` },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-navy/95 backdrop-blur-md shadow-lg" : "bg-navy"
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <Image
              src="/images/pdn-logo-full.png"
              alt="P.D.N - נווט חייך להצלחה"
              width={180}
              height={41}
              className="h-9 sm:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/90 hover:text-gold transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA + Language Switch */}
          <div className="flex items-center gap-3">
            <Link
              href={`/${otherLocale}`}
              className="text-xs text-white/70 hover:text-white border border-white/30 rounded px-2 py-1 transition-colors"
            >
              {otherLocale === "he" ? "עב" : "EN"}
            </Link>
            <Link
              href={`/${locale}/programs`}
              className="hidden sm:inline-flex bg-gold hover:bg-gold-hover text-navy font-bold text-sm px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(200,160,78,0.3)]"
            >
              {dict.nav.cta}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden pb-4 border-t border-white/10 bg-navy/95 backdrop-blur-md rounded-b-xl">
            <div className="flex flex-col gap-2 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-white/90 hover:text-gold py-2 px-2 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={`/${locale}/programs`}
                onClick={() => setMobileOpen(false)}
                className="mt-2 bg-gold text-navy font-bold text-sm px-4 py-2.5 rounded-lg text-center"
              >
                {dict.nav.cta}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
