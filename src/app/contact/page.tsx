import type { Metadata } from "next";
import { ContactHero, ContactForm, ContactInfo } from "@/components/routes/contact";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us – 24/7 Support & Inquiries | Jadubot",
  description:
    "Get in touch with Jadubot's team in Dhaka, Bangladesh. We are here to answer questions about chatbot automation, enterprise setups, and technical support.",
  alternates: {
    canonical: "/contact/"
  },
  openGraph: {
    title: "Contact Us – 24/7 Support & Inquiries | Jadubot",
    description:
      "Get in touch with Jadubot's team in Dhaka, Bangladesh for chatbot automation and support.",
    url: `${siteConfig.url}/contact/`
  }
};

export default function ContactPage() {
  return (
    <>
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
    </>
  );
}
