import { Sparkles, CheckCircle2 } from "lucide-react";
import { Badge } from "@/ui";

export function DemoHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16">
      <div className="hero-gradient pointer-events-none absolute inset-0 -z-10" />

      <div className="container relative z-10 text-center">
        <div className="mx-auto max-w-3xl">
          <Badge variant="default" className="px-3.5 py-1 text-xs">
            <Sparkles className="h-3 w-3 mr-1 text-brand-orange" />
            Live 1-on-1 Consultation
          </Badge>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl leading-[1.15]">
            Book a Free <span className="text-gradient">Live Demo</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Experience smarter automation built for your exact business. See how Jadubot can automate 80%
            of your customer inquiries, boost conversion rates, and run Messenger commerce effortlessly.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground sm:text-sm">
            <span className="inline-flex items-center gap-1.5 text-foreground">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              100% Free & No Obligation
            </span>
            <span className="inline-flex items-center gap-1.5 text-foreground">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              Tailored to Your Facebook Page
            </span>
            <span className="inline-flex items-center gap-1.5 text-foreground">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              30-Minute Google Meet Session
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
