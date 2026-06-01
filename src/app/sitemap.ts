import type { MetadataRoute } from "next";

const BASE_URL = "https://pdn-site.onrender.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["he", "en"];
  const pages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/programs", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/programs/discover", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/programs/transformation", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/programs/challenge", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/method", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/codes", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/success", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/articles", priority: 0.6, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${BASE_URL}/${locale}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: {
            he: `${BASE_URL}/he${page.path}`,
            en: `${BASE_URL}/en${page.path}`,
          },
        },
      });
    }
  }

  return entries;
}
