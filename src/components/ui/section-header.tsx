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
  /** Optional size override if explicitly needed */
  size?: "default" | "sm" | "lg";
  /** Maximum width of the header container (default: max-w-4xl) */
  maxWidth?: string;
  /** Custom classes for the title element */
  titleClassName?: string;
  /** Custom classes for the description element */
  descriptionClassName?: string;
}


// Unified standardized typography matching the site design
const TITLE_STYLES = {
  default:
    "font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold tracking-tight text-foreground leading-tight",
  sm: "font-heading text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-foreground leading-tight",
  lg: "font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold tracking-tight text-foreground leading-[1.15]"
};

const DEFAULT_GRADIENT =
  "bg-gradient-to-r from-primary via-sky-400 to-primary bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(1,114,255,0.35)]";

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
    void badge;
    void badgeIcon;
    void badgeClassName;
    const isCenter = align === "center";

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
        {/* Title */}
        <h2
          className={cn(
            "mt-0",
            TITLE_STYLES[size],
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
              "mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground",
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
