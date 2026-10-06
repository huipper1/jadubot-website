import Link from "next/link";

import { ArrowRight, CheckCircle as CheckCircle2, Envelope as Mail, XCircle } from "@/components/icons";

import { PopIn } from "@/components/animations";

export function RefundPolicy() {
  return (
    <section className="relative border-t border-border/60 py-12 md:py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl space-y-12">
          {/* Eligibility vs Non-Refundable */}
          <PopIn stagger={0.1} className="grid gap-8 md:grid-cols-2">
            {/* Eligibility */}
            <div className="glass-card rounded-2xl border-emerald-500/20 bg-emerald-500/[0.02] p-6">
              <div className="flex items-center gap-2 text-lg font-bold text-emerald-400">
                <CheckCircle2 className="h-5 w-5" />
                <h3>Refund Eligibility</h3>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Refunds are eligible under the following conditions:
              </p>
              <ul className="mt-4 space-y-3 text-sm text-foreground/90">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-400">•</span>
                  <span>
                    Technical bugs or server outages preventing platform use that our engineers
                    cannot resolve within <strong>7 days</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-400">•</span>
                  <span>
                    The service or feature delivered is fundamentally different from what is
                    described on our website.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-400">•</span>
                  <span>
                    Cancellation requested within <strong>3 days</strong> of the initial purchase
                    without extensive platform utilization.
                  </span>
                </li>
              </ul>
            </div>

            {/* Non-Refundable */}
            <div className="glass-card rounded-2xl border-rose-500/20 bg-rose-500/[0.02] p-6">
              <div className="flex items-center gap-2 text-lg font-bold text-rose-400">
                <XCircle className="h-5 w-5" />
                <h3>Non-Refundable Cases</h3>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Refunds cannot be granted in the following scenarios:
              </p>
              <ul className="mt-4 space-y-3 text-sm text-foreground/90">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-400">•</span>
                  <span>
                    Change of mind or business direction after completing setup and usage.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-400">•</span>
                  <span>
                    Accounts that have already sent mass broadcasts or utilized campaign quotas.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-400">•</span>
                  <span>Refund requests submitted past the specified eligibility timeframe.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-400">•</span>
                  <span>
                    Accounts suspended due to Meta spam policy violations or illegal activity.
                  </span>
                </li>
              </ul>
            </div>
          </PopIn>

          {/* How to request and timeline */}
          <PopIn className="glass-card space-y-6 rounded-2xl border-border p-8">
            <div>
              <h3 className="text-xl font-bold text-foreground">How to Request a Refund</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-border/60 bg-white/[0.02] p-4">
                  <span className="text-xs font-bold text-brand-orange uppercase">Step 1</span>
                  <p className="mt-2 text-sm font-medium text-foreground">Send Email</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Contact support@jadubot.com from your registered email.
                  </p>
                </div>
                <div className="rounded-xl border border-border/60 bg-white/[0.02] p-4">
                  <span className="text-xs font-bold text-brand-orange uppercase">Step 2</span>
                  <p className="mt-2 text-sm font-medium text-foreground">Provide Details</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Include your order ID, transaction ID, and clear reason for the refund.
                  </p>
                </div>
                <div className="rounded-xl border border-border/60 bg-white/[0.02] p-4">
                  <span className="text-xs font-bold text-brand-orange uppercase">Step 3</span>
                  <p className="mt-2 text-sm font-medium text-foreground">Review &amp; Payout</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Our team reviews within 3-5 business days. Payouts arrive in 5-7 days.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row">
              <div>
                <h4 className="text-sm font-semibold text-foreground">
                  Need immediate assistance?
                </h4>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Reach out directly to our support engineers via email or WhatsApp.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="mailto:support@jadubot.com"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white/5 px-4 py-2 text-xs font-medium text-foreground hover:bg-white/10"
                >
                  <Mail className="h-3.5 w-3.5 text-brand-orange" />
                  support@jadubot.com
                </a>
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-brand-orange px-4 py-2 text-xs font-semibold text-white hover:bg-brand-orange/90"
                >
                  Contact Support
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </PopIn>
        </div>
      </div>
    </section>
  );
}
