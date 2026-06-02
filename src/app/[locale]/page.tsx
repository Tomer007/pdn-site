import { getDictionary } from "@/i18n/dictionaries";
import { type Locale } from "@/i18n/config";
import { Hero } from "@/components/Hero";
import { CredibilityLogos } from "@/components/CredibilityLogos";
import { HomepageIntro } from "@/components/HomepageIntro";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { ProgramsPreview } from "@/components/ProgramsPreview";
import { OutcomeStats } from "@/components/OutcomeStats";
import { CodesTeaser } from "@/components/CodesTeaser";
import { VideoTestimonials } from "@/components/VideoTestimonials";
import { FounderSection } from "@/components/FounderSection";
import { ProofSection } from "@/components/ProofSection";
import { EmotionalClosing } from "@/components/EmotionalClosing";
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
      {/* 1. Hook — clear value prop, ONE primary CTA */}
      <Hero dict={dict} locale={locale} />

      {/* 2. Trust — immediate credibility */}
      <CredibilityLogos locale={locale} />

      {/* 3. What is it — simple explanation */}
      <HomepageIntro dict={dict} locale={locale} />

      {/* 4. How it works — clear path */}
      <JourneyTimeline locale={locale} />

      {/* 5. Choose — programs (one at a time) */}
      <ProgramsPreview dict={dict} locale={locale} />

      {/* 6. Results — proof it works */}
      <OutcomeStats locale={locale} />

      {/* 7. The 4 codes — what makes it unique */}
      <CodesTeaser dict={dict} locale={locale} />

      {/* 8. See it in action — video */}
      <VideoTestimonials locale={locale} />

      {/* 9. Who created it — founder trust */}
      <FounderSection dict={dict} locale={locale} />

      {/* 10. Social proof — real graduates */}
      <ProofSection dict={dict} locale={locale} />

      {/* 11. Final CTA — emotional close */}
      <EmotionalClosing locale={locale} />

      {/* 12. Lead capture — free booklet */}
      <EmailCapture dict={dict} />
    </>
  );
}
