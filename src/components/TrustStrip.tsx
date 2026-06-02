import { type Locale } from "@/i18n/config";

type Props = { locale: Locale; variant?: "light" | "dark" };

export function TrustStrip({ locale, variant = "light" }: Props) {
  const items = locale === "he"
    ? ["30+ שנות מחקר", "פטנט IL + US", "1,000+ בוגרים", "תשלום מאובטח", "אפשרות לתשלומים"]
    : ["30+ Years Research", "Patent IL + US", "1,000+ Graduates", "Secure Payment", "Installments"];

  const textColor = variant === "dark" ? "text-white/50" : "text-text-secondary";
  const dotColor = "text-gold";

  return (
    <div className={`flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs ${textColor}`}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1">
          <span className={dotColor}>✦</span> {item}
        </span>
      ))}
    </div>
  );
}
