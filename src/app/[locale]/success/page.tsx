import Link from "next/link";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type Testimonial = {
  name: { he: string; en: string };
  program: { he: string; en: string };
  quote: { he: string; en: string };
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: { he: "מיכל כ.", en: "Michal K." },
    program: { he: "מסלול התמרה", en: "Transformation" },
    quote: {
      he: "גילוי קוד המקור שלי שינה לי את החיים. הבנתי סוף סוף למה חזרתי על אותם דפוסים ואיך לשחרר אותם. היום אני מנווטת את חיי מתוך בהירות.",
      en: "Discovering my Source Code changed my life. I finally understood why I kept repeating the same patterns and how to release them. Today I navigate my life with clarity.",
    },
    rating: 5,
  },
  {
    name: { he: "דוד ר.", en: "David R." },
    program: { he: "אתגר 21 יום", en: "21-Day Challenge" },
    quote: {
      he: "האתגר נתן לי כלים מעשיים שאני משתמש בהם כל יום. המאמן היומי עזר לי להישאר ממוקד ולהגשים מטרה שדחיתי שנים.",
      en: "The challenge gave me practical tools I use every day. The daily coach helped me stay focused and achieve a goal I'd been postponing for years.",
    },
    rating: 5,
  },
  {
    name: { he: "שרה ל.", en: "Sarah L." },
    program: { he: "מסלול לגלות", en: "Discover" },
    quote: {
      he: "כבר מהאבחון הראשון הרגשתי שמישהו רואה אותי באמת. המפה האישית נתנה לי שפה חדשה להבין את עצמי ואת הסביבה.",
      en: "From the very first assessment I felt truly seen. The personal map gave me a new language to understand myself and my environment.",
    },
    rating: 5,
  },
  {
    name: { he: "יוסי מ.", en: "Yossi M." },
    program: { he: "מסלול התמרה", en: "Transformation" },
    quote: {
      he: "הקורסים פתחו לי עולם חדש. הבנתי את הפחדים שעצרו אותי בעסק ובזוגיות, ומאז הכל השתנה. ממליץ בחום.",
      en: "The courses opened a new world for me. I understood the fears that were holding me back in business and relationships, and since then everything changed. Highly recommend.",
    },
    rating: 5,
  },
  {
    name: { he: "רונית ב.", en: "Ronit B." },
    program: { he: "אתגר 21 יום", en: "21-Day Challenge" },
    quote: {
      he: "21 ימים שהפכו את הגישה שלי לחיים. למדתי לזהות את המנוע הראשי שלי ולפעול ממנו במקום מפחד. תודה פנינה!",
      en: "21 days that transformed my approach to life. I learned to identify my main engine and act from it instead of from fear. Thank you Pnina!",
    },
    rating: 5,
  },
  {
    name: { he: "אבי ש.", en: "Avi S." },
    program: { he: "מסלול לגלות", en: "Discover" },
    quote: {
      he: "חשבתי שזה יהיה עוד כלי גנרי, אבל האבחון היה מדויק להפליא. הצופן שלי הסביר דברים שלא הבנתי על עצמי 40 שנה.",
      en: "I thought it would be another generic tool, but the assessment was incredibly accurate. My code explained things I hadn't understood about myself for 40 years.",
    },
    rating: 5,
  },
];

export default async function SuccessPage({
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-display font-bold mb-3">
            {dict.proof.title}
          </h1>
          <p className="text-white/80">
            {dict.proof.subtitle}
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="border border-border rounded-xl p-6 bg-paper">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <span key={s} className="text-gold">★</span>
                  ))}
                </div>
                <p className="text-text-secondary italic mb-4 leading-relaxed">
                  &ldquo;{t.quote[locale]}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm">{t.name[locale]}</span>
                  <span className="text-xs text-text-secondary bg-white px-2 py-1 rounded">
                    {t.program[locale]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-12 bg-paper">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <video
            className="w-full aspect-video rounded-xl shadow-lg"
            controls
            preload="metadata"
            poster="/images/pnina.png"
          >
            <source src="/images/pdn-graduates-testimonials.mp4" type="video/mp4" />
          </video>
          <p className="text-sm text-text-secondary mt-3">
            {locale === "he" ? "בוגרי השיטה מספרים" : "Method graduates share their stories"}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-navy text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-xl font-display font-bold mb-4">
            {locale === "he" ? "מוכנים להתחיל את המסע שלכם?" : "Ready to start your journey?"}
          </h2>
          <Link
            href={`/${locale}/programs`}
            className="inline-flex bg-gold hover:bg-gold-hover text-navy font-bold px-8 py-3.5 rounded text-lg transition-colors"
          >
            {dict.nav.cta}
          </Link>
        </div>
      </section>
    </>
  );
}
