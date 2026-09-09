import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /** Optional badge text or custom element (e.g. "REAL IMPACT", "HOW IT WORKS") */
  badge?: React.ReactNode;
  /** Optional icon for the badge. Pass a component, element, or false to hide */
  badgeIcon?: React.ReactNode | React.ElementType | false;
  /** Custom classes for the badge container */
  badgeClassName?: string;
  /** Main heading content or prefix before gradientTitle */
  title: React.ReactNode;
  /** Optional highlighted gradient text at the end of the heading */
  gradientTitle?: string;
  /** Custom gradient classes for gradientTitle */
  gradientClassName?: string;
  /** Subtitle or description paragraph */
  description?: React.ReactNode;
  /** Text alignment */
  align?: "center" | "left";
  /** Size preset */
  size?: "sm" | "default" | "lg";
  /** Maximum width of the header container */
  maxWidth?: string;
  /** Custom classes for the title element */
  titleClassName?: string;
  /** Custom classes for the description element */
  descriptionClassName?: string;
}

function DefaultBadgeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className || "h-3.5 w-3.5 text-purple-400"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="17" cy="7" r="2.5" />
      <circle cx="7" cy="17" r="2.5" />
      <circle cx="17" cy="17" r="2.5" />
      <path d="M14.5 7.5L9.5 14.5" />
      <path d="M9.5 17h5" />
    </svg>
  );
}

const TITLE_SIZES = {
  sm: "text-xl sm:text-2xl md:text-3xl font-heading font-bold tracking-tight text-white leading-tight",
  default:
    "text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-heading font-extrabold tracking-tight text-white leading-tight",
  lg: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-[1.15]"
};

const DEFAULT_GRADIENT =
  "bg-gradient-to-r from-[#d8b4fe] via-[#c084fc] to-[#a855f7] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(192,132,252,0.35)]";

export const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  (
    {
      badge,
      badgeIcon,
      badgeClassName,
      title,
      gradientTitle,
      gradientClassName = DEFAULT_GRADIENT,
      description,
      align = "center",
      size = "default",
      maxWidth = "max-w-4xl",
      className,
      titleClassName,
      descriptionClassName,
      children,
      ...props
    },
    ref
  ) => {
    const isCenter = align === "center";

    // Resolve badge icon: null/false means no icon, undefined means default icon
    const renderBadgeIcon = () => {
      if (badgeIcon === false || badgeIcon === null) return null;
      if (React.isValidElement(badgeIcon)) return badgeIcon;
      if (typeof badgeIcon === "function") {
        const IconComponent = badgeIcon as React.ComponentType<{ className?: string }>;
        return <IconComponent className="h-3.5 w-3.5 text-purple-400" />;
      }
      return <DefaultBadgeIcon className="h-3.5 w-3.5 text-purple-400" />;
    };

    return (
      <div
        ref={ref}
        className={cn(
          "mb-14 sm:mb-16 lg:mb-20",
          maxWidth,
          isCenter ? "text-center mx-auto" : "text-left mr-auto",
          className
        )}
        {...props}
      >
        {/* Badge */}
        {badge && (
          <div
            className={cn(
              "inline-flex items-center gap-2 rounded-full border border-purple-500/35 bg-[#140b25]/80 px-4 py-1.5 text-xs font-semibold tracking-wider text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.2)] backdrop-blur-md",
              badgeClassName
            )}
          >
            {renderBadgeIcon()}
            {typeof badge === "string" ? (
              <span className="font-mono uppercase">{badge}</span>
            ) : (
              badge
            )}
          </div>
        )}

        {/* Title */}
        <h2
          className={cn(
            badge ? "mt-5" : "mt-0",
            TITLE_SIZES[size],
            titleClassName
          )}
        >
          {title}
          {gradientTitle && (
            <>
              {" "}
              <span className={gradientClassName}>{gradientTitle}</span>
            </>
          )}
        </h2>

        {/* Description */}
        {description && (
          <p
            className={cn(
              "mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-400",
              isCenter && "mx-auto",
              descriptionClassName
            )}
          >
            {description}
          </p>
        )}

        {/* Extra children / CTA elements */}
        {children}
      </div>
    );
  }
);

SectionHeader.displayName = "SectionHeader";
