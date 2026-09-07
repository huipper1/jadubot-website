"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Send, Clock, CheckCircle2, MessageCircle } from "lucide-react";

export function TicketForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketNumber, setTicketNumber] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const randomTicketId = `JB-${Math.floor(10000 + Math.random() * 90000)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setTicketNumber(randomTicketId);
      toast.success("Support ticket submitted successfully!", {
        description: `Ticket Reference: #${randomTicketId}. Our team will respond shortly.`
      });
    }, 900);
  };

  return (
    <section className="relative py-12 md:py-20 border-t border-white/5">
      <div className="container">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-3">
          {/* Left Info Column */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-6 border-white/10">
              <h3 className="text-lg font-bold text-foreground">Support Hours</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Our support engineers monitor tickets 7 days a week.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Fast Response Times</p>
                    <p className="text-xs text-muted-foreground">
                      Average response time is under <strong>2 hours</strong> during business hours (9 AM – 11 PM BST).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Direct Engineering Access</p>
                    <p className="text-xs text-muted-foreground">
                      Complex technical issues are handled directly by senior bot architects.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 border-emerald-500/20 bg-emerald-500/[0.02]">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <MessageCircle className="h-5 w-5" />
                <span>Urgent Emergency?</span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                For critical live store outages or active campaign emergencies, ping our direct WhatsApp line:
              </p>
              <a
                href="https://wa.me/8801707991750"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-emerald-500 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp: +880 1707-991750
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2">
            <div className="glass-card rounded-2xl p-8 border-white/10">
              {ticketNumber ? (
                <div className="py-12 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-foreground">Ticket Created Successfully</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Your support ticket reference is:
                  </p>
                  <div className="mt-4 inline-block rounded-xl border border-brand-orange/30 bg-brand-orange/10 px-6 py-2.5 font-mono text-xl font-black text-brand-orange">
                    #{ticketNumber}
                  </div>
                  <p className="mt-4 text-xs text-muted-foreground max-w-md mx-auto">
                    A confirmation email has been dispatched to your address. You can reply directly to that email thread to add attachments or more details.
                  </p>
                  <button
                    type="button"
                    onClick={() => setTicketNumber(null)}
                    className="mt-8 text-xs font-medium text-brand-orange underline hover:text-brand-orange/80"
                  >
                    Open another ticket
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-foreground">
                        Your Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="e.g. Tanvir Ahmed"
                        className="mt-2 w-full rounded-xl border border-white/10 bg-surface/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-foreground">
                        Account Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        className="mt-2 w-full rounded-xl border border-white/10 bg-surface/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="category" className="block text-xs font-semibold text-foreground">
                        Issue Category *
                      </label>
                      <select
                        id="category"
                        name="category"
                        required
                        defaultValue="Technical Setup & Bot Flows"
                        className="mt-2 w-full rounded-xl border border-white/10 bg-surface/80 px-4 py-3 text-sm text-foreground focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
                      >
                        <option value="Technical Setup & Bot Flows" className="bg-surface text-foreground">
                          Technical Setup & Bot Flows
                        </option>
                        <option value="Facebook / Instagram Meta Connection" className="bg-surface text-foreground">
                          Facebook / Instagram Meta Connection
                        </option>
                        <option value="Billing & Subscription Plans" className="bg-surface text-foreground">
                          Billing & Subscription Plans
                        </option>
                        <option value="Messenger Commerce & Payments" className="bg-surface text-foreground">
                          Messenger Commerce & Payments
                        </option>
                        <option value="Feature Request or Bug Report" className="bg-surface text-foreground">
                          Feature Request or Bug Report
                        </option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="priority" className="block text-xs font-semibold text-foreground">
                        Priority Level *
                      </label>
                      <select
                        id="priority"
                        name="priority"
                        required
                        defaultValue="Normal"
                        className="mt-2 w-full rounded-xl border border-white/10 bg-surface/80 px-4 py-3 text-sm text-foreground focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
                      >
                        <option value="Low" className="bg-surface text-foreground">
                          Low (General inquiry)
                        </option>
                        <option value="Normal" className="bg-surface text-foreground">
                          Normal (Feature guidance)
                        </option>
                        <option value="High" className="bg-surface text-foreground">
                          High (Affecting active campaign)
                        </option>
                        <option value="Urgent" className="bg-surface text-foreground">
                          Urgent (Service completely offline)
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-foreground">
                      Subject Line *
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="Brief summary of the issue"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-surface/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-foreground">
                      Detailed Description *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Please explain the issue in detail. Include your Facebook page name, bot name, or error message if applicable..."
                      className="mt-2 w-full rounded-xl border border-white/10 bg-surface/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
                    />
                  </div>

                  <div className="flex items-center justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center rounded-xl bg-brand-orange px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-orange/20 transition-all hover:bg-brand-orange/90 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Submit Support Ticket
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
