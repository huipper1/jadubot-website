import fs from "fs";
import path from "path";
import sharp from "sharp";

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

interface SvgFeatureConfig {
  themeColor: string;
  accentColor: string;
  uiBadge: string;
  botName: string;
  botStatus: string;
  userMsg: string;
  userTime: string;
  botReplyTitle: string;
  botReplyRows: { label: string; value: string }[];
  actionPill: string;
  actionPillSecondary?: string;
  statusMetric: { label: string; value: string };
  secondaryMetric: { label: string; value: string };
}

function generateCleanPortraitSvg(cfg: SvgFeatureConfig): string {
  const {
    themeColor,
    accentColor,
    uiBadge,
    botName,
    botStatus,
    userMsg,
    userTime,
    botReplyTitle,
    botReplyRows,
    actionPill,
    actionPillSecondary,
    statusMetric,
    secondaryMetric
  } = cfg;

  return `<svg width="800" height="960" viewBox="0 0 800 960" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Deep dark navy SaaS background -->
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#070d1e"/>
        <stop offset="50%" stop-color="#0b1733"/>
        <stop offset="100%" stop-color="#060a17"/>
      </linearGradient>

      <!-- Glass card background -->
      <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#122347" stop-opacity="0.85"/>
        <stop offset="100%" stop-color="#0b1834" stop-opacity="0.95"/>
      </linearGradient>

      <!-- Glowing border and accent -->
      <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="${themeColor}"/>
        <stop offset="100%" stop-color="${accentColor}"/>
      </linearGradient>

      <filter id="ambientGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="70" result="blur"/>
        <feComposite in="SourceGraphic" in2="blur" operator="over"/>
      </filter>

      <filter id="panelShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="20" stdDeviation="30" flood-color="#000000" flood-opacity="0.6"/>
      </filter>
    </defs>

    <!-- Base Canvas -->
    <rect width="800" height="960" fill="url(#bgGrad)"/>

    <!-- Geometric Grid Lines -->
    <g opacity="0.07" stroke="#ffffff" stroke-width="1">
      <path d="M0 120 H800 M0 240 H800 M0 360 H800 M0 480 H800 M0 600 H800 M0 720 H800 M0 840 H800" />
      <path d="M100 0 V960 M200 0 V960 M300 0 V960 M400 0 V960 M500 0 V960 M600 0 V960 M700 0 V960" />
    </g>

    <!-- Glowing Background Aura -->
    <circle cx="240" cy="280" r="220" fill="${themeColor}" opacity="0.28" filter="url(#ambientGlow)"/>
    <circle cx="580" cy="680" r="240" fill="${accentColor}" opacity="0.22" filter="url(#ambientGlow)"/>

    <!-- Main Mobile/Panel Card Container -->
    <g filter="url(#panelShadow)" transform="translate(60, 50)">
      <!-- Outer Frame (680 x 860) -->
      <rect x="0" y="0" width="680" height="860" rx="32" fill="url(#cardGrad)" stroke="#1e3a6d" stroke-width="1.5"/>

      <!-- Window Header Bar -->
      <path d="M 0 32 A 32 32 0 0 1 32 0 L 648 0 A 32 32 0 0 1 680 32 L 680 84 L 0 84 Z" fill="#0d1b38"/>
      <line x1="0" y1="84" x2="680" y2="84" stroke="#1e3a6d" stroke-width="1"/>

      <!-- Window Control Dots -->
      <circle cx="42" cy="42" r="6.5" fill="#ef4444" opacity="0.9"/>
      <circle cx="64" cy="42" r="6.5" fill="#f59e0b" opacity="0.9"/>
      <circle cx="86" cy="42" r="6.5" fill="#10b981" opacity="0.9"/>

      <!-- Window Header Title / Status Pill -->
      <rect x="120" y="26" width="310" height="32" rx="10" fill="#081329" stroke="#1d3560" stroke-width="1"/>
      <circle cx="138" cy="42" r="4" fill="#38bdf8"/>
      <text x="154" y="47" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" fill="#93c5fd" font-weight="600">${escapeXml(uiBadge)}</text>

      <!-- Right Active Status Tag -->
      <rect x="520" y="26" width="120" height="32" rx="10" fill="#059669" fill-opacity="0.2" stroke="#10b981" stroke-width="1"/>
      <circle cx="538" cy="42" r="4" fill="#10b981"/>
      <text x="550" y="47" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" fill="#34d399" font-weight="700">ONLINE 24/7</text>

      <!-- Panel Content -->
      <!-- Top Metrics Strip (2 Stats) -->
      <g transform="translate(40, 115)">
        <rect x="0" y="0" width="285" height="85" rx="18" fill="#0a1733" stroke="#1c3766" stroke-width="1"/>
        <text x="24" y="34" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" fill="#64748b" font-weight="700" letter-spacing="1">${escapeXml(statusMetric.label)}</text>
        <text x="24" y="66" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="24" fill="#38bdf8" font-weight="800">${escapeXml(statusMetric.value)}</text>

        <rect x="315" y="0" width="285" height="85" rx="18" fill="#0a1733" stroke="#1c3766" stroke-width="1"/>
        <text x="339" y="34" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" fill="#64748b" font-weight="700" letter-spacing="1">${escapeXml(secondaryMetric.label)}</text>
        <text x="339" y="66" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="24" fill="#10b981" font-weight="800">${escapeXml(secondaryMetric.value)}</text>
      </g>

      <!-- Chat Stream Container -->
      <g transform="translate(40, 230)">
        <rect x="0" y="0" width="600" height="585" rx="24" fill="#061024" stroke="#1a3461" stroke-width="1.2"/>

        <!-- Chat Header -->
        <path d="M 0 24 A 24 24 0 0 1 24 0 L 576 0 A 24 24 0 0 1 600 24 L 600 70 L 0 70 Z" fill="#0e1d3c"/>
        <circle cx="40" cy="35" r="18" fill="${themeColor}"/>
        <text x="40" y="41" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#ffffff" font-weight="800" text-anchor="middle">J</text>
        <text x="72" y="31" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#ffffff" font-weight="700">${escapeXml(botName)}</text>
        <text x="72" y="51" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" fill="#38bdf8" font-weight="600">${escapeXml(botStatus)}</text>

        <!-- Message 1: Inbound Customer Message -->
        <g transform="translate(140, 95)">
          <rect x="0" y="0" width="425" height="74" rx="18" fill="#182747" stroke="#253e70" stroke-width="1"/>
          <text x="22" y="34" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" fill="#f1f5f9" font-weight="500">${escapeXml(userMsg)}</text>
          <text x="22" y="57" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" fill="#94a3b8">${escapeXml(userTime)}</text>
        </g>

        <!-- Message 2: Jadubot Structured Interactive Card -->
        <g transform="translate(35, 195)">
          <rect x="0" y="0" width="530" height="290" rx="20" fill="#0c1f44" stroke="#0284c7" stroke-width="1.5"/>

          <!-- Bot Card Title / Status Badge -->
          <rect x="22" y="22" width="280" height="30" rx="8" fill="#0369a1" fill-opacity="0.3"/>
          <text x="34" y="42" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="#7dd3fc" font-weight="700">${escapeXml(botReplyTitle)}</text>

          <!-- Structured Rows -->
          ${botReplyRows
            .map((row, rIdx) => {
              const yPos = 85 + rIdx * 34;
              return `
              <text x="24" y="${yPos}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="#94a3b8" font-weight="500">${escapeXml(row.label)}:</text>
              <text x="180" y="${yPos}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" fill="#f8fafc" font-weight="700">${escapeXml(row.value)}</text>
              `;
            })
            .join("")}

          <!-- Action Buttons Bar -->
          <g transform="translate(24, 225)">
            <rect x="0" y="0" width="230" height="42" rx="12" fill="${themeColor}"/>
            <text x="115" y="26" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="#ffffff" font-weight="700" text-anchor="middle">${escapeXml(actionPill)}</text>

            ${
              actionPillSecondary
                ? `
            <rect x="245" y="0" width="210" height="42" rx="12" fill="#162b54" stroke="#2a4a82" stroke-width="1"/>
            <text x="350" y="26" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="#93c5fd" font-weight="600" text-anchor="middle">${escapeXml(actionPillSecondary)}</text>
            `
                : ""
            }
          </g>
        </g>

        <!-- Live Status Footer Indicator -->
        <g transform="translate(35, 515)">
          <rect x="0" y="0" width="530" height="48" rx="14" fill="#09152e" stroke="#1d3869" stroke-width="1"/>
          <circle cx="28" cy="24" r="5" fill="#10b981"/>
          <text x="44" y="29" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" fill="#94a3b8" font-weight="500">Autonomous CRM Sync &amp; Instant Webhook Dispatch Active</text>
        </g>
      </g>
    </g>
  </svg>`;
}

// 10 Configs for the 10 Slugs:
const SLUG_CONFIGS: Record<string, { group: "platform" | "ai-agents"; config: SvgFeatureConfig }> = {
  // 5 Platform Slugs
  "whatsapp-automation": {
    group: "platform",
    config: {
      themeColor: "#059669",
      accentColor: "#38bdf8",
      uiBadge: "WhatsApp Cloud API • Verified",
      botName: "Jadubot WhatsApp Sales",
      botStatus: "Official Business Account • Instant",
      userMsg: "Bhaiya, Black color ache? Order confirm korbo.",
      userTime: "Customer • 10:42 AM",
      botReplyTitle: "Order Confirmed: #BD-88421 🎉",
      botReplyRows: [
        { label: "Items", value: "Smart Polo (L / Black)" },
        { label: "Total Payable", value: "৳ 1,450 (Cash on Delivery)" },
        { label: "Courier Partner", value: "Pathao Logistics (24-48 hrs)" },
        { label: "Tracking Code", value: "BD-PTH-92841" }
      ],
      actionPill: "Track Live Delivery",
      actionPillSecondary: "Modify Order",
      statusMetric: { label: "API DELIVERY SPEED", value: "< 1.2 sec" },
      secondaryMetric: { label: "BROADCAST OPEN RATE", value: "98.2%" }
    }
  },
  "facebook-automation": {
    group: "platform",
    config: {
      themeColor: "#0064e0",
      accentColor: "#38bdf8",
      uiBadge: "Facebook Messenger Automation",
      botName: "Jadubot Messenger Sales",
      botStatus: "Post-to-Inbox Automation • Active",
      userMsg: "Price koto? How do I order from the post?",
      userTime: "Commented on Reel • 11:15 AM",
      botReplyTitle: "Product Catalog Details Sent ⚡",
      botReplyRows: [
        { label: "Product", value: "Premium Leather Sneaker" },
        { label: "Price", value: "৳ 2,890 (Free Shipping)" },
        { label: "Available Sizes", value: "40, 41, 42, 43, 44" },
        { label: "Stock Status", value: "In Stock (Dhaka Hub)" }
      ],
      actionPill: "Buy Now in Chat",
      actionPillSecondary: "Chat with Rep",
      statusMetric: { label: "COMMENT AUTO-DM", value: "Instant" },
      secondaryMetric: { label: "LEAD CONVERSION", value: "+38%" }
    }
  },
  "instagram-automation": {
    group: "platform",
    config: {
      themeColor: "#c13584",
      accentColor: "#38bdf8",
      uiBadge: "Instagram Direct Automation",
      botName: "Jadubot Instagram Agent",
      botStatus: "Story & Reel Mention Bot",
      userMsg: "Commented 'LINK' on your viral Reel!",
      userTime: "Instagram DM • 02:20 PM",
      botReplyTitle: "Exclusive VIP Link & Voucher 🎁",
      botReplyRows: [
        { label: "Featured Item", value: "Summer Linen Collection" },
        { label: "Voucher Code", value: "INSTA15 (15% Off)" },
        { label: "Offer Validity", value: "Next 24 Hours Only" },
        { label: "Checkout Link", value: "jadubot.me/summer15" }
      ],
      actionPill: "Claim 15% Discount",
      actionPillSecondary: "View Lookbook",
      statusMetric: { label: "REEL AUTO REPLY", value: "< 2 sec" },
      secondaryMetric: { label: "STORY CLICK RATE", value: "44.6%" }
    }
  },
  "telegram-automation": {
    group: "platform",
    config: {
      themeColor: "#229ed9",
      accentColor: "#38bdf8",
      uiBadge: "Telegram Bot API • High Throughput",
      botName: "Jadubot Telegram Community",
      botStatus: "VIP Channel & Group Engine",
      userMsg: "/start — I want VIP Signals & Group Access",
      userTime: "Member • 04:05 PM",
      botReplyTitle: "Membership Pass Generated 🚀",
      botReplyRows: [
        { label: "Tier", value: "Pro Trader VIP Access" },
        { label: "Subscription", value: "Active • 30 Days" },
        { label: "Private Channel", value: "@JadubotVIPElite" },
        { label: "Verification", value: "Auto-Verified" }
      ],
      actionPill: "Join VIP Channel",
      actionPillSecondary: "Member Settings",
      statusMetric: { label: "BROADCAST CAPACITY", value: "Unlimited" },
      secondaryMetric: { label: "DELIVERY LATENCY", value: "0.4 sec" }
    }
  },
  "website-chat-automation": {
    group: "platform",
    config: {
      themeColor: "#0172ff",
      accentColor: "#38bdf8",
      uiBadge: "Website AI Live Chat Widget",
      botName: "Jadubot On-Site Assistant",
      botStatus: "Knowledge Grounded • Zero Hallucination",
      userMsg: "Do you integrate with Shopify and custom webhooks?",
      userTime: "Visitor (Dhaka) • 05:12 PM",
      botReplyTitle: "Enterprise Integration Match 💡",
      botReplyRows: [
        { label: "Shopify Support", value: "1-Click Native App" },
        { label: "Webhooks", value: "REST API + Custom JSON" },
        { label: "Live Handover", value: "Available on All Plans" },
        { label: "Free Trial", value: "14-Day Free Access" }
      ],
      actionPill: "Schedule Live Demo",
      actionPillSecondary: "Read API Docs",
      statusMetric: { label: "FIRST RESPONSE", value: "< 1.5s" },
      secondaryMetric: { label: "QUESTION DEFLECTION", value: "84%" }
    }
  },

  // 5 AI Agent Slugs
  "lead-qualification": {
    group: "ai-agents",
    config: {
      themeColor: "#0172ff",
      accentColor: "#38bdf8",
      uiBadge: "Lead Intent Scoring Engine",
      botName: "Jadubot Lead Qualifier",
      botStatus: "BANT Intent Analysis • Active",
      userMsg: "We need automation for 15,000 monthly chats across FB & WhatsApp.",
      userTime: "Enterprise Lead • 11:30 AM",
      botReplyTitle: "High-Intent Lead: HOT (Score 94/100) 🔥",
      botReplyRows: [
        { label: "Monthly Volume", value: "15,000 Conversations" },
        { label: "Channels", value: "WhatsApp + Messenger" },
        { label: "Budget Readiness", value: "Enterprise Tier ($299+/mo)" },
        { label: "Assigned Closer", value: "Senior Account Exec (Dhaka)" }
      ],
      actionPill: "Book 1-on-1 Demo",
      actionPillSecondary: "View Transcript",
      statusMetric: { label: "QUALIFICATION TIME", value: "< 60s" },
      secondaryMetric: { label: "INTENT ACCURACY", value: "96.4%" }
    }
  },
  "customer-support": {
    group: "ai-agents",
    config: {
      themeColor: "#0284c7",
      accentColor: "#38bdf8",
      uiBadge: "Knowledge-Grounded Support Agent",
      botName: "Jadubot Support AI",
      botStatus: "Verified Store Docs • RAG",
      userMsg: "Amar order ekhono asheni. Package kothay ache?",
      userTime: "Customer • 01:14 PM",
      botReplyTitle: "Real-time Package Tracking 📦",
      botReplyRows: [
        { label: "Order ID", value: "#JB-9104 (Confirmed)" },
        { label: "Current Status", value: "Out for Delivery today" },
        { label: "Rider Phone", value: "+880 1711-XXXXXX" },
        { label: "Support Policy", value: "Full refund if damaged" }
      ],
      actionPill: "Track Rider Location",
      actionPillSecondary: "Speak to Human",
      statusMetric: { label: "AUTONOMOUS RESOLUTION", value: "82%" },
      secondaryMetric: { label: "CSAT SATISFACTION", value: "4.9 / 5" }
    }
  },
  "sales-agent": {
    group: "ai-agents",
    config: {
      themeColor: "#059669",
      accentColor: "#38bdf8",
      uiBadge: "Conversational Sales Closer",
      botName: "Jadubot Digital Sales Rep",
      botStatus: "Product Catalog & Checkout",
      userMsg: "Eid collection er punjabi dekhaw with price.",
      userTime: "Buyer • 03:40 PM",
      botReplyTitle: "Curated Catalog Recommendations 👔",
      botReplyRows: [
        { label: "Selected Style", value: "Royal Blue Silk Punjabi" },
        { label: "Special Price", value: "৳ 3,250 (৳ 3,800)" },
        { label: "Sizes Available", value: "38, 40, 42, 44" },
        { label: "Payment Options", value: "Cash on Delivery / bKash" }
      ],
      actionPill: "Order Now (৳ 3,250)",
      actionPillSecondary: "See More Styles",
      statusMetric: { label: "CONVERSATIONAL AOV", value: "+24%" },
      secondaryMetric: { label: "CHECKOUT CLOSING", value: "88%" }
    }
  },
  "shopify-whatsapp": {
    group: "ai-agents",
    config: {
      themeColor: "#10b981",
      accentColor: "#38bdf8",
      uiBadge: "Shopify Native Sync • WhatsApp",
      botName: "Shopify Recovery Agent",
      botStatus: "Live Checkout Webhook Sync",
      userMsg: "Left items in cart: Denim Jacket (M) • ৳ 2,400",
      userTime: "Abandoned Checkout • 25m ago",
      botReplyTitle: "Your Shopify Cart Is Reserved 🛒",
      botReplyRows: [
        { label: "Cart Total", value: "৳ 2,400" },
        { label: "Added Perk", value: "Free Delivery + 10% Off" },
        { label: "Coupon Applied", value: "RECOVER10" },
        { label: "One-Click Link", value: "Pre-filled Shopify Checkout" }
      ],
      actionPill: "Complete Order in 1-Click",
      actionPillSecondary: "Change Variant",
      statusMetric: { label: "ABANDONED RECOVERY", value: "+28.4%" },
      secondaryMetric: { label: "RECOVERY OPEN RATE", value: "98%" }
    }
  },
  "woocommerce-whatsapp": {
    group: "ai-agents",
    config: {
      themeColor: "#7c3aed",
      accentColor: "#38bdf8",
      uiBadge: "WooCommerce REST API Bridge",
      botName: "WooCommerce WhatsApp Agent",
      botStatus: "WordPress Webhook • Active",
      userMsg: "Order #WC-7429 placed via Cash on Delivery",
      userTime: "New Web Order • Just Now",
      botReplyTitle: "COD Order Verification Required 🛡️",
      botReplyRows: [
        { label: "Order ID", value: "#WC-7429" },
        { label: "Payable Total", value: "৳ 1,850" },
        { label: "Destination", value: "Chittagong Metro" },
        { label: "Verification Action", value: "Tap below to confirm dispatch" }
      ],
      actionPill: "Confirm My Order (COD)",
      actionPillSecondary: "Cancel Order",
      statusMetric: { label: "RTO FAILURE DROP", value: "-55%" },
      secondaryMetric: { label: "SYNC LATENCY", value: "0.8 sec" }
    }
  }
};

async function main() {
  console.log("Generating clean portrait/square WebP feature images without baked-in labels...");
  for (const [slug, item] of Object.entries(SLUG_CONFIGS)) {
    const svg = generateCleanPortraitSvg(item.config);
    const outDir = path.join("public", "assets", "images", item.group, slug);
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }
    const outFile = path.join(outDir, "features.webp");

    await sharp(Buffer.from(svg))
      .webp({ quality: 85, effort: 5 })
      .toFile(outFile);

    const stats = fs.statSync(outFile);
    console.log(`Generated: ${outFile} (${(stats.size / 1024).toFixed(1)} KB)`);
  }
  console.log("All 10 feature images successfully generated!");
}

main().catch(console.error);
