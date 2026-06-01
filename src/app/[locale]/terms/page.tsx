import { type Locale } from "@/i18n/config";

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;

  return (
    <section className="py-16 sm:py-20 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-sm">
        <h1 className="text-3xl font-display font-bold mb-8">
          {locale === "he" ? "תקנון האתר" : "Terms of Service"}
        </h1>

        {locale === "he" ? (
          <>
            <h2>כללי</h2>
            <p>ברוכים הבאים לאתר מרכז PDN. השימוש באתר ובשירותים המוצעים בו כפוף לתנאים המפורטים להלן.</p>

            <h2>השירותים</h2>
            <p>מרכז PDN מציע שירותי אבחון אישיותי בשיטת PDN, קורסים דיגיטליים, וייעוץ אישי. השירותים ניתנים בכפוף לתשלום ולתנאים המפורטים בעמוד כל מסלול.</p>

            <h2>תשלום והחזרים</h2>
            <ul>
              <li>התשלום מתבצע דרך מערכת Meshulam המאובטחת</li>
              <li>ניתן לבטל עסקה תוך 14 יום מיום הרכישה, בתנאי שלא נעשה שימוש בשירות</li>
              <li>לאחר קבלת תוצאות האבחון, לא ניתן לבקש החזר</li>
            </ul>

            <h2>קניין רוחני</h2>
            <p>כל התכנים באתר, כולל שיטת PDN, הקורסים, והחומרים — הם קניין רוחני של פנינה לובלצ׳יק ומרכז PDN. אין להעתיק, להפיץ או לעשות שימוש מסחרי ללא אישור בכתב.</p>

            <h2>אחריות</h2>
            <p>השירותים מוצעים כפי שהם (as-is). מרכז PDN אינו מבטיח תוצאות ספציפיות. השיטה היא כלי להבנה עצמית ואינה מהווה תחליף לטיפול מקצועי.</p>

            <h2>יצירת קשר</h2>
            <p>center@pdn.co.il</p>
          </>
        ) : (
          <>
            <h2>General</h2>
            <p>Welcome to the PDN Center website. Use of the site and its services is subject to the terms detailed below.</p>

            <h2>Services</h2>
            <p>PDN Center offers personality assessment services using the PDN method, digital courses, and personal consultation. Services are provided subject to payment and terms detailed on each program page.</p>

            <h2>Payment and Refunds</h2>
            <ul>
              <li>Payment is processed through the secure Meshulam system</li>
              <li>Transactions may be cancelled within 14 days of purchase, provided the service has not been used</li>
              <li>After receiving assessment results, refunds cannot be requested</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>All content on the site, including the PDN method, courses, and materials — are the intellectual property of Pnina Lublchik and PDN Center. No copying, distribution, or commercial use without written permission.</p>

            <h2>Liability</h2>
            <p>Services are offered as-is. PDN Center does not guarantee specific results. The method is a tool for self-understanding and is not a substitute for professional treatment.</p>

            <h2>Contact</h2>
            <p>center@pdn.co.il</p>
          </>
        )}
      </div>
    </section>
  );
}
