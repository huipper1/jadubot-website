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

export interface IndustryShowcaseItem {
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  metrics: string;
  benefits: string[];
  graphicAlt: string;
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
  showcases: IndustryShowcaseItem[];
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
    name: "E-commerce",
    shortTag: "Online Stores",
    navDescription: "Recover abandoned carts, automate order status, COD verification & in-chat checkout.",
    iconName: "ShoppingCart",
    metaTitle: "AI Chatbot Automation for E-commerce Stores | Jadubot",
    metaDescription: "Automate customer support, recover abandoned carts on WhatsApp, verify COD orders, and boost repeat sales 24/7 with Jadubot AI for e-commerce.",
    hero: {
      badge: "E-COMMERCE AUTOMATION",
      titleStart: "Turn Browsing Shoppers Into",
      titleHighlight: "High-Value Orders",
      titleEnd: "Around the Clock",
      subtitle: "Empower your online store with AI agents that answer product sizing questions, recover lost carts on WhatsApp, verify COD deliveries, and process orders directly in chat.",
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
      exampleMath: "1,200 chats/mo × 30% missed × $45 AOV × 12 = $194,400 in preventable lost sales recovered annually.",
      metrics: [
        { value: "3.4x", label: "ROI Within 60 Days", detail: "Based on recovered checkouts and automated upsells." },
        { value: "70%", label: "Support Ticket Deflection", detail: "Product FAQs and order status handled without human agents." },
        { value: "24/7", label: "Instant Buyer Engagement", detail: "Midnight shoppers receive instant size and shipping advice." }
      ]
    },
    showcases: [
      {
        title: "Combat Checkout Abandonment at the Critical Moment",
        subtitle: "High Intent, Low Friction",
        problem: "Shoppers abandon carts due to unexpected delivery fees, sizing doubts, or payment gateway hesitations—costing up to 70% of potential store sales.",
        solution: "Jadubot detects checkout abandonment in Shopify/WooCommerce and triggers a polite, timely WhatsApp message with a one-click checkout link or answers their doubt immediately.",
        metrics: "Recovers 1 out of every 4 abandoned carts automatically.",
        benefits: [
          "Native Shopify & WooCommerce webhook integration",
          "Automated discount incentives for high-value carts",
          "One-tap payment confirmation and delivery selection",
          "Compliant with Meta WhatsApp 24-hour messaging guidelines"
        ],
        graphicAlt: "E-commerce abandoned cart recovery workflow illustration"
      },
      {
        title: "Cash-on-Delivery (COD) Verification & Fraud Prevention",
        subtitle: "Zero Fake Orders",
        problem: "In emerging e-commerce markets, unverified COD orders cause high delivery failure rates, double courier shipping charges, and wasted packaging.",
        solution: "Instant automated OTP or interactive button confirmation in Messenger/WhatsApp confirms buyer intent before your warehouse packs and ships the parcel.",
        metrics: "Drops return-to-origin (RTO) courier rates by 45%.",
        benefits: [
          "Automated phone and address validation before dispatch",
          "Interactive 'Confirm Order' or 'Change Address' buttons",
          "Real-time courier API sync (Pathao, Steadfast, RedX, DHL)",
          "Automatic inventory release if order remains unconfirmed"
        ],
        graphicAlt: "COD order verification and address confirmation"
      }
    ],
    workflow: {
      badge: "SEAMLESS SHOPPING JOURNEY",
      title: "How Jadubot Drives E-commerce Sales",
      description: "From the first product comment to repeat post-purchase engagement.",
      steps: [
        { step: "01", title: "Ad or Social Comment", description: "Shopper comments 'Price?' on Instagram or clicks a Facebook Click-to-Messenger ad." },
        { step: "02", title: "Instant Product Card", description: "Jadubot instantly replies in DM with image, size options, stock status, and direct buy button." },
        { step: "03", title: "In-Chat Checkout", description: "Shopper selects size and color, enters delivery address, and confirms via bKash, card, or COD." },
        { step: "04", title: "Live Tracking & Upsell", description: "System pushes automated courier tracking updates and sends personalized product recommendations." }
      ]
    },
    useCases: [
      {
        title: "Product Sizing & Stock Availability Inquiry",
        trigger: "Customer comments 'Is medium in stock?' or messages product link",
        dialogue: [
          { sender: "user", message: "Hi! Do you have this blue jacket in Medium, and what is the chest measurement?" },
          { sender: "bot", message: "Hello! Yes, the Electric Blue Jacket in Medium is in stock (3 units left). The chest measurement is 40 inches. Would you like to order now with free shipping?" },
          { sender: "user", message: "Yes please, order Medium." },
          { sender: "bot", message: "Great choice! Here is your quick order link with Medium pre-selected: [Order Now - $55]. You can pay with Card or COD." }
        ],
        benefit: "Converts casual product curiosity into an active order in less than 60 seconds."
      },
      {
        title: "Automated Post-Purchase Tracking Support",
        trigger: "Customer asks 'Where is my order #5482?'",
        dialogue: [
          { sender: "user", message: "Where is my parcel? Order #5482" },
          { sender: "bot", message: "Looking up Order #5482... Your parcel was picked up by Pathao Express today at 10:30 AM (Tracking: PTH-8921). Estimated delivery is tomorrow between 2 PM - 6 PM." }
        ],
        benefit: "Eliminates 80% of repetitive 'Where Is My Order' (WISMO) support queries."
      },
      {
        title: "Abandoned Cart WhatsApp Recovery",
        trigger: "Cart idle for 30 minutes without purchase",
        dialogue: [
          { sender: "bot", message: "Hi Sarah! You left your favorite Linen Dress in your cart. We saved it for you! Use code SAVE10 for 10% off if you complete your order today: [Complete Purchase]" },
          { sender: "user", message: "Can I pay with Cash on Delivery?" },
          { sender: "bot", message: "Absolutely! Cash on Delivery is available across all 64 districts. Click the link above and select COD at checkout!" }
        ],
        benefit: "High-conversion re-engagement that directly recovers lost checkout revenue."
      }
    ],
    faqs: [
      {
        question: "Can Jadubot connect to my Shopify or WooCommerce store catalog?",
        answer: "Yes. Jadubot provides deep 1-click integrations for Shopify and WooCommerce. Your entire product inventory, variations, pricing, and live stock levels synchronize automatically."
      },
      {
        question: "How does Jadubot handle Cash-on-Delivery (COD) verification?",
        answer: "When a customer selects COD, Jadubot sends an automated confirmation message on WhatsApp or Messenger with order items and address. The user simply taps 'Confirm' to validate intent before your fulfillment team packs the order."
      },
      {
        question: "Can customers complete checkout directly inside Facebook Messenger?",
        answer: "Yes! Jadubot features a built-in lightweight Messenger cart where customers can select items, enter address details, and checkout without being forced to visit a slow external browser page."
      }
    ]
  },
  {
    slug: "retail-b2c-ecommerce-chatbot-automation",
    name: "Retail B2C",
    shortTag: "B2C Retailers",
    navDescription: "Omnichannel store support, seasonal campaign broadcasts & product sizing guidance.",
    iconName: "Store",
    metaTitle: "AI Chatbot Automation for B2C Retail Brands | Jadubot",
    metaDescription: "Scale retail store customer engagement, drive foot traffic, automate promotional broadcasts, and connect online inquiries with physical store outlets.",
    hero: {
      badge: "RETAIL B2C AUTOMATION",
      titleStart: "Connect Physical Outlets With",
      titleHighlight: "Omnichannel AI Chat",
      titleEnd: "Effortlessly",
      subtitle: "Bridge the gap between your physical retail stores and digital social channels. Help shoppers locate nearest outlets, verify store stock, and receive seasonal VIP promotions.",
      primaryCtaText: "Automate Retail Sales",
      secondaryCtaText: "Book Retail Consultation",
      image: "/assets/images/industry/retail.jpg",
      statHighlights: [
        { label: "Store Foot Traffic Boost", value: "+32%" },
        { label: "VIP Campaign Open Rate", value: "91%" },
        { label: "Outlet Stock Inquiries", value: "100% Auto" }
      ],
      platforms: ["Facebook Messenger", "WhatsApp Business", "Instagram DM", "Google Business Profile", "POS Systems"]
    },
    roi: {
      heading: "The Business Return of Omnichannel Retail Automation",
      subheading: "How B2C retail brands turn digital social chatter into physical store visits and revenue.",
      formula: "Outlet Inquiries × Foot Traffic Conversion (22%) × Average In-Store Basket Size ($60)",
      exampleLabel: "Multi-Branch Retail Chain",
      exampleMath: "3,500 outlet queries/month × 22% store visits = 770 additional store shoppers × $60 basket = $46,200 extra monthly store revenue.",
      metrics: [
        { value: "91%", label: "WhatsApp Broadcast Open Rate", detail: "Compared to less than 15% for traditional email flyers." },
        { value: "4.8x", label: "Holiday Campaign Sales", detail: "Interactive festive discount scratchers and digital coupons." },
        { value: "0 sec", label: "Store Locator Wait Time", detail: "GPS-powered nearest branch recommendations in chat." }
      ]
    },
    showcases: [
      {
        title: "GPS-Powered Store Locator & Outlet Stock Check",
        subtitle: "Drive Digital Shoppers to Physical Aisles",
        problem: "Customers frequently ask 'Which branch has size XL in stock?' or 'Is your Dhanmondi branch open today?' across Facebook comments and DMs, receiving answers hours too late.",
        solution: "Shoppers share their current location or select a neighborhood, and Jadubot instantly shares the nearest branch address, live opening hours, Google Maps directions, and contact info.",
        metrics: "Over 85% of store locator inquiries result in same-day physical visits.",
        benefits: [
          "Instant Google Maps location pinning directly in WhatsApp/Messenger",
          "Live branch opening/closing hours and phone numbers",
          "Branch-specific inventory query routing to store managers",
          "Clickable directions for Uber, Pathao, or navigation apps"
        ],
        graphicAlt: "GPS retail store locator and branch stock checker in chat"
      },
      {
        title: "Segmented Broadcasts for VIP Seasonal Sales",
        subtitle: "High Engagement, Zero Spam",
        problem: "SMS marketing is increasingly ignored, costly, and lacks rich visual appeal. Retail brands struggle to inform existing buyers about clearance sales.",
        solution: "Deliver rich media WhatsApp broadcasts with high-resolution collection lookbooks, personalized discount vouchers, and direct RSVP buttons.",
        metrics: "Achieves 91% open rates and 28% click-through engagement.",
        benefits: [
          "Filtered audience segmentation by purchase frequency and city",
          "Rich interactive media cards with swipeable carousels",
          "Personalized customer name and loyalty tier tokens",
          "Instant opt-out management compliant with carrier regulations"
        ],
        graphicAlt: "Retail VIP WhatsApp marketing broadcast and promotional campaign"
      }
    ],
    workflow: {
      badge: "RETAIL OMNICHANNEL FLOW",
      title: "From Social Discovery to Store Purchase",
      description: "How Jadubot navigates customers through the complete retail lifecycle.",
      steps: [
        { step: "01", title: "Instagram Reel / Story", description: "Customer views new fashion collection on Instagram and sends a direct message." },
        { step: "02", title: "Branch Stock Check", description: "Bot shares available colorways and confirms which nearby outlets have stock." },
        { step: "03", title: "Exclusive Store Voucher", description: "Bot issues a digital barcode voucher for 15% off that can be scanned at the physical POS." },
        { step: "04", title: "Loyalty Points Accrual", description: "Post-purchase, customer receives their updated loyalty balance and feedback prompt in WhatsApp." }
      ]
    },
    useCases: [
      {
        title: "Nearest Outlet & Operating Hours Guide",
        trigger: "Customer asks 'Where is your closest shop in Uttara?'",
        dialogue: [
          { sender: "user", message: "Is your Uttara outlet open today?" },
          { sender: "bot", message: "Yes! Our Uttara Sector 3 Flagship Store is open today from 10:00 AM to 9:30 PM. Location: House 12, Road 7, Sector 3. Here is the Google Maps link: [Open Maps]. Need directions or phone contact?" }
        ],
        benefit: "Provides instant geographical guidance, converting interest into in-person foot traffic."
      },
      {
        title: "Loyalty Program Tier & Reward Inquiry",
        trigger: "Customer asks 'How many points do I have?'",
        dialogue: [
          { sender: "user", message: "Check my loyalty points for 01711XXXXXX" },
          { sender: "bot", message: "Welcome back, Tanvir! You have 420 Gold Tier points ($42 value). You can redeem your points at any outlet or online checkout. Would you like your digital member pass?" }
        ],
        benefit: "Fosters brand affinity and encourages repeat spending without app installations."
      }
    ],
    faqs: [
      {
        question: "Can Jadubot integrate with our physical Point-of-Sale (POS) system?",
        answer: "Yes. Through our REST API and webhook infrastructure, Jadubot can connect with modern retail POS and ERP systems to verify digital coupons and sync loyalty balances."
      },
      {
        question: "Is there a risk of WhatsApp number blocking with promotional broadcasts?",
        answer: "No. Jadubot uses the official Meta Cloud API with pre-approved template messages and opt-in validation, ensuring 100% compliance with WhatsApp Business policies."
      }
    ]
  },
  {
    slug: "healthcare-chatbot-automation",
    name: "Healthcare",
    shortTag: "Clinics & Hospitals",
    navDescription: "Patient support, 24/7 doctor appointment scheduling, diagnostic tests & follow-ups.",
    iconName: "Stethoscope",
    metaTitle: "AI Chatbot for Healthcare, Clinics & Diagnostic Centers | Jadubot",
    metaDescription: "Streamline patient doctor bookings, lab test inquiries, clinic operating hours, and pre-consultation reminders with HIPAA-conscious AI chat automation.",
    hero: {
      badge: "HEALTHCARE & CLINIC AUTOMATION",
      titleStart: "Effortless Patient Scheduling &",
      titleHighlight: "Doctor Appointments",
      titleEnd: "24 Hours a Day",
      subtitle: "Alleviate reception call congestion. Allow patients to select specialist doctors, view available slots, confirm diagnostic tests, and receive appointment reminders automatically.",
      primaryCtaText: "Deploy Healthcare Bot",
      secondaryCtaText: "Book Healthcare Demo",
      image: "/assets/images/industry/healthcare.jpg",
      statHighlights: [
        { label: "Appointment No-Shows", value: "-60%" },
        { label: "Reception Call Load", value: "-75%" },
        { label: "Patient Satisfaction", value: "98%" }
      ],
      platforms: ["WhatsApp Business", "Hospital Website", "Facebook Messenger", "Hospital Management Systems (HMS)"]
    },
    roi: {
      heading: "Financial & Operational Gains for Healthcare Providers",
      subheading: "Reducing empty doctor appointment slots and reception overhead.",
      formula: "Monthly Bookings × Missed Slot Rate (18%) × Average Doctor Fee ($30)",
      exampleLabel: "Specialist Diagnostic Center",
      exampleMath: "1,500 doctor slots/month × 18% no-shows × $30 fee = $8,100 lost monthly doctor capacity recovered through automated WhatsApp reminders.",
      metrics: [
        { value: "60%", label: "Reduction in No-Shows", detail: "Automated 24h & 2h WhatsApp reminders with reschedule buttons." },
        { value: "3 min", label: "Average Booking Time", detail: "Patients schedule appointments in minutes without phone hold times." },
        { value: "100%", label: "Emergency Notice Compliance", detail: "Doctor delay or schedule change broadcasted instantly." }
      ]
    },
    showcases: [
      {
        title: "24/7 Specialist Doctor Discovery & Slot Booking",
        subtitle: "Zero Waiting on Reception Hold",
        problem: "Patients trying to book doctors during busy morning hours face busy phone lines, leading to frustrated patients and vacant afternoon consultations.",
        solution: "Patients select medical specialty (Cardiology, Dermatology, Pediatrics), choose their preferred doctor, view real-time open slots, and confirm appointments instantly.",
        metrics: "Cuts receptionist booking administration time by 75%.",
        benefits: [
          "Interactive doctor profiles with fees, qualifications, and visiting days",
          "Automated digital booking receipt with serial number and room code",
          "Integration with Hospital Management Information Systems (HMIS)",
          "Instant one-click cancellation and rescheduling"
        ],
        graphicAlt: "Doctor appointment booking interface on WhatsApp"
      },
      {
        title: "Diagnostic Test Pricing & Preparation Guidelines",
        subtitle: "Accurate Patient Preparation",
        problem: "Patients frequently arrive for fasting blood sugar or ultrasound tests improperly prepared, forcing appointments to be cancelled and rebooked.",
        solution: "Jadubot delivers instant test costs, required fasting hours, sample collection instructions, and report delivery schedules directly to the patient's phone.",
        metrics: "Reduces improper lab test preparation incidents by 82%.",
        benefits: [
          "Complete diagnostic test directory with pricing and turnaround times",
          "Pre-test fasting and dietary guideline checklists",
          "Automated notification when lab test report is ready for download",
          "Home sample collection booking coordination"
        ],
        graphicAlt: "Diagnostic test pricing and preparation guide in chat"
      }
    ],
    workflow: {
      badge: "PATIENT CARE PIPELINE",
      title: "How Patient Automation Works",
      description: "A compassionate, dependable booking and reminder experience.",
      steps: [
        { step: "01", title: "Patient Inquiry", description: "Patient messages on WhatsApp seeking an appointment with a Cardiologist." },
        { step: "02", title: "Slot Selection", description: "Jadubot presents available visiting hours and confirmed serial availability." },
        { step: "03", title: "Instant Confirmation", description: "Patient enters name and age; system issues a verified digital token." },
        { step: "04", title: "Timely Reminders", description: "System dispatches reminders 24 hours and 2 hours prior to consultation." }
      ]
    },
    useCases: [
      {
        title: "Doctor Appointment Reservation",
        trigger: "Patient messages 'Book appointment with Dr. Rahman'",
        dialogue: [
          { sender: "user", message: "I need an appointment with Dr. Farhana Rahman (Skin Specialist) this Thursday." },
          { sender: "bot", message: "Dr. Farhana Rahman is available this Thursday, Sept 14th between 5:30 PM - 8:30 PM. Available serials: Serial 06 (6:00 PM) or Serial 12 (7:15 PM). Which do you prefer?" },
          { sender: "user", message: "Serial 06 please. Patient name: Rina Begum." },
          { sender: "bot", message: "Confirmed! Serial #06 for Rina Begum with Dr. Farhana Rahman on Thursday at 6:00 PM (Room 304). Please arrive 15 minutes early. [Download Pass]" }
        ],
        benefit: "Books verified patient consultations with zero staff intervention."
      },
      {
        title: "Diagnostic Test & Fasting Guidance",
        trigger: "Patient asks 'Do I need to fast for Lipid Profile?'",
        dialogue: [
          { sender: "user", message: "What is the fee for Lipid Profile and what are the fasting rules?" },
          { sender: "bot", message: "Lipid Profile test fee is $18 (1,800 BDT). Preparation: 10-12 hours of strict fasting required (water is allowed). Reports are delivered within 6 hours. Would you like to schedule sample collection at home or clinic?" }
        ],
        benefit: "Ensures accurate diagnostic preparation and transparent pricing."
      }
    ],
    faqs: [
      {
        question: "Is patient medical data secure and private?",
        answer: "Yes. Jadubot adheres strictly to data protection standards. We do not store confidential medical records on third-party servers, and patient communications are encrypted end-to-end."
      },
      {
        question: "Can our clinic staff take over the conversation for critical emergencies?",
        answer: "Yes. Emergency keywords automatically flag conversations with urgent priority in Jadubot's unified team inbox, alerting duty doctors or receptionists with sound notifications."
      }
    ]
  },
  {
    slug: "real-estate-chatbot-automation",
    name: "Real Estate",
    shortTag: "Real Estate & Developers",
    navDescription: "Instant property lead qualification, virtual tour bookings & broker handoff.",
    iconName: "Home",
    metaTitle: "Real Estate AI Chatbot & Lead Automation | Jadubot",
    metaDescription: "Qualify home buyers, capture property investor leads, schedule site visits, and showcase apartment floor plans automatically on Facebook & WhatsApp.",
    hero: {
      badge: "REAL ESTATE & PROPERTY AUTOMATION",
      titleStart: "Qualify High-Intent Property Buyers",
      titleHighlight: "In Real Time",
      titleEnd: "Before Competitors Call",
      subtitle: "Real estate leads cool down within 15 minutes. Jadubot instantly qualifies buyer budget, preferred square footage, and neighborhood preferences, handing ready buyers to your sales agents.",
      primaryCtaText: "Automate Property Leads",
      secondaryCtaText: "Schedule Real Estate Demo",
      image: "/assets/images/industry/real-estate.jpg",
      statHighlights: [
        { label: "Lead Response Time", value: "< 5s" },
        { label: "Qualified Site Visits", value: "+44%" },
        { label: "Cost Per Lead (CPL)", value: "-35%" }
      ],
      platforms: ["Facebook Ads", "WhatsApp Business", "Instagram DM", "Website Widget", "HubSpot & Salesforce"]
    },
    roi: {
      heading: "Why Real Estate Speed-to-Lead Decides Sales",
      subheading: "Harvard Business Review proves responding within 5 minutes increases qualification odds by 21x.",
      formula: "Monthly Ad Leads (500) × Lead Leakage Rate (60%) × Commission Per Deal ($4,000)",
      exampleLabel: "Property Developer / Brokerage",
      exampleMath: "500 ad leads × 60% slow response leakage = 300 missed opportunities. Converting just 2 additional buyers covers Jadubot for 5+ years.",
      metrics: [
        { value: "21x", label: "Lead Qualification Rate", detail: "When prospective buyers receive property details under 60 seconds." },
        { value: "44%", label: "Increase in Site Visits", detail: "Direct calendar scheduling inside WhatsApp conversations." },
        { value: "100%", label: "CRM Sync Accuracy", detail: "Leads automatically exported to Google Sheets or enterprise CRM." }
      ]
    },
    showcases: [
      {
        title: "Automated Budget & Preference Qualification",
        subtitle: "Focus Brokers on Genuine Buyers",
        problem: "Brokers waste 70% of their day calling Facebook ad leads who either have inadequate budget, wrong location expectations, or were casually browsing.",
        solution: "Jadubot engages leads instantly upon ad click, asking 3 key qualifying questions: preferred area, bedroom count, and budget range—filtering out non-buyers.",
        metrics: "Brokers receive only pre-qualified, high-intent prospects.",
        benefits: [
          "Interactive budget range selectors ($50k-$100k, $100k-$250k, Luxury)",
          "Floor plan PDF brochure downloads directly inside WhatsApp",
          "Automated handover to dedicated area broker once qualified",
          "Instant alert notifications sent to sales manager on WhatsApp"
        ],
        graphicAlt: "Real estate lead qualification bot filtering budget and bedrooms"
      },
      {
        title: "Physical Site Visit & Model Apartment Scheduling",
        subtitle: "Turn Inquiries Into Booked Walkthroughs",
        problem: "Coordinating site visit times through manual telephone calls leads to repeated phone tag, missed weekends, and low show-up rates.",
        solution: "Buyers choose a convenient Saturday or weekday slot, receive a GPS pin and calendar invite, and get an automated WhatsApp reminder on the morning of the tour.",
        metrics: "Increases physical weekend site visit attendance by 44%.",
        benefits: [
          "Interactive date and time slot selector",
          "Automated GPS directions to project site and sales gallery",
          "Broker contact details shared with the client for smooth meetups",
          "Automated follow-up survey after visit completion"
        ],
        graphicAlt: "Property site visit booking and directions"
      }
    ],
    workflow: {
      badge: "PROPERTY BUYER PIPELINE",
      title: "From Click-to-Messenger Ad to Handshake",
      description: "How Jadubot turns social media ad spend into signed property contracts.",
      steps: [
        { step: "01", title: "Targeted Ad Click", description: "Prospective buyer clicks Facebook/Instagram ad showcasing luxury apartments." },
        { step: "02", title: "Automated Triage", description: "Bot welcomes user and captures preferred size (3-bed, 4-bed) and budget." },
        { step: "03", title: "Brochure & Video Tour", description: "Jadubot delivers project brochure PDF, video walkthrough, and payment plan." },
        { step: "04", title: "Broker Meetup", description: "Lead books a Saturday site visit; details sync to broker CRM with full chat context." }
      ]
    },
    useCases: [
      {
        title: "Apartment Floor Plan & Pricing Inquiry",
        trigger: "Lead clicks Facebook Ad for 'Gulshan Luxury Condos'",
        dialogue: [
          { sender: "user", message: "What is the price of the 3-bedroom apartment in Gulshan?" },
          { sender: "bot", message: "Hello! Our 3-bedroom residences range from 2,150 to 2,600 sq ft, starting at $220,000 with flexible 4-year installment plans. Would you like to view the floor plan brochure?" },
          { sender: "user", message: "Yes, send the brochure." },
          { sender: "bot", message: "Here is the architectural floor plan PDF: [Download Brochure]. Would you like to tour our fully furnished model apartment this Saturday?" }
        ],
        benefit: "Instant engagement with high-ticket property buyers while interest is at its peak."
      }
    ],
    faqs: [
      {
        question: "Can Jadubot sync leads directly to our CRM or Google Sheets?",
        answer: "Yes. Every qualified lead with their name, phone number, budget, and preferred area is pushed instantly to your CRM (HubSpot, Salesforce, Zoho) or Google Sheets."
      },
      {
        question: "What happens if a high-net-worth buyer wants to talk to a human immediately?",
        answer: "Jadubot includes a 'Live Agent Request' button that triggers an instant WhatsApp notification or phone call alert to your senior sales executives."
      }
    ]
  },
  {
    slug: "restaurant-chatbot-automation",
    name: "Restaurant",
    shortTag: "Food & Dining",
    navDescription: "Table reservations, interactive digital menus, delivery updates & review collection.",
    iconName: "Utensils",
    metaTitle: "Restaurant AI Chatbot for Reservations & Food Orders | Jadubot",
    metaDescription: "Automate restaurant table reservations, share digital photo menus, capture direct delivery orders without aggregator commissions, and gather guest reviews.",
    hero: {
      badge: "RESTAURANT & CAFE AUTOMATION",
      titleStart: "Automate Table Bookings &",
      titleHighlight: "Direct Food Orders",
      titleEnd: "Zero Commision",
      subtitle: "Stop paying 25-30% food aggregator commissions. Let diners browse appetizing menus, reserve tables for anniversaries and parties, and place takeaway orders directly on WhatsApp.",
      primaryCtaText: "Start Restaurant Bot",
      secondaryCtaText: "Schedule Cafe Demo",
      image: "/assets/images/industry/restaurant.jpg",
      statHighlights: [
        { label: "Commission Saved", value: "30%" },
        { label: "Table Booking Accuracy", value: "100%" },
        { label: "Google Review Volume", value: "+3.2x" }
      ],
      platforms: ["WhatsApp Business", "Instagram DM", "Facebook Page", "Google Business Profile", "POS Systems"]
    },
    roi: {
      heading: "Save Tens of Thousands in Aggregator Commissions",
      subheading: "Transition repeat neighborhood foodies to direct WhatsApp ordering.",
      formula: "Monthly Direct Orders (800) × Avg. Order ($25) × Saved Commission (25%)",
      exampleLabel: "Casual Dining Restaurant / Cloud Kitchen",
      exampleMath: "800 direct orders/mo × $25 order value × 25% commission saved = $5,000 extra monthly bottom-line profit retained by the restaurant.",
      metrics: [
        { value: "30%", label: "Third-Party Fees Saved", detail: "Direct ordering keeps profits in your kitchen instead of aggregators." },
        { value: "4.9★", label: "Reputation Elevation", detail: "Automated post-dining review prompts sent to satisfied guests." },
        { value: "100%", label: "Automated Peak Booking", detail: "Handles Friday evening table rushes without missing telephone calls." }
      ]
    },
    showcases: [
      {
        title: "Direct Digital Menu & Food Ordering in WhatsApp",
        subtitle: "Mouth-Watering Visual Catalog",
        problem: "PDF menus are cumbersome to pinch-and-zoom on mobile, and third-party delivery apps eat up to 30% of each restaurant meal's profit margin.",
        solution: "Jadubot delivers a modern interactive menu where diners can filter by Cuisine, Chef Specials, or Vegetarian, customize their order, and enter delivery details.",
        metrics: "Cuts delivery aggregator commission costs to zero.",
        benefits: [
          "Interactive food item cards with mouthwatering photos and descriptions",
          "Customizable add-ons (extra cheese, spice levels, drinks)",
          "Delivery address capture with live location pin",
          "Automated kitchen printing via POS webhook"
        ],
        graphicAlt: "Digital WhatsApp food ordering menu with interactive items"
      },
      {
        title: "Automated Table Reservation & Special Occasions",
        subtitle: "Zero Double-Bookings",
        problem: "Phone calls during noisy dinner service lead to misspelled guest names, forgotten reservations, and awkward double-booked tables on busy weekends.",
        solution: "Guests select guest count, dining date, seating preference (outdoor, rooftop, VIP booth), and receive an instant booking confirmation with calendar integration.",
        metrics: "Eliminates reservation errors completely.",
        benefits: [
          "Guest party size, date, and time slot verification",
          "Special request capture (birthday cake, anniversary setup, quiet corner)",
          "Automated reminder 2 hours prior to reservation time",
          "One-tap cancellation so tables can be quickly reassigned"
        ],
        graphicAlt: "Restaurant table reservation interface on chat"
      }
    ],
    workflow: {
      badge: "GUEST DINING LIFECYCLE",
      title: "From Food Discovery to 5-Star Review",
      description: "How restaurants create loyal regulars with chat automation.",
      steps: [
        { step: "01", title: "Menu Discovery", description: "Customer views delicious food photo on Instagram Story and taps 'Message'." },
        { step: "02", title: "Interactive Selection", description: "Customer selects favorites and customizes portion size and sides." },
        { step: "03", title: "Order / Reservation Confirm", description: "Direct checkout via bKash/Card or instant table reservation confirmation." },
        { step: "04", title: "Post-Meal Review", description: "Automated polite request sent 2 hours later encouraging a 5-star Google Review." }
      ]
    },
    useCases: [
      {
        title: "Weekend Table Reservation",
        trigger: "Guest messages 'Book a table for 4 tonight'",
        dialogue: [
          { sender: "user", message: "Hi, do you have a rooftop table for 4 people tonight at 8:00 PM?" },
          { sender: "bot", message: "Hello! Yes, we have a wonderful rooftop table available at 8:00 PM tonight. May I have your name and contact number to reserve it?" },
          { sender: "user", message: "Name is Kamran, 01819XXXXXX" },
          { sender: "bot", message: "Reserved! Table for 4 under Kamran at 8:00 PM tonight (Rooftop). We hold tables for 15 minutes. See you soon! [Get Location]" }
        ],
        benefit: "Instantly confirms reservations without interrupting busy waitstaff."
      }
    ],
    faqs: [
      {
        question: "Can our kitchen receive instant alerts when a food order is placed?",
        answer: "Yes. Orders can be printed automatically on your thermal kitchen receipt printer or sent as instant alerts to your kitchen WhatsApp group or POS."
      },
      {
        question: "Can we restrict delivery distance to our neighborhood?",
        answer: "Yes. Jadubot allows you to set delivery boundaries or verify customer postal codes/areas before accepting delivery orders."
      }
    ]
  },
  {
    slug: "finance-chatbot-automation",
    name: "Finance",
    shortTag: "Banking & Fintech",
    navDescription: "Lead qualification, loan calculators, secure document routing & support.",
    iconName: "ShieldCheck",
    metaTitle: "AI Chatbot for Financial Services, Banking & Microfinance | Jadubot",
    metaDescription: "Accelerate financial customer onboarding, calculate loan EMIs, qualify credit applicants, and answer banking FAQs securely on WhatsApp.",
    hero: {
      badge: "FINANCIAL SERVICES AUTOMATION",
      titleStart: "Secure Financial Conversations &",
      titleHighlight: "Loan Lead Qualification",
      titleEnd: "At Scale",
      subtitle: "Simplify complex financial products. Help customers calculate home and auto loan EMIs, verify eligibility criteria, and route qualified loan applications to your loan officers.",
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
      formula: "Monthly Inquiries × Unqualified Dropoff (45%) × Net Value Per Active Account ($120)",
      exampleLabel: "Retail Bank / Microfinance Provider",
      exampleMath: "2,000 monthly inquiries × 45% dropoff = 900 lost prospects. Capturing just 15% through instant loan calculations creates $16,200 in monthly lifetime value.",
      metrics: [
        { value: "52%", label: "Faster Application Completion", detail: "Interactive step-by-step guidance replaces tedious 12-page paper forms." },
        { value: "99.9%", label: "Uptime & Availability", detail: "Bank-grade infrastructure capable of handling high-volume surges." },
        { value: "Zero", label: "Compliance Compromise", detail: "Strict adherence to customer consent and financial disclosure standards." }
      ]
    },
    showcases: [
      {
        title: "Interactive Loan EMI & Investment Calculators",
        subtitle: "Instant Financial Transparency",
        problem: "Customers find financial percentage formulas confusing and abandon loan applications when they cannot easily visualize their monthly repayment obligations.",
        solution: "Jadubot provides an interactive EMI calculator in chat. Users enter loan amount and tenure, receiving an instant breakdown of monthly payments, interest rates, and total cost.",
        metrics: "Increases completed loan applications by 52%.",
        benefits: [
          "Real-time calculations for Home, Car, Personal, and SME loans",
          "Comparison between fixed and floating interest rate scenarios",
          "Instant eligibility check based on monthly net salary",
          "One-tap handoff to human credit assessment officers"
        ],
        graphicAlt: "Loan EMI calculator in WhatsApp and financial advisory bot"
      },
      {
        title: "Secure Document Collection & Lead Verification",
        subtitle: "Frictionless Document Ingestion",
        problem: "Chasing loan applicants for identity cards, salary certificates, and bank statements via manual email chains delays approvals by 2 to 3 weeks.",
        solution: "Applicants upload PDF or photo documents securely through WhatsApp or encrypted web chat, with automated format verification and categorization.",
        metrics: "Reduces loan processing cycle time from 14 days down to 4 days.",
        benefits: [
          "Secure encrypted document transfer with virus scanning",
          "Automated verification of NID / Passport / TIN format",
          "Real-time reminders if a mandatory page is missing",
          "Direct integration into loan origination systems (LOS)"
        ],
        graphicAlt: "Secure financial document upload and verification in chat"
      }
    ],
    workflow: {
      badge: "FINANCIAL APPLICATION WORKFLOW",
      title: "How Loan Applications Flow Seamlessly",
      description: "From first curiosity to loan officer review.",
      steps: [
        { step: "01", title: "Loan Discovery", description: "Customer inquires about home mortgage or car loan terms." },
        { step: "02", title: "Instant EMI Calculation", description: "User enters desired amount; bot calculates monthly repayment immediately." },
        { step: "03", title: "Basic Qualification", description: "Bot validates salary, employment type, and city eligibility criteria." },
        { step: "04", title: "Loan Officer Routing", description: "Qualified lead with calculation summary assigned to loan specialist." }
      ]
    },
    useCases: [
      {
        title: "Home Loan Eligibility & EMI Estimation",
        trigger: "User asks 'How much is the EMI for a $50,000 home loan?'",
        dialogue: [
          { sender: "user", message: "What would be the monthly EMI for a $50,000 home loan for 15 years?" },
          { sender: "bot", message: "At our current 8.5% interest rate, a $50,000 home loan over 15 years yields an estimated monthly EMI of $492/month. Would you like to check if your salary qualifies?" },
          { sender: "user", message: "Yes, my monthly income is $1,800." },
          { sender: "bot", message: "Congratulations! Your income meets the threshold (max debt-to-income allowed is 40%). Would you like our Home Loan Advisor to call you tomorrow morning?" }
        ],
        benefit: "Filters and qualifies high-value banking prospects automatically."
      }
    ],
    faqs: [
      {
        question: "Does Jadubot handle sensitive customer banking credentials?",
        answer: "No. Jadubot never requests or stores PINs, passwords, or full credit card CVVs. Financial inquiries focus on general assistance, loan qualification, and customer support routing."
      }
    ]
  },
  {
    slug: "education-chatbot-automation",
    name: "Education",
    shortTag: "Schools & EdTech",
    navDescription: "Admissions, course counseling, fee structures & student engagement.",
    iconName: "GraduationCap",
    metaTitle: "AI Chatbot for Universities, Schools & EdTech Platforms | Jadubot",
    metaDescription: "Automate student admissions inquiries, share course prospectuses, schedule counseling sessions, and answer tuition fee questions 24/7 with Jadubot.",
    hero: {
      badge: "EDUCATION & ADMISSIONS AUTOMATION",
      titleStart: "Accelerate Student Admissions &",
      titleHighlight: "Enrollment Inquiries",
      titleEnd: "Around the Clock",
      subtitle: "Never let prospective students slip away. Guide applicants through course prerequisites, tuition fees, scholarship criteria, and application deadlines on WhatsApp and Messenger.",
      primaryCtaText: "Automate Admissions",
      secondaryCtaText: "Schedule Education Demo",
      image: "/assets/images/industry/education.jpg",
      statHighlights: [
        { label: "Application Inquiries Handled", value: "100%" },
        { label: "Counseling Booking Rate", value: "+48%" },
        { label: "Enrollment Cycle Time", value: "-50%" }
      ],
      platforms: ["WhatsApp", "University Website", "Facebook Page", "Student Information Systems (SIS)"]
    },
    roi: {
      heading: "Maximizing Enrollment Numbers for Institutions",
      subheading: "The financial benefit of converting admission inquiries during peak intake cycles.",
      formula: "Prospective Applicants (1,000) × Admission Rate (12%) × Annual Tuition Fee ($3,500)",
      exampleLabel: "Private University / Institute",
      exampleMath: "1,000 inquiries during seasonal intake. Automating instant replies prevents student drop-off to competing institutions, yielding 25 additional enrollments = $87,500 extra tuition.",
      metrics: [
        { value: "48%", label: "Increase in Counseling Bookings", detail: "Direct calendar reservation with academic advisors." },
        { value: "24/7", label: "Instant International Support", detail: "Answers overseas student queries across multiple time zones." },
        { value: "95%", label: "Repetitive Admission FAQ Deflection", detail: "Fees, admission dates, and minimum GPA handled automatically." }
      ]
    },
    showcases: [
      {
        title: "Instant Admission Eligibility & Fee Guidance",
        subtitle: "Clarity for Prospective Students",
        problem: "During peak admission seasons, university phone lines and social inboxes receive thousands of identical questions regarding minimum GPA, tuition costs, and deadlines.",
        solution: "Jadubot delivers department-specific criteria, total tuition semester-by-semester breakdowns, and downloadable PDF prospectuses immediately in chat.",
        metrics: "Answers 95% of admission queries without counselor fatigue.",
        benefits: [
          "Interactive department and degree program navigator",
          "Automated scholarship waiver eligibility calculation",
          "Prospectus and course syllabus PDF downloads",
          "Deadline alert reminders sent to prospective applicants"
        ],
        graphicAlt: "University student admission chatbot and course catalog"
      },
      {
        title: "1-on-1 Academic Counseling Scheduling",
        subtitle: "Higher Commitment, Higher Enrollment",
        problem: "Prospective students who need tailored academic guidance often delay applying because booking an advisor requires visiting campus in person.",
        solution: "Students book a 15-minute phone or Zoom counseling session with an academic advisor, receiving an automatic calendar link and reminder in WhatsApp.",
        metrics: "Boosts completed counseling sessions by 48%.",
        benefits: [
          "Live calendar sync with admission officers' schedules",
          "Selection of online Zoom or physical campus interview",
          "Automated questionnaire to capture student background",
          "Post-counseling application follow-up reminders"
        ],
        graphicAlt: "Academic counseling session booking in chat"
      }
    ],
    workflow: {
      badge: "STUDENT ONBOARDING FLOW",
      title: "From Inquiry to First Day of Class",
      description: "How Jadubot supports educational institutions throughout the enrollment funnel.",
      steps: [
        { step: "01", title: "Course Search", description: "Student inquires about Computer Science or BBA programs." },
        { step: "02", title: "Eligibility & Fees", description: "Bot checks educational background and provides fee schedule." },
        { step: "03", title: "Application Form", description: "Bot shares online application portal link with tracking code." },
        { step: "04", title: "Orientation Updates", description: "Admitted students receive campus orientation notices via WhatsApp." }
      ]
    },
    useCases: [
      {
        title: "Tuition Fee & Scholarship Criteria Check",
        trigger: "Applicant asks 'What is the cost for BBA and what waiver can I get?'",
        dialogue: [
          { sender: "user", message: "What are the admission requirements and total tuition fee for BBA?" },
          { sender: "bot", message: "Our 4-year BBA program consists of 124 credits, totaling $4,200 (spread across 12 semesters). Requirements: Minimum GPA 3.0 in both SSC & HSC. What was your GPA? You might qualify for a 20%-50% merit waiver!" },
          { sender: "user", message: "My GPA is 4.8 in HSC." },
          { sender: "bot", message: "Excellent! With GPA 4.8, you qualify for our 40% Merit Scholarship! Your adjusted total fee would be only $2,520. Would you like to start your admission form now?" }
        ],
        benefit: "Motivates eligible students with personalized scholarship confirmation."
      }
    ],
    faqs: [
      {
        question: "Can Jadubot communicate with students in both Bangla and English?",
        answer: "Yes! Jadubot is multilingual and understands English, standard Bangla, and Banglish (Bangla written in Latin letters)."
      }
    ]
  },
  {
    slug: "saas-chatbot-automation",
    name: "SaaS",
    shortTag: "Software & Cloud",
    navDescription: "Lead generation, product demo bookings, trial onboarding & churn reduction.",
    iconName: "Cloud",
    metaTitle: "AI Chatbot for SaaS Companies & Cloud Software | Jadubot",
    metaDescription: "Qualify enterprise software leads, automate product demo bookings, guide free trial onboarding, and answer developer documentation queries with Jadubot.",
    hero: {
      badge: "SAAS & SOFTWARE AUTOMATION",
      titleStart: "Qualify Enterprise Software Leads &",
      titleHighlight: "Automate Product Demos",
      titleEnd: "At Scale",
      subtitle: "Shorten your B2B sales cycle. Help software buyers explore feature tiers, book product demos directly on sales team calendars, and onboard new trial users seamlessly.",
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
      formula: "Monthly Website Visitors (15,000) × Chat Engagement (3%) × Demo Conversion (20%) × ACV ($2,400)",
      exampleLabel: "B2B Cloud Software Company",
      exampleMath: "15,000 visitors × 3% chat = 450 conversations × 20% demos = 90 product demos/mo. Closing 10% yields $21,600 in new monthly recurring revenue (ARR $259k).",
      metrics: [
        { value: "3.5x", label: "Demo Booking Acceleration", detail: "Frictionless in-chat Calendly scheduling without form walls." },
        { value: "45%", label: "Increase in SQL Velocity", detail: "Enriched firmographic data captured before sales calls." },
        { value: "80%", label: "L1 Support Automation", detail: "API docs, feature questions, and setup guides answered 24/7." }
      ]
    },
    showcases: [
      {
        title: "Enterprise Lead Enrichment & Demo Scheduling",
        subtitle: "Bypass Slow Form Submissions",
        problem: "B2B software buyers hate filling out 8-field static demo forms and waiting 2 days for an SDR to email back—leading to massive pipeline drop-off.",
        solution: "Jadubot asks company size, primary use case, and decision timeline directly inside chat, embedding your Calendly or Google Calendar right into the conversation.",
        metrics: "Increases demo completion rates by 3.5x.",
        benefits: [
          "B2B qualification questions (team size, tech stack, budget)",
          "Real-time SDR & Account Executive calendar integration",
          "Instant lead enrichment and bi-directional CRM syncing",
          "Automated pre-demo prep material and meeting reminder"
        ],
        graphicAlt: "SaaS enterprise demo booking bot with embedded calendar"
      },
      {
        title: "Interactive In-App Trial Onboarding & Activation",
        subtitle: "Turn Signups into Paying Customers",
        problem: "New trial signups often get stuck during API configuration or workspace setup, abandoning the product before reaching their 'Aha!' moment.",
        solution: "Jadubot guides users through initial onboarding steps, answers technical questions using your documentation, and nudges them when they complete key milestones.",
        metrics: "Boosts trial-to-paid activation by 38%.",
        benefits: [
          "Step-by-step interactive product walkthroughs",
          "Searchable documentation and code snippet delivery in chat",
          "Automated milestone celebration and upgrade triggers",
          "Instant alert to customer success team if user is blocked"
        ],
        graphicAlt: "SaaS trial onboarding and product activation assistant"
      }
    ],
    workflow: {
      badge: "B2B SOFTWARE PIPELINE",
      title: "From Website Visitor to Enterprise Contract",
      description: "How SaaS companies automate their high-velocity growth engine.",
      steps: [
        { step: "01", title: "Intent Detection", description: "Visitor browses enterprise pricing page for more than 45 seconds." },
        { step: "02", title: "Proactive Engagement", description: "Bot opens friendly chat offering comparison guide or live walkthrough." },
        { step: "03", title: "Firmographic Triage", description: "Bot validates company size, integration needs, and target launch date." },
        { step: "04", title: "Calendar Booking", description: "Qualified buyer selects slot on Account Executive's calendar instantly." }
      ]
    },
    useCases: [
      {
        title: "High-Intent Demo Booking",
        trigger: "Visitor on Pricing Page clicks 'Talk to Enterprise Sales'",
        dialogue: [
          { sender: "user", message: "We have 85 customer service agents and need custom WhatsApp API integrations." },
          { sender: "bot", message: "Hello! Our Enterprise plan is ideal for teams over 50 seats, including custom webhooks and dedicated SLAs. Would you like a 20-minute architecture review with our Solutions Engineer?" },
          { sender: "user", message: "Yes, tomorrow afternoon works." },
          { sender: "bot", message: "Here are open slots for tomorrow: [Tomorrow 2:30 PM] [Tomorrow 4:00 PM]. Click your preferred time to receive the Google Meet invitation!" }
        ],
        benefit: "Locks in valuable enterprise meetings while buying intent is highest."
      }
    ],
    faqs: [
      {
        question: "Can Jadubot read and answer questions from our API documentation?",
        answer: "Yes! Jadubot can ingest your knowledge base, API docs, and help articles to provide accurate technical answers to developers and decision-makers."
      }
    ]
  },
  {
    slug: "logistics-chatbot-automation",
    name: "Logistics",
    shortTag: "Couriers & Delivery",
    navDescription: "Real-time parcel tracking, address updates, delivery rescheduling & support.",
    iconName: "Truck",
    metaTitle: "AI Chatbot for Logistics, Courier & Delivery Services | Jadubot",
    metaDescription: "Automate parcel tracking, address corrections, delivery rescheduling, cash-on-delivery calculations, and driver-customer coordination on WhatsApp.",
    hero: {
      badge: "LOGISTICS & COURIER AUTOMATION",
      titleStart: "Automate Parcel Tracking &",
      titleHighlight: "Delivery Rescheduling",
      titleEnd: "Effortlessly",
      subtitle: "Cut call center costs in half. Empower recipients to track packages in real time, adjust delivery addresses, reschedule delivery dates, and confirm COD amounts via WhatsApp.",
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
      formula: "Monthly Deliveries (100,000) × Tracking Inquiries (25%) × Cost Per Support Call ($0.60)",
      exampleLabel: "Regional Courier Network",
      exampleMath: "100,000 parcels × 25% tracking queries = 25,000 inquiries. At $0.60 per manual phone call = $15,000 monthly cost reduced to less than $500 with Jadubot.",
      metrics: [
        { value: "82%", label: "Call Center Load Reduction", detail: "'Where is my parcel?' queries resolved automatically via API." },
        { value: "28%", label: "Higher First-Attempt Deliveries", detail: "Pre-delivery WhatsApp notices alert recipients before arrival." },
        { value: "45%", label: "Decrease in Address Correction Time", detail: "Customers drop live GPS pin or update phone number directly." }
      ]
    },
    showcases: [
      {
        title: "Real-Time Tracking by Tracking ID or Mobile Number",
        subtitle: "Instant Visibility, Zero Phone Hold",
        problem: "Courier call centers get inundated with anxious recipients asking for parcel whereabouts, creating 15-minute wait times during evening peak hours.",
        solution: "Recipients type their tracking code or registered mobile number on WhatsApp, receiving an instant live status update with driver name and expected delivery window.",
        metrics: "Resolves tracking inquiries in under 2 seconds.",
        benefits: [
          "Direct integration with Courier ERP & GPS tracking systems",
          "Automated status updates (In Transit, Out for Delivery, Delivered)",
          "Driver name and phone number sharing for smooth coordination",
          "Automated proof-of-delivery photo delivery upon handover"
        ],
        graphicAlt: "Courier parcel tracking dialogue on WhatsApp"
      },
      {
        title: "Pre-Delivery Alert & Automated Rescheduling",
        subtitle: "Fewer Failed Delivery Attempts",
        problem: "Delivery riders arrive at addresses only to find the recipient is away from home or lacks cash for COD payment, causing expensive re-delivery attempts.",
        solution: "On the morning of delivery, Jadubot sends an automated WhatsApp message with delivery time window and COD total, allowing the recipient to confirm or reschedule.",
        metrics: "Improves first-attempt delivery success rate by 28%.",
        benefits: [
          "One-click 'Confirm Available' or 'Reschedule Delivery' buttons",
          "Selection of alternate delivery date (tomorrow, weekend)",
          "Ability to redirect parcel to a neighbor or office address",
          "Advance notification of exact cash amount required"
        ],
        graphicAlt: "Pre-delivery confirmation and rescheduling interface"
      }
    ],
    workflow: {
      badge: "LOGISTICS LIFECYCLE",
      title: "From Warehouse Dispatch to Successful Handover",
      description: "How courier networks optimize final-mile delivery with automated messaging.",
      steps: [
        { step: "01", title: "Parcel Dispatched", description: "Warehouse scans parcel; system triggers WhatsApp dispatch notice with tracking code." },
        { step: "02", title: "Morning Alert", description: "On delivery day, recipient receives notice with driver contact and COD amount." },
        { step: "03", title: "Live Address Adjustment", description: "Recipient can update flat number or share GPS location if needed." },
        { step: "04", title: "Delivery Confirmation", description: "Instant digital receipt delivered to recipient and status synced to merchant." }
      ]
    },
    useCases: [
      {
        title: "Parcel Status & Estimated Delivery Time",
        trigger: "Recipient messages 'Track PTH-98214'",
        dialogue: [
          { sender: "user", message: "Where is my parcel PTH-98214?" },
          { sender: "bot", message: "Parcel #PTH-98214 is Out for Delivery with Rider Karim (01712XXXXXX). Estimated arrival: Today between 3:00 PM - 5:00 PM. COD Amount: $32. Will you be available?" },
          { sender: "user", message: "Yes, I am home." },
          { sender: "bot", message: "Great! Karim has been notified. Thank you for using our express service!" }
        ],
        benefit: "Provides instant peace of mind and ensures recipient is prepared."
      }
    ],
    faqs: [
      {
        question: "Can Jadubot connect to our existing courier API?",
        answer: "Yes. Jadubot provides robust REST API connectors and webhooks to integrate with Pathao, RedX, Steadfast, Paperfly, DHL, FedEx, or custom in-house courier management databases."
      }
    ]
  },
  {
    slug: "agency-chatbot-automation",
    name: "Agencies",
    shortTag: "Marketing Agencies",
    navDescription: "White-label client automation, lead generation audits & client reporting.",
    iconName: "Briefcase",
    metaTitle: "AI Chatbot & Automation for Marketing Agencies | Jadubot",
    metaDescription: "Offer high-margin chatbot and WhatsApp automation services to your agency clients under your own white-label brand, increasing retainers and MRR.",
    hero: {
      badge: "AGENCY & RESELLER AUTOMATION",
      titleStart: "Deliver High-Margin Chat Automation Under",
      titleHighlight: "Your Own Agency Brand",
      titleEnd: "",
      subtitle: "Elevate your agency retainer fees. Provide your clients with automated Facebook comment replies, WhatsApp sales bots, and CRM lead capture without writing a single line of backend code.",
      primaryCtaText: "Join Agency Program",
      secondaryCtaText: "Schedule Agency Call",
      image: "/assets/images/industry/agency.jpg",
      statHighlights: [
        { label: "Agency Margin", value: "70%+" },
        { label: "Client Retainer Growth", value: "+2.8x" },
        { label: "Setup Time Per Client", value: "< 1 hr" }
      ],
      platforms: ["White-Label Portal", "Agency Dashboard", "Meta Partner API", "Client Billing Automation"]
    },
    roi: {
      heading: "Transforming Project Agencies into Recurring SaaS Businesses",
      subheading: "Why top performance agencies bundle chat automation with their ad management retainers.",
      formula: "Agency Clients (20) × Monthly Chatbot Retainer ($300) × 12 Months",
      exampleLabel: "Digital Marketing Agency (20 Clients)",
      exampleMath: "Charging just $300/mo per client for chatbot setup and maintenance creates $72,000/year in pure recurring revenue with almost zero marginal overhead.",
      metrics: [
        { value: "70%+", label: "Service Profit Margins", detail: "Software automation replaces repetitive manual client support tasks." },
        { value: "2.8x", label: "Client Lifetime Value", detail: "Clients who rely on automated sales flows rarely churn." },
        { value: "48 hr", label: "Rapid White-Label Deployment", detail: "Launch under your agency domain, custom logo, and brand colors." }
      ]
    },
    showcases: [
      {
        title: "Multi-Client Management from a Single Unified Dashboard",
        subtitle: "Scale Without Chaos",
        problem: "Agencies managing multiple client Facebook pages and WhatsApp numbers get bogged down in messy login sharing, team credential issues, and billing confusion.",
        solution: "Jadubot provides an Agency Master Console where you can create isolated client workspaces, invite client team members with custom permissions, and track individual campaign metrics.",
        metrics: "Manage 50+ client accounts effortlessly from one master login.",
        benefits: [
          "Isolated workspaces with custom client role permissions",
          "White-label domain (e.g. portal.youragency.com) and logo branding",
          "Automated monthly client performance and conversation reports",
          "Direct integration with client ad accounts for attribution tracking"
        ],
        graphicAlt: "Agency multi-tenant client management console"
      },
      {
        title: "Supercharge Client Ad Campaigns with Click-to-Message Automations",
        subtitle: "Unbeatable Ad ROAS for Clients",
        problem: "Client ad campaigns with high click costs suffer from low landing page conversion rates, making it difficult for agencies to prove tangible ROI.",
        solution: "Switch client ad spend to Click-to-Messenger and Click-to-WhatsApp ads paired with Jadubot, capturing lead contact details in the first 3 seconds of interaction.",
        metrics: "Lowers client cost per qualified lead by up to 50%.",
        benefits: [
          "Pre-built conversion templates for E-commerce, Real Estate, and Food",
          "Automated comment-to-inbox auto-reply for sponsored post virality",
          "Real-time lead delivery to client WhatsApp or CRM",
          "Visual proof of conversion reports to impress agency clients"
        ],
        graphicAlt: "Agency client ad performance and click to message automation"
      }
    ],
    workflow: {
      badge: "AGENCY GROWTH CYCLE",
      title: "How Agencies Scale Retainers with Jadubot",
      description: "From client pitch to automated recurring billing.",
      steps: [
        { step: "01", title: "Client Audit", description: "Audit client's current social response time and demonstrate lost revenue." },
        { step: "02", title: "Template Deployment", description: "Deploy pre-built industry template in under 30 minutes." },
        { step: "03", title: "Connect Client Ads", description: "Link Click-to-Message ads and comment automation to social campaigns." },
        { step: "04", title: "Automated Monthly Value", description: "Client receives monthly report showing thousands of recovered leads." }
      ]
    },
    useCases: [
      {
        title: "Upselling Ad Clients to Automation Retainers",
        trigger: "Agency pitch meeting with e-commerce client",
        dialogue: [
          { sender: "user", message: "Our ads are driving clicks, but our sales team can't reply to hundreds of Messenger DMs at night." },
          { sender: "bot", message: "Our agency offers 24/7 AI Automation powered by Jadubot. We deploy an automated in-chat cart, instant size advisor, and abandoned checkout recovery that answers within 2 seconds. Would you like to pilot this on your next campaign?" }
        ],
        benefit: "Positions your agency as an indispensable revenue growth partner."
      }
    ],
    faqs: [
      {
        question: "Can I brand the software platform with my own agency logo and custom domain?",
        answer: "Yes! Our Agency White-Label program allows you to run the platform under your own domain (e.g., bot.youragency.com) with custom logos, branding, and client invoice generation."
      },
      {
        question: "Do you provide agency onboarding and partner training?",
        answer: "Yes. Agency partners receive dedicated onboarding, pre-built high-converting campaign templates, and priority technical support."
      }
    ]
  }
];

export function getIndustryBySlug(slug: string): IndustryData | undefined {
  return INDUSTRIES.find((ind) => ind.slug === slug);
}
