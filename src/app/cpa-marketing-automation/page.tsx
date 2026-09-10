import type { Metadata } from "next";
import {
  CpaMasthead,
  CpaFeatures,
  CpaWorkflow,
  CpaPricing,
  CpaFaq,
  CPA_FAQS,
  CPA_PLANS
} from "@/components/routes/cpa";
import { UnifiedCta } from "@/components/sections";
import { siteConfig, CALENDLY_DEMO_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "CPA Marketing Automation – Maximize Social Lead Flow | Jadubot",
  description:
    "Automate Facebook and Instagram comments into high-converting CPA leads. Instant server-to-server S2S postbacks, dynamic tracking, and geo-targeted routing.",
  alternates: {
    canonical: "/cpa-marketing-automation/"
  },
  openGraph: {
    title: "CPA Marketing Automation – Maximize Social Lead Flow | Jadubot",
    description:
      "Automate Facebook and Instagram comments into high-converting CPA leads. Instant S2S postbacks and dynamic tracking.",
    url: `${siteConfig.url}/cpa-marketing-automation/`
  }
};

export default function CpaMarketingAutomationPage() {
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
            "name": "CPA Automation",
            "item": `${siteConfig.url}/cpa-marketing-automation/`
          }
        ]
      },
      {
        "@type": "Product",
        "name": "Jadubot CPA Marketing Automation",
        "description":
          "High-volume comment-to-inbox auto-reply suite, multi-account routing, and server-to-server postback integration for CPA affiliate campaigns.",
        "brand": {
          "@type": "Brand",
          "name": "Jadubot"
        },
        "offers": CPA_PLANS.map((plan) => ({
          "@type": "Offer",
          "name": plan.name,
          "price": plan.price.replace(/[^0-9]/g, ""),
          "priceCurrency": "BDT",
          "url": plan.ctaUrl,
          "availability": "https://schema.org/InStock"
        }))
      },
      {
        "@type": "FAQPage",
        "mainEntity": CPA_FAQS.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
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
      <CpaMasthead />
      <CpaFeatures />
      <CpaWorkflow />
      <CpaPricing />
      <CpaFaq />
      <UnifiedCta
        badge="CPA AUTOMATION SCALE"
        title="Ready to Scale Your CPA Conversions with"
        highlightedTitle="Zero Account Risks?"
        description="Deploy high-converting Messenger and Instagram lead funnels today. S2S postback tracking, anti-spam protections, and unlimited lead capture."
        primaryCta={{
          text: "Launch CPA Automation",
          href: "https://app.jadubot.com/",
          external: true
        }}
        secondaryCta={{
          text: "Book Strategy Call",
          href: CALENDLY_DEMO_URL,
          external: true
        }}
        trustBadges={[
          "Sub-Second S2S Postbacks",
          "Anti-Spam Human Mimicking",
          "24/7 Dedicated Support"
        ]}
      />
    </>
  );
}
