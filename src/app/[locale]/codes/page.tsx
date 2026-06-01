import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import { type Locale } from "@/i18n/config";
import { CodesAccordion } from "@/components/CodesAccordion";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = "https://pdn-site.onrender.com";
  const title = locale === "he" ? "12 הצפנים של קוד המקור | PDN" : "The 12 Ciphers of Source Code | PDN";
  const description = locale === "he"
    ? "גלה את 12 הצפנים של קוד המקור - ארבעה מושכים דומיננטיים (E-A-T-P) כפול שלוש אנרגיות התנעה. הכר את הצופן האישי שלך."
    : "Discover the 12 ciphers of Source Code - four dominant attractors (E-A-T-P) times three activation energies. Know your personal cipher.";
  return { title, description, alternates: { canonical: `${baseUrl}/${locale}/codes`, languages: { he: `${baseUrl}/he/codes`, en: `${baseUrl}/en/codes` } } };
}

type Code = {
  id: string;
  name: { he: string; en: string };
  description: { he: string; en: string };
  energy: { he: string; en: string };
};

type CodeGroup = {
  letter: string;
  name: { he: string; en: string };
  english: string;
  meaning: { he: string; en: string };
  color: string;
  bgGradient: string;
  fear: { he: string; en: string };
  codes: Code[];
};

const codeGroups: CodeGroup[] = [
  {
    letter: "E",
    name: { he: "אדנות ומנהיגות", en: "Mastery & Leadership" },
    english: "Empower",
    meaning: { he: "לנווט ולהנהיג את חיינו להגשמה ומשמעות", en: "Navigate and lead our lives to fulfillment and meaning" },
    color: "border-red-400",
    bgGradient: "from-red-50 to-orange-50",
    fear: { he: "הפחד השורשי: פחד משיעבוד - אובדן חופש ועצמאות", en: "Root fear: Fear of enslavement - loss of freedom and independence" },
    codes: [
      {
        id: "E1",
        name: { he: "אומץ והעזה", en: "Courage & Daring" },
        description: { he: "האנרגיה של יוזמה ופעולה. אנשים עם E1 דומיננטי הם חלוצים, אמיצים, ומוכנים לקחת סיכונים. הם מובילים מהחזית ומעוררים השראה באחרים לפעול.", en: "The energy of initiative and action. People with dominant E1 are pioneers, brave, and willing to take risks. They lead from the front and inspire others to act." },
        energy: { he: "אנרגיית התנעה", en: "Activation energy" },
      },
      {
        id: "E5",
        name: { he: "קבלה והנהגה", en: "Acceptance & Leadership" },
        description: { he: "האנרגיה של הנהגה מתוך קבלה. אנשים עם E5 דומיננטי מנהיגים דרך הקשבה, הכלה וחוכמה. הם יודעים מתי לפעול ומתי לקבל.", en: "The energy of leadership through acceptance. People with dominant E5 lead through listening, inclusion, and wisdom. They know when to act and when to accept." },
        energy: { he: "אנרגיית ייצוב", en: "Stabilizing energy" },
      },
      {
        id: "E9",
        name: { he: "חוכמת ההתנסות", en: "Wisdom of Experience" },
        description: { he: "האנרגיה של חוכמה מצטברת. אנשים עם E9 דומיננטי לומדים מכל חוויה, מפיקים תובנות עמוקות ומשתמשים בניסיון כמצפן לעתיד.", en: "The energy of accumulated wisdom. People with dominant E9 learn from every experience, derive deep insights, and use experience as a compass for the future." },
        energy: { he: "אנרגיית התמרה", en: "Transformation energy" },
      },
    ],
  },
  {
    letter: "P",
    name: { he: "הנאה ושפע", en: "Pleasure & Abundance" },
    english: "Pleasure",
    meaning: { he: "לנווט את חיינו לשמחה ושפע", en: "Navigate our lives to joy and abundance" },
    color: "border-purple-400",
    bgGradient: "from-purple-50 to-pink-50",
    fear: { he: "הפחד השורשי: פחד מסכנות - חשש מאובדן ביטחון ויציבות", en: "Root fear: Fear of danger - concern about losing security and stability" },
    codes: [
      {
        id: "P2",
        name: { he: "אפשור ויצירה", en: "Enabling & Creation" },
        description: { he: "האנרגיה של יצירתיות ופתיחות. אנשים עם P2 דומיננטי הם יוצרים, מאפשרים, ופותחים דלתות חדשות. הם רואים אפשרויות בכל מקום.", en: "The energy of creativity and openness. People with dominant P2 are creators, enablers, and open new doors. They see possibilities everywhere." },
        energy: { he: "אנרגיית התנעה", en: "Activation energy" },
      },
      {
        id: "P6",
        name: { he: "צמיחה והדרכה", en: "Growth & Guidance" },
        description: { he: "האנרגיה של טיפוח וצמיחה. אנשים עם P6 דומיננטי הם מדריכים טבעיים, מטפחים אחרים ומסייעים להם לצמוח ולפרוח.", en: "The energy of nurturing and growth. People with dominant P6 are natural guides, nurturing others and helping them grow and flourish." },
        energy: { he: "אנרגיית ייצוב", en: "Stabilizing energy" },
      },
      {
        id: "P10",
        name: { he: "שפע ונתינה", en: "Abundance & Giving" },
        description: { he: "האנרגיה של נדיבות ושפע. אנשים עם P10 דומיננטי חיים מתוך שפע, נותנים בנדיבות ומאמינים שככל שנותנים יותר - מקבלים יותר.", en: "The energy of generosity and abundance. People with dominant P10 live from abundance, give generously, and believe the more you give - the more you receive." },
        energy: { he: "אנרגיית התמרה", en: "Transformation energy" },
      },
    ],
  },
  {
    letter: "A",
    name: { he: "הישגיות והצלחה", en: "Achievement & Success" },
    english: "Achievement",
    meaning: { he: "לנווט את חיינו להצלחה ואושר", en: "Navigate our lives to success and happiness" },
    color: "border-blue-400",
    bgGradient: "from-blue-50 to-cyan-50",
    fear: { he: "הפחד השורשי: פחד מכישלון - חשש מטעויות ומאי-הצלחה", en: "Root fear: Fear of failure - concern about mistakes and not succeeding" },
    codes: [
      {
        id: "A3",
        name: { he: "תקשורת ותקווה", en: "Communication & Hope" },
        description: { he: "האנרגיה של חיבור ותקשורת. אנשים עם A3 דומיננטי הם מתקשרים מעולים, מחברים בין אנשים ומביאים תקווה ואופטימיות לסביבתם.", en: "The energy of connection and communication. People with dominant A3 are excellent communicators, connecting people and bringing hope and optimism to their environment." },
        energy: { he: "אנרגיית התנעה", en: "Activation energy" },
      },
      {
        id: "A7",
        name: { he: "תבונה והצלחה", en: "Wisdom & Success" },
        description: { he: "האנרגיה של תבונה אסטרטגית. אנשים עם A7 דומיננטי הם אסטרטגים טבעיים, מקבלים החלטות חכמות ומנווטים את דרכם להצלחה בתבונה.", en: "The energy of strategic wisdom. People with dominant A7 are natural strategists, making wise decisions and navigating their path to success with wisdom." },
        energy: { he: "אנרגיית ייצוב", en: "Stabilizing energy" },
      },
      {
        id: "A11",
        name: { he: "הארה וחדשנות", en: "Illumination & Innovation" },
        description: { he: "האנרגיה של חדשנות והארה. אנשים עם A11 דומיננטי הם חדשנים, רואים את העולם בדרך ייחודית ומביאים רעיונות פורצי דרך.", en: "The energy of innovation and illumination. People with dominant A11 are innovators, seeing the world in unique ways and bringing breakthrough ideas." },
        energy: { he: "אנרגיית התמרה", en: "Transformation energy" },
      },
    ],
  },
  {
    letter: "T",
    name: { he: "ביטחון והרמוניה", en: "Security & Harmony" },
    english: "Trust",
    meaning: { he: "לנווט את חיינו לשלווה והרמוניה", en: "Navigate our lives to peace and harmony" },
    color: "border-green-400",
    bgGradient: "from-green-50 to-emerald-50",
    fear: { he: "הפחד השורשי: פחד מבדידות - חשש מדחייה ומניתוק", en: "Root fear: Fear of loneliness - concern about rejection and disconnection" },
    codes: [
      {
        id: "T4",
        name: { he: "ביטחון והגנה", en: "Security & Protection" },
        description: { he: "האנרגיה של הגנה ויציבות. אנשים עם T4 דומיננטי הם שומרי הסף, מייצרים ביטחון לעצמם ולסביבתם ובונים יסודות יציבים.", en: "The energy of protection and stability. People with dominant T4 are guardians, creating security for themselves and their environment and building stable foundations." },
        energy: { he: "אנרגיית התנעה", en: "Activation energy" },
      },
      {
        id: "T8",
        name: { he: "צדק ושמירה", en: "Justice & Preservation" },
        description: { he: "האנרגיה של צדק ואיזון. אנשים עם T8 דומיננטי הם שומרי הצדק, מאזנים בין צרכים שונים ושומרים על הרמוניה במערכות יחסים.", en: "The energy of justice and balance. People with dominant T8 are keepers of justice, balancing different needs and maintaining harmony in relationships." },
        energy: { he: "אנרגיית ייצוב", en: "Stabilizing energy" },
      },
      {
        id: "T12",
        name: { he: "אחדות והרמוניה", en: "Unity & Harmony" },
        description: { he: "האנרגיה של אחדות ושלמות. אנשים עם T12 דומיננטי הם מאחדים, רואים את התמונה הגדולה ויוצרים הרמוניה בין כל חלקי החיים.", en: "The energy of unity and wholeness. People with dominant T12 are unifiers, seeing the big picture and creating harmony between all parts of life." },
        energy: { he: "אנרגיית התמרה", en: "Transformation energy" },
      },
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

      {/* Explanation */}
      <section className="py-12 bg-paper">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-text-secondary leading-relaxed mb-4">
            {locale === "he"
              ? "לכל אדם מינון שונה מקומבינציות אלו, בכך נוצרים אינסוף קומבינציות של \"קוד המקור\"."
              : "Each person has a different dosage of these combinations, creating infinite combinations of \"Source Code\"."}
          </p>
          <p className="text-text-secondary leading-relaxed">
            {locale === "he"
              ? "\"קוד המקור\" הוא כלי רב עוצמה, המקנה לאדם מפה אישית ודרך פעולה כיצד להשתחרר במהירות מהפחד ההישרדותי, שלרוב מקבע וחוסם את התקדמותו ומשפיע על איכות חייו ואת התוואי המהיר לפיתוח האישי ליצירת דפוס חדש, שישרת את התפתחותו להצלחה."
              : "\"Source Code\" is a powerful tool that provides a personal map and action plan for quickly releasing survival fear - which usually fixates and blocks progress and affects quality of life - and the fast track for personal development to create a new pattern that serves growth toward success."}
          </p>
        </div>
      </section>

      {/* Diagram */}
      <section className="py-8 bg-white">
        <div className="max-w-md mx-auto px-4">
          <Image
            src="/images/consciousness-star.png"
            alt={locale === "he" ? "כוכב התודעה - 12 הצפנים" : "Consciousness Star - 12 Ciphers"}
            width={600}
            height={436}
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* The 12 Codes - Accordion */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-center mb-12">
            {locale === "he" ? "ארבעת המושכים ו-12 הצפנים" : "The Four Attractors & 12 Ciphers"}
          </h2>
          <CodesAccordion codeGroups={codeGroups} locale={locale} />
        </div>
      </section>

      {/* Three Energies Explanation */}
      <section className="py-12 bg-paper">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-display font-bold text-center mb-6">
            {locale === "he" ? "שלוש אנרגיות ההתנעה" : "The Three Activation Energies"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 text-center border border-border">
              <div className="text-gold font-bold mb-1">{locale === "he" ? "אנרגיית התנעה" : "Activation"}</div>
              <p className="text-xs text-text-secondary">{locale === "he" ? "הכוח להתחיל, ליזום ולפעול" : "The power to start, initiate, and act"}</p>
              <p className="text-xs text-navy font-bold mt-2">E1, P2, A3, T4</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center border border-border">
              <div className="text-gold font-bold mb-1">{locale === "he" ? "אנרגיית ייצוב" : "Stabilizing"}</div>
              <p className="text-xs text-text-secondary">{locale === "he" ? "הכוח לייצב, לאזן ולשמר" : "The power to stabilize, balance, and preserve"}</p>
              <p className="text-xs text-navy font-bold mt-2">E5, P6, A7, T8</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center border border-border">
              <div className="text-gold font-bold mb-1">{locale === "he" ? "אנרגיית התמרה" : "Transformation"}</div>
              <p className="text-xs text-text-secondary">{locale === "he" ? "הכוח להתמיר, לחדש וליצור שינוי" : "The power to transform, renew, and create change"}</p>
              <p className="text-xs text-navy font-bold mt-2">E9, P10, A11, T12</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-navy text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-white/80 mb-2 text-lg font-display">
            {locale === "he"
              ? "השילוב הייחודי ביניהם יוצר את מפת הצופן האישית שלך"
              : "The unique combination between them creates your personal cipher map"}
          </p>
          <p className="text-white/60 mb-6 text-sm">
            {locale === "he"
              ? "גלה את הצופן שלך ונווט את חייך להצלחה"
              : "Discover your cipher and navigate your life to success"}
          </p>
          <Link
            href={`/${locale}/programs`}
            className="inline-flex bg-gold hover:bg-gold-hover text-navy font-bold px-8 py-3.5 rounded-lg text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,160,78,0.4)]"
          >
            {locale === "he" ? "גלה את הצופן שלך" : "Discover Your Code"}
          </Link>
        </div>
      </section>
    </>
  );
}
