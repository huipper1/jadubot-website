import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { PopIn } from "@/components/animations";
import { siteConfig } from "@/config/site";

export function ContactInfo() {
  return (
    <PopIn className="flex flex-col justify-between space-y-8">
      <div>
        <h3 className="text-xl font-bold text-foreground">Connect with Our Team</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Whether you need advice choosing the right plan, CPA custom setup assistance,
          or technical guidance configuring your automated flows, our team is within reach.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Email Address
            </div>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-base font-bold text-foreground hover:text-brand transition-colors"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Direct Helpline &amp; WhatsApp
            </div>
            <a
              href={`tel:${siteConfig.phone}`}
              className="text-base font-bold text-foreground hover:text-brand transition-colors"
            >
              {siteConfig.phone}
            </a>
            <div className="text-xs text-muted-foreground">Direct customer support line</div>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Headquarters &amp; Innovation Lab
            </div>
            <div className="text-sm font-semibold text-foreground">
              {siteConfig.address}
            </div>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand">
            <Clock className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Support Availability
            </div>
            <div className="text-sm font-semibold text-foreground">
              Automated Bot &amp; Inbox: 24/7/365
            </div>
            <div className="text-xs text-muted-foreground">
              Live Human Specialists: 9:00 AM – 11:00 PM BST
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md">
        <h4 className="text-sm font-bold text-foreground">Official Community &amp; Updates</h4>
        <p className="mt-1 text-xs text-muted-foreground">
          Join thousands of Bangladeshi entrepreneurs and performance marketers on our official Facebook community page.
        </p>
        <a
          href={siteConfig.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline"
        >
          <span>Visit Facebook Page</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </PopIn>
  );
}
