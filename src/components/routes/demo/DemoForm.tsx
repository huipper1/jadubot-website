"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Calendar, CheckCircle2 } from "lucide-react";

export function DemoForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [scheduledDetails, setScheduledDetails] = useState<{
    name: string;
    business: string;
    date: string;
    time: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const details = {
      name: (formData.get("name") as string) || "Guest",
      business: (formData.get("business") as string) || "Business",
      date: (formData.get("date") as string) || "Upcoming Date",
      time: (formData.get("time") as string) || "11:00 AM"
    };

    setTimeout(() => {
      setIsSubmitting(false);
      setIsBooked(true);
      setScheduledDetails(details);
      toast.success("Demo session requested successfully!", {
        description: `We have received your request for ${details.date} at ${details.time}. We'll send your Google Meet link shortly.`
      });
    }, 900);
  };

  if (isBooked && scheduledDetails) {
    return (
      <div className="glass-card rounded-2xl p-8 border-border text-center py-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="mt-6 text-2xl font-bold text-foreground">Demo Session Requested!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thank you, <strong className="text-foreground">{scheduledDetails.name}</strong> from{" "}
          <strong className="text-foreground">{scheduledDetails.business}</strong>.
        </p>

        <div className="mx-auto mt-6 max-w-sm rounded-xl border border-border bg-white/5 p-4 text-left space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Preferred Date:</span>
            <span className="font-semibold text-foreground">{scheduledDetails.date}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Preferred Time:</span>
            <span className="font-semibold text-foreground">{scheduledDetails.time} (BST)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Platform:</span>
            <span className="font-semibold text-brand-orange">Google Meet (Link sent via Email/WhatsApp)</span>
          </div>
        </div>

        <p className="mt-6 text-xs text-muted-foreground max-w-md mx-auto">
          Our senior marketing technologist will contact you shortly to confirm your slot and share your calendar invitation.
        </p>

        <button
          type="button"
          onClick={() => {
            setIsBooked(false);
            setScheduledDetails(null);
          }}
          className="mt-6 text-xs font-medium text-brand-orange underline hover:text-brand-orange/80"
        >
          Book another slot
        </button>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-2xl p-8 border-border">
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
              placeholder="e.g. Mahfuzur Rahman"
              className="mt-2 w-full rounded-xl border border-border bg-surface/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
            />
          </div>

          <div>
            <label htmlFor="business" className="block text-xs font-semibold text-foreground">
              Brand / Business Name *
            </label>
            <input
              id="business"
              name="business"
              type="text"
              required
              placeholder="e.g. Dhaka Artisan Leather"
              className="mt-2 w-full rounded-xl border border-border bg-surface/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
            />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-foreground">
              Work Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="name@business.com"
              className="mt-2 w-full rounded-xl border border-border bg-surface/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-foreground">
              WhatsApp / Mobile Number *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="+880 1XXXXXXXXX"
              className="mt-2 w-full rounded-xl border border-border bg-surface/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
            />
          </div>
        </div>

        <div>
          <label htmlFor="pageLink" className="block text-xs font-semibold text-foreground">
            Facebook Page / Instagram Profile URL
          </label>
          <input
            id="pageLink"
            name="pageLink"
            type="url"
            placeholder="https://facebook.com/yourpagename"
            className="mt-2 w-full rounded-xl border border-border bg-surface/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="date" className="block text-xs font-semibold text-foreground">
              Preferred Date *
            </label>
            <input
              id="date"
              name="date"
              type="date"
              required
              className="mt-2 w-full rounded-xl border border-border bg-surface/80 px-4 py-3 text-sm text-foreground focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
            />
          </div>

          <div>
            <label htmlFor="time" className="block text-xs font-semibold text-foreground">
              Preferred Time Window *
            </label>
            <select
              id="time"
              name="time"
              required
              defaultValue="11:00 AM – 12:00 PM (Morning)"
              className="mt-2 w-full rounded-xl border border-border bg-surface/80 px-4 py-3 text-sm text-foreground focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
            >
              <option value="11:00 AM – 12:00 PM (Morning)" className="bg-surface text-foreground">
                11:00 AM – 12:00 PM (Morning)
              </option>
              <option value="03:00 PM – 04:00 PM (Afternoon)" className="bg-surface text-foreground">
                03:00 PM – 04:00 PM (Afternoon)
              </option>
              <option value="06:00 PM – 07:00 PM (Evening)" className="bg-surface text-foreground">
                06:00 PM – 07:00 PM (Evening)
              </option>
              <option value="09:00 PM – 10:00 PM (Night)" className="bg-surface text-foreground">
                09:00 PM – 10:00 PM (Night)
              </option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-foreground mb-2">
            What features are you most interested in?
          </label>
          <div className="grid gap-3 sm:grid-cols-2 text-xs">
            <label className="flex items-center gap-2 text-muted-foreground hover:text-foreground cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded border-white/20 text-brand-orange focus:ring-0" />
              Comment to Inbox auto-reply
            </label>
            <label className="flex items-center gap-2 text-muted-foreground hover:text-foreground cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded border-white/20 text-brand-orange focus:ring-0" />
              24/7 AI customer FAQ bot
            </label>
            <label className="flex items-center gap-2 text-muted-foreground hover:text-foreground cursor-pointer">
              <input type="checkbox" className="rounded border-white/20 text-brand-orange focus:ring-0" />
              Messenger Store & checkout
            </label>
            <label className="flex items-center gap-2 text-muted-foreground hover:text-foreground cursor-pointer">
              <input type="checkbox" className="rounded border-white/20 text-brand-orange focus:ring-0" />
              Instagram DM automation
            </label>
          </div>
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
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Free Demo Session
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
