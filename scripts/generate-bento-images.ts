import fs from "fs";
import path from "path";
import sharp from "sharp";

interface BentoSpec {
  folder: string; // e.g. "ai-agents/lead-qualification" or "platform/whatsapp-automation"
  a: {
    alt: string;
    prompt: string;
    svgContent: string;
  };
  b: {
    alt: string;
    prompt: string;
    svgContent: string;
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Phone Card A Template Generator (Isolated Phone with transparent background)
// ─────────────────────────────────────────────────────────────────────────────
function makePhoneSvg(phoneWidth: number, phoneHeight: number, screenContent: string, phoneColor = "#0f172a", strokeColor = "#38bdf8") {
  const canvasW = 600;
  const canvasH = 750;
  const x = (canvasW - phoneWidth) / 2;
  const y = 25;

  return `<svg width="${canvasW}" height="${canvasH}" viewBox="0 0 ${canvasW} ${canvasH}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="phoneShadow" x="-25%" y="-20%" width="150%" height="150%">
        <feDropShadow dx="0" dy="24" stdDeviation="28" flood-color="#000000" flood-opacity="0.32"/>
        <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#0172ff" flood-opacity="0.16"/>
      </filter>
    </defs>

    <!-- Outer Phone Container with 3D drop shadow -->
    <g filter="url(#phoneShadow)" transform="rotate(-3, ${canvasW / 2}, ${canvasH / 2})">
      <!-- Phone Bezel -->
      <rect x="${x}" y="${y}" width="${phoneWidth}" height="${phoneHeight}" rx="42" fill="${phoneColor}" stroke="${strokeColor}" stroke-width="3"/>
      <!-- Inner Screen Glass -->
      <rect x="${x + 9}" y="${y + 9}" width="${phoneWidth - 18}" height="${phoneHeight - 18}" rx="34" fill="#080e1c"/>
      <!-- Glass subtle gloss diagonal overlay -->
      <path d="M ${x + 9} ${y + 9} L ${x + phoneWidth - 9} ${y + 9} L ${x + 9} ${y + 350} Z" fill="#ffffff" opacity="0.04"/>

      <!-- Dynamic Island / Speaker notch -->
      <rect x="${canvasW / 2 - 42}" y="${y + 16}" width="84" height="18" rx="9" fill="#000000"/>
      <circle cx="${canvasW / 2 + 24}" cy="${y + 25}" r="3.5" fill="#1e293b"/>

      <!-- Screen UI Content -->
      <g transform="translate(${x + 12}, ${y + 44})">
        ${screenContent}
      </g>
    </g>
  </svg>`;
}

// ─────────────────────────────────────────────────────────────────────────────
// Supporting Visual Card B Template Generator (Transparent Object Cluster)
// ─────────────────────────────────────────────────────────────────────────────
function makeClusterSvg(content: string) {
  const canvasW = 550;
  const canvasH = 420;

  return `<svg width="${canvasW}" height="${canvasH}" viewBox="0 0 ${canvasW} ${canvasH}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="clusterGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="16" stdDeviation="22" flood-color="#000000" flood-opacity="0.25"/>
        <feDropShadow dx="0" dy="4" stdDeviation="10" flood-color="#0172ff" flood-opacity="0.2"/>
      </filter>
    </defs>
    <g filter="url(#clusterGlow)">
      ${content}
    </g>
  </svg>`;
}

export const BENTO_SPECS: BentoSpec[] = [
  // 1. lead-qualification
  {
    folder: "ai-agents/lead-qualification",
    a: {
      alt: "Smartphone mockup displaying AI lead qualification chat with large Hot Lead 98% intent badge",
      prompt: "Isolated 3D smartphone on transparent background, tilted 3 degrees, displaying a dark-mode Jadubot AI chat qualifying a buyer with a prominent orange/red Hot Lead 98% badge and rising intent arrow.",
      svgContent: makePhoneSvg(310, 600, `
        <!-- Chat header -->
        <circle cx="20" cy="18" r="14" fill="#0172ff"/>
        <text x="20" y="23" font-size="14" text-anchor="middle">🤖</text>
        <text x="44" y="16" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff">Jadubot Triage</text>
        <text x="44" y="28" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#22c55e">● Online</text>

        <!-- Prospect msg -->
        <rect x="10" y="45" width="265" height="48" rx="14" fill="#1e293b"/>
        <text x="24" y="66" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#f1f5f9">"We need 150 enterprise units</text>
        <text x="24" y="82" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#f1f5f9">for delivery in Dhaka this month."</text>

        <!-- Hot lead badge card -->
        <rect x="10" y="105" width="265" height="230" rx="16" fill="#0d1b38" stroke="#1d4ed8" stroke-width="1.5"/>
        <rect x="25" y="125" width="235" height="46" rx="23" fill="#ef4444" fill-opacity="0.2" stroke="#ef4444" stroke-opacity="0.6"/>
        <text x="45" y="154" font-size="20">🔥</text>
        <text x="74" y="153" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#f87171">Hot Lead Score</text>
        <rect x="195" y="137" width="50" height="22" rx="11" fill="#ef4444"/>
        <text x="220" y="153" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle">98%</text>

        <text x="25" y="200" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#94a3b8">ESTIMATED ORDER VALUE</text>
        <text x="25" y="234" font-family="system-ui, sans-serif" font-size="28" font-weight="900" fill="#ffffff">৳ 1,45,000</text>

        <rect x="25" y="260" width="235" height="34" rx="10" fill="#064e3b" stroke="#059669" stroke-width="1"/>
        <text x="40" y="282" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#34d399">↗ High Purchase Intent · Qualified</text>
        <text x="142" y="318" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#60a5fa" text-anchor="middle">Routed to Account Closer</text>
      `)
    },
    b: {
      alt: "Calendar booking slot cluster with scheduled sales meeting card",
      prompt: "Isolated 3D calendar and meeting booking slot cluster with clock icon, checkmark badge, and confirmed consultation pill on transparent background.",
      svgContent: makeClusterSvg(`
        <!-- 3D Calendar Graphic -->
        <g transform="translate(60, 40)">
          <rect width="240" height="230" rx="24" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
          <path d="M 0 0 L 240 0 L 240 54 L 0 54 Z" fill="#0172ff" rx="24"/>
          <text x="120" y="36" font-family="system-ui, sans-serif" font-size="17" font-weight="900" fill="#ffffff" text-anchor="middle">OCTOBER 2026</text>
          
          <rect x="30" y="80" width="46" height="42" rx="10" fill="#f1f5f9"/>
          <text x="53" y="106" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#64748b" text-anchor="middle">14</text>

          <rect x="96" y="80" width="46" height="42" rx="10" fill="#0172ff"/>
          <text x="119" y="106" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#ffffff" text-anchor="middle">15</text>

          <rect x="162" y="80" width="46" height="42" rx="10" fill="#f1f5f9"/>
          <text x="185" y="106" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#64748b" text-anchor="middle">16</text>

          <!-- Confirmed Meeting Pill -->
          <rect x="20" y="150" width="200" height="54" rx="16" fill="#f0fdf4" stroke="#86efac"/>
          <circle cx="44" cy="177" r="14" fill="#22c55e"/>
          <text x="44" y="183" font-size="14" font-weight="900" fill="#ffffff" text-anchor="middle">✓</text>
          <text x="68" y="172" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#14532d">Discovery Call 30m</text>
          <text x="68" y="188" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#16a34a">3:30 PM · Google Meet</text>
        </g>

        <!-- Floating Clock Badge -->
        <g transform="translate(260, 160)">
          <circle cx="50" cy="50" r="46" fill="#0f172a" stroke="#38bdf8" stroke-width="3"/>
          <text x="50" y="58" font-size="34" text-anchor="middle">⚡</text>
          <rect x="10" y="90" width="80" height="22" rx="11" fill="#0172ff"/>
          <text x="50" y="105" font-family="system-ui, sans-serif" font-size="10" font-weight="900" fill="#ffffff" text-anchor="middle">INSTANT</text>
        </g>
      `)
    }
  },

  // 2. customer-support
  {
    folder: "ai-agents/customer-support",
    a: {
      alt: "Smartphone mockup showing automated customer support conversation with live order lookup and instant answer",
      prompt: "Isolated 3D smartphone on transparent background, showing customer support chat resolving delivery query with order status pill and 0s response time.",
      svgContent: makePhoneSvg(310, 600, `
        <!-- Support Header -->
        <circle cx="20" cy="18" r="14" fill="#059669"/>
        <text x="20" y="24" font-size="14" text-anchor="middle">🎧</text>
        <text x="44" y="16" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff">Support Assistant</text>
        <text x="44" y="28" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#34d399">Verified Documentation</text>

        <!-- User query -->
        <rect x="10" y="45" width="265" height="42" rx="14" fill="#1e293b"/>
        <text x="20" y="70" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#f1f5f9">"Where is my invoice for order #5182?"</text>

        <!-- Instant Bot Resolution Card -->
        <rect x="10" y="100" width="265" height="230" rx="16" fill="#0f241a" stroke="#059669" stroke-width="1.5"/>
        <rect x="25" y="120" width="235" height="38" rx="19" fill="#059669" fill-opacity="0.2"/>
        <text x="44" y="144" font-size="16">📄</text>
        <text x="68" y="143" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#6ee7b7">Invoice #5182 Found</text>
        
        <text x="25" y="185" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#e2e8f0">Amount: ৳ 4,920 (Paid via bKash)</text>
        <text x="25" y="205" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#e2e8f0">Status: Dispatched via Steadfast</text>

        <rect x="25" y="235" width="235" height="46" rx="14" fill="#059669"/>
        <text x="142" y="263" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#ffffff" text-anchor="middle">Download PDF Invoice 📥</text>

        <text x="142" y="308" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#a7f3d0" text-anchor="middle">Resolved in 1.4 seconds</text>
      `)
    },
    b: {
      alt: "Human agent escalation visual with friendly avatar and live chat badge",
      prompt: "Isolated 3D human agent escalation cluster with photo avatar, green active status badge, and transfer confirmed pill on transparent background.",
      svgContent: makeClusterSvg(`
        <!-- Agent Avatar Circle -->
        <g transform="translate(100, 50)">
          <circle cx="80" cy="80" r="75" fill="#ffffff" stroke="#e2e8f0" stroke-width="3"/>
          <circle cx="80" cy="80" r="68" fill="#10b981"/>
          <!-- Avatar Icon -->
          <text x="80" y="95" font-size="52" text-anchor="middle">👨‍💼</text>
          <circle cx="135" cy="125" r="16" fill="#22c55e" stroke="#ffffff" stroke-width="4"/>
        </g>

        <!-- Status Card -->
        <g transform="translate(230, 90)">
          <rect width="210" height="90" rx="18" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
          <rect x="16" y="16" width="96" height="24" rx="12" fill="#22c55e" fill-opacity="0.2"/>
          <text x="64" y="32" font-family="system-ui, sans-serif" font-size="10" font-weight="900" fill="#4ade80" text-anchor="middle">LIVE AGENT</text>
          <text x="16" y="62" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#ffffff">Smart Escalation</text>
          <text x="16" y="78" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#94a3b8">0s Wait · Full History Sent</text>
        </g>
      `)
    }
  },

  // 3. sales-agent
  {
    folder: "ai-agents/sales-agent",
    a: {
      alt: "Smartphone mockup displaying in-chat product catalog with apparel photo, pricing in BDT, and one-tap order",
      prompt: "Isolated 3D smartphone on transparent background, showing conversational commerce chat with product catalog carousel card and Buy Now button in BDT.",
      svgContent: makePhoneSvg(310, 600, `
        <!-- Header -->
        <circle cx="20" cy="18" r="14" fill="#0172ff"/>
        <text x="20" y="24" font-size="14" text-anchor="middle">🛍️</text>
        <text x="44" y="16" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff">Sales AI Agent</text>
        <text x="44" y="28" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#38bdf8">Interactive Catalog</text>

        <!-- Product Card in Chat -->
        <rect x="10" y="45" width="265" height="300" rx="16" fill="#0f172a" stroke="#1e3a8a" stroke-width="1.5"/>
        
        <!-- Product Photo Box -->
        <rect x="22" y="60" width="241" height="135" rx="12" fill="#1e293b"/>
        <text x="142" y="135" font-size="44" text-anchor="middle">👗</text>
        <rect x="32" y="70" width="70" height="20" rx="10" fill="#ef4444"/>
        <text x="67" y="84" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#ffffff" text-anchor="middle">POPULAR</text>

        <!-- Price & Details -->
        <text x="24" y="220" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#ffffff">Designer Floral Kurti</text>
        <text x="24" y="238" font-family="system-ui, sans-serif" font-size="11" font-weight="500" fill="#94a3b8">Pure Cotton · Sizes S to XXL</text>
        <text x="24" y="270" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#38bdf8">৳ 2,150</text>

        <!-- Buy Button -->
        <rect x="22" y="285" width="241" height="44" rx="14" fill="#0172ff"/>
        <text x="142" y="312" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#ffffff" text-anchor="middle">Order Inside Chat ⚡</text>
      `)
    },
    b: {
      alt: "Product recommendation cluster with shopping bag and instant checkout",
      prompt: "Isolated 3D product shopping bag and instant checkout card cluster with discount badge on transparent background.",
      svgContent: makeClusterSvg(`
        <!-- 3D Shopping Bag -->
        <g transform="translate(80, 50)">
          <rect width="180" height="200" rx="20" fill="#0172ff"/>
          <path d="M 40 40 Q 90 -10, 140 40" fill="none" stroke="#ffffff" stroke-width="8" stroke-linecap="round"/>
          <text x="90" y="125" font-size="44" text-anchor="middle">🛍️</text>
          <text x="90" y="165" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#ffffff" text-anchor="middle">JADU CART</text>
        </g>

        <!-- Floating Upsell Card -->
        <g transform="translate(230, 110)">
          <rect width="210" height="100" rx="18" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
          <rect x="16" y="16" width="105" height="24" rx="12" fill="#dcfce7"/>
          <text x="68" y="32" font-family="system-ui, sans-serif" font-size="10" font-weight="900" fill="#15803d" text-anchor="middle">AI RECOMMEND</text>
          <text x="16" y="64" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#0f172a">Matching Dupatta</text>
          <text x="16" y="84" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#0172ff">+ ৳ 450 (10% Off)</text>
        </g>
      `)
    }
  },

  // 4. shopify-whatsapp
  {
    folder: "ai-agents/shopify-whatsapp",
    a: {
      alt: "Smartphone mockup showing Shopify abandoned cart recovery with free shipping voucher and checkout button",
      prompt: "Isolated 3D smartphone on transparent background, showing Shopify abandoned checkout notification on WhatsApp with sneaker photo and instant recovery link.",
      svgContent: makePhoneSvg(310, 600, `
        <!-- WhatsApp Header -->
        <circle cx="20" cy="18" r="14" fill="#25d366"/>
        <text x="20" y="24" font-size="14" text-anchor="middle">🛍️</text>
        <text x="44" y="16" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff">Shopify Store Sync</text>
        <text x="44" y="28" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#86efac">Verified Meta API</text>

        <!-- Cart Rescue Card -->
        <rect x="10" y="45" width="265" height="300" rx="16" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        
        <rect x="22" y="60" width="241" height="120" rx="12" fill="#f8fafc"/>
        <text x="142" y="130" font-size="44" text-anchor="middle">👟</text>
        <rect x="32" y="70" width="105" height="22" rx="11" fill="#fef2f2"/>
        <text x="84" y="85" font-family="system-ui, sans-serif" font-size="9" font-weight="900" fill="#ef4444" text-anchor="middle">ABANDONED CART</text>

        <text x="24" y="205" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#0f172a">SpeedPro Running Shoes</text>
        <text x="24" y="222" font-family="system-ui, sans-serif" font-size="11" font-weight="500" fill="#64748b">Size: 43 · Saved in checkout</text>
        <text x="24" y="250" font-family="system-ui, sans-serif" font-size="22" font-weight="900" fill="#075e54">৳ 3,850</text>

        <rect x="22" y="265" width="241" height="44" rx="14" fill="#25d366"/>
        <text x="142" y="292" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#ffffff" text-anchor="middle">Complete Order (Free Delivery) ⚡</text>
      `, "#075e54", "#25d366")
    },
    b: {
      alt: "Shopify order notification and live inventory sync cluster",
      prompt: "Isolated 3D Shopify logo card with live inventory sync badge and dispatch notification on transparent background.",
      svgContent: makeClusterSvg(`
        <!-- Shopify Sync Card -->
        <g transform="translate(80, 50)">
          <rect width="220" height="180" rx="22" fill="#95bf47" stroke="#ffffff" stroke-width="2"/>
          <text x="110" y="80" font-size="46" text-anchor="middle">🛍️</text>
          <text x="110" y="125" font-family="system-ui, sans-serif" font-size="16" font-weight="900" fill="#ffffff" text-anchor="middle">SHOPIFY LIVE SYNC</text>
          <rect x="35" y="140" width="150" height="24" rx="12" fill="#ffffff"/>
          <text x="110" y="156" font-family="system-ui, sans-serif" font-size="10" font-weight="900" fill="#2b4703" text-anchor="middle">1-CLICK WEBHOOK</text>
        </g>

        <!-- Tracking Badge -->
        <g transform="translate(240, 110)">
          <rect width="190" height="90" rx="18" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
          <text x="20" y="36" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#ffffff">Automated Dispatch</text>
          <text x="20" y="56" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#94a3b8">Tracking ID + WhatsApp Ping</text>
          <rect x="20" y="64" width="70" height="18" rx="9" fill="#22c55e"/>
          <text x="55" y="76" font-family="system-ui, sans-serif" font-size="9" font-weight="900" fill="#ffffff" text-anchor="middle">ACTIVE</text>
        </g>
      `)
    }
  },

  // 5. woocommerce-whatsapp
  {
    folder: "ai-agents/woocommerce-whatsapp",
    a: {
      alt: "Smartphone mockup showing WooCommerce cart reminder and Cash on Delivery order verification",
      prompt: "Isolated 3D smartphone on transparent background, showing WooCommerce order verification message on WhatsApp with confirmation buttons.",
      svgContent: makePhoneSvg(310, 600, `
        <!-- WhatsApp Header -->
        <circle cx="20" cy="18" r="14" fill="#7f54b3"/>
        <text x="20" y="24" font-size="14" text-anchor="middle">📦</text>
        <text x="44" y="16" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff">WooCommerce Bot</text>
        <text x="44" y="28" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#d8b4fe">Order Verification</text>

        <!-- Order Verification Card -->
        <rect x="10" y="45" width="265" height="280" rx="16" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
        <text x="24" y="75" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#0f172a">Confirm Order #WC-8910</text>
        <text x="24" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="500" fill="#64748b">Cotton Panjabi · Size XL</text>
        <text x="24" y="125" font-family="system-ui, sans-serif" font-size="22" font-weight="900" fill="#7f54b3">৳ 2,650 (COD)</text>

        <!-- Interactive Confirmation Buttons -->
        <rect x="22" y="150" width="241" height="42" rx="12" fill="#22c55e"/>
        <text x="142" y="176" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#ffffff" text-anchor="middle">✓ Confirm My Order</text>

        <rect x="22" y="200" width="241" height="42" rx="12" fill="#f1f5f9"/>
        <text x="142" y="226" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#475569" text-anchor="middle">Edit Delivery Address</text>

        <text x="142" y="270" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#64748b" text-anchor="middle">Zero-return COD fraud protection</text>
      `, "#4c1d95", "#a855f7")
    },
    b: {
      alt: "WooCommerce REST API webhook and database sync cluster",
      prompt: "Isolated 3D WooCommerce gear and database sync cluster with instant stock query badge on transparent background.",
      svgContent: makeClusterSvg(`
        <!-- WooCommerce Box -->
        <g transform="translate(80, 50)">
          <rect width="210" height="180" rx="22" fill="#7f54b3"/>
          <text x="105" y="85" font-size="46" text-anchor="middle">⚙️</text>
          <text x="105" y="125" font-family="system-ui, sans-serif" font-size="15" font-weight="900" fill="#ffffff" text-anchor="middle">WOOCOMMERCE</text>
          <rect x="35" y="140" width="140" height="24" rx="12" fill="#ffffff"/>
          <text x="105" y="156" font-family="system-ui, sans-serif" font-size="10" font-weight="900" fill="#4c1d95" text-anchor="middle">REST API ENGINE</text>
        </g>

        <!-- Live Stock Tag -->
        <g transform="translate(240, 110)">
          <rect width="190" height="85" rx="18" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
          <text x="20" y="34" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0f172a">Real-Time Stock Query</text>
          <text x="20" y="52" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#16a34a">● In Stock (24 units)</text>
          <text x="20" y="70" font-family="system-ui, sans-serif" font-size="10" font-weight="500" fill="#64748b">Instant WordPress query</text>
        </g>
      `)
    }
  },

  // 6. whatsapp-automation
  {
    folder: "platform/whatsapp-automation",
    a: {
      alt: "Smartphone mockup displaying verified WhatsApp Business chat with automated order confirmation and tracking ID in BDT",
      prompt: "Isolated 3D smartphone on transparent background, showing verified WhatsApp business chat confirming order with ৳ 2,450 amount and tracking ID.",
      svgContent: makePhoneSvg(310, 600, `
        <!-- WhatsApp Header -->
        <circle cx="20" cy="18" r="14" fill="#25d366"/>
        <text x="20" y="24" font-size="14" text-anchor="middle">✓</text>
        <text x="44" y="16" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff">Jadubot Business</text>
        <text x="44" y="28" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#86efac">Verified Official Cloud API</text>

        <!-- Order confirmation card -->
        <rect x="10" y="45" width="265" height="280" rx="16" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
        <text x="24" y="75" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#075e54">Order #JB-9842 Confirmed 🎉</text>
        
        <rect x="22" y="90" width="241" height="60" rx="10" fill="#f8fafc"/>
        <text x="34" y="112" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#64748b">Delivery to: S. Rahman, Dhaka</text>
        <text x="34" y="134" font-family="system-ui, sans-serif" font-size="16" font-weight="900" fill="#0f172a">Total: ৳ 2,450 (COD)</text>

        <rect x="22" y="165" width="241" height="48" rx="12" fill="#dcfce7" stroke="#86efac"/>
        <text x="34" y="186" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#15803d">Courier: REDX Express</text>
        <text x="34" y="202" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#166534">Tracking ID: REDX-88219</text>

        <rect x="22" y="225" width="241" height="42" rx="12" fill="#25d366"/>
        <text x="142" y="251" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#ffffff" text-anchor="middle">Track Live Delivery 🚚</text>
      `, "#075e54", "#25d366")
    },
    b: {
      alt: "WhatsApp promotional broadcast message cluster with 98% open rate indicator",
      prompt: "Isolated 3D broadcast megaphone and targeted WhatsApp campaign card with 98% open rate badge on transparent background.",
      svgContent: makeClusterSvg(`
        <!-- Megaphone 3D -->
        <g transform="translate(80, 50)">
          <circle cx="80" cy="80" r="70" fill="#25d366"/>
          <text x="80" y="98" font-size="52" text-anchor="middle">📢</text>
        </g>

        <!-- Broadcast Metrics Card -->
        <g transform="translate(200, 70)">
          <rect width="230" height="120" rx="18" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
          <text x="20" y="34" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#ffffff">Targeted Broadcasts</text>
          <text x="20" y="70" font-family="system-ui, sans-serif" font-size="28" font-weight="900" fill="#38bdf8">98% Open</text>
          <rect x="20" y="84" width="130" height="20" rx="10" fill="#059669"/>
          <text x="85" y="98" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#ffffff" text-anchor="middle">OFFICIAL META API</text>
        </g>
      `)
    }
  },

  // 7. facebook-automation
  {
    folder: "platform/facebook-automation",
    a: {
      alt: "Smartphone mockup showing Facebook post comment flowing into Messenger DM with product card and checkout link",
      prompt: "Isolated 3D smartphone on transparent background, showing Facebook post comment PRICE flowing to a private Messenger DM card with apparel item and BDT price.",
      svgContent: makePhoneSvg(310, 600, `
        <!-- Facebook Header -->
        <circle cx="20" cy="18" r="14" fill="#1877f2"/>
        <text x="20" y="24" font-size="14" font-weight="900" fill="#ffffff" text-anchor="middle">f</text>
        <text x="44" y="16" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff">Facebook Auto DM</text>
        <text x="44" y="28" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#93c5fd">Comment-to-DM Engine</text>

        <!-- Post comment pill -->
        <rect x="10" y="45" width="265" height="42" rx="12" fill="#1e293b"/>
        <text x="20" y="66" font-family="system-ui, sans-serif" font-size="10" font-weight="500" fill="#94a3b8">Customer commented:</text>
        <text x="140" y="66" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#38bdf8">"PRICE?"</text>

        <!-- Connected Messenger Card -->
        <rect x="10" y="100" width="265" height="235" rx="16" fill="#0f172a" stroke="#1d4ed8" stroke-width="1.5"/>
        <rect x="22" y="115" width="241" height="90" rx="10" fill="#1e293b"/>
        <text x="142" y="170" font-size="34" text-anchor="middle">👗</text>

        <text x="24" y="225" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#ffffff">Summer Floral Maxi Dress</text>
        <text x="24" y="250" font-family="system-ui, sans-serif" font-size="20" font-weight="900" fill="#38bdf8">৳ 1,850 only</text>

        <rect x="22" y="265" width="241" height="44" rx="12" fill="#1877f2"/>
        <text x="142" y="292" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#ffffff" text-anchor="middle">Order Now in Messenger ⚡</text>
      `, "#0a192f", "#1877f2")
    },
    b: {
      alt: "Click-to-Messenger ad conversion and campaign attribution visual cluster",
      prompt: "Isolated 3D Click-to-Messenger ad card with conversion stats and lead badge on transparent background.",
      svgContent: makeClusterSvg(`
        <!-- Ad Card -->
        <g transform="translate(80, 50)">
          <rect width="220" height="160" rx="20" fill="#1877f2"/>
          <text x="110" y="65" font-size="44" text-anchor="middle">💬</text>
          <text x="110" y="105" font-family="system-ui, sans-serif" font-size="15" font-weight="900" fill="#ffffff" text-anchor="middle">CLICK-TO-MSG ADS</text>
          <rect x="30" y="120" width="160" height="24" rx="12" fill="#ffffff"/>
          <text x="110" y="136" font-family="system-ui, sans-serif" font-size="10" font-weight="900" fill="#1877f2" text-anchor="middle">100% INBOX LEADS</text>
        </g>

        <!-- ROI Badge -->
        <g transform="translate(240, 100)">
          <rect width="180" height="85" rx="18" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
          <text x="18" y="32" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0f172a">Zero Ad Waste</text>
          <text x="18" y="58" font-family="system-ui, sans-serif" font-size="22" font-weight="900" fill="#16a34a">3.4x ROI</text>
          <text x="18" y="74" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#64748b">Instant automated response</text>
        </g>
      `)
    }
  },

  // 8. instagram-automation
  {
    folder: "platform/instagram-automation",
    a: {
      alt: "Smartphone mockup showing Instagram Reels auto-reply triggering DM with product catalog preview",
      prompt: "Isolated 3D smartphone on transparent background, showing Instagram Story/Reel keyword reply triggering a stylish DM catalog preview with collection button.",
      svgContent: makePhoneSvg(310, 600, `
        <!-- Instagram Header -->
        <circle cx="20" cy="18" r="14" fill="#e1306c"/>
        <text x="20" y="24" font-size="14" text-anchor="middle">📷</text>
        <text x="44" y="16" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff">Instagram DM Bot</text>
        <text x="44" y="28" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#f472b6">Reels &amp; Story Automations</text>

        <!-- Story Trigger Pill -->
        <rect x="10" y="45" width="265" height="42" rx="12" fill="#1e293b"/>
        <text x="20" y="64" font-family="system-ui, sans-serif" font-size="10" font-weight="500" fill="#94a3b8">Story sticker reply:</text>
        <text x="130" y="64" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#f43f5e">"Send catalog!"</text>

        <!-- DM Catalog Carousel -->
        <rect x="10" y="100" width="265" height="235" rx="16" fill="#0f172a" stroke="#e1306c" stroke-width="1.5"/>
        <rect x="22" y="115" width="241" height="90" rx="10" fill="#1e293b"/>
        <text x="142" y="170" font-size="34" text-anchor="middle">✨</text>

        <text x="24" y="225" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#ffffff">New Season Collection</text>
        <text x="24" y="250" font-family="system-ui, sans-serif" font-size="20" font-weight="900" fill="#f472b6">৳ 2,400</text>

        <rect x="22" y="265" width="241" height="44" rx="12" fill="#e1306c"/>
        <text x="142" y="292" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#ffffff" text-anchor="middle">Explore Collection in DM 🛍️</text>
      `, "#1a0b1e", "#e1306c")
    },
    b: {
      alt: "Instagram Story mention reward and coupon voucher cluster",
      prompt: "Isolated 3D Instagram story mention card with discount voucher coupon badge on transparent background.",
      svgContent: makeClusterSvg(`
        <!-- Story Mention Card -->
        <g transform="translate(80, 50)">
          <rect width="210" height="160" rx="20" fill="#e1306c"/>
          <text x="105" y="65" font-size="44" text-anchor="middle">🎁</text>
          <text x="105" y="105" font-family="system-ui, sans-serif" font-size="15" font-weight="900" fill="#ffffff" text-anchor="middle">STORY REWARD</text>
          <rect x="30" y="120" width="150" height="24" rx="12" fill="#ffffff"/>
          <text x="105" y="136" font-family="system-ui, sans-serif" font-size="10" font-weight="900" fill="#e1306c" text-anchor="middle">AUTO-DISPATCH</text>
        </g>

        <!-- Coupon Voucher -->
        <g transform="translate(230, 95)">
          <rect width="190" height="90" rx="18" fill="#ffffff" stroke="#fbcfe8" stroke-width="2"/>
          <text x="18" y="32" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0f172a">15% Promo Code</text>
          <text x="18" y="56" font-family="system-ui, sans-serif" font-size="18" font-weight="900" fill="#db2777">INSTA15</text>
          <text x="18" y="74" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#64748b">Sent within 2 seconds</text>
        </g>
      `)
    }
  },

  // 9. telegram-automation
  {
    folder: "platform/telegram-automation",
    a: {
      alt: "Smartphone mockup showing Telegram bot with interactive button menu and digital asset delivery",
      prompt: "Isolated 3D smartphone on transparent background, showing Telegram bot interface with quick action buttons and instant download delivery.",
      svgContent: makePhoneSvg(310, 600, `
        <!-- Telegram Header -->
        <circle cx="20" cy="18" r="14" fill="#229ed9"/>
        <text x="20" y="24" font-size="14" text-anchor="middle">✈️</text>
        <text x="44" y="16" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff">Telegram Bot Pro</text>
        <text x="44" y="28" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#7dd3fc">Unlimited Subscribers</text>

        <!-- Digital Delivery Card -->
        <rect x="10" y="45" width="265" height="280" rx="16" fill="#0f172a" stroke="#0284c7" stroke-width="1.5"/>
        <text x="24" y="75" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#38bdf8">Digital Product Access ⚡</text>
        
        <rect x="22" y="90" width="241" height="50" rx="10" fill="#1e293b"/>
        <text x="34" y="112" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#94a3b8">License Key: JADU-8841-VIP</text>
        <text x="34" y="128" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#22c55e">● Verified &amp; Active</text>

        <rect x="22" y="155" width="241" height="42" rx="12" fill="#229ed9"/>
        <text x="142" y="181" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#ffffff" text-anchor="middle">Open Premium Channel 🚀</text>

        <rect x="22" y="205" width="241" height="42" rx="12" fill="#1e293b"/>
        <text x="142" y="231" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#e2e8f0" text-anchor="middle">Support / Documentation</text>

        <text x="142" y="275" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#94a3b8" text-anchor="middle">Instant bKash payment verification</text>
      `, "#07182b", "#229ed9")
    },
    b: {
      alt: "Telegram broadcast channel subscriber scale cluster with unlimited reach badge",
      prompt: "Isolated 3D Telegram channel broadcast visual with unlimited subscriber badge on transparent background.",
      svgContent: makeClusterSvg(`
        <!-- Telegram Broadcast Orb -->
        <g transform="translate(80, 50)">
          <circle cx="80" cy="80" r="70" fill="#229ed9"/>
          <text x="80" y="98" font-size="52" text-anchor="middle">📡</text>
        </g>

        <!-- Reach Card -->
        <g transform="translate(200, 70)">
          <rect width="230" height="110" rx="18" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
          <text x="20" y="34" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#ffffff">Unlimited Broadcasts</text>
          <text x="20" y="66" font-family="system-ui, sans-serif" font-size="26" font-weight="900" fill="#38bdf8">Zero Caps</text>
          <rect x="20" y="80" width="140" height="20" rx="10" fill="#0284c7"/>
          <text x="90" y="94" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#ffffff" text-anchor="middle">NO RATE LIMITS</text>
        </g>
      `)
    }
  },

  // 10. website-chat-automation
  {
    folder: "platform/website-chat-automation",
    a: {
      alt: "Smartphone and browser preview showing proactive web chat widget with lead intake form",
      prompt: "Isolated 3D device screen on transparent background, showing proactive website chat widget capturing verified email and phone number.",
      svgContent: makePhoneSvg(310, 600, `
        <!-- Webchat Header -->
        <circle cx="20" cy="18" r="14" fill="#0172ff"/>
        <text x="20" y="24" font-size="14" text-anchor="middle">🌐</text>
        <text x="44" y="16" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff">Jadubot Web Widget</text>
        <text x="44" y="28" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#38bdf8">Proactive Site Trigger</text>

        <!-- Trigger Popup -->
        <rect x="10" y="45" width="265" height="56" rx="14" fill="#1e293b"/>
        <text x="20" y="66" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#ffffff">"Need help choosing the right plan?"</text>
        <text x="20" y="84" font-family="system-ui, sans-serif" font-size="10" font-weight="500" fill="#94a3b8">Triggered after 15s dwell time</text>

        <!-- Lead Intake Card -->
        <rect x="10" y="115" width="265" height="235" rx="16" fill="#0f172a" stroke="#1d4ed8" stroke-width="1.5"/>
        <text x="24" y="142" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#ffffff">Book a Free Live Demo</text>
        
        <rect x="22" y="155" width="241" height="38" rx="10" fill="#1e293b"/>
        <text x="34" y="179" font-family="system-ui, sans-serif" font-size="11" font-weight="500" fill="#94a3b8">your-email@company.com</text>

        <rect x="22" y="202" width="241" height="38" rx="10" fill="#1e293b"/>
        <text x="34" y="226" font-family="system-ui, sans-serif" font-size="11" font-weight="500" fill="#94a3b8">+880 1700 000000</text>

        <rect x="22" y="250" width="241" height="44" rx="12" fill="#0172ff"/>
        <text x="142" y="277" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#ffffff" text-anchor="middle">Continue on WhatsApp 💬</text>

        <text x="142" y="322" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#60a5fa" text-anchor="middle">Cross-channel continuity enabled</text>
      `, "#0a1226", "#0172ff")
    },
    b: {
      alt: "Cross-channel conversation continuity cluster with web to WhatsApp seamless handoff",
      prompt: "Isolated 3D omnichannel connection cluster with website to WhatsApp bridge and zero context loss badge on transparent background.",
      svgContent: makeClusterSvg(`
        <!-- Connection Hub -->
        <g transform="translate(80, 50)">
          <rect width="210" height="150" rx="20" fill="#0172ff"/>
          <text x="105" y="65" font-size="44" text-anchor="middle">🔄</text>
          <text x="105" y="105" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#ffffff" text-anchor="middle">OMNICHANNEL BRIDGE</text>
          <rect x="30" y="118" width="150" height="20" rx="10" fill="#ffffff"/>
          <text x="105" y="132" font-family="system-ui, sans-serif" font-size="9" font-weight="900" fill="#0172ff" text-anchor="middle">ZERO CONTEXT LOSS</text>
        </g>

        <!-- WhatsApp Handoff Tag -->
        <g transform="translate(230, 95)">
          <rect width="190" height="85" rx="18" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
          <text x="18" y="32" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0f172a">1-Click Handoff</text>
          <text x="18" y="52" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#16a34a">Web ➔ WhatsApp Chat</text>
          <text x="18" y="70" font-family="system-ui, sans-serif" font-size="9" font-weight="500" fill="#64748b">Verified phone captured</text>
        </g>
      `)
    }
  }
];

async function run() {
  const baseDir = path.resolve("public/assets/images");

  for (const spec of BENTO_SPECS) {
    const targetDir = path.join(baseDir, spec.folder);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    // Generate bento-a.webp (Transparent PNG/WebP alpha channel, max ~900px, <120KB)
    const destA = path.join(targetDir, "bento-a.webp");
    await sharp(Buffer.from(spec.a.svgContent))
      .resize(600, 750)
      .webp({ quality: 90, alphaQuality: 100 })
      .toFile(destA);

    // Generate bento-b.webp
    const destB = path.join(targetDir, "bento-b.webp");
    await sharp(Buffer.from(spec.b.svgContent))
      .resize(550, 420)
      .webp({ quality: 90, alphaQuality: 100 })
      .toFile(destB);

    console.log(`Generated bento images for ${spec.folder}`);
  }
}

run().catch(console.error);
