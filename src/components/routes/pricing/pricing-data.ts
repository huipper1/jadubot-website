export interface PricingTier {
  name: string;
  price: string;
  period: string;
  badge: string | null;
  description: string;
  isPopular: boolean;
  ctaText: string;
  features: string[];
  highlightFeatures?: string[];
}

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Free Trial",
    price: "৳FREE",
    period: "Lifetime",
    badge: null,
    description: "Experience all core chatbot features risk-free forever. No credit card required.",
    isPopular: false,
    ctaText: "Start Free Forever",
    features: [
      "Single Facebook Page",
      "Connect Account: 1",
      "Message Credit: 1K / Month",
      "Subscribers: 500",
      "Bot AI Token: 10K / Month",
      "Broadcast: 5K / Month",
      "Unlimited Auto Comment",
      "Comment to Inbox Automation"
    ]
  },
  {
    name: "Starter Plan",
    price: "৳1,000",
    period: "per month",
    badge: null,
    description: "Essential auto-reply and inbox push for growing Facebook shops and pages.",
    isPopular: false,
    ctaText: "Get Starter Plan",
    features: [
      "Multiple Facebook Pages",
      "Connect Account: 3",
      "Message Credit: 10K / Month",
      "Subscribers: 1K",
      "Bot AI Token: 10K / Month",
      "Broadcast: 5K / Month",
      "WhatsApp - 4 Active Flows",
      "Unlimited Auto Comment",
      "Comment to Inbox Automation"
    ],
    highlightFeatures: ["WhatsApp - 4 Active Flows"]
  },
  {
    name: "Premium Plan",
    price: "৳3,000",
    period: "per month",
    badge: "Most Popular",
    description: "Multi-channel automation for scaling brands across Facebook, Instagram, and WhatsApp.",
    isPopular: true,
    ctaText: "Get Premium Plan",
    features: [
      "Multiple Facebook Pages",
      "Connect Account: 3",
      "Message Credit: 100K / Month",
      "Subscribers: 100K",
      "Bot AI Token: 100K / Month",
      "Broadcast: 10K / Month",
      "Facebook, Instagram & WhatsApp",
      "Google Sheets & HTTP API Sync",
      "Telegram Group Manager",
      "Unlimited Auto Comment & Inbox"
    ],
    highlightFeatures: [
      "Facebook, Instagram & WhatsApp",
      "Google Sheets & HTTP API Sync"
    ]
  },
  {
    name: "Business Plan",
    price: "৳5,000",
    period: "per month",
    badge: "Enterprise",
    description: "High-volume messaging, team management, and 24/7 dedicated support for established enterprises.",
    isPopular: false,
    ctaText: "Get Business Plan",
    features: [
      "Multiple Facebook Pages",
      "Connect Account: Unlimited",
      "Message Credit: 1M / Month",
      "Subscribers: 1M",
      "Bot AI Token: 1M / Month",
      "Unlimited WhatsApp Flows",
      "WhatsApp Appointment System",
      "Team Member Seats: 10",
      "Dedicated 24/7 Priority Support",
      "Unlimited Auto Comment & Inbox"
    ],
    highlightFeatures: [
      "Connect Account: Unlimited",
      "Unlimited WhatsApp Flows",
      "Dedicated 24/7 Priority Support"
    ]
  }
];

export interface PricingFaqItem {
  question: string;
  answer: string;
}

export const PRICING_FAQS: PricingFaqItem[] = [
  {
    question: "Can I change my plan or cancel at any time?",
    answer:
      "Yes, you can upgrade, downgrade, or cancel your subscription at any time directly from your merchant dashboard. There are no lock-in contracts, setup fees, or cancellation penalties."
  },
  {
    question: "What happens if I exceed my subscriber or message limits?",
    answer:
      "Your bot will never abruptly shut down. It will continue replying to existing active conversations so you don't lose sales. You will receive an email and dashboard notification recommending an upgrade to maintain full volume capacity."
  },
  {
    question: "What payment methods are supported in Bangladesh?",
    answer:
      "We support all popular Bangladeshi payment channels including bKash, Nagad, Rocket, local Visa/Mastercard debit and credit cards, and internet banking, processed through SSL-secured payment gateways."
  },
  {
    question: "Is there any setup fee or hidden charge?",
    answer:
      "None. All Jadubot pricing is 100% transparent with zero setup fees, maintenance costs, or hidden surprises. The price in Bangladeshi Taka (৳) shown on this page is exactly what you pay."
  },
  {
    question: "Do you offer a refund guarantee?",
    answer:
      "Yes. Jadubot provides a 7-day unconditional money-back guarantee. If our platform does not meet your business expectations, simply contact our support team within 7 days for a 100% hassle-free refund."
  },
  {
    question: "Will my Facebook or Instagram account get banned for using Jadubot?",
    answer:
      "No. Jadubot is built 100% on official Meta Graph APIs and WhatsApp Cloud API standards. We never use unauthorized scraping or browser automation. Your pages and accounts remain fully safe, secure, and compliant."
  }
];
