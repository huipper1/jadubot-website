import Image from "next/image";
import { Star } from "lucide-react";
import { Badge } from "@/ui";

const TESTIMONIALS = [
  {
    name: "Sohel Rana",
    role: "Founder, Deshi Food Truck",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    content:
      "Earlier, answering hundreds of 'Price?' and 'Where is your truck today?' comments on Facebook was impossible while cooking. Jadubot automated our menu and location replies, boosting our sales by 25% within weeks!",
    rating: 5,
    tag: "Food & Beverage"
  },
  {
    name: "Nusrat Jahan",
    role: "Owner, Velvet Couture",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    content:
      "Our Instagram DMs were overwhelming during Eid sales. Jadubot’s Messenger Store allowed our shoppers to pick their size, color, and address directly in the chat. We processed orders 5x faster with zero missed buyers.",
    rating: 5,
    tag: "Fashion & Apparel"
  },
  {
    name: "Tanvir Ahmed",
    role: "Director, GadgetX BD",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    content:
      "The comment-to-inbox feature is pure magic. As soon as someone asks for specs on our ad posts, Jadubot pushes a detailed breakdown into their Messenger with an instant order button. Our ROAS doubled.",
    rating: 5,
    tag: "Consumer Electronics"
  }
];

export function HomeTestimonials() {
  return (
    <section className="relative py-24 md:py-32 bg-[#05070D]/40">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="default" className="px-3.5 py-1 text-xs">
            Client Stories
          </Badge>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Loved by fast-growing brands <span className="text-gradient">across the country</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            See how top retailers use Jadubot to convert conversations into loyal customers.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.name}
              className="glass-card glass-card-hover group relative flex flex-col justify-between rounded-2xl p-8 transition-all duration-300"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-8 flex items-center gap-4 border-t border-white/5 pt-5">
                <figure className="relative h-11 w-11 overflow-hidden rounded-full border border-brand/30">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={44}
                    height={44}
                    className="h-full w-full object-cover"
                  />
                </figure>
                <div>
                  <div className="text-sm font-bold text-foreground group-hover:text-brand">
                    {item.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
