import fs from "fs";

// Platform data rewrites
const platformUpdatedFeatures = {
  "whatsapp-automation": {
    featuresSectionTitle: "WhatsApp Built for Selling",
    featuresSectionSubtitle: "Turn conversations into revenue with official Cloud API integrations and 24/7 AI.",
    features: [
      {
        iconName: "Bot",
        title: "24/7 AI Sales",
        description: "Answer product and pricing inquiries instantly in natural language."
      },
      {
        iconName: "Send",
        title: "Targeted Broadcasts",
        description: "Send promotions and alerts with 98% open rates."
      },
      {
        iconName: "ShoppingCart",
        title: "Cart Recovery",
        description: "Recover checkouts with one-click links and instant confirmation."
      },
      {
        iconName: "Users",
        title: "Shared Team Inbox",
        description: "Monitor chats, add internal notes, and take over seamlessly."
      },
      {
        iconName: "GitFork",
        title: "Visual Flow Builder",
        description: "Build conversation funnels and interactive button menus without code."
      },
      {
        iconName: "Layers",
        title: "Real-Time Webhooks",
        description: "Sync CRM, spreadsheets, and payments for instant WhatsApp alerts."
      }
    ]
  },
  "facebook-automation": {
    featuresSectionTitle: "Sell Faster on Facebook",
    featuresSectionSubtitle: "Convert post comments and ad inquiries into revenue with automated Messenger funnels.",
    features: [
      {
        iconName: "MessageCircle",
        title: "Auto Comment Replies",
        description: "Reply to post comments and send private product links."
      },
      {
        iconName: "Share2",
        title: "Click-to-Messenger Ads",
        description: "Convert ad clicks into conversations that capture leads 24/7."
      },
      {
        iconName: "ShoppingCart",
        title: "In-Chat Commerce",
        description: "Display product catalogs, collect orders, and confirm COD details."
      },
      {
        iconName: "Bot",
        title: "Automated Messenger FAQs",
        description: "Resolve frequent customer questions instantly with zero wait times."
      },
      {
        iconName: "Users",
        title: "Smart Agent Routing",
        description: "Hand over high-priority buyer chats to live team members."
      },
      {
        iconName: "BarChart3",
        title: "Campaign Attribution",
        description: "Track which posts and ads generate your highest sales."
      }
    ]
  },
  "instagram-automation": {
    featuresSectionTitle: "Automate Instagram Sales",
    featuresSectionSubtitle: "Monetize Reels and Story engagement with automated Direct Message sales funnels.",
    features: [
      {
        iconName: "Video",
        title: "Reel Comment Auto DM",
        description: "Trigger instant DMs when followers comment keywords on Reels."
      },
      {
        iconName: "Share2",
        title: "Story Mention Replies",
        description: "Thank customers automatically and deliver exclusive discount coupons."
      },
      {
        iconName: "Eye",
        title: "Story Reply Funnels",
        description: "Engage viewers responding to Stories with interactive sales menus."
      },
      {
        iconName: "ShoppingBag",
        title: "In-DM Product Catalogs",
        description: "Showcase photos, pricing, and live inventory directly in DMs."
      },
      {
        iconName: "UserCheck",
        title: "Lead Qualification",
        description: "Collect phone numbers and qualify buyers before sales handover."
      },
      {
        iconName: "Inbox",
        title: "Omnichannel Team Inbox",
        description: "Manage Instagram DMs alongside Messenger and WhatsApp in one place."
      }
    ]
  },
  "telegram-automation": {
    featuresSectionTitle: "Fast Telegram Automation",
    featuresSectionSubtitle: "Leverage Telegram to build interactive bots, broadcast updates, and engage communities.",
    features: [
      {
        iconName: "Bot",
        title: "AI Support Bot",
        description: "Deliver instant answers to product queries and documentation 24/7."
      },
      {
        iconName: "Volume2",
        title: "Unlimited Broadcasts",
        description: "Send announcements and signals to unlimited subscribers without caps."
      },
      {
        iconName: "Shield",
        title: "Group Moderation Bot",
        description: "Protect groups from spam, welcome members, and enforce rules."
      },
      {
        iconName: "Filter",
        title: "Interactive Lead Funnels",
        description: "Guide users through button menus to collect contact details."
      },
      {
        iconName: "CreditCard",
        title: "Digital Product Delivery",
        description: "Sell premium content access and licenses directly in chat."
      },
      {
        iconName: "Code",
        title: "Custom Webhook Alerts",
        description: "Connect software and CRM events for instant Telegram notifications."
      }
    ]
  },
  "website-chat-automation": {
    featuresSectionTitle: "Engage Website Visitors",
    featuresSectionSubtitle: "Turn website visitors into pipeline with intelligent knowledge-powered chat.",
    features: [
      {
        iconName: "Zap",
        title: "Proactive Site Triggers",
        description: "Trigger greetings based on page views and visitor dwell time."
      },
      {
        iconName: "BookOpen",
        title: "AI Knowledge Ingestion",
        description: "Answer technical questions accurately using your uploaded documentation."
      },
      {
        iconName: "UserCheck",
        title: "Automated Lead Intake",
        description: "Collect verified emails, phone numbers, and company details instantly."
      },
      {
        iconName: "Headphones",
        title: "Live Agent Handoff",
        description: "Transfer active chats to human representatives with complete context."
      },
      {
        iconName: "Palette",
        title: "Brandable Widget",
        description: "Customize theme colors, avatars, and placement to match your brand."
      },
      {
        iconName: "Shuffle",
        title: "Cross-Channel Continuity",
        description: "Continue web conversations on WhatsApp or Messenger seamlessly."
      }
    ]
  }
};

// AI agent data rewrites
const aiAgentUpdatedFeatures = {
  "lead-qualification": {
    featuresSectionTitle: "Qualify Leads at Scale",
    featuresSectionSubtitle: "Identify high-intent buyers instantly and book meetings directly into sales calendars.",
    features: [
      {
        iconName: "Filter",
        title: "Inbound Diagnostics",
        description: "Uncover budget, urgency, and purchase timeline through natural dialogue."
      },
      {
        iconName: "Calendar",
        title: "Instant Meeting Booking",
        description: "Allow qualified prospects to book calendar slots directly in chat."
      },
      {
        iconName: "GitMerge",
        title: "Intelligent Lead Routing",
        description: "Route VIP enterprise leads immediately to designated sales closers."
      },
      {
        iconName: "Database",
        title: "Instant CRM Sync",
        description: "Sync verified phone numbers and deal data directly into CRM."
      },
      {
        iconName: "Share2",
        title: "Omnichannel Inbound",
        description: "Qualify leads across ads, social channels, and website traffic."
      },
      {
        iconName: "RefreshCw",
        title: "Lead Re-engagement",
        description: "Revive cold prospects automatically with timely, personalized follow-ups."
      }
    ]
  },
  "customer-support": {
    featuresSectionTitle: "Empathetic Support Automation",
    featuresSectionSubtitle: "Resolve customer inquiries instantly without wait times or robotic phone trees.",
    features: [
      {
        iconName: "BookOpen",
        title: "Knowledge Grounding",
        description: "Train agents on verified manuals and policies for truthful answers."
      },
      {
        iconName: "UserCheck",
        title: "Smart Human Escalation",
        description: "Detect customer frustration to transfer chats to live agents immediately."
      },
      {
        iconName: "Search",
        title: "Live Order Status",
        description: "Query tracking numbers, warranty records, and invoices in real time."
      },
      {
        iconName: "Globe",
        title: "Multilingual Support",
        description: "Serve customers fluently across more than 50 global languages."
      },
      {
        iconName: "Inbox",
        title: "Shared Team Inbox",
        description: "View full history, leave private notes, and collaborate on tickets."
      },
      {
        iconName: "BarChart3",
        title: "Deflection Analytics",
        description: "Track trending support questions and automated resolution rates easily."
      }
    ]
  },
  "sales-agent": {
    featuresSectionTitle: "Automated Conversational Sales",
    featuresSectionSubtitle: "Guide prospective buyers from discovery to confirmed order in a few chat messages.",
    features: [
      {
        iconName: "ShoppingBag",
        title: "In-Chat Carousels",
        description: "Showcase photos, pricing, and variants inside WhatsApp and Messenger."
      },
      {
        iconName: "ShoppingBag",
        title: "Smart Recommendations",
        description: "Suggest complementary products and upsells based on customer preferences."
      },
      {
        iconName: "Truck",
        title: "In-Chat Order Taking",
        description: "Collect shipping addresses and notes without external website redirects."
      },
      {
        iconName: "CreditCard",
        title: "Flexible Checkout",
        description: "Support Cash on Delivery, payment links, and bank transfers easily."
      },
      {
        iconName: "RotateCcw",
        title: "Checkout Follow-ups",
        description: "Re-engage shoppers who paused before finalizing their chat orders."
      },
      {
        iconName: "TrendingUp",
        title: "High-Ticket Escalation",
        description: "Route wholesale and bulk quote requests directly to account executives."
      }
    ]
  },
  "shopify-whatsapp": {
    featuresSectionTitle: "Shopify WhatsApp Integration",
    featuresSectionSubtitle: "Leverage 98% open rates to increase Shopify store revenue and customer retention.",
    features: [
      {
        iconName: "RotateCcw",
        title: "Cart Recovery",
        description: "Recover abandoned checkouts with one-click pre-filled WhatsApp links."
      },
      {
        iconName: "Truck",
        title: "Shipping Status Alerts",
        description: "Send automated updates for order confirmation, dispatch, and delivery."
      },
      {
        iconName: "Database",
        title: "Live Inventory Sync",
        description: "Check live Shopify stock levels, variant options, and active discounts."
      },
      {
        iconName: "ShieldCheck",
        title: "COD Order Verification",
        description: "Verify Cash on Delivery orders to prevent costly return failures."
      },
      {
        iconName: "Star",
        title: "Review Collection",
        description: "Collect customer reviews and ratings on WhatsApp following delivery."
      },
      {
        iconName: "Share2",
        title: "Social Commerce Scale",
        description: "Deploy Shopify catalogs simultaneously to Messenger and Instagram DMs."
      }
    ]
  },
  "woocommerce-whatsapp": {
    featuresSectionTitle: "WooCommerce WhatsApp Engine",
    featuresSectionSubtitle: "Unlock conversational commerce for WordPress with deep REST API and webhook integration.",
    features: [
      {
        iconName: "RotateCcw",
        title: "Cart Recovery",
        description: "Send timely WhatsApp recovery messages with one-click cart restoration."
      },
      {
        iconName: "Package",
        title: "Live Order Tracking",
        description: "Send real-time alerts when order status changes to Processing."
      },
      {
        iconName: "CheckCircle",
        title: "COD Verification",
        description: "Confirm buyer intent with interactive buttons before dispatching parcels."
      },
      {
        iconName: "Database",
        title: "Live Product Queries",
        description: "Query WordPress database directly for real-time pricing and variations."
      },
      {
        iconName: "Cpu",
        title: "REST Webhook Engine",
        description: "Sync store data reliably using official WooCommerce APIs and webhooks."
      },
      {
        iconName: "Share2",
        title: "Omnichannel Commerce",
        description: "Power WhatsApp, Messenger, and Instagram sales from one WooCommerce catalog."
      }
    ]
  }
};

export { platformUpdatedFeatures, aiAgentUpdatedFeatures };
