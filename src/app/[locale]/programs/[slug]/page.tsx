import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import { type Locale } from "@/i18n/config";
import { programs, getProgramBySlug } from "@/data/programs";
import { StickyBuyBar } from "@/components/StickyBuyBar";
import { StructuredData, courseSchema } from "@/components/StructuredData";

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of ["he", "en"]) {
    for (const program of programs) {
      params.push({ locale, slug: program.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  const locale = localeParam as Locale;
  const program = getProgramBySlug(slug);
  if (!program) return {};

  const title = locale === "he"
    ? `${program.name.he} | PDN — קוד המקור`
    : `${program.name.en} | PDN — Source Code`;
  const description = program.heroDescription[locale].slice(0, 160);

  return {
    title,
    description,
    openGraph: { title, description },
  };
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeParam, slug } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const program = getProgramBySlug(slug);

  if (!program) notFound();

  return (
    <>
      {/* Structured Data */}
      <StructuredData
        data={courseSchema({
          name: program.name[locale],
          description: program.heroDescription[locale],
          price: program.price,
        })}
      />

      {/* Sticky Mobile Buy Bar */}
      <StickyBuyBar
        programName={program.name[locale]}
        price={program.price}
        ctaText={dict.programs[program.tier]?.cta || dict.programs.choose_cta}
        checkoutHref={`/${locale}/checkout?program=${program.slug}`}
        locale={locale}
      />

      {/* Hero */}
      <section className="bg-navy text-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            {program.name[locale]}
          </h1>
          <p className="text-lg text-gold font-bold mb-4">
            {program.subtitle[locale]}
          </p>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            {program.heroDescription[locale]}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {program.price && (
              <span className="text-3xl font-bold">
                {dict.common.currency}{program.price.toLocaleString()}
              </span>
            )}
            <Link
              href={`/${locale}/checkout?program=${program.slug}`}
              className="bg-gold hover:bg-gold-hover text-navy font-bold px-8 py-3.5 rounded text-lg transition-colors"
            >
              {dict.programs[program.tier]?.cta || dict.programs.choose_cta}
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-bold text-center mb-8">
            {locale === "he" ? "מה כלול במסלול" : "What's Included"}
          </h2>
          <ul className="space-y-4">
            {program.includes[locale].map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-4 bg-paper rounded-lg">
                <span className="text-gold text-xl shrink-0">✔</span>
                <span className="text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Courses (if any) */}
      {program.courses.length > 0 && (
        <section className="py-16 sm:py-20 bg-paper">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-display font-bold text-center mb-8">
              {locale === "he" ? "הקורסים הדיגיטליים" : "Digital Courses"}
            </h2>
            <div className="space-y-4">
              {program.courses.map((course, i) => (
                <div key={i} className="bg-white border border-border rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg">{course.name[locale]}</h3>
                    <span className="text-sm text-gold font-bold">
                      {course.lessons} {locale === "he" ? "שיעורים" : "lessons"}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary">{course.description[locale]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How It Works */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-bold text-center mb-8">
            {locale === "he" ? "איך זה עובד?" : "How Does It Work?"}
          </h2>
          <div className="space-y-4">
            {program.steps[locale].map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gold text-navy font-bold flex items-center justify-center shrink-0 text-sm">
                  {i + 1}
                </div>
                <p className="text-base pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky CTA (bottom) */}
      <section className="py-12 bg-navy text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-xl sm:text-2xl font-display font-bold mb-4">
            {program.name[locale]}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {program.price && (
              <span className="text-2xl font-bold">
                {dict.common.currency}{program.price.toLocaleString()}
              </span>
            )}
            <Link
              href={`/${locale}/checkout?program=${program.slug}`}
              className="bg-gold hover:bg-gold-hover text-navy font-bold px-8 py-3.5 rounded text-lg transition-colors"
            >
              {dict.programs[program.tier]?.cta || dict.programs.choose_cta}
            </Link>
          </div>
          {program.price && (
            <p className="text-xs text-white/50 mt-3">
              {locale === "he" ? "יש קופון? בהמשך בקופה" : "Have a coupon? Enter it at checkout"}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
