import type { Metadata } from "next";
import { CpaHero, CpaFeatures, CpaWorkflow } from "@/components/routes/cpa";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "CPA Marketing Automation – Maximize Social Lead Flow | Jadubot",
  description:
    "Automate Facebook and Instagram comments into high-converting CPA leads. Instant server-to-server S2S postbacks, dynamic tracking, and geo-targeted routing.",
  alternates: {
    canonical: "/cpa-marketing-automation/"
  },
  openGraph: {
    title: "CPA Marketing Automation – Maximize Social Lead Flow | Jadubot",
    description:
      "Automate Facebook and Instagram comments into high-converting CPA leads. Instant S2S postbacks and dynamic tracking.",
    url: `${siteConfig.url}/cpa-marketing-automation/`
  }
};

export default function CpaMarketingAutomationPage() {
  return (
    <>
      <CpaHero />
      <CpaFeatures />
      <CpaWorkflow />
    </>
  );
}
