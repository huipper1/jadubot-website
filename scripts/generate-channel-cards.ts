import fs from "fs";
import path from "path";
import sharp from "sharp";

interface ChannelSpec {
  filename: string;
  theme: "facebook" | "whatsapp" | "instagram" | "website" | "cpa";
  deviceType: "phone" | "laptop";
  bgGradient: {
    stop1: string;
    stop2: string;
    accentGlow: string;
    pedestalTop: string;
    pedestalSide: string;
  };
  deviceFrame: {
    color: string;
    stroke: string;
    screenBg: string;
  };
  screenContent: string;
}

const specs: ChannelSpec[] = [
  // ─────────────────────────────────────────────────────────────
  // 1. Facebook Automation (facebook.webp)
  // "Turn post comments into private Messenger conversations, capture orders inside chat, confirm Cash on Delivery."
  // Scene: Phone showing Facebook product post where customer comments "PRICE", and a Messenger DM already open with product card, size options, and Cash on Delivery confirmation. Subtle arrow link from comment to DM. Facebook-blue wash.
  // ─────────────────────────────────────────────────────────────
  {
    filename: "facebook.webp",
    theme: "facebook",
    deviceType: "phone",
    bgGradient: {
      stop1: "#f0f6ff",
      stop2: "#dbeafe",
      accentGlow: "#1877f2",
      pedestalTop: "#e0edff",
      pedestalSide: "#bfdbfe"
    },
    deviceFrame: {
      color: "#0f172a",
      stroke: "#60a5fa",
      screenBg: "#ffffff"
    },
    screenContent: `
      <!-- Phone Top Status Bar -->
      <g transform="translate(425, 75)">
        <rect x="130" y="4" width="90" height="18" rx="9" fill="#000000"/>
        <text x="35" y="18" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="#0f172a">9:41</text>
        <circle cx="310" cy="14" r="4" fill="#1877f2"/>
      </g>

      <!-- App Header: Facebook Page + Messenger Badge -->
      <g transform="translate(425, 110)">
        <rect width="350" height="52" fill="#1877f2"/>
        <circle cx="36" cy="26" r="16" fill="#ffffff"/>
        <!-- Facebook "f" logo -->
        <text x="36" y="32" font-family="system-ui, sans-serif" font-size="20" font-weight="900" fill="#1877f2" text-anchor="middle">f</text>
        <text x="64" y="22" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#ffffff">Jadu Fashion BD</text>
        <text x="64" y="38" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#bfdbfe">● Auto-Messenger Active</text>
        <rect x="252" y="14" width="82" height="24" rx="12" fill="#ffffff"/>
        <text x="293" y="30" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1877f2" text-anchor="middle">Instant DM</text>
      </g>

      <!-- Facebook Post Preview (Customer comment "PRICE") -->
      <g transform="translate(445, 178)">
        <rect width="310" height="110" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
        <circle cx="28" cy="28" r="14" fill="#cbd5e1"/>
        <text x="28" y="33" font-family="system-ui, sans-serif" font-size="14" text-anchor="middle">👤</text>
        <text x="52" y="24" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#1e293b">Customer Post Comment</text>
        <text x="52" y="38" font-family="system-ui, sans-serif" font-size="10" font-weight="500" fill="#64748b">2m ago · Public Post</text>
        
        <!-- Comment bubble -->
        <rect x="18" y="54" width="170" height="40" rx="12" fill="#e2e8f0"/>
        <text x="32" y="72" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#475569">"PRICE koto?"</text>
        <text x="32" y="86" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0f172a">"PRICE please"</text>

        <!-- Dynamic Trigger Indicator Arrow -->
        <g transform="translate(200, 58)">
          <rect width="96" height="32" rx="16" fill="#1877f2"/>
          <text x="48" y="20" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#ffffff" text-anchor="middle">⚡ Auto-DM ➔</text>
        </g>
      </g>

      <!-- Messenger Private Chat Screen / Order Flow -->
      <g transform="translate(445, 304)">
        <rect width="310" height="280" rx="16" fill="#ffffff" stroke="#93c5fd" stroke-width="2"/>
        
        <!-- Messenger Chat Header -->
        <g transform="translate(16, 14)">
          <circle cx="16" cy="16" r="14" fill="#0084ff"/>
          <text x="16" y="21" font-family="system-ui, sans-serif" font-size="13" text-anchor="middle">💬</text>
          <text x="38" y="16" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0f172a">Messenger Order Bot</text>
          <text x="38" y="28" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#16a34a">● Order in progress</text>
        </g>

        <!-- Product Card inside DM -->
        <g transform="translate(16, 52)">
          <rect width="278" height="135" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.2"/>
          
          <!-- Product image thumbnail -->
          <rect x="12" y="12" width="70" height="70" rx="8" fill="#3b82f6" fill-opacity="0.15"/>
          <text x="47" y="52" font-family="system-ui, sans-serif" font-size="28" text-anchor="middle">👗</text>
          
          <g transform="translate(92, 16)">
            <text x="0" y="14" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#0f172a">Premium Cotton Kurti</text>
            <text x="0" y="30" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#64748b">Size: M, L, XL in stock</text>
            <text x="0" y="52" font-family="system-ui, sans-serif" font-size="18" font-weight="900" fill="#1877f2">৳ 1,650</text>
          </g>

          <!-- Size chips -->
          <g transform="translate(12, 92)">
            <rect x="0" y="0" width="36" height="24" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
            <text x="18" y="16" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#334155" text-anchor="middle">M</text>
            <rect x="44" y="0" width="36" height="24" rx="6" fill="#1877f2"/>
            <text x="62" y="16" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">L ✓</text>
            <rect x="88" y="0" width="36" height="24" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
            <text x="106" y="16" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#334155" text-anchor="middle">XL</text>
          </g>
        </g>

        <!-- Big Cash on Delivery Confirmation Button -->
        <g transform="translate(16, 204)">
          <rect width="278" height="54" rx="14" fill="#16a34a"/>
          <text x="139" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#ffffff" text-anchor="middle">✓ Confirm Cash on Delivery (COD)</text>
          <text x="139" y="42" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#dcfce7" text-anchor="middle">Total: ৳ 1,770 (Free Dhaka Delivery)</text>
        </g>
      </g>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // 2. WhatsApp Automation (whatsapp.webp)
  // "Broadcast promotional alerts, automate booking confirmations, 24/7 VIP assistance."
  // Scene: Phone showing WhatsApp chat where bot sends order/booking confirmation with big ৳ amount, tracking ID, green confirm button, Bangla + English bubbles. Second small phone hint behind showing promotional broadcast message with product photo. WhatsApp-green wash.
  // ─────────────────────────────────────────────────────────────
  {
    filename: "whatsapp.webp",
    theme: "whatsapp",
    deviceType: "phone",
    bgGradient: {
      stop1: "#f0fdf4",
      stop2: "#dcfce7",
      accentGlow: "#25d366",
      pedestalTop: "#d1fae5",
      pedestalSide: "#a7f3d0"
    },
    deviceFrame: {
      color: "#0f172a",
      stroke: "#4ade80",
      screenBg: "#efeae2"
    },
    screenContent: `
      <!-- Phone Top Status Bar -->
      <g transform="translate(425, 75)">
        <rect x="130" y="4" width="90" height="18" rx="9" fill="#000000"/>
        <text x="35" y="18" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="#ffffff">10:24</text>
        <circle cx="310" cy="14" r="4" fill="#25d366"/>
      </g>

      <!-- WhatsApp Header -->
      <g transform="translate(425, 110)">
        <rect width="350" height="56" fill="#075e54"/>
        <circle cx="36" cy="28" r="18" fill="#25d366"/>
        <text x="36" y="34" font-family="system-ui, sans-serif" font-size="18" fill="#ffffff" text-anchor="middle">📱</text>
        <text x="64" y="24" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#ffffff">Jadubot Business AI</text>
        <text x="64" y="40" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#a7f3d0">Verified Cloud API ✓</text>
        <rect x="256" y="16" width="78" height="24" rx="12" fill="#128c7e"/>
        <text x="295" y="32" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#ffffff" text-anchor="middle">24/7 VIP</text>
      </g>

      <!-- Customer Inquiry Bubble (Bangla) -->
      <g transform="translate(445, 180)">
        <rect width="240" height="48" rx="14" fill="#ffffff" stroke="#e2e8f0"/>
        <text x="14" y="22" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#0f172a">"Bhai, amar booking/order ta ki</text>
        <text x="14" y="38" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#0f172a">confirm hoyeche?"</text>
        <text x="228" y="40" font-family="system-ui, sans-serif" font-size="9" fill="#94a3b8" text-anchor="end">10:22</text>
      </g>

      <!-- Bot Instant Confirmation Card (English + Bangla) -->
      <g transform="translate(445, 240)">
        <rect width="310" height="240" rx="16" fill="#d9fdd3" stroke="#86efac" stroke-width="1.5"/>
        
        <g transform="translate(16, 16)">
          <rect width="130" height="24" rx="12" fill="#25d366"/>
          <text x="65" y="16" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle">CONFIRMED ✓</text>
          
          <text x="0" y="48" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#075e54">জি! আপনার বুকিং কনফার্ম হয়েছে।</text>
          <text x="0" y="66" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#334155">Tracking ID: #JB-9842 (Pathao Express)</text>
          
          <!-- Big ৳ Amount Box -->
          <rect x="0" y="80" width="278" height="60" rx="12" fill="#ffffff" stroke="#bbf7d0"/>
          <text x="14" y="104" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#64748b">Total Amount Payable (COD):</text>
          <text x="14" y="130" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#075e54">৳ 2,450</text>
          <rect x="180" y="96" width="86" height="28" rx="8" fill="#dcfce7"/>
          <text x="223" y="114" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#15803d" text-anchor="middle">Ready to Ship</text>
          
          <!-- Live Tracking & Confirm Button -->
          <rect x="0" y="152" width="278" height="42" rx="12" fill="#25d366"/>
          <text x="139" y="178" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#ffffff" text-anchor="middle">Track Delivery on WhatsApp ⚡</text>
        </g>
      </g>

      <!-- Broadcast Promo Hint Pill -->
      <g transform="translate(445, 495)">
        <rect width="310" height="92" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-dasharray="4,4"/>
        <g transform="translate(14, 12)">
          <rect width="90" height="20" rx="10" fill="#fef08a"/>
          <text x="45" y="14" font-family="system-ui, sans-serif" font-size="9" font-weight="900" fill="#854d0e" text-anchor="middle">VIP BROADCAST</text>
          <text x="100" y="15" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#64748b">Sent to 1,200 Buyers</text>
          <text x="0" y="42" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0f172a">"Flash Sale 25% Off with Code: EID26"</text>
          <text x="0" y="60" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#16a34a">✓ 99.4% Delivery · ৳ 142k Captured</text>
        </g>
      </g>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // 3. Instagram Automation (instagram.webp)
  // "Auto DM replies when followers reply to stories or comment on Reels. Share catalog links and checkout buttons."
  // Scene: Phone showing Instagram Reel/Story with a "PRICE" comment bubble, and an auto-DM with a product catalog carousel (2-3 product photos, fashion items) and a checkout button. Pink/purple-to-warm wash.
  // ─────────────────────────────────────────────────────────────
  {
    filename: "instagram.webp",
    theme: "instagram",
    deviceType: "phone",
    bgGradient: {
      stop1: "#fdf2f8",
      stop2: "#fae8ff",
      accentGlow: "#e1306c",
      pedestalTop: "#fce7f3",
      pedestalSide: "#f5d0fe"
    },
    deviceFrame: {
      color: "#0f172a",
      stroke: "#f472b6",
      screenBg: "#000000"
    },
    screenContent: `
      <!-- Phone Top Status Bar -->
      <g transform="translate(425, 75)">
        <rect x="130" y="4" width="90" height="18" rx="9" fill="#1e1e1e"/>
        <text x="35" y="18" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="#ffffff">8:30</text>
        <circle cx="310" cy="14" r="4" fill="#f43f5e"/>
      </g>

      <!-- Instagram Header -->
      <g transform="translate(425, 110)">
        <rect width="350" height="52" fill="#121212"/>
        <!-- Instagram gradient ring avatar -->
        <circle cx="36" cy="26" r="16" fill="url(#igRing)"/>
        <circle cx="36" cy="26" r="13" fill="#000000"/>
        <text x="36" y="31" font-family="system-ui, sans-serif" font-size="13" text-anchor="middle">✨</text>
        <text x="62" y="22" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#ffffff">glam_studio.bd</text>
        <text x="62" y="38" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#ec4899">Reels Auto-DM Trigger</text>
      </g>

      <!-- Instagram Reel Comment Event Banner -->
      <g transform="translate(445, 175)">
        <rect width="310" height="95" rx="14" fill="#1a1a1a" stroke="#333333"/>
        <rect x="14" y="14" width="60" height="66" rx="8" fill="#374151"/>
        <text x="44" y="52" font-family="system-ui, sans-serif" font-size="28" text-anchor="middle">🎬</text>
        
        <g transform="translate(86, 18)">
          <rect width="70" height="20" rx="10" fill="#ec4899"/>
          <text x="35" y="14" font-family="system-ui, sans-serif" font-size="9" font-weight="900" fill="#ffffff" text-anchor="middle">NEW REEL</text>
          <text x="0" y="40" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff">User Comment: "PRICE?"</text>
          <text x="0" y="56" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#a1a1aa">Auto-triggered direct message</text>
        </g>
      </g>

      <!-- Auto DM Catalog Card Carousel -->
      <g transform="translate(445, 282)">
        <rect width="310" height="300" rx="16" fill="#18181b" stroke="#ec4899" stroke-width="1.8"/>
        
        <!-- Header badge -->
        <g transform="translate(16, 14)">
          <rect width="134" height="22" rx="11" fill="#be185d"/>
          <text x="67" y="15" font-family="system-ui, sans-serif" font-size="10" font-weight="900" fill="#ffffff" text-anchor="middle">✦ INSTANT DM CATALOG</text>
        </g>

        <!-- Product Cards (2 items side-by-side) -->
        <g transform="translate(16, 48)">
          <!-- Item 1: Silk Scarf -->
          <g transform="translate(0, 0)">
            <rect width="132" height="150" rx="10" fill="#27272a"/>
            <rect x="10" y="10" width="112" height="74" rx="6" fill="#831843"/>
            <text x="66" y="54" font-family="system-ui, sans-serif" font-size="28" text-anchor="middle">🧣</text>
            <text x="10" y="102" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#ffffff">Silk Scarf Floral</text>
            <text x="10" y="118" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#a1a1aa">Ready Stock</text>
            <text x="10" y="138" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#f472b6">৳ 950</text>
          </g>

          <!-- Item 2: Velvet Handbag -->
          <g transform="translate(146, 0)">
            <rect width="132" height="150" rx="10" fill="#27272a"/>
            <rect x="10" y="10" width="112" height="74" rx="6" fill="#581c87"/>
            <text x="66" y="54" font-family="system-ui, sans-serif" font-size="28" text-anchor="middle">👜</text>
            <text x="10" y="102" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#ffffff">Velvet Tote Bag</text>
            <text x="10" y="118" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#a1a1aa">Free Shipping</text>
            <text x="10" y="138" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#f472b6">৳ 2,150</text>
          </g>
        </g>

        <!-- Big Checkout Action Button -->
        <g transform="translate(16, 218)">
          <rect width="278" height="54" rx="14" fill="url(#igGrad)"/>
          <text x="139" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#ffffff" text-anchor="middle">Direct Checkout with Link 🛍️</text>
          <text x="139" y="42" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#fce7f3" text-anchor="middle">Click to buy · COD available in BD</text>
        </g>
      </g>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // 4. Full Website Automation (website.webp)
  // "Embed smart AI sales widgets on your eCommerce store. Handle stock inquiries, recommend products, calculate shipping, pass orders to Pathao or Steadfast."
  // Scene: Laptop (clean desk) showing online store product page with chat widget open in corner: customer asks about product, AI recommends matching item with photo, shipping cost in ৳, "Order now" button. Small parcel/courier hint nearby. Soft blue wash.
  // ─────────────────────────────────────────────────────────────
  {
    filename: "website.webp",
    theme: "website",
    deviceType: "laptop",
    bgGradient: {
      stop1: "#f0f9ff",
      stop2: "#e0f2fe",
      accentGlow: "#0284c7",
      pedestalTop: "#bae6fd",
      pedestalSide: "#7dd3fc"
    },
    deviceFrame: {
      color: "#0f172a",
      stroke: "#38bdf8",
      screenBg: "#0f172a"
    },
    screenContent: `
      <!-- Laptop Screen Display (800x480) -->
      <g transform="translate(200, 100)">
        <!-- Outer Laptop Bezel -->
        <rect width="800" height="490" rx="18" fill="#0f172a" stroke="#334155" stroke-width="4"/>
        <!-- Top Webcam -->
        <circle cx="400" cy="10" r="4" fill="#1e293b"/>
        
        <!-- Screen Glass Canvas -->
        <rect x="12" y="20" width="776" height="456" rx="10" fill="#ffffff"/>
        
        <!-- Store Browser Chrome / Navigation -->
        <g transform="translate(12, 20)">
          <rect width="776" height="44" fill="#f8fafc" rx="10"/>
          <circle cx="24" cy="22" r="5" fill="#ef4444"/>
          <circle cx="38" cy="22" r="5" fill="#f59e0b"/>
          <circle cx="52" cy="22" r="5" fill="#10b981"/>
          
          <!-- URL bar -->
          <rect x="80" y="10" width="360" height="24" rx="6" fill="#e2e8f0"/>
          <text x="96" y="26" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#475569">🔒 store.jadubot.com/product/wireless-anc-headphones</text>
          
          <!-- Store Nav Items -->
          <text x="500" y="26" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0284c7">Store</text>
          <text x="560" y="26" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#64748b">Catalog</text>
          <text x="630" y="26" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#64748b">Support</text>
          <rect x="700" y="10" width="60" height="24" rx="6" fill="#0284c7"/>
          <text x="730" y="26" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#ffffff" text-anchor="middle">Cart (1)</text>
        </g>

        <!-- Product Page Left Half -->
        <g transform="translate(32, 84)">
          <!-- Big Product Hero Shot -->
          <rect width="320" height="220" rx="12" fill="#f1f5f9"/>
          <text x="160" y="125" font-family="system-ui, sans-serif" font-size="64" text-anchor="middle">🎧</text>
          
          <!-- Product Title & Stock -->
          <text x="0" y="254" font-family="system-ui, sans-serif" font-size="17" font-weight="900" fill="#0f172a">Studio Pro Wireless Headphones</text>
          <text x="0" y="274" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#16a34a">✓ In Stock (28 units remaining) · Same Day Dispatch</text>
          <text x="0" y="306" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#0284c7">৳ 4,890</text>
          
          <!-- Pathao / Steadfast Courier Integration Badge -->
          <g transform="translate(0, 324)">
            <rect width="320" height="42" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
            <text x="16" y="26" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#334155">🚚 Shipping: Pathao Express (Dhaka ৳ 60 · Outside ৳ 120)</text>
          </g>
        </g>

        <!-- Live Website AI Sales Widget (Open in Corner) -->
        <g transform="translate(390, 80)">
          <rect width="384" height="376" rx="16" fill="#ffffff" stroke="#0284c7" stroke-width="2.5" filter="url(#widgetShadow)"/>
          
          <!-- Widget Header -->
          <g transform="translate(0, 0)">
            <path d="M 0 16 Q 0 0, 16 0 L 368 0 Q 384 0, 384 16 L 384 54 L 0 54 Z" fill="#0284c7"/>
            <circle cx="32" cy="27" r="16" fill="#ffffff"/>
            <text x="32" y="33" font-family="system-ui, sans-serif" font-size="16" text-anchor="middle">🤖</text>
            <text x="58" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#ffffff">Jadubot Live Store Assistant</text>
            <text x="58" y="39" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#bae6fd">Answers inquiries · Instant checkout</text>
            <circle cx="355" cy="27" r="4" fill="#4ade80"/>
          </g>

          <!-- Chat Conversation in Widget -->
          <!-- Customer Question -->
          <g transform="translate(18, 68)">
            <rect x="70" width="280" height="36" rx="10" fill="#f1f5f9"/>
            <text x="82" y="22" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#1e293b">"Does this have bass boost and COD to Bogura?"</text>
          </g>

          <!-- AI Smart Answer & Cross-sell -->
          <g transform="translate(18, 114)">
            <rect width="320" height="175" rx="12" fill="#eff6ff" stroke="#bfdbfe"/>
            <text x="14" y="22" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0284c7">Jadubot AI:</text>
            <text x="14" y="38" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#1e293b">"Yes! 40mm deep bass drivers. We ship to Bogura</text>
            <text x="14" y="52" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#1e293b">via Steadfast Courier (৳ 120, 48hrs delivery)."</text>

            <!-- Cross-sell Recommendation Box -->
            <rect x="12" y="66" width="296" height="52" rx="8" fill="#ffffff" stroke="#93c5fd"/>
            <text x="24" y="86" font-family="system-ui, sans-serif" font-size="18">🎒</text>
            <text x="52" y="86" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0f172a">Recommended: Hard EVA Case</text>
            <text x="52" y="104" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#0284c7">Bundle price: +৳ 450 (Save ৳ 200)</text>

            <!-- Order Now Button -->
            <rect x="12" y="126" width="296" height="38" rx="10" fill="#0284c7"/>
            <text x="160" y="150" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#ffffff" text-anchor="middle">⚡ Order Now with Steadfast COD</text>
          </g>

          <!-- Pathao / Steadfast Dispatch Status Bar -->
          <g transform="translate(18, 302)">
            <rect width="348" height="56" rx="10" fill="#f8fafc" stroke="#e2e8f0"/>
            <text x="14" y="24" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#16a34a">✓ Auto-Dispatched to Courier</text>
            <text x="14" y="42" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#64748b">Consignment created instantly with tracking #ST-8291</text>
          </g>
        </g>
      </g>

      <!-- Laptop Lower Keyboard Base -->
      <g transform="translate(120, 584)">
        <path d="M 0 14 L 80 0 L 880 0 L 960 14 L 920 34 L 40 34 Z" fill="#334155"/>
        <path d="M 40 34 L 920 34 L 920 40 L 40 40 Z" fill="#1e293b"/>
        <!-- Trackpad -->
        <rect x="400" y="8" width="160" height="20" rx="6" fill="#1e293b" opacity="0.6"/>
      </g>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // 5. CPA Marketing Automation (cpa.webp)
  // "High-volume lead qualification, server-to-server postbacks, payout triggers, route conversions to affiliate platforms."
  // Scene: Phone or tablet showing clean lead-qualified moment (big "Lead qualified ✓" status, simple rising conversion arrow, payout/coin notification in ৳ or $), with floating glass cards or coin/arrow elements showing conversions flowing to partner. Keep it simple, large scale, no small text. Orange wash.
  // ─────────────────────────────────────────────────────────────
  {
    filename: "cpa.webp",
    theme: "cpa",
    deviceType: "phone",
    bgGradient: {
      stop1: "#fff7ed",
      stop2: "#ffedd5",
      accentGlow: "#f97316",
      pedestalTop: "#fed7aa",
      pedestalSide: "#fdba74"
    },
    deviceFrame: {
      color: "#0f172a",
      stroke: "#fb923c",
      screenBg: "#0b1220"
    },
    screenContent: `
      <!-- Phone Top Status Bar -->
      <g transform="translate(425, 75)">
        <rect x="130" y="4" width="90" height="18" rx="9" fill="#000000"/>
        <text x="35" y="18" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="#94a3b8">12:00</text>
        <circle cx="310" cy="14" r="4" fill="#f97316"/>
      </g>

      <!-- App Header: CPA Automation Engine -->
      <g transform="translate(425, 110)">
        <rect width="350" height="52" fill="#1e293b"/>
        <circle cx="36" cy="26" r="16" fill="#f97316"/>
        <text x="36" y="32" font-family="system-ui, sans-serif" font-size="15" text-anchor="middle">⚡</text>
        <text x="64" y="22" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#ffffff">Jadubot CPA Engine</text>
        <text x="64" y="38" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#fb923c">S2S Postback Active</text>
        <rect x="252" y="14" width="82" height="24" rx="12" fill="#f97316" fill-opacity="0.2"/>
        <text x="293" y="30" font-family="system-ui, sans-serif" font-size="10" font-weight="900" fill="#fb923c" text-anchor="middle">● LIVE 99.9%</text>
      </g>

      <!-- Big Lead Qualified Status Card (Hero Moment) -->
      <g transform="translate(445, 178)">
        <rect width="310" height="150" rx="18" fill="#1e293b" stroke="#f97316" stroke-width="2"/>
        
        <!-- Big Checkmark & Lead Qualified -->
        <g transform="translate(18, 18)">
          <rect width="180" height="34" rx="17" fill="#16a34a" fill-opacity="0.2" stroke="#22c55e" stroke-width="1.5"/>
          <circle cx="18" cy="17" r="10" fill="#22c55e"/>
          <text x="18" y="22" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#ffffff" text-anchor="middle">✓</text>
          <text x="38" y="21" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#4ade80">Lead Qualified ✓</text>
        </g>

        <!-- High-Intent Score & Rising Arrow -->
        <g transform="translate(20, 68)">
          <text x="0" y="22" font-family="system-ui, sans-serif" font-size="28" font-weight="900" fill="#ffffff">98.4%</text>
          <text x="96" y="20" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#22c55e">↑ +42% CR</text>
          <text x="0" y="44" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#94a3b8">Fraud Filter Passed · Phone &amp; OTP Verified</text>
          <text x="0" y="60" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#f97316">Instant Postback Dispatched</text>
        </g>
      </g>

      <!-- Payout & Conversion Trigger Card -->
      <g transform="translate(445, 344)">
        <rect width="310" height="135" rx="16" fill="#162238" stroke="#38bdf8" stroke-width="1.5"/>
        
        <g transform="translate(18, 16)">
          <rect width="150" height="24" rx="12" fill="#0284c7"/>
          <text x="75" y="16" font-family="system-ui, sans-serif" font-size="10" font-weight="900" fill="#ffffff" text-anchor="middle">S2S POSTBACK FIRED</text>
          
          <text x="0" y="52" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#94a3b8">Payout Credited (CPA Trigger):</text>
          <text x="0" y="82" font-family="system-ui, sans-serif" font-size="28" font-weight="900" fill="#38bdf8">৳ 18,500 <tspan font-size="16" fill="#fb923c">($165.00)</tspan></text>
          
          <text x="0" y="104" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#4ade80">● Routed to Partner Network in 14ms</text>
        </g>
      </g>

      <!-- Conversion Routing Satellite Pills -->
      <g transform="translate(445, 495)">
        <rect width="310" height="85" rx="14" fill="#1e293b" stroke="#f97316" stroke-opacity="0.4"/>
        <g transform="translate(16, 16)">
          <text x="0" y="14" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#fed7aa">Multi-Network Webhook Routing</text>
          <g transform="translate(0, 26)">
            <rect x="0" y="0" width="86" height="26" rx="13" fill="#334155"/>
            <text x="43" y="17" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Tune / Appsflyer</text>
            <rect x="94" y="0" width="86" height="26" rx="13" fill="#334155"/>
            <text x="137" y="17" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Voluum</text>
            <rect x="188" y="0" width="86" height="26" rx="13" fill="#ea580c"/>
            <text x="231" y="17" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#ffffff" text-anchor="middle">Affise ✓</text>
          </g>
        </g>
      </g>
    `
  }
];

function buildStudioSceneSvg(spec: ChannelSpec): string {
  const width = 1200;
  const height = 750;
  const isLaptop = spec.deviceType === "laptop";

  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Studio Background Gradient (Light Soft Ambient Wash) -->
      <radialGradient id="bgGrad" cx="50%" cy="35%" r="75%">
        <stop offset="0%" stop-color="${spec.bgGradient.stop1}"/>
        <stop offset="100%" stop-color="${spec.bgGradient.stop2}"/>
      </radialGradient>

      <!-- Soft Accent Glow Blob -->
      <radialGradient id="accentGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${spec.bgGradient.accentGlow}" stop-opacity="0.18"/>
        <stop offset="100%" stop-color="${spec.bgGradient.accentGlow}" stop-opacity="0"/>
      </radialGradient>

      <!-- Pedestal Gradient -->
      <linearGradient id="pedestalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="${spec.bgGradient.pedestalTop}"/>
        <stop offset="100%" stop-color="${spec.bgGradient.pedestalSide}"/>
      </linearGradient>

      <!-- Instagram Gradients -->
      <linearGradient id="igRing" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f58529"/>
        <stop offset="50%" stop-color="#dd2a7b"/>
        <stop offset="100%" stop-color="#8134af"/>
      </linearGradient>
      <linearGradient id="igGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#f43f5e"/>
        <stop offset="50%" stop-color="#e11d48"/>
        <stop offset="100%" stop-color="#c026d3"/>
      </linearGradient>

      <!-- Soft Drop Shadows -->
      <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="24" result="blur"/>
        <feOffset dx="0" dy="30" result="offset"/>
        <feFlood flood-color="#0f172a" flood-opacity="0.18"/>
        <feComposite in2="offset" operator="in"/>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>

      <!-- Device Shadow -->
      <filter id="deviceShadow" x="-25%" y="-25%" width="150%" height="150%">
        <feDropShadow dx="0" dy="24" stdDeviation="26" flood-color="#0f172a" flood-opacity="0.22"/>
      </filter>

      <!-- Live Widget Shadow -->
      <filter id="widgetShadow" x="-15%" y="-15%" width="130%" height="130%">
        <feDropShadow dx="0" dy="16" stdDeviation="18" flood-color="#0f172a" flood-opacity="0.18"/>
      </filter>
    </defs>

    <!-- Studio Wall Background -->
    <rect width="${width}" height="${height}" fill="url(#bgGrad)"/>

    <!-- Subtle Ambient Glow Blob -->
    <ellipse cx="600" cy="380" rx="450" ry="280" fill="url(#accentGlow)"/>

    <!-- Studio Pedestal (Display Base) -->
    <g transform="translate(180, 560)" filter="url(#softShadow)">
      <ellipse cx="420" cy="50" rx="390" ry="75" fill="url(#pedestalGrad)"/>
      <path d="M 30 50 Q 420 120, 810 50 L 810 120 Q 420 190, 30 120 Z" fill="${spec.bgGradient.pedestalSide}"/>
    </g>

    ${
      !isLaptop
        ? `
      <!-- Smartphone 3D Body in Studio (Centered 16:10 Composition) -->
      <g filter="url(#deviceShadow)">
        <!-- Phone Outer Shell (Curved Bezel) -->
        <rect x="415" y="60" width="370" height="555" rx="38" fill="${spec.deviceFrame.color}" stroke="${spec.deviceFrame.stroke}" stroke-width="3"/>
        
        <!-- Screen Glass Canvas -->
        <rect x="425" y="70" width="350" height="535" rx="30" fill="${spec.deviceFrame.screenBg}"/>
        
        <!-- Subtle Screen Gloss Reflection -->
        <path d="M 425 70 L 775 70 L 425 450 Z" fill="#ffffff" opacity="0.05"/>
      </g>
    `
        : ""
    }

    <!-- UI Screen Content -->
    ${spec.screenContent}
  </svg>`;
}

async function run() {
  const outputDir = path.resolve("public/assets/images/home/channels");
  fs.mkdirSync(outputDir, { recursive: true });

  for (const spec of specs) {
    const svg = buildStudioSceneSvg(spec);
    const dest = path.join(outputDir, spec.filename);
    
    await sharp(Buffer.from(svg))
      .resize(1200, 750)
      .webp({ quality: 88 })
      .toFile(dest);

    const stats = fs.statSync(dest);
    console.log(`Generated channel image: ${spec.filename} (${Math.round(stats.size / 1024)} KB)`);
  }
}

run().catch(console.error);
