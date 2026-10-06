import fs from "fs";

let text = fs.readFileSync("src/data/ai-agent-data.ts", "utf8").replace(/\r\n/g, "\n");

// LEAD QUALIFICATION
text = text.replace(
  `    heroTitle: "Qualify, Score & Route Inbound Leads Automatically 24/7",
    heroHighlight: "Qualify, Score & Route",
    heroDescription:
      "Stop wasting sales reps' time on unqualified inquiries. Deploy a specialized Lead Qualification Agent that asks the right diagnostic questions, scores buyer intent, and instantly routes high-value prospects to your closers.",`,
  `    heroTitle: "Qualify, Score & Route Inbound Leads 24/7",
    heroHighlight: "Qualify, Score & Route",
    heroDescription:
      "Deploy an AI agent to ask diagnostic questions, score buyer intent, and route qualified prospects directly to closers.",`
);

text = text.replace(
  `        title: "Dynamic Conversational Diagnostics",
        description:
          "Engage prospects in natural, friendly conversations to uncover project requirements, budget readiness, urgency, and decision-making authority.",`,
  `        title: "Dynamic Inbound Diagnostics",
        description: "Engage prospects in natural dialogue to uncover project requirements, budget, and purchasing timeline.",`
);

text = text.replace(
  `        title: "Automated Meeting & Demo Scheduling",
        description:
          "Allow pre-qualified prospects to pick an open time slot directly inside WhatsApp or Messenger using integrated calendar booking.",`,
  `        title: "Automated Meeting Scheduling",
        description: "Allow qualified prospects to book calendar slots directly inside WhatsApp or Messenger.",`
);

text = text.replace(
  `        title: "Intelligent Routing & Rep Assignment",
        description:
          "Route VIP enterprise leads immediately to specific account executives based on geography, industry, deal size, or round-robin logic.",`,
  `        title: "Intelligent Rep Routing",
        description: "Route VIP enterprise leads immediately to specific closers based on deal size and territory.",`
);

text = text.replace(
  `        title: "Automated Data Enrichment & CRM Sync",
        description:
          "Extract verified phone numbers, business emails, company domains, and project specifications directly into your pipeline.",`,
  `        title: "Instant CRM Sync",
        description: "Extract verified phone numbers, emails, and company details directly into your CRM pipeline.",`
);

text = text.replace(
  `        title: "Multi-Channel Inbound Handling",
        description:
          "Qualify prospects from Facebook ads, Instagram Story replies, website visits, and WhatsApp marketing campaigns under one unified brain.",`,
  `        title: "Omnichannel Inbound Handling",
        description: "Qualify prospects from Facebook ads, Instagram Stories, website visits, and WhatsApp campaigns under one brain.",`
);

text = text.replace(
  `        title: "Re-engagement Sequences for Stalled Leads",
        description:
          "Automatically re-engage prospects who went cold midway through the qualification process with polite, value-driven follow-ups.",`,
  `        title: "Lead Re-engagement Sequences",
        description: "Automatically re-engage prospects who went cold midway with polite, value-driven follow-up messages.",`
);

// CUSTOMER SUPPORT
text = text.replace(
  `    heroTitle: "Instant, Knowledge-Powered Support with Smooth Human Handover",
    heroHighlight: "Knowledge-Powered Support",
    heroDescription:
      "Deliver empathetic, accurate 24/7 customer service across all messaging channels. Train your agent on your existing docs, FAQs, and policies to resolve up to 80% of support tickets autonomously.",`,
  `    heroTitle: "Knowledge-Powered Support with Instant Human Handover",
    heroHighlight: "Knowledge-Powered Support",
    heroDescription:
      "Deliver empathetic, accurate 24/7 customer service. Train your agent on docs and FAQs to resolve up to 80% of support tickets.",`
);

text = text.replace(
  `        title: "Dynamic Knowledge Grounding",
        description:
          "Train your support agent on your official help center articles, return policies, warranty guides, and PDF manuals for 100% truthful answers.",`,
  `        title: "Knowledge Base Grounding",
        description: "Train support agents on official articles, return policies, and manuals for 100% truthful answers.",`
);

text = text.replace(
  `        title: "Intelligent Human Escalation",
        description:
          "Automatically detect frustrated sentiment, high-priority issues, or explicit requests for a human, and transfer the chat instantly.",`,
  `        title: "Intelligent Human Escalation",
        description: "Detect frustrated sentiment or explicit human requests to transfer chat immediately to available reps.",`
);

text = text.replace(
  `        title: "Real-time Order & Ticket Status Checks",
        description:
          "Connect external APIs to look up order tracking numbers, warranty validity, and invoice details using the customer's phone or email.",`,
  `        title: "Real-time Order Status",
        description: "Query external APIs for tracking numbers, warranty validity, and invoice records using phone numbers.",`
);

text = text.replace(
  `        title: "Multilingual Customer Service",
        description:
          "Understand and reply to customer inquiries in over 50 languages naturally, ensuring global and regional accessibility.",`,
  `        title: "Multilingual Customer Service",
        description: "Understand and reply in over 50 languages naturally, ensuring regional and international accessibility.",`
);

text = text.replace(
  `        title: "Collaborative Shared Inbox",
        description:
          "Support reps can view customer history, apply internal notes, collaborate on complex tickets, and resume bot automation with one click.",`,
  `        title: "Collaborative Shared Inbox",
        description: "View customer history, apply internal notes, and resume bot automation with one click.",`
);

text = text.replace(
  `        title: "Support Analytics & Deflection Insights",
        description:
          "Gain visibility into trending customer issues, unresolved questions, top requested features, and bot resolution rates.",`,
  `        title: "Support Deflection Analytics",
        description: "Track trending customer questions, unresolved issues, and bot resolution rates with actionable insights.",`
);

// SALES AGENT
text = text.replace(
  `    heroTitle: "Display Catalogs, Answer Pricing & Close Orders Automatically",
    heroHighlight: "Close Orders Automatically",
    heroDescription:
      "Transform your messaging channels into automated 24/7 digital storefronts. Showcase rich product galleries, recommend the right variants, calculate order totals, collect shipping details, and process orders on autopilot.",`,
  `    heroTitle: "Display Catalogs & Close Orders Automatically",
    heroHighlight: "Close Orders Automatically",
    heroDescription:
      "Turn chat into a 24/7 storefront. Showcase catalogs, recommend variants, collect shipping details, and process orders on autopilot.",`
);

text = text.replace(
  `        title: "Interactive Product Catalog Carousels",
        description:
          "Showcase high-resolution product photos, pricing, sizing, color variants, and availability directly inside WhatsApp, Messenger, and Instagram DMs.",`,
  `        title: "In-Chat Product Carousels",
        description: "Showcase photos, pricing, sizing, color variants, and availability inside WhatsApp, Messenger, and Instagram.",`
);

text = text.replace(
  `        title: "Personalized Product Recommendations",
        description:
          "Understand customer preferences, style choices, budget ranges, and specific needs to recommend the most relevant matching items.",`,
  `        title: "Personalized Recommendations",
        description: "Understand style choices, budget ranges, and needs to recommend the most relevant matching items.",`
);

text = text.replace(
  `        title: "In-Chat Order Taking & Address Collection",
        description:
          "Collect customer delivery address, contact numbers, and delivery instructions inside the chat without forcing customers onto an external site.",`,
  `        title: "In-Chat Order Taking",
        description: "Collect delivery addresses, phone numbers, and special notes without sending buyers to external websites.",`
);

text = text.replace(
  `        title: "Flexible Payment Options & Link Generation",
        description:
          "Support multiple payment methods including Cash on Delivery (COD), digital payment gateway links, and bank transfer instructions.",`,
  `        title: "Flexible Payment Checkout",
        description: "Support Cash on Delivery (COD), digital payment gateway links, and bank transfer details directly in chat.",`
);

text = text.replace(
  `        title: "Automated Checkout Follow-ups",
        description:
          "Follow up politely with customers who browsed products or added items to their chat cart but paused before finalizing the order.",`,
  `        title: "Automated Checkout Follow-ups",
        description: "Follow up with buyers who browsed products or paused before finalizing their conversational order.",`
);

text = text.replace(
  `        title: "High-Value Deal Escalation",
        description:
          "When a customer inquires about bulk orders, custom wholesale quotes, or VIP enterprise packages, automatically route the lead to your senior sales team.",`,
  `        title: "High-Value Deal Escalation",
        description: "Route bulk order inquiries and custom wholesale quotes directly to your senior sales team.",`
);

// SHOPIFY WHATSAPP
text = text.replace(
  `    heroTitle: "Turn Shopify Checkouts into High-Converting WhatsApp Sales",
    heroHighlight: "Shopify WhatsApp Sales",
    heroDescription:
      "Connect your Shopify store to WhatsApp in one click. Recover abandoned carts with automated reminders, broadcast new collection drops, send real-time order tracking updates, and let AI answer customer questions 24/7.",`,
  `    heroTitle: "Turn Shopify Checkouts into WhatsApp Sales",
    heroHighlight: "Shopify WhatsApp Sales",
    heroDescription:
      "Connect Shopify to WhatsApp. Recover abandoned checkouts, send order tracking alerts, and let AI answer customer inquiries 24/7.",`
);

text = text.replace(
  `        title: "Automated Abandoned Checkout Recovery",
        description:
          "Detect when a shopper leaves items in their Shopify checkout and send a personalized WhatsApp message with their exact cart items and a one-click checkout link.",`,
  `        title: "Abandoned Checkout Recovery",
        description: "Detect abandoned checkouts and send personalized WhatsApp reminders with 1-click cart restoration links.",`
);

text = text.replace(
  `        title: "Transactional Order & Shipping Alerts",
        description:
          "Keep customers informed and delighted by sending instant WhatsApp messages for order confirmation, fulfillment, out-for-delivery, and delivery completion.",`,
  `        title: "Transactional Shipping Alerts",
        description: "Send WhatsApp alerts for order confirmation, packing, dispatch, and delivery completion automatically.",`
);

text = text.replace(
  `        title: "Real-time Shopify Inventory Sync",
        description:
          "The AI agent queries live Shopify stock levels, variant availability, pricing updates, and product descriptions to answer shopper inquiries accurately.",`,
  `        title: "Real-Time Inventory Sync",
        description: "Query live Shopify stock levels, variant availability, and active pricing rules to answer shopper questions.",`
);

text = text.replace(
  `        title: "Cash on Delivery (COD) Verification",
        description:
          "Verify high-risk Cash on Delivery orders on WhatsApp before shipping to minimize costly return-to-origin (RTO) delivery failures.",`,
  `        title: "COD Order Verification",
        description: "Verify Cash on Delivery orders on WhatsApp before dispatch to minimize costly return failures.",`
);

text = text.replace(
  `        title: "Automated Post-Purchase Review Collection",
        description:
          "Request product reviews and customer feedback on WhatsApp after order delivery to build social proof and encourage repeat purchases.",`,
  `        title: "Post-Purchase Review Collection",
        description: "Request star reviews and feedback on WhatsApp post-delivery to build social proof and loyalty.",`
);

text = text.replace(
  `        title: "Omnichannel Messenger & Instagram Extension",
        description:
          "Extend your Shopify store automation directly across Facebook Messenger and Instagram DMs using the same synchronized product catalog.",`,
  `        title: "Omnichannel Commerce Extension",
        description: "Extend Shopify store automation across Facebook Messenger and Instagram DMs using synchronized catalogs.",`
);

// WOOCOMMERCE WHATSAPP
text = text.replace(
  `    heroTitle: "Automate WooCommerce Abandoned Carts & Sales on WhatsApp",
    heroHighlight: "WooCommerce WhatsApp Automation",
    heroDescription:
      "Connect your WooCommerce WordPress store directly to WhatsApp. Automatically recover abandoned shopping carts, send real-time order confirmation alerts, verify Cash on Delivery orders, and showcase products in chat.",`,
  `    heroTitle: "Automate WooCommerce Abandoned Carts on WhatsApp",
    heroHighlight: "WooCommerce WhatsApp Automation",
    heroDescription:
      "Connect WooCommerce to WhatsApp. Recover abandoned shopping carts, send order alerts, verify COD orders, and showcase products in chat.",`
);

text = text.replace(
  `        title: "WooCommerce Abandoned Cart Recovery",
        description:
          "Automatically capture guest and registered checkout drops, sending polite, timely WhatsApp recovery messages with 1-click cart restoration links.",`,
  `        title: "WooCommerce Cart Recovery",
        description: "Capture checkout drops and dispatch polite WhatsApp recovery messages with 1-click restoration links.",`
);

text = text.replace(
  `        title: "Instant Order Status & Tracking Updates",
        description:
          "Trigger automated WhatsApp messages whenever WooCommerce order status changes to Processing, Completed, Refunded, or On-Hold.",`,
  `        title: "Instant Order Tracking",
        description: "Trigger WhatsApp messages when WooCommerce status updates to Processing, Completed, or Dispatched.",`
);

text = text.replace(
  `        title: "Cash on Delivery (COD) Verification",
        description:
          "Verify customer intent for COD orders via WhatsApp interactive buttons before packing and dispatching parcels.",`,
  `        title: "COD Order Verification",
        description: "Verify buyer intent via interactive WhatsApp buttons before packing and dispatching parcels.",`
);

text = text.replace(
  `        title: "Live WooCommerce Catalog & Stock Query",
        description:
          "The AI Sales Agent inspects your WooCommerce product database in real time to provide accurate pricing, stock availability, and variations.",`,
  `        title: "Live Stock Queries",
        description: "Inspect WooCommerce product tables in real time to provide accurate pricing, stock, and variations.",`
);

text = text.replace(
  `        title: "WordPress Webhook & REST API Engine",
        description:
          "Built on official WooCommerce REST APIs and secure webhooks for fast, dependable, enterprise-grade data synchronization.",`,
  `        title: "WordPress Webhook Engine",
        description: "Built on official WooCommerce REST APIs and webhooks for fast, dependable data synchronization.",`
);

text = text.replace(
  `        title: "Omnichannel Facebook & Instagram Commerce",
        description:
          "Sync your WooCommerce store once and deploy sales automation simultaneously across WhatsApp, Messenger, and Instagram Direct.",`,
  `        title: "Omnichannel Social Commerce",
        description: "Sync your store once and deploy sales automation simultaneously across WhatsApp, Messenger, and Instagram.",`
);

fs.writeFileSync("src/data/ai-agent-data.ts", text, "utf8");
console.log("Successfully trimmed ai-agent-data.ts!");
