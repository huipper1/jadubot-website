export interface SectionImageConfig {
  src: string;
  alt: string;
  prompt: string;
  aspect?: "16/10" | "4/3" | "1/1" | "21/9" | "4/5" | "none";
}

export type RouteSectionRegistry = Record<string, Record<string, SectionImageConfig>>;

export const SECTION_IMAGES: Record<"platform" | "ai-agents" | "industry", RouteSectionRegistry> = {
  platform: {
    "whatsapp-automation": {
      hero: {
        src: "/assets/images/platform/whatsapp-automation/hero.webp",
        alt: "WhatsApp verified business chat showing automated order confirmation with tracking ID and bKash payment in BDT",
        prompt: "A modern smartphone mockup displaying a verified WhatsApp Business chat interface. Clean SaaS UI, Jadubot AI bot confirms a customer order with a BDT ৳ amount, courier tracking number, and instant delivery details. Bright blue sky accents, soft emerald green WhatsApp brand gradient, clean 3D illustration style, subtle lighting, Bangladesh e-commerce context, high resolution WebP.",
        aspect: "16/10"
      },
      features: {
        src: "/assets/images/platform/whatsapp-automation/features.webp",
        alt: "Multi-device conversational commerce dashboard showing automated WhatsApp product catalogs and customer tags",
        prompt: "A clean modern SaaS laptop and tablet dashboard mockup displaying Jadubot WhatsApp automation controls. Customer lists, tagged buyer segments, automated product catalog cards with prices in BDT ৳, clean blue and white palette, soft 3D graphic elements.",
        aspect: "16/10"
      },
      process: {
        src: "/assets/images/platform/whatsapp-automation/process.webp",
        alt: "Three-step onboarding timeline from Meta Cloud API connection to live WhatsApp AI bot deployment",
        prompt: "A polished 3D process visual showing 3 sequential steps: Meta Cloud API connecting to WhatsApp phone number, knowledge base upload, and instant live auto-reply activation. Electric blue sky and clean white palette, subtle shadows, tech illustration.",
        aspect: "4/3"
      },
      faq: {
        src: "/assets/images/platform/whatsapp-automation/faq.webp",
        alt: "Technical architecture diagram of official Meta WhatsApp Business Cloud API security and 24/7 uptime",
        prompt: "An elegant minimal 3D render showing enterprise WhatsApp security, official Meta API badge, SSL encryption shield, and 24/7 server uptime indicators in Jadubot electric blue and white aesthetic.",
        aspect: "16/10"
      }
    },
    "facebook-automation": {
      hero: {
        src: "/assets/images/platform/facebook-automation/hero.webp",
        alt: "Facebook post comment to Messenger inbox flow showing price query converted into instant checkout card",
        prompt: "A product post on Facebook feed where a customer comments 'PRICE?'. A dynamic glowing blue arrow flows into a private Messenger DM chat bubble where Jadubot instantly shares the full product photo, price in BDT ৳, and a 'Buy Now' checkout button. Modern 3D isometric mockup, blue and white SaaS palette.",
        aspect: "16/10"
      },
      features: {
        src: "/assets/images/platform/facebook-automation/features.webp",
        alt: "Messenger automation inbox managing multiple incoming customer inquiries with instant automated replies",
        prompt: "SaaS dashboard mockup of a high-speed Facebook Messenger inbox. AI auto-reply triggers, smart keyword filters for Bangla and English, customer segmentation tags, clean minimal UI, electric blue accents.",
        aspect: "16/10"
      },
      process: {
        src: "/assets/images/platform/facebook-automation/process.webp",
        alt: "Facebook Page one-click OAuth connection to Jadubot AI auto-responder setup flow",
        prompt: "Visual walkthrough showing Facebook Page one-click permission sync, post auto-reply rules setup, and live test on Messenger. Clean 3D UI cards, electric blue and subtle indigo gradients.",
        aspect: "4/3"
      },
      faq: {
        src: "/assets/images/platform/facebook-automation/faq.webp",
        alt: "Meta 24-hour messaging policy compliance and official Graph API verification visual",
        prompt: "Clean modern product graphic illustrating Meta Graph API compliance, 24-hour customer messaging tags, and zero-ban safe architecture. Electric blue and clean gray tones.",
        aspect: "16/10"
      }
    },
    "instagram-automation": {
      hero: {
        src: "/assets/images/platform/instagram-automation/hero.webp",
        alt: "Instagram Reel and Story interaction triggering instant direct message with product catalog link",
        prompt: "A smartphone mockup featuring an Instagram Reel. A comment badge pops with 'Link please', immediately connecting to an Instagram DM inbox where Jadubot automatically replies with a product carousel, ৳ pricing, and discount code. Modern 3D render, sunset gradient blended with bright electric blue.",
        aspect: "16/10"
      },
      features: {
        src: "/assets/images/platform/instagram-automation/features.webp",
        alt: "Instagram Story mentions and comment auto-DM configuration dashboard",
        prompt: "Polished SaaS management dashboard showing Instagram automation metrics: Story mention auto-replies, keyword triggers ('PROMO', 'PRICE'), and conversion rate counters in bright blue and clean white.",
        aspect: "16/10"
      },
      process: {
        src: "/assets/images/platform/instagram-automation/process.webp",
        alt: "Step-by-step connection of Instagram Professional account to Jadubot AI DM assistant",
        prompt: "Step-by-step visual mockup: Instagram Professional account linking to Facebook Page, configuring trigger keywords, and testing live DM responses. Soft 3D design, vibrant blue and purple accents.",
        aspect: "4/3"
      },
      faq: {
        src: "/assets/images/platform/instagram-automation/faq.webp",
        alt: "Official Instagram Messaging API compliance with Story mention security safeguards",
        prompt: "Clean graphic representing official Meta Instagram API compliance, secure webhook endpoints, and human takeover capabilities in unified inbox.",
        aspect: "16/10"
      }
    },
    "telegram-automation": {
      hero: {
        src: "/assets/images/platform/telegram-automation/hero.webp",
        alt: "Telegram group and private channel bot handling automated member verification and premium content access",
        prompt: "A smartphone displaying Telegram chat with Jadubot bot interface. Inline interactive buttons, instant file delivery, subscription verification, and community welcome message. Clean 3D render, sky blue Telegram and Jadubot palette.",
        aspect: "16/10"
      },
      features: {
        src: "/assets/images/platform/telegram-automation/features.webp",
        alt: "Telegram broadcast automation tool sending formatted updates with interactive buttons",
        prompt: "Laptop interface showing Telegram bot broadcasts, broadcast scheduling, custom inline keyboards, and analytics charts. Modern UI, bright blue sky accents.",
        aspect: "16/10"
      },
      process: {
        src: "/assets/images/platform/telegram-automation/process.webp",
        alt: "Connecting Telegram BotFather token to Jadubot in three easy setup steps",
        prompt: "Visual 3D guide: creating bot via BotFather, pasting API token into Jadubot dashboard, and activating automated command flows. Clean aesthetic.",
        aspect: "4/3"
      },
      faq: {
        src: "/assets/images/platform/telegram-automation/faq.webp",
        alt: "High-throughput Telegram bot infrastructure and broadcast rate limit management",
        prompt: "Infrastructure architecture visualization showing high concurrency message queues, serverless webhook routing, and Telegram API rate-limit protection.",
        aspect: "16/10"
      }
    },
    "website-chat-automation": {
      hero: {
        src: "/assets/images/platform/website-chat-automation/hero.webp",
        alt: "Lightweight website chat widget on modern e-commerce storefront with live AI product recommendations",
        prompt: "A sleek modern web browser displaying an e-commerce website with a floating Jadubot live chat widget at the bottom right. The widget shows an AI sales agent recommending products with image thumbnails, price in ৳, and checkout button. Clean 3D UI, bright blue aesthetic.",
        aspect: "16/10"
      },
      features: {
        src: "/assets/images/platform/website-chat-automation/features.webp",
        alt: "Real-time website visitor tracking and automated proactive chat triggers dashboard",
        prompt: "SaaS analytics screen showing website live visitors, cart page trigger rules, automated greeting popups, and instant human handover queue. Electric blue and white UI.",
        aspect: "16/10"
      },
      process: {
        src: "/assets/images/platform/website-chat-automation/process.webp",
        alt: "One-line JavaScript widget installation into website header or Google Tag Manager",
        prompt: "Visual 3-step setup: copying one-line JavaScript snippet, pasting into website or GTM, and customizing widget brand colors in real-time preview.",
        aspect: "4/3"
      },
      faq: {
        src: "/assets/images/platform/website-chat-automation/faq.webp",
        alt: "Sub-50ms lightweight web chat widget script performance and zero latency impact",
        prompt: "Performance speedometer graphic showing under 50KB asynchronous script footprint, zero Core Web Vitals impact, and multi-tab sync.",
        aspect: "16/10"
      }
    }
  },
  "ai-agents": {
    "lead-qualification": {
      hero: {
        src: "/assets/images/ai-agents/lead-qualification/hero.webp",
        alt: "AI agent qualifying inbound B2B lead with budget, timeline, and company size scoring badge",
        prompt: "A modern tablet mockup showing a dynamic chat between an AI agent and a B2B prospect. Chat bubbles collect company size, monthly budget in ৳, and implementation timeline, generating a 'Tier-1 Qualified Lead (95/100)' score badge. Clean 3D UI, bright blue and emerald accents.",
        aspect: "16/10"
      },
      features: {
        src: "/assets/images/ai-agents/lead-qualification/features.webp",
        alt: "Lead intent scoring matrix and automated Google Calendar / CRM routing flow",
        prompt: "SaaS CRM integration dashboard illustrating incoming leads scored in real-time, automated booking slots syncing with Google Calendar, and CRM webhook dispatch.",
        aspect: "16/10"
      },
      process: {
        src: "/assets/images/ai-agents/lead-qualification/process.webp",
        alt: "Configuring qualification questions, scoring threshold, and sales rep calendar link",
        prompt: "Three-step qualification setup visual: defining qualification criteria, setting minimum budget filter, and routing qualified leads to sales agents.",
        aspect: "4/3"
      },
      faq: {
        src: "/assets/images/ai-agents/lead-qualification/faq.webp",
        alt: "CRM data privacy and webhook synchronization architecture for enterprise lead routing",
        prompt: "Enterprise security architecture graphic highlighting end-to-end data encryption, instant CRM sync (HubSpot, Salesforce, Google Sheets), and privacy compliance.",
        aspect: "16/10"
      }
    },
    "customer-support": {
      hero: {
        src: "/assets/images/ai-agents/customer-support/hero.webp",
        alt: "AI support agent resolving order status inquiry and seamlessly transferring VIP inquiry to human agent",
        prompt: "A split chat UI mockup showing an AI support agent resolving return policy questions instantly, followed by a smooth 'Human Agent Handover' badge with agent avatar taking over with full chat context. Clean 3D aesthetic, bright blue and soft slate tones.",
        aspect: "16/10"
      },
      features: {
        src: "/assets/images/ai-agents/customer-support/features.webp",
        alt: "AI knowledge base ingestion from PDFs, websites, and FAQs with live sentiment detection",
        prompt: "Dashboard interface showing automated document training: uploading PDFs, website URLs, and FAQ sheets to train the AI agent in minutes. Visual neural connection nodes.",
        aspect: "16/10"
      },
      process: {
        src: "/assets/images/ai-agents/customer-support/process.webp",
        alt: "Uploading company documentation, setting fallback escalation rules, and launching AI support",
        prompt: "3-step visual illustration: upload knowledge base docs, set human escalation thresholds, and embed across WhatsApp, Messenger, and web chat.",
        aspect: "4/3"
      },
      faq: {
        src: "/assets/images/ai-agents/customer-support/faq.webp",
        alt: "Hallucination-free AI guardrails and source attribution verification system",
        prompt: "Security graphic illustrating strict AI factual guardrails, zero hallucination checks, and exact knowledge document source citations.",
        aspect: "16/10"
      }
    },
    "sales-agent": {
      hero: {
        src: "/assets/images/ai-agents/sales-agent/hero.webp",
        alt: "Conversational AI sales agent presenting product catalog cards, size picker, and instant checkout",
        prompt: "Mobile phone screen displaying an interactive AI sales conversation. Bot shows rich product cards with images, size dropdowns, ৳ pricing, and a 'Buy via bKash / Cash on Delivery' button. Modern 3D illustration, electric blue and warm orange accents.",
        aspect: "16/10"
      },
      features: {
        src: "/assets/images/ai-agents/sales-agent/features.webp",
        alt: "Smart cross-selling recommendations and automated pricing quotation engine",
        prompt: "E-commerce sales dashboard showing AI cross-sell recommendations ('Customers also bought...'), automated discount triggers, and conversion rate graphs.",
        aspect: "16/10"
      },
      process: {
        src: "/assets/images/ai-agents/sales-agent/process.webp",
        alt: "Connecting product catalog, configuring sales logic, and activating 24/7 autonomous closing",
        prompt: "Step-by-step visual: syncing store inventory, setting payment methods (COD, bKash, SSLCommerz), and going live with conversational sales.",
        aspect: "4/3"
      },
      faq: {
        src: "/assets/images/ai-agents/sales-agent/faq.webp",
        alt: "Inventory synchronization and real-time stock availability validation system",
        prompt: "Real-time stock synchronization graphic showing store warehouse inventory syncing with live chat sessions to prevent overselling.",
        aspect: "16/10"
      }
    },
    "shopify-whatsapp": {
      hero: {
        src: "/assets/images/ai-agents/shopify-whatsapp/hero.webp",
        alt: "Shopify abandoned checkout triggering automated WhatsApp reminder with direct discount checkout button",
        prompt: "A smartphone displaying a WhatsApp notification: 'Apnar cart e item baki ache! Use code SAVE10 to complete order'. Includes product thumbnail, ৳ price, and a direct 'Complete Purchase' button syncing back to Shopify. 3D SaaS render, Shopify green and Jadubot blue accents.",
        aspect: "16/10"
      },
      features: {
        src: "/assets/images/ai-agents/shopify-whatsapp/features.webp",
        alt: "Shopify store metrics dashboard showing WhatsApp recovered carts and automated order tracking alerts",
        prompt: "Shopify analytics dashboard view showing recovered carts revenue in BDT ৳, automated fulfillment updates, and WhatsApp marketing ROI metrics.",
        aspect: "16/10"
      },
      process: {
        src: "/assets/images/ai-agents/shopify-whatsapp/process.webp",
        alt: "Installing Jadubot app on Shopify, connecting WhatsApp number, and turning on cart recovery",
        prompt: "Visual 3-step setup: install Shopify app from store, scan WhatsApp QR code, and toggle on abandoned cart automated workflow.",
        aspect: "4/3"
      },
      faq: {
        src: "/assets/images/ai-agents/shopify-whatsapp/faq.webp",
        alt: "Shopify Webhooks security and automated order fulfillment tracking status",
        prompt: "Technical flow showing Shopify webhook triggers (order created, order fulfilled, cart abandoned) securely passing to WhatsApp API in real-time.",
        aspect: "16/10"
      }
    },
    "woocommerce-whatsapp": {
      hero: {
        src: "/assets/images/ai-agents/woocommerce-whatsapp/hero.webp",
        alt: "WooCommerce WordPress store order confirmation and COD verification message on WhatsApp",
        prompt: "A modern phone mockup displaying a WhatsApp message from a WooCommerce store: 'Apnar order #4892 confirm hoyeche! Delivery within 48 hours'. Interactive buttons for 'Track Order' and 'Change Address'. 3D clean render, WooCommerce purple and Jadubot blue sky palette.",
        aspect: "16/10"
      },
      features: {
        src: "/assets/images/ai-agents/woocommerce-whatsapp/features.webp",
        alt: "WordPress WooCommerce plugin panel syncing customer orders with automated WhatsApp notifications",
        prompt: "WordPress wp-admin dashboard screenshot mockup showing Jadubot WooCommerce plugin settings, automated order alerts, and COD verification logs.",
        aspect: "16/10"
      },
      process: {
        src: "/assets/images/ai-agents/woocommerce-whatsapp/process.webp",
        alt: "Uploading WooCommerce plugin, linking REST API credentials, and launching WhatsApp triggers",
        prompt: "3-step visual workflow: upload WordPress plugin zip, generate REST API keys, and test live WhatsApp order confirmation alerts.",
        aspect: "4/3"
      },
      faq: {
        src: "/assets/images/ai-agents/woocommerce-whatsapp/faq.webp",
        alt: "WooCommerce REST API reliability, speed, and shared hosting compatibility",
        prompt: "Reliability graphic highlighting asynchronous webhook processing, low server CPU overhead, and 100% WordPress version compatibility.",
        aspect: "16/10"
      }
    }
  },
  industry: {
    "ecommerce-chatbot-automation": {
      hero: {
        src: "/assets/images/industry/ecommerce-chatbot-automation/hero.webp",
        alt: "E-commerce online store omnichannel chat bot driving 24/7 product sales and cart recovery",
        prompt: "Modern 3D illustration of an e-commerce shopping experience: shopping bags, parcel box, phone showing active WhatsApp order confirmation with price in BDT ৳, bright blue sky palette, soft shadows.",
        aspect: "16/10"
      },
      showcase1: {
        src: "/assets/images/industry/ecommerce-chatbot-automation/showcase1.webp",
        alt: "Automated WhatsApp cart abandonment recovery workflow with one-click checkout link",
        prompt: "Visual of an abandoned online shopping cart transformed into a proactive WhatsApp message with a 10% coupon code and instant checkout button.",
        aspect: "16/10"
      },
      showcase2: {
        src: "/assets/images/industry/ecommerce-chatbot-automation/showcase2.webp",
        alt: "Cash-on-Delivery verification preventing fake orders and reducing courier return charges",
        prompt: "COD parcel verification mockup: customer confirms address with one tap on phone, courier van (Pathao/Steadfast style) ready for dispatch.",
        aspect: "16/10"
      },
      roi: {
        src: "/assets/images/industry/ecommerce-chatbot-automation/roi.webp",
        alt: "Revenue ROI dashboard showing recovered e-commerce checkouts and reduced return costs",
        prompt: "Financial growth dashboard showing 3.4x ROI chart, recovered monthly sales in ৳, and 45% reduction in courier return-to-origin fees.",
        aspect: "16/10"
      },
      workflow: {
        src: "/assets/images/industry/ecommerce-chatbot-automation/workflow.webp",
        alt: "End-to-end shopping workflow from social media ad click to automated delivery confirmation",
        prompt: "Four-step automated e-commerce pipeline: ad click -> instant product card -> in-chat checkout -> automated dispatch notification.",
        aspect: "16/10"
      },
      usecases: {
        src: "/assets/images/industry/ecommerce-chatbot-automation/usecases.webp",
        alt: "Interactive conversational simulation of size advice, stock lookup, and order booking",
        prompt: "Clean mobile chat interface showing customer asking about shoe size in Bangla/English and bot providing exact measurements with buy button.",
        aspect: "16/10"
      },
      faq: {
        src: "/assets/images/industry/ecommerce-chatbot-automation/faq.webp",
        alt: "E-commerce platform integrations with Shopify, WooCommerce, and local couriers",
        prompt: "Integration hub diagram connecting Shopify, WooCommerce, Pathao, Steadfast, and Meta APIs into unified Jadubot architecture.",
        aspect: "16/10"
      }
    },
    "retail-b2c-ecommerce-chatbot-automation": {
      hero: {
        src: "/assets/images/industry/retail-b2c-ecommerce-chatbot-automation/hero.webp",
        alt: "Retail store omnichannel customer engagement with store locator and in-store pickup booking",
        prompt: "Modern retail store scene with storefront, clothing rack, customer receiving a WhatsApp notification with loyalty discount and store branch hours in Dhaka.",
        aspect: "16/10"
      },
      showcase1: {
        src: "/assets/images/industry/retail-b2c-ecommerce-chatbot-automation/showcase1.webp",
        alt: "Retail store inventory lookup and branch stock availability checker via WhatsApp",
        prompt: "Customer chatting with retail bot asking 'Is size M available at Banani branch?', bot replies with exact branch stock and reservation option.",
        aspect: "16/10"
      },
      showcase2: {
        src: "/assets/images/industry/retail-b2c-ecommerce-chatbot-automation/showcase2.webp",
        alt: "Automated retail loyalty points rewards and seasonal sales broadcast alerts",
        prompt: "Retail loyalty card on phone with earned points badge, discount barcode, and VIP Eid sale announcement message.",
        aspect: "16/10"
      },
      roi: {
        src: "/assets/images/industry/retail-b2c-ecommerce-chatbot-automation/roi.webp",
        alt: "Retail omnichannel sales attribution and foot traffic conversion analytics",
        prompt: "Retail analytics chart showing in-store pickup orders, online-to-offline customer conversions, and 28% increase in repeat store visits.",
        aspect: "16/10"
      },
      workflow: {
        src: "/assets/images/industry/retail-b2c-ecommerce-chatbot-automation/workflow.webp",
        alt: "Step-by-step retail workflow connecting in-store POS with digital customer chats",
        prompt: "Diagram showing POS barcode scanning syncing with WhatsApp digital receipts and post-purchase review requests.",
        aspect: "16/10"
      },
      usecases: {
        src: "/assets/images/industry/retail-b2c-ecommerce-chatbot-automation/usecases.webp",
        alt: "Retail customer service simulation resolving exchange policies and store directions",
        prompt: "Live chat screen showing retail exchange policy answer with Google Maps pin to nearest retail branch.",
        aspect: "16/10"
      },
      faq: {
        src: "/assets/images/industry/retail-b2c-ecommerce-chatbot-automation/faq.webp",
        alt: "Retail ERP and POS system integration security with Jadubot conversational AI",
        prompt: "Data architecture diagram linking retail ERP and multi-outlet inventory databases with secure cloud chatbot endpoints.",
        aspect: "16/10"
      }
    },
    "healthcare-chatbot-automation": {
      hero: {
        src: "/assets/images/industry/healthcare-chatbot-automation/hero.webp",
        alt: "Healthcare clinic appointment booking and doctor schedule availability via WhatsApp",
        prompt: "Clean modern clinic reception scene with medical stethoscope, doctor appointment calendar, and smartphone showing doctor consultation booking confirmed via chat. Bright blue and white palette.",
        aspect: "16/10"
      },
      showcase1: {
        src: "/assets/images/industry/healthcare-chatbot-automation/showcase1.webp",
        alt: "Automated doctor appointment scheduling and calendar reminder notifications",
        prompt: "Phone screen displaying available doctor appointment slots (morning/evening), patient selects 5:30 PM, receives instant SMS and WhatsApp confirmation.",
        aspect: "16/10"
      },
      showcase2: {
        src: "/assets/images/industry/healthcare-chatbot-automation/showcase2.webp",
        alt: "Diagnostic lab test report inquiry and automated PDF report delivery in chat",
        prompt: "Secure diagnostic lab flow: patient enters test registration number, AI bot securely delivers lab report PDF with download button.",
        aspect: "16/10"
      },
      roi: {
        src: "/assets/images/industry/healthcare-chatbot-automation/roi.webp",
        alt: "Clinic efficiency metrics showing reduced front desk call volume and zero missed appointments",
        prompt: "Healthcare operations dashboard showing 80% reduction in phone inquiries, 95% appointment attendance rate with automated reminders.",
        aspect: "16/10"
      },
      workflow: {
        src: "/assets/images/industry/healthcare-chatbot-automation/workflow.webp",
        alt: "Patient care journey from symptom inquiry to doctor appointment confirmation and follow-up",
        prompt: "Visual healthcare workflow: patient selects doctor specialty -> chooses calendar slot -> automated reminder -> post-visit feedback.",
        aspect: "16/10"
      },
      usecases: {
        src: "/assets/images/industry/healthcare-chatbot-automation/usecases.webp",
        alt: "Medical clinic chat simulation answering doctor visit hours and consultation fees",
        prompt: "Chat dialogue simulation of patient asking for doctor visiting hours in Dhaka and bot providing doctor fees and chamber serial number.",
        aspect: "16/10"
      },
      faq: {
        src: "/assets/images/industry/healthcare-chatbot-automation/faq.webp",
        alt: "Patient health data privacy, HIPAA principles, and hospital management software sync",
        prompt: "Healthcare privacy graphic showing encrypted patient data, confidentiality compliance, and secure hospital management integration.",
        aspect: "16/10"
      }
    },
    "real-estate-chatbot-automation": {
      hero: {
        src: "/assets/images/industry/real-estate-chatbot-automation/hero.webp",
        alt: "Real estate property sales agent qualifying apartment buyers and booking site visits",
        prompt: "Modern architectural apartment building with blueprint layout, phone showing 3BHK flat price in ৳ Lakh, floor plan download, and site visit booking confirmation.",
        aspect: "16/10"
      },
      showcase1: {
        src: "/assets/images/industry/real-estate-chatbot-automation/showcase1.webp",
        alt: "Instant property brochure and floor plan sharing based on buyer budget and location",
        prompt: "Buyer inputs location 'Gulshan/Dhanmondi' and budget, bot instantly generates matching apartment cards with virtual tour links.",
        aspect: "16/10"
      },
      showcase2: {
        src: "/assets/images/industry/real-estate-chatbot-automation/showcase2.webp",
        alt: "Automated property site visit scheduling directly into sales officer calendar",
        prompt: "Real estate site visit calendar widget: prospective buyer selects Friday 11:00 AM, receives location pin and sales officer contact.",
        aspect: "16/10"
      },
      roi: {
        src: "/assets/images/industry/real-estate-chatbot-automation/roi.webp",
        alt: "Real estate lead conversion metrics showing faster response time and qualified buyer ratio",
        prompt: "Real estate sales funnel dashboard showing 5x faster lead contact rate and 42% more verified site visits booked.",
        aspect: "16/10"
      },
      workflow: {
        src: "/assets/images/industry/real-estate-chatbot-automation/workflow.webp",
        alt: "Property sales lead lifecycle from Facebook ad to verified site visit and contract signing",
        prompt: "Pipeline diagram: Facebook ad lead form -> WhatsApp diagnostic chat -> floor plan send -> site visit schedule -> sales rep handover.",
        aspect: "16/10"
      },
      usecases: {
        src: "/assets/images/industry/real-estate-chatbot-automation/usecases.webp",
        alt: "Real estate chat simulation collecting budget, preferred location, and hand-over year",
        prompt: "Chat simulation with buyer asking about ready apartments in Mirpur/Uttara and bot filtering verified developer listings.",
        aspect: "16/10"
      },
      faq: {
        src: "/assets/images/industry/real-estate-chatbot-automation/faq.webp",
        alt: "CRM synchronization with real estate sales portals and lead distribution rules",
        prompt: "Real estate lead distribution graphic routing qualified apartment buyers to dedicated territory property consultants.",
        aspect: "16/10"
      }
    },
    "restaurant-chatbot-automation": {
      hero: {
        src: "/assets/images/industry/restaurant-chatbot-automation/hero.webp",
        alt: "Restaurant table reservation and automated food menu ordering via WhatsApp chat",
        prompt: "Cozy modern restaurant dining table with chef dishes, digital menu QR code, smartphone showing table reservation confirmed for 4 guests with time and date. Warm accents with Jadubot electric blue.",
        aspect: "16/10"
      },
      showcase1: {
        src: "/assets/images/industry/restaurant-chatbot-automation/showcase1.webp",
        alt: "Digital food menu browsing and direct delivery order placement in chat",
        prompt: "Interactive restaurant menu in chat: customer browses platters, burgers, and drinks with ৳ prices, selects quantity, and places order.",
        aspect: "16/10"
      },
      showcase2: {
        src: "/assets/images/industry/restaurant-chatbot-automation/showcase2.webp",
        alt: "Instant table reservation booking with guest count and party celebration notes",
        prompt: "Reservation confirmation card: Table for 6 reserved for tonight 8:00 PM, outdoor seating selected, instant manager confirmation.",
        aspect: "16/10"
      },
      roi: {
        src: "/assets/images/industry/restaurant-chatbot-automation/roi.webp",
        alt: "Restaurant revenue dashboard comparing direct chat orders against third-party delivery commissions",
        prompt: "Restaurant financial chart showing 25% savings by routing delivery orders directly through WhatsApp instead of high-commission delivery apps.",
        aspect: "16/10"
      },
      workflow: {
        src: "/assets/images/industry/restaurant-chatbot-automation/workflow.webp",
        alt: "Restaurant order lifecycle from table QR code scan to kitchen KDS and delivery",
        prompt: "Four-step diagram: customer scans menu -> bot collects order -> kitchen printer alerts -> rider dispatched.",
        aspect: "16/10"
      },
      usecases: {
        src: "/assets/images/industry/restaurant-chatbot-automation/usecases.webp",
        alt: "Food lover asking for today's lunch deals and vegetarian options in chat",
        prompt: "Dialogue simulation of diner asking 'Ki ki set menu ache ajke?' and bot presenting 3 set menu combos with photos and bKash payment.",
        aspect: "16/10"
      },
      faq: {
        src: "/assets/images/industry/restaurant-chatbot-automation/faq.webp",
        alt: "Restaurant POS and thermal receipt kitchen printer integration architecture",
        prompt: "Hardware integration diagram showing Jadubot chat orders auto-printing to kitchen thermal receipt printers in seconds.",
        aspect: "16/10"
      }
    },
    "finance-chatbot-automation": {
      hero: {
        src: "/assets/images/industry/finance-chatbot-automation/hero.webp",
        alt: "Financial services loan calculator and instant credit eligibility assessment in chat",
        prompt: "Financial growth scene with investment charts, credit card shield, tablet showing EMI calculator with monthly installments in ৳, safe banking badges.",
        aspect: "16/10"
      },
      showcase1: {
        src: "/assets/images/industry/finance-chatbot-automation/showcase1.webp",
        alt: "Interactive loan EMI calculator and credit card eligibility screener",
        prompt: "Chat mockup with loan slider: user inputs ৳ 5,00,000 loan amount, bot calculates exact monthly EMI and required income criteria.",
        aspect: "16/10"
      },
      showcase2: {
        src: "/assets/images/industry/finance-chatbot-automation/showcase2.webp",
        alt: "Secure lead capture for mutual funds, insurance policies, and SME business loans",
        prompt: "SME business owner answering 3 diagnostic revenue questions to receive personalized working capital loan options.",
        aspect: "16/10"
      },
      roi: {
        src: "/assets/images/industry/finance-chatbot-automation/roi.webp",
        alt: "Financial institution loan acquisition cost reduction and verification speed",
        prompt: "Banking metrics dashboard showing 60% lower cost per acquired loan customer and 3x faster initial document pre-qualification.",
        aspect: "16/10"
      },
      workflow: {
        src: "/assets/images/industry/finance-chatbot-automation/workflow.webp",
        alt: "Financial loan application lifecycle from initial inquiry to credit advisor meeting",
        prompt: "Process pipeline: rate inquiry -> eligibility calculation -> basic KYC upload -> branch relationship officer dispatch.",
        aspect: "16/10"
      },
      usecases: {
        src: "/assets/images/industry/finance-chatbot-automation/usecases.webp",
        alt: "Customer checking credit card annual fee waiver requirements and reward points",
        prompt: "Customer conversation checking card fees, lounge access, and interest rates answered with verified bank policy details.",
        aspect: "16/10"
      },
      faq: {
        src: "/assets/images/industry/finance-chatbot-automation/faq.webp",
        alt: "Bank-grade data encryption, ISO standards, and customer financial confidentiality",
        prompt: "Financial cybersecurity diagram illustrating 256-bit encryption, tokenized customer data, and strict banking compliance.",
        aspect: "16/10"
      }
    },
    "education-chatbot-automation": {
      hero: {
        src: "/assets/images/industry/education-chatbot-automation/hero.webp",
        alt: "Educational institute course admissions bot answering tuition fees and enrollment deadlines",
        prompt: "University campus scene with graduation cap, course syllabus books, smartphone displaying admission fee breakdown in ৳, scholarship criteria, and application link.",
        aspect: "16/10"
      },
      showcase1: {
        src: "/assets/images/industry/education-chatbot-automation/showcase1.webp",
        alt: "Automated student lead qualification by batch, department, and semester fees",
        prompt: "Prospective student selects desired diploma/degree, bot provides semester schedule, syllabus PDF, and registration form.",
        aspect: "16/10"
      },
      showcase2: {
        src: "/assets/images/industry/education-chatbot-automation/showcase2.webp",
        alt: "Campus tour scheduling and scholarship eligibility consultation in chat",
        prompt: "Student booking an on-campus counseling session with an academic advisor via interactive chat calendar.",
        aspect: "16/10"
      },
      roi: {
        src: "/assets/images/industry/education-chatbot-automation/roi.webp",
        alt: "Educational admissions conversion increase during peak admission seasons",
        prompt: "Admissions dashboard showing 45% increase in completed student registrations and zero dropped student inquiries during peak admission months.",
        aspect: "16/10"
      },
      workflow: {
        src: "/assets/images/industry/education-chatbot-automation/workflow.webp",
        alt: "Student enrollment journey from program inquiry to seat booking confirmation",
        prompt: "Pipeline diagram: course discovery -> syllabus download -> counselor call booking -> admission fee confirmation.",
        aspect: "16/10"
      },
      usecases: {
        src: "/assets/images/industry/education-chatbot-automation/usecases.webp",
        alt: "Student asking admission requirements and class schedule in English and Bangla",
        prompt: "Chat simulation: student asking 'Next batch kobe shuru hobe?', bot providing batch dates, class timings, and payment options.",
        aspect: "16/10"
      },
      faq: {
        src: "/assets/images/industry/education-chatbot-automation/faq.webp",
        alt: "Integration with student information systems (SIS) and learning management platforms",
        prompt: "Education technology diagram connecting Jadubot with student portals (Moodle/Canvas) and admissions databases.",
        aspect: "16/10"
      }
    },
    "saas-chatbot-automation": {
      hero: {
        src: "/assets/images/industry/saas-chatbot-automation/hero.webp",
        alt: "SaaS software product tour, trial signup, and automated demo scheduling assistant",
        prompt: "Modern tech workspace with sleek software dashboard on monitor, floating feature badges, and smartphone scheduling a live product demo directly into Calendly.",
        aspect: "16/10"
      },
      showcase1: {
        src: "/assets/images/industry/saas-chatbot-automation/showcase1.webp",
        alt: "Product tier comparison and custom enterprise pricing calculator",
        prompt: "Interactive pricing tier card in chat comparing Starter, Growth, and Enterprise plans with user seat calculations.",
        aspect: "16/10"
      },
      showcase2: {
        src: "/assets/images/industry/saas-chatbot-automation/showcase2.webp",
        alt: "Autonomous technical documentation lookup and API error troubleshooting",
        prompt: "Developer asks for API webhook payload sample, bot provides formatted JSON snippet and link to documentation.",
        aspect: "16/10"
      },
      roi: {
        src: "/assets/images/industry/saas-chatbot-automation/roi.webp",
        alt: "SaaS pipeline conversion metrics showing demo show-up rate and CAC reduction",
        prompt: "SaaS metrics graph showing 68% increase in booked sales demos and 40% reduction in customer acquisition cost (CAC).",
        aspect: "16/10"
      },
      workflow: {
        src: "/assets/images/industry/saas-chatbot-automation/workflow.webp",
        alt: "SaaS buyer journey from pricing page visit to product trial activation",
        prompt: "Pipeline diagram: pricing page inquiry -> intent qualification -> automated demo scheduling -> trial onboarding sequence.",
        aspect: "16/10"
      },
      usecases: {
        src: "/assets/images/industry/saas-chatbot-automation/usecases.webp",
        alt: "Prospective customer inquiring about API limits and custom integration options",
        prompt: "Chat simulation answering questions about monthly message volume, REST webhooks, and team member permissions.",
        aspect: "16/10"
      },
      faq: {
        src: "/assets/images/industry/saas-chatbot-automation/faq.webp",
        alt: "SaaS security compliance, single sign-on (SSO), and role-based permissions",
        prompt: "Security architecture graphic showing OAuth 2.0, enterprise single sign-on (SSO), and SOC2 compliance standards.",
        aspect: "16/10"
      }
    },
    "logistics-chatbot-automation": {
      hero: {
        src: "/assets/images/industry/logistics-chatbot-automation/hero.webp",
        alt: "Logistics parcel delivery tracking and courier status notification on WhatsApp",
        prompt: "Logistics scene with delivery courier motorbike (Pathao/Steadfast delivery box style), parcel tracking map route, phone showing live parcel location 'Out for Delivery' with rider phone number. Blue and white SaaS palette.",
        aspect: "16/10"
      },
      showcase1: {
        src: "/assets/images/industry/logistics-chatbot-automation/showcase1.webp",
        alt: "Instant parcel tracking by tracking ID and estimated delivery time calculation",
        prompt: "User inputs courier consignment number, bot replies instantly with current hub location, delivery rider name, and estimated delivery hour.",
        aspect: "16/10"
      },
      showcase2: {
        src: "/assets/images/industry/logistics-chatbot-automation/showcase2.webp",
        alt: "Automated delivery address update and reschedule delivery request handling",
        prompt: "Customer requests address change or reschedules delivery date via one-tap interactive buttons in WhatsApp chat.",
        aspect: "16/10"
      },
      roi: {
        src: "/assets/images/industry/logistics-chatbot-automation/roi.webp",
        alt: "Logistics call center deflection metrics and first-attempt delivery success rate",
        prompt: "Courier operations dashboard showing 85% drop in WISMO ('Where is my order?') support calls and 92% first-attempt delivery success.",
        aspect: "16/10"
      },
      workflow: {
        src: "/assets/images/industry/logistics-chatbot-automation/workflow.webp",
        alt: "Courier parcel tracking lifecycle from warehouse dispatch to recipient doorstep",
        prompt: "Four-step diagram: parcel scanned at hub -> automated WhatsApp tracking link sent -> out-for-delivery alert -> delivery OTP verification.",
        aspect: "16/10"
      },
      usecases: {
        src: "/assets/images/industry/logistics-chatbot-automation/usecases.webp",
        alt: "Recipient checking delivery rider phone number and package cash collection amount",
        prompt: "Chat dialogue simulation: customer asks 'Amar parcel ta kothay ache?', bot provides exact courier rider contact and ৳ COD payable.",
        aspect: "16/10"
      },
      faq: {
        src: "/assets/images/industry/logistics-chatbot-automation/faq.webp",
        alt: "Courier API webhooks integration with national and international shipping carriers",
        prompt: "Logistics API network diagram syncing parcel status updates between merchant store, courier fleet, and customer WhatsApp.",
        aspect: "16/10"
      }
    },
    "agency-chatbot-automation": {
      hero: {
        src: "/assets/images/industry/agency-chatbot-automation/hero.webp",
        alt: "Digital marketing agency multi-client chatbot management portal and white-label dashboard",
        prompt: "Creative marketing agency studio with laptops, client performance charts, tablet displaying white-label agency dashboard managing 20+ client chatbot accounts under one roof.",
        aspect: "16/10"
      },
      showcase1: {
        src: "/assets/images/industry/agency-chatbot-automation/showcase1.webp",
        alt: "Multi-client workspace isolation and role-based permissions for agency staff",
        prompt: "Agency client workspace switcher showing client accounts (E-commerce, Clinic, Real Estate) with individual analytics and team access.",
        aspect: "16/10"
      },
      showcase2: {
        src: "/assets/images/industry/agency-chatbot-automation/showcase2.webp",
        alt: "White-label client reporting with automated monthly lead and revenue generation statistics",
        prompt: "Exportable PDF report preview with agency branding showing client ROI, leads generated, and chat volume processed.",
        aspect: "16/10"
      },
      roi: {
        src: "/assets/images/industry/agency-chatbot-automation/roi.webp",
        alt: "Agency recurring retainer revenue growth through conversational marketing retainers",
        prompt: "Agency revenue growth graph showing recurring monthly retainers added per client and 90% client retention rate.",
        aspect: "16/10"
      },
      workflow: {
        src: "/assets/images/industry/agency-chatbot-automation/workflow.webp",
        alt: "Agency client onboarding workflow from contract kickoff to live bot handover",
        prompt: "Agency pipeline: client brief intake -> pre-built template clone -> brand knowledge base upload -> client portal invite.",
        aspect: "16/10"
      },
      usecases: {
        src: "/assets/images/industry/agency-chatbot-automation/usecases.webp",
        alt: "Agency account manager reviewing client message volumes and lead delivery webhooks",
        prompt: "Chat simulation of agency pitch answering questions on sub-account management, custom domain branding, and reseller margins.",
        aspect: "16/10"
      },
      faq: {
        src: "/assets/images/industry/agency-chatbot-automation/faq.webp",
        alt: "Agency white-label custom domain setup, reseller margins, and billing management",
        prompt: "Technical architecture of agency multi-tenant infrastructure, custom CNAME domain mapping, and client workspace data isolation.",
        aspect: "16/10"
      }
    }
  }
};

export function getSectionImage(
  routeGroup: "platform" | "ai-agents" | "industry",
  slug: string,
  sectionId: string
): SectionImageConfig | undefined {
  return SECTION_IMAGES[routeGroup]?.[slug]?.[sectionId];
}
