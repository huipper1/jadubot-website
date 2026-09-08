import {
  MessageSquare,
  Instagram,
  ShoppingCart,
  MessageCircle,
  Network,
  ShieldCheck
} from "lucide-react";
import { PopIn } from "@/components/animations";

const SERVICES = [
  {
    title: "Facebook Messenger Automation",
    description:
      "24/7 intelligent automated replies to customer inquiries, greeting messages, FAQs, order confirmations, and multi-step conversation funnels.",
    icon: MessageSquare,
    benefits: [
      "Instant 2-second response time",
      "Bangla & English keyword recognition",
      "Interactive button & quick reply menus",
      "Lead collection (phone, email, address)"
    ]
  },
  {
    title: "Instagram DM & Story Automation",
    description:
      "Automate responses to Instagram Direct Messages, Story mentions, and Story replies so you never miss an interested buyer browsing your feed.",
    icon: Instagram,
    benefits: [
      "Instant DM responses to Story reactions",
      "Product catalog sharing in Instagram chat",
      "Influencer & campaign lead tracking",
      "Seamless escalation to live agents"
    ]
  },
  {
    title: "Comment-to-Inbox Lead Converter",
    tagline: "Turn engagement into revenue",
    description:
      "Automatically reply to every post comment with an engaging public response, while simultaneously sliding into their private inbox with product links and prices.",
    icon: MessageCircle,
    benefits: [
      "Boosts organic Facebook algorithm reach",
      "Hides competitor spam or negative comments",
      "High-converting direct inbox handoff",
      "Works on both organic posts and boosted ads"
    ]
  },
  {
    title: "Messenger Store & Cart System",
    description:
      "A complete eCommerce store running inside Facebook Messenger. Shoppers browse your collections, select sizes and colors, and place cash-on-delivery orders.",
    icon: ShoppingCart,
    benefits: [
      "No website or hosting required",
      "Built-in cart and checkout flows",
      "Instant order notifications to your phone",
      "Cash on Delivery & bKash support"
    ]
  },
  {
    title: "CPA Marketing Automation",
    description:
      "Advanced postback tracking, webhook triggers, and lead distribution systems built specifically for CPA and affiliate marketing campaigns.",
    icon: Network,
    benefits: [
      "Instant postback and server-to-server pings",
      "Automated lead delivery to multiple buyers",
      "Real-time fraud and duplicate filtering",
      "Custom redirect logic"
    ]
  },
  {
    title: "Enterprise Custom AI Training",
    description:
      "Tailor-made conversational AI trained directly on your store's inventory, returns policy, and customer support history.",
    icon: ShieldCheck,
    benefits: [
      "Custom domain-specific AI vocabulary",
      "Dedicated high-speed cloud instances",
      "Custom webhook and CRM sync",
      "Enterprise SLA & dedicated support"
    ]
  }
];

export function ServiceGrid() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto max-w-7xl">
        <PopIn stagger={0.08} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="glass-card glass-card-hover group relative flex flex-col justify-between rounded-2xl p-8 transition-all duration-300"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-foreground transition-colors group-hover:text-brand">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-2 border-t border-white/5 pt-5 text-xs text-muted-foreground">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                        <span className="text-foreground/80">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </PopIn>
      </div>
    </section>
  );
}
