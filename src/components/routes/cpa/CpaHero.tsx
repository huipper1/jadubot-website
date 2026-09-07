import Link from "next/link";
import { ArrowRight, Flame, ShieldAlert, Cpu } from "lucide-react";
import { Badge } from "@/ui";

export function CpaHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="hero-gradient pointer-events-none absolute inset-0 -z-10" />

      <div className="container relative z-10 text-center">
        <div className="mx-auto max-w-4xl">
          <Badge variant="glow" className="px-4 py-1.5 text-xs font-semibold">
            <Flame className="h-3.5 w-3.5 mr-1 text-brand" />
            Global CPA Performance Infrastructure
          </Badge>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl leading-[1.1]">
            Turn Comments Into CPA Leads{" "}
            <span className="text-gradient block sm:inline">— Automatically</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            The all-in-one automation suite for Facebook & Instagram affiliate marketers.
            Capture leads, trigger server-to-server postbacks, and supercharge campaign
            conversion rates with zero manual work.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="btn-primary inline-flex w-full items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(142,45,226,0.35)] transition-all hover:scale-[1.02] sm:w-auto"
            >
              <span>Get CPA Automation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/book-a-free-demo"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-md transition-all hover:border-brand/40 sm:w-auto"
            >
              <span>Book Strategy Call</span>
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/5 pt-8 sm:grid-cols-3">
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <ShieldAlert className="h-4 w-4 text-brand" />
              <span>Anti-ban protection</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Cpu className="h-4 w-4 text-brand" />
              <span>Instant postback sync</span>
            </div>
            <div className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Flame className="h-4 w-4 text-brand" />
              <span>3x higher EPCs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
