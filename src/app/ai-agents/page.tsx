import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

import {
  AgentsGrid,
  AgentsOverviewFaq,
  AgentsOverviewHero,
  AgentsWorkflowSection
} from "@/components/routes/ai-agents";
import { UnifiedCta } from "@/components/sections";

export const metadata: Metadata = {
  title: "AI Agents for Business | Multi-Agent Conversational AI | Jadubot",
  description:
    "Deploy specialized AI agents for sales, customer support, lead qualification, and order recovery. Turn conversations into revenue across WhatsApp, Messenger, and Instagram with Jadubot.",
  alternates: {
    canonical: `${siteConfig.url}/ai-agents/`
  },
  openGraph: {
    title: "AI Agents for Business | Multi-Agent Conversational AI | Jadubot",
    description:
      "Deploy specialized AI agents for sales, customer support, lead qualification, and order recovery across WhatsApp, Messenger, and Instagram.",
    url: `${siteConfig.url}/ai-agents/`,
    type: "website",
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/assets/images/shared/jadubot-logo.png`,
        width: 1200,
        height: 630,
        alt: "Jadubot AI Agents"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agents for Business | Multi-Agent Conversational AI | Jadubot",
    description:
      "Deploy specialized AI agents for sales, customer support, lead qualification, and order recovery across WhatsApp, Messenger, and Instagram.",
    images: [`${siteConfig.url}/assets/images/shared/jadubot-logo.png`]
  }
};

export default function AiAgentsOverviewPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "AI Agents",
            item: `${siteConfig.url}/ai-agents/`
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        name: "Jadubot AI Workforce",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "Multi-agent conversational AI platform for sales, support, qualification, and e-commerce.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgentsOverviewHero />
      <AgentsGrid />
      <AgentsWorkflowSection />
      <AgentsOverviewFaq />
      <UnifiedCta />
    </>
  );
}
