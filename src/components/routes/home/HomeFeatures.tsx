import { Scan, Globe, AlertTriangle, Inbox, Smartphone } from "lucide-react";

const FEATURES = [
  {
    number: "01",
    title: "Image Recognition",
    description:
      "Jadubot is the only AI that can recognize product images and reply with the exact item, price, size, and purchasing options immediately.",
    icon: Scan,
    highlight: "Visual AI Engine"
  },
  {
    number: "02",
    title: "Multi Lingual",
    description:
      "Jadubot replies naturally in the language your customers use. That includes native Bangla, standard English, and phonetic Banglish effortlessly.",
    icon: Globe,
    highlight: "Bangla & Banglish AI"
  },
  {
    number: "03",
    title: "Complaint Handling",
    description:
      "Whenever a customer reports a delivery or product issue, Jadubot detects the sentiment and sorts those chats into a priority 'Complaint' section for instant follow-up.",
    icon: AlertTriangle,
    highlight: "Smart Sentiment Detection"
  },
  {
    number: "04",
    title: "All in One Inbox",
    description:
      "Jadubot pulls all your Facebook Messenger, Instagram DM, WhatsApp, and website chats into a unified dashboard, organized with labels, notes, and filters.",
    icon: Inbox,
    highlight: "Unified Omnichannel Hub"
  },
  {
    number: "05",
    title: "App & Cloud Support",
    description:
      "Manage customer chats, track orders in real time, and inspect conversion analytics from anywhere on both desktop and mobile web.",
    icon: Smartphone,
    highlight: "Anywhere Access"
  }
];

export function HomeFeatures() {
  return (
    <section id="features" className="relative py-20 md:py-32 border-t border-[#373a41]/60 bg-[#0c0e12]">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="solution-badge">Features</div>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            What Jadubot does
          </h2>
          <p className="mt-4 text-base text-[#cecfd2]">
            Comprehensive intelligent automation engineered specifically for conversational social commerce.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#373a41] bg-[#12151c]/80 p-8 transition-all duration-300 hover:border-[#8e2de2]/50 hover:bg-[#181d27]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-2xl font-black text-[#cecfd2]/25 group-hover:text-[#8e2de2]/40 transition-colors">
                      {feat.number}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8e2de2]/10 text-[#c084fc] transition-colors group-hover:bg-[#8e2de2] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <span className="mt-4 inline-block text-[10px] font-semibold uppercase tracking-wider text-[#c084fc]">
                    {feat.highlight}
                  </span>

                  <h3 className="mt-2 font-heading text-xl font-bold text-white">
                    {feat.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#cecfd2]/80">
                    {feat.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#373a41]/40 flex items-center justify-between text-xs text-[#cecfd2]/60">
                  <span>Fully Automated</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
