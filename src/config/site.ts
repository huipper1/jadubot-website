import type { SiteConfig } from "@/types/site-config";
import { env } from "@/env";

// FIXME: Update site branding, theme color, social links, and OG image
export const siteConfig: SiteConfig = {
  name: "Jadubot",
  description:
    "Bangladesh's #1 AI-Powered Chatbot & Marketing Automation Tool for Facebook Messenger, Instagram DMs, and eCommerce.",
  url: env.NEXT_PUBLIC_SITE_URL,
  author: "Jadubot Support",
  locale: "en",
  themeColor: "#8e2de2",
  keywords: [
    "jadubot",
    "chatbot",
    "marketing automation",
    "facebook page auto reply",
    "comment to inbox",
    "bangladesh"
  ],
  social: {
    twitter: "https://twitter.com/jadubot",
    github: "",
    linkedin: "https://www.facebook.com/jadubotbd/"
  },
  ogImage: "/assets/images/shared/jadubot-logo.png"
} as const;

export const CALENDLY_DEMO_URL = "https://calendly.com/jadubot-com/30min?month=2026-09";
