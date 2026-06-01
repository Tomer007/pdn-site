import { getDictionary } from "@/i18n/dictionaries";
import { type Locale } from "@/i18n/config";
import { Hero } from "@/components/Hero";
import { ProgramsPreview } from "@/components/ProgramsPreview";
import { CodesTeaser } from "@/components/CodesTeaser";
import { MethodSection } from "@/components/MethodSection";
import { FounderSection } from "@/components/FounderSection";
import { ProofSection } from "@/components/ProofSection";
import { EmailCapture } from "@/components/EmailCapture";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero dict={dict} locale={locale} />
      <ProgramsPreview dict={dict} locale={locale} />
      <CodesTeaser dict={dict} locale={locale} />
      <MethodSection dict={dict} locale={locale} />
      <FounderSection dict={dict} locale={locale} />
      <ProofSection dict={dict} locale={locale} />
      <EmailCapture dict={dict} />
    </>
  );
}
