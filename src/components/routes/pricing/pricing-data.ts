export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  badge: string | null;
  description: string;
  isPopular: boolean;
  ctaText: string;
  specPill: string;
  previousTierText?: string;
  features: string[];
  highlightFeatures?: string[];
  href: string;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "free",
    name: "Free Trial",
    price: "৳FREE",
    period: "Lifetime",
    badge: null,
    description: "Experience all core chatbot features risk-free forever. No credit card required.",
    isPopular: false,
    ctaText: "Start Free Forever",
    specPill: "500 Subscribers Included",
    features: [
      "Single Facebook Page",
      "Connect Account: 1",
      "Message Credit: 1K / Month",
      "Subscribers: 500",
      "Bot AI Token: 10K / Month",
      "Broadcast: 5K / Month",
      "Unlimited Auto Comment",
      "Comment to Inbox Automation"
    ],
    href: "https://app.jadubot.com/register"
  },
  {
    id: "starter",
    name: "Starter Plan",
    price: "৳1,000",
    period: "per month",
    badge: null,
    description: "Essential auto-reply and inbox push for growing Facebook shops and pages.",
    isPopular: false,
    ctaText: "Get Starter Plan",
    specPill: "1K Subscribers • 10K msgs",
    previousTierText: "Everything in Free, plus:",
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
    highlightFeatures: ["WhatsApp - 4 Active Flows"],
    href: "https://app.jadubot.com/register?plan=starter"
  },
  {
    id: "premium",
    name: "Premium Plan",
    price: "৳3,000",
    period: "per month",
    badge: "Most Popular",
    description: "Multi-channel automation for scaling brands across Facebook, Instagram, and WhatsApp.",
    isPopular: true,
    ctaText: "Get Premium Plan",
    specPill: "100K Subscribers • Multi-channel",
    previousTierText: "Everything in Starter, plus:",
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
    ],
    href: "https://app.jadubot.com/register?plan=premium"
  },
  {
    id: "business",
    name: "Business Plan",
    price: "৳5,000",
    period: "per month",
    badge: "Enterprise",
    description: "High-volume messaging, team management, and 24/7 dedicated support for established enterprises.",
    isPopular: false,
    ctaText: "Get Business Plan",
    specPill: "1M Subscribers • Unlimited Accounts",
    previousTierText: "Everything in Premium, plus:",
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
    ],
    href: "https://app.jadubot.com/register?plan=business"
  }
];

export interface ComparisonRow {
  feature: string;
  tooltip?: string;
  free: string | boolean;
  starter: string | boolean;
  premium: string | boolean;
  business: string | boolean;
}

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: "Monthly Price (BDT)",
    free: "৳0",
    starter: "৳1,000 / mo",
    premium: "৳3,000 / mo",
    business: "৳5,000 / mo"
  },
  {
    feature: "Connected Social Accounts",
    tooltip: "Number of brand profiles/pages that can be linked concurrently",
    free: "1 Account",
    starter: "3 Accounts",
    premium: "3 Accounts",
    business: "Unlimited"
  },
  {
    feature: "Facebook Pages Supported",
    free: "Single Page",
    starter: "Multiple Pages",
    premium: "Multiple Pages",
    business: "Multiple Pages"
  },
  {
    feature: "Total Subscriber Capacity",
    tooltip: "Active contacts stored in your bot contact list",
    free: "500",
    starter: "1,000",
    premium: "100,000",
    business: "1,000,000"
  },
  {
    feature: "Monthly Message Credits",
    tooltip: "Automated direct replies sent per calendar month",
    free: "1,000 / mo",
    starter: "10,000 / mo",
    premium: "100,000 / mo",
    business: "1,000,000 / mo"
  },
  {
    feature: "Bot AI Token Quota",
    tooltip: "OpenAI-powered conversational reply tokens",
    free: "10,000 / mo",
    starter: "10,000 / mo",
    premium: "100,000 / mo",
    business: "1,000,000 / mo"
  },
  {
    feature: "Monthly Broadcast Capacity",
    free: "5,000 / mo",
    starter: "5,000 / mo",
    premium: "10,000 / mo",
    business: "Unlimited"
  },
  {
    feature: "Unlimited Auto Comments & Replies",
    tooltip: "Instantly comment back on page posts and reels",
    free: true,
    starter: true,
    premium: true,
    business: true
  },
  {
    feature: "Comment to Inbox (Auto DM)",
    tooltip: "Automatically push public commenters into private Messenger DMs",
    free: true,
    starter: true,
    premium: true,
    business: true
  },
  {
    feature: "WhatsApp Cloud API Integration",
    free: false,
    starter: "4 Active Flows",
    premium: "Unlimited Flows",
    business: "Unlimited Flows"
  },
  {
    feature: "Instagram DM & Story Mention Bot",
    free: false,
    starter: false,
    premium: true,
    business: true
  },
  {
    feature: "Google Sheets Two-Way Live Sync",
    tooltip: "Stream orders and lead data directly to spreadsheets in real time",
    free: false,
    starter: false,
    premium: true,
    business: true
  },
  {
    feature: "HTTP API & Webhooks Integration",
    free: false,
    starter: false,
    premium: true,
    business: true
  },
  {
    feature: "Telegram Community / Group Manager",
    free: false,
    starter: false,
    premium: true,
    business: true
  },
  {
    feature: "WhatsApp Automated Appointments",
    free: false,
    starter: false,
    premium: false,
    business: true
  },
  {
    feature: "Team Member Collaborator Seats",
    free: "1 Member",
    starter: "1 Member",
    premium: "3 Members",
    business: "10 Members"
  },
  {
    feature: "Support & SLA Guarantee",
    free: "Community Help",
    starter: "Email Support",
    premium: "Priority WhatsApp & Chat",
    business: "24/7 Dedicated Manager"
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

export interface ClientLogo {
  name: string;
  category: string;
}

export const CLIENT_LOGOS: ClientLogo[] = [
  { name: "Aarong Artisans", category: "Retail & Apparel" },
  { name: "Apex Footwear Store", category: "Footwear" },
  { name: "Shwapno Groceries", category: "E-Commerce" },
  { name: "Daraz Merchant Hub", category: "Marketplace" },
  { name: "Yellow Clothing", category: "Fashion" },
  { name: "Chaldal Express", category: "Daily Essentials" },
  { name: "Sailor Trendz", category: "Lifestyle" },
  { name: "Pickaboo Gadgets", category: "Electronics" }
];

export const TESTIMONIAL_DATA = {
  quote:
    "We were losing dozens of high-intent orders every night between 10 PM and 8 AM while our support staff was asleep. Jadubot automated our entire Facebook Messenger and Instagram DM sales funnel within minutes. It paid for itself within the very first weekend.",
  author: "Tanvir Ahmed",
  role: "Founder & Head of Growth",
  company: "Urban Trendz Bangladesh",
  avatar: "/assets/images/avatar/claude.avif"
};
