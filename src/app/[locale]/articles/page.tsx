import Link from "next/link";
import { getDictionary } from "@/i18n/dictionaries";
import { type Locale } from "@/i18n/config";

export default async function ArticlesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);

  const articles = [
    {
      title: { he: "מהו \"קוד המקור\" ואיך הוא עובד?", en: "What is the \"Source Code\" and how does it work?" },
      excerpt: {
        he: "מבוא לשיטת PDN — הכלי החדשני שמאפשר לכל אדם לגלות את הנווט הפנימי שלו להצלחה.",
        en: "An introduction to the PDN method — the innovative tool that enables every person to discover their inner navigator to success.",
      },
      slug: "what-is-source-code",
    },
    {
      title: { he: "4 הפחדים השורשיים שעוצרים אותך", en: "The 4 Root Fears Holding You Back" },
      excerpt: {
        he: "כיצד לזהות את הפחד השורשי שלך ולהשתחרר ממנו בעזרת קוד המקור.",
        en: "How to identify your root fear and release it using the Source Code.",
      },
      slug: "four-root-fears",
    },
    {
      title: { he: "מתודעה הישרדותית לתודעת שפע", en: "From Survival Consciousness to Abundance" },
      excerpt: {
        he: "המעבר מתודעה הישרדותית לתודעה גבוהה — הסוד של 10% המצליחים בעולם.",
        en: "The shift from survival consciousness to higher consciousness — the secret of the world's top 10%.",
      },
      slug: "survival-to-abundance",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-display font-bold mb-3">
            {dict.nav.articles}
          </h1>
          <p className="text-white/80">
            {locale === "he" ? "תובנות, כלים ומאמרים מעולם שיטת PDN" : "Insights, tools, and articles from the PDN method"}
          </p>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {articles.map((article) => (
              <article key={article.slug} className="border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                <h2 className="text-xl font-display font-bold mb-2">
                  {article.title[locale]}
                </h2>
                <p className="text-text-secondary text-sm mb-4">
                  {article.excerpt[locale]}
                </p>
                <span className="text-gold text-sm font-bold">
                  {locale === "he" ? "קרא עוד ←" : "Read more →"}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
