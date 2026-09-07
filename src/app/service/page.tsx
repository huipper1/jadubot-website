import type { Metadata } from "next";
import { ServiceHero, ServiceGrid, ServiceCta } from "@/components/routes/service";
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
  return (
    <>
      <ServiceHero />
      <ServiceGrid />
      <ServiceCta />
    </>
  );
}
