import type { Metadata } from "next";
import {
  PricingHero,
  PricingCards,
  PricingComparison,
  PricingFaq
} from "@/components/routes/pricing";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Pricing & Plans – Chatbot Automation | Jadubot",
  description:
    "Transparent pricing for Facebook Messenger and Instagram automation. Free Starter plan, affordable Pro plan at ৳999/mo, and custom enterprise tiers.",
  alternates: {
    canonical: "/pricing/"
  },
  openGraph: {
    title: "Pricing & Plans – Chatbot Automation | Jadubot",
    description:
      "Transparent pricing for Facebook Messenger and Instagram automation. Free Starter plan, affordable Pro plan at ৳999/mo.",
    url: `${siteConfig.url}/pricing/`
  }
};

export default function PricingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Jadubot Pro Automation",
    description:
      "All-in-one AI chatbot and marketing automation for Facebook Messenger and Instagram.",
    offers: {
      "@type": "Offer",
      price: "999",
      priceCurrency: "BDT",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/pricing/`
    }
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
