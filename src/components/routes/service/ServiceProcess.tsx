import { Link2, Sparkles, Database, Bot, TrendingUp, ArrowRight } from "lucide-react";
import { PopIn } from "@/components/animations";
import { SectionHeader } from "@/ui";
import { CALENDLY_DEMO_URL } from "@/config/site";

const STEPS = [
  {
    step: "01",
    title: "Connect Your Channels",
    description:
      "Integrate your Facebook, Instagram, WhatsApp or other platforms with our secure and easy setup.",
    icon: Link2
  },
  {
    step: "02",
    title: "Train with Your Business Data",
    description:
      "Help our AI understand your products, services, and customer style for more accurate and relevant responses.",
    icon: Database
  },
  {
    step: "03",
    title: "Automate in Real-Time",
    description:
      "Start engaging customers, answering queries, capturing leads, and processing orders automatically.",
    icon: Bot
  },
  {
    step: "04",
    title: "Track & Scale",
    description:
      "Monitor performance, optimize your campaigns, and unlock new growth opportunities.",
    icon: TrendingUp
  }
];

export function ServiceProcess() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="HOW IT WORKS"
          badgeIcon={Sparkles}
          title="From Setup to Conversions in"
          gradientTitle="Four Simple Steps"
          description="A smooth, hassle-free process to get your automation up and running — so you can focus on what matters most, growing your business."
          size="lg"
          maxWidth="max-w-3xl"
        />

        <PopIn stagger={0.1} className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="group relative flex flex-col justify-between rounded-2xl border border-[#2f3342]/70 bg-gradient-to-b from-[#131622]/90 to-[#0c0e14]/95 p-6 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_15px_40px_rgba(168,85,247,0.15)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-500/30 bg-[#1b1230]/80 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-5 w-5 text-purple-400" />
                    </div>
                    <span className="text-2xl font-bold font-mono text-purple-400/50 group-hover:text-purple-300 transition-colors">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="mt-6 font-heading text-lg font-bold text-white transition-colors group-hover:text-purple-200">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-300/85">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </PopIn>

        {/* Action Button & Caption from Screenshot */}
        <div className="mt-16 text-center">
          <a
            href={CALENDLY_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2.5 py-3.5 px-8 text-sm font-semibold rounded-xl shadow-[0_0_25px_rgba(142,45,226,0.45)] hover:scale-[1.02] transition-transform"
          >
            <span>Book a Live Demo</span>
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-3 text-xs sm:text-sm text-slate-400">
            See how automation can transform your business
          </p>
        </div>
      </div>
    </section>
  );
}

