import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { CALENDLY_DEMO_URL, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Book a Free Demo – Experience Smarter Automation | Jadubot",
  description:
    "Schedule a free 1-on-1 personalized demo with Jadubot's automation experts. Discover how AI chat flows, comment auto-replies, and Messenger commerce can elevate your business.",
  alternates: {
    canonical: "/book-a-free-demo/"
  },
  openGraph: {
    title: "Book a Free Demo | Jadubot",
    description: "Schedule a free 1-on-1 personalized chatbot demo session.",
    url: `${siteConfig.url}/book-a-free-demo/`
  }
};

export default function BookADemoPage() {
  redirect(CALENDLY_DEMO_URL);
}
