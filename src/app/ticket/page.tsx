import type { Metadata } from "next";
import { TicketHero, TicketForm } from "@/components/routes/ticket";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Submit a Support Ticket | Jadubot",
  description:
    "Open a direct support ticket with Jadubot's engineering team. Quick response times for technical setup, Facebook bot issues, and billing.",
  alternates: {
    canonical: "/ticket/"
  },
  openGraph: {
    title: "Submit a Support Ticket | Jadubot",
    description: "Get prompt assistance from our dedicated support engineers.",
    url: `${siteConfig.url}/ticket/`
  }
};

export default function TicketPage() {
  return (
    <>
      <TicketHero />
      <TicketForm />
    </>
  );
}
