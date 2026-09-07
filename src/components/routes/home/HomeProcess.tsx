import { Share2, Globe2, Sparkles, ArrowRight } from "lucide-react";

const STEPS = [
  {
    step: "01",
    icon: Share2,
    title: "Social Platforms Integration",
    description:
      "Connect your Facebook, Instagram, or WhatsApp accounts in 1 click. Jadubot securely syncs your pages and message feeds automatically."
  },
  {
    step: "02",
    icon: Globe2,
    title: "Website & Catalog Sync",
    description:
      "Connect your online store with one click. Your products, pricing, stock levels, and essential FAQs update in Jadubot instantly."
  },
  {
    step: "03",
    icon: Sparkles,
    title: "AI Instruction & Launch",
    description:
      "Tell Jadubot a few simple things about your business. It learns your brand voice, understands your products, and begins selling 24/7."
  }
];

export function HomeProcess() {
  return (
    <section className="relative py-20 md:py-32 border-t border-[#373a41]/60 bg-[#0c0e12]">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="solution-badge">Simple Onboarding</div>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Start in 3-simple Steps
          </h2>
          <p className="mt-4 text-base text-[#cecfd2]">
            Launch your automated AI sales agent and connect with your customers in under five minutes.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="relative flex flex-col justify-between rounded-2xl border border-[#373a41] bg-[#12151c]/80 p-8 transition-all duration-300 hover:border-[#8e2de2]/50 hover:bg-[#181d27]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-4xl font-black text-[#8e2de2]/40">
                      {s.step}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8e2de2]/10 text-[#c084fc]">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <h3 className="mt-6 font-heading text-xl font-bold text-white">
                    {s.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#cecfd2]/80">
                    {s.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#373a41]/40 flex items-center text-xs font-semibold text-[#c084fc]">
                  <span>Step {idx + 1} of 3</span>
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
