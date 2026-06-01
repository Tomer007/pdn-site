import Link from "next/link";
import Image from "next/image";
import { type Locale } from "@/i18n/config";

type FooterProps = {
  locale: Locale;
  dict: Record<string, any>;
};

export function Footer({ locale, dict }: FooterProps) {
  return (
    <footer className="bg-navy text-white">
      {/* Three Options CTA */}
      <div className="border-b border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-display font-bold mb-4">
            {dict.footer.three_options}
          </h3>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={`/${locale}/programs/challenge`}
              className="bg-gold hover:bg-gold-hover text-navy font-bold text-sm px-5 py-2.5 rounded transition-colors"
            >
              {dict.programs.challenge.name}
            </Link>
            <Link
              href={`/${locale}/programs/transformation`}
              className="border border-gold text-gold hover:bg-gold hover:text-navy font-bold text-sm px-5 py-2.5 rounded transition-colors"
            >
              {dict.programs.transformation.name}
            </Link>
            <Link
              href={`/${locale}/programs/discover`}
              className="border border-white/40 text-white hover:border-gold hover:text-gold font-bold text-sm px-5 py-2.5 rounded transition-colors"
            >
              {dict.programs.discover.name}
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo-nav.png"
              alt="PDN"
              width={120}
              height={27}
              className="h-7 w-auto mb-2"
            />
            <p className="mt-2 text-sm text-white/70">
              Personal Development Navigator
            </p>
            <p className="mt-1 text-xs text-white/50">
              {dict.footer.email_label}: center@pdn.co.il
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="font-bold text-sm mb-3">{dict.footer.sitemap}</h4>
            <div className="flex flex-col gap-2">
              <Link href={`/${locale}/method`} className="text-sm text-white/70 hover:text-gold">{dict.nav.method}</Link>
              <Link href={`/${locale}/programs`} className="text-sm text-white/70 hover:text-gold">{dict.nav.programs}</Link>
              <Link href={`/${locale}/codes`} className="text-sm text-white/70 hover:text-gold">{dict.nav.codes}</Link>
              <Link href={`/${locale}/about`} className="text-sm text-white/70 hover:text-gold">{dict.nav.about}</Link>
              <Link href={`/${locale}/articles`} className="text-sm text-white/70 hover:text-gold">{dict.nav.articles}</Link>
            </div>
          </div>

          {/* Social + Legal */}
          <div>
            <h4 className="font-bold text-sm mb-3">{dict.footer.follow_us}</h4>
            <div className="flex gap-4 mb-4">
              <a href="https://www.youtube.com/@PDNCenter" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-gold">YouTube</a>
              <a href="https://www.facebook.com/PDNCODE/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-gold">Facebook</a>
              <a href="https://katzr.net/550025" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-gold">WhatsApp</a>
            </div>
            <div className="flex gap-4 text-xs text-white/50">
              <Link href={`/${locale}/privacy`}>{dict.footer.privacy}</Link>
              <Link href={`/${locale}/terms`}>{dict.footer.terms}</Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/40">
          {dict.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
