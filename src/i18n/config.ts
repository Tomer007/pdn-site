export const locales = ["he", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "he";

export const localeConfig: Record<Locale, { dir: "rtl" | "ltr"; name: string }> = {
  he: { dir: "rtl", name: "עברית" },
  en: { dir: "ltr", name: "English" },
};
