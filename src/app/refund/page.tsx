import type { Metadata } from "next";
import { RefundHero, RefundPolicy } from "@/components/routes/refund";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Refund Policy – Hassle-Free Satisfaction Guarantee | Jadubot",
  description:
    "Review Jadubot's transparent and fair refund policy. 100% money-back guarantee terms, refund eligibility criteria, and timeline details.",
  alternates: {
    canonical: "/refund/"
  },
  openGraph: {
    title: "Refund Policy | Jadubot",
    description: "Learn about Jadubot's refund guidelines and customer satisfaction commitment.",
    url: `${siteConfig.url}/refund/`
  }
};

export default function RefundPage() {
  return (
    <>
      <RefundHero />
      <RefundPolicy />
    </>
  );
}
