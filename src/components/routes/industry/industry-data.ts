export interface IndustryUseCase {
  title: string;
  trigger: string;
  dialogue: {
    sender: "user" | "bot";
    message: string;
    time?: string;
  }[];
  benefit: string;
}

export interface IndustryWorkflowStep {
  step: string;
  title: string;
  description: string;
}

export interface IndustryFaqItem {
  question: string;
  answer: string;
}

export interface IndustryBentoItem {
  iconName: string;
  title: string;
  description: string;
}

export interface IndustryBentoSection {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  statItem?: {
    value: string;
    label: string;
  };
  items: [
    IndustryBentoItem,
    IndustryBentoItem,
    IndustryBentoItem,
    IndustryBentoItem,
    IndustryBentoItem,
    IndustryBentoItem
  ];
}

export interface IndustryData {
  slug: string;
  name: string;
  shortTag: string;
  navDescription: string;
  iconName: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd?: string;
    subtitle: string;
    primaryCtaText: string;
    secondaryCtaText: string;
    image: string;
    statHighlights: { label: string; value: string }[];
    platforms: string[];
  };
  roi: {
    heading: string;
    subheading: string;
    formula: string;
    exampleLabel: string;
    exampleMath: string;
    metrics: { value: string; label: string; detail: string }[];
  };
  bento: IndustryBentoSection;
  workflow: {
    badge: string;
    title: string;
    description: string;
    steps: IndustryWorkflowStep[];
  };
  useCases: IndustryUseCase[];
  faqs: IndustryFaqItem[];
}

export const INDUSTRIES: IndustryData[] = [
  {
    slug: "ecommerce-chatbot-automation",
    name: "E-Commerce",
    shortTag: "Online Stores",
    navDescription: "Cart recovery, orders, and store support.",
    iconName: "ShoppingCart",
    metaTitle: "AI Chatbot Automation for E-commerce Stores | Jadubot",
    metaDescription:
      "Automate customer support, recover abandoned carts on WhatsApp, verify COD orders, and boost repeat sales 24/7 with Jadubot AI for e-commerce.",
    hero: {
      badge: "E-COMMERCE AUTOMATION",
      titleStart: "Turn Browsing Shoppers Into",
      titleHighlight: "High-Value Orders",
      titleEnd: "Around the Clock",
      subtitle:
        "Empower your online store with AI agents that answer product sizing questions, recover lost carts on WhatsApp, verify COD deliveries, and process orders directly in chat.",
      primaryCtaText: "Start E-commerce Free Trial",
      secondaryCtaText: "Schedule Store Demo",
      image: "/assets/images/industry/ecommerce.jpg",
      statHighlights: [
        { label: "Cart Recovery Rate", value: "+38%" },
        { label: "COD Return Reduction", value: "-45%" },
        { label: "Response Latency", value: "< 2s" }
      ],
      platforms: ["Shopify", "WooCommerce", "WhatsApp", "Facebook Messenger", "Instagram DM"]
    },
    roi: {
      heading: "Quantifiable Impact on Your Store Revenue",
      subheading: "Calculate the tangible cost of delayed chat replies and abandoned checkouts.",
      formula: "Monthly Inquiries × Unanswered Rate (30%) × Avg. Order Value ($45) × 12 Months",
      exampleLabel: "Mid-Sized Fashion Store Example",
      exampleMath:
        "1,200 chats/mo × 30% missed × $45 AOV × 12 = $194,400 in preventable lost sales recovered annually.",
      metrics: [
        {
          value: "3.4x",
          label: "ROI Within 60 Days",
          detail: "Based on recovered checkouts and automated upsells."
        },
        {
          value: "70%",
          label: "Support Ticket Deflection",
          detail: "Product FAQs and order status handled without human agents."
        },
        {
          value: "24/7",
          label: "Instant Buyer Engagement",
          detail: "Midnight shoppers receive instant size and shipping advice."
        }
      ]
    },
    bento: {
        "eyebrow": "E-Commerce AI Automation",
        "title": "Autonomous Conversational Commerce for Online Stores",
        "titleAccent": "Commerce",
        "subtitle": "Recovers abandoned checkouts, validates COD orders, and synchronizes real-time deliveries across Bangladesh.",
        "statItem": {
            "value": "45%",
            "label": "RTO Courier Reduction"
        },
        "items": [
            {
                "iconName": "ShoppingCart",
                "title": "Cart Recovery Engine",
                "description": "Recovers 1 in 4 carts automatically with discount triggers."
            },
            {
                "iconName": "CheckCircle",
                "title": "COD Verification & Fraud",
                "description": "Validates buyer phone numbers and addresses before dispatch."
            },
            {
                "iconName": "TrendUp",
                "title": "Return Reduction",
                "description": "Drops return-to-origin courier expenses by 45% consistently."
            },
            {
                "iconName": "Truck",
                "title": "Courier API Sync",
                "description": "Automates consignments across Pathao, Steadfast, and RedX."
            },
            {
                "iconName": "Shield",
                "title": "Meta Cloud Security",
                "description": "Zero-ban messaging compliant with 24-hour guidelines."
            },
            {
                "iconName": "Zap",
                "title": "Instant One-Tap Checkout",
                "description": "Passes confirmed orders directly to store inventory in seconds."
            }
        ]
    },
    workflow: {
      badge: "END-TO-END SHOPPING JOURNEY",
      title: "How Jadubot Drives E-commerce Sales",
      description: "From the first product comment to repeat post-purchase engagement.",
      steps: [
        {
          step: "01",
          title: "Ad or Social Comment",
          description:
            "Shopper comments 'Price?' on Instagram or clicks a Facebook Click-to-Messenger ad."
        },
        {
          step: "02",
          title: "Instant Product Card",
          description:
            "Jadubot instantly replies in DM with image, size options, stock status, and direct buy button."
        },
        {
          step: "03",
          title: "In-Chat Checkout",
          description:
            "Shopper selects size and color, enters delivery address, and confirms via bKash, card, or COD."
        },
        {
          step: "04",
          title: "Live Tracking & Upsell",
          description:
            "System pushes automated courier tracking updates and sends personalized product recommendations."
        }
      ]
    },
    useCases: [
      {
        title: "Product Sizing & Stock Availability Inquiry",
        trigger: "Customer comments 'Is medium in stock?' or messages product link",
        dialogue: [
          {
            sender: "user",
            message:
              "Hi! Do you have this blue jacket in Medium, and what is the chest measurement?"
          },
          {
            sender: "bot",
            message:
              "Hello! Yes, the Electric Blue Jacket in Medium is in stock (3 units left). The chest measurement is 40 inches. Would you like to order now with free shipping?"
          },
          { sender: "user", message: "Yes please, order Medium." },
          {
            sender: "bot",
            message:
              "Great choice! Here is your quick order link with Medium pre-selected: [Order Now - $55]. You can pay with Card or COD."
          }
        ],
        benefit: "Converts casual product curiosity into an active order in less than 60 seconds."
      },
      {
        title: "Automated Post-Purchase Tracking Support",
        trigger: "Customer asks 'Where is my order #5482?'",
        dialogue: [
          { sender: "user", message: "Where is my parcel? Order #5482" },
          {
            sender: "bot",
            message:
              "Looking up Order #5482... Your parcel was picked up by Pathao Express today at 10:30 AM (Tracking: PTH-8921). Estimated delivery is tomorrow between 2 PM - 6 PM."
          }
        ],
        benefit: "Eliminates 80% of repetitive 'Where Is My Order' (WISMO) support queries."
      },
      {
        title: "Abandoned Cart WhatsApp Recovery",
        trigger: "Cart idle for 30 minutes without purchase",
        dialogue: [
          {
            sender: "bot",
            message:
              "Hi Sarah! You left your favorite Linen Dress in your cart. We saved it for you! Use code SAVE10 for 10% off if you complete your order today: [Complete Purchase]"
          },
          { sender: "user", message: "Can I pay with Cash on Delivery?" },
          {
            sender: "bot",
            message:
              "Absolutely! Cash on Delivery is available across all 64 districts. Click the link above and select COD at checkout!"
          }
        ],
        benefit: "High-conversion re-engagement that directly recovers lost checkout revenue."
      }
    ],
    faqs: [
      {
        question: "Can Jadubot connect to my Shopify or WooCommerce store catalog?",
        answer:
          "Yes. Jadubot provides deep 1-click integrations for Shopify and WooCommerce. Your entire product inventory, variations, pricing, and live stock levels synchronize automatically."
      },
      {
        question: "How does Jadubot handle Cash-on-Delivery (COD) verification?",
        answer:
          "When a customer selects COD, Jadubot sends an automated confirmation message on WhatsApp or Messenger with order items and address. The user simply taps 'Confirm' to validate intent before your fulfillment team packs the order."
      },
      {
        question: "Can customers complete checkout directly inside Facebook Messenger?",
        answer:
          "Yes! Jadubot features a built-in lightweight Messenger cart where customers can select items, enter address details, and checkout without being forced to visit a slow external browser page."
      }
    ]
  },
  {
    slug: "retail-b2c-ecommerce-chatbot-automation",
    name: "Retail B2C",
    shortTag: "Retail & Stores",
    navDescription: "Retail support, cart recovery, and re-engagement.",
    iconName: "ShoppingBag",
    metaTitle: "AI Chatbot Automation for B2C Retail Brands | Jadubot",
    metaDescription:
      "Scale retail store customer engagement, drive foot traffic, automate promotional broadcasts, and connect online inquiries with physical store outlets.",
    hero: {
      badge: "RETAIL B2C AUTOMATION",
      titleStart: "Connect Physical Outlets With",
      titleHighlight: "Omnichannel AI Chat",
      titleEnd: "Effortlessly",
      subtitle:
        "Bridge the gap between your physical retail stores and digital social channels. Help shoppers locate nearest outlets, verify store stock, and receive seasonal VIP promotions.",
      primaryCtaText: "Automate Retail Sales",
      secondaryCtaText: "Book Retail Consultation",
      image: "/assets/images/industry/retail.jpg",
      statHighlights: [
        { label: "Store Foot Traffic Boost", value: "+32%" },
        { label: "VIP Campaign Open Rate", value: "91%" },
        { label: "Outlet Stock Inquiries", value: "100% Auto" }
      ],
      platforms: [
        "Facebook Messenger",
        "WhatsApp Business",
        "Instagram DM",
        "Google Business Profile",
        "POS Systems"
      ]
    },
    roi: {
      heading: "The Business Return of Omnichannel Retail Automation",
      subheading:
        "How B2C retail brands turn digital social chatter into physical store visits and revenue.",
      formula:
        "Outlet Inquiries × Foot Traffic Conversion (22%) × Average In-Store Basket Size ($60)",
      exampleLabel: "Multi-Branch Retail Chain",
      exampleMath:
        "3,500 outlet queries/month × 22% store visits = 770 additional store shoppers × $60 basket = $46,200 extra monthly store revenue.",
      metrics: [
        {
          value: "91%",
          label: "WhatsApp Broadcast Open Rate",
          detail: "Compared to less than 15% for traditional email flyers."
        },
        {
          value: "4.8x",
          label: "Holiday Campaign Sales",
          detail: "Interactive festive discount scratchers and digital coupons."
        },
        {
          value: "0 sec",
          label: "Store Locator Wait Time",
          detail: "GPS-powered nearest branch recommendations in chat."
        }
      ]
    },
    bento: {
        "eyebrow": "Omnichannel Retail AI",
        "title": "Bridge Digital Shoppers to Physical Retail Outlets",
        "titleAccent": "Retail",
        "subtitle": "Guides shoppers to local branches with live GPS pins and drives VIP sale traffic.",
        "statItem": {
            "value": "91%",
            "label": "Broadcast Open Rate"
        },
        "items": [
            {
                "iconName": "Globe",
                "title": "GPS-Powered Store Locator",
                "description": "Pins nearest outlet directions and hours directly in WhatsApp."
            },
            {
                "iconName": "ShoppingBag",
                "title": "VIP Seasonal Broadcasts",
                "description": "Delivers interactive flash catalog cards with 91% open rates."
            },
            {
                "iconName": "TrendUp",
                "title": "Footfall Conversion",
                "description": "Over 85% of locator inquiries result in same-day visits."
            },
            {
                "iconName": "Eye",
                "title": "Live Branch Inventory",
                "description": "Checks item availability across outlets without staff calls."
            },
            {
                "iconName": "UserCheck",
                "title": "Loyalty Tier Sync",
                "description": "Applies VIP customer discounts and loyalty tokens instantly."
            },
            {
                "iconName": "Zap",
                "title": "Ride-Hailing Directions",
                "description": "Generates one-click navigation links for Pathao and Uber."
            }
        ]
    },
    workflow: {
      badge: "RETAIL OMNICHANNEL FLOW",
      title: "From Social Discovery to Store Purchase",
      description: "How Jadubot navigates customers through the complete retail lifecycle.",
      steps: [
        {
          step: "01",
          title: "Instagram Reel / Story",
          description:
            "Customer views new fashion collection on Instagram and sends a direct message."
        },
        {
          step: "02",
          title: "Branch Stock Check",
          description:
            "Bot shares available colorways and confirms which nearby outlets have stock."
        },
        {
          step: "03",
          title: "Exclusive Store Voucher",
          description:
            "Bot issues a digital barcode voucher for 15% off that can be scanned at the physical POS."
        },
        {
          step: "04",
          title: "Loyalty Points Accrual",
          description:
            "Post-purchase, customer receives their updated loyalty balance and feedback prompt in WhatsApp."
        }
      ]
    },
    useCases: [
      {
        title: "Nearest Outlet & Operating Hours Guide",
        trigger: "Customer asks 'Where is your closest shop in Uttara?'",
        dialogue: [
          { sender: "user", message: "Is your Uttara outlet open today?" },
          {
            sender: "bot",
            message:
              "Yes! Our Uttara Sector 3 Flagship Store is open today from 10:00 AM to 9:30 PM. Location: House 12, Road 7, Sector 3. Here is the Google Maps link: [Open Maps]. Need directions or phone contact?"
          }
        ],
        benefit:
          "Provides instant geographical guidance, converting interest into in-person foot traffic."
      },
      {
        title: "Loyalty Program Tier & Reward Inquiry",
        trigger: "Customer asks 'How many points do I have?'",
        dialogue: [
          { sender: "user", message: "Check my loyalty points for 01711XXXXXX" },
          {
            sender: "bot",
            message:
              "Welcome back, Tanvir! You have 420 Gold Tier points ($42 value). You can redeem your points at any outlet or online checkout. Would you like your digital member pass?"
          }
        ],
        benefit: "Fosters brand affinity and encourages repeat spending without app installations."
      }
    ],
    faqs: [
      {
        question: "Can Jadubot integrate with our physical Point-of-Sale (POS) system?",
        answer:
          "Yes. Through our REST API and webhook infrastructure, Jadubot can connect with modern retail POS and ERP systems to verify digital coupons and sync loyalty balances."
      },
      {
        question: "Is there a risk of WhatsApp number blocking with promotional broadcasts?",
        answer:
          "No. Jadubot uses the official Meta Cloud API with pre-approved template messages and opt-in validation, ensuring 100% compliance with WhatsApp Business policies."
      }
    ]
  },
  {
    slug: "healthcare-chatbot-automation",
    name: "Healthcare",
    shortTag: "Clinics & Care",
    navDescription: "Patient support, scheduling, and follow-ups.",
    iconName: "Plus",
    metaTitle: "AI Chatbot for Healthcare, Clinics & Diagnostic Centers | Jadubot",
    metaDescription:
      "Streamline patient doctor bookings, lab test inquiries, clinic operating hours, and pre-consultation reminders with HIPAA-conscious AI chat automation.",
    hero: {
      badge: "HEALTHCARE & CLINIC AUTOMATION",
      titleStart: "Effortless Patient Scheduling &",
      titleHighlight: "Doctor Appointments",
      titleEnd: "24 Hours a Day",
      subtitle:
        "Alleviate reception call congestion. Allow patients to select specialist doctors, view available slots, confirm diagnostic tests, and receive appointment reminders automatically.",
      primaryCtaText: "Deploy Healthcare Bot",
      secondaryCtaText: "Book Healthcare Demo",
      image: "/assets/images/industry/healthcare.jpg",
      statHighlights: [
        { label: "Appointment No-Shows", value: "-60%" },
        { label: "Reception Call Load", value: "-75%" },
        { label: "Patient Satisfaction", value: "98%" }
      ],
      platforms: [
        "WhatsApp Business",
        "Hospital Website",
        "Facebook Messenger",
        "Hospital Management Systems (HMS)"
      ]
    },
    roi: {
      heading: "Financial & Operational Gains for Healthcare Providers",
      subheading: "Reducing empty doctor appointment slots and reception overhead.",
      formula: "Monthly Bookings × Missed Slot Rate (18%) × Average Doctor Fee ($30)",
      exampleLabel: "Specialist Diagnostic Center",
      exampleMath:
        "1,500 doctor slots/month × 18% no-shows × $30 fee = $8,100 lost monthly doctor capacity recovered through automated WhatsApp reminders.",
      metrics: [
        {
          value: "60%",
          label: "Reduction in No-Shows",
          detail: "Automated 24h & 2h WhatsApp reminders with reschedule buttons."
        },
        {
          value: "3 min",
          label: "Average Booking Time",
          detail: "Patients schedule appointments in minutes without phone hold times."
        },
        {
          value: "100%",
          label: "Emergency Notice Compliance",
          detail: "Doctor delay or schedule change broadcasted instantly."
        }
      ]
    },
    bento: {
        "eyebrow": "Clinical AI Assistant",
        "title": "24/7 Specialist Doctor Discovery and Appointment Triage",
        "titleAccent": "Discovery",
        "subtitle": "Automates outpatient slot booking, test fee calculations, and pre-test fasting instructions.",
        "statItem": {
            "value": "75%",
            "label": "Admin Time Cut"
        },
        "items": [
            {
                "iconName": "Calendar",
                "title": "Doctor Slot Booking",
                "description": "Issues serial numbers, visit rooms, and automated SMS reminders."
            },
            {
                "iconName": "Database",
                "title": "Diagnostic Test Directory",
                "description": "Shares test preparation rules, lab fees, and fasting guides."
            },
            {
                "iconName": "TrendUp",
                "title": "Admin Workload Deflection",
                "description": "Cuts receptionist booking administration time by 75%."
            },
            {
                "iconName": "Shield",
                "title": "HMIS System Integration",
                "description": "Syncs patient slots directly with hospital management servers."
            },
            {
                "iconName": "UserCheck",
                "title": "Emergency Notice Compliance",
                "description": "Instant guidance for urgent care with 100% policy accuracy."
            },
            {
                "iconName": "Zap",
                "title": "Home Sample Coordination",
                "description": "Dispatches phlebotomists for lab sample collection seamlessly."
            }
        ]
    },
    workflow: {
      badge: "PATIENT CARE PIPELINE",
      title: "How Patient Automation Works",
      description: "A compassionate, dependable booking and reminder experience.",
      steps: [
        {
          step: "01",
          title: "Patient Inquiry",
          description: "Patient messages on WhatsApp seeking an appointment with a Cardiologist."
        },
        {
          step: "02",
          title: "Slot Selection",
          description:
            "Jadubot presents available visiting hours and confirmed serial availability."
        },
        {
          step: "03",
          title: "Instant Confirmation",
          description: "Patient enters name and age; system issues a verified digital token."
        },
        {
          step: "04",
          title: "Timely Reminders",
          description: "System dispatches reminders 24 hours and 2 hours prior to consultation."
        }
      ]
    },
    useCases: [
      {
        title: "Doctor Appointment Reservation",
        trigger: "Patient messages 'Book appointment with Dr. Rahman'",
        dialogue: [
          {
            sender: "user",
            message:
              "I need an appointment with Dr. Farhana Rahman (Skin Specialist) this Thursday."
          },
          {
            sender: "bot",
            message:
              "Dr. Farhana Rahman is available this Thursday, Sept 14th between 5:30 PM - 8:30 PM. Available serials: Serial 06 (6:00 PM) or Serial 12 (7:15 PM). Which do you prefer?"
          },
          { sender: "user", message: "Serial 06 please. Patient name: Rina Begum." },
          {
            sender: "bot",
            message:
              "Confirmed! Serial #06 for Rina Begum with Dr. Farhana Rahman on Thursday at 6:00 PM (Room 304). Please arrive 15 minutes early. [Download Pass]"
          }
        ],
        benefit: "Books verified patient consultations with zero staff intervention."
      },
      {
        title: "Diagnostic Test & Fasting Guidance",
        trigger: "Patient asks 'Do I need to fast for Lipid Profile?'",
        dialogue: [
          {
            sender: "user",
            message: "What is the fee for Lipid Profile and what are the fasting rules?"
          },
          {
            sender: "bot",
            message:
              "Lipid Profile test fee is $18 (1,800 BDT). Preparation: 10-12 hours of strict fasting required (water is allowed). Reports are delivered within 6 hours. Would you like to schedule sample collection at home or clinic?"
          }
        ],
        benefit: "Ensures accurate diagnostic preparation and transparent pricing."
      }
    ],
    faqs: [
      {
        question: "Is patient medical data secure and private?",
        answer:
          "Yes. Jadubot adheres strictly to data protection standards. We do not store confidential medical records on third-party servers, and patient communications are encrypted end-to-end."
      },
      {
        question: "Can our clinic staff take over the conversation for critical emergencies?",
        answer:
          "Yes. Emergency keywords automatically flag conversations with urgent priority in Jadubot's unified team inbox, alerting duty doctors or receptionists with sound notifications."
      }
    ]
  },
  {
    slug: "real-estate-chatbot-automation",
    name: "Real Estate",
    shortTag: "Brokers & Agents",
    navDescription: "Property leads, showings, and inquiries.",
    iconName: "Home",
    metaTitle: "Real Estate AI Chatbot & Lead Automation | Jadubot",
    metaDescription:
      "Qualify home buyers, capture property investor leads, schedule site visits, and showcase apartment floor plans automatically on Facebook & WhatsApp.",
    hero: {
      badge: "REAL ESTATE & PROPERTY AUTOMATION",
      titleStart: "Qualify High-Intent Property Buyers",
      titleHighlight: "In Real Time",
      titleEnd: "Before Competitors Call",
      subtitle:
        "Real estate leads cool down within 15 minutes. Jadubot instantly qualifies buyer budget, preferred square footage, and neighborhood preferences, handing ready buyers to your sales agents.",
      primaryCtaText: "Automate Property Leads",
      secondaryCtaText: "Schedule Real Estate Demo",
      image: "/assets/images/industry/real-estate.jpg",
      statHighlights: [
        { label: "Lead Response Time", value: "< 5s" },
        { label: "Qualified Site Visits", value: "+44%" },
        { label: "Cost Per Lead (CPL)", value: "-35%" }
      ],
      platforms: [
        "Facebook Ads",
        "WhatsApp Business",
        "Instagram DM",
        "Website Widget",
        "HubSpot & Salesforce"
      ]
    },
    roi: {
      heading: "Why Real Estate Speed-to-Lead Decides Sales",
      subheading:
        "Harvard Business Review proves responding within 5 minutes increases qualification odds by 21x.",
      formula: "Monthly Ad Leads (500) × Lead Leakage Rate (60%) × Commission Per Deal ($4,000)",
      exampleLabel: "Property Developer / Brokerage",
      exampleMath:
        "500 ad leads × 60% slow response leakage = 300 missed opportunities. Converting just 2 additional buyers covers Jadubot for 5+ years.",
      metrics: [
        {
          value: "21x",
          label: "Lead Qualification Rate",
          detail: "When prospective buyers receive property details under 60 seconds."
        },
        {
          value: "44%",
          label: "Increase in Site Visits",
          detail: "Direct calendar scheduling inside WhatsApp conversations."
        },
        {
          value: "100%",
          label: "CRM Sync Accuracy",
          detail: "Leads automatically exported to Google Sheets or enterprise CRM."
        }
      ]
    },
    bento: {
        "eyebrow": "Real Estate AI Desk",
        "title": "Qualify High-Intent Buyers and Schedule Site Tours",
        "titleAccent": "Buyers",
        "subtitle": "Screens buyer budgets, delivers floor plan brochures, and books model apartment visits.",
        "statItem": {
            "value": "44%",
            "label": "Site Visit Boost"
        },
        "items": [
            {
                "iconName": "Filter",
                "title": "Budget & Preference Filter",
                "description": "Qualifies prospect price ranges, flat sizes, and desired areas."
            },
            {
                "iconName": "Calendar",
                "title": "Site Visit Scheduling",
                "description": "Books physical weekend property tours with broker details."
            },
            {
                "iconName": "TrendUp",
                "title": "Physical Attendance Growth",
                "description": "Boosts physical weekend site visit attendance by 44%."
            },
            {
                "iconName": "PaperPlaneTilt",
                "title": "Instant PDF Brochures",
                "description": "Dispatches floor plans and payment schedules in WhatsApp."
            },
            {
                "iconName": "UserCheck",
                "title": "Area Broker Routing",
                "description": "Transfers pre-qualified buyers to dedicated agents instantly."
            },
            {
                "iconName": "Zap",
                "title": "Automated Post-Tour Survey",
                "description": "Captures visitor feedback and buying intent immediately."
            }
        ]
    },
    workflow: {
      badge: "PROPERTY BUYER PIPELINE",
      title: "From Click-to-Messenger Ad to Handshake",
      description: "How Jadubot turns social media ad spend into signed property contracts.",
      steps: [
        {
          step: "01",
          title: "Targeted Ad Click",
          description:
            "Prospective buyer clicks Facebook/Instagram ad showcasing luxury apartments."
        },
        {
          step: "02",
          title: "Automated Triage",
          description: "Bot welcomes user and captures preferred size (3-bed, 4-bed) and budget."
        },
        {
          step: "03",
          title: "Brochure & Video Tour",
          description: "Jadubot delivers project brochure PDF, video walkthrough, and payment plan."
        },
        {
          step: "04",
          title: "Broker Meetup",
          description:
            "Lead books a Saturday site visit; details sync to broker CRM with full chat context."
        }
      ]
    },
    useCases: [
      {
        title: "Apartment Floor Plan & Pricing Inquiry",
        trigger: "Lead clicks Facebook Ad for 'Gulshan Luxury Condos'",
        dialogue: [
          { sender: "user", message: "What is the price of the 3-bedroom apartment in Gulshan?" },
          {
            sender: "bot",
            message:
              "Hello! Our 3-bedroom residences range from 2,150 to 2,600 sq ft, starting at $220,000 with flexible 4-year installment plans. Would you like to view the floor plan brochure?"
          },
          { sender: "user", message: "Yes, send the brochure." },
          {
            sender: "bot",
            message:
              "Here is the architectural floor plan PDF: [Download Brochure]. Would you like to tour our fully furnished model apartment this Saturday?"
          }
        ],
        benefit:
          "Instant engagement with high-ticket property buyers while interest is at its peak."
      }
    ],
    faqs: [
      {
        question: "Can Jadubot sync leads directly to our CRM or Google Sheets?",
        answer:
          "Yes. Every qualified lead with their name, phone number, budget, and preferred area is pushed instantly to your CRM (HubSpot, Salesforce, Zoho) or Google Sheets."
      },
      {
        question: "What happens if a high-net-worth buyer wants to talk to a human immediately?",
        answer:
          "Jadubot includes a 'Live Agent Request' button that triggers an instant WhatsApp notification or phone call alert to your senior sales executives."
      }
    ]
  },
  {
    slug: "restaurant-chatbot-automation",
    name: "Restaurant",
    shortTag: "Dining & Cafes",
    navDescription: "Reservations, orders, and guest engagement.",
    iconName: "Coffee",
    metaTitle: "Restaurant AI Chatbot for Reservations & Food Orders | Jadubot",
    metaDescription:
      "Automate restaurant table reservations, share digital photo menus, capture direct delivery orders without aggregator commissions, and gather guest reviews.",
    hero: {
      badge: "RESTAURANT & CAFE AUTOMATION",
      titleStart: "Automate Table Bookings &",
      titleHighlight: "Direct Food Orders",
      titleEnd: "Zero Commision",
      subtitle:
        "Stop paying 25-30% food aggregator commissions. Let diners browse appetizing menus, reserve tables for anniversaries and parties, and place takeaway orders directly on WhatsApp.",
      primaryCtaText: "Start Restaurant Bot",
      secondaryCtaText: "Schedule Cafe Demo",
      image: "/assets/images/industry/restaurant.jpg",
      statHighlights: [
        { label: "Commission Saved", value: "30%" },
        { label: "Table Booking Accuracy", value: "100%" },
        { label: "Google Review Volume", value: "+3.2x" }
      ],
      platforms: [
        "WhatsApp Business",
        "Instagram DM",
        "Facebook Page",
        "Google Business Profile",
        "POS Systems"
      ]
    },
    roi: {
      heading: "Save Tens of Thousands in Aggregator Commissions",
      subheading: "Transition repeat neighborhood foodies to direct WhatsApp ordering.",
      formula: "Monthly Direct Orders (800) × Avg. Order ($25) × Saved Commission (25%)",
      exampleLabel: "Casual Dining Restaurant / Cloud Kitchen",
      exampleMath:
        "800 direct orders/mo × $25 order value × 25% commission saved = $5,000 extra monthly bottom-line profit retained by the restaurant.",
      metrics: [
        {
          value: "30%",
          label: "Third-Party Fees Saved",
          detail: "Direct ordering keeps profits in your kitchen instead of aggregators."
        },
        {
          value: "4.9★",
          label: "Reputation Elevation",
          detail: "Automated post-dining review prompts sent to satisfied guests."
        },
        {
          value: "100%",
          label: "Automated Peak Booking",
          detail: "Handles Friday evening table rushes without missing telephone calls."
        }
      ]
    },
    bento: {
        "eyebrow": "Restaurant Commerce AI",
        "title": "Direct Digital Menu Ordering and Table Reservations",
        "titleAccent": "Ordering",
        "subtitle": "Takes WhatsApp food orders with zero aggregator commissions and automates table bookings.",
        "statItem": {
            "value": "30%",
            "label": "Third-Party Fees Saved"
        },
        "items": [
            {
                "iconName": "ShoppingCart",
                "title": "Direct WhatsApp Ordering",
                "description": "Visual menu item cards with add-ons and delivery locations."
            },
            {
                "iconName": "Calendar",
                "title": "Automated Table Booking",
                "description": "Verifies party size, special occasions, and seating times."
            },
            {
                "iconName": "TrendUp",
                "title": "Aggregator Fee Elimination",
                "description": "Saves up to 30% in food delivery aggregator commissions."
            },
            {
                "iconName": "Printer",
                "title": "Kitchen POS Webhooks",
                "description": "Prints live kitchen order tickets automatically upon checkout."
            },
            {
                "iconName": "CheckCircle",
                "title": "Zero Reservation Errors",
                "description": "Eliminates double-booking with 2-hour pre-arrival reminders."
            },
            {
                "iconName": "Zap",
                "title": "VIP Re-engagement",
                "description": "Dispatches birthday perks and weekend dining offers automatically."
            }
        ]
    },
    workflow: {
      badge: "GUEST DINING LIFECYCLE",
      title: "From Food Discovery to 5-Star Review",
      description: "How restaurants create loyal regulars with chat automation.",
      steps: [
        {
          step: "01",
          title: "Menu Discovery",
          description: "Customer views delicious food photo on Instagram Story and taps 'Message'."
        },
        {
          step: "02",
          title: "Interactive Selection",
          description: "Customer selects favorites and customizes portion size and sides."
        },
        {
          step: "03",
          title: "Order / Reservation Confirm",
          description: "Direct checkout via bKash/Card or instant table reservation confirmation."
        },
        {
          step: "04",
          title: "Post-Meal Review",
          description:
            "Automated polite request sent 2 hours later encouraging a 5-star Google Review."
        }
      ]
    },
    useCases: [
      {
        title: "Weekend Table Reservation",
        trigger: "Guest messages 'Book a table for 4 tonight'",
        dialogue: [
          {
            sender: "user",
            message: "Hi, do you have a rooftop table for 4 people tonight at 8:00 PM?"
          },
          {
            sender: "bot",
            message:
              "Hello! Yes, we have a wonderful rooftop table available at 8:00 PM tonight. May I have your name and contact number to reserve it?"
          },
          { sender: "user", message: "Name is Kamran, 01819XXXXXX" },
          {
            sender: "bot",
            message:
              "Reserved! Table for 4 under Kamran at 8:00 PM tonight (Rooftop). We hold tables for 15 minutes. See you soon! [Get Location]"
          }
        ],
        benefit: "Instantly confirms reservations without interrupting busy waitstaff."
      }
    ],
    faqs: [
      {
        question: "Can our kitchen receive instant alerts when a food order is placed?",
        answer:
          "Yes. Orders can be printed automatically on your thermal kitchen receipt printer or sent as instant alerts to your kitchen WhatsApp group or POS."
      },
      {
        question: "Can we restrict delivery distance to our neighborhood?",
        answer:
          "Yes. Jadubot allows you to set delivery boundaries or verify customer postal codes/areas before accepting delivery orders."
      }
    ]
  },
  {
    slug: "finance-chatbot-automation",
    name: "Finance",
    shortTag: "Banking & Wealth",
    navDescription: "Lead qualification and secure support routing.",
    iconName: "Wallet",
    metaTitle: "AI Chatbot for Financial Services, Banking & Microfinance | Jadubot",
    metaDescription:
      "Accelerate financial customer onboarding, calculate loan EMIs, qualify credit applicants, and answer banking FAQs securely on WhatsApp.",
    hero: {
      badge: "FINANCIAL SERVICES AUTOMATION",
      titleStart: "Secure Financial Conversations &",
      titleHighlight: "Loan Lead Qualification",
      titleEnd: "At Scale",
      subtitle:
        "Simplify complex financial products. Help customers calculate home and auto loan EMIs, verify eligibility criteria, and route qualified loan applications to your loan officers.",
      primaryCtaText: "Automate Financial Leads",
      secondaryCtaText: "Schedule Fintech Demo",
      image: "/assets/images/industry/finance.jpg",
      statHighlights: [
        { label: "Loan Lead Conversion", value: "+52%" },
        { label: "Application Processing Time", value: "-65%" },
        { label: "Data Security Standard", value: "Bank-Grade" }
      ],
      platforms: ["WhatsApp Banking API", "Web Portal", "Core Banking Systems", "Secure Webhooks"]
    },
    roi: {
      heading: "Unlocking Financial Efficiency Through Chat Automation",
      subheading: "Drastically reduce loan acquisition cost and manual document collection.",
      formula:
        "Monthly Inquiries × Unqualified Dropoff (45%) × Net Value Per Active Account ($120)",
      exampleLabel: "Retail Bank / Microfinance Provider",
      exampleMath:
        "2,000 monthly inquiries × 45% dropoff = 900 lost prospects. Capturing just 15% through instant loan calculations creates $16,200 in monthly lifetime value.",
      metrics: [
        {
          value: "52%",
          label: "Faster Application Completion",
          detail: "Interactive step-by-step guidance replaces tedious 12-page paper forms."
        },
        {
          value: "99.9%",
          label: "Uptime & Availability",
          detail: "Bank-grade infrastructure capable of handling high-volume surges."
        },
        {
          value: "Zero",
          label: "Compliance Compromise",
          detail: "Strict adherence to customer consent and financial disclosure standards."
        }
      ]
    },
    bento: {
        "eyebrow": "Financial Services AI",
        "title": "Interactive Loan Calculators and Secure Lead Onboarding",
        "titleAccent": "Calculators",
        "subtitle": "Computes monthly loan EMIs, screens borrower salary, and collects KYC documents securely.",
        "statItem": {
            "value": "52%",
            "label": "Application Completion"
        },
        "items": [
            {
                "iconName": "ChartBar",
                "title": "Interactive EMI Calculator",
                "description": "Calculates home and auto loan installments in real time."
            },
            {
                "iconName": "Shield",
                "title": "Encrypted KYC Collection",
                "description": "Collects NID, salary slips, and TIN certificates securely."
            },
            {
                "iconName": "TrendUp",
                "title": "Completed Applications",
                "description": "Increases fully completed loan applications by 52%."
            },
            {
                "iconName": "Clock",
                "title": "Processing Cycle Cut",
                "description": "Shrinks loan verification timelines from 14 days to 4 days."
            },
            {
                "iconName": "UserCheck",
                "title": "Credit Officer Handoff",
                "description": "Routes eligible borrowers to bank loan officers instantly."
            },
            {
                "iconName": "Zap",
                "title": "Document Format Validation",
                "description": "Alerts borrowers if attachments or required pages are missing."
            }
        ]
    },
    workflow: {
      badge: "FINANCIAL APPLICATION WORKFLOW",
      title: "How Loan Applications Flow Through Jadubot",
      description: "From first curiosity to loan officer review.",
      steps: [
        {
          step: "01",
          title: "Loan Discovery",
          description: "Customer inquires about home mortgage or car loan terms."
        },
        {
          step: "02",
          title: "Instant EMI Calculation",
          description: "User enters desired amount; bot calculates monthly repayment immediately."
        },
        {
          step: "03",
          title: "Basic Qualification",
          description: "Bot validates salary, employment type, and city eligibility criteria."
        },
        {
          step: "04",
          title: "Loan Officer Routing",
          description: "Qualified lead with calculation summary assigned to loan specialist."
        }
      ]
    },
    useCases: [
      {
        title: "Home Loan Eligibility & EMI Estimation",
        trigger: "User asks 'How much is the EMI for a $50,000 home loan?'",
        dialogue: [
          {
            sender: "user",
            message: "What would be the monthly EMI for a $50,000 home loan for 15 years?"
          },
          {
            sender: "bot",
            message:
              "At our current 8.5% interest rate, a $50,000 home loan over 15 years yields an estimated monthly EMI of $492/month. Would you like to check if your salary qualifies?"
          },
          { sender: "user", message: "Yes, my monthly income is $1,800." },
          {
            sender: "bot",
            message:
              "Congratulations! Your income meets the threshold (max debt-to-income allowed is 40%). Would you like our Home Loan Advisor to call you tomorrow morning?"
          }
        ],
        benefit: "Filters and qualifies high-value banking prospects automatically."
      }
    ],
    faqs: [
      {
        question: "Does Jadubot handle sensitive customer banking credentials?",
        answer:
          "No. Jadubot never requests or stores PINs, passwords, or full credit card CVVs. Financial inquiries focus on general assistance, loan qualification, and customer support routing."
      }
    ]
  },
  {
    slug: "education-chatbot-automation",
    name: "Education",
    shortTag: "EdTech & Academies",
    navDescription: "Admissions, counseling, and student engagement.",
    iconName: "Smartphone",
    metaTitle: "AI Chatbot for Universities, Schools & EdTech Platforms | Jadubot",
    metaDescription:
      "Automate student admissions inquiries, share course prospectuses, schedule counseling sessions, and answer tuition fee questions 24/7 with Jadubot.",
    hero: {
      badge: "EDUCATION & ADMISSIONS AUTOMATION",
      titleStart: "Accelerate Student Admissions &",
      titleHighlight: "Enrollment Inquiries",
      titleEnd: "Around the Clock",
      subtitle:
        "Never let prospective students slip away. Guide applicants through course prerequisites, tuition fees, scholarship criteria, and application deadlines on WhatsApp and Messenger.",
      primaryCtaText: "Automate Admissions",
      secondaryCtaText: "Schedule Education Demo",
      image: "/assets/images/industry/education.jpg",
      statHighlights: [
        { label: "Application Inquiries Handled", value: "100%" },
        { label: "Counseling Booking Rate", value: "+48%" },
        { label: "Enrollment Cycle Time", value: "-50%" }
      ],
      platforms: [
        "WhatsApp",
        "University Website",
        "Facebook Page",
        "Student Information Systems (SIS)"
      ]
    },
    roi: {
      heading: "Maximizing Enrollment Numbers for Institutions",
      subheading:
        "The financial benefit of converting admission inquiries during peak intake cycles.",
      formula:
        "Prospective Applicants (1,000) × Admission Rate (12%) × Annual Tuition Fee ($3,500)",
      exampleLabel: "Private University / Institute",
      exampleMath:
        "1,000 inquiries during seasonal intake. Automating instant replies prevents student drop-off to competing institutions, yielding 25 additional enrollments = $87,500 extra tuition.",
      metrics: [
        {
          value: "48%",
          label: "Increase in Counseling Bookings",
          detail: "Direct calendar reservation with academic advisors."
        },
        {
          value: "24/7",
          label: "Instant International Support",
          detail: "Answers overseas student queries across multiple time zones."
        },
        {
          value: "95%",
          label: "Repetitive Admission FAQ Deflection",
          detail: "Fees, admission dates, and minimum GPA handled automatically."
        }
      ]
    },
    bento: {
        "eyebrow": "Higher Ed Admissions AI",
        "title": "Instant Admission Eligibility and Counseling Scheduling",
        "titleAccent": "Admissions",
        "subtitle": "Answers tuition fee queries, calculates merit scholarships, and schedules counseling sessions.",
        "statItem": {
            "value": "95%",
            "label": "Queries Automated"
        },
        "items": [
            {
                "iconName": "Database",
                "title": "Admission & Fee Navigator",
                "description": "Answers department eligibility, waiver rules, and semester costs."
            },
            {
                "iconName": "Calendar",
                "title": "1-on-1 Counseling Slots",
                "description": "Schedules Zoom or campus counseling sessions with advisors."
            },
            {
                "iconName": "TrendUp",
                "title": "Inquiry Deflection Rate",
                "description": "Answers 95% of admission questions without counselor fatigue."
            },
            {
                "iconName": "PaperPlaneTilt",
                "title": "Course Syllabus Delivery",
                "description": "Shares degree curriculums and admission forms in WhatsApp."
            },
            {
                "iconName": "UserCheck",
                "title": "Counseling Session Boost",
                "description": "Increases completed student counseling sessions by 48%."
            },
            {
                "iconName": "Zap",
                "title": "Deadline Alert Reminders",
                "description": "Notifies applicants before scholarship and batch deadlines close."
            }
        ]
    },
    workflow: {
      badge: "STUDENT ONBOARDING FLOW",
      title: "From Inquiry to First Day of Class",
      description:
        "How Jadubot supports educational institutions throughout the enrollment funnel.",
      steps: [
        {
          step: "01",
          title: "Course Search",
          description: "Student inquires about Computer Science or BBA programs."
        },
        {
          step: "02",
          title: "Eligibility & Fees",
          description: "Bot checks educational background and provides fee schedule."
        },
        {
          step: "03",
          title: "Application Form",
          description: "Bot shares online application portal link with tracking code."
        },
        {
          step: "04",
          title: "Orientation Updates",
          description: "Admitted students receive campus orientation notices via WhatsApp."
        }
      ]
    },
    useCases: [
      {
        title: "Tuition Fee & Scholarship Criteria Check",
        trigger: "Applicant asks 'What is the cost for BBA and what waiver can I get?'",
        dialogue: [
          {
            sender: "user",
            message: "What are the admission requirements and total tuition fee for BBA?"
          },
          {
            sender: "bot",
            message:
              "Our 4-year BBA program consists of 124 credits, totaling $4,200 (spread across 12 semesters). Requirements: Minimum GPA 3.0 in both SSC & HSC. What was your GPA? You might qualify for a 20%-50% merit waiver!"
          },
          { sender: "user", message: "My GPA is 4.8 in HSC." },
          {
            sender: "bot",
            message:
              "Excellent! With GPA 4.8, you qualify for our 40% Merit Scholarship! Your adjusted total fee would be only $2,520. Would you like to start your admission form now?"
          }
        ],
        benefit: "Motivates eligible students with personalized scholarship confirmation."
      }
    ],
    faqs: [
      {
        question: "Can Jadubot communicate with students in both Bangla and English?",
        answer:
          "Yes! Jadubot is multilingual and understands English, standard Bangla, and Banglish (Bangla written in Latin letters)."
      }
    ]
  },
  {
    slug: "saas-chatbot-automation",
    name: "SaaS",
    shortTag: "Software & Cloud",
    navDescription: "Leads, demos, onboarding, and retention.",
    iconName: "Cloud",
    metaTitle: "AI Chatbot for SaaS Companies & Cloud Software | Jadubot",
    metaDescription:
      "Qualify enterprise software leads, automate product demo bookings, guide free trial onboarding, and answer developer documentation queries with Jadubot.",
    hero: {
      badge: "SAAS & SOFTWARE AUTOMATION",
      titleStart: "Qualify Enterprise Software Leads &",
      titleHighlight: "Automate Product Demos",
      titleEnd: "At Scale",
      subtitle:
        "Shorten your B2B sales cycle. Help software buyers explore feature tiers, book product demos directly on sales team calendars, and onboard new trial users automatically.",
      primaryCtaText: "Automate SaaS Funnel",
      secondaryCtaText: "Schedule B2B Demo",
      image: "/assets/images/industry/saas.jpg",
      statHighlights: [
        { label: "Demo Booking Rate", value: "+3.5x" },
        { label: "Sales Qualified Leads (SQL)", value: "+45%" },
        { label: "Trial Activation Speed", value: "-60%" }
      ],
      platforms: ["Website Live Chat", "Slack", "HubSpot", "Calendly", "Product Analytics APIs"]
    },
    roi: {
      heading: "Accelerating SaaS Customer Acquisition & Retention",
      subheading: "Convert anonymous website visitors into qualified pipeline opportunities.",
      formula:
        "Monthly Website Visitors (15,000) × Chat Engagement (3%) × Demo Conversion (20%) × ACV ($2,400)",
      exampleLabel: "B2B Cloud Software Company",
      exampleMath:
        "15,000 visitors × 3% chat = 450 conversations × 20% demos = 90 product demos/mo. Closing 10% yields $21,600 in new monthly recurring revenue (ARR $259k).",
      metrics: [
        {
          value: "3.5x",
          label: "Demo Booking Acceleration",
          detail: "Frictionless in-chat Calendly scheduling without form walls."
        },
        {
          value: "45%",
          label: "Increase in SQL Velocity",
          detail: "Enriched firmographic data captured before sales calls."
        },
        {
          value: "80%",
          label: "L1 Support Automation",
          detail: "API docs, feature questions, and setup guides answered 24/7."
        }
      ]
    },
    bento: {
        "eyebrow": "B2B SaaS Growth AI",
        "title": "Enterprise Lead Enrichment and Automated Demo Booking",
        "titleAccent": "Enrichment",
        "subtitle": "Scores inbound tech buyers, books live AE calendar slots, and guides trial activation.",
        "statItem": {
            "value": "3.5x",
            "label": "Demo Booking Lift"
        },
        "items": [
            {
                "iconName": "UserCheck",
                "title": "Lead Qualification & Triage",
                "description": "Qualifies company size, tech stack, and software budget."
            },
            {
                "iconName": "Calendar",
                "title": "Instant Demo Scheduling",
                "description": "Books meetings directly into account executive calendars."
            },
            {
                "iconName": "TrendUp",
                "title": "Meeting Completion Speed",
                "description": "Accelerates scheduled enterprise demo completion by 3.5x."
            },
            {
                "iconName": "Database",
                "title": "Bi-Directional CRM Sync",
                "description": "Enriches prospect data directly inside HubSpot and Salesforce."
            },
            {
                "iconName": "CheckCircle",
                "title": "Interactive Onboarding",
                "description": "Boosts trial-to-paid activation rates by 38% through in-chat guides."
            },
            {
                "iconName": "Zap",
                "title": "L1 Support Deflection",
                "description": "Answers API questions and technical documentation in milliseconds."
            }
        ]
    },
    workflow: {
      badge: "B2B SOFTWARE PIPELINE",
      title: "From Website Visitor to Enterprise Contract",
      description: "How SaaS companies automate their high-velocity growth engine.",
      steps: [
        {
          step: "01",
          title: "Intent Detection",
          description: "Visitor browses enterprise pricing page for more than 45 seconds."
        },
        {
          step: "02",
          title: "Proactive Engagement",
          description: "Bot opens friendly chat offering comparison guide or live walkthrough."
        },
        {
          step: "03",
          title: "Firmographic Triage",
          description: "Bot validates company size, integration needs, and target launch date."
        },
        {
          step: "04",
          title: "Calendar Booking",
          description: "Qualified buyer selects slot on Account Executive's calendar instantly."
        }
      ]
    },
    useCases: [
      {
        title: "High-Intent Demo Booking",
        trigger: "Visitor on Pricing Page clicks 'Talk to Enterprise Sales'",
        dialogue: [
          {
            sender: "user",
            message: "We have 85 customer service agents and need custom WhatsApp API integrations."
          },
          {
            sender: "bot",
            message:
              "Hello! Our Enterprise plan is ideal for teams over 50 seats, including custom webhooks and dedicated SLAs. Would you like a 20-minute architecture review with our Solutions Engineer?"
          },
          { sender: "user", message: "Yes, tomorrow afternoon works." },
          {
            sender: "bot",
            message:
              "Here are open slots for tomorrow: [Tomorrow 2:30 PM] [Tomorrow 4:00 PM]. Click your preferred time to receive the Google Meet invitation!"
          }
        ],
        benefit: "Locks in valuable enterprise meetings while buying intent is highest."
      }
    ],
    faqs: [
      {
        question: "Can Jadubot read and answer questions from our API documentation?",
        answer:
          "Yes! Jadubot can ingest your knowledge base, API docs, and help articles to provide accurate technical answers to developers and decision-makers."
      }
    ]
  },
  {
    slug: "logistics-chatbot-automation",
    name: "Logistics",
    shortTag: "Freight & Delivery",
    navDescription: "Tracking, delivery updates, and support.",
    iconName: "Truck",
    metaTitle: "AI Chatbot for Logistics, Courier & Delivery Services | Jadubot",
    metaDescription:
      "Automate parcel tracking, address corrections, delivery rescheduling, cash-on-delivery calculations, and driver-customer coordination on WhatsApp.",
    hero: {
      badge: "LOGISTICS & COURIER AUTOMATION",
      titleStart: "Automate Parcel Tracking &",
      titleHighlight: "Delivery Rescheduling",
      titleEnd: "Effortlessly",
      subtitle:
        "Cut call center costs in half. Empower recipients to track packages in real time, adjust delivery addresses, reschedule delivery dates, and confirm COD amounts via WhatsApp.",
      primaryCtaText: "Automate Logistics Support",
      secondaryCtaText: "Book Logistics Demo",
      image: "/assets/images/industry/logistics.jpg",
      statHighlights: [
        { label: "WISMO Call Reduction", value: "-82%" },
        { label: "First-Attempt Delivery Success", value: "+28%" },
        { label: "Tracking Query Speed", value: "< 1s" }
      ],
      platforms: ["WhatsApp API", "Courier Portal", "ERP Systems", "Courier Mobile Apps"]
    },
    roi: {
      heading: "Massive Cost Savings in Courier Customer Support",
      subheading: "Why top courier networks replace call centers with automated WhatsApp tracking.",
      formula:
        "Monthly Deliveries (100,000) × Tracking Inquiries (25%) × Cost Per Support Call ($0.60)",
      exampleLabel: "Regional Courier Network",
      exampleMath:
        "100,000 parcels × 25% tracking queries = 25,000 inquiries. At $0.60 per manual phone call = $15,000 monthly cost reduced to less than $500 with Jadubot.",
      metrics: [
        {
          value: "82%",
          label: "Call Center Load Reduction",
          detail: "'Where is my parcel?' queries resolved automatically via API."
        },
        {
          value: "28%",
          label: "Higher First-Attempt Deliveries",
          detail: "Pre-delivery WhatsApp notices alert recipients before arrival."
        },
        {
          value: "45%",
          label: "Decrease in Address Correction Time",
          detail: "Customers drop live GPS pin or update phone number directly."
        }
      ]
    },
    bento: {
        "eyebrow": "Courier Logistics AI",
        "title": "Instant Tracking Resolution and Delivery Rescheduling",
        "titleAccent": "Tracking",
        "subtitle": "Resolves parcel inquiries under 2 seconds and handles automated delivery rescheduling.",
        "statItem": {
            "value": "28%",
            "label": "First-Attempt Deliveries"
        },
        "items": [
            {
                "iconName": "Truck",
                "title": "Real-Time Parcel Tracking",
                "description": "Resolves delivery inquiries in under 2 seconds via tracking ID."
            },
            {
                "iconName": "Calendar",
                "title": "Automated Rescheduling",
                "description": "Allows buyers to delay delivery date or change drop-off location."
            },
            {
                "iconName": "TrendUp",
                "title": "First-Attempt Success",
                "description": "Boosts first-attempt delivery completion rate by 28%."
            },
            {
                "iconName": "Globe",
                "title": "Live Courier ERP Sync",
                "description": "Pulls real-time rider GPS data and recipient status automatically."
            },
            {
                "iconName": "Shield",
                "title": "Call Center Load Reduction",
                "description": "Deflects 82% of repetitive 'Where is my order?' phone calls."
            },
            {
                "iconName": "Zap",
                "title": "Advance COD Alert",
                "description": "Notifies customer of exact cash amount before rider arrival."
            }
        ]
    },
    workflow: {
      badge: "LOGISTICS LIFECYCLE",
      title: "From Warehouse Dispatch to Successful Handover",
      description: "How courier networks optimize final-mile delivery with automated messaging.",
      steps: [
        {
          step: "01",
          title: "Parcel Dispatched",
          description:
            "Warehouse scans parcel; system triggers WhatsApp dispatch notice with tracking code."
        },
        {
          step: "02",
          title: "Morning Alert",
          description:
            "On delivery day, recipient receives notice with driver contact and COD amount."
        },
        {
          step: "03",
          title: "Live Address Adjustment",
          description: "Recipient can update flat number or share GPS location if needed."
        },
        {
          step: "04",
          title: "Delivery Confirmation",
          description:
            "Instant digital receipt delivered to recipient and status synced to merchant."
        }
      ]
    },
    useCases: [
      {
        title: "Parcel Status & Estimated Delivery Time",
        trigger: "Recipient messages 'Track PTH-98214'",
        dialogue: [
          { sender: "user", message: "Where is my parcel PTH-98214?" },
          {
            sender: "bot",
            message:
              "Parcel #PTH-98214 is Out for Delivery with Rider Karim (01712XXXXXX). Estimated arrival: Today between 3:00 PM - 5:00 PM. COD Amount: $32. Will you be available?"
          },
          { sender: "user", message: "Yes, I am home." },
          {
            sender: "bot",
            message: "Great! Karim has been notified. Thank you for using our express service!"
          }
        ],
        benefit: "Provides instant peace of mind and ensures recipient is prepared."
      }
    ],
    faqs: [
      {
        question: "Can Jadubot connect to our existing courier API?",
        answer:
          "Yes. Jadubot provides robust REST API connectors and webhooks to integrate with Pathao, RedX, Steadfast, Paperfly, DHL, FedEx, or custom in-house courier management databases."
      }
    ]
  },
  {
    slug: "agency-chatbot-automation",
    name: "Agencies",
    shortTag: "Marketing & B2B",
    navDescription: "Leads, consultations, and client comms.",
    iconName: "Briefcase",
    metaTitle: "AI Chatbot & Automation for Marketing Agencies | Jadubot",
    metaDescription:
      "Offer high-margin chatbot and WhatsApp automation services to your agency clients under your own white-label brand, increasing retainers and MRR.",
    hero: {
      badge: "AGENCY & RESELLER AUTOMATION",
      titleStart: "Deliver High-Margin Chat Automation Under",
      titleHighlight: "Your Own Agency Brand",
      titleEnd: "",
      subtitle:
        "Elevate your agency retainer fees. Provide your clients with automated Facebook comment replies, WhatsApp sales bots, and CRM lead capture without writing a single line of backend code.",
      primaryCtaText: "Join Agency Program",
      secondaryCtaText: "Schedule Agency Call",
      image: "/assets/images/industry/agency.jpg",
      statHighlights: [
        { label: "Agency Margin", value: "70%+" },
        { label: "Client Retainer Growth", value: "+2.8x" },
        { label: "Setup Time Per Client", value: "< 1 hr" }
      ],
      platforms: [
        "White-Label Portal",
        "Agency Dashboard",
        "Meta Partner API",
        "Client Billing Automation"
      ]
    },
    roi: {
      heading: "Transforming Project Agencies into Recurring SaaS Businesses",
      subheading:
        "Why top performance agencies bundle chat automation with their ad management retainers.",
      formula: "Agency Clients (20) × Monthly Chatbot Retainer ($300) × 12 Months",
      exampleLabel: "Digital Marketing Agency (20 Clients)",
      exampleMath:
        "Charging just $300/mo per client for chatbot setup and maintenance creates $72,000/year in pure recurring revenue with almost zero marginal overhead.",
      metrics: [
        {
          value: "70%+",
          label: "Service Profit Margins",
          detail: "Software automation replaces repetitive manual client support tasks."
        },
        {
          value: "2.8x",
          label: "Client Lifetime Value",
          detail: "Clients who rely on automated sales flows rarely churn."
        },
        {
          value: "48 hr",
          label: "Rapid White-Label Deployment",
          detail: "Launch under your agency domain, custom logo, and brand colors."
        }
      ]
    },
    bento: {
        "eyebrow": "Agency Operations AI",
        "title": "Unified Multi-Client AI Workspaces and Ad Lead Triage",
        "titleAccent": "Workspaces",
        "subtitle": "Manages 50+ client bot portals from one login and halves lead costs on sponsored ads.",
        "statItem": {
            "value": "50%",
            "label": "Lower Cost Per Lead"
        },
        "items": [
            {
                "iconName": "Layers",
                "title": "Multi-Client Master Portal",
                "description": "Controls 50+ client workspaces with custom staff role access."
            },
            {
                "iconName": "Zap",
                "title": "Click-to-Message Automations",
                "description": "Lowers client cost per qualified lead by up to 50% on Meta ads."
            },
            {
                "iconName": "TrendUp",
                "title": "Retainer Profit Margins",
                "description": "Protects 70%+ gross service margins with recurring retainer fees."
            },
            {
                "iconName": "Shield",
                "title": "White-Label Client Branding",
                "description": "Deploys custom agency domains, logos, and conversation metrics."
            },
            {
                "iconName": "Clock",
                "title": "Rapid 48-Hour Deployment",
                "description": "Launches production bots for new clients in under 48 hours."
            },
            {
                "iconName": "ChartBar",
                "title": "Automated ROI Reporting",
                "description": "Dispatches conversion attribution proof directly to clients."
            }
        ]
    },
    workflow: {
      badge: "AGENCY GROWTH CYCLE",
      title: "How Agencies Scale Retainers with Jadubot",
      description: "From client pitch to automated recurring billing.",
      steps: [
        {
          step: "01",
          title: "Client Audit",
          description: "Audit client's current social response time and demonstrate lost revenue."
        },
        {
          step: "02",
          title: "Template Deployment",
          description: "Deploy pre-built industry template in under 30 minutes."
        },
        {
          step: "03",
          title: "Connect Client Ads",
          description: "Link Click-to-Message ads and comment automation to social campaigns."
        },
        {
          step: "04",
          title: "Automated Monthly Value",
          description: "Client receives monthly report showing thousands of recovered leads."
        }
      ]
    },
    useCases: [
      {
        title: "Upselling Ad Clients to Automation Retainers",
        trigger: "Agency pitch meeting with e-commerce client",
        dialogue: [
          {
            sender: "user",
            message:
              "Our ads are driving clicks, but our sales team can't reply to hundreds of Messenger DMs at night."
          },
          {
            sender: "bot",
            message:
              "Our agency offers 24/7 AI Automation powered by Jadubot. We deploy an automated in-chat cart, instant size advisor, and abandoned checkout recovery that answers within 2 seconds. Would you like to pilot this on your next campaign?"
          }
        ],
        benefit: "Positions your agency as an indispensable revenue growth partner."
      }
    ],
    faqs: [
      {
        question: "Can I brand the software platform with my own agency logo and custom domain?",
        answer:
          "Yes! Our Agency White-Label program allows you to run the platform under your own domain (e.g., bot.youragency.com) with custom logos, branding, and client invoice generation."
      },
      {
        question: "Do you provide agency onboarding and partner training?",
        answer:
          "Yes. Agency partners receive dedicated onboarding, pre-built high-converting campaign templates, and priority technical support."
      }
    ]
  }
];

export function getIndustryBySlug(slug: string): IndustryData | undefined {
  return INDUSTRIES.find((ind) => ind.slug === slug);
}
