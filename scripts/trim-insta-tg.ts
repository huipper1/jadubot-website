import fs from "fs";

let pData = fs.readFileSync("src/data/platform-data.ts", "utf8").replace(/\r\n/g, "\n");

// Instagram Title & Desc
pData = pData.replace(
  `    heroTitle: "Convert Instagram Reels, Stories & DMs into Instant Sales",
    heroHighlight: "Instagram Reels",
    heroDescription:
      "Never miss a hot lead on Instagram again. Automatically reply to Reel comments, send links when followers mention your Stories, qualify buyer intent, and sell products directly inside Instagram Direct.",`,
  `    heroTitle: "Convert Instagram Reels, Stories & DMs into Sales",
    heroHighlight: "Instagram Reels",
    heroDescription:
      "Reply to Reel comments, send links when followers mention Stories, and sell products inside Instagram Direct.",`
);

pData = pData.replace(
  `        title: "Reel & Post Comment Auto DM",
        description:
          "Ask followers to comment a keyword like 'LINK' or 'PRICE' on your Reels and Posts, and let Jadubot instantly DM them the exact product details.",
        badge: "Viral Growth",
        iconName: "Video",`,
  `        title: "Reel Comment Auto DM",
        description: "Trigger instant DMs with pricing when followers comment keywords on Reels.",
        badge: "Viral Growth",
        iconName: "Video",`
);

pData = pData.replace(
  `        title: "Story Mention Auto Reply",
        description:
          "Build brand loyalty by instantly thanking customers whenever they tag your Instagram handle in their Stories, along with special discount vouchers.",
        badge: "Social Proof",
        iconName: "Share2",`,
  `        title: "Story Mention Auto Reply",
        description: "Thank customers instantly whenever they tag your handle and share coupon vouchers.",
        badge: "Social Proof",
        iconName: "Share2",`
);

pData = pData.replace(
  `        title: "Story Reply Automation",
        description:
          "Engage viewers when they reply to your interactive Stories, polls, or question stickers with tailored conversational sales funnels.",
        badge: "Story Funnels",
        iconName: "Eye",`,
  `        title: "Story Reply Automation",
        description: "Engage viewers responding to Stories, polls, and stickers with tailored sales funnels.",
        badge: "Story Funnels",
        iconName: "Eye",`
);

pData = pData.replace(
  `        title: "Instagram Shop & Product Visuals",
        description:
          "Showcase vibrant product images, pricing tables, and stock availability directly inside Instagram DMs with interactive carousel cards.",
        badge: "Visual Commerce",
        iconName: "ShoppingBag",`,
  `        title: "In-DM Product Catalogs",
        description: "Showcase product image carousels, pricing tables, and stock directly in Instagram DMs.",
        badge: "Visual Commerce",
        iconName: "ShoppingBag",`
);

pData = pData.replace(
  `        title: "Lead Qualification & Contact Capture",
        description:
          "Qualify customer budget, requirements, and readiness before automatically routing high-value prospects to your sales team.",
        badge: "Qualified Leads",
        iconName: "UserCheck",`,
  `        title: "Lead Qualification in DMs",
        description: "Qualify buyer budget and collect phone numbers before routing to sales closers.",
        badge: "Qualified Leads",
        iconName: "UserCheck",`
);

pData = pData.replace(
  `        title: "Unified Instagram & Messenger Inbox",
        description:
          "Consolidate your Instagram DMs alongside Facebook Messenger and WhatsApp into a single powerful team management hub.",
        badge: "Team Management",
        iconName: "Inbox",`,
  `        title: "Unified Omnichannel Inbox",
        description: "Consolidate Instagram DMs alongside Messenger and WhatsApp in one team dashboard.",
        badge: "Team Management",
        iconName: "Inbox",`
);

// Telegram Features
pData = pData.replace(
  `        title: "Instant AI Customer Service Bot",
        description:
          "Deliver lightning-fast automated answers to common questions, technical documentation, and product inquiries 24 hours a day.",
        badge: "Real-time AI",
        iconName: "Bot",`,
  `        title: "AI Support Bot",
        description: "Deliver instant answers to product queries and documentation 24 hours a day.",
        badge: "Real-time AI",
        iconName: "Bot",`
);

pData = pData.replace(
  `        title: "Unlimited Channel & Group Broadcasting",
        description:
          "Broadcast promotional announcements, news updates, trading signals, and newsletters to unlimited Telegram channels without delivery restrictions.",
        badge: "Unrestricted Reach",
        iconName: "Send",`,
  `        title: "Unlimited Channel Broadcasts",
        description: "Broadcast announcements, news updates, and signals to unlimited subscribers without delivery caps.",
        badge: "Unrestricted Reach",
        iconName: "Send",`
);

pData = pData.replace(
  `        title: "Community Moderation & Member Onboarding",
        description:
          "Protect your public and private Telegram groups from spam, welcome new members automatically, and enforce community guidelines effortlessly.",
        badge: "Automated Safety",
        iconName: "Shield",`,
  `        title: "Community Moderation Bot",
        description: "Protect Telegram groups from spam, welcome joiners automatically, and enforce rules.",
        badge: "Automated Safety",
        iconName: "Shield",`
);

pData = pData.replace(
  `        title: "Interactive Mini-Funnels & Lead Capture",
        description:
          "Guide Telegram users through structured question funnels to capture contact details, qualify interest, and generate sales leads.",
        badge: "Lead Funnels",
        iconName: "Filter",`,
  `        title: "Interactive Lead Funnels",
        description: "Guide users through button funnels to capture contact details and score interest.",
        badge: "Lead Funnels",
        iconName: "Filter",`
);

pData = pData.replace(
  `        title: "Digital Product Delivery & Payments",
        description:
          "Sell access to premium content, digital files, webinars, and software licenses directly inside Telegram conversations.",
        badge: "Digital Commerce",
        iconName: "CreditCard",`,
  `        title: "Digital Product Delivery",
        description: "Sell premium content access, digital files, and licenses directly in chat.",
        badge: "Digital Commerce",
        iconName: "CreditCard",`
);

pData = pData.replace(
  `        title: "Custom Webhook Trigger Engine",
        description:
          "Connect external software, server monitors, and CRM events to trigger instantaneous Telegram alerts and updates.",
        badge: "Developer Friendly",
        iconName: "Code",`,
  `        title: "Custom Webhook Alerts",
        description: "Connect external software and CRM events to trigger instant Telegram alerts.",
        badge: "Developer Friendly",
        iconName: "Code",`
);

fs.writeFileSync("src/data/platform-data.ts", pData, "utf8");
console.log("Successfully updated Instagram and Telegram!");
