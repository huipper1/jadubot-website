import type { Metadata } from "next";
import {
  AffiliateHero,
  AffiliateBenefits,
  AffiliateHowItWorks,
  AffiliateRules,
  AffiliateCta
} from "@/components/routes/affiliate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Jadubot Affiliate Program – Earn 20% Lifetime Recurring Commission",
  description:
    "Join the Jadubot high-paying affiliate program in Bangladesh. Earn 20% recurring monthly commission, get 1-month Standard plan free, and withdraw via bKash, Nagad, or Bank.",
  alternates: {
    canonical: "/affiliate/"
  },
  openGraph: {
    title: "Jadubot Affiliate Program – Earn 20% Recurring Commission",
    description:
      "Join Jadubot's high-paying affiliate program. 20% recurring commission on every referral.",
    url: `${siteConfig.url}/affiliate/`
  }
};

export default function AffiliatePage() {
  return (
    <>
      <AffiliateHero />
      <AffiliateBenefits />
      <AffiliateHowItWorks />
      <AffiliateRules />
      <AffiliateCta />
    </>
  );
}
