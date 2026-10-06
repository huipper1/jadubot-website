import type { AgentData } from "@/types/ai-agent";

export const aiAgentData: AgentData[] = [
  {
    slug: "lead-qualification",
    name: "Lead Qualification AI Agent",
    category: "role",
    navTitle: "Lead Qualification AI Agent",
    navDescription: "Qualify, score, and route leads on WhatsApp & social 24/7.",
    iconName: "UserCheck",
    metaTitle: "Lead Qualification AI Agent | Jadubot",
    metaDescription:
      "Automate lead qualification, scoring, and routing across WhatsApp, Messenger, and Instagram 24/7 with Jadubot's intelligent Lead Qualification AI Agent.",
    badge: "Specialized AI Role: Lead Qualification",
    heroTitle: "Qualify, Score & Route Inbound Leads 24/7",
    heroHighlight: "Qualify, Score & Route",
    heroDescription:
      "Deploy an AI agent to ask diagnostic questions, score buyer intent, and route qualified prospects directly to closers.",
    heroStats: [
      { label: "Lead Qualification Speed", value: "< 60 sec" },
      { label: "Sales Team Time Saved", value: "70%" },
      { label: "Booking Conversion Rate", value: "+42%" }
    ],
    heroVisualType: "lead-qualification",
    featuresSectionTitle: "Precision Lead Qualification at Unprecedented Scale",
    featuresSectionSubtitle:
      "Identify high-intent buyers instantly and book meetings directly into your sales reps' calendars.",
    features: [
      {
        title: "Dynamic Inbound Diagnostics",
        description: "Engage prospects in natural dialogue to uncover project requirements, budget, and purchasing timeline.",
        badge: "BANT / MEDDIC Scoring",
        iconName: "Filter",
        bulletPoints: [
          "Adaptive question flows that adjust based on prospect replies",
          "Calculates dynamic lead quality scores in real time",
          "Labels contacts as Hot, Warm, or Cold automatically"
        ]
      },
      {
        title: "Automated Meeting Scheduling",
        description: "Allow qualified prospects to book calendar slots directly inside WhatsApp or Messenger.",
        badge: "Instant Booking",
        iconName: "Calendar",
        bulletPoints: [
          "Direct integration with Google Calendar, Calendly, and CRM schedulers",
          "Automated calendar invitations and WhatsApp reminder sequences",
          "Drastically reduces meeting no-show rates"
        ]
      },
      {
        title: "Intelligent Rep Routing",
        description: "Route VIP enterprise leads immediately to specific closers based on deal size and territory.",
        badge: "Smart Dispatch",
        iconName: "GitMerge",
        bulletPoints: [
          "Automated Slack, WhatsApp, or email alerts to assigned sales reps",
          "Transfers entire qualification summary and transcripts to the CRM",
          "Zero lead slippage or delayed follow-up"
        ]
      },
      {
        title: "Instant CRM Sync",
        description: "Extract verified phone numbers, emails, and company details directly into your CRM pipeline.",
        badge: "Zero Manual Entry",
        iconName: "Database",
        bulletPoints: [
          "Real-time contact creation in HubSpot, Salesforce, or Google Sheets",
          "Custom field mapping for unique business parameters",
          "Clean, structured data ready for sales outbound campaigns"
        ]
      },
      {
        title: "Omnichannel Inbound Handling",
        description: "Qualify leads from Facebook, Instagram, websites, and WhatsApp campaigns under one unified brain.",
        badge: "Omnichannel Pipeline",
        iconName: "Share2",
        bulletPoints: [
          "Consistent qualification standards across all digital touchpoints",
          "Recognizes returning prospects across different communication channels",
          "Tracks original marketing source attribution"
        ]
      },
      {
        title: "Lead Re-engagement Sequences",
        description: "Automatically re-engage prospects who went cold midway with polite, value-driven follow-up messages.",
        badge: "Pipeline Recovery",
        iconName: "RefreshCw",
        bulletPoints: [
          "Timed reminders sent after 2 hours, 24 hours, or 3 days",
          "Personalized prompts addressing specific stated customer needs",
          "Revives up to 28% of abandoned conversations"
        ]
      }
    ],
    processTitle: "How to Deploy the Lead Qualification Agent",
    processSubtitle: "Go from manual inbox sorting to fully automated lead triage in 3 easy steps.",
    steps: [
      {
        step: "01",
        title: "Define Qualification Criteria",
        description:
          "Specify the key questions your agent needs to ask — such as budget, timeline, team size, and location."
      },
      {
        step: "02",
        title: "Connect Calendars & CRM",
        description:
          "Link your sales team's booking links and CRM endpoints for automatic data syncing and meeting creation."
      },
      {
        step: "03",
        title: "Activate & Route Leads",
        description:
          "Turn on the agent across your messaging channels and start receiving pre-qualified appointments on autopilot."
      }
    ],
    faqs: [
      {
        question: "How does the AI determine if a lead is qualified?",
        answer:
          "You define your qualification rules (such as minimum budget, purchase timeline, or business type). The AI agent asks conversational questions, evaluates the answers against your criteria, and assigns an intent score."
      },
      {
        question: "Can the agent book meetings directly on Google Calendar or Calendly?",
        answer:
          "Yes. Once a prospect meets your qualification threshold, the agent presents real-time available time slots or sends a direct scheduling link to book a meeting instantly."
      },
      {
        question: "What happens if a prospect asks a technical question instead of answering?",
        answer:
          "The agent uses its integrated knowledge base to answer the prospect's question thoroughly first, and then smoothly steers the conversation back to the qualification step."
      },
      {
        question: "Can I review lead transcripts before meeting the customer?",
        answer:
          "Yes. A complete executive summary and full verbatim chat transcript are attached to the lead record in your Shared Inbox and CRM before every meeting."
      }
    ]
  },
  {
    slug: "customer-support",
    name: "Customer Support AI Agent",
    category: "role",
    navTitle: "Customer Support AI Agent",
    navDescription: "Knowledge-based replies with instant human handover.",
    iconName: "Headphones",
    metaTitle: "Customer Support AI Agent | Jadubot",
    metaDescription:
      "Deliver instant, accurate, knowledge-powered support across WhatsApp, Messenger, Instagram, and web chat with automatic human handoff using Jadubot.",
    badge: "Specialized AI Role: Customer Support",
    heroTitle: "Knowledge-Powered Support with Instant Human Handover",
    heroHighlight: "Knowledge-Powered Support",
    heroDescription:
      "Deliver empathetic, accurate 24/7 customer service. Train your agent on docs and FAQs to resolve up to 80% of support tickets.",
    heroStats: [
      { label: "Ticket Resolution Rate", value: "82%" },
      { label: "Average First Response", value: "< 3 sec" },
      { label: "Customer Satisfaction", value: "96%" }
    ],
    heroVisualType: "customer-support",
    featuresSectionTitle: "Enterprise Support Automation with a Human Touch",
    featuresSectionSubtitle:
      "Resolve customer inquiries instantly without frustrating wait times or rigid robotic menus.",
    features: [
      {
        title: "Knowledge Base Grounding",
        description: "Train support agents on official articles, return policies, and manuals for 100% truthful answers.",
        badge: "Zero Hallucinations",
        iconName: "BookOpen",
        bulletPoints: [
          "Strict grounding protocols ensuring the AI never invents facts",
          "Continuous real-time sync with updated documentation URLs",
          "Includes direct source links and references in responses"
        ]
      },
      {
        title: "Intelligent Human Escalation",
        description: "Detect frustrated sentiment or explicit human requests to transfer chat immediately to available reps.",
        badge: "Smart Handoff",
        iconName: "UserCheck",
        bulletPoints: [
          "Sentiment analysis detects angry or dissatisfied language immediately",
          "Transfers chat to on-duty team members with an internal summary",
          "Bot pauses automatically so the customer talks directly with your human agent"
        ]
      },
      {
        title: "Real-time Order Status",
        description: "Query external APIs for tracking numbers, warranty validity, and invoice records using phone numbers.",
        badge: "API-Driven Actions",
        iconName: "Search",
        bulletPoints: [
          "Live database query for shipping carriers and package milestones",
          "Verification of customer identity before sharing private order records",
          "Automated generation of return labels and refund tickets"
        ]
      },
      {
        title: "Multilingual Customer Service",
        description: "Understand and reply in over 50 languages naturally, ensuring regional and international accessibility.",
        badge: "Global Language Support",
        iconName: "Globe",
        bulletPoints: [
          "Automatic language detection from the customer's first sentence",
          "Maintains consistent brand voice and accurate terminology in any language",
          "Empowers single-language support teams to serve global customers"
        ]
      },
      {
        title: "Collaborative Shared Inbox",
        description: "View customer history, apply internal notes, and resume bot automation with one click.",
        badge: "Agent Productivity",
        iconName: "Inbox",
        bulletPoints: [
          "Private team mentions and internal commentary inside active threads",
          "Canned response templates and AI-powered reply drafting",
          "Full conversation timeline across all messaging channels"
        ]
      },
      {
        title: "Support Deflection Analytics",
        description: "Track trending customer questions, unresolved issues, and bot resolution rates with actionable insights.",
        badge: "Continuous Improvement",
        iconName: "BarChart3",
        bulletPoints: [
          "Identifies content gaps where knowledge base documentation is missing",
          "Tracks CSAT scores and post-conversation resolution ratings",
          "Exportable CSV reports for weekly and monthly team reviews"
        ]
      }
    ],
    processTitle: "3 Steps to Deploy Your Customer Support Agent",
    processSubtitle:
      "Equip your team with an AI support agent that learns your business instantly.",
    steps: [
      {
        step: "01",
        title: "Upload Your Knowledge Base",
        description:
          "Provide your FAQ links, policy documents, and product manuals to establish the agent's verified source of truth."
      },
      {
        step: "02",
        title: "Configure Escalation Rules",
        description:
          "Define which keywords, sentiment triggers, and account types require immediate handoff to human support representatives."
      },
      {
        step: "03",
        title: "Launch Across All Channels",
        description:
          "Turn on support automation on WhatsApp, Facebook, Instagram, and web chat to provide immediate 24/7 customer relief."
      }
    ],
    faqs: [
      {
        question: "Can the Support AI Agent make mistakes or invent fake answers?",
        answer:
          "Jadubot uses strict retrieval-augmented grounding (RAG). The agent is instructed to only answer based on your verified business knowledge base. If it cannot find the answer in your documents, it gracefully offers to connect the user with a human agent."
      },
      {
        question: "How does human agent handoff work in practice?",
        answer:
          "When a customer asks for a human or has a complex issue, the agent flags the conversation in your Shared Inbox, sends a notification to your team, and pauses itself so your human rep can take over instantly without losing context."
      },
      {
        question: "Can the agent check real-time order tracking from our database?",
        answer:
          "Yes. By connecting your store API or webhook, the agent can request an order ID or phone number and query live shipping and fulfillment status."
      },
      {
        question: "Can we review what the agent answered?",
        answer:
          "Yes. Every conversation is logged in the Shared Inbox in real time. You can review all interactions, inspect what sources the AI used, and jump in at any time."
      }
    ]
  },
  {
    slug: "sales-agent",
    name: "Sales AI Agent",
    category: "role",
    navTitle: "Sales AI Agent",
    navDescription: "Product photos, catalogs, pricing, order taking & closing.",
    iconName: "ShoppingCart",
    metaTitle: "AI Sales Agent | Jadubot",
    metaDescription:
      "Turn messaging conversations into completed orders with product photos, interactive catalogs, pricing guidance, and 24/7 automated closing using Jadubot.",
    badge: "Specialized AI Role: Sales Agent",
    heroTitle: "Display Catalogs & Close Orders Automatically",
    heroHighlight: "Close Orders Automatically",
    heroDescription:
      "Turn chat into a 24/7 storefront. Showcase catalogs, recommend variants, collect shipping details, and process orders on autopilot.",
    heroStats: [
      { label: "Conversion Lift", value: "3.2x" },
      { label: "Checkout Completion", value: "88%" },
      { label: "Order Processing Time", value: "Instant" }
    ],
    heroVisualType: "sales-agent",
    featuresSectionTitle: "Conversational Commerce That Actually Closes Deals",
    featuresSectionSubtitle:
      "Guide prospective buyers from initial curiosity to confirmed order in a few frictionless chat messages.",
    features: [
      {
        title: "In-Chat Product Carousels",
        description: "Showcase photos, pricing, sizing, color variants, and availability inside WhatsApp, Messenger, and Instagram.",
        badge: "Visual Selling",
        iconName: "ShoppingBag",
        bulletPoints: [
          "Interactive horizontal image carousels with price tags",
          "Real-time stock level verification from your inventory database",
          "One-tap 'Add to Cart' or 'Buy Now' action buttons"
        ]
      },
      {
        title: "Personalized Recommendations",
        description: "Understand style choices, budget ranges, and needs to recommend the most relevant matching items.",
        badge: "Smart Cross-Sell",
        iconName: "ShoppingBag",
        bulletPoints: [
          "Intelligent upsell and cross-sell suggestions based on selected items",
          "Answers complex comparison questions (e.g., 'What is the difference between Model A and Model B?')",
          "Increases average order value (AOV) by up to 24%"
        ]
      },
      {
        title: "In-Chat Order Taking",
        description: "Collect delivery addresses, phone numbers, and special notes without sending buyers to external websites.",
        badge: "Zero Friction",
        iconName: "Truck",
        bulletPoints: [
          "Structured conversational address forms with validation",
          "Calculates shipping fees based on customer location",
          "Generates instantaneous order summary receipts"
        ]
      },
      {
        title: "Flexible Payment Checkout",
        description: "Support Cash on Delivery (COD), digital payment links, and bank transfers directly in chat.",
        badge: "Instant Checkout",
        iconName: "CreditCard",
        bulletPoints: [
          "Generates secure one-click digital checkout links",
          "Automated Cash on Delivery confirmation with verification safeguards",
          "Instant receipt and order invoice dispatch"
        ]
      },
      {
        title: "Automated Checkout Follow-ups",
        description: "Follow up with buyers who browsed products or paused before finalizing their conversational order.",
        badge: "Cart Recovery",
        iconName: "RotateCcw",
        bulletPoints: [
          "Triggers timely reminder messages with saved cart contents",
          "Offers time-sensitive discount codes to incentivize completion",
          "Recovers up to 35% of unfinished conversational checkouts"
        ]
      },
      {
        title: "High-Value Deal Escalation",
        description: "Route bulk order inquiries and custom wholesale quotes directly to your senior sales team.",
        badge: "Enterprise Routing",
        iconName: "TrendingUp",
        bulletPoints: [
          "Flags high-ticket wholesale leads in the Shared Inbox",
          "Sends real-time push alerts to account executives",
          "Preserves full product selection and inquiry notes"
        ]
      }
    ],
    processTitle: "3 Steps to Put Your Sales on Autopilot",
    processSubtitle: "Connect your product catalog and start closing orders directly inside chat.",
    steps: [
      {
        step: "01",
        title: "Sync Product Catalog",
        description:
          "Import your products, photos, descriptions, and pricing from Shopify, WooCommerce, or our built-in catalog manager."
      },
      {
        step: "02",
        title: "Set Pricing & Delivery Rules",
        description:
          "Define your shipping fees, delivery zones, discount voucher codes, and preferred payment gateways."
      },
      {
        step: "03",
        title: "Let the AI Sell 24/7",
        description:
          "Your Sales Agent engages customers instantly on social media, answers questions, and records orders into your system."
      }
    ],
    faqs: [
      {
        question: "Can the Sales Agent display product photos inside WhatsApp and Messenger?",
        answer:
          "Yes. Jadubot sends rich image cards and multi-item carousels with product titles, prices, descriptions, and direct purchase buttons directly within the chat window."
      },
      {
        question: "Does the Sales Agent support Cash on Delivery (COD)?",
        answer:
          "Yes. Customers can select Cash on Delivery, confirm their delivery address and phone number, and complete their order without leaving the conversation."
      },
      {
        question: "How does the agent know if an item is out of stock?",
        answer:
          "When connected to your Shopify or WooCommerce store, Jadubot checks stock levels in real time and automatically alerts customers if an item or variant is unavailable."
      },
      {
        question: "Can human sales reps jump in during an active sale?",
        answer:
          "Yes. Sales reps can view any active conversation in the Shared Inbox, send messages directly to the customer, and resume the bot whenever they are finished."
      }
    ]
  },
  {
    slug: "shopify-whatsapp",
    name: "Shopify WhatsApp AI Agent",
    category: "commerce",
    navTitle: "Shopify AI Agent",
    navDescription: "WhatsApp sales, abandoned cart recovery & order automation for Shopify.",
    iconName: "ShoppingBag",
    metaTitle: "Shopify WhatsApp Automation & AI Sales Agent | Jadubot",
    metaDescription:
      "Connect Shopify to WhatsApp with Jadubot. Recover abandoned checkouts, send automated order and delivery notifications, and sell products 24/7 on WhatsApp.",
    badge: "Commerce Integration: Shopify + WhatsApp",
    heroTitle: "Turn Shopify Checkouts into WhatsApp Sales",
    heroHighlight: "Shopify WhatsApp Sales",
    heroDescription:
      "Connect Shopify to WhatsApp. Recover abandoned checkouts, send order tracking alerts, and let AI answer customer inquiries 24/7.",
    heroStats: [
      { label: "Cart Recovery Rate", value: "+28%" },
      { label: "Notification Open Rate", value: "98%" },
      { label: "Setup Time", value: "< 5 min" }
    ],
    heroVisualType: "shopify-whatsapp",
    featuresSectionTitle: "Deep Shopify & WhatsApp Commerce Integration",
    featuresSectionSubtitle:
      "Harness the 98% open rate of WhatsApp to supercharge your Shopify store's revenue and customer retention.",
    features: [
      {
        title: "Abandoned Checkout Recovery",
        description: "Detect abandoned checkouts and send personalized WhatsApp reminders with 1-click cart restoration links.",
        badge: "Direct ROI",
        iconName: "RotateCcw",
        bulletPoints: [
          "Customizable multi-step recovery sequence (e.g., 30 min, 6 hours, 24 hours)",
          "Pre-filled checkout links carrying customer cart items and discounts",
          "Recovers up to 3x more abandoned revenue than traditional email"
        ]
      },
      {
        title: "Transactional Shipping Alerts",
        description: "Send WhatsApp alerts for order confirmation, packing, dispatch, and delivery completion automatically.",
        badge: "Meta-Approved Templates",
        iconName: "Truck",
        bulletPoints: [
          "Automatic triggers synced with Shopify order fulfillment status",
          "Includes tracking numbers and direct carrier tracking links",
          "Drastically reduces 'Where is my order?' support tickets"
        ]
      },
      {
        title: "Real-Time Inventory Sync",
        description: "Query live Shopify stock levels, variant availability, and prices to answer shopper questions.",
        badge: "Live Catalog Sync",
        iconName: "Database",
        bulletPoints: [
          "Instant awareness of out-of-stock items and color/size variants",
          "Dynamic price adjustments reflecting active Shopify discount rules",
          "Displays high-res product photos stored on your Shopify CDN"
        ]
      },
      {
        title: "COD Order Verification",
        description: "Verify Cash on Delivery orders on WhatsApp before dispatch to minimize costly return failures.",
        badge: "Fraud & RTO Protection",
        iconName: "ShieldCheck",
        bulletPoints: [
          "Automated one-tap 'Confirm Order' or 'Cancel Order' WhatsApp buttons",
          "Updates Shopify order tags automatically based on customer response",
          "Reduces fake and accidental orders by over 60%"
        ]
      },
      {
        title: "Post-Purchase Review Collection",
        description: "Request star reviews and feedback on WhatsApp post-delivery to build social proof and loyalty.",
        badge: "Repeat Retention",
        iconName: "Star",
        bulletPoints: [
          "Timed delivery triggers sent 3 to 7 days after package arrival",
          "Collects star ratings and customer testimonials inside chat",
          "Sends automated discount vouchers for their next purchase"
        ]
      },
      {
        title: "Omnichannel Commerce Extension",
        description: "Extend Shopify store automation across Facebook Messenger and Instagram DMs using synchronized catalogs.",
        badge: "Omnichannel Scale",
        iconName: "Share2",
        bulletPoints: [
          "Single unified catalog powering WhatsApp, Messenger, and Instagram",
          "Unified Shared Inbox managing customer queries from all channels",
          "Centralized customer purchase history regardless of conversation origin"
        ]
      }
    ],
    processTitle: "Connect Shopify to WhatsApp in 3 Steps",
    processSubtitle: "No developer needed. Integrate your store and go live in minutes.",
    steps: [
      {
        step: "01",
        title: "Connect Shopify Store",
        description:
          "Enter your Shopify store URL and authorize the Jadubot connection securely with one click."
      },
      {
        step: "02",
        title: "Enable WhatsApp Notifications",
        description:
          "Select the automated flows you want: abandoned cart recovery, order confirmations, and COD verification."
      },
      {
        step: "03",
        title: "Watch Sales Grow",
        description:
          "Your store immediately starts recovering lost checkouts and keeping buyers updated on WhatsApp."
      }
    ],
    faqs: [
      {
        question: "How does Jadubot connect to my Shopify store?",
        answer:
          "Jadubot connects via secure Shopify webhooks and APIs. Setup takes less than 5 minutes and does not require editing theme code or hiring a developer."
      },
      {
        question: "Are WhatsApp recovery messages compliant with Meta policies?",
        answer:
          "Yes. Jadubot uses official Meta WhatsApp Business templates that are pre-approved for transactional updates and utility notifications."
      },
      {
        question: "Does the recovery message take the customer back to their cart?",
        answer:
          "Yes. The WhatsApp message contains a pre-filled direct checkout link that reconstructs the customer's exact items, variants, and applied coupon codes with a single tap."
      },
      {
        question: "Can I customize the wording of WhatsApp order alerts?",
        answer:
          "Yes. You can customize the message copy, add your store branding, insert dynamic personalization tags (such as customer name and order number), and configure delivery timing."
      }
    ]
  },
  {
    slug: "woocommerce-whatsapp",
    name: "WooCommerce WhatsApp AI Agent",
    category: "commerce",
    navTitle: "WooCommerce AI Agent",
    navDescription: "WhatsApp sales, abandoned cart recovery & order automation for WooCommerce.",
    iconName: "ShoppingCart",
    metaTitle: "WooCommerce WhatsApp Automation & AI Sales Agent | Jadubot",
    metaDescription:
      "Automate WooCommerce sales and customer notifications on WhatsApp with Jadubot. Recover abandoned carts, verify orders, and answer product queries 24/7.",
    badge: "Commerce Integration: WooCommerce + WhatsApp",
    heroTitle: "Automate WooCommerce Abandoned Carts on WhatsApp",
    heroHighlight: "WooCommerce WhatsApp Automation",
    heroDescription:
      "Connect WooCommerce to WhatsApp. Recover abandoned shopping carts, send order alerts, verify COD orders, and showcase products in chat.",
    heroStats: [
      { label: "Cart Recovery Lift", value: "+30%" },
      { label: "RTO Reduction", value: "55%" },
      { label: "Message Delivery Rate", value: "99%" }
    ],
    heroVisualType: "woocommerce-whatsapp",
    featuresSectionTitle: "Powerful WooCommerce & WhatsApp Automation",
    featuresSectionSubtitle:
      "Unlock conversational commerce for your WordPress store with deep webhook and REST API integration.",
    features: [
      {
        title: "WooCommerce Cart Recovery",
        description: "Capture checkout drops and dispatch polite WhatsApp recovery messages with 1-click restoration links.",
        badge: "Revenue Multiplier",
        iconName: "RotateCcw",
        bulletPoints: [
          "Captures phone numbers entered on WooCommerce checkout pages",
          "Automated delay triggers that respect customer browsing behavior",
          "Generates direct 1-tap cart restoration links with saved products"
        ]
      },
      {
        title: "Instant Order Tracking",
        description: "Trigger WhatsApp messages when WooCommerce status updates to Processing, Completed, or Dispatched.",
        badge: "Automated Alerts",
        iconName: "Package",
        bulletPoints: [
          "Instant order confirmation notifications with full itemized breakdown",
          "Shipping dispatch alerts with courier tracking URL links",
          "Reduces customer support inquiries regarding delivery timeline"
        ]
      },
      {
        title: "COD Order Verification",
        description: "Verify buyer intent via interactive WhatsApp buttons before packing and dispatching parcels.",
        badge: "RTO Protection",
        iconName: "CheckCircle",
        bulletPoints: [
          "Interactive WhatsApp buttons for 1-tap order confirmation",
          "Automatically updates WooCommerce order status to 'Verified' or 'Cancelled'",
          "Protects your business from costly courier returns and invalid addresses"
        ]
      },
      {
        title: "Live Stock Queries",
        description: "Inspect WooCommerce product tables in real time to provide accurate pricing, stock, and variations.",
        badge: "Zero Latency",
        iconName: "Database",
        bulletPoints: [
          "Syncs product titles, categories, tags, SKU, and gallery images",
          "Understands complex attributes (sizes, colors, materials, bundles)",
          "Never recommends items that are marked out of stock in WordPress"
        ]
      },
      {
        title: "WordPress Webhook Engine",
        description: "Built on official WooCommerce REST APIs and webhooks for fast, dependable data synchronization.",
        badge: "Open Source Freedom",
        iconName: "Cpu",
        bulletPoints: [
          "Compatible with modern WooCommerce and WordPress versions",
          "Secure consumer key and secret authentication",
          "High-throughput event queue that scales effortlessly during sales surges"
        ]
      },
      {
        title: "Omnichannel Social Commerce",
        description: "Sync your store once and deploy sales automation simultaneously across WhatsApp, Messenger, and Instagram.",
        badge: "Omnichannel Power",
        iconName: "Share2",
        bulletPoints: [
          "Unified store database serving all social messaging channels",
          "Single customer profile aggregating orders across platforms",
          "Shared team inbox with live order lookup and status management"
        ]
      }
    ],
    processTitle: "3 Steps to Connect WooCommerce to WhatsApp",
    processSubtitle:
      "Integrate your WordPress store with Jadubot and launch WhatsApp automations today.",
    steps: [
      {
        step: "01",
        title: "Generate API Keys",
        description:
          "In WooCommerce settings, generate a Read/Write REST API key pair in under 2 minutes."
      },
      {
        step: "02",
        title: "Connect with Jadubot",
        description:
          "Paste your store URL and API keys into Jadubot to establish a secure, two-way automated data bridge."
      },
      {
        step: "03",
        title: "Activate WhatsApp Workflows",
        description:
          "Turn on abandoned cart recovery, order status alerts, and 24/7 AI catalog sales on WhatsApp."
      }
    ],
    faqs: [
      {
        question: "Does Jadubot require a custom WordPress plugin for WooCommerce?",
        answer:
          "Jadubot connects directly using WooCommerce's native REST API and webhook system, so no heavy third-party plugins are required. We also provide an optional lightweight helper plugin for advanced cart capture."
      },
      {
        question: "Can Jadubot capture abandoned carts from guest visitors who didn't log in?",
        answer:
          "Yes. As soon as a guest shopper types their phone number into the WooCommerce checkout form, our checkout listener captures the lead and initiates the recovery sequence if they abandon."
      },
      {
        question: "Will the integration slow down my WordPress website?",
        answer:
          "No. All webhook processing and AI conversations occur on Jadubot's external high-speed cloud infrastructure, placing zero CPU or memory load on your WordPress server."
      },
      {
        question: "Can I confirm Cash on Delivery orders before shipping?",
        answer:
          "Yes. Jadubot sends an interactive WhatsApp confirmation message with 'Confirm Order' and 'Cancel Order' buttons. Once clicked, the order status in WooCommerce is updated immediately."
      }
    ]
  }
];

export function getAgentBySlug(slug: string): AgentData | undefined {
  return aiAgentData.find((a) => a.slug === slug);
}
