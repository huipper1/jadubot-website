import type { Metadata } from "next";
import { DemoHero, DemoPerks, DemoForm } from "@/components/routes/demo";
import { siteConfig } from "@/config/site";

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
  return (
    <>
      <DemoHero />
      <section className="relative py-12 md:py-20 border-t border-white/5">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <DemoPerks />
            </div>
            <div className="lg:col-span-3">
              <DemoForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
