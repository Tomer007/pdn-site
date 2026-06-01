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
        icon: "✦",
        content: "החדשנות בשיטה הוא \"קוד המקור\" - צופן PDN נווט להתפתחות אישית, המאפשר לאדם להתמודד עם אתגרים שונים בחיים בקלות ולנווט חייו להצלחה. שביסודו מזהה את הפחדים השורשיים והחוזקות של הפרט ומעניק לו מפה אישית כיצד להשתחרר מהפחדים החוסמים אותו ולנווט דרכו להצלחה.",
      },
      {
        title: "GPS לחיים",
        icon: "◈",
        content: "כלי שברגע שמגלים אותו מבינים שמקבלים מתנה ענקית לחיים מעין \"GPS לחיים\" המאפשר לאדם להגיע ליעד שבחר בהצלחה.",
      },
      {
        title: "הבסיס המדעי",
        icon: "◉",
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
    root_fears_title: "ארבעת הפחדים השורשיים",
    root_fears_subtitle: "שיטת P.D.N מזהה ארבעה פחדים שורשיים שחוסמים את ההתפתחות האישית:",
    root_fears: [
      { name: "פחד מסכנות", description: "פחד מלקחת סיכונים, מהלא נודע, מלצאת מאזור הנוחות" },
      { name: "פחד מבדידות", description: "פחד מדחייה, מניתוק, מלהיות לבד בדרך" },
      { name: "פחד מכישלון", description: "פחד מטעויות, מאי-הצלחה, מאכזבת אחרים" },
      { name: "פחד משיעבוד", description: "פחד מאובדן חופש, מתלות, ממחויבות מגבילה" },
    ],
    benefits_title: "איך שיטת P.D.N תעזור לך?",
    benefits_subtitle: "שיטת P.D.N היא כלי פורץ דרך להתפתחות אישית. הנה איך זה עובד:",
    benefits: [
      { step: "1", title: "גילוי \"קוד המקור\"", description: "הכרת עצמך בדרך חדשה, אבחון המנוע הפנימי שמניע אותך - כמו GPS, שמראה לך את הדרך הבטוחה והמהירה ליעד." },
      { step: "2", title: "מפחד לעוצמה", description: "שחרור פחדים. טכניקות ייחודיות שמאפשרות לשחרר חסמים ופחדים שמעכבים את ההתפתחות האישית שלך." },
      { step: "3", title: "מתודעה הישרדותית לתודעת שפע", description: "תכנות מחדש של התת-מודע להתחברות לעוצמות הפנימיות לניווט להצלחה." },
      { step: "4", title: "שיפור מערכות יחסים", description: "ללמוד שפה חדשה, כיצד ליצור תקשורת טובה עם כל אחד." },
      { step: "5", title: "לחיות מתוך עוצמה וחופש בחירה", description: "ללמוד כיצד לקבל החלטות מטיבות עבורך לבריאת מציאות חדשה." },
      { step: "6", title: "שיפור ביטחון עצמי", description: "לגלות את החוזקות והמתנות שלך, וללמוד איך למנף אותן להתמודד עם אתגרים ולהצלחה." },
      { step: "7", title: "ניווט להצלחה", description: "מפה לניווט חייך, תלמדו כיצד לעקוף מכשולים ולנוע קדימה מתוך ביטחון עצמי ועוצמה פנימית להשגת יעדך והגשמת ייעודך." },
    ],
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
    root_fears_title: "The Four Root Fears",
    root_fears_subtitle: "The P.D.N method identifies four root fears that block personal development:",
    root_fears: [
      { name: "Fear of Danger", description: "Fear of taking risks, of the unknown, of leaving the comfort zone" },
      { name: "Fear of Loneliness", description: "Fear of rejection, disconnection, of being alone on the path" },
      { name: "Fear of Failure", description: "Fear of mistakes, of not succeeding, of disappointing others" },
      { name: "Fear of Enslavement", description: "Fear of losing freedom, dependency, limiting commitment" },
    ],
    benefits_title: "How Will the P.D.N Method Help You?",
    benefits_subtitle: "The P.D.N method is a breakthrough tool for personal development. Here's how it works:",
    benefits: [
      { step: "1", title: "Discover Your \"Source Code\"", description: "Know yourself in a new way, assess the inner engine that drives you - like a GPS showing you the safest and fastest route to your destination." },
      { step: "2", title: "From Fear to Power", description: "Release fears. Unique techniques that allow you to release blocks and fears that hinder your personal development." },
      { step: "3", title: "From Survival to Abundance Consciousness", description: "Reprogram the subconscious to connect to inner strengths for navigating to success." },
      { step: "4", title: "Improve Relationships", description: "Learn a new language, how to create good communication with everyone." },
      { step: "5", title: "Live from Power and Freedom of Choice", description: "Learn how to make beneficial decisions for creating a new reality." },
      { step: "6", title: "Improve Self-Confidence", description: "Discover your strengths and gifts, and learn how to leverage them to face challenges and succeed." },
      { step: "7", title: "Navigate to Success", description: "A map for navigating your life, learn how to bypass obstacles and move forward with self-confidence and inner power to achieve your goals and fulfill your purpose." },
    ],
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
            <div key={i} className="flex items-start gap-4">
              <span className="text-2xl text-gold shrink-0 mt-1">{"icon" in section ? (section as any).icon : "✦"}</span>
              <div>
                <h2 className="text-xl sm:text-2xl font-display font-bold mb-3 text-navy">
                  {section.title}
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Root Fears */}
      <section className="py-16 sm:py-20 bg-paper">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-center mb-3">
            {content.root_fears_title}
          </h2>
          <p className="text-text-secondary text-center mb-8">
            {content.root_fears_subtitle}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {content.root_fears.map((fear, i) => (
              <div key={i} className="bg-white border border-border rounded-xl p-5 hover:border-error/30 transition-colors">
                <h3 className="font-bold text-navy mb-1">{fear.name}</h3>
                <p className="text-sm text-text-secondary">{fear.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7-Step Benefits */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-center mb-3">
            {content.benefits_title}
          </h2>
          <p className="text-text-secondary text-center mb-10">
            {content.benefits_subtitle}
          </p>
          <div className="space-y-5">
            {content.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold text-navy font-bold flex items-center justify-center shrink-0 text-sm shadow">
                  {benefit.step}
                </div>
                <div>
                  <h3 className="font-bold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
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
