import { Link2, Sparkles, ShoppingBag, BarChart3, ArrowRight } from "lucide-react";
import { PopIn } from "@/components/animations";
import { CALENDLY_DEMO_URL } from "@/config/site";

const STEPS = [
  {
    step: "01",
    title: "Connect Your Channels",
    description:
      "Link your Facebook Pages and Instagram accounts in under 60 seconds with official Meta API authentication. No technical configurations or coding required.",
    icon: Link2
  },
  {
    step: "02",
    title: "Train AI & Set Smart Triggers",
    description:
      "Configure keyword rules, comment-to-inbox auto-replies, and AI responses. Native support for English, standard Bangla, and phonetic Banglish ensures natural conversations.",
    icon: Sparkles
  },
  {
    step: "03",
    title: "Activate In-Chat Commerce",
    description:
      "Enable your Messenger eCommerce store. Customers browse catalogs, choose product variants, and submit delivery details directly inside the chat window.",
    icon: ShoppingBag
  },
  {
    step: "04",
    title: "Broadcast, Track & Scale",
    description:
      "Send high-converting segmented messages, push postback triggers to CPA networks, and manage real-time customer dialogues from a single unified hub.",
    icon: BarChart3
  }
];

export function ServiceProcess() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1 text-xs font-semibold text-brand">
            How Jadubot Works
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            From Setup to Conversions in Four Simple Steps
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            A seamless, reliable automation workflow engineered to turn social media engagement
            into paying customers without human intervention.
          </p>
        </div>

        <PopIn stagger={0.1} className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="glass-card glass-card-hover group relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-3xl font-black text-white/10 group-hover:text-brand/30 transition-colors">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-foreground transition-colors group-hover:text-brand">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </PopIn>

        <div className="mt-12 text-center">
          <a
            href={CALENDLY_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 py-3 px-6 text-xs font-semibold shadow-[0_0_20px_rgba(142,45,226,0.35)]"
          >
            <span>Schedule a Live Walkthrough</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
