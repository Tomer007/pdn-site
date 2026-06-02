import { type Locale } from "@/i18n/config";

export default async function AccessibilityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;

  return (
    <section className="py-16 sm:py-20 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-sm">
        {locale === "he" ? (
          <>
            <h1 className="text-3xl font-display font-bold mb-8">הצהרת נגישות</h1>
            <p><strong>מרכז PDN</strong> מחויב להנגשת האתר והשירותים הדיגיטליים שלו לכלל האוכלוסייה, לרבות אנשים עם מוגבלויות, בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות, תשנ"ח-1998, ותקנות הנגישות לשירותי אינטרנט.</p>

            <h2>מאמצי הנגישות שלנו</h2>
            <ul>
              <li>האתר נבנה בהתאם להנחיות WCAG 2.2 ברמה AA</li>
              <li>תמיכה בניווט מקלדת מלא</li>
              <li>קישור "דלג לתוכן" בראש כל דף</li>
              <li>טקסט חלופי (alt) לתמונות</li>
              <li>היררכיית כותרות תקינה</li>
              <li>ניגודיות צבעים מספקת</li>
              <li>תמיכה בהגדלת טקסט</li>
              <li>מצבי focus ברורים לאלמנטים אינטראקטיביים</li>
              <li>תמיכה ב-prefers-reduced-motion</li>
            </ul>

            <h2>דרכי יצירת קשר בנושא נגישות</h2>
            <p>אם נתקלתם בבעיית נגישות באתר, אנא פנו אלינו ונשמח לסייע:</p>
            <ul>
              <li>דוא"ל: <a href="mailto:center@pdn.co.il">center@pdn.co.il</a></li>
              <li>נושא: "בעיית נגישות באתר"</li>
            </ul>
            <p>אנו מתחייבים לטפל בפניות נגישות תוך 5 ימי עסקים.</p>

            <h2>עדכון אחרון</h2>
            <p>הצהרה זו עודכנה לאחרונה ביוני 2026.</p>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-display font-bold mb-8">Accessibility Statement</h1>
            <p><strong>PDN Center</strong> is committed to making its website and digital services accessible to the entire population, including people with disabilities, in accordance with Israeli accessibility laws and WCAG guidelines.</p>

            <h2>Our Accessibility Efforts</h2>
            <ul>
              <li>Built according to WCAG 2.2 Level AA guidelines</li>
              <li>Full keyboard navigation support</li>
              <li>"Skip to content" link at the top of every page</li>
              <li>Alternative text (alt) for images</li>
              <li>Proper heading hierarchy</li>
              <li>Sufficient color contrast</li>
              <li>Text enlargement support</li>
              <li>Clear focus states on interactive elements</li>
              <li>Support for prefers-reduced-motion</li>
            </ul>

            <h2>Contact Us About Accessibility</h2>
            <p>If you encounter an accessibility issue on our site, please contact us:</p>
            <ul>
              <li>Email: <a href="mailto:center@pdn.co.il">center@pdn.co.il</a></li>
              <li>Subject: "Website Accessibility Issue"</li>
            </ul>
            <p>We commit to addressing accessibility inquiries within 5 business days.</p>

            <h2>Last Updated</h2>
            <p>This statement was last updated in June 2026.</p>
          </>
        )}
      </div>
    </section>
  );
}
