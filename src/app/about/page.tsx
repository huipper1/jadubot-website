import type { Metadata } from "next";
import {
  AboutHero,
  AboutStats,
  AboutMission,
  AboutStory
} from "@/components/routes/about";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us – AI Chatbot Pioneers in Bangladesh | Jadubot",
  description:
    "Learn about Jadubot's mission to revolutionize social commerce and customer communication in Bangladesh with intelligent, 24/7 conversational AI.",
  alternates: {
    canonical: "/about/"
  },
  openGraph: {
    title: "About Us – AI Chatbot Pioneers in Bangladesh | Jadubot",
    description:
      "Learn about Jadubot's mission to revolutionize social commerce in Bangladesh.",
    url: `${siteConfig.url}/about/`
  }
};

export default function AboutPage() {
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
            "name": "About",
            "item": `${siteConfig.url}/about/`
          }
        ]
      },
      {
        "@type": "AboutPage",
        "@id": `${siteConfig.url}/about/#webpage`,
        "url": `${siteConfig.url}/about/`,
        "name": "About Jadubot Technologies",
        "isPartOf": {
          "@id": `${siteConfig.url}/#website`
        },
        "description":
          "Founded in Bangladesh, Jadubot builds cutting-edge conversational AI automation for Facebook Messenger, Instagram DMs, Messenger eCommerce, and CPA performance marketing.",
        "mainEntity": {
          "@type": "Organization",
          "name": "Jadubot",
          "url": siteConfig.url,
          "logo": `${siteConfig.url}/assets/images/shared/jadubot-logo.png`,
          "foundingLocation": {
            "@type": "Place",
            "name": "Dhaka, Bangladesh"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Daffodil Smart City (DSC), Birulia",
            "addressLocality": "Savar",
            "addressRegion": "Dhaka",
            "postalCode": "1216",
            "addressCountry": "BD"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": siteConfig.phone,
            "contactType": "customer support",
            "email": siteConfig.email,
            "availableLanguage": ["Bengali", "English"]
          }
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
      <AboutHero />
      <AboutStats />
      <AboutMission />
      <AboutStory />
    </>
  );
}
