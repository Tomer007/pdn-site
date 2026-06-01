import type { Locale } from "./config";

const dictionaries = {
  he: () => import("./locales/he.json").then((m) => m.default),
  en: () => import("./locales/en.json").then((m) => m.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
