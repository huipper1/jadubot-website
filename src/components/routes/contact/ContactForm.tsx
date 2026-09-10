"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Send, CheckCircle2 } from "lucide-react";

import { PopIn } from "@/components/animations";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate instant client-side submission per alignment
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("Thank you! Your message has been sent.", {
        description: "Our customer success team will reach out within 2 hours."
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: ""
      });
    }, 600);
  };

  return (
    <PopIn className="glass-card rounded-2xl p-8 border-white/10 shadow-2xl">
      <h3 className="text-xl font-bold text-foreground">Send Us a Message</h3>
      <p className="mt-1 text-xs text-muted-foreground">
        Fill out the form below and we will respond promptly.
      </p>

      {submitted ? (
        <div className="mt-8 flex flex-col items-center justify-center py-12 text-center animate-in fade-in-50">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h4 className="mt-4 text-lg font-bold text-foreground">Message Received!</h4>
          <p className="mt-2 max-w-sm text-xs text-muted-foreground">
            Thank you for reaching out to Jadubot. Our support agents have received your
            inquiry and will reply via email/WhatsApp shortly.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-6 rounded-full border border-white/10 bg-white/5 px-6 py-2 text-xs font-semibold text-foreground hover:bg-white/10"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-foreground/90">
              Your Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Asif Karim"
              className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-brand/50 focus:outline-none focus:ring-1 focus:ring-brand/50"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold text-foreground/90">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@business.com"
                className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-brand/50 focus:outline-none focus:ring-1 focus:ring-brand/50"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-foreground/90">
                Phone or WhatsApp *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="017XXXXXXXX"
                className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-brand/50 focus:outline-none focus:ring-1 focus:ring-brand/50"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-foreground/90">
              Topic / Service
            </label>
            <select
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="mt-1.5 w-full rounded-xl border border-white/10 bg-[#0C101C] px-4 py-3 text-sm text-foreground focus:border-brand/50 focus:outline-none focus:ring-1 focus:ring-brand/50"
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Facebook Messenger Automation">
                Facebook Messenger Automation
              </option>
              <option value="Instagram DM Bot">Instagram DM Bot</option>
              <option value="CPA Automation & Postbacks">CPA Automation & Postbacks</option>
              <option value="Custom Enterprise Solution">
                Custom Enterprise Solution
              </option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-foreground/90">
              How can we help you? *
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your business, current chat volume, or goals..."
              className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-brand/50 focus:outline-none focus:ring-1 focus:ring-brand/50"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary flex w-full items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(1,114,255,0.35)] transition-all hover:scale-[1.01] disabled:opacity-70"
          >
            {loading ? (
              <span>Sending...</span>
            ) : (
              <>
                <span>Submit Message</span>
                <Send className="h-4 w-4" />
              </>
            )}
          </button>
        </form>
      )}
    </PopIn>
  );
}
