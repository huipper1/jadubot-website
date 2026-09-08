export interface PricingTier {
  name: string;
  price: string;
  period: string;
  badge: string | null;
  description: string;
  isPopular: boolean;
  features: string[];
}

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Free Trial",
    price: "৳FREE",
    period: "Lifetime",
    badge: null,
    description: "Experience all the core automation features risk-free for Forever.",
    isPopular: false,
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
    description: "1,000 contacts, unlimited replies, and integrations for your business.",
    isPopular: false,
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
    ]
  },
  {
    name: "Premium Plan",
    price: "৳3,000",
    period: "per month",
    badge: "Most Popular",
    description: "Growing businesses seeking multi-channel automation & CRM sync.",
    isPopular: true,
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
    ]
  },
  {
    name: "Business Plan",
    price: "৳5,000",
    period: "per month",
    badge: "Enterprise",
    description: "Advanced features, high volume messages, and priority automation.",
    isPopular: false,
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
      "Yes, you can upgrade, downgrade, or cancel your subscription at any time directly from your dashboard. There are no lock-in contracts or cancellation penalties."
  },
  {
    question: "What happens if I exceed 500 subscribers on the Starter plan?",
    answer:
      "Your bot will continue replying to existing conversations without interruption. We will send you an alert notification recommending an upgrade to the Pro plan to enable new subscriber growth."
  },
  {
    question: "What payment methods are supported in Bangladesh?",
    answer:
      "We accept all major Bangladeshi payment methods including bKash, Nagad, Rocket, local Visa/Mastercard debit and credit cards, as well as international cards through our secure gateway."
  },
  {
    question: "Is there any setup fee or hidden charge?",
    answer:
      "No. All our prices are transparent with zero setup fees, maintenance costs, or surprise surcharges. The price you see is the price you pay."
  },
  {
    question: "Do you offer a refund guarantee?",
    answer:
      "Yes, Jadubot offers a 7-day unconditional money-back guarantee. If you're not fully satisfied with our service, contact our support team within 7 days for a complete refund."
  }
];
