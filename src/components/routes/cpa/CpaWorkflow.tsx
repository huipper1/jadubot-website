import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CpaWorkflow() {
  const steps = [
    {
      step: "01",
      title: "Ad Engagement",
      desc: "Prospects comment or react on your sponsored social media creative."
    },
    {
      step: "02",
      title: "Automated Lead Push",
      desc: "Jadubot slides into their inbox with personalized quiz, pre-lander, or offer link."
    },
    {
      step: "03",
      title: "Conversion & Postback",
      desc: "CPA network registers conversion; S2S postback informs your tracker in real time."
    }
  ];

  return (
    <section className="relative py-16 md:py-24 bg-[#05070D]/40">
      <div className="container text-center">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          The 3-Step CPA Growth Loop
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.step}
              className="glass-card rounded-2xl p-6 text-left border-white/10"
            >
              <span className="font-mono text-2xl font-bold text-brand">{s.step}</span>
              <h3 className="mt-3 text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold text-white shadow-[0_0_20px_rgba(142,45,226,0.35)] hover:scale-[1.02]"
          >
            <span>Talk to a CPA Specialist</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
