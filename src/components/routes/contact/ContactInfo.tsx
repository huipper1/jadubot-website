import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { PopIn } from "@/components/animations";

export function ContactInfo() {
  return (
    <PopIn className="flex flex-col justify-between space-y-8">
      <div>
        <h3 className="text-xl font-bold text-foreground">Connect with Our Team</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Whether you need advice choosing the right plan or technical support configuring
          your automated flows, our team is always within reach.
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
              href="mailto:support@jadubot.com"
              className="text-base font-bold text-foreground hover:text-brand"
            >
              support@jadubot.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              WhatsApp &amp; Phone
            </div>
            <div className="text-base font-bold text-foreground">+880 1700-000000</div>
            <div className="text-xs text-muted-foreground">Instant chat available</div>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Headquarters
            </div>
            <div className="text-sm font-semibold text-foreground">
              Dhaka, Bangladesh
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
              Automated Bot: 24/7/365
            </div>
            <div className="text-xs text-muted-foreground">
              Live Specialists: 9:00 AM – 11:00 PM BST
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md">
        <h4 className="text-sm font-bold text-foreground">Official Community</h4>
        <p className="mt-1 text-xs text-muted-foreground">
          Join over 5,000+ Bangladeshi digital marketers in our official Facebook community.
        </p>
        <a
          href="https://www.facebook.com/jadubotbd/"
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
