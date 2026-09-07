import { LifeBuoy } from "lucide-react";
import { Badge } from "@/ui";

export function TicketHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16">
      <div className="hero-gradient pointer-events-none absolute inset-0 -z-10" />

      <div className="container relative z-10 text-center">
        <div className="mx-auto max-w-3xl">
          <Badge variant="default" className="px-3.5 py-1 text-xs">
            <LifeBuoy className="h-3 w-3 mr-1 text-brand-orange" />
            Priority Support Desk
          </Badge>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl leading-[1.15]">
            Submit a <span className="text-gradient">Support Ticket</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Got a question or facing an issue? Our dedicated engineering team is ready to assist you.
            Submit a ticket below, and we’ll get back to you ASAP.
          </p>
        </div>
      </div>
    </section>
  );
}
