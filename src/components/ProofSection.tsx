"use client";

import Link from "next/link";
import { type Locale } from "@/i18n/config";
import { FadeInView } from "@/components/animations/FadeInView";

type Props = {
  dict: Record<string, any>;
  locale: Locale;
};

const testimonials = [
  {
    he: "זה כאילו לפגוש מישהו יודע כל, שמראה באצבעו: הנה, זה השביל שלך, זה הנתיב שלך. פתאום פגשתי את עצמי במובן הכי פשוט. הפחדים הקטנים והגדולים. החוזקות. היכולות. זה היה מאיר עיניים, ומשנה חיים.",
    en: "It's like meeting someone who knows everything, pointing: here, this is your path. Suddenly I met myself in the simplest sense. The small and big fears. The strengths. The abilities. It was eye-opening, and life-changing.",
    name: { he: "שלמה פ.", en: "Shlomo P." },
    program: { he: "אבחון + קורס", en: "Assessment + Course" },
  },
  {
    he: "ברגע שהבנתי מי אני, מהן האמונות שעשויות להגביל אותי, לצד מהן המתנות שלי לעולם ומה פשוט קל לי וכיף לעשות - היום יום שלי פשוט נראה אחרת!",
    en: "The moment I understood who I am, what beliefs might limit me, alongside my gifts to the world and what's simply easy and fun for me - today my day simply looks different!",
    name: { he: "יוני ה.", en: "Yoni H." },
    program: { he: "התמרה", en: "Transformation" },
  },
  {
    he: "שיטת PDN, הכרת הצופן שפיתחת מאפשר לי לפעול מתוך החוזקות שלי, ולעשות התמרה כשאני פועל מתוך דפוסי עבר, ולהתקדם במטרה שהצבתי לעצמי ולממש את הייעוד שלי.",
    en: "The PDN method allows me to act from my strengths, to transform when I'm acting from past patterns, to advance toward my goal and fulfill my purpose.",
    name: { he: "אהרון ל.", en: "Aharon L." },
    program: { he: "התמרה", en: "Transformation" },
  },
  {
    he: "השיטה עושה מהפך בחיים של אנשים. אין ספק שלהכיר את עצמנו מזווית חדשה גורם לתחושת WOW של 'איך לא ידעתי את זה על עצמי?' עם התובנות החדשות, התחלתי להתנהל אחרת.",
    en: "The method makes a revolution in people's lives. Knowing ourselves from a new angle creates a WOW feeling of 'how didn't I know this about myself?' With new insights, I started behaving differently.",
    name: { he: "עופר ל.", en: "Ofer L." },
    program: { he: "קורס מלא", en: "Full Course" },
  },
  {
    he: "סדנת PDN אפשרה לי לקבל ולחבק את החוזקות שבי שקיימות בי מאז היוולדי. זאת חתיכת פזל מאוד משמעותית שגילויה מאפשר לי להרגיש שלמות, יציבות, חוסן ועשייה משמעותית.",
    en: "The PDN workshop allowed me to receive and embrace the strengths within me since birth. This is a very significant puzzle piece whose discovery allows me to feel wholeness, stability, resilience.",
    name: { he: "נילי ג.", en: "Nili G." },
    program: { he: "סדנה", en: "Workshop" },
  },
  {
    he: "בנס פגשתי את פנינה בצומת הכי קריטית בחיים שלי. בעזרת האבחון והקורס הבנתי מה הייעוד שלי, מה הפחדים שלי, ומה המתנות שלי. מדהים עד כמה הכלים האלה חשובים.",
    en: "By miracle I met Pnina at the most critical junction of my life. With the assessment and course I understood my purpose, my fears, and my gifts. Amazing how important these tools are.",
    name: { he: "שרה א.", en: "Sarah A." },
    program: { he: "אבחון + קורס", en: "Assessment + Course" },
  },
];

export function ProofSection({ dict, locale }: Props) {
  // Show 3 on homepage, link to /success for all
  const displayed = testimonials.slice(0, 3);

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInView>
          <h2 className="text-2xl sm:text-4xl font-display font-bold mb-3">
            {dict.proof.title}
          </h2>
          <p className="text-text-secondary mb-12 max-w-2xl mx-auto">
            {dict.proof.subtitle}
          </p>
        </FadeInView>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {displayed.map((testimonial, i) => (
            <FadeInView key={i} delay={i * 0.15}>
              <div className="border border-border rounded-2xl p-6 bg-paper card-hover text-start h-full flex flex-col">
                <div className="flex items-center gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-gold text-lg">&#9733;</span>
                  ))}
                </div>
                <p className="text-sm text-text-secondary italic mb-5 leading-relaxed flex-1">
                  &ldquo;{locale === "he" ? testimonial.he : testimonial.en}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-sm">
                      {testimonial.name[locale].charAt(0)}
                    </div>
                    <p className="text-sm font-bold">{testimonial.name[locale]}</p>
                  </div>
                  <span className="text-xs text-text-secondary bg-white px-2 py-1 rounded">
                    {testimonial.program[locale]}
                  </span>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>

        <FadeInView delay={0.5}>
          <Link
            href={`/${locale}/success`}
            className="inline-flex text-gold hover:underline font-bold text-lg group"
          >
            {dict.proof.cta}{" "}
            <span className="inline-block transition-transform group-hover:-translate-x-1 ms-1">&larr;</span>
          </Link>
        </FadeInView>
      </div>
    </section>
  );
}
