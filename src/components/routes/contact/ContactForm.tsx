"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Send, CheckCircle2, ShieldCheck, Sparkles, Loader2 } from "lucide-react";
import { PopIn } from "@/components/animations";

const TOPIC_OPTIONS = [
  { id: "facebook", label: "Facebook & Messenger Automation" },
  { id: "instagram", label: "Instagram DM Sales Funnel" },
  { id: "cpa", label: "CPA Postbacks & Traffic Scaling" },
  { id: "enterprise", label: "Custom Enterprise & API" },
  { id: "general", label: "General Consultation & Partnership" }
];

const VOLUME_OPTIONS = [
  "Just starting / exploring",
  "Under 1,000 chats/month",
  "1,000 – 10,000 chats/month",
  "10,000+ high-volume enterprise"
];

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "Facebook & Messenger Automation",
    volume: "1,000 – 10,000 chats/month",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate instant client-side submission with realistic response
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("Inquiry sent successfully!", {
        description: "A Jadubot specialist will contact you on WhatsApp or email within 15 minutes."
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        topic: "Facebook & Messenger Automation",
        volume: "1,000 – 10,000 chats/month",
        message: ""
      });
    }, 600);
  };

  return (
    <PopIn className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d121c]/90 p-6 sm:p-9 shadow-2xl backdrop-blur-xl">
      {/* Decorative hairline corner glow */}
      <div
        className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[#0172ff]/10 blur-2xl"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="border-b border-white/[0.08] pb-5">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#38bdf8]">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Priority Consultation</span>
        </div>
        <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl font-heading">
          Send an Inquiry to Our Specialists
        </h3>
        <p className="mt-1.5 text-xs sm:text-sm text-slate-400">
          Share your store or campaign goals. Our Dhaka-based team provides tailored onboarding advice.
        </p>
      </div>

      {submitted ? (
        <div className="py-12 text-center animate-in fade-in-50">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 shadow-[0_0_24px_rgba(16,185,129,0.2)]">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h4 className="mt-5 text-xl font-bold text-white font-heading">Inquiry Received</h4>
          <p className="mx-auto mt-2 max-w-sm text-sm text-slate-300 leading-relaxed">
            Thank you for connecting with Jadubot. One of our automation engineers has been assigned to review your inquiry and will reach out via WhatsApp or email shortly.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-6 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-white/10 hover:border-white/20"
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          {/* Name & Email row */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300">
                Your Full Name <span className="text-rose-400">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Asif Karim"
                className="mt-1.5 w-full rounded-xl border border-white/10 bg-[#090d14]/70 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 transition focus:border-[#0172ff] focus:bg-[#090d14] focus:outline-none focus:ring-1 focus:ring-[#0172ff]"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300">
                Work Email <span className="text-rose-400">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@business.com"
                className="mt-1.5 w-full rounded-xl border border-white/10 bg-[#090d14]/70 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 transition focus:border-[#0172ff] focus:bg-[#090d14] focus:outline-none focus:ring-1 focus:ring-[#0172ff]"
              />
            </div>
          </div>

          {/* WhatsApp / Phone */}
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="contact-phone" className="block text-xs font-medium text-slate-300">
                WhatsApp or Phone Number <span className="text-rose-400">*</span>
              </label>
              <span className="text-[11px] text-[#34d399]">For fastest WhatsApp reply</span>
            </div>
            <input
              id="contact-phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+880 17XXXXXXXX or 017XXXXXXXX"
              className="mt-1.5 w-full rounded-xl border border-white/10 bg-[#090d14]/70 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 transition focus:border-[#0172ff] focus:bg-[#090d14] focus:outline-none focus:ring-1 focus:ring-[#0172ff]"
            />
          </div>

          {/* Topic / Solution */}
          <div>
            <label htmlFor="contact-topic" className="block text-xs font-medium text-slate-300">
              What do you want to automate?
            </label>
            <div className="relative mt-1.5">
              <select
                id="contact-topic"
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-[#090d14] px-3.5 py-2.5 text-sm text-white transition focus:border-[#0172ff] focus:outline-none focus:ring-1 focus:ring-[#0172ff]"
              >
                {TOPIC_OPTIONS.map((opt) => (
                  <option key={opt.id} value={opt.label} className="bg-[#0c1018] text-white">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Monthly Volume */}
          <div>
            <label htmlFor="contact-volume" className="block text-xs font-medium text-slate-300">
              Estimated Monthly Conversation or Order Volume
            </label>
            <div className="relative mt-1.5">
              <select
                id="contact-volume"
                value={formData.volume}
                onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-[#090d14] px-3.5 py-2.5 text-sm text-white transition focus:border-[#0172ff] focus:outline-none focus:ring-1 focus:ring-[#0172ff]"
              >
                {VOLUME_OPTIONS.map((vol) => (
                  <option key={vol} value={vol} className="bg-[#0c1018] text-white">
                    {vol}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message textarea */}
          <div>
            <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300">
              Project Details or Specific Questions <span className="text-rose-400">*</span>
            </label>
            <textarea
              id="contact-message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your Facebook page, product niche, team size, or what workflows you need assistance setting up..."
              className="mt-1.5 w-full rounded-xl border border-white/10 bg-[#090d14]/70 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 transition focus:border-[#0172ff] focus:bg-[#090d14] focus:outline-none focus:ring-1 focus:ring-[#0172ff]"
            />
          </div>

          {/* Active Voice Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0172ff] to-[#0158c7] py-3.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(1,114,255,0.35)] transition-all hover:scale-[1.008] hover:shadow-[0_0_32px_rgba(1,114,255,0.5)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin text-white" />
                <span>Sending inquiry...</span>
              </>
            ) : (
              <>
                <span>Send Inquiry to Specialists</span>
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </>
            )}
          </button>

          {/* Trust Guarantee Note */}
          <div className="flex items-center justify-center gap-2 pt-1 text-center text-xs text-slate-400">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
            <span>Zero spam. Direct response from a senior automation specialist.</span>
          </div>
        </form>
      )}
    </PopIn>
  );
}
