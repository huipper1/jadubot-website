import { AlertCircle, CheckCircle } from "lucide-react";

export function AffiliateRules() {
  return (
    <section className="relative py-16 md:py-24 border-t border-white/5">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              পেমেন্ট নীতিমালা ও গুরুত্বপূর্ণ নিয়মাবলী
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              স্বচ্ছ ও দীর্ঘমেয়াদী পার্টনারশিপ বজায় রাখতে অনুগ্রহ করে নিয়মগুলো লক্ষ্য রাখুন।
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass-card rounded-2xl p-6 border-white/10">
              <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-400" />
                পেমেন্ট ও উইথড্র নীতিমালা
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange mt-0.5 font-bold">•</span>
                  <span>ক্লায়েন্ট প্যাকেজ কেনা মাত্রই ২০% কমিশন ইনস্ট্যান্ট ব্যালেন্সে যুক্ত হবে।</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange mt-0.5 font-bold">•</span>
                  <span>মিনিমাম ব্যালেন্স ২০০০ টাকা হলে উইথড্র রিকোয়েস্ট দেওয়া যাবে।</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange mt-0.5 font-bold">•</span>
                  <span>প্রতি মাসের ৭-১০ তারিখ ও ২০-২৩ তারিখে উইথড্র পেমেন্ট ক্লিয়ার করা হয়।</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange mt-0.5 font-bold">•</span>
                  <span>বিকাশ, নগদ, রকেট এবং সরাসরি যেকোনো বাংলাদেশি ব্যাংক একাউন্টে পেমেন্ট গ্রহণযোগ্য।</span>
                </li>
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-6 border-white/10">
              <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-amber-400" />
                পালনীয় আচরণবিধি
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange mt-0.5 font-bold">•</span>
                  <span>Jadubot-এর অফিসিয়াল কমিউনিটি ও ফেসবুক গ্রুপে সংযুক্ত থাকতে হবে।</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange mt-0.5 font-bold">•</span>
                  <span>কোনো প্রকার বিভ্রান্তিকর বা অননুমোদিত তথ্য পরিবেশন করা যাবে না।</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange mt-0.5 font-bold">•</span>
                  <span>কোম্পানির নাম, ট্রেডমার্ক বা লোগো অনুকরণ করে ভুয়া পেজ বানানো সম্পূর্ণ নিষিদ্ধ।</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange mt-0.5 font-bold">•</span>
                  <span>অন্যান্য এফিলিয়েট পার্টনারদের কমেন্ট বক্সে লিংক স্প্যামিং গ্রহণযোগ্য নয়।</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
