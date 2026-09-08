import type { Metadata } from "next";
import {
  PricingHero,
  PricingCards,
  PricingComparison,
  PricingFaq,
  PRICING_TIERS
} from "@/components/routes/pricing";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Pricing & Plans – Chatbot Automation | Jadubot",
  description:
    "Transparent pricing for Facebook Messenger and Instagram automation. Free Trial plan, affordable Starter plan at ৳1,000/mo, Premium, and Enterprise tiers.",
  alternates: {
    canonical: "/pricing/"
  },
  openGraph: {
    title: "Pricing & Plans – Chatbot Automation | Jadubot",
    description:
      "Transparent pricing for Facebook Messenger and Instagram automation. Free Trial plan, Starter plan at ৳1,000/mo.",
    url: `${siteConfig.url}/pricing/`
  }
};

export default function PricingPage() {
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
            "name": "Pricing",
            "item": `${siteConfig.url}/pricing/`
          }
        ]
      },
      {
        "@type": "Product",
        "name": "Jadubot Social Automation Plans",
        "description":
          "AI chatbot and marketing automation packages for Facebook Messenger, Instagram DM, and Messenger Commerce.",
        "brand": {
          "@type": "Brand",
          "name": "Jadubot"
        },
        "offers": PRICING_TIERS.map((tier) => ({
          "@type": "Offer",
          "name": tier.name,
          "price": tier.price === "৳FREE" ? "0" : tier.price.replace(/[^0-9]/g, ""),
          "priceCurrency": "BDT",
          "availability": "https://schema.org/InStock",
          "url": `${siteConfig.url}/pricing/`
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
      <PricingHero />
      <PricingCards />
      <PricingComparison />
      <PricingFaq />
    </>
  );
}
