import fs from "fs";
import path from "path";
import sharp from "sharp";

interface CardSvgSpec {
  cardNumber: number;
  bgMode: "dark" | "light" | "blue";
  themeColor: string;
  accentColor: string;
  headerBadge: string;
  headerStatus: string;
  title: string;
  elements: string; // Inner SVG mockup elements
}

const specs: CardSvgSpec[] = [
  {
    cardNumber: 4, // Sales dashboard view: rising conversion line, hot/warm/cold lead badges
    bgMode: "dark",
    themeColor: "#0172ff",
    accentColor: "#38bdf8",
    headerBadge: "SALES RADAR",
    headerStatus: "LIVE REVENUE",
    title: "Lead Conversion Engine",
    elements: `
      <!-- Big Metric -->
      <g transform="translate(48, 160)">
        <text x="0" y="32" font-family="system-ui, -apple-system, sans-serif" font-size="34" font-weight="900" fill="#ffffff" letter-spacing="-0.02em">+42.8%</text>
        <rect x="160" y="8" width="104" height="28" rx="14" fill="#10b981" fill-opacity="0.2"/>
        <text x="212" y="27" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="#34d399" text-anchor="middle">↑ TOP 5%</text>
        <text x="0" y="60" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="500" fill="#94a3b8">Active lead pipeline &amp; conversion</text>
      </g>

      <!-- Conversion Curve Chart -->
      <g transform="translate(48, 250)">
        <rect width="579" height="180" rx="20" fill="#0f1f3d" fill-opacity="0.7" stroke="#1e3a6e" stroke-width="1.5"/>
        <defs>
          <linearGradient id="chartGlow4" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.45"/>
            <stop offset="100%" stop-color="#0172ff" stop-opacity="0.0"/>
          </linearGradient>
        </defs>
        <!-- Area -->
        <path d="M 30 140 Q 120 130, 200 95 T 380 70 T 549 25 L 549 160 L 30 160 Z" fill="url(#chartGlow4)"/>
        <!-- Line -->
        <path d="M 30 140 Q 120 130, 200 95 T 380 70 T 549 25" fill="none" stroke="#38bdf8" stroke-width="4.5" stroke-linecap="round"/>
        <!-- Markers -->
        <circle cx="549" cy="25" r="7" fill="#38bdf8" stroke="#ffffff" stroke-width="3"/>
        <text x="500" y="18" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="800" fill="#38bdf8">98.4%</text>
      </g>

      <!-- Lead Badges Grid -->
      <g transform="translate(48, 460)">
        <!-- Hot Lead Pill -->
        <g transform="translate(0, 0)">
          <rect width="579" height="74" rx="18" fill="#132448" stroke="#10b981" stroke-opacity="0.4" stroke-width="1.5"/>
          <circle cx="36" cy="37" r="14" fill="#10b981" fill-opacity="0.2"/>
          <circle cx="36" cy="37" r="6" fill="#10b981"/>
          <text x="64" y="32" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="800" fill="#ffffff">Hot Leads (84%)</text>
          <text x="64" y="52" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="500" fill="#94a3b8">Instant checkout intent · ৳ 1,28,400</text>
          <rect x="470" y="24" width="86" height="26" rx="13" fill="#10b981" fill-opacity="0.2"/>
          <text x="513" y="42" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" fill="#34d399" text-anchor="middle">ROUTED</text>
        </g>

        <!-- Warm Lead Pill -->
        <g transform="translate(0, 90)">
          <rect width="579" height="74" rx="18" fill="#132448" stroke="#f59e0b" stroke-opacity="0.4" stroke-width="1.5"/>
          <circle cx="36" cy="37" r="14" fill="#f59e0b" fill-opacity="0.2"/>
          <circle cx="36" cy="37" r="6" fill="#f59e0b"/>
          <text x="64" y="32" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="800" fill="#ffffff">Warm Leads (62%)</text>
          <text x="64" y="52" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="500" fill="#94a3b8">Catalog viewed · Follow-up active</text>
          <rect x="470" y="24" width="86" height="26" rx="13" fill="#f59e0b" fill-opacity="0.2"/>
          <text x="513" y="42" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" fill="#fbbf24" text-anchor="middle">QUEUED</text>
        </g>

        <!-- Cold Lead Pill -->
        <g transform="translate(0, 180)">
          <rect width="579" height="74" rx="18" fill="#132448" stroke="#0284c7" stroke-opacity="0.4" stroke-width="1.5"/>
          <circle cx="36" cy="37" r="14" fill="#0284c7" fill-opacity="0.2"/>
          <circle cx="36" cy="37" r="6" fill="#0284c7"/>
          <text x="64" y="32" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="800" fill="#ffffff">Nurtured Prospects</text>
          <text x="64" y="52" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="500" fill="#94a3b8">Drip campaign scheduled</text>
          <rect x="470" y="24" width="86" height="26" rx="13" fill="#0284c7" fill-opacity="0.2"/>
          <text x="513" y="42" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle">ACTIVE</text>
        </g>
      </g>
    `
  },
  {
    cardNumber: 5, // Cart recovery: abandoned cart + WhatsApp reminder with checkout button
    bgMode: "light",
    themeColor: "#10b981",
    accentColor: "#0172ff",
    headerBadge: "CART RESCUE",
    headerStatus: "RECOVERY +34%",
    title: "Abandoned Cart Nudge",
    elements: `
      <!-- Abandoned Cart Preview Card -->
      <g transform="translate(48, 160)">
        <rect width="579" height="150" rx="20" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" filter="url(#softShadow)"/>
        <!-- Product Thumbnail Mock -->
        <rect x="24" y="24" width="102" height="102" rx="16" fill="#f1f5f9"/>
        <text x="75" y="80" font-family="system-ui, -apple-system, sans-serif" font-size="32" text-anchor="middle">🛍️</text>
        
        <text x="146" y="52" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="800" fill="#0f172a">Premium Cotton Panjabi</text>
        <text x="146" y="76" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="500" fill="#64748b">Size: L · Navy Blue · Qty: 1</text>
        <text x="146" y="108" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="900" fill="#0172ff">৳ 3,250</text>
        <rect x="460" y="48" width="94" height="28" rx="14" fill="#fef2f2"/>
        <text x="507" y="67" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="800" fill="#ef4444" text-anchor="middle">ABANDONED</text>
      </g>

      <!-- WhatsApp Automated Reminder Flow Bubble -->
      <g transform="translate(48, 335)">
        <rect width="579" height="340" rx="22" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
        <circle cx="36" cy="36" r="14" fill="#22c55e"/>
        <text x="36" y="42" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="900" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="64" y="42" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="800" fill="#14532d">WhatsApp Bot · Auto-Reminder</text>
        <text x="490" y="40" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600" fill="#15803d">15m later</text>

        <!-- Message Body -->
        <rect x="24" y="68" width="531" height="150" rx="16" fill="#ffffff" stroke="#bbf7d0" stroke-width="1.2"/>
        <text x="44" y="104" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="600" fill="#1e293b">Hello Fahim! You left your favorite Panjabi in the cart.</text>
        <text x="44" y="132" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="600" fill="#1e293b">Complete checkout now and get <tspan font-weight="800" fill="#15803d">FREE Home Delivery!</tspan></text>
        
        <rect x="44" y="154" width="160" height="36" rx="18" fill="#dcfce7"/>
        <text x="124" y="177" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="800" fill="#166534" text-anchor="middle">CODE: JADUFREE</text>

        <!-- Primary CTA Button -->
        <rect x="24" y="240" width="531" height="60" rx="18" fill="#16a34a"/>
        <text x="289" y="277" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="800" fill="#ffffff" text-anchor="middle">Complete Order via WhatsApp ⚡</text>
      </g>
    `
  },
  {
    cardNumber: 6, // Bot-to-human handover: chat with human agent avatar taking over
    bgMode: "blue",
    themeColor: "#0172ff",
    accentColor: "#f59e0b",
    headerBadge: "SEAMLESS ESCALATION",
    headerStatus: "0s DELAY",
    title: "AI ➔ Human Handover",
    elements: `
      <!-- AI Bot Message Card -->
      <g transform="translate(48, 160)">
        <rect width="579" height="130" rx="20" fill="#ffffff" fill-opacity="0.12" stroke="#ffffff" stroke-opacity="0.25" stroke-width="1.5"/>
        <circle cx="40" cy="40" r="16" fill="#ffffff" fill-opacity="0.2"/>
        <text x="40" y="47" font-family="system-ui, -apple-system, sans-serif" font-size="18" text-anchor="middle">🤖</text>
        <text x="70" y="46" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="800" fill="#ffffff">Jadubot AI Assistant</text>
        <text x="480" y="44" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600" fill="#93c5fd">10:42 AM</text>
        <text x="36" y="88" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="500" fill="#e0f2fe">"I understand your corporate bulk request! Connecting you to our senior account manager right now..."</text>
      </g>

      <!-- Handover Status Indicator -->
      <g transform="translate(48, 310)">
        <line x1="289" y1="0" x2="289" y2="40" stroke="#fbbf24" stroke-width="2" stroke-dasharray="4 4"/>
        <rect x="180" y="36" width="219" height="34" rx="17" fill="#fbbf24"/>
        <text x="289" y="58" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="900" fill="#78350f" text-anchor="middle">✦ AGENT JOINED CHAT</text>
      </g>

      <!-- Human Agent Takeover Card -->
      <g transform="translate(48, 400)">
        <rect width="579" height="270" rx="22" fill="#ffffff" stroke="#ffffff" stroke-opacity="0.3" stroke-width="2" filter="url(#softShadow)"/>
        <!-- Human Avatar -->
        <circle cx="48" cy="52" r="24" fill="#0172ff"/>
        <text x="48" y="60" font-family="system-ui, -apple-system, sans-serif" font-size="22" text-anchor="middle">👨‍💼</text>
        <circle cx="66" cy="70" r="7" fill="#22c55e" stroke="#ffffff" stroke-width="2"/>
        
        <text x="86" y="48" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="900" fill="#0f172a">Tanvir Ahmed</text>
        <text x="86" y="70" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="600" fill="#0172ff">Enterprise Success Lead · Active</text>
        
        <!-- Human reply message -->
        <rect x="24" y="96" width="531" height="90" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
        <text x="44" y="132" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="600" fill="#1e293b">"Hi there! I reviewed your 500-unit requirement. I have reserved custom tiered pricing for your store."</text>

        <!-- Instant Actions -->
        <rect x="24" y="200" width="250" height="46" rx="14" fill="#0172ff"/>
        <text x="149" y="229" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="800" fill="#ffffff" text-anchor="middle">Share Invoice PDF</text>

        <rect x="290" y="200" width="265" height="46" rx="14" fill="#f1f5f9"/>
        <text x="422" y="229" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="800" fill="#334155" text-anchor="middle">Schedule Call (15m)</text>
      </g>
    `
  },
  {
    cardNumber: 7, // Delivery/parcel scene (rider, parcel, status notification) for order tracking
    bgMode: "light",
    themeColor: "#f97316",
    accentColor: "#0172ff",
    headerBadge: "COURIER SYNC",
    headerStatus: "PATHAO / STEADFAST",
    title: "Instant Parcel Tracking",
    elements: `
      <!-- Live Delivery Status Visual Card -->
      <g transform="translate(48, 160)">
        <rect width="579" height="240" rx="22" fill="#ffffff" stroke="#fed7aa" stroke-width="1.5" filter="url(#softShadow)"/>
        
        <!-- Big Rider Icon & Status -->
        <circle cx="60" cy="60" r="32" fill="#ffedd5"/>
        <text x="60" y="72" font-family="system-ui, -apple-system, sans-serif" font-size="34" text-anchor="middle">🛵</text>
        
        <text x="110" y="52" font-family="system-ui, -apple-system, sans-serif" font-size="19" font-weight="900" fill="#0f172a">Out for Delivery</text>
        <text x="110" y="76" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="600" fill="#ea580c">Rider: Kamal Hossain · Steadfast Express</text>

        <!-- Progress Steps -->
        <g transform="translate(36, 120)">
          <!-- Line -->
          <line x1="20" y1="20" x2="480" y2="20" stroke="#ea580c" stroke-width="4"/>
          <!-- Step 1 -->
          <circle cx="20" cy="20" r="10" fill="#ea580c"/>
          <text x="20" y="48" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" fill="#64748b" text-anchor="middle">Placed</text>
          <!-- Step 2 -->
          <circle cx="170" cy="20" r="10" fill="#ea580c"/>
          <text x="170" y="48" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" fill="#64748b" text-anchor="middle">Packed</text>
          <!-- Step 3 -->
          <circle cx="330" cy="20" r="12" fill="#ea580c" stroke="#fed7aa" stroke-width="4"/>
          <text x="330" y="48" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="800" fill="#ea580c" text-anchor="middle">On Way</text>
          <!-- Step 4 -->
          <circle cx="480" cy="20" r="10" fill="#cbd5e1"/>
          <text x="480" y="48" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" fill="#94a3b8" text-anchor="middle">Delivered</text>
        </g>
      </g>

      <!-- Automated SMS/WhatsApp Notification Preview -->
      <g transform="translate(48, 425)">
        <rect width="579" height="245" rx="20" fill="#fff7ed" stroke="#fdba74" stroke-width="1.2"/>
        <text x="32" y="40" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="800" fill="#9a3412">Automated Courier Ping</text>
        <text x="480" y="40" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" fill="#ea580c">AUTO-SENT</text>

        <rect x="24" y="60" width="531" height="96" rx="14" fill="#ffffff" stroke="#fed7aa" stroke-width="1"/>
        <text x="40" y="94" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="600" fill="#1e293b">"আপনার পার্সেলটি আজ দুপুর ২টার মধ্যে ডেলিভারি হবে।"</text>
        <text x="40" y="120" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="600" fill="#64748b">COD Amount to pay: <tspan font-weight="800" fill="#0f172a">৳ 1,450</tspan> (Cash or bKash)</text>

        <!-- Quick Action Pill -->
        <rect x="24" y="172" width="531" height="50" rx="14" fill="#ea580c"/>
        <text x="289" y="203" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="800" fill="#ffffff" text-anchor="middle">View Live Courier Map 🗺️</text>
      </g>
    `
  },
  {
    cardNumber: 8, // Shared team inbox on a laptop with multiple conversations and assigned agents
    bgMode: "dark",
    themeColor: "#6366f1",
    accentColor: "#38bdf8",
    headerBadge: "OMNICHANNEL HUB",
    headerStatus: "MULTI-AGENT",
    title: "Unified Team Inbox",
    elements: `
      <!-- Multi-Channel Channel Stream -->
      <g transform="translate(48, 160)">
        <rect width="579" height="110" rx="18" fill="#1e1b4b" stroke="#4338ca" stroke-width="1.5"/>
        <g transform="translate(24, 22)">
          <!-- Channel Icons -->
          <circle cx="20" cy="20" r="18" fill="#25d366"/><text x="20" y="26" font-size="14" text-anchor="middle">📱</text>
          <circle cx="70" cy="20" r="18" fill="#1877f2"/><text x="70" y="26" font-size="14" text-anchor="middle">💬</text>
          <circle cx="120" cy="20" r="18" fill="#e1306c"/><text x="120" y="26" font-size="14" text-anchor="middle">📷</text>
          <circle cx="170" cy="20" r="18" fill="#229ed9"/><text x="170" y="26" font-size="14" text-anchor="middle">✈️</text>
          
          <text x="220" y="26" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="800" fill="#ffffff">All Inboxes Synchronized</text>
          <text x="220" y="48" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="500" fill="#a5b4fc">0 Missed inquiries · Instant assignment</text>
        </g>
      </g>

      <!-- Active Conversation Queue Mock -->
      <g transform="translate(48, 290)">
        <!-- Row 1 -->
        <g transform="translate(0, 0)">
          <rect width="579" height="76" rx="16" fill="#1e293b" stroke="#334155" stroke-width="1.2"/>
          <circle cx="36" cy="38" r="16" fill="#25d366" fill-opacity="0.2"/>
          <text x="36" y="44" font-size="14" text-anchor="middle">🟢</text>
          <text x="68" y="32" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="800" fill="#ffffff">Amina Khan (Sylhet)</text>
          <text x="68" y="52" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="500" fill="#94a3b8">"Is wholesale pricing available for..."</text>
          <rect x="440" y="24" width="115" height="28" rx="14" fill="#312e81"/>
          <text x="497" y="43" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" fill="#c7d2fe" text-anchor="middle">Assigned: Sadia</text>
        </g>

        <!-- Row 2 -->
        <g transform="translate(0, 90)">
          <rect width="579" height="76" rx="16" fill="#1e293b" stroke="#334155" stroke-width="1.2"/>
          <circle cx="36" cy="38" r="16" fill="#1877f2" fill-opacity="0.2"/>
          <text x="36" y="44" font-size="14" text-anchor="middle">🔵</text>
          <text x="68" y="32" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="800" fill="#ffffff">Rafiqul Islam (Dhaka)</text>
          <text x="68" y="52" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="500" fill="#94a3b8">"Placed order #4102, send tracking"</text>
          <rect x="440" y="24" width="115" height="28" rx="14" fill="#065f46"/>
          <text x="497" y="43" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" fill="#6ee7b7" text-anchor="middle">Bot Resolved</text>
        </g>

        <!-- Row 3 -->
        <g transform="translate(0, 180)">
          <rect width="579" height="76" rx="16" fill="#1e293b" stroke="#334155" stroke-width="1.2"/>
          <circle cx="36" cy="38" r="16" fill="#e1306c" fill-opacity="0.2"/>
          <text x="36" y="44" font-size="14" text-anchor="middle">🟣</text>
          <text x="68" y="32" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="800" fill="#ffffff">Tasnim Zara (Chittagong)</text>
          <text x="68" y="52" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="500" fill="#94a3b8">"Sent payment receipt for dress"</text>
          <rect x="440" y="24" width="115" height="28" rx="14" fill="#312e81"/>
          <text x="497" y="43" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" fill="#c7d2fe" text-anchor="middle">Assigned: Nayeem</text>
        </g>

        <!-- Row 4: Summary -->
        <g transform="translate(0, 270)">
          <rect width="579" height="60" rx="16" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
          <text x="24" y="36" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#94a3b8">Team capacity: 4 active agents · Average response time: <tspan font-weight="900" fill="#38bdf8">14 seconds</tspan></text>
        </g>
      </g>
    `
  }
];

function buildFullSvg(spec: CardSvgSpec): string {
  const width = 675;
  const height = 900;

  let bgDef = "";
  let headerTextFill = "";
  let subTextFill = "";

  if (spec.bgMode === "dark") {
    bgDef = `
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#080e1e"/>
        <stop offset="60%" stop-color="#0e172e"/>
        <stop offset="100%" stop-color="#060a16"/>
      </linearGradient>
    `;
    headerTextFill = "#ffffff";
    subTextFill = "#94a3b8";
  } else if (spec.bgMode === "light") {
    bgDef = `
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f8fafc"/>
        <stop offset="50%" stop-color="#f1f5f9"/>
        <stop offset="100%" stop-color="#e2e8f0"/>
      </linearGradient>
    `;
    headerTextFill = "#0f172a";
    subTextFill = "#64748b";
  } else {
    // Vibrant Blue
    bgDef = `
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0052cc"/>
        <stop offset="50%" stop-color="#0172ff"/>
        <stop offset="100%" stop-color="#0284c7"/>
      </linearGradient>
    `;
    headerTextFill = "#ffffff";
    subTextFill = "#dbeafe";
  }

  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      ${bgDef}
      <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="12" stdDeviation="20" flood-color="#000000" flood-opacity="0.12"/>
      </filter>
      <filter id="glowOrb" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="70" result="blur"/>
      </filter>
    </defs>

    <!-- Base Canvas -->
    <rect width="${width}" height="${height}" fill="url(#bgGrad)"/>

    <!-- Subtle Ambient Glow -->
    <circle cx="540" cy="180" r="180" fill="${spec.accentColor}" opacity="0.18" filter="url(#glowOrb)"/>
    <circle cx="120" cy="720" r="160" fill="${spec.themeColor}" opacity="0.15" filter="url(#glowOrb)"/>

    <!-- Top Card Header -->
    <g transform="translate(48, 52)">
      <rect width="130" height="28" rx="14" fill="${spec.themeColor}" fill-opacity="${spec.bgMode === 'blue' ? '0.25' : '0.15'}"/>
      <text x="65" y="19" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="900" fill="${spec.bgMode === 'light' ? spec.themeColor : '#ffffff'}" text-anchor="middle" letter-spacing="0.08em">${spec.headerBadge}</text>

      <rect x="${width - 96 - 130}" y="0" width="130" height="28" rx="14" fill="${spec.bgMode === 'light' ? '#ffffff' : '#ffffff'}" fill-opacity="${spec.bgMode === 'light' ? '0.9' : '0.1'}"/>
      <text x="${width - 96 - 65}" y="19" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="800" fill="${spec.bgMode === 'light' ? '#0f172a' : '#93c5fd'}" text-anchor="middle" letter-spacing="0.05em">${spec.headerStatus}</text>

      <text x="0" y="64" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="900" fill="${headerTextFill}" letter-spacing="-0.02em">${spec.title}</text>
    </g>

    <!-- Elements -->
    ${spec.elements}
  </svg>`;
}

async function run() {
  const outputDir = path.resolve("public/assets/images/home/hero");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const spec of specs) {
    const svg = buildFullSvg(spec);
    const dest = path.join(outputDir, `card-${spec.cardNumber}.webp`);
    await sharp(Buffer.from(svg))
      .resize(675, 900)
      .webp({ quality: 90 })
      .toFile(dest);
    console.log(`Generated: card-${spec.cardNumber}.webp`);
  }
}

run().catch(console.error);
