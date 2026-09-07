import Link from "next/link";
import { CheckCircle2, XCircle, ArrowRight, Mail } from "lucide-react";

export function RefundPolicy() {
  return (
    <section className="relative py-12 md:py-20 border-t border-white/5">
      <div className="container">
        <div className="mx-auto max-w-3xl space-y-12">
          {/* Eligibility vs Non-Refundable */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Eligibility */}
            <div className="glass-card rounded-2xl p-6 border-emerald-500/20 bg-emerald-500/[0.02]">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-lg">
                <CheckCircle2 className="h-5 w-5" />
                <h3>Refund Eligibility</h3>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Refunds are eligible under the following conditions:
              </p>
              <ul className="mt-4 space-y-3 text-sm text-foreground/90">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>
                    Technical bugs or server outages preventing platform use that our engineers cannot resolve within <strong>7 days</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>
                    The service or feature delivered is fundamentally different from what is described on our website.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>
                    Cancellation requested within <strong>3 days</strong> of the initial purchase without extensive platform utilization.
                  </span>
                </li>
              </ul>
            </div>

            {/* Non-Refundable */}
            <div className="glass-card rounded-2xl p-6 border-rose-500/20 bg-rose-500/[0.02]">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-lg">
                <XCircle className="h-5 w-5" />
                <h3>Non-Refundable Cases</h3>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Refunds cannot be granted in the following scenarios:
              </p>
              <ul className="mt-4 space-y-3 text-sm text-foreground/90">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">•</span>
                  <span>Change of mind or business direction after completing setup and usage.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">•</span>
                  <span>Accounts that have already sent mass broadcasts or utilized campaign quotas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">•</span>
                  <span>Refund requests submitted past the specified eligibility timeframe.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">•</span>
                  <span>Accounts suspended due to Meta spam policy violations or illegal activity.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* How to request and timeline */}
          <div className="glass-card rounded-2xl p-8 border-white/10 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-foreground">How to Request a Refund</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <span className="text-xs font-bold text-brand-orange uppercase">Step 1</span>
                  <p className="mt-2 text-sm text-foreground font-medium">Send Email</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Contact support@jadubot.com from your registered email.
                  </p>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <span className="text-xs font-bold text-brand-orange uppercase">Step 2</span>
                  <p className="mt-2 text-sm text-foreground font-medium">Provide Details</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Include your order ID, transaction ID, and clear reason for the refund.
                  </p>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <span className="text-xs font-bold text-brand-orange uppercase">Step 3</span>
                  <p className="mt-2 text-sm text-foreground font-medium">Review & Payout</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Our team reviews within 3-5 business days. Payouts arrive in 5-7 days.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-semibold text-foreground text-sm">Need immediate assistance?</h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Reach out directly to our support engineers or submit a ticket.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="mailto:support@jadubot.com"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-foreground hover:bg-white/10"
                >
                  <Mail className="h-3.5 w-3.5 text-brand-orange" />
                  support@jadubot.com
                </a>
                <Link
                  href="/ticket/"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-brand-orange px-4 py-2 text-xs font-semibold text-white hover:bg-brand-orange/90"
                >
                  Submit Ticket
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
