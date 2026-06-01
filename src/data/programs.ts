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
  challenge?: { he: string[]; en: string[] };
  solution?: { he: string[]; en: string[] };
  benefits?: { title: { he: string; en: string }; description: { he: string; en: string } }[];
  includes: { he: string[]; en: string[] };
  courses: { name: { he: string; en: string }; lessons: number; description: { he: string; en: string } }[];
  steps: { he: string[]; en: string[] };
  assessmentDetails?: { he: string; en: string };
  quote?: { text: { he: string; en: string }; author: string };
  hasEvent?: boolean;
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
    challenge: {
      he: [
        "אתה לא באמת בטוח מי אתה, מה מייחד אותך ומה המטרה שלך",
        "קשה לך להתחבר לביטחון עצמי יציב",
        "אתה חוזר שוב ושוב לאותם דפוסים מעכבים מתוך פחד",
        "מערכות היחסים שלך סובלות מחוסר הבהירות",
        "עמוק בפנים אתה יודע שיש בך הרבה יותר פוטנציאל בתוכך",
      ],
      en: [
        "You're not really sure who you are, what makes you unique, or what your purpose is",
        "It's hard to connect to stable self-confidence",
        "You keep returning to the same blocking patterns out of fear",
        "Your relationships suffer from lack of clarity",
        "Deep inside you know there's much more potential within you",
      ],
    },
    solution: {
      he: [
        "הצופן שמסביר: למה אתה פועל כפי שאתה פועל, מה באמת מניע אותך ומהו מסלול הניווט המדויק עבורך",
        "גילוי עמוק: הבן את \"קוד המקור\" האישי שלך",
        "בהירות: קבל מפת דרכים ברורה כמו GPS לחיים שלך",
        "שחרור: השתחרר מדפוסי פחד ואוטומטים שעוצרים אותך",
        "הצלחה: נווט עבור הגשמה, משמעות ושגשוג בכל תחום החיים",
        "תוצאות מוכחות: 30 שנות מחקר בחקר התודעה והתנהגות אנושית",
      ],
      en: [
        "The code that explains: why you act the way you do, what truly drives you, and what's the precise navigation path for you",
        "Deep discovery: understand your personal \"Source Code\"",
        "Clarity: receive a clear roadmap like a GPS for your life",
        "Release: free yourself from fear patterns and automatisms holding you back",
        "Success: navigate toward fulfillment, meaning, and prosperity in all life areas",
        "Proven results: 30 years of research in consciousness and human behavior",
      ],
    },
    benefits: [
      {
        title: { he: "הבנה עמוקה של עצמך", en: "Deep Self-Understanding" },
        description: { he: "גלה את החוזקות המרכזיות שלך, הכישורים הטבעיים שלך, והעיקרון שלך להצלחה", en: "Discover your core strengths, natural skills, and your principle for success" },
      },
      {
        title: { he: "מפת דרכים ברורה", en: "Clear Roadmap" },
        description: { he: "כמו GPS פנימי, תדע בדיוק לאן אתה הולך וכיצד להגיע להצלחה שאתה שואף", en: "Like an inner GPS, you'll know exactly where you're going and how to reach the success you aspire to" },
      },
      {
        title: { he: "תמיכה מקצועית", en: "Professional Support" },
        description: { he: "יעוץ אישי ממאבחנים מיומנים של PDN - פגישת זום אודות תוצאות הבחון", en: "Personal consultation from skilled PDN assessors - Zoom session about your results" },
      },
      {
        title: { he: "זיהוי הייעוד שלך", en: "Identify Your Purpose" },
        description: { he: "גלה את המתנה הייחודית שלך לתת לעולם ואת הייעוד שהגעת בו לבצע", en: "Discover your unique gift to give the world and the purpose you came to fulfill" },
      },
      {
        title: { he: "כלים חדשניים", en: "Innovative Tools" },
        description: { he: "קבל כלים מעשיים להשתחרר מפחדים ולפתיחת הדרך לניווט בהצלחה", en: "Receive practical tools to release fears and open the path to successful navigation" },
      },
      {
        title: { he: "שגשוג בכל תחומי החיים", en: "Prosperity in All Life Areas" },
        description: { he: "שיפור במערכות יחסים, קריירה, זוגיות, משפחה וביטחון עצמי", en: "Improvement in relationships, career, partnership, family, and self-confidence" },
      },
    ],
    assessmentDetails: {
      he: "מה ייתן לך האבחון והייעוץ? הסבר על מפת צופן אישית הכוללת: החוזקות שלך, הפחד שמונע ממך להשיג מטרות, המתנות שלך לעולם > הייעוד שלך.",
      en: "What will the assessment and consultation give you? An explanation of a personal cipher map including: your strengths, the fear preventing you from achieving goals, your gifts to the world > your purpose.",
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
    quote: {
      text: {
        he: "\"האדם הוא יצירה בהתהוות, השקיעו בה, לעולם לא יהיה רגע מתאים מהיום להיות את/ה הטוב ביותר\"",
        en: "\"A person is a creation in progress. Invest in it. There will never be a more suitable moment than today to be your best self.\"",
      },
      author: "Robin Sharma",
    },
  },
  {
    slug: "challenge",
    tier: "challenge",
    price: 2800,
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
    hasEvent: true,
    quote: {
      text: {
        he: "\"האדם הוא יצירה בהתהוות, השקיעו בה, לעולם לא יהיה רגע מתאים מהיום להיות את/ה הטוב ביותר\"",
        en: "\"A person is a creation in progress. Invest in it. There will never be a more suitable moment than today to be your best self.\"",
      },
      author: "Robin Sharma",
    },
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}
