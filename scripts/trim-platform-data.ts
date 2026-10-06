import fs from "fs";

// Read with normalize CRLF
let pData = fs.readFileSync("src/data/platform-data.ts", "utf8").replace(/\r\n/g, "\n");

// WhatsApp
pData = pData.replace(
  `    heroTitle: "Automate WhatsApp Sales, Support & Customer Journeys",
    heroHighlight: "Automate WhatsApp",
    heroDescription:
      "Deploy intelligent AI sales agents and automated workflows on WhatsApp. Capture leads, showcase product catalogs, recover abandoned checkouts, broadcast updates, and automatically hand off complex queries to human agents.",`,
  `    heroTitle: "Automate WhatsApp Sales, Support & Customer Journeys",
    heroHighlight: "Automate WhatsApp",
    heroDescription:
      "Deploy AI sales agents on WhatsApp. Capture leads, showcase product catalogs, recover checkouts, and route complex queries to agents 24/7.",`
);

pData = pData.replace(
  `        title: "24/7 AI Sales & Customer Support",
        description:
          "Provide instant, context-aware answers to product inquiries, pricing questions, and support requests in natural language without human delay.",
        badge: "Instant Engagement",
        iconName: "Bot",
        bulletPoints: [
          "Instant answers based on your customized business knowledge base",
          "Handles thousands of simultaneous customer conversations effortlessly",
          "Automated escalation to human representatives when required"
        ]`,
  `        title: "24/7 AI Sales Support",
        description: "Answer product and pricing inquiries instantly in natural language without delay.",
        badge: "Instant Engagement",
        iconName: "Bot",
        bulletPoints: [
          "Instant answers from verified store knowledge base",
          "Handles thousands of simultaneous buyer chats",
          "Automatic escalation to human agents when needed"
        ]`
);

pData = pData.replace(
  `        title: "Targeted WhatsApp Broadcasting",
        description:
          "Send personalized marketing promotions, transactional alerts, and seasonal announcements to segmented customer lists with industry-leading open rates.",
        badge: "High Deliverability",
        iconName: "Send",
        bulletPoints: [
          "Meta-compliant approved template message scheduling",
          "Dynamic variable tags for individual customer personalization",
          "Granular delivery and read receipt tracking analytics"
        ]`,
  `        title: "Targeted WhatsApp Broadcasts",
        description: "Send personalized promotions and transactional alerts to segmented lists with 98% open rates.",
        badge: "High Deliverability",
        iconName: "Send",
        bulletPoints: [
          "Meta-compliant approved template scheduling",
          "Dynamic customer personalization tags",
          "Granular delivery and read-rate analytics"
        ]`
);

pData = pData.replace(
  `        title: "Automated Checkout & Cart Recovery",
        description:
          "Recover lost revenue by triggering automated follow-up sequences when customers abandon their cart or drop off during checkout.",
        badge: "Revenue Growth",
        iconName: "ShoppingCart",
        bulletPoints: [
          "Automated cart reminder triggers with one-click direct checkout links",
          "Instant order confirmation and delivery status tracking notifications",
          "Direct sync with Shopify, WooCommerce, and custom webhooks"
        ]`,
  `        title: "Cart Recovery & Checkout",
        description: "Recover lost checkouts on WhatsApp with one-click links and instant confirmation.",
        badge: "Revenue Growth",
        iconName: "ShoppingCart",
        bulletPoints: [
          "Automated reminders with direct checkout links",
          "Instant order confirmation and tracking status",
          "Direct sync with Shopify and WooCommerce"
        ]`
);

pData = pData.replace(
  `        title: "Shared Omnichannel Team Inbox",
        description:
          "Empower your customer support and sales team with a centralized inbox to monitor bot conversations, collaborate with private notes, and take over chats.",
        badge: "Team Collaboration",
        iconName: "Users",
        bulletPoints: [
          "Unified inbox with ticket assignment and team performance metrics",
          "Smooth bot-to-human switching without losing chat context",
          "Custom contact tags, labels, and customer conversation history"
        ]`,
  `        title: "Shared Team Inbox",
        description: "Centralized inbox to monitor bot chats, leave private notes, and take over.",
        badge: "Team Collaboration",
        iconName: "Users",
        bulletPoints: [
          "Ticket assignment and performance metrics",
          "Seamless bot-to-human handover with full context",
          "Custom contact tags and conversation logs"
        ]`
);

pData = pData.replace(
  `        title: "Visual No-Code Flow Builder",
        description:
          "Design complex conversation funnels, multi-choice decision trees, interactive button menus, and data collection forms with an intuitive visual editor.",
        badge: "Zero Coding Required",
        iconName: "GitFork",
        bulletPoints: [
          "Drag-and-drop conversational logic blocks and quick replies",
          "Interactive WhatsApp lists and CTA button components",
          "Real-time visual testing before deploying live flows"
        ]`,
  `        title: "Visual Flow Builder",
        description: "Build conversation funnels, interactive button menus, and forms visually with zero code.",
        badge: "No-Code",
        iconName: "GitFork",
        bulletPoints: [
          "Drag-and-drop logic blocks and quick replies",
          "Interactive WhatsApp lists and CTA buttons",
          "Real-time visual preview before deploying"
        ]`
);

pData = pData.replace(
  `        title: "HTTP Webhooks & API Integration",
        description:
          "Connect your CRM, Google Sheets, ERP, and payment systems to trigger real-time WhatsApp alerts and synchronize customer contact details automatically.",
        badge: "Direct Connectivity",
        iconName: "Layers",
        bulletPoints: [
          "Inbound and outbound webhook listeners with JSON payload parsing",
          "Direct integration with Zapier, Make, and custom REST APIs",
          "Secure authentication and high-availability message dispatch"
        ]`,
  `        title: "Webhooks & API Sync",
        description: "Connect CRM, Sheets, ERP, and payments to trigger automated real-time WhatsApp alerts.",
        badge: "Integrations",
        iconName: "Layers",
        bulletPoints: [
          "Webhook listeners with JSON payload parsing",
          "Direct integration with Zapier and REST APIs",
          "Secure high-availability message routing"
        ]`
);

// Facebook
pData = pData.replace(
  `        title: "Auto Comment-to-Inbox Lead Converter",
        description:
          "Automatically reply to customer comments on your Facebook posts and ads publicly while simultaneously sending a personalized private message in Messenger.",
        badge: "Viral Lead Capture",
        iconName: "MessageSquare",
        bulletPoints: [
          "Keyword-filtered responses tailored to specific product inquiries",
          "Public comment likes and dynamic rotating replies to prevent spam flagging",
          "Instant private DM containing product pricing, links, or special discount codes"
        ]`,
  `        title: "Comment-to-Inbox Auto DM",
        description: "Reply publicly to comments on posts and ads while sending instant DMs.",
        badge: "Lead Capture",
        iconName: "MessageSquare",
        bulletPoints: [
          "Keyword-filtered replies for product queries",
          "Public comment likes and anti-spam variations",
          "Instant private DM with pricing and buy links"
        ]`
);

pData = pData.replace(
  `        title: "Click-to-Messenger Ad Optimization",
        description:
          "Maximize your Meta ad spend ROI by connecting Click-to-Messenger ad traffic directly to high-converting interactive AI qualification flows.",
        badge: "Ad ROI Booster",
        iconName: "TrendingUp",
        bulletPoints: [
          "Instant zero-latency greeting when customers click your sponsored ad",
          "Automated lead qualification questions and contact detail extraction",
          "Real-time attribution tracking from specific ad creative campaigns"
        ]`,
  `        title: "Click-to-Messenger Ad Flows",
        description: "Convert Meta ad clicks into sales with instant automated qualification flows.",
        badge: "Ad Optimization",
        iconName: "TrendingUp",
        bulletPoints: [
          "Zero-latency greeting upon ad clicks",
          "Automated lead qualification questions",
          "Real-time campaign attribution tracking"
        ]`
);

pData = pData.replace(
  `        title: "Interactive In-Messenger Storefront",
        description:
          "Display interactive visual product carousels with images, descriptions, and checkout buttons directly inside Facebook Messenger.",
        badge: "Conversational Store",
        iconName: "ShoppingBag",
        bulletPoints: [
          "Multi-item product galleries with price tags and variant pickers",
          "Direct Cash on Delivery or digital checkout link generation",
          "Synchronized inventory status from your existing store catalog"
        ]`,
  `        title: "In-Messenger Storefront",
        description: "Display product carousels, size pickers, and checkout buttons directly in Messenger chat.",
        badge: "In-Chat Commerce",
        iconName: "ShoppingBag",
        bulletPoints: [
          "Product galleries with price tags and variants",
          "Cash on Delivery or digital checkout links",
          "Synchronized inventory catalog status"
        ]`
);

pData = pData.replace(
  `        title: "Automated Messenger Follow-up Sequences",
        description:
          "Re-engage interested prospects within Meta's messaging guidelines to guide them from initial curiosity to completed order confirmation.",
        badge: "Automated Nurturing",
        iconName: "Clock",
        bulletPoints: [
          "Smart drip sequences based on user interaction and intent triggers",
          "One-Time Notification (OTN) requests for back-in-stock alerts",
          "Automated reminders for pending orders and unanswered quotes"
        ]`,
  `        title: "Automated Follow-up Sequences",
        description: "Re-engage interested buyers with timely reminders within Meta 24-hour guidelines.",
        badge: "Lead Nurturing",
        iconName: "Clock",
        bulletPoints: [
          "Intent-based automated follow-up sequences",
          "One-Time Notifications for back-in-stock alerts",
          "Reminders for pending orders and quotes"
        ]`
);

pData = pData.replace(
  `        title: "24/7 Smart FAQ & Support Handling",
        description:
          "Instantly resolve repetitive queries regarding store hours, shipping policies, returns, and order status without overburdening your support team.",
        badge: "Zero Wait Time",
        iconName: "HelpCircle",
        bulletPoints: [
          "Natural language understanding trained on your business documents",
          "Instant answers to common customer questions day and night",
          "Smooth transition to live support agents for unresolved issues"
        ]`,
  `        title: "Smart FAQ & Support",
        description: "Resolve shipping, return, and order status queries instantly around the clock.",
        badge: "Zero Wait",
        iconName: "HelpCircle",
        bulletPoints: [
          "Trained on your business policies and FAQs",
          "Instant answers to frequent questions 24/7",
          "Smooth handover to human agents when required"
        ]`
);

pData = pData.replace(
  `        title: "Team Collaboration & CRM Integration",
        description:
          "Manage multiple Facebook pages from one unified dashboard with agent assignments, chat tags, and automated customer data export.",
        badge: "Operational Scale",
        iconName: "ShieldCheck",
        bulletPoints: [
          "Multi-page management under a single centralized team workspace",
          "Export leads and conversation transcripts to CRM or Google Sheets",
          "Role-based permissions and team response analytics"
        ]`,
  `        title: "CRM & Multi-Page Sync",
        description: "Manage multiple Facebook pages with unified agent assignments and CRM export.",
        badge: "Team Workspace",
        iconName: "ShieldCheck",
        bulletPoints: [
          "Centralized multi-page management dashboard",
          "Export leads to CRM and Google Sheets",
          "Role-based permissions and team analytics"
        ]`
);

// Instagram
pData = pData.replace(
  `    heroTitle: "Convert Instagram Reels, Stories & DMs into Instant Sales",
    heroHighlight: "Instagram Reels",
    heroDescription:
      "Never miss a hot lead on Instagram again. Automatically reply to Reel comments, send links when followers mention your Stories, qualify buyer intent, and sell products directly inside Instagram Direct.",`,
  `    heroTitle: "Convert Instagram Reels, Stories & DMs into Sales",
    heroHighlight: "Instagram Reels",
    heroDescription:
      "Automatically reply to Reel comments, auto-DM followers who mention Stories, and sell products inside Instagram Direct.",`
);

pData = pData.replace(
  `        title: "Reel & Post Comment Auto DM",
        description:
          "Ask followers to comment a keyword like 'LINK' or 'PRICE' on your Reels and Posts, and let Jadubot instantly DM them the exact product details.",
        badge: "Viral Growth",
        iconName: "MessageCircle",
        bulletPoints: [
          "Trigger instant DMs based on specific keyword matches or any comment",
          "Public reply to comments to boost Instagram algorithm reach",
          "Deliver direct checkout links, discount codes, and product galleries"
        ]`,
  `        title: "Reel Comment Auto DM",
        description: "Trigger instant DMs with pricing when followers comment keywords on Reels.",
        badge: "Viral Growth",
        iconName: "MessageCircle",
        bulletPoints: [
          "Instant DMs on keyword triggers like 'PRICE'",
          "Public comment replies to boost algorithm reach",
          "Deliver direct checkout links and promo codes"
        ]`
);

pData = pData.replace(
  `        title: "Story Mention Auto Reply",
        description:
          "Build brand loyalty by instantly thanking customers whenever they tag your Instagram handle in their Stories, along with special discount vouchers.",
        badge: "UGC Monetization",
        iconName: "Star",
        bulletPoints: [
          "Instant automated appreciation DM whenever someone tags your handle",
          "Incentivize user-generated content with exclusive Story discount codes",
          "Capture customer Instagram profiles into your marketing CRM automatically"
        ]`,
  `        title: "Story Mention Auto Reply",
        description: "Thank customers instantly whenever they tag your handle and share coupon vouchers.",
        badge: "UGC Rewards",
        iconName: "Star",
        bulletPoints: [
          "Instant appreciation DM on handle tags",
          "Incentivize content with exclusive coupons",
          "Capture buyer profiles into CRM automatically"
        ]`
);

pData = pData.replace(
  `        title: "Story Reply Automation",
        description:
          "Engage viewers when they reply to your interactive Stories, polls, or question stickers with tailored conversational sales funnels.",
        badge: "Audience Engagement",
        iconName: "Video",
        bulletPoints: [
          "Automate replies to Story reactions and direct story responses",
          "Guide story viewers into personalized product recommendation chats",
          "Zero delay between user interest and your brand's reply"
        ]`,
  `        title: "Story Reply Automation",
        description: "Engage viewers responding to Stories, polls, and stickers with tailored sales funnels.",
        badge: "Engagement",
        iconName: "Video",
        bulletPoints: [
          "Automate replies to Story reactions and polls",
          "Guide viewers into recommendation funnels",
          "Zero delay response to follower questions"
        ]`
);

pData = pData.replace(
  `        title: "Instagram Shop & Product Visuals",
        description:
          "Showcase vibrant product images, pricing tables, and stock availability directly inside Instagram DMs with interactive carousel cards.",
        badge: "In-DM Shopping",
        iconName: "ShoppingBag",
        bulletPoints: [
          "Rich horizontal scrollable product cards with buy buttons",
          "Real-time stock checking and price confirmation in chat",
          "Seamless checkout link generation to finalize purchases"
        ]`,
  `        title: "In-DM Product Catalogs",
        description: "Showcase product image carousels, pricing tables, and stock directly in Instagram DMs.",
        badge: "In-DM Commerce",
        iconName: "ShoppingBag",
        bulletPoints: [
          "Scrollable cards with direct buy buttons",
          "Real-time stock checking and price details",
          "Seamless checkout links to finalize orders"
        ]`
);

pData = pData.replace(
  `        title: "Lead Qualification & Contact Capture",
        description:
          "Qualify customer budget, requirements, and readiness before automatically routing high-value prospects to your sales team.",
        badge: "Lead Scoring",
        iconName: "UserCheck",
        bulletPoints: [
          "Conversational intake questionnaires tailored to your product lines",
          "Collect verified WhatsApp numbers and email addresses directly in DMs",
          "Tag and segment high-intent leads for priority human outreach"
        ]`,
  `        title: "Lead Qualification in DMs",
        description: "Qualify buyer budget and collect phone numbers before routing to sales closers.",
        badge: "Lead Scoring",
        iconName: "UserCheck",
        bulletPoints: [
          "Conversational intake questionnaires",
          "Collect verified phone and email in chat",
          "Tag high-intent leads for priority outreach"
        ]`
);

pData = pData.replace(
  `        title: "Unified Instagram & Messenger Inbox",
        description:
          "Consolidate your Instagram DMs alongside Facebook Messenger and WhatsApp into a single powerful team management hub.",
        badge: "Team Management",
        iconName: "Inbox",
        bulletPoints: [
          "Handle all customer conversations from one unified dashboard",
          "Assign incoming DMs to specific department agents",
          "Full conversation history and customer tag tracking"
        ]`,
  `        title: "Unified Omnichannel Inbox",
        description: "Consolidate Instagram DMs alongside Messenger and WhatsApp in one team dashboard.",
        badge: "Team Inbox",
        iconName: "Inbox",
        bulletPoints: [
          "One dashboard for Instagram, FB, and WhatsApp",
          "Assign DMs to dedicated sales agents",
          "Full conversation history and tag tracking"
        ]`
);

// Telegram
pData = pData.replace(
  `    heroTitle: "Supercharge Telegram Communities, Broadcasts & AI Sales",
    heroHighlight: "Telegram Communities",
    heroDescription:
      "Build powerful Telegram bots with zero code. Automate customer support, send instant broadcasts to unlimited subscribers, manage VIP community access, and process customer inquiries at lightning speed.",`,
  `    heroTitle: "Supercharge Telegram Communities, Broadcasts & AI Sales",
    heroHighlight: "Telegram Communities",
    heroDescription:
      "Build Telegram bots with zero code. Automate support, send broadcasts to unlimited subscribers, and manage VIP groups.",`
);

pData = pData.replace(
  `        title: "Instant AI Customer Service Bot",
        description:
          "Deliver lightning-fast automated answers to common questions, technical documentation, and product inquiries 24 hours a day.",
        badge: "Fast Resolution",
        iconName: "Bot",
        bulletPoints: [
          "Natural language query answering with knowledge base search",
          "Custom commands (/start, /pricing, /help) with interactive keyboards",
          "Automated handover to team administrators when requested"
        ]`,
  `        title: "AI Customer Support Bot",
        description: "Deliver instant answers to product queries and documentation 24 hours a day.",
        badge: "Fast Resolution",
        iconName: "Bot",
        bulletPoints: [
          "Knowledge base search with natural replies",
          "Custom interactive button menus (/pricing, /help)",
          "Automated escalation to team admins"
        ]`
);

pData = pData.replace(
  `        title: "Unlimited Channel & Group Broadcasting",
        description:
          "Broadcast promotional announcements, news updates, trading signals, and newsletters to unlimited Telegram channels without delivery restrictions.",
        badge: "Unrestricted Reach",
        iconName: "Send",
        bulletPoints: [
          "Scheduled message dispatch with rich media and formatted text",
          "Interactive inline URL buttons and reaction triggers",
          "Audience segmentation based on user preferences and subscription level"
        ]`,
  `        title: "Unlimited Channel Broadcasts",
        description: "Broadcast announcements, news updates, and signals to unlimited subscribers without delivery caps.",
        badge: "Unrestricted Reach",
        iconName: "Send",
        bulletPoints: [
          "Scheduled rich media broadcasts",
          "Interactive inline buttons and links",
          "Audience segmentation by member tiers"
        ]`
);

pData = pData.replace(
  `        title: "Community Moderation & Member Onboarding",
        description:
          "Protect your public and private Telegram groups from spam, welcome new members automatically, and enforce community guidelines effortlessly.",
        badge: "Automated Safety",
        iconName: "Shield",
        bulletPoints: [
          "Anti-spam filtering with automatic link and blacklist removal",
          "Interactive CAPTCHA verification challenges for new joiners",
          "Custom automated welcome messages and pinned rules"
        ]`,
  `        title: "Community Moderation Bot",
        description: "Protect Telegram groups from spam, welcome joiners automatically, and enforce rules.",
        badge: "Auto Safety",
        iconName: "Shield",
        bulletPoints: [
          "Anti-spam filters with link removal",
          "Interactive CAPTCHA verification for joiners",
          "Automated welcome greetings and guidelines"
        ]`
);

pData = pData.replace(
  `        title: "Interactive Mini-Funnels & Lead Capture",
        description:
          "Guide Telegram users through structured question funnels to capture contact details, qualify interest, and generate sales leads.",
        badge: "Lead Funnels",
        iconName: "Filter",
        bulletPoints: [
          "Multi-step questionnaires using inline choice buttons",
          "Collect phone numbers, email addresses, and company details",
          "Instant webhook sync with your CRM or Google Sheets"
        ]`,
  `        title: "Interactive Lead Funnels",
        description: "Guide users through button funnels to capture contact details and score interest.",
        badge: "Lead Funnels",
        iconName: "Filter",
        bulletPoints: [
          "Questionnaires with inline choice buttons",
          "Collect phone numbers and business details",
          "Instant webhook sync with CRM or Sheets"
        ]`
);

pData = pData.replace(
  `        title: "Digital Product Delivery & Payments",
        description:
          "Sell access to premium content, digital files, webinars, and software licenses directly inside Telegram conversations.",
        badge: "Digital Commerce",
        iconName: "CreditCard",
        bulletPoints: [
          "Automated delivery of download links, license keys, or invite links upon payment",
          "Integration with Telegram Payments and third-party gateways",
          "Subscription tracking with automated renewal reminders"
        ]`,
  `        title: "Digital Product Delivery",
        description: "Sell premium content access, digital files, and licenses directly in chat.",
        badge: "Digital Sales",
        iconName: "CreditCard",
        bulletPoints: [
          "Automated download links upon payment",
          "Telegram Payments and gateway sync",
          "Subscription tracking with renewal alerts"
        ]`
);

pData = pData.replace(
  `        title: "Custom Webhook Trigger Engine",
        description:
          "Connect external software, server monitors, and CRM events to trigger instantaneous Telegram alerts and updates.",
        badge: "Developer Friendly",
        iconName: "Code",
        bulletPoints: [
          "Inbound API endpoints to push alerts from trading bots or server monitoring",
          "Full REST API support with comprehensive documentation",
          "Zero-latency webhook delivery with reliable retry logic"
        ]`,
  `        title: "Custom Webhook Alerts",
        description: "Connect external software and CRM events to trigger instant Telegram alerts.",
        badge: "Developer Friendly",
        iconName: "Code",
        bulletPoints: [
          "Inbound API endpoints to push server alerts",
          "Full REST API support with docs",
          "Zero-latency delivery with retry logic"
        ]`
);

// Website Chat
pData = pData.replace(
  `    heroTitle: "Convert Website Visitors into Buyers with Smart AI Live Chat",
    heroHighlight: "Website Visitors",
    heroDescription:
      "Install a customizable AI chat widget on your website in under 5 minutes. Greet visitors proactively, answer product queries instantly, qualify buyer intent, and schedule sales meetings 24/7.",`,
  `    heroTitle: "Convert Website Visitors with AI Live Chat",
    heroHighlight: "Website Visitors",
    heroDescription:
      "Install an AI chat widget in 5 minutes. Greet visitors proactively, answer product queries, and book sales meetings 24/7.",`
);

pData = pData.replace(
  `        title: "Proactive Visitor Engagement",
        description:
          "Trigger personalized greeting messages based on the visitor's current page, time spent on site, or referral traffic source.",
        badge: "Smart Triggers",
        iconName: "Zap",
        bulletPoints: [
          "Targeted greetings for pricing page, product detail, or checkout pages",
          "Exit-intent triggers to prevent cart abandonment before users leave",
          "Customizable greeting delays and visitor re-engagement rules"
        ]`,
  `        title: "Proactive Visitor Triggers",
        description: "Trigger personalized greetings based on viewed page, dwell time, or referral traffic.",
        badge: "Smart Triggers",
        iconName: "Zap",
        bulletPoints: [
          "Targeted greetings on pricing and checkout",
          "Exit-intent triggers to prevent cart drops",
          "Customizable delay and re-engagement rules"
        ]`
);

pData = pData.replace(
  `        title: "AI Knowledge Base Integration",
        description:
          "Feed your website URLs, PDF documentation, and help articles into Jadubot to let the AI answer complex questions accurately.",
        badge: "Accurate Answers",
        iconName: "BookOpen",
        bulletPoints: [
          "Automatic crawling and continuous indexing of your website content",
          "Contextual references with source citations in chat replies",
          "Hallucination safeguards ensuring the bot strictly adheres to your verified data"
        ]`,
  `        title: "AI Knowledge Ingestion",
        description: "Feed site URLs, PDFs, and articles to answer questions accurately without hallucinations.",
        badge: "Accurate Answers",
        iconName: "BookOpen",
        bulletPoints: [
          "Automatic crawling and content indexing",
          "Contextual citations in chat replies",
          "Strict safeguards against hallucinations"
        ]`
);

pData = pData.replace(
  `        title: "Automated Lead Qualification",
        description:
          "Collect verified visitor contact information (name, work email, phone, company size) before scheduling discovery calls.",
        badge: "Pipeline Growth",
        iconName: "UserCheck",
        bulletPoints: [
          "Structured conversational forms that feel like a friendly chat",
          "Direct integration with Calendly, HubSpot, and Google Calendar",
          "Instant CRM synchronization and notification alerts for high-value leads"
        ]`,
  `        title: "Automated Lead Intake",
        description: "Collect verified visitor contact details and company size before scheduling calls.",
        badge: "Pipeline Growth",
        iconName: "UserCheck",
        bulletPoints: [
          "Conversational intake questionnaires",
          "Direct sync with Calendly and HubSpot",
          "Instant CRM alerts for high-value leads"
        ]`
);

pData = pData.replace(
  `        title: "Live Human Agent Handoff",
        description:
          "Allow visitors to request a live human representative whenever they need personalized attention or specialized contract discussions.",
        badge: "Human Touch",
        iconName: "Headphones",
        bulletPoints: [
          "Real-time notifications sent to available sales and support agents",
          "Smooth transition preserving entire chat history and visitor metadata",
          "Browser sound alerts and mobile notifications for on-duty operators"
        ]`,
  `        title: "Live Agent Handoff",
        description: "Visitors can request a human rep anytime with full conversation context preserved.",
        badge: "Human Touch",
        iconName: "Headphones",
        bulletPoints: [
          "Real-time notifications to online agents",
          "Smooth handover with chat history intact",
          "Sound and mobile notifications for operators"
        ]`
);

pData = pData.replace(
  `        title: "Fully Brandable & Responsive Widget",
        description:
          "Customize colors, fonts, launcher icons, avatar images, and position to precisely match your company's aesthetic and branding guidelines.",
        badge: "Custom Styling",
        iconName: "Palette",
        bulletPoints: [
          "Light and dark mode compatibility with custom CSS variables",
          "Mobile-first responsive design optimized for smartphones and tablets",
          "Lightweight script package with zero impact on page load speed"
        ]`,
  `        title: "Brandable Chat Widget",
        description: "Customize colors, avatars, and launcher position to match your brand style.",
        badge: "Custom Styling",
        iconName: "Palette",
        bulletPoints: [
          "Light and dark mode styling with CSS vars",
          "Mobile-first design for phones and tablets",
          "Lightweight script under 50KB footprint"
        ]`
);

pData = pData.replace(
  `        title: "Omnichannel Visitor Continuity",
        description:
          "Let visitors transition their web chat session directly into WhatsApp or Messenger so the conversation continues even after they leave your site.",
        badge: "Cross-Platform",
        iconName: "Shuffle",
        bulletPoints: [
          "One-tap 'Continue on WhatsApp' or 'Continue in Messenger' buttons",
          "Persistent contact records across multiple conversation channels",
          "Never lose a website visitor who closes their browser window"
        ]`,
  `        title: "Cross-Channel Continuity",
        description: "Transition web chat into WhatsApp or Messenger so conversations continue on mobile.",
        badge: "Cross-Platform",
        iconName: "Shuffle",
        bulletPoints: [
          "One-tap 'Continue on WhatsApp' toggle",
          "Persistent records across messaging apps",
          "Never lose visitors after they close tabs"
        ]`
);

fs.writeFileSync("src/data/platform-data.ts", pData, "utf8");
console.log("Successfully normalized and trimmed platform-data.ts!");
