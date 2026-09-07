# Jadubot Design System & Motion Specification
*Reverse-engineered from LazyChat (lazychat.io) and customized for Jadubot*

---

## 1. Executive Summary & Aesthetic Architecture

The Jadubot design system translates the visual rhythm, micro-interactions, and motion architecture of **LazyChat.io** into a high-impact, performance-engineered web application for **Jadubot.com**.

- **Visual Direction**: High-contrast, futuristic AI-SaaS aesthetic with dark mode default (`#070A11`), luminous orange/amber radial glows (`#FF6B00` / `#FFA033`), subtle glassmorphism surfaces (`rgba(255, 255, 255, 0.03)` with `border-white/[0.08]`), and crisp micro-borders.
- **Motion Philosophy**: Intentional, snappy, hardware-accelerated animations using GSAP ScrollTrigger (`power3.out`, 0.5s–0.8s duration, 0.08s–0.12s staggers) and pure Three.js procedural WebGL ambient field (with automatic degradation for `prefers-reduced-motion` and mobile devices).
- **Architecture Philosophy**:
  - Strict Server Component default in Next.js 16 App Router.
  - Dedicated route component folders (`src/components/routes/[route-name]/`) containing route-specific sub-components, re-exported cleanly through `index.ts`.
  - Client components (`'use client'`) isolated to interactive leaves (e.g., video tab switcher, accordion toggles, GSAP triggers, Three.js canvas).

---

## 2. Layout, Grid & Spacing Rhythm

### 2.1 Container & Breakpoints
| Breakpoint | Min-Width | Max Container Width | Horizontal Padding |
|---|---|---|---|
| **Mobile (`sm`)** | `360px` | `100%` | `1rem (16px)` |
| **Tablet (`md`)** | `768px` | `720px` | `1.5rem (24px)` |
| **Desktop (`lg`)** | `1024px` | `960px` | `2rem (32px)` |
| **Wide Desktop (`xl`)** | `1280px` | `1200px` | `2.5rem (40px)` |
| **Ultra-wide (`2xl`)**| `1536px` | `1280px` | `3rem (48px)` |

### 2.2 Vertical Section Rhythm
- **Hero Section**: `pt-32 pb-20 md:pt-40 md:pb-28`
- **Standard Content Sections**: `py-20 md:py-32`
- **Compact Interstitial Sections** (e.g., Marquee, Callout Badges): `py-10 md:py-16`
- **Card Padding**:
  - Standard card: `p-6 md:p-8`
  - Compact card / Stat badge: `p-4 md:p-6`
  - Hero floating card: `p-5 md:p-7`

---

## 3. Color System & Token Mapping

LazyChat utilizes a cold indigo-violet glow. Jadubot replaces this with an **energetic electric-amber and warm-orange gradient** inspired by Jadubot's brand identity.

### 3.1 OKLCH Color Tokens (Tailwind CSS v4 `@theme`)
```css
@theme inline {
  /* Brand Accents */
  --color-brand-primary: oklch(0.68 0.22 45);       /* #FF6B00 Electric Orange */
  --color-brand-secondary: oklch(0.78 0.18 65);     /* #FFA336 Luminous Amber */
  --color-brand-glow: oklch(0.68 0.22 45 / 0.25);   /* Ambient Glow */
  --color-brand-dark: oklch(0.48 0.19 38);          /* Deep Orange */

  /* Surface / Canvas (Dark Mode Default) */
  --color-canvas-bg: oklch(0.12 0.015 260);         /* Deep Charcoal #070A11 */
  --color-canvas-surface: oklch(0.16 0.018 260);    /* #0E131F Card Background */
  --color-canvas-elevated: oklch(0.20 0.022 260);   /* #151C2C Elevated Surface */
  --color-canvas-border: oklch(0.25 0.02 260 / 0.4);/* Border Subtle */

  /* Text & Foreground */
  --color-text-primary: oklch(0.98 0.005 260);      /* #F8FAFC White Heading */
  --color-text-secondary: oklch(0.75 0.015 260);    /* #94A3B8 Muted Body */
  --color-text-tertiary: oklch(0.55 0.02 260);     /* #64748B Subtle Subtext */

  /* Accents & States */
  --color-accent-green: oklch(0.72 0.17 145);       /* Live / Active indicator */
  --color-accent-blue: oklch(0.65 0.18 240);        /* Facebook Messenger Blue */
  --color-accent-pink: oklch(0.68 0.22 340);        /* Instagram Magenta */
  --color-accent-emerald: oklch(0.70 0.19 155);     /* WhatsApp Green */
}
```

### 3.2 Gradient Presets
- **Hero Ambient Glow**: `radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255, 107, 0, 0.28), rgba(255, 163, 54, 0.08) 50%, transparent 80%)`
- **Primary Button Gradient**: `linear-gradient(135deg, #FF6B00 0%, #FF8A00 50%, #FFA336 100%)`
- **Border Glow Hover**: `linear-gradient(135deg, rgba(255, 107, 0, 0.6), rgba(255, 163, 54, 0.2), rgba(255, 255, 255, 0.05))`
- **Frosted Glass Cards**: `backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.37)]`

---

## 4. Typography Scale & Font Hierarchy

- **Primary UI Display & Body**: `Geist Sans` (via `next/font/google`).
- **Code & Numeric Badges**: `Geist Mono` (tabular numbers for animated counters).
- **Bengali (Bangla) Typography**: `Hind Siliguri` (clean, modern sans-serif with perfect metrics matching Geist).

| Style | Desktop Size / Line-Height | Mobile Size / Line-Height | Tracking | Weight |
|---|---|---|---|---|
| **Display H1** | `64px / 1.1` | `38px / 1.15` | `-0.03em` | Bold (`700`) |
| **Section H2** | `44px / 1.2` | `30px / 1.25` | `-0.025em` | SemiBold (`600`) |
| **Card H3** | `24px / 1.3` | `20px / 1.35` | `-0.02em` | SemiBold (`600`) |
| **Feature Title H4** | `20px / 1.4` | `18px / 1.4` | `-0.015em` | Medium (`500`) |
| **Lead Subhead** | `20px / 1.6` | `16px / 1.6` | `0` | Regular (`400`) |
| **Body Large** | `18px / 1.6` | `16px / 1.6` | `0` | Regular (`400`) |
| **Body Base** | `15px / 1.6` | `14px / 1.6` | `0` | Regular (`400`) |
| **Small / Badge** | `13px / 1.4` | `12px / 1.4` | `+0.04em` | Medium (`500`) |

---

## 5. Flagship Landing Page Section Sequence

Matching LazyChat's exact 1:1 structure and section rhythm:

1. **Sticky Header / Navbar**:
   - Jadubot Logo with glowing orange dot indicator.
   - Nav links with animated bottom highlight on hover: `Features`, `Solutions`, `Pricing`, `Affiliate`, `Blog`.
   - Action buttons: "Watch Demo" (glassmorphic pill) + "Book a Demo" (luminous orange CTA).
   - Dynamic backdrop blur: `bg-[#070A11]/70 backdrop-blur-md border-b border-white/[0.06]`.
2. **Hero Section**:
   - Pill badge: `✨ #1 AI Marketing & Chatbot Automation in Bangladesh`.
   - H1 Display: "Superhuman Sales Agent Powered by AI" with orange-to-amber gradient highlight.
   - Subhead: "Automate Facebook Messenger, Instagram DM, and WhatsApp conversations to generate leads and close sales 24/7."
   - Dual CTAs: Primary "Book a Free Demo" + Secondary "Watch Demo" (triggers video modal).
   - Three.js WebGL ambient particle mesh floating gracefully behind the hero.
   - Floating Hero Mockup frame with subtle 3D tilt and floating badge: "25% Higher Sales Conversion".
3. **Infinite Brand Logo Marquee**:
   - Two opposing-direction continuous scroll tickers with soft gradient edge masks (`.loop-overlay`).
   - Trusted by leading eCommerce and retail brands in Bangladesh.
4. **"Problem" 3-Column Pain-Point Grid**:
   - Pill Badge: `Problem`.
   - H2: "You are losing sales because of missed messages and late replies."
   - 3 Glass Cards with numbered gradient badges (1, 2, 3):
     1. *Lost Customers*: Competitors reply in 30 seconds; delayed responses lose the deal.
     2. *Missed Opportunities*: High ad-spend leads rot in overflowing unread inboxes.
     3. *Repetitive Tasks*: Staff spends hours typing the same pricing and delivery questions.
5. **"Solutions" 3-Tab Showcase with Looping Video Demos**:
   - Pill Badge: `Solutions`.
   - H2: "Jadubot replies to all of your customers so that you can focus on growth."
   - Synchronized 3-Tab selector with continuous progress bar:
     - Tab 1: **Increased Sales** -> Plays `solution-sales-demo.mp4`.
     - Tab 2: **Instant Replies** -> Plays `solution-instant-reply.mp4`.
     - Tab 3: **Increased Productivity** -> Plays `solution-productivity.mp4`.
6. **"Features" Alternating Interactive Feature Grid**:
   - Feature 1: **Automated Comment to Inbox** (Auto public comment reply + instant DM) -> `feature-comment-automation.mp4`.
   - Feature 2: **Messenger Commerce & In-Chat Cart** -> `feature-in-chat-checkout.mp4`.
   - Feature 3: **AI Product Suggestions** -> `feature-product-suggestion.mp4`.
   - Feature 4: **Out-of-Stock Alerts & Restock Pushes** -> `feature-stock-alert.mp4`.
   - Feature 5: **Click-to-Message Facebook/Instagram Ads Integration** -> `feature-click-to-message-ads.mp4`.
   - Feature 6: **Visual AI Product Recognition** -> `feature-visual-ai.mp4`.
7. **"3 Simple Steps" Process Workflow**:
   - Connecting dotted gradient line with glowing step markers.
   - Step 1: Connect your Facebook, Instagram, or WhatsApp page in 1 click.
   - Step 2: Configure your smart triggers & product catalogs in our visual flow builder.
   - Step 3: Turn on automation and let Jadubot capture leads and sell for you.
8. **Case Studies & Metric Counters**:
   - Large animated counters (`useCounter`): `10x Faster Replies`, `25% Revenue Boost`, `500k+ Automated Chats`, `99.9% Uptime`.
9. **Testimonials Showcase**:
   - Verified merchant quotes, customer avatars, star ratings, and store tags.
10. **Pricing Table**:
    - Monthly / Annual toggle (`Save 20%` badge).
    - 3 Tiers: Starter (Free), Pro Automation (Popular - glowing border), Enterprise.
11. **FAQ Accordion**:
    - Expandable question panels with smooth height transitions and rotating chevron icons.
12. **High-Impact CTA Banner**:
    - Radiant orange glow box with "Ready to supercharge your customer automation?", dual buttons.
13. **Global Footer**:
    - Logo, tagline, social channels, organized link columns, copyright, and status badge.

---

## 6. Motion & Interaction System (GSAP & Three.js)

### 6.1 GSAP Timings & Easing Standards
- **Standard Reveal Transition**: `power3.out`, duration `0.7s`, opacity `0 -> 1`, y `30 -> 0`.
- **Stagger Delay**: `0.08s` between sibling cards or grid items.
- **ScrollTrigger Trigger Points**: `start: "top 85%"`, `toggleActions: "play none none reverse"`.
- **Marquee Ticker Speed**: `35s` linear continuous scroll for row 1, `42s` reverse for row 2.
- **Counter Animation**: `power2.out`, duration `1.8s` with `ScrollTrigger.once`.

### 6.2 Ambient Three.js Hero Scene (`HeroBackground.tsx`)
- Lightweight procedural particle field with `THREE.Points` or glowing sine wave grid.
- Driven by `THREE.Timer` in a `setAnimationLoop`.
- Automatic detection of `window.matchMedia("(prefers-reduced-motion: reduce)")` — pauses WebGL animation and displays a CSS radial gradient fallback.
- Unmount cleanup: releases geometries, materials, and WebGL context to prevent memory leaks.

---

## 7. Component & File Architecture (Adhering to AGENT.md)

To strictly satisfy the user's architectural requirement:
> *"devide all the codes into smaller components like every route should have their dedicated component folder for the component that are only being used in that route and then use that component in the page.tsx for that route, also do same for any subroute or dynamic routes. also only use 'use client' where it is necessary 100%"*

### 7.1 Folder Hierarchy:
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                             (Server Component)
│   ├── service/page.tsx                     (Server Component)
│   ├── pricing/page.tsx                     (Server Component)
│   ├── cpa-marketing-automation/page.tsx    (Server Component)
│   ├── about/page.tsx                       (Server Component)
│   ├── contact/page.tsx                     (Server Component)
│   ├── faq/page.tsx                         (Server Component)
│   ├── affiliate/page.tsx                   (Server Component)
│   ├── refund/page.tsx                      (Server Component)
│   ├── ticket/page.tsx                      (Server Component)
│   ├── book-a-free-demo/page.tsx            (Server Component)
│   └── blog/
│       ├── page.tsx                         (Server Component)
│       └── [slug]/page.tsx                  (Server Component)
├── components/
│   ├── ui/                                  (Shared primitives: Button, Card, Badge, Accordion)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── accordion.tsx
│   │   └── index.ts
│   ├── layouts/                             (Global navigation & footer)
│   │   ├── Navbar.tsx                       (Client Component leaf for scroll blur)
│   │   ├── Footer.tsx                       (Server Component)
│   │   └── index.ts
│   ├── three/                               (WebGL Scenes)
│   │   ├── HeroBackground.tsx               (Client Component)
│   │   └── index.ts
│   ├── routes/                              (Dedicated component folders per route)
│   │   ├── home/
│   │   │   ├── HomeHero.tsx                 (Server/Client split)
│   │   │   ├── HomeMarquee.tsx              (Client leaf)
│   │   │   ├── HomeProblem.tsx              (Server Component)
│   │   │   ├── HomeSolutions.tsx            (Client leaf for video tabs)
│   │   │   ├── HomeFeatures.tsx             (Server Component)
│   │   │   ├── HomeProcess.tsx              (Server Component)
│   │   │   ├── HomeStats.tsx                (Client leaf for counter)
│   │   │   ├── HomeTestimonials.tsx         (Server Component)
│   │   │   ├── HomePricing.tsx              (Client leaf for billing toggle)
│   │   │   ├── HomeFaq.tsx                  (Client leaf for accordion)
│   │   │   ├── HomeCta.tsx                  (Server Component)
│   │   │   └── index.ts
│   │   ├── service/
│   │   │   ├── ServiceHero.tsx
│   │   │   ├── ServiceGrid.tsx
│   │   │   └── index.ts
│   │   ├── pricing/
│   │   │   ├── PricingHero.tsx
│   │   │   ├── PricingTable.tsx
│   │   │   ├── PricingComparison.tsx
│   │   │   └── index.ts
│   │   ├── cpa/
│   │   │   ├── CpaHero.tsx
│   │   │   ├── CpaFeatures.tsx
│   │   │   └── index.ts
│   │   ├── about/
│   │   │   ├── AboutHero.tsx
│   │   │   ├── AboutStory.tsx
│   │   │   └── index.ts
│   │   ├── contact/
│   │   │   ├── ContactHero.tsx
│   │   │   ├── ContactForm.tsx              (Client leaf for instant submission)
│   │   │   └── index.ts
│   │   ├── faq/
│   │   │   ├── FaqHero.tsx
│   │   │   ├── FaqAccordionList.tsx         (Client leaf)
│   │   │   └── index.ts
│   │   ├── affiliate/
│   │   │   ├── AffiliateHero.tsx
│   │   │   ├── AffiliateBenefits.tsx
│   │   │   └── index.ts
│   │   ├── refund/
│   │   │   ├── RefundContent.tsx
│   │   │   └── index.ts
│   │   ├── ticket/
│   │   │   ├── TicketHero.tsx
│   │   │   ├── TicketForm.tsx               (Client leaf)
│   │   │   └── index.ts
│   │   ├── demo/
│   │   │   ├── DemoHero.tsx
│   │   │   ├── DemoForm.tsx                 (Client leaf)
│   │   │   └── index.ts
│   │   └── blog/
│   │       ├── BlogList.tsx
│   │       ├── BlogCard.tsx
│   │       ├── BlogPostHeader.tsx
│   │       ├── BlogPostBody.tsx
│   │       └── index.ts
├── lib/
│   ├── content/                             (Typed content loaders)
│   │   ├── get-page-content.ts
│   │   ├── get-blog-posts.ts
│   │   └── index.ts
│   └── animations/                          (GSAP hooks and animation utilities)
│       ├── use-scroll-reveal.ts
│       ├── use-counter.ts
│       └── index.ts
```

---

## 8. SEO, Metadata & Structured Data Specifications

- **Static Metadata API**: In every `page.tsx`, `generateMetadata` loads route JSON and builds:
  - `title`, `description`, `canonical`
  - `openGraph` with `/assets/images/shared/jadubot-logo.png`
  - `twitter` cards
- **JSON-LD Structured Data**:
  - `Organization` & `SoftwareApplication` on Home
  - `Product` & `Offer` on Pricing
  - `FAQPage` on FAQ & Home FAQ
  - `BlogPosting` on Blog Post `[slug]`
- **Sitemap & Robots**:
  - `src/app/sitemap.ts` dynamically includes all 12 target routes and all 7 blog post slugs.
  - `src/app/robots.ts` allows indexation across all routes with sitemap declaration.
