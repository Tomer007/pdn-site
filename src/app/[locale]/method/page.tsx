import Link from "next/link";
import { getDictionary } from "@/i18n/dictionaries";
import { type Locale } from "@/i18n/config";

const methodContent = {
  he: {
    title: "אודות השיטה",
    subtitle: "שיטת P.D.N - Personal Development Navigator",
    patent: "הרשומה כפטנט בישראל ובארה\"ב",
    intro: "השיטה מביאה כלי חדש ועוצמתי לעולם, את גילוי הצופן הייחודי להתפתחותו של האדם, המהווה נווט אישי להצלחה.",
    sections: [
      {
        title: "החדשנות",
        content: "החדשנות בשיטה הוא \"קוד המקור\" - צופן PDN נווט להתפתחות אישית, המאפשר לאדם להתמודד עם אתגרים שונים בחיים בקלות ולנווט חייו להצלחה. שביסודו מזהה את הפחדים השורשיים והחוזקות של הפרט ומעניק לו מפה אישית כיצד להשתחרר מהפחדים החוסמים אותו ולנווט דרכו להצלחה.",
      },
      {
        title: "GPS לחיים",
        content: "כלי שברגע שמגלים אותו מבינים שמקבלים מתנה ענקית לחיים מעין \"GPS לחיים\" המאפשר לאדם להגיע ליעד שבחר בהצלחה.",
      },
      {
        title: "הבסיס המדעי",
        content: "שיטת P.D.N היא כלי הערכה אישיותי-התנהגותי חדשני, המבוסס על מחקר תאורטי ומעשי רב שנים של מפתחת השיטה בשדה חקר תודעה וקבלת החלטות. השיטה מסייעת לאנשים להבין את מנעי ההתנהגות, נקודת המבט שלהם על העולם, סגנונות התקשורת שלהם, ומהן חוזקותיהם ומה מתנתם לעולם.",
      },
      {
        title: "המטרה",
        content: "מטרת השיטה למקסם את פוטנציאל הפרט, ולהעניק לו כלים עוצמתיים הנובעים מעוצמתו הפנימית על מנת לעמוד באתגרים וקבלת החלטות באופן האפקטיבי ביותר. לפעול מתודעה הגבוהה שלו ולא מתוך התודעה ההישרדותית שלו.",
      },
      {
        title: "תהליך ההתמרה",
        content: "תהליך למידה זה קרוי בשפת השיטה \"תהליך התמרה\". בתהליך זה האדם מגלה את צופן ההתמרה האישי שלו אשר יסייע לו לנווט חייו מתודעה גבוהה, לבחור נכון, להשתחרר מהפחד להרגיש חופשי ומאושר להעניק מתנתו לעולם ולהגשים מטרותיו וייעודו.",
      },
    ],
    vision_title: "חזון מרכז P.D.N",
    vision_core: "אמנת הליבה העומדת בבסיס החזון של מרכז PDN היא: \"שלכל אדם יש כישרון - מתנה ייחודית לתת ולהשפיע לטובה על העולם\".",
    vision_body: "המטרה העיקרית שלנו היא להעצים כל אדם לגלותו ולהשתמש ביעילות בצופן התודעה, לאפשר לו ניווט קל להצלחה, למימוש הפוטנציאל הייחודי שלו והגשמת ייעודו בדומה לשימוש באפליקציית ניווט GPS פנימי המנווט למסע החיים.",
    vision_global: "החזון של מרכז P.D.N להפיץ את העקרונות של השיטה בקנה מידה עולמי. אנו שואפים לייצר עולם הפועל מתוך סובלנות והבנה, בכך לתרום תרומתנו ליצור \"כוכב תודעה\" טוב יותר.",
    cta: "גלה את המסלול שלך",
  },
  en: {
    title: "About the Method",
    subtitle: "P.D.N Method - Personal Development Navigator",
    patent: "Registered Patent in Israel and the USA",
    intro: "The method brings a powerful new tool to the world - discovering the unique cipher for each person's development, serving as a personal navigator to success.",
    sections: [
      {
        title: "The Innovation",
        content: "The innovation in the method is the \"Source Code\" - a PDN cipher navigator for personal development, enabling a person to face life's challenges with ease and navigate their life to success. At its foundation is identifying the root fears and strengths of the individual, providing a personal map for releasing blocking fears and navigating the path to success.",
      },
      {
        title: "GPS for Life",
        content: "A tool that once discovered, you realize you've received an enormous gift for life - like a \"GPS for Life\" that enables a person to reach their chosen destination successfully.",
      },
      {
        title: "Scientific Foundation",
        content: "The P.D.N method is an innovative personality-behavioral assessment tool, based on years of theoretical and practical research by the method's developer in the field of consciousness research and decision-making. The method helps people understand their behavioral drivers, their worldview, communication styles, strengths, and their unique gift to the world.",
      },
      {
        title: "The Purpose",
        content: "The method's purpose is to maximize individual potential, providing powerful tools derived from one's inner strength to face challenges and make decisions most effectively. To operate from one's higher consciousness rather than survival consciousness.",
      },
      {
        title: "The Transformation Process",
        content: "This learning process is called \"The Transformation Process\" in the method's language. In this process, a person discovers their personal transformation cipher that helps them navigate life from higher consciousness, choose correctly, release fear, feel free and happy, give their gift to the world, and fulfill their goals and purpose.",
      },
    ],
    vision_title: "P.D.N Center Vision",
    vision_core: "The core charter at the foundation of PDN Center's vision is: \"Every person has a talent - a unique gift to give and positively influence the world.\"",
    vision_body: "Our main goal is to empower every person to discover and effectively use their consciousness cipher, enabling easy navigation to success, fulfillment of their unique potential and purpose - similar to using an internal GPS navigation app for life's journey.",
    vision_global: "PDN Center's vision is to spread the method's principles on a global scale. We aspire to create a world operating from tolerance and understanding, contributing to creating a better \"consciousness star.\"",
    cta: "Find Your Path",
  },
};

export default async function MethodPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const content = methodContent[locale];

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-3">
            {content.title}
          </h1>
          <p className="text-lg text-gold font-bold mb-2">{content.subtitle}</p>
          <p className="text-sm text-white/60">{content.patent}</p>
          <p className="text-white/80 mt-6 text-lg leading-relaxed">
            {content.intro}
          </p>
        </div>
      </section>

      {/* Method Sections */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {content.sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-xl sm:text-2xl font-display font-bold mb-3 text-navy">
                {section.title}
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 sm:py-20 bg-paper">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-display font-bold mb-6">
            {content.vision_title}
          </h2>
          <blockquote className="text-lg font-display italic text-navy mb-6 border-s-4 border-gold ps-4 text-start">
            {content.vision_core}
          </blockquote>
          <p className="text-text-secondary leading-relaxed mb-4">
            {content.vision_body}
          </p>
          <p className="text-text-secondary leading-relaxed">
            {content.vision_global}
          </p>
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
