import type { Metadata } from "next";
import { AboutHero, AboutMission, AboutStory } from "@/components/routes/about";
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
  return (
    <>
      <AboutHero />
      <AboutMission />
      <AboutStory />
    </>
  );
}
