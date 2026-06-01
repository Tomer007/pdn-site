import Link from "next/link";
import Image from "next/image";
import { getDictionary } from "@/i18n/dictionaries";
import { type Locale } from "@/i18n/config";

const aboutContent = {
  he: {
    title: "דבר מפתחת השיטה",
    name: "פנינה אוהנה-לובלצ׳יק",
    paragraphs: [
      "במשך שלושת העשורים האחרונים הקדשתי את חיי לחיפוש אחר ה\"יהלום\" שבכל אדם – אותו כוח פנימי ועוצמה ייחודית המסייעים לו להגשים את ייעודו בחיים.",
      "מתוך חיפוש ומחקר מעמיק, גיליתי שכל אדם נושא בתוכו \"קוד מקור\" — צופן ומצפן פנימי להתמרת התודעה – מפת דרכים ייחודית המובילה להגשמה והצלחה של הפוטנציאל הייחודי הטמון בו.",
      "את התובנה הזו קיבלתי לראשונה בגיל 10 מסבתי האהובה, שהייתה מרפאה אנרגטית דגולה. היא אמרה לי: \"נכדתי האהובה, בכל אדם טמון יהלום, המהווה את המפתח לאושרו, לבריאותו ולייעודו. אנו, כבני אנוש, מצווים לעזור זה לזה לגלות אותו.\" משפט זה הפך לאבן דרך במסע חיי.",
      "מסעי התחיל מלימודי התואר הראשון בביולוגיה, והוראת הביולוגיה שם פגשתי את תלמידיי הרבים. לימים הפכתי להיות אשת עסקים. בימים הללו ליוויתי רבים להגשמה אישית ועסקית, מהם אנשי ונשות עסקים, מנהלים וצוותי מכירות וכן חברות רבות.",
      "השאלה שבערה בתוכי הייתה: אם יש דפוס חוזר לכישלון, האם יש גם דפוס להצלחה?",
      "בשנת 2000, סגרתי את עסקיי ויצאתי למסע מחקרי מרתק. במסע זה פגשתי דמויות מפתח מתחומי המדע והרוח, קראתי מחקרים רבים והתעמקתי בתרבויות ובתורות שונות. כך הגעתי לתובנה החשובה מכולן – לכל אדם יש \"קוד מקור\", מעין ניווט פנימי הדומה ל-GPS אישי, המנחה אותו להצלחה.",
      "\"קוד המקור\" פותח שער לעולם קסום, משתחרר מכבלי התודעה ההישרדותית ומאפשר לאדם לגלות את עוצמותיו ולנווט את חייו בקלות ובבהירות.",
      "קוד זה ניתן לגילוי באמצעות כלי אבחון חדשני שפיתחתי – ומתודולוגיית PDN, שנרשמה כפטנט עולמי.",
      "תודתי נתונה למשפחתי היקרה, שעמדה לצידי במסע המחקרי רב השנים באהבה ובסבלנות רבה. אני מודה גם לתלמידיי שהפכו לחלק בלתי נפרד ממשפחת P.D.N.",
      "תקוותי היא ששיטת P.D.N תסייע לכל אחד ואחת לגלות את צופנם האישי ולהגשים את ייעודם בקלות ובשמחה ולתרום לאושר עולמי.",
    ],
    quote: "אני מאחלת לכל מי שנמצא על המסע לגילוי הצופן הפנימי, דרך קסומה ומלאת משמעות.",
    cta: "גלה את המסלול שלך",
  },
  en: {
    title: "From the Method Developer",
    name: "Pnina Ohana-Lublchik",
    paragraphs: [
      "For the past three decades, I've dedicated my life to searching for the \"diamond\" within every person — that inner power and unique strength that helps them fulfill their life's purpose.",
      "Through deep search and research, I discovered that every person carries within them a \"Source Code\" — an inner cipher and compass for consciousness transformation — a unique roadmap leading to fulfillment and success of the unique potential within.",
      "I first received this insight at age 10 from my beloved grandmother, who was a renowned energy healer. She told me: \"My dear granddaughter, within every person lies a diamond, which is the key to their happiness, health, and purpose. We, as human beings, are commanded to help each other discover it.\" This sentence became a milestone in my life's journey.",
      "My journey began with a bachelor's degree in biology and teaching biology, where I met my many students. Later I became a businesswoman. During those days I guided many toward personal and business fulfillment — business people, managers, sales teams, and numerous companies.",
      "The burning question within me was: if there's a recurring pattern for failure, is there also a pattern for success?",
      "In 2000, I closed my businesses and embarked on a fascinating research journey. On this journey I met key figures from science and spirituality, read extensive research, and delved into various cultures and teachings. This led me to the most important insight of all — every person has a \"Source Code\", an inner navigation similar to a personal GPS, guiding them to success.",
      "The \"Source Code\" opens a gateway to a magical world, freeing from the chains of survival consciousness and enabling a person to discover their strengths and navigate their life with ease and clarity.",
      "This code can be discovered through an innovative assessment tool I developed — and the PDN methodology, registered as a worldwide patent.",
      "My gratitude goes to my dear family, who stood by my side throughout the years-long research journey with love and great patience. I'm also grateful to my students who became an integral part of the P.D.N family.",
      "My hope is that the P.D.N method will help every person discover their personal cipher and fulfill their purpose with ease and joy, contributing to global happiness.",
    ],
    quote: "I wish everyone on the journey to discovering their inner cipher a magical and meaningful path.",
    cta: "Find Your Path",
  },
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const content = aboutContent[locale];

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-display font-bold mb-3">
            {content.title}
          </h1>
          <p className="text-xl text-gold font-bold">{content.name}</p>
        </div>
      </section>

      {/* Photo + Bio */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Photo */}
          <div className="w-40 h-40 mx-auto mb-10 rounded-full overflow-hidden shadow-lg relative">
            <Image
              src="/images/pnina.png"
              alt={content.name}
              fill
              className="object-cover"
              sizes="160px"
              priority
            />
          </div>

          {/* Bio paragraphs */}
          <div className="space-y-5">
            {content.paragraphs.map((p, i) => (
              <p key={i} className="text-text-secondary leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="mt-10 border-s-4 border-gold ps-4 text-lg font-display italic text-navy">
            {content.quote}
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-navy text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <Link
            href={`/${locale}/programs`}
            className="inline-flex bg-gold hover:bg-gold-hover text-navy font-bold px-8 py-3.5 rounded text-lg transition-colors"
          >
            {content.cta}
          </Link>
        </div>
      </section>
    </>
  );
}
