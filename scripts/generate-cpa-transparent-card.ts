import fs from "fs";
import path from "path";
import sharp from "sharp";

// Dimensions for the transparent bottom-anchored iPhone mockup:
// Width: 800px, Height: 750px (transparent background, phone top starts around y=40, curved top corners, phone goes all the way through bottom edge y=750)
function buildCpaTransparentPhoneSvg(): string {
  const width = 800;
  const height = 750;

  // Phone frame dimensions:
  // Centered horizontally: x = 110, width = 580.
  // Extends from y = 40 to y = 780 (cutting cleanly off at the bottom edge)
  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Soft phone outer drop shadow on transparent background -->
      <filter id="phoneShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="20" stdDeviation="24" flood-color="#000000" flood-opacity="0.32"/>
      </filter>

      <!-- Glass Screen Gradient -->
      <linearGradient id="screenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#0e1726"/>
        <stop offset="100%" stop-color="#070b14"/>
      </linearGradient>

      <!-- Glow for Lead Qualification Badge -->
      <radialGradient id="badgeGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#f97316" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#f97316" stop-opacity="0"/>
      </radialGradient>
    </defs>

    <!-- Transparent canvas (No background rect) -->

    <!-- Phone 3D Body (Anchored at the bottom) -->
    <g filter="url(#phoneShadow)">
      <!-- Outer titanium/slate bezel with rounded top corners (rx=64) -->
      <!-- Top corners curved, bottom straight down to edge -->
      <path d="
        M 110 755
        L 110 104
        A 64 64 0 0 1 174 40
        L 626 40
        A 64 64 0 0 1 690 104
        L 690 755
        Z
      " fill="#0f172a" stroke="#fb923c" stroke-width="3.5"/>

      <!-- Inner glass bezel border ring -->
      <path d="
        M 124 755
        L 124 112
        A 54 54 0 0 1 178 58
        L 622 58
        A 54 54 0 0 1 676 112
        L 676 755
        Z
      " fill="#1e293b"/>

      <!-- Screen active area -->
      <path d="
        M 132 755
        L 132 116
        A 48 48 0 0 1 180 68
        L 620 68
        A 48 48 0 0 1 668 116
        L 668 755
        Z
      " fill="url(#screenGrad)"/>

      <!-- Screen reflection gloss across upper corner -->
      <path d="
        M 180 68
        L 620 68
        L 132 556
        Z
      " fill="#ffffff" opacity="0.03"/>
    </g>

    <!-- Dynamic Island Pill (Centered at x=400, y=92, width=170, height=38, rx=19) -->
    <g transform="translate(400, 92)">
      <rect x="-85" y="0" width="170" height="38" rx="19" fill="#000000"/>
      <!-- Camera lens dot -->
      <circle cx="50" cy="19" r="6" fill="#111827"/>
      <circle cx="50" cy="19" r="2.5" fill="#1e3a8a"/>
      <!-- Sensor dot -->
      <circle cx="-50" cy="19" r="4.5" fill="#111827"/>
    </g>

    <!-- Status Bar (9:41, 5G, Battery) -->
    <g transform="translate(180, 114)">
      <text x="0" y="0" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="700" fill="#ffffff">9:41</text>
    </g>
    <g transform="translate(580, 102)">
      <!-- Signal bars -->
      <rect x="0" y="8" width="3" height="6" rx="1" fill="#ffffff"/>
      <rect x="5" y="5" width="3" height="9" rx="1" fill="#ffffff"/>
      <rect x="10" y="2" width="3" height="12" rx="1" fill="#ffffff"/>
      <rect x="15" y="0" width="3" height="14" rx="1" fill="#ffffff"/>
      <!-- 5G / Wifi -->
      <text x="24" y="12" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff">5G</text>
      <!-- Battery outline -->
      <rect x="46" y="2" width="22" height="11" rx="3" fill="none" stroke="#ffffff" stroke-width="1.5"/>
      <rect x="48" y="4" width="15" height="7" rx="1.5" fill="#22c55e"/>
      <rect x="69" y="5" width="2" height="5" rx="1" fill="#ffffff"/>
    </g>

    <!-- Phone App Header: Jadubot CPA Live Engine -->
    <g transform="translate(160, 154)">
      <rect width="480" height="64" rx="16" fill="#1e293b" stroke="#334155" stroke-width="1.2"/>
      <circle cx="38" cy="32" r="18" fill="#f97316"/>
      <text x="38" y="38" font-family="system-ui, sans-serif" font-size="18" text-anchor="middle">⚡</text>
      <text x="68" y="27" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#ffffff">Jadubot CPA Engine</text>
      <text x="68" y="45" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#fb923c">High-Volume Acquisition Active</text>
      <rect x="360" y="18" width="104" height="28" rx="14" fill="#22c55e" fill-opacity="0.18" stroke="#22c55e" stroke-width="1"/>
      <circle cx="376" cy="32" r="4" fill="#22c55e"/>
      <text x="424" y="36" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#4ade80" text-anchor="middle">99.9% LIVE</text>
    </g>

    <!-- Big Hero Card: Lead Qualified ✓ (Large Readable Moment) -->
    <g transform="translate(160, 234)">
      <!-- Card background -->
      <rect width="480" height="204" rx="20" fill="#152033" stroke="#f97316" stroke-width="2.5"/>
      
      <!-- Ambient card glow behind checkmark -->
      <circle cx="80" cy="50" r="70" fill="url(#badgeGlow)"/>

      <!-- Lead Qualified Badge -->
      <g transform="translate(24, 22)">
        <rect width="210" height="42" rx="21" fill="#16a34a" fill-opacity="0.22" stroke="#22c55e" stroke-width="1.8"/>
        <circle cx="21" cy="21" r="12" fill="#22c55e"/>
        <text x="21" y="27" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="44" y="26" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#4ade80">Lead Qualified ✓</text>
      </g>

      <!-- Conversion Rate Tag -->
      <g transform="translate(340, 26)">
        <rect width="116" height="34" rx="17" fill="#0284c7" fill-opacity="0.25" stroke="#38bdf8" stroke-width="1.2"/>
        <text x="58" y="22" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#38bdf8" text-anchor="middle">↑ +42% CR</text>
      </g>

      <!-- Big Numbers & Stats -->
      <g transform="translate(24, 86)">
        <text x="0" y="34" font-family="system-ui, sans-serif" font-size="44" font-weight="900" fill="#ffffff">98.4%</text>
        <text x="145" y="16" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#fb923c">HIGH INTENT SCORE</text>
        <text x="145" y="34" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="#94a3b8">OTP Verified · Phone Active in BD</text>
      </g>

      <!-- Sub-bar: Instant Postback Dispatched -->
      <g transform="translate(24, 150)">
        <rect width="432" height="36" rx="10" fill="#0b1324"/>
        <circle cx="20" cy="18" r="5" fill="#f97316"/>
        <text x="34" y="22" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#fed7aa">Instant Server-to-Server (S2S) Postback Fired (14ms)</text>
      </g>
    </g>

    <!-- Card 2: Payout Credited & Conversion Routing (Touching down toward bottom) -->
    <g transform="translate(160, 454)">
      <rect width="480" height="175" rx="20" fill="#131c2d" stroke="#38bdf8" stroke-width="2"/>
      
      <!-- Header Pill -->
      <g transform="translate(24, 20)">
        <rect width="190" height="28" rx="14" fill="#0284c7"/>
        <text x="95" y="18" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle">S2S POSTBACK APPROVED</text>
      </g>

      <!-- Big ৳ Payout Amount -->
      <g transform="translate(24, 64)">
        <text x="0" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#94a3b8">Commission Payout Credited:</text>
        <text x="0" y="66" font-family="system-ui, sans-serif" font-size="40" font-weight="900" fill="#38bdf8">৳ 18,500 <tspan font-size="22" font-weight="700" fill="#fb923c">($165.00)</tspan></text>
      </g>

      <!-- Route Status -->
      <g transform="translate(24, 142)">
        <text x="0" y="0" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#4ade80">● Auto-routed to Affiliate Network API</text>
      </g>
    </g>

    <!-- Multi-Network Webhook Satellite Routing (Peeking at the bottom edge) -->
    <g transform="translate(160, 645)">
      <rect width="480" height="110" rx="18" fill="#1e293b" stroke="#f97316" stroke-opacity="0.5"/>
      <text x="24" y="28" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#fed7aa">Affiliate Platform Endpoints (Realtime Sync)</text>
      
      <g transform="translate(24, 42)">
        <rect x="0" y="0" width="130" height="34" rx="17" fill="#334155"/>
        <text x="65" y="22" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">Appsflyer / Tune</text>
        
        <rect x="144" y="0" width="120" height="34" rx="17" fill="#334155"/>
        <text x="204" y="22" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">Voluum DSP</text>
        
        <rect x="278" y="0" width="140" height="34" rx="17" fill="#ea580c"/>
        <text x="348" y="22" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">Affise Postback ✓</text>
      </g>
    </g>
  </svg>`;
}

async function run() {
  const outputDir = path.resolve("public/assets/images/home/channels");
  fs.mkdirSync(outputDir, { recursive: true });

  const svg = buildCpaTransparentPhoneSvg();
  const dest = path.join(outputDir, "cpa.webp");

  await sharp(Buffer.from(svg))
    .resize(800, 750)
    .webp({ quality: 90, alphaQuality: 100 })
    .toFile(dest);

  const stats = fs.statSync(dest);
  console.log(`Successfully generated transparent CPA card: cpa.webp (${Math.round(stats.size / 1024)} KB)`);
}

run().catch(console.error);
