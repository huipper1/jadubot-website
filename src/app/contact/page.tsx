import type { Metadata } from "next";
import {
  ContactHero,
  ContactForm,
  ContactInfo,
  ContactMap
} from "@/components/routes/contact";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us – 24/7 Support & Inquiries | Jadubot",
  description:
    "Get in touch with Jadubot's team at Daffodil Smart City, Savar, Dhaka. We are here to answer questions about chatbot automation, CPA marketing tools, and technical support.",
  alternates: {
    canonical: "/contact/"
  },
  openGraph: {
    title: "Contact Us – 24/7 Support & Inquiries | Jadubot",
    description:
      "Get in touch with Jadubot's team in Dhaka, Bangladesh for chatbot automation and customer support.",
    url: `${siteConfig.url}/contact/`
  }
};

export default function ContactPage() {
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
            "name": "Contact",
            "item": `${siteConfig.url}/contact/`
          }
        ]
      },
      {
        "@type": "ContactPage",
        "@id": `${siteConfig.url}/contact/#webpage`,
        "url": `${siteConfig.url}/contact/`,
        "name": "Contact Jadubot Support & Sales",
        "description":
          "Official contact channels for Jadubot Technologies in Bangladesh: telephone helpline, email, physical address, and community support.",
        "mainEntity": {
          "@type": "Organization",
          "name": "Jadubot",
          "url": siteConfig.url,
          "telephone": siteConfig.phone,
          "email": siteConfig.email,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Daffodil Smart City (DSC), Birulia",
            "addressLocality": "Savar",
            "addressRegion": "Dhaka",
            "postalCode": "1216",
            "addressCountry": "BD"
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": siteConfig.phone,
              "contactType": "customer service",
              "email": siteConfig.email,
              "availableLanguage": ["Bengali", "English"],
              "hoursAvailable": "Mo-Su 09:00-23:00"
            }
          ]
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
      <ContactHero />
      <section className="relative py-12 md:py-20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
      <ContactMap />
    </>
  );
}
