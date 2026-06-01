export type Program = {
  slug: string;
  tier: "discover" | "transformation" | "challenge";
  price: number | null;
  priceWithAddon: number | null;
  addonPrice: number;
  accessDays: number;
  name: { he: string; en: string };
  subtitle: { he: string; en: string };
  heroDescription: { he: string; en: string };
  includes: { he: string[]; en: string[] };
  courses: { name: { he: string; en: string }; lessons: number; description: { he: string; en: string } }[];
  steps: { he: string[]; en: string[] };
};

export const programs: Program[] = [
  {
    slug: "discover",
    tier: "discover",
    price: 970,
    priceWithAddon: 1450,
    addonPrice: 480,
    accessDays: 0,
    name: { he: "לגלות את קוד המקור", en: "Discover Your Source Code" },
    subtitle: {
      he: "לגלות את הצופן שלך להצלחה - הכל מתחיל בהיכרות עמוקה עם עצמך",
      en: "Discover your cipher to success - it all starts with a deep acquaintance with yourself",
    },
    heroDescription: {
      he: "שיטת PDN - שיטה ייחודית וחדשנית המבוססת על מחקר של כ־30 שנה שנרשמה כפטנט ברחבי העולם. מאפשרת לך לגלות את הנווט הפנימי שלך ולנווט את חייך בביטחון לעבר הגשמה ומשמעות.",
      en: "The PDN method - a unique and innovative approach based on approximately 30 years of research, registered as a patent worldwide. It enables you to discover your inner navigator and navigate your life with confidence toward fulfillment and meaning.",
    },
    includes: {
      he: ["אבחון \"קוד המקור\" האישי שלך", "מפת \"קוד המקור\" אישית"],
      en: ["Your personal \"Source Code\" Assessment", "Personal \"Source Code\" Map"],
    },
    courses: [],
    steps: {
      he: ["הרשמה פשוטה", "מלא אבחון חדשני מעמיק", "קבל את מפת \"קוד המקור\" תוך שבוע", "יעוץ מקצועי (אופציונלי)"],
      en: ["Simple registration", "Complete innovative assessment", "Receive your \"Source Code\" map within a week", "Professional consultation (optional)"],
    },
  },
  {
    slug: "transformation",
    tier: "transformation",
    price: 1800,
    priceWithAddon: 2280,
    addonPrice: 480,
    accessDays: 180,
    name: { he: "התמרה עם קוד המקור", en: "Transformation with Source Code" },
    subtitle: {
      he: "נווט חייך להצלחה - לא משנה באיזה תחום ברצונך להגשים",
      en: "Navigate your life to success - no matter which area you want to fulfill",
    },
    heroDescription: {
      he: "מה יקרה כשתגלה את המנוע הראשי שלך? בכל אדם טמון \"קוד מקור\", צופן אישי שמפעיל את הדרך שבה אתה מרגיש, חושב, בוחר ופועל. כשתגלה אותו, תתחיל לנווט את חייך מתוך עוצמה.",
      en: "What happens when you discover your main engine? Every person carries a \"Source Code\", a personal cipher that drives how you feel, think, choose, and act. When you discover it, you'll start navigating your life from a place of power.",
    },
    includes: {
      he: [
        "אבחון \"קוד המקור\" האישי שלך",
        "מפת \"קוד המקור\" אישית",
        "קורס דיגיטלי - המנוע הראשי (45 שיעורים)",
        "קורס דיגיטלי - הצופן המלא (14 שיעורים)",
        "ייעוץ אישי עם מאבחן PDN (בתוספת ₪480)",
      ],
      en: [
        "Your personal \"Source Code\" Assessment",
        "Personal \"Source Code\" Map",
        "Digital Course - The Main Engine (45 lessons)",
        "Digital Course - The Full Code (14 lessons)",
        "Personal consultation with PDN assessor (+₪480)",
      ],
    },
    courses: [
      {
        name: { he: "המנוע הראשי", en: "The Main Engine" },
        lessons: 45,
        description: {
          he: "8 שיעורי חיים - 45 שיעורים ממוקדים ומשנה חיים. גלה מי אתה, מה המנוע הראשי שלך, איך להשתחרר מפחדים ולנווט להצלחה.",
          en: "8 life lessons - 45 focused, life-changing lessons. Discover who you are, what your main engine is, how to release fears and navigate to success.",
        },
      },
      {
        name: { he: "הצופן המלא", en: "The Full Code" },
        lessons: 14,
        description: {
          he: "7 פרקים - 14 שיעורים עם כלים עוצמתיים. גלה את המושכים, בינת הלב, כיול מערכת RAS, וגילוי הייעוד על פי הצופן המלא.",
          en: "7 chapters - 14 lessons with powerful tools. Discover the attractors, heart intelligence, RAS calibration, and purpose discovery through the full code.",
        },
      },
    ],
    steps: {
      he: ["נרשמים ועוברים לתשלום", "ממלאים אבחון חדשני", "מקבלים את מפת קוד המקור תוך שבוע", "מקבלים גישה לקורסים"],
      en: ["Register and pay", "Complete innovative assessment", "Receive your Source Code map within a week", "Get access to courses"],
    },
  },
  {
    slug: "challenge",
    tier: "challenge",
    price: null,
    priceWithAddon: null,
    addonPrice: 0,
    accessDays: 180,
    name: { he: "אתגר 21 יום עם בינת קוד המקור", en: "21-Day Challenge with Source Code Intelligence" },
    subtitle: {
      he: "מפחד לעוצמה | מתקיעות לניווט | מחלום להגשמה",
      en: "From fear to power | From stuck to navigating | From dream to fulfillment",
    },
    heroDescription: {
      he: "זו ההזדמנות שלך לגלות את העוצמה של בינת קוד המקור. ב־21 יום תוכל לקבל כלים לחיים, תבין איך לנווט בעזרת הצופן שלך, להגשים מטרה. כמו Waze פנימי שמחזיר אותך למסלול - צעד אחר צעד - עד למטרה.",
      en: "This is your opportunity to discover the power of Source Code Intelligence. In 21 days you'll receive life tools, understand how to navigate with your code, and achieve your goal. Like an inner Waze that brings you back on track - step by step - to your destination.",
    },
    includes: {
      he: [
        "אבחון בינת \"קוד המקור\" - מתנה",
        "מפת \"קוד המקור\" אישית",
        "קורס דיגיטלי - המנוע הראשי (45 שיעורים)",
        "קורס דיגיטלי - הצופן המלא (14 שיעורים)",
        "מאמן בינת קוד המקור ל-21 יום",
        "4 מפגשי זום + קהילה",
        "קבוצת WhatsApp פעילה",
      ],
      en: [
        "\"Source Code\" Intelligence Assessment - free",
        "Personal \"Source Code\" Map",
        "Digital Course - The Main Engine (45 lessons)",
        "Digital Course - The Full Code (14 lessons)",
        "Source Code Intelligence Coach for 21 days",
        "4 Zoom sessions + community",
        "Active WhatsApp group",
      ],
    },
    courses: [
      {
        name: { he: "המנוע הראשי", en: "The Main Engine" },
        lessons: 45,
        description: {
          he: "8 שיעורי חיים - 45 שיעורים ממוקדים ומשנה חיים.",
          en: "8 life lessons - 45 focused, life-changing lessons.",
        },
      },
      {
        name: { he: "הצופן המלא", en: "The Full Code" },
        lessons: 14,
        description: {
          he: "7 פרקים - 14 שיעורים עם כלים עוצמתיים.",
          en: "7 chapters - 14 lessons with powerful tools.",
        },
      },
    ],
    steps: {
      he: ["הרשמה לאתגר", "אבחון אישי + מפת קוד מקור", "21 ימים של ליווי יומי עם הבינה", "מפגשי זום + סיכום חגיגי"],
      en: ["Register for the challenge", "Personal assessment + Source Code map", "21 days of daily AI coaching", "Zoom sessions + celebratory summary"],
    },
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}
