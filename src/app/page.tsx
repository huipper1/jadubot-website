import type { Metadata } from "next";

import {
  HomeHero,
  HomeMarquee,
  HomeProblem,
  HomeSolutions,
  HomeFeatures,
  HomeProcess,
  HomePricing,
  HomeFaq
} from "@/components/routes/home";
import { UnifiedCta } from "@/components/sections";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Jadubot | #1 AI-Powered Chatbot & Marketing Automation Tool",
  description:
    "Jadubot is Bangladesh's top AI-powered Chatbot & Marketing Automation tool. Automate Facebook Messenger, Instagram DM, and eCommerce workflows without code.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Jadubot – AI Chatbot for DM, Comment Automation & Messenger Commerce",
    description:
      "Automate inbox replies, comment to DM, and sell products with Messenger commerce.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/assets/images/shared/jadubot-logo.png",
        width: 1200,
        height: 630,
        alt: "Jadubot AI Chatbot"
      }
    ]
  }
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        "name": "Jadubot",
        "url": siteConfig.url,
        "telephone": siteConfig.phone,
        "email": siteConfig.email,
        "sameAs": [
          siteConfig.social.facebook,
          siteConfig.social.twitter
        ].filter(Boolean),
        "logo": {
          "@type": "ImageObject",
          "url": `${siteConfig.url}/assets/images/shared/jadubot-logo.png`
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Daffodil Smart City (DSC), Birulia",
          "addressLocality": "Savar",
          "addressRegion": "Dhaka",
          "postalCode": "1216",
          "addressCountry": "BD"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "Jadubot",
        "operatingSystem": "Web",
        "applicationCategory": "BusinessApplication",
        "description":
          "AI-Powered Chatbot and Marketing Automation Platform for Facebook Messenger, Instagram DMs, Messenger eCommerce, and CPA marketing.",
        "featureList": [
          "Facebook Messenger Automation",
          "Instagram DM & Story Automation",
          "Comment-to-Inbox Lead Converter",
          "In-Messenger Commerce Store",
          "CPA Marketing Automation & Postbacks",
          "SMS & Email Campaign Broadcasting"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.7",
          "reviewCount": "120"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "BDT"
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
      <HomeHero />
      <HomeMarquee />
      <HomeProblem />
      <HomeSolutions />
      <HomeFeatures />
      <HomeProcess />
      <HomePricing />
      <HomeFaq />
      <UnifiedCta />
    </>
  );
}
