import Link from "next/link";
import { getDictionary } from "@/i18n/dictionaries";
import { type Locale } from "@/i18n/config";

type CodeGroup = {
  letter: string;
  name: { he: string; en: string };
  english: string;
  color: string;
  codes: { id: string; name: { he: string; en: string } }[];
};

const codeGroups: CodeGroup[] = [
  {
    letter: "E",
    name: { he: "אדנות ומנהיגות", en: "Mastery & Leadership" },
    english: "Empower",
    color: "border-red-400 bg-red-50",
    codes: [
      { id: "E1", name: { he: "אומץ והעזה", en: "Courage & Daring" } },
      { id: "E5", name: { he: "קבלה והנהגה", en: "Acceptance & Leadership" } },
      { id: "E9", name: { he: "חוכמת ההתנסות", en: "Wisdom of Experience" } },
    ],
  },
  {
    letter: "P",
    name: { he: "הנאה ושפע", en: "Pleasure & Abundance" },
    english: "Pleasure",
    color: "border-purple-400 bg-purple-50",
    codes: [
      { id: "P2", name: { he: "אפשור ויצירה", en: "Enabling & Creation" } },
      { id: "P6", name: { he: "צמיחה והדרכה", en: "Growth & Guidance" } },
      { id: "P10", name: { he: "שפע ונתינה", en: "Abundance & Giving" } },
    ],
  },
  {
    letter: "A",
    name: { he: "הישגיות והצלחה", en: "Achievement & Success" },
    english: "Achievement",
    color: "border-blue-400 bg-blue-50",
    codes: [
      { id: "A3", name: { he: "תקשורת ותקווה", en: "Communication & Hope" } },
      { id: "A7", name: { he: "תבונה והצלחה", en: "Wisdom & Success" } },
      { id: "A11", name: { he: "הארה וחדשנות", en: "Illumination & Innovation" } },
    ],
  },
  {
    letter: "T",
    name: { he: "ביטחון והרמוניה", en: "Security & Harmony" },
    english: "Trust",
    color: "border-green-400 bg-green-50",
    codes: [
      { id: "T4", name: { he: "ביטחון והגנה", en: "Security & Protection" } },
      { id: "T8", name: { he: "צדק ושמירה", en: "Justice & Preservation" } },
      { id: "T12", name: { he: "אחדות והרמוניה", en: "Unity & Harmony" } },
    ],
  },
];

export default async function CodesPage({
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
      <section className="bg-navy text-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            {locale === "he" ? "\"קוד המקור\" - 12 הצפנים" : "\"Source Code\" - The 12 Ciphers"}
          </h1>
          <p className="text-white/80 leading-relaxed max-w-2xl mx-auto">
            {locale === "he"
              ? "הקוד מורכב מארבעה \"מושכים דומיננטיים\" המכונים E-A-T-P. הם מהווים את המנועים הראשיים בצופן המלא. 4 המנועים במכפלת שלושת אנרגיות ההתנעה יוצרים 12 צפנים ראשיים."
              : "The code consists of four \"dominant attractors\" called E-A-T-P. They form the main engines in the full cipher. The 4 engines multiplied by three activation energies create 12 primary ciphers."}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-paper">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-text-secondary leading-relaxed">
            {locale === "he"
              ? "לכל אדם מינון שונה מקומבינציות אלו, בכך נוצרים אינסוף קומבינציות של \"קוד המקור\". \"קוד המקור\" הוא כלי רב עוצמה, המקנה לאדם מפה אישית ודרך פעולה כיצד להשתחרר במהירות מהפחד ההישרדותי ולנווט להצלחה."
              : "Each person has a different dosage of these combinations, creating infinite combinations of \"Source Code\". The \"Source Code\" is a powerful tool that provides a personal map and action plan for quickly releasing survival fear and navigating to success."}
          </p>
        </div>
      </section>

      {/* The 12 Codes Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {codeGroups.map((group) => (
              <div key={group.letter} className={`rounded-xl border-2 p-6 ${group.color}`}>
                {/* Group header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-display font-bold">{group.letter}</span>
                  <div>
                    <h2 className="font-bold text-lg">{group.name[locale]}</h2>
                    <p className="text-xs text-text-secondary uppercase tracking-wide">
                      {group.english}
                    </p>
                  </div>
                </div>

                {/* Individual codes */}
                <div className="space-y-3">
                  {group.codes.map((code) => (
                    <div key={code.id} className="flex items-center gap-3 bg-white/70 rounded-lg p-3">
                      <span className="text-sm font-bold text-navy bg-white rounded px-2 py-0.5 shadow-sm">
                        {code.id}
                      </span>
                      <span className="text-sm">{code.name[locale]}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-navy text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-white/80 mb-4">
            {locale === "he"
              ? "השילוב הייחודי ביניהם יוצר את מפת הצופן האישית שלך"
              : "The unique combination between them creates your personal cipher map"}
          </p>
          <Link
            href={`/${locale}/programs`}
            className="inline-flex bg-gold hover:bg-gold-hover text-navy font-bold px-8 py-3.5 rounded text-lg transition-colors"
          >
            {locale === "he" ? "גלה את הצופן שלך" : "Discover Your Code"}
          </Link>
        </div>
      </section>
    </>
  );
}
