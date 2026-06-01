import type { Metadata } from "next";
import { Frank_Ruhl_Libre, Heebo } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { CookieConsent } from "@/components/CookieConsent";
import { locales, localeConfig, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const frankRuhlLibre = Frank_Ruhl_Libre({
  variable: "--font-frank",
  subsets: ["latin", "hebrew"],
  weight: ["400", "500", "600", "700"],
});

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin", "hebrew"],
  weight: ["300", "400", "500", "600", "700"],
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const { dir } = localeConfig[locale];
  const dict = await getDictionary(locale);

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${frankRuhlLibre.variable} ${heebo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-paper text-ink">
        <a href="#main-content" className="skip-link">
          {locale === "he" ? "דלג לתוכן" : "Skip to content"}
        </a>
        <Navbar locale={locale} dict={dict} />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer locale={locale} dict={dict} />
        <WhatsAppButton />
        <BackToTop />
        <CookieConsent dict={dict} locale={locale} />
      </body>
    </html>
  );
}
