import fs from "fs";
import path from "path";
import sharp from "sharp";

interface PhoneStudioSpec {
  cardNumber: number;
  bgGradient: {
    type: "dark" | "light" | "blue" | "warm";
    stop1: string;
    stop2: string;
    pedestalTop: string;
    pedestalSide: string;
    shadowColor: string;
  };
  phoneFrame: {
    color: string;
    stroke: string;
    screenBg: string;
  };
  screenContent: string;
}

const specs: PhoneStudioSpec[] = [
  // ─────────────────────────────────────────────────────────────
  // CARD 4: Lead scoring (Phone with Hot Lead 🔥 badge, rising intent arrow)
  // Dark studio setting, dark phone UI, highly readable
  // ─────────────────────────────────────────────────────────────
  {
    cardNumber: 4,
    bgGradient: {
      type: "dark",
      stop1: "#0b1325",
      stop2: "#050811",
      pedestalTop: "#121d36",
      pedestalSide: "#091021",
      shadowColor: "#000000"
    },
    phoneFrame: {
      color: "#1e293b",
      stroke: "#38bdf8",
      screenBg: "#0a0f1d"
    },
    screenContent: `
      <!-- Phone Top Notch & Status Bar -->
      <g transform="translate(187, 85)">
        <rect x="90" y="4" width="70" height="14" rx="7" fill="#000000"/>
        <circle cx="145" cy="11" r="3" fill="#1e293b"/>
        <text x="18" y="16" font-family="system-ui, -apple-system, sans-serif" font-size="9" font-weight="700" fill="#94a3b8">9:41</text>
        <circle cx="230" cy="12" r="3" fill="#22c55e"/>
      </g>

      <!-- App Header -->
      <g transform="translate(187, 115)">
        <rect width="250" height="42" fill="#0e1726"/>
        <circle cx="28" cy="21" r="14" fill="#0172ff"/>
        <text x="28" y="26" font-family="system-ui, sans-serif" font-size="14" text-anchor="middle">🤖</text>
        <text x="50" y="18" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff">Jadubot AI</text>
        <text x="50" y="30" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#22c55e">● Online</text>
      </g>

      <!-- Customer Inbound Chat Bubble -->
      <g transform="translate(202, 180)">
        <rect width="220" height="52" rx="14" fill="#1e293b"/>
        <text x="14" y="22" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#f1f5f9">"Looking for 200 corporate</text>
        <text x="14" y="38" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#f1f5f9">Eid gift sets for my team."</text>
      </g>

      <!-- Bot Lead Scoring Qualification Card -->
      <g transform="translate(202, 250)">
        <rect width="220" height="230" rx="16" fill="#111c38" stroke="#1e3a8a" stroke-width="1.5"/>
        
        <!-- Big Fire Hot Lead Badge -->
        <g transform="translate(16, 20)">
          <rect width="188" height="44" rx="22" fill="#ef4444" fill-opacity="0.18" stroke="#ef4444" stroke-opacity="0.5"/>
          <text x="24" y="28" font-family="system-ui, sans-serif" font-size="20">🔥</text>
          <text x="54" y="27" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#f87171">Hot Lead</text>
          <rect x="124" y="10" width="54" height="24" rx="12" fill="#ef4444"/>
          <text x="151" y="26" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle">98%</text>
        </g>

        <!-- Rising Intent Arrow & BDT Value -->
        <g transform="translate(16, 80)">
          <text x="0" y="20" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#94a3b8">ESTIMATED ORDER VALUE</text>
          <text x="0" y="52" font-family="system-ui, sans-serif" font-size="26" font-weight="900" fill="#ffffff">৳ 1,85,000</text>
        </g>

        <!-- Rising Green Arrow Pill -->
        <g transform="translate(16, 150)">
          <rect width="188" height="34" rx="10" fill="#064e3b" stroke="#059669" stroke-width="1"/>
          <text x="20" y="22" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#34d399">↗ +48% High Purchase Intent</text>
        </g>

        <text x="110" y="210" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#60a5fa" text-anchor="middle">● Instant Sales Rep Routed</text>
      </g>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // CARD 5: Cart recovery (Phone showing WhatsApp reminder + sneaker/shirt photo + ৳ + Green button)
  // Bright clean studio setting with white pedestal
  // ─────────────────────────────────────────────────────────────
  {
    cardNumber: 5,
    bgGradient: {
      type: "light",
      stop1: "#f1f5f9",
      stop2: "#e2e8f0",
      pedestalTop: "#ffffff",
      pedestalSide: "#cbd5e1",
      shadowColor: "#64748b"
    },
    phoneFrame: {
      color: "#0f172a",
      stroke: "#cbd5e1",
      screenBg: "#efeae2" // WhatsApp chat background wallpaper tone
    },
    screenContent: `
      <!-- Phone Top Notch -->
      <g transform="translate(187, 85)">
        <rect x="90" y="4" width="70" height="14" rx="7" fill="#000000"/>
        <text x="18" y="16" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#0f172a">10:14</text>
        <circle cx="230" cy="12" r="3" fill="#22c55e"/>
      </g>

      <!-- WhatsApp Header -->
      <g transform="translate(187, 115)">
        <rect width="250" height="42" fill="#075e54"/>
        <circle cx="28" cy="21" r="14" fill="#25d366"/>
        <text x="28" y="27" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#ffffff" text-anchor="middle">🛍️</text>
        <text x="50" y="18" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff">JaduCart Express</text>
        <text x="50" y="30" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#bbf7d0">Verified Store</text>
      </g>

      <!-- Cart Reminder WhatsApp Bubble with Product Photo -->
      <g transform="translate(202, 175)">
        <rect width="220" height="340" rx="16" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
        
        <!-- Product Photo: Sneaker Illustration with vibrant styling -->
        <g transform="translate(14, 14)">
          <rect width="192" height="130" rx="12" fill="#f8fafc" stroke="#e2e8f0"/>
          <!-- Sneaker Vector Graphic Mockup -->
          <circle cx="96" cy="65" r="50" fill="#dbeafe" opacity="0.6"/>
          <path d="M 40 85 Q 50 65, 80 65 L 110 50 Q 130 50, 145 68 L 160 85 Q 120 92, 40 85 Z" fill="#2563eb"/>
          <path d="M 38 85 L 162 85 Q 162 94, 150 94 L 45 94 Q 38 94, 38 85 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
          <circle cx="70" cy="74" r="5" fill="#f59e0b"/>
          <rect x="14" y="10" width="84" height="20" rx="10" fill="#ef4444"/>
          <text x="56" y="24" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#ffffff" text-anchor="middle">CART SAVED</text>
        </g>

        <!-- Product Name & Price -->
        <g transform="translate(16, 160)">
          <text x="0" y="16" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#0f172a">Air Cushion Sneaker V2</text>
          <text x="0" y="32" font-family="system-ui, sans-serif" font-size="10" font-weight="500" fill="#64748b">Size: 42 · Free Delivery Dhaka</text>
          <text x="0" y="58" font-family="system-ui, sans-serif" font-size="22" font-weight="900" fill="#075e54">৳ 3,450</text>
        </g>

        <!-- Big Green Complete Order Button -->
        <g transform="translate(14, 250)">
          <rect width="192" height="46" rx="23" fill="#25d366" stroke="#16a34a" stroke-width="1"/>
          <text x="96" y="28" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#ffffff" text-anchor="middle">Complete Order ⚡</text>
        </g>

        <!-- Time stamp -->
        <text x="195" y="325" font-family="system-ui, sans-serif" font-size="9" font-weight="500" fill="#94a3b8" text-anchor="end">10:14 AM ✓✓</text>
      </g>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // CARD 6: Human handover (Phone chat bot -> human agent avatar + "Agent joined" pill)
  // Radiant royal blue studio setting with blue pedestal
  // ─────────────────────────────────────────────────────────────
  {
    cardNumber: 6,
    bgGradient: {
      type: "blue",
      stop1: "#1d4ed8",
      stop2: "#0f172a",
      pedestalTop: "#2563eb",
      pedestalSide: "#1e40af",
      shadowColor: "#021a4f"
    },
    phoneFrame: {
      color: "#0f172a",
      stroke: "#93c5fd",
      screenBg: "#0f172a"
    },
    screenContent: `
      <!-- Phone Top Notch -->
      <g transform="translate(187, 85)">
        <rect x="90" y="4" width="70" height="14" rx="7" fill="#000000"/>
        <text x="18" y="16" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#94a3b8">11:02</text>
        <circle cx="230" cy="12" r="3" fill="#22c55e"/>
      </g>

      <!-- App Header -->
      <g transform="translate(187, 115)">
        <rect width="250" height="42" fill="#1e293b"/>
        <text x="18" y="26" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#ffffff">Live Support Desk</text>
        <text x="210" y="25" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#38bdf8">24/7</text>
      </g>

      <!-- Bot Handover Message Bubble -->
      <g transform="translate(202, 175)">
        <rect width="220" height="74" rx="14" fill="#1e293b"/>
        <circle cx="24" cy="24" r="12" fill="#0172ff"/>
        <text x="24" y="29" font-size="13" text-anchor="middle">🤖</text>
        <text x="44" y="24" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#93c5fd">Jadubot AI</text>
        <text x="14" y="52" font-family="system-ui, sans-serif" font-size="11" font-weight="500" fill="#e2e8f0">Connecting you to senior agent</text>
        <text x="14" y="66" font-family="system-ui, sans-serif" font-size="11" font-weight="500" fill="#e2e8f0">Tanvir for wholesale discount...</text>
      </g>

      <!-- "Agent joined" Pill -->
      <g transform="translate(202, 266)">
        <rect x="40" width="140" height="26" rx="13" fill="#22c55e" fill-opacity="0.2" stroke="#22c55e" stroke-width="1.2"/>
        <circle cx="56" cy="13" r="4" fill="#22c55e"/>
        <text x="114" y="17" font-family="system-ui, sans-serif" font-size="10" font-weight="900" fill="#4ade80" text-anchor="middle">✦ AGENT JOINED</text>
      </g>

      <!-- Human Agent Card with Avatar Photo -->
      <g transform="translate(202, 310)">
        <rect width="220" height="190" rx="16" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
        
        <!-- Agent Avatar -->
        <g transform="translate(18, 18)">
          <circle cx="28" cy="28" r="26" fill="#3b82f6"/>
          <!-- Stylized friendly avatar face -->
          <circle cx="28" cy="22" r="11" fill="#fed7aa"/>
          <path d="M 12 48 Q 28 35, 44 48 Z" fill="#ffffff"/>
          <!-- Active green status ring -->
          <circle cx="46" cy="46" r="6" fill="#22c55e" stroke="#1e293b" stroke-width="2"/>
        </g>

        <!-- Agent Details -->
        <g transform="translate(80, 24)">
          <text x="0" y="16" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#ffffff">Tanvir Ahmed</text>
          <text x="0" y="32" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#60a5fa">Sales Director · Active</text>
        </g>

        <!-- Human Reply Bubble -->
        <g transform="translate(16, 85)">
          <rect width="188" height="85" rx="12" fill="#0f172a"/>
          <text x="12" y="24" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#ffffff">"Hi! I can approve 22% off</text>
          <text x="12" y="40" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#ffffff">for your 200-pack order.</text>
          <text x="12" y="62" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#38bdf8">Sending draft invoice now."</text>
        </g>
      </g>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // CARD 7: Order tracking (Phone with delivery status card, rider on bike, 4-step progress)
  // Warm peach / golden street studio setting with soft warm light
  // ─────────────────────────────────────────────────────────────
  {
    cardNumber: 7,
    bgGradient: {
      type: "warm",
      stop1: "#fff7ed",
      stop2: "#ffedd5",
      pedestalTop: "#ffffff",
      pedestalSide: "#fed7aa",
      shadowColor: "#ea580c"
    },
    phoneFrame: {
      color: "#0f172a",
      stroke: "#fed7aa",
      screenBg: "#ffffff"
    },
    screenContent: `
      <!-- Phone Top Notch -->
      <g transform="translate(187, 85)">
        <rect x="90" y="4" width="70" height="14" rx="7" fill="#000000"/>
        <text x="18" y="16" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#0f172a">1:45</text>
        <circle cx="230" cy="12" r="3" fill="#22c55e"/>
      </g>

      <!-- App Header -->
      <g transform="translate(187, 115)">
        <rect width="250" height="42" fill="#ea580c"/>
        <text x="18" y="26" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#ffffff">Steadfast Live Track</text>
        <text x="200" y="25" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#ffedd5">#9821</text>
      </g>

      <!-- Delivery Hero Card -->
      <g transform="translate(202, 175)">
        <rect width="220" height="325" rx="16" fill="#fff7ed" stroke="#fed7aa" stroke-width="1.2"/>
        
        <!-- Big Rider Icon in Circle -->
        <g transform="translate(70, 20)">
          <circle cx="40" cy="40" r="38" fill="#ffedd5" stroke="#fdba74" stroke-width="2"/>
          <text x="40" y="50" font-family="system-ui, sans-serif" font-size="40" text-anchor="middle">🛵</text>
        </g>

        <!-- Status Title -->
        <g transform="translate(20, 115)">
          <text x="90" y="16" font-family="system-ui, sans-serif" font-size="16" font-weight="900" fill="#9a3412" text-anchor="middle">Out for Delivery</text>
          <text x="90" y="34" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#c2410c" text-anchor="middle">Arriving today by 3:00 PM</text>
        </g>

        <!-- 4-Step Progress Dots -->
        <g transform="translate(24, 175)">
          <line x1="16" y1="12" x2="156" y2="12" stroke="#ea580c" stroke-width="3"/>
          <circle cx="16" cy="12" r="7" fill="#ea580c"/>
          <circle cx="62" cy="12" r="7" fill="#ea580c"/>
          <circle cx="110" cy="12" r="9" fill="#ea580c" stroke="#fed7aa" stroke-width="3"/>
          <circle cx="156" cy="12" r="7" fill="#fed7aa"/>

          <text x="16" y="32" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#64748b" text-anchor="middle">Order</text>
          <text x="62" y="32" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#64748b" text-anchor="middle">Packed</text>
          <text x="110" y="32" font-family="system-ui, sans-serif" font-size="9" font-weight="900" fill="#ea580c" text-anchor="middle">On Way</text>
          <text x="156" y="32" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#94a3b8" text-anchor="middle">Done</text>
        </g>

        <!-- Courier Rider Info Card -->
        <g transform="translate(14, 230)">
          <rect width="192" height="70" rx="12" fill="#ffffff" stroke="#fed7aa"/>
          <circle cx="28" cy="35" r="16" fill="#ffedd5"/>
          <text x="28" y="41" font-size="16" text-anchor="middle">📦</text>
          <text x="54" y="28" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0f172a">Cash on Delivery</text>
          <text x="54" y="46" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#ea580c">৳ 1,450 to pay</text>
        </g>
      </g>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // CARD 8: Team inbox (Laptop on a clean desk showing simple inbox with 3-4 conversation rows)
  // Dark workspace setting with modern laptop mockup
  // ─────────────────────────────────────────────────────────────
  {
    cardNumber: 8,
    bgGradient: {
      type: "dark",
      stop1: "#0a0d16",
      stop2: "#05070c",
      pedestalTop: "#111827",
      pedestalSide: "#080c14",
      shadowColor: "#000000"
    },
    phoneFrame: {
      color: "#1e293b",
      stroke: "#6366f1",
      screenBg: "#0f172a"
    },
    screenContent: `
      <!-- Laptop Screen Shell (Width: 380, Height: 240, centered) -->
      <g transform="translate(122, 160)">
        <!-- Screen Outer Bezel -->
        <rect width="380" height="250" rx="14" fill="#0f172a" stroke="#334155" stroke-width="3"/>
        <!-- Camera Dot -->
        <circle cx="190" cy="8" r="3" fill="#1e293b"/>
        
        <!-- Screen Inner Canvas -->
        <rect x="8" y="16" width="364" height="226" rx="6" fill="#0b1120"/>

        <!-- Laptop Window Header -->
        <g transform="translate(16, 24)">
          <circle cx="6" cy="6" r="4" fill="#ef4444"/>
          <circle cx="18" cy="6" r="4" fill="#f59e0b"/>
          <circle cx="30" cy="6" r="4" fill="#10b981"/>
          <text x="180" y="9" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#ffffff" text-anchor="middle">Jadubot Omnichannel Inbox</text>
          <rect x="290" y="0" width="55" height="15" rx="7" fill="#22c55e" fill-opacity="0.2"/>
          <text x="317" y="11" font-family="system-ui, sans-serif" font-size="8" font-weight="800" fill="#4ade80" text-anchor="middle">● 4 ONLINE</text>
        </g>

        <!-- 3 Big Clean Conversation Rows -->
        <!-- Row 1: WhatsApp (Green Dot) -->
        <g transform="translate(16, 52)">
          <rect width="348" height="46" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1"/>
          <circle cx="20" cy="23" r="12" fill="#25d366" fill-opacity="0.2"/>
          <circle cx="20" cy="23" r="5" fill="#25d366"/>
          <text x="42" y="19" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#ffffff">Amina Khan · Dhaka</text>
          <text x="42" y="34" font-family="system-ui, sans-serif" font-size="9" font-weight="500" fill="#94a3b8">"Please confirm order for 2 silk sarees..."</text>
          <rect x="260" y="13" width="76" height="20" rx="10" fill="#312e81"/>
          <text x="298" y="27" font-family="system-ui, sans-serif" font-size="8" font-weight="800" fill="#c7d2fe" text-anchor="middle">Sadia (Agent)</text>
        </g>

        <!-- Row 2: Messenger (Blue Dot) -->
        <g transform="translate(16, 106)">
          <rect width="348" height="46" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1"/>
          <circle cx="20" cy="23" r="12" fill="#1877f2" fill-opacity="0.2"/>
          <circle cx="20" cy="23" r="5" fill="#1877f2"/>
          <text x="42" y="19" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#ffffff">Rahim Textile Ltd</text>
          <text x="42" y="34" font-family="system-ui, sans-serif" font-size="9" font-weight="500" fill="#94a3b8">"Invoice received, payment sent via bKash"</text>
          <rect x="260" y="13" width="76" height="20" rx="10" fill="#065f46"/>
          <text x="298" y="27" font-family="system-ui, sans-serif" font-size="8" font-weight="800" fill="#6ee7b7" text-anchor="middle">Bot Resolved</text>
        </g>

        <!-- Row 3: Instagram (Pink Dot) -->
        <g transform="translate(16, 160)">
          <rect width="348" height="46" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1"/>
          <circle cx="20" cy="23" r="12" fill="#e1306c" fill-opacity="0.2"/>
          <circle cx="20" cy="23" r="5" fill="#e1306c"/>
          <text x="42" y="19" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#ffffff">Sara's Boutique</text>
          <text x="42" y="34" font-family="system-ui, sans-serif" font-size="9" font-weight="500" fill="#94a3b8">"Is express delivery available to Sylhet?"</text>
          <rect x="260" y="13" width="76" height="20" rx="10" fill="#312e81"/>
          <text x="298" y="27" font-family="system-ui, sans-serif" font-size="8" font-weight="800" fill="#c7d2fe" text-anchor="middle">Nayeem (Agent)</text>
        </g>

        <!-- Laptop Keyboard Base (Isometric/3D Base) -->
        <g transform="translate(-40, 245)">
          <path d="M 0 10 L 40 0 L 420 0 L 460 10 L 430 24 L 30 24 Z" fill="#334155"/>
          <path d="M 30 24 L 430 24 L 430 28 L 30 28 Z" fill="#1e293b"/>
          <!-- Trackpad indent -->
          <rect x="180" y="6" width="100" height="12" rx="4" fill="#1e293b" opacity="0.6"/>
        </g>
      </g>
    `
  }
];

function buildStudioPhoneSvg(spec: PhoneStudioSpec): string {
  const width = 675;
  const height = 900;
  const isLaptop = spec.cardNumber === 8;

  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Studio Background Gradient -->
      <radialGradient id="studioLight${spec.cardNumber}" cx="50%" cy="30%" r="70%">
        <stop offset="0%" stop-color="${spec.bgGradient.stop1}"/>
        <stop offset="100%" stop-color="${spec.bgGradient.stop2}"/>
      </radialGradient>

      <!-- Pedestal Gradient -->
      <linearGradient id="pedestalGrad${spec.cardNumber}" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="${spec.bgGradient.pedestalTop}"/>
        <stop offset="100%" stop-color="${spec.bgGradient.pedestalSide}"/>
      </linearGradient>

      <!-- Soft Pedestal Shadow -->
      <filter id="softShadow${spec.cardNumber}" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="28" result="blur"/>
        <feOffset dx="0" dy="36" result="offset"/>
        <feFlood flood-color="${spec.bgGradient.shadowColor}" flood-opacity="0.35"/>
        <feComposite in2="offset" operator="in"/>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>

      <!-- Phone Outer Shadow -->
      <filter id="phoneShadow${spec.cardNumber}" x="-25%" y="-25%" width="150%" height="150%">
        <feDropShadow dx="0" dy="25" stdDeviation="30" flood-color="#000000" flood-opacity="0.4"/>
      </filter>
    </defs>

    <!-- Studio Wall Background -->
    <rect width="${width}" height="${height}" fill="url(#studioLight${spec.cardNumber})"/>

    <!-- Subtle studio ambient light orb -->
    <ellipse cx="337" cy="260" rx="280" ry="240" fill="#ffffff" opacity="${spec.bgGradient.type === 'dark' ? '0.04' : '0.15'}" filter="url(#softShadow${spec.cardNumber})"/>

    <!-- Studio Pedestal (Display Base) -->
    <g transform="translate(68, 620)" filter="url(#softShadow${spec.cardNumber})">
      <!-- Pedestal Surface Ellipse -->
      <ellipse cx="270" cy="50" rx="260" ry="70" fill="url(#pedestalGrad${spec.cardNumber})"/>
      <!-- Pedestal Front Depth -->
      <path d="M 10 50 Q 270 125, 530 50 L 530 180 Q 270 250, 10 180 Z" fill="${spec.bgGradient.pedestalSide}"/>
    </g>

    ${
      !isLaptop
        ? `
      <!-- Smartphone 3D Body in Studio -->
      <g filter="url(#phoneShadow${spec.cardNumber})">
        <!-- Phone Outer Shell (Curved Bezel) -->
        <rect x="180" y="70" width="265" height="520" rx="36" fill="${spec.phoneFrame.color}" stroke="${spec.phoneFrame.stroke}" stroke-width="3"/>
        
        <!-- Screen Glass Canvas -->
        <rect x="187" y="77" width="251" height="506" rx="30" fill="${spec.phoneFrame.screenBg}"/>
        
        <!-- Screen Reflection Gloss -->
        <path d="M 187 77 L 438 77 L 187 380 Z" fill="#ffffff" opacity="0.04"/>
      </g>
    `
        : ""
    }

    <!-- UI Screen Content -->
    ${spec.screenContent}
  </svg>`;
}

async function run() {
  const outputDir = path.resolve("public/assets/images/home/hero");
  for (const spec of specs) {
    const svg = buildStudioPhoneSvg(spec);
    const dest = path.join(outputDir, `card-${spec.cardNumber}.webp`);
    await sharp(Buffer.from(svg))
      .resize(675, 900)
      .webp({ quality: 90 })
      .toFile(dest);
    console.log(`Generated photorealistic studio card: card-${spec.cardNumber}.webp`);
  }
}

run().catch(console.error);
