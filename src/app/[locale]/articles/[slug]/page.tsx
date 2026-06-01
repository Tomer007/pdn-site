import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale } from "@/i18n/config";

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
