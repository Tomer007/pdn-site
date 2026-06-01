import { Suspense } from "react";
import type { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import { type Locale } from "@/i18n/config";
import { CheckoutClient } from "@/components/CheckoutClient";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);

  return (
    <section className="py-12 sm:py-16 bg-paper min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-display font-bold text-center mb-10">
          {locale === "he" ? "השלמת הרכישה" : "Complete Your Purchase"}
        </h1>
        <Suspense fallback={<div className="text-center py-12">{dict.common.loading}</div>}>
          <CheckoutClient dict={dict} locale={locale} />
        </Suspense>
      </div>
    </section>
  );
}
