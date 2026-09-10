import { Bot, ShoppingCart, MessageSquare, TrendingUp } from "lucide-react";

const PERKS = [
  {
    icon: Bot,
    title: "Tailored Bot Architecture",
    description:
      "We will analyze your product catalog or service offerings and show you a custom conversation flow live on screen."
  },
  {
    icon: MessageSquare,
    title: "Comment-to-Inbox Automation",
    description:
      "See live how an automated comment like and instant private DM can 3x your lead conversion rate from Facebook Ads."
  },
  {
    icon: ShoppingCart,
    title: "Messenger eCommerce Store",
    description:
      "Watch an interactive checkout simulation inside Messenger with bKash/Nagad payment and automated order notifications."
  },
  {
    icon: TrendingUp,
    title: "ROI & Growth Consultation",
    description:
      "Discuss your monthly ad spend, staff overhead savings, and projected ROI with an experienced marketing automation specialist."
  }
];

export function DemoPerks() {
  return (
    <div className="space-y-6">
      <div className="glass-card rounded-2xl p-6 border-border">
        <h3 className="text-lg font-bold text-foreground">What You’ll Discover</h3>
        <p className="mt-1 text-xs text-muted-foreground">
          In this 30-minute personalized call, our senior strategist will cover:
        </p>

        <div className="mt-6 space-y-5">
          {PERKS.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">{p.title}</h4>
                  <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="glass-card rounded-2xl p-6 border-border">
        <h4 className="text-sm font-bold text-foreground">Have quick questions before booking?</h4>
        <p className="mt-1 text-xs text-muted-foreground">
          You can chat with our team right away on WhatsApp:
        </p>
        <a
          href="https://wa.me/8801707991750"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center text-xs font-semibold text-emerald-400 hover:text-emerald-300"
        >
          Message +880 1707-991750 &rarr;
        </a>
      </div>
    </div>
  );
}
