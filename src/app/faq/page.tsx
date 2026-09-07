import type { Metadata } from "next";
import { FaqHero, FaqList } from "@/components/routes/faq";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Jadubot",
  description:
    "Common questions and answers about Jadubot setup, Facebook Messenger bots, Instagram DMs, comment automation, and pricing.",
  alternates: {
    canonical: "/faq/"
  },
  openGraph: {
    title: "Frequently Asked Questions | Jadubot",
    description:
      "Get instant answers to all questions regarding Jadubot chatbot marketing platform.",
    url: `${siteConfig.url}/faq/`
  }
};

export default function FaqPage() {
  return (
    <>
      <FaqHero />
      <FaqList />
    </>
  );
}
