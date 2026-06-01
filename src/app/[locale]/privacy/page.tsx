import { type Locale } from "@/i18n/config";

export default async function PrivacyPage({
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
          {locale === "he" ? "מדיניות פרטיות" : "Privacy Policy"}
        </h1>

        {locale === "he" ? (
          <>
            <h2>כללי</h2>
            <p>מרכז PDN (להלן: &quot;האתר&quot;) מכבד את פרטיות המשתמשים באתר. מדיניות פרטיות זו מתארת את האופן שבו אנו אוספים, משתמשים ומגנים על המידע האישי שלך.</p>

            <h2>מידע שאנו אוספים</h2>
            <ul>
              <li>שם מלא, כתובת אימייל ומספר טלפון — בעת הרשמה לתוכנית או יצירת קשר</li>
              <li>תשובות לשאלון האבחון — לצורך גילוי &quot;קוד המקור&quot; האישי שלך</li>
              <li>הקלטת קול — כחלק מתהליך האבחון</li>
              <li>פרטי תשלום — מעובדים באופן מאובטח דרך Meshulam ואינם נשמרים אצלנו</li>
            </ul>

            <h2>שימוש במידע</h2>
            <p>המידע שנאסף משמש אך ורק לצורך:</p>
            <ul>
              <li>ביצוע האבחון והפקת מפת &quot;קוד המקור&quot; האישית</li>
              <li>מתן גישה לקורסים ולתכנים שרכשת</li>
              <li>יצירת קשר בנוגע לשירותים שרכשת</li>
              <li>שליחת עדכונים (בהסכמתך בלבד)</li>
            </ul>

            <h2>אבטחת מידע</h2>
            <p>אנו נוקטים באמצעי אבטחה סבירים להגנה על המידע האישי שלך. התשלומים מעובדים דרך Meshulam בסביבה מאובטחת.</p>

            <h2>יצירת קשר</h2>
            <p>לשאלות בנוגע למדיניות הפרטיות: center@pdn.co.il</p>
          </>
        ) : (
          <>
            <h2>General</h2>
            <p>PDN Center (hereinafter: &quot;the Site&quot;) respects the privacy of its users. This privacy policy describes how we collect, use, and protect your personal information.</p>

            <h2>Information We Collect</h2>
            <ul>
              <li>Full name, email address, and phone number — upon registration or contact</li>
              <li>Assessment questionnaire responses — for discovering your personal &quot;Source Code&quot;</li>
              <li>Voice recording — as part of the assessment process</li>
              <li>Payment details — processed securely through Meshulam and not stored by us</li>
            </ul>

            <h2>Use of Information</h2>
            <p>Collected information is used solely for:</p>
            <ul>
              <li>Performing the assessment and generating your personal &quot;Source Code&quot; map</li>
              <li>Providing access to courses and content you purchased</li>
              <li>Contacting you regarding services you purchased</li>
              <li>Sending updates (with your consent only)</li>
            </ul>

            <h2>Data Security</h2>
            <p>We take reasonable security measures to protect your personal information. Payments are processed through Meshulam in a secure environment.</p>

            <h2>Contact</h2>
            <p>For privacy policy questions: center@pdn.co.il</p>
          </>
        )}
      </div>
    </section>
  );
}
