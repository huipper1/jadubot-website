import type { Metadata } from "next";
import { FaqHero, FaqList, FAQ_CATEGORIES } from "@/components/routes/faq";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Jadubot",
  description:
    "Common questions and answers about Jadubot setup, Facebook Messenger bots, Instagram DMs, Messenger eCommerce store, CPA automation, and pricing.",
  alternates: {
    canonical: "/faq/"
  },
  openGraph: {
    title: "Frequently Asked Questions | Jadubot",
    description:
      "Get instant answers to all questions regarding Jadubot chatbot marketing platform.",
    url: `${siteConfig.url}/faq/`
  }
};

export default function FaqPage() {
  const allQuestions = FAQ_CATEGORIES.flatMap((cat) => cat.items);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": siteConfig.url
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "FAQ",
            "item": `${siteConfig.url}/faq/`
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": allQuestions.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FaqHero />
      <FaqList />
    </>
  );
}
