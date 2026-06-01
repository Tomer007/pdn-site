import Link from "next/link";
import { type Locale } from "@/i18n/config";

type Crumb = {
  label: string;
  href?: string;
};

type Props = {
  items: Crumb[];
  locale: Locale;
};

export function Breadcrumbs({ items, locale }: Props) {
  const home = locale === "he" ? "ראשי" : "Home";

  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ol className="flex items-center gap-1.5 text-xs text-text-secondary flex-wrap">
        <li>
          <Link href={`/${locale}`} className="hover:text-gold transition-colors">
            {home}
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span className="text-border">/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-gold transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-navy font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
