import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale } from "@/i18n/config";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const articles: Record<string, {
  title: { he: string; en: string };
  content: { he: string[]; en: string[] };
}> = {
  "everyone-is-unique": {
    title: { he: "כל אחד הוא יחיד ומיוחד וחשוב לעולם", en: "Everyone is Unique and Important to the World" },
    content: {
      he: [
        "אתחיל מאמירה של המנטור רובין שארמה: \"יש לך משהו להציע שאף אחד אחר לא יכול להציע, וזה מה שעושה אותך מיוחד\".",
        "תמיד הייתי מאמינה נחרצת בכוחו של הפוטנציאל האנושי. אני מאמינה שלכולנו יש את היכולת להגיע לגדולות, ליצור דברים יפים ולחולל שינוי אמיתי בעולם. אבל כדי לעשות זאת, עלינו קודם כל להאמין בעצמנו וביכולות שלנו. לכולנו יש את היכולת לעשות שינוי בכוח מתנותינו ולהתמיר אנשים רק מעצם נתינתן.",
        "אז אם אי פעם מצאתם את עצמכם מפקפקים בערך שלכם או מפקפקים במה שיש לכם להציע, זכרו שאתם מיוחדים וייחודיים, ושהעולם זקוק למתנות שלכם.",
        "קחו את הזמן כדי לגלות מה עושה אתכם מיוחדים. גלו את הצופן המיוחד שלכם וממה אתם באמת נלהבים. חבקו את הכישרונות שלכם ושתפו אותם עם העולם. אתם אף פעם לא יודעים עד כמה אתם יכולים להשפיע עד שאתם מנסים.",
        "הנה כמה עצות פשוטות איך להפוך את הענקת מתנתכם לעולם להרגל:",
        "1. התחל/י ברישום בספר ההתמרות שלך, הגדר את המתנות/הכישרונות במושך הדומיננטי בצופן שלך.\n2. בחר/י מתוכן את אלו שקל לך להעניק ללא מאמץ.\n3. החלט/י במודע - למי את/ה מעניקים אותם כל יום והענק/י אותן.",
        "אנא, יקרות ויקרים, זכרו לתת מתנתכם/ן לעולם. היא עשויה להציל נפשות רבות.",
        "וכפי שאמרו חז\"ל: \"כל המציל נפש אחת כאילו הציל עולם ומלואו\".",
        "באהבה ובהתמרה, פנינה",
      ],
      en: [
        "I'll start with a quote from mentor Robin Sharma: \"You have something to offer that no one else can, and that's what makes you special.\"",
        "I've always been a firm believer in the power of human potential. I believe we all have the ability to achieve greatness, create beautiful things, and make a real difference in the world. But to do so, we must first believe in ourselves and our abilities. We all have the ability to make a change through the power of our gifts.",
        "So if you've ever found yourself doubting your worth or questioning what you have to offer, remember that you are special and unique, and the world needs your gifts.",
        "Take the time to discover what makes you special. Discover your unique code and what you're truly passionate about. Embrace your talents and share them with the world. You never know how much you can impact until you try.",
        "Here are some simple tips for making giving your gift to the world a habit:",
        "1. Start by writing in your transformation journal, define the gifts/talents in your dominant attractor.\n2. Choose those that are easy for you to give effortlessly.\n3. Consciously decide - to whom are you giving them every day.",
        "Please, dear ones, remember to give your gift to the world. It may save many lives.",
        "As our sages said: \"Whoever saves one life, it is as if they saved the entire world.\"",
        "With love and transformation, Pnina",
      ],
    },
  },
  "world-as-our-thoughts": {
    title: { he: "העולם כיציר מחשבותינו", en: "The World as a Creation of Our Thoughts" },
    content: {
      he: [
        "האם אי פעם עצרתם לשקול את כוחן של המחשבות והאמונות שלכם?",
        "לפי אלברט איינשטיין, \"העולם כפי שיצרנו אותו הוא תהליך של החשיבה שלנו. לא ניתן לשנותו מבלי לשנות את חשיבתנו\".",
        "המחשבות שלנו מעצבות את המציאות שלנו. כשאנחנו חושבים מחשבות חיוביות ומעצימות, אנחנו יוצרים מציאות חיובית. כשאנחנו נתפסים בדפוסי חשיבה שליליים, אנחנו יוצרים מציאות מגבילה.",
        "שיטת PDN מלמדת אותנו לזהות את דפוסי החשיבה שלנו - את הפחדים השורשיים שמנווטים את ההחלטות שלנו - ולהתמיר אותם לדפוסים חדשים שמשרתים את ההצלחה שלנו.",
        "באהבה ובהתמרה, פנינה",
      ],
      en: [
        "Have you ever stopped to consider the power of your thoughts and beliefs?",
        "According to Albert Einstein, \"The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.\"",
        "Our thoughts shape our reality. When we think positive and empowering thoughts, we create a positive reality. When we get caught in negative thinking patterns, we create a limiting reality.",
        "The PDN method teaches us to identify our thinking patterns - the root fears that navigate our decisions - and transform them into new patterns that serve our success.",
        "With love and transformation, Pnina",
      ],
    },
  },
  "garden-of-life": {
    title: { he: "לנו הבחירה לפתח את גן החיים", en: "We Have the Choice to Cultivate the Garden of Life" },
    content: {
      he: [
        "אני רוצה לשתף אתכם באימרה מטפורית מעוררת תובנה מאת רובין שארמה, שיש בכוחה לשנות את חייכם:",
        "\"המוח שלך הוא גן, המחשבות שלך הן הזרעים, והיבול יכול להיות פרחים או עשבים שוטים\".",
        "כמו גנן שמטפח את גינתו, כך אנחנו צריכים לטפח את המחשבות שלנו. לבחור בקפידה אילו זרעים אנחנו שותלים במוח שלנו.",
        "שיטת PDN מעניקה לנו את הכלים לזהות את ה\"עשבים השוטים\" - הפחדים והדפוסים המגבילים - ולשתול במקומם \"פרחים\" - מחשבות מעצימות שמנווטות אותנו להצלחה.",
        "באהבה ובהתמרה, פנינה",
      ],
      en: [
        "I want to share with you an insightful metaphorical quote from Robin Sharma that has the power to change your life:",
        "\"Your mind is a garden, your thoughts are the seeds, and the harvest can be either flowers or weeds.\"",
        "Like a gardener who tends their garden, we need to tend our thoughts. To carefully choose which seeds we plant in our minds.",
        "The PDN method gives us the tools to identify the \"weeds\" - the fears and limiting patterns - and plant \"flowers\" in their place - empowering thoughts that navigate us to success.",
        "With love and transformation, Pnina",
      ],
    },
  },
  "gratitude-changes-world": {
    title: { he: "הכרת תודה - משנה את העולם", en: "Gratitude - Changes the World" },
    content: {
      he: ["דיפאק צ'ופרה אומר: \"הכרת תודה היא כוח רב עוצמה שיכול לשנות את חיינו. היא יכולה לרפא את מערכות היחסים שלנו, לשפר את בריאותנו ולהביא לנו יותר שפע\".", "הכרת תודה היא לא רק מילה יפה - היא תדר אנרגטי שמשנה את האופן שבו אנחנו חווים את המציאות. כשאנחנו מתמקדים במה שיש לנו, במקום במה שחסר - אנחנו פותחים את הדלת לשפע.", "בשיטת PDN, הכרת תודה היא חלק מתהליך ההתמרה - המעבר מתודעה הישרדותית (שתמיד מחפשת מה חסר) לתודעת שפע (שרואה את המתנות שכבר קיימות).", "באהבה ובהתמרה, פנינה"],
      en: ["Deepak Chopra says: \"Gratitude is a powerful force that can change our lives. It can heal our relationships, improve our health, and bring us more abundance.\"", "Gratitude is not just a nice word - it's an energetic frequency that changes how we experience reality. When we focus on what we have, instead of what's missing - we open the door to abundance.", "In the PDN method, gratitude is part of the transformation process - the shift from survival consciousness (always looking for what's missing) to abundance consciousness (seeing the gifts already present).", "With love and transformation, Pnina"],
    },
  },
  "fear-becomes-advisor": {
    title: { he: "המסע שבו הפחד השורשי שלך הופך ליועץ חכם להצלחה", en: "The Journey Where Your Root Fear Becomes a Wise Advisor" },
    content: {
      he: ["פרספקטיבה רבת עוצמה שטוני רובינס טווה יפה במילותיו: \"תן לפחד להיות היועץ שלך, לא הסוהר שלך.\"", "הצהרה זו טומנת בחובה אמת עמוקה שיכולה להגדיר מחדש את הדרך שבה אנו מתייחסים לפחדים שלנו.", "בשיטת PDN, אנחנו לא מנסים להיפטר מהפחד - אנחנו לומדים להקשיב לו. הפחד השורשי שלך מכיל מידע חשוב על מי שאתה ומה אתה צריך כדי לצמוח.", "כשאתה מזהה את הפחד השורשי שלך (מסכנות, מבדידות, מכישלון, או משיעבוד) - אתה מקבל מפתח להבנת הדפוסים שחוזרים בחייך ויכולת לנווט אחרת.", "באהבה ובהתמרה, פנינה"],
      en: ["Tony Robbins weaves beautifully: \"Let fear be your advisor, not your jailer.\"", "This statement holds a deep truth that can redefine how we relate to our fears.", "In the PDN method, we don't try to get rid of fear - we learn to listen to it. Your root fear contains important information about who you are and what you need to grow.", "When you identify your root fear (of danger, loneliness, failure, or enslavement) - you receive a key to understanding the patterns repeating in your life and the ability to navigate differently.", "With love and transformation, Pnina"],
    },
  },
  "creating-reality": {
    title: { he: "PDN, RAS, גן החיים, יצירת מציאות", en: "PDN, RAS, Garden of Life, Creating Reality" },
    content: {
      he: ["וולט דיסני אמר פעם: \"אם אתה יכול לחלום את זה - אתה יכול לעשות את זה\".", "משמעות הדבר היא שלחלומות ולשאיפות שלנו יש את הכוח להפוך למציאות שלנו.", "מערכת ה-RAS (Reticular Activating System) במוח שלנו היא המפתח - היא מסננת את המידע שאנחנו קולטים מהעולם. כשאנחנו מתכנתים אותה נכון, היא מתחילה לאתר הזדמנויות שתואמות את המטרות שלנו.", "בשיטת PDN, אנחנו לומדים לכוון את מערכת ה-RAS בעזרת הצופן האישי - ליצור מציאות חדשה מתוך תודעה גבוהה.", "באהבה ובהתמרה, פנינה"],
      en: ["Walt Disney once said: \"If you can dream it, you can do it.\"", "This means our dreams and aspirations have the power to become our reality.", "The RAS (Reticular Activating System) in our brain is the key - it filters the information we absorb from the world. When we program it correctly, it starts detecting opportunities that match our goals.", "In the PDN method, we learn to calibrate the RAS system using the personal cipher - to create a new reality from higher consciousness.", "With love and transformation, Pnina"],
    },
  },
  "power-of-new-language": {
    title: { he: "עוצמתה של יצירת השפה החדשה בתת מודע", en: "The Power of Creating New Language in the Subconscious" },
    content: {
      he: ["זה לא סוד שהמחשבות שלנו מעצבות את המציאות שלנו ושלאופן שבו אנחנו חושבים יש השפעה עמוקה על חיינו.", "לואיז היי אומרת: \"המחשבות שאנו בוחרים לחשוב הן הכלים שבהם אנו מציירים את בד חיינו\".", "בשיטת PDN, אנחנו לומדים ליצור שפה חדשה - שפה שמתאימה לצופן האישי שלנו ומנווטת אותנו מתודעה הישרדותית לתודעת שפע.", "באהבה ובהתמרה, פנינה"],
      en: ["It's no secret that our thoughts shape our reality and that how we think has a profound impact on our lives.", "Louise Hay says: \"The thoughts we choose to think are the tools with which we paint the canvas of our lives.\"", "In the PDN method, we learn to create a new language - a language that matches our personal cipher and navigates us from survival consciousness to abundance consciousness.", "With love and transformation, Pnina"],
    },
  },
  "courage-frequency": {
    title: { he: "תדר האומץ הוא הדלק להשגת כל מטרה", en: "The Frequency of Courage is the Fuel for Achieving Any Goal" },
    content: {
      he: ["לא משנה כמה גדולה או מרתיעה המטרה שלכם עשויה להיראות, יש לכם את העוצמות בתוככם להפוך אותה למציאות.", "אבל זה ידרוש אמונה, אומץ ונכונות לצאת מאזור הנוחות.", "תדר האומץ הוא אחד התדרים הגבוהים ביותר שאנחנו יכולים לשדר. כשאנחנו פועלים מתוך אומץ - אנחנו מתחברים לעוצמה הפנימית שלנו ופותחים דלתות חדשות.", "בשיטת PDN, אנחנו מזהים את הפחד שעוצר אותנו ולומדים להתמיר אותו לאומץ - הדלק שמניע אותנו קדימה.", "באהבה ובהתמרה, פנינה"],
      en: ["No matter how big or daunting your goal may seem, you have the power within you to make it reality.", "But it will require faith, courage, and willingness to leave your comfort zone.", "The frequency of courage is one of the highest frequencies we can broadcast. When we act from courage - we connect to our inner power and open new doors.", "In the PDN method, we identify the fear that stops us and learn to transform it into courage - the fuel that drives us forward.", "With love and transformation, Pnina"],
    },
  },
  "inspiration-gift": {
    title: { he: "השראה היא המתנה הגדולה שניתנה לנו שנוכל לקבל ולתת לעולם", en: "Inspiration is the Greatest Gift Given to Us" },
    content: {
      he: ["אלברט איינשטיין אמר פעם: \"המהות והערך העיקריים של הפרט אינם מעצם היותו ישות מובחנת, אלא מעצם היותו חלק מקהילה אנושית גדולה\".", "ציטוט זה מדבר על הקשר העמוק בינינו לבין העולם סביבנו. כולנו חלק ממשהו גדול יותר.", "השראה היא הגשר - היא מה שמחבר בין המתנה הייחודית שלנו לבין העולם שזקוק לה.", "בשיטת PDN, אנחנו מגלים את המתנה הייחודית שלנו ולומדים איך להעניק אותה לעולם - זו ההשראה האמיתית.", "באהבה ובהתמרה, פנינה"],
      en: ["Einstein once said: \"The essence and value of the individual is not from being a distinct entity, but from being part of a greater human community.\"", "This quote speaks to the deep connection between us and the world around us. We are all part of something greater.", "Inspiration is the bridge - it's what connects our unique gift to the world that needs it.", "In the PDN method, we discover our unique gift and learn how to give it to the world - that's true inspiration.", "With love and transformation, Pnina"],
    },
  },
  "ocean-of-possibilities": {
    title: { he: "להפליג אל אוקיינוס האפשרויות", en: "Sailing to the Ocean of Possibilities" },
    content: {
      he: ["מתנה ענקית ניתנה לבני האנוש - היא מתנת \"חופש הבחירה\" מתוך התודעה התבונית.", "מאידך, נולדנו גם עם תודעה הישרדותית, שכל רצונה היא שנשרוד בכל מחיר. היא זו שמייצרת את הפחדים, החסמים והדפוסים החוזרים.", "האוקיינוס של האפשרויות נפתח כשאנחנו בוחרים לפעול מתוך התודעה התבונית - מתוך חופש בחירה אמיתי.", "שיטת PDN מעניקה לנו את המפה לניווט באוקיינוס הזה - את \"קוד המקור\" שמראה לנו את הדרך הבטוחה והמהירה ליעד.", "באהבה ובהתמרה, פנינה"],
      en: ["A tremendous gift was given to humanity - the gift of \"freedom of choice\" from wise consciousness.", "On the other hand, we were also born with survival consciousness, whose only desire is that we survive at all costs. It creates the fears, blocks, and repeating patterns.", "The ocean of possibilities opens when we choose to act from wise consciousness - from true freedom of choice.", "The PDN method gives us the map for navigating this ocean - the \"Source Code\" that shows us the safe and fast route to our destination.", "With love and transformation, Pnina"],
    },
  },
};

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of ["he", "en"]) {
    for (const slug of Object.keys(articles)) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeParam, slug } = await params;
  const locale = localeParam as Locale;
  const article = articles[slug];

  if (!article) notFound();

  return (
    <>
      <Breadcrumbs locale={locale} items={[
        { label: locale === "he" ? "מאמרים" : "Articles", href: `/${locale}/articles` },
        { label: article.title[locale] },
      ]} />

      <section className="bg-navy text-white py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={`/${locale}/articles`} className="text-gold text-sm hover:underline mb-4 inline-block">
            {locale === "he" ? "← חזרה למאמרים" : "← Back to Articles"}
          </Link>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold">
            {article.title[locale]}
          </h1>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            {article.content[locale].map((paragraph, i) => (
              <p key={i} className="text-text-secondary leading-relaxed whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link
              href={`/${locale}/programs`}
              className="inline-flex bg-gold hover:bg-gold-hover text-navy font-bold px-6 py-3 rounded-lg transition-colors"
            >
              {locale === "he" ? "גלה את המסלול שלך" : "Find Your Path"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
