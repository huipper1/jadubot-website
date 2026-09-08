export interface CpaPlan {
  tag: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaUrl: string;
  isPopular: boolean;
}

export const CPA_PLANS: CpaPlan[] = [
  {
    tag: "Starter",
    name: "Pack 1",
    price: "৳1,000",
    period: "per month",
    description: "Ideal for solo media buyers testing new offers on Facebook & Instagram.",
    features: [
      "2 Account Setup",
      "Unlimited Automated Messages",
      "Smart Keyword Triggers",
      "Anti-Spam Safety Delays"
    ],
    ctaText: "Get Pack 1",
    ctaUrl: "https://app.jadubot.com/payment/details_package/6",
    isPopular: false
  },
  {
    tag: "Growth",
    name: "Pack 2",
    price: "৳1,500",
    period: "per month",
    description: "Expanded capacity for scaling profitable lead generation campaigns.",
    features: [
      "5 Account Setup",
      "Dynamic Offer Routing",
      "Scaling Rate Controls",
      "Lead Source Tagging",
      "Unlimited Automated Messages"
    ],
    ctaText: "Get Pack 2",
    ctaUrl: "https://app.jadubot.com/payment/details_package/7",
    isPopular: true
  },
  {
    tag: "Advanced",
    name: "Pack 4",
    price: "৳3,000",
    period: "per month",
    description: "High-volume pacing built for aggressive affiliate marketers.",
    features: [
      "15 Account Setup",
      "High-Volume Pacing Engines",
      "Multi-Campaign Handling",
      "Automated Duplicate Filtering",
      "Priority Support Desk"
    ],
    ctaText: "Get Pack 4",
    ctaUrl: "https://app.jadubot.com/payment/details_package/9",
    isPopular: false
  },
  {
    tag: "Agency",
    name: "Pack 5",
    price: "৳5,000",
    period: "per month",
    description: "Enterprise infrastructure for teams managing extensive social portfolios.",
    features: [
      "30 Account Setup",
      "Dedicated High-Speed Instance",
      "Custom S2S Postback Webhooks",
      "Priority VIP Support 24/7",
      "Multi-Seat Team Access"
    ],
    ctaText: "Get Pack 5",
    ctaUrl: "https://app.jadubot.com/",
    isPopular: false
  }
];

export interface CpaFaqItem {
  question: string;
  answer: string;
}

export const CPA_FAQS: CpaFaqItem[] = [
  {
    question: "How does Comment-to-Inbox work for CPA and affiliate offers?",
    answer:
      "When someone comments on your promotional Facebook or Instagram post (or dark boosted ad), Jadubot instantly likes the comment, posts a natural public reply to trigger algorithmic viral reach, and simultaneously shoots a private direct message containing your tracked offer link."
  },
  {
    question: "Will my social accounts get banned for automated CPA messaging?",
    answer:
      "No. Jadubot uses randomized anti-spam delay intervals, human-like typing simulation, and dynamic message spinning (spintax) to ensure your sending volume mimics organic behavior and stays well within Meta Graph API safety thresholds."
  },
  {
    question: "Does Jadubot support server-to-server (S2S) postback tracking?",
    answer:
      "Yes. Jadubot supports inbound and outbound webhook pings and S2S postback URLs. You can fire conversions directly into trackers like Voluum, RedTrack, Binom, or network platforms like Everflow and Cake."
  },
  {
    question: "Can I route users to different CPA offers based on comments or GEOs?",
    answer:
      "Yes. You can configure conditional routing triggers. If a user comments with keyword 'X', they receive Offer A; if they comment with keyword 'Y', they receive Offer B. You can also filter leads by language or country location."
  },
  {
    question: "How do I upgrade from Pack 1 to Pack 4 or 5 as my ad spend scales?",
    answer:
      "You can upgrade instantly from your customer portal dashboard (app.jadubot.com). Your additional account slots and high-volume pacing limits unlock immediately upon payment via bKash, Nagad, or credit card."
  }
];
