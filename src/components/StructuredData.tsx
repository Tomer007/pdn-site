type Props = {
  data: Record<string, unknown>;
};

export function StructuredData({ data }: Props) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function courseSchema(program: {
  name: string;
  description: string;
  price: number | null;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: program.name,
    description: program.description,
    provider: {
      "@type": "Organization",
      name: "PDN - Personal Development Navigator",
      url: "https://www.pdn.co.il",
    },
    ...(program.price && {
      offers: {
        "@type": "Offer",
        price: program.price,
        priceCurrency: "ILS",
        availability: "https://schema.org/InStock",
      },
    }),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PDN - Personal Development Navigator",
    url: "https://www.pdn.co.il",
    logo: "https://www.pdn.co.il/logo.png",
    founder: {
      "@type": "Person",
      name: "Pnina Ohana-Lublchik",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "center@pdn.co.il",
      contactType: "customer service",
    },
    sameAs: [
      "https://www.youtube.com/@PDNCenter",
      "https://www.facebook.com/PDNCODE/",
    ],
  };
}
