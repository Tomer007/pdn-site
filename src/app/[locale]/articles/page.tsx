import Link from "next/link";
import type { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import { type Locale } from "@/i18n/config";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = "https://pdn-site.onrender.com";
  const title = locale === "he" ? "מאמרים | PDN - קוד המקור" : "Articles | PDN - Source Code";
  const description = locale === "he"
    ? "כלים ותובנות להצלחה - מאמרים מעולם שיטת PDN לפיתוח אישי וניווט חייך להצלחה."
    : "Tools and insights for success - articles from the PDN method for personal development.";
  return { title, description, alternates: { canonical: `${baseUrl}/${locale}/articles`, languages: { he: `${baseUrl}/he/articles`, en: `${baseUrl}/en/articles` } } };
}

const articles = [
  {
    slug: "everyone-is-unique",
    title: { he: "כל אחד הוא יחיד ומיוחד וחשוב לעולם", en: "Everyone is Unique and Important to the World" },
    excerpt: { he: "אתחיל מאמירה של המנטור רובין שארמה: \"יש לך משהו להציע שאף אחד אחר לא יכול להציע, וזה מה שעושה אותך מיוחד\".", en: "I'll start with a quote from Robin Sharma: \"You have something to offer that no one else can, and that's what makes you special.\"" },
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop",
    likes: 47,
  },
  {
    slug: "world-as-our-thoughts",
    title: { he: "העולם כיציר מחשבותינו", en: "The World as a Creation of Our Thoughts" },
    excerpt: { he: "האם אי פעם עצרתם לשקול את כוחן של המחשבות והאמונות שלכם? לפי אלברט איינשטיין, \"העולם כפי שיצרנו אותו הוא תהליך של החשיבה שלנו\".", en: "Have you ever stopped to consider the power of your thoughts? According to Einstein, \"The world as we created it is a process of our thinking.\"" },
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop",
    likes: 38,
  },
  {
    slug: "garden-of-life",
    title: { he: "לנו הבחירה לפתח את גן החיים", en: "We Have the Choice to Cultivate the Garden of Life" },
    excerpt: { he: "אני רוצה לשתף אתכם באימרה מטפורית מעוררת תובנה מאת רובין שארמה: \"המוח שלך הוא גן, המחשבות שלך הן הזרעים, והיבול יכול להיות פרחים או עשבים שוטים\".", en: "Robin Sharma: \"Your mind is a garden, your thoughts are the seeds, and the harvest can be either flowers or weeds.\"" },
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=450&fit=crop",
    likes: 42,
  },
  {
    slug: "gratitude-changes-world",
    title: { he: "הכרת תודה - משנה את העולם", en: "Gratitude - Changes the World" },
    excerpt: { he: "דיפאק צ'ופרה אומר: \"הכרת תודה היא כוח רב עוצמה שיכול לשנות את חיינו. היא יכולה לרפא את מערכות היחסים שלנו, לשפר את בריאותנו ולהביא לנו יותר שפע\".", en: "Deepak Chopra says: \"Gratitude is a powerful force that can change our lives. It can heal our relationships, improve our health, and bring us more abundance.\"" },
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&h=450&fit=crop",
    likes: 35,
  },
  {
    slug: "fear-becomes-advisor",
    title: { he: "המסע שבו הפחד השורשי שלך הופך ליועץ חכם להצלחה", en: "The Journey Where Your Root Fear Becomes a Wise Advisor" },
    excerpt: { he: "פרספקטיבה רבת עוצמה שטוני רובינס טווה יפה במילותיו: \"תן לפחד להיות היועץ שלך, לא הסוהר שלך.\" הצהרה זו טומנת בחובה אמת עמוקה.", en: "Tony Robbins weaves beautifully: \"Let fear be your advisor, not your jailer.\" This statement holds a deep truth." },
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop",
    likes: 29,
  },
  {
    slug: "creating-reality",
    title: { he: "PDN, RAS, גן החיים, יצירת מציאות", en: "PDN, RAS, Garden of Life, Creating Reality" },
    excerpt: { he: "וולט דיסני אמר פעם: \"אם אתה יכול לחלום את זה - אתה יכול לעשות את זה\". משמעות הדבר היא שלחלומות ולשאיפות שלנו יש את הכוח להפוך למציאות.", en: "Walt Disney once said: \"If you can dream it, you can do it.\" This means our dreams and aspirations have the power to become reality." },
    image: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=800&h=450&fit=crop",
    likes: 33,
  },
  {
    slug: "power-of-new-language",
    title: { he: "עוצמתה של יצירת השפה החדשה בתת מודע", en: "The Power of Creating New Language in the Subconscious" },
    excerpt: { he: "זה לא סוד שהמחשבות שלנו מעצבות את המציאות שלנו ושלאופן שבו אנחנו חושבים יש השפעה עמוקה על חיינו. לואיז היי אומרת: \"המחשבות שאנו בוחרים לחשוב...\"", en: "It's no secret that our thoughts shape our reality. Louise Hay says: \"The thoughts we choose to think...\"" },
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&h=450&fit=crop",
    likes: 26,
  },
  {
    slug: "courage-frequency",
    title: { he: "תדר האומץ הוא הדלק להשגת כל מטרה", en: "The Frequency of Courage is the Fuel for Achieving Any Goal" },
    excerpt: { he: "לא משנה כמה גדולה או מרתיעה המטרה שלכם עשויה להיראות, יש לכם את העוצמות בתוככם להפוך אותה למציאות. אבל זה ידרוש אמונה ואומץ.", en: "No matter how big or daunting your goal may seem, you have the power within you to make it reality. But it will require faith and courage." },
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=450&fit=crop",
    likes: 41,
  },
  {
    slug: "inspiration-gift",
    title: { he: "השראה היא המתנה הגדולה שניתנה לנו שנוכל לקבל ולתת לעולם", en: "Inspiration is the Greatest Gift Given to Us to Receive and Give" },
    excerpt: { he: "אלברט איינשטיין אמר פעם: \"המהות והערך העיקריים של הפרט אינם מעצם היותו ישות מובחנת, אלא מעצם היותו חלק מקהילה אנושית גדולה\".", en: "Einstein once said: \"The essence and value of the individual is not from being a distinct entity, but from being part of a greater human community.\"" },
    image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800&h=450&fit=crop",
    likes: 37,
  },
  {
    slug: "ocean-of-possibilities",
    title: { he: "להפליג אל אוקיינוס האפשרויות", en: "Sailing to the Ocean of Possibilities" },
    excerpt: { he: "מתנה ענקית ניתנה לבני האנוש - היא מתנת \"חופש הבחירה\" מתוך התודעה התבונית. מאידך, נולדנו גם עם תודעה הישרדותית, שכל רצונה היא שנשרוד בכל מחיר.", en: "A tremendous gift was given to humanity - the gift of \"freedom of choice\" from wise consciousness. On the other hand, we were also born with survival consciousness." },
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=450&fit=crop",
    likes: 44,
  },
];

export default async function ArticlesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <Breadcrumbs locale={locale} items={[{ label: dict.nav.articles }]} />

      {/* Hero */}
      <section className="bg-navy text-white py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-display font-bold mb-3">
            {locale === "he" ? "כלים ותובנות להצלחה" : "Tools & Insights for Success"}
          </h1>
          <p className="text-white/80">
            {locale === "he" ? "מאמרים מעולם שיטת PDN לפיתוח אישי" : "Articles from the PDN method for personal development"}
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/${locale}/articles/${article.slug}`}
                className="group block border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-gold/30"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden bg-paper">
                  <img
                    src={article.image}
                    alt={article.title[locale]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h2 className="text-lg font-display font-bold mb-2 group-hover:text-gold transition-colors line-clamp-2">
                    {article.title[locale]}
                  </h2>
                  <p className="text-text-secondary text-sm mb-4 leading-relaxed line-clamp-2">
                    {article.excerpt[locale]}
                  </p>

                  {/* Footer: likes + read more */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-text-secondary flex items-center gap-1">
                      <span className="text-gold">&#9829;</span> {article.likes}
                    </span>
                    <span className="text-gold text-sm font-bold group-hover:underline">
                      {locale === "he" ? "קרא עוד ←" : "Read more →"}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
