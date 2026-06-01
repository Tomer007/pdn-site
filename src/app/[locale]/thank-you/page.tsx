import Link from "next/link";
import type { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import { type Locale } from "@/i18n/config";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function ThankYouPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);

  return (
    <section className="py-20 sm:py-32 bg-white min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Success icon */}
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-success/10 flex items-center justify-center">
          <span className="text-4xl">✓</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-display font-bold mb-4">
          {locale === "he" ? "תודה על הרכישה!" : "Thank You for Your Purchase!"}
        </h1>

        <p className="text-lg text-text-secondary mb-6">
          {locale === "he"
            ? "ההרשמה שלך התקבלה בהצלחה. בדקות הקרובות תקבל מייל עם פרטי הגישה והקישור לאבחון."
            : "Your registration was received successfully. In the next few minutes you'll receive an email with access details and the assessment link."}
        </p>

        <div className="bg-paper border border-border rounded-xl p-6 mb-8 text-start">
          <h2 className="font-bold mb-3">
            {locale === "he" ? "מה קורה עכשיו?" : "What happens now?"}
          </h2>
          <ol className="space-y-3 text-sm text-text-secondary">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-gold text-navy font-bold flex items-center justify-center shrink-0 text-xs">1</span>
              <span>{locale === "he" ? "בדוק את המייל - קישור לאבחון נשלח אליך" : "Check your email - assessment link has been sent"}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-gold text-navy font-bold flex items-center justify-center shrink-0 text-xs">2</span>
              <span>{locale === "he" ? "מלא את האבחון (שאלון + הקלטת קול)" : "Complete the assessment (questionnaire + voice recording)"}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-gold text-navy font-bold flex items-center justify-center shrink-0 text-xs">3</span>
              <span>{locale === "he" ? "תוך שבוע תקבל את מפת \"קוד המקור\" האישית שלך" : "Within a week you'll receive your personal \"Source Code\" map"}</span>
            </li>
          </ol>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/${locale}`}
            className="border-2 border-navy hover:bg-navy hover:text-white text-navy font-bold px-6 py-3 rounded transition-colors"
          >
            {locale === "he" ? "חזרה לעמוד הבית" : "Back to Homepage"}
          </Link>
          <Link
            href={`/${locale}/method`}
            className="text-gold hover:underline font-bold px-6 py-3"
          >
            {locale === "he" ? "קרא על השיטה" : "Read About the Method"}
          </Link>
        </div>
      </div>
    </section>
  );
}
