import { getDictionary } from "@/i18n/dictionaries";
import { type Locale } from "@/i18n/config";
import { Hero } from "@/components/Hero";
import { SocialProofTicker } from "@/components/SocialProofTicker";
import { CredibilityLogos } from "@/components/CredibilityLogos";
import { SocialProofBar } from "@/components/SocialProofBar";
import { HomepageIntro } from "@/components/HomepageIntro";
import { MiniQuiz } from "@/components/MiniQuiz";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { ProgramsPreview } from "@/components/ProgramsPreview";
import { OutcomeStats } from "@/components/OutcomeStats";
import { CodesTeaser } from "@/components/CodesTeaser";
import { VideoTestimonials } from "@/components/VideoTestimonials";
import { MethodSection } from "@/components/MethodSection";
import { FounderSection } from "@/components/FounderSection";
import { ConsciousnessStar } from "@/components/ConsciousnessStar";
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
      <Hero dict={dict} locale={locale} />
      <SocialProofTicker locale={locale} />
      <CredibilityLogos locale={locale} />
      <SocialProofBar locale={locale} />
      <HomepageIntro dict={dict} locale={locale} />
      <MiniQuiz locale={locale} />
      <JourneyTimeline locale={locale} />
      <ProgramsPreview dict={dict} locale={locale} />
      <OutcomeStats locale={locale} />
      <CodesTeaser dict={dict} locale={locale} />
      <VideoTestimonials locale={locale} />
      <MethodSection dict={dict} locale={locale} />
      <FounderSection dict={dict} locale={locale} />
      <ConsciousnessStar dict={dict} locale={locale} />
      <ProofSection dict={dict} locale={locale} />
      <EmotionalClosing locale={locale} />
      <EmailCapture dict={dict} />
    </>
  );
}
