import { type Locale } from "@/i18n/config";

type Props = {
  dict: Record<string, any>;
  locale: Locale;
};

type CellVal = boolean | string | { he: string; en: string };

type Feature = {
  name: { he: string; en: string };
  discover: CellVal;
  transformation: CellVal;
  challenge: CellVal;
};

const features: Feature[] = [
  {
    name: { he: "אבחון \"קוד המקור\"", en: "\"Source Code\" Assessment" },
    discover: true,
    transformation: true,
    challenge: true,
  },
  {
    name: { he: "מפת \"קוד המקור\" אישית", en: "Personal \"Source Code\" Map" },
    discover: true,
    transformation: true,
    challenge: true,
  },
  {
    name: { he: "קורס \"המנוע הראשי\" (45 שיעורים)", en: "\"Main Engine\" Course (45 lessons)" },
    discover: false,
    transformation: true,
    challenge: true,
  },
  {
    name: { he: "קורס \"הצופן המלא\" (14 שיעורים)", en: "\"Full Code\" Course (14 lessons)" },
    discover: false,
    transformation: true,
    challenge: true,
  },
  {
    name: { he: "ייעוץ אישי עם מאבחן PDN", en: "Personal consultation with PDN assessor" },
    discover: { he: "בתוספת ₪480", en: "+₪480" },
    transformation: { he: "בתוספת ₪480", en: "+₪480" },
    challenge: true,
  },
  {
    name: { he: "מאמן בינת קוד המקור ל-21 יום", en: "Source Code AI Coach for 21 days" },
    discover: false,
    transformation: false,
    challenge: true,
  },
  {
    name: { he: "4 מפגשי זום קבוצתיים", en: "4 Group Zoom Sessions" },
    discover: false,
    transformation: false,
    challenge: true,
  },
  {
    name: { he: "קבוצת WhatsApp פעילה", en: "Active WhatsApp Group" },
    discover: false,
    transformation: false,
    challenge: true,
  },
  {
    name: { he: "גישה לקורסים", en: "Course Access Duration" },
    discover: { he: "-", en: "-" },
    transformation: { he: "180 יום", en: "180 days" },
    challenge: { he: "180 יום", en: "180 days" },
  },
];

function CellValue({ value, locale }: { value: CellVal; locale: Locale }) {
  if (value === true) return <span className="text-gold text-lg">✔</span>;
  if (value === false) return <span className="text-border">-</span>;
  if (typeof value === "string") return <span className="text-xs text-text-secondary">{value}</span>;
  return <span className="text-xs text-text-secondary">{value[locale]}</span>;
}

export function FeatureMatrix({ dict, locale }: Props) {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-display font-bold text-center mb-8">
          {locale === "he" ? "טבלת השוואה מלאה" : "Full Comparison Table"}
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-start py-3 pe-4 font-bold">
                  {locale === "he" ? "מה כלול" : "What's Included"}
                </th>
                <th className="text-center py-3 px-3 font-bold">
                  {dict.programs.discover.name}
                </th>
                <th className="text-center py-3 px-3 font-bold text-gold">
                  {dict.programs.transformation.name}
                </th>
                <th className="text-center py-3 px-3 font-bold">
                  {dict.programs.challenge.name}
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr key={i} className="border-b border-border/50">
                  <td className="py-3 pe-4">{feature.name[locale]}</td>
                  <td className="text-center py-3 px-3">
                    <CellValue value={feature.discover} locale={locale} />
                  </td>
                  <td className="text-center py-3 px-3 bg-gold/5">
                    <CellValue value={feature.transformation} locale={locale} />
                  </td>
                  <td className="text-center py-3 px-3">
                    <CellValue value={feature.challenge} locale={locale} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
