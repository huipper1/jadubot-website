import type { Metadata } from "next";
import {
  ServiceHero,
  ServiceGrid,
  ServiceMetrics,
  ServiceProcess,
  ServiceFaq,
  ServiceCta,
  SERVICE_FAQS
} from "@/components/routes/service";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Services & Chatbot Automation Solutions | Jadubot",
  description:
    "Explore Jadubot's full suite of automation services: Facebook Messenger bots, Instagram DM automation, comment to inbox push, Messenger store checkout, and CPA marketing.",
  alternates: {
    canonical: "/service/"
  },
  openGraph: {
    title: "Services & Chatbot Automation Solutions | Jadubot",
    description:
      "Explore Jadubot's full suite of automation services: Facebook Messenger bots, Instagram DM automation, comment to inbox push, and Messenger store checkout.",
    url: `${siteConfig.url}/service/`
  }
};

export default function ServicePage() {
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
            "name": "Services",
            "item": `${siteConfig.url}/service/`
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Jadubot Social Commerce & Chatbot Automation Services",
        "provider": {
          "@type": "Organization",
          "name": "Jadubot",
          "url": siteConfig.url,
          "telephone": siteConfig.phone,
          "email": siteConfig.email
        },
        "description":
          "All-in-one conversational AI automation services for Facebook Messenger, Instagram DM, Comment-to-Inbox lead generation, In-Messenger eCommerce stores, and CPA marketing.",
        "areaServed": "Bangladesh",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Chatbot Automation Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Facebook Messenger Automation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Instagram DM & Story Automation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Content, AI & Sales Lead Generator"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Messenger Store & Cart System"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "GPS Marketing Automation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Enterprise & Custom AI Training"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": SERVICE_FAQS.map((faq) => ({
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
      <ServiceHero />
      <ServiceGrid />
      <ServiceMetrics />
      <ServiceProcess />
      <ServiceFaq />
      <ServiceCta />
    </>
  );
}
