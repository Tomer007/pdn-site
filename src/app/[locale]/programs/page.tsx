import type { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import { type Locale } from "@/i18n/config";
import { ProgramsComparison } from "@/components/ProgramsComparison";
import { FeatureMatrix } from "@/components/FeatureMatrix";
import { FAQ } from "@/components/FAQ";
import { ProofSection } from "@/components/ProofSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = "https://pdn-site.onrender.com";
  const title = locale === "he" ? "המסלולים | PDN - קוד המקור" : "Programs | PDN - Source Code";
  const description = locale === "he"
    ? "השווה בין 3 מסלולים לגילוי קוד המקור שלך - לגלות, התמרה, ואתגר 21 יום. מצא את המסלול המתאים לך."
    : "Compare 3 programs to discover your Source Code - Discover, Transformation, and 21-Day Challenge. Find the right path for you.";
  return {
    title,
    description,
    openGraph: { title, description },
    alternates: { canonical: `${baseUrl}/${locale}/programs`, languages: { he: `${baseUrl}/he/programs`, en: `${baseUrl}/en/programs` } },
  };
}

export default async function ProgramsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <Breadcrumbs locale={locale} items={[{ label: dict.nav.programs }]} />

      {/* Hero */}
      <section className="bg-navy text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            {dict.programs.page_title}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            {dict.programs.page_subtitle}
          </p>
        </div>
      </section>

      {/* 3-Tier Comparison */}
      <ProgramsComparison dict={dict} locale={locale} />

      {/* Feature Matrix */}
      <FeatureMatrix dict={dict} locale={locale} />

      {/* FAQ */}
      <FAQ dict={dict} locale={locale} />

      {/* Social Proof */}
      <ProofSection dict={dict} locale={locale} />
    </>
  );
}
