import { HeartHandshake, Zap, ShieldCheck } from "lucide-react";
import { PopIn } from "@/components/animations";

const VALUES = [
  {
    title: "Bangladeshi First",
    desc: "Built from the ground up for our local language, Banglish speech patterns, and domestic eCommerce nuances like Cash on Delivery and bKash.",
    icon: HeartHandshake
  },
  {
    title: "Sub-Second Velocity",
    desc: "Speed is everything in social commerce. We maintain lightning-fast response times so your prospects never leave for a competitor.",
    icon: Zap
  },
  {
    title: "Uncompromising Reliability",
    desc: "Your business runs 24/7, and so do we. 99.9% uptime infrastructure ensures no holiday surge or midnight lead is ever dropped.",
    icon: ShieldCheck
  }
];

export function AboutMission() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto max-w-7xl">
        <PopIn stagger={0.1} className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {VALUES.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.title}
                className="glass-card glass-card-hover group rounded-2xl p-8 transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-foreground group-hover:text-brand">
                  {val.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </PopIn>
      </div>
    </section>
  );
}
