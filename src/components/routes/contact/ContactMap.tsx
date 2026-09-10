"use client";

import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { PopIn } from "@/components/animations";

export function ContactMap() {
  const directionsUrl =
    "https://www.google.com/maps/search/?api=1&query=Daffodil+Smart+City+Birulia+Savar+Dhaka";

  return (
    <section className="relative py-12 md:py-20 border-t border-border">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <PopIn className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
              <MapPin className="h-3.5 w-3.5" />
              <span>Headquarters Location</span>
            </div>
            <h3 className="mt-1 text-2xl font-bold text-foreground sm:text-3xl font-heading">
              Visit Our Dhaka Campus &amp; AI Lab
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Daffodil Smart City (DSC), Birulia, Savar, Dhaka-1216 • Accessible via Birulia Bridge
            </p>
          </div>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-semibold text-foreground transition hover:bg-muted/50 hover:border-primary/50 shadow-sm shrink-0"
          >
            <Navigation className="h-3.5 w-3.5 text-primary" />
            <span>Open in Google Maps</span>
            <ExternalLink className="h-3 w-3 text-muted-foreground" />
          </a>
        </PopIn>

        <PopIn className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-elevated">
          <div className="relative h-[360px] sm:h-[420px] w-full">
            <iframe
              src="https://maps.google.com/maps?q=Daffodil%20Smart%20City%2C%20Birulia%2C%20Savar%2C%20Dhaka&t=m&z=14&output=embed&iwloc=near"
              title="Jadubot Office Location at Daffodil Smart City, Savar, Dhaka"
              aria-label="Jadubot Office Location at Daffodil Smart City, Savar, Dhaka"
              className="h-full w-full border-0 filter opacity-85 transition hover:opacity-100 dark:grayscale dark:invert dark:contrast-125"
              loading="lazy"
            />
          </div>
        </PopIn>
      </div>
    </section>
  );
}
