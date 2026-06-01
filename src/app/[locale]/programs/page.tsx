import { getDictionary } from "@/i18n/dictionaries";
import { type Locale } from "@/i18n/config";
import { ProgramsComparison } from "@/components/ProgramsComparison";
import { FeatureMatrix } from "@/components/FeatureMatrix";
import { FAQ } from "@/components/FAQ";
import { ProofSection } from "@/components/ProofSection";

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
