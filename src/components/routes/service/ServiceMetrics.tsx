import { Sparkles, Users, Award, TrendingUp, Heart } from "lucide-react";
import { PopIn } from "@/components/animations";

const METRICS = [
  {
    value: "5+",
    unit: "YEARS",
    title: "Experience You Can Trust",
    description: "Powering businesses with reliable automation since 2019.",
    icon: Users
  },
  {
    value: "97%",
    unit: "SATISFACTION",
    title: "Happy Businesses",
    description: "Businesses rate our solutions as reliable, effective, and easy to use.",
    icon: Award
  },
  {
    value: "73%",
    unit: "HIGHER",
    title: "Higher Sales & Engagement",
    description: "Our clients see an average 73% increase in customer engagement.",
    icon: TrendingUp
  },
  {
    value: "89%",
    unit: "RETAINED",
    title: "Return-Scale Relationships",
    description: "Most of our clients continue working with us for new features and advancements.",
    icon: Heart
  }
];

export function ServiceMetrics() {
  return (
    <section className="relative border-y border-[#373a41]/60 bg-[#0c0e12]/60 py-20 backdrop-blur-md">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/35 bg-[#1a0c33]/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.2)] backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-purple-400" />
            <span>REAL IMPACT</span>
          </div>
          <h2 className="mt-5 font-heading text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Helping Bangladeshi Businesses Deliver a{" "}
            <span className="bg-gradient-to-r from-[#d8b4fe] via-[#c084fc] to-[#a855f7] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(192,132,252,0.35)]">
              Better Customer Experience
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-300">
            Businesses across Bangladesh are using our automation solutions to save time, increase sales, and build stronger customer relationships.
          </p>
        </div>

        <PopIn stagger={0.08} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.title}
                className="glass-card glass-card-hover group relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-300"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-5 flex items-baseline gap-1.5">
                    <span className="text-3xl font-extrabold tracking-tight text-foreground group-hover:text-brand transition-colors">
                      {metric.value}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand">
                      {metric.unit}
                    </span>
                  </div>
                  <h3 className="mt-2 text-base font-semibold text-foreground">
                    {metric.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {metric.description}
                  </p>
                </div>
              </div>
            );
          })}
        </PopIn>
      </div>
    </section>
  );
}
