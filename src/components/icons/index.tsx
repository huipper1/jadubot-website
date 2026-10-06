"use client";

import React from "react";
import type { IconProps as PhosphorBaseIconProps } from "@phosphor-icons/react";
import * as Phosphor from "@phosphor-icons/react";
import {
  SiFacebook as BaseSiFacebook,
  SiGooglesheets as BaseSiGooglesheets,
  SiInstagram as BaseSiInstagram,
  SiMessenger as BaseSiMessenger,
  SiShopify as BaseSiShopify,
  SiTelegram as BaseSiTelegram,
  SiWhatsapp as BaseSiWhatsapp,
  SiWoocommerce as BaseSiWoocommerce,
  SiX as BaseSiX
} from "@icons-pack/react-simple-icons";

export type IconProps = Omit<PhosphorBaseIconProps, "weight"> & {
  weight?: PhosphorBaseIconProps["weight"];
  className?: string;
};

// Helper that creates a Phosphor icon pre-bound to weight="fill"
function createFillIcon(Component: React.ComponentType<PhosphorBaseIconProps>) {
  const IconWrapper = React.forwardRef<SVGSVGElement, IconProps>(function FillIcon(
    { weight = "fill", className, ...props },
    ref
  ) {
    return <Component ref={ref} weight={weight} className={className} aria-hidden="true" {...props} />;
  });
  IconWrapper.displayName = Component.displayName || "FillIcon";
  return IconWrapper;
}

// Phosphor Fill Icons
export const ArrowClockwise = createFillIcon(Phosphor.ArrowClockwise);
export const ArrowCounterClockwise = createFillIcon(Phosphor.ArrowCounterClockwise);
export const ArrowLeft = createFillIcon(Phosphor.ArrowLeft);
export const ArrowRight = createFillIcon(Phosphor.ArrowRight);
export const ArrowSquareOut = createFillIcon(Phosphor.ArrowSquareOut);
export const ArrowUpRight = createFillIcon(Phosphor.ArrowUpRight);
export const BookOpen = createFillIcon(Phosphor.BookOpen);
export const Brain = createFillIcon(Phosphor.Brain);
export const Briefcase = createFillIcon(Phosphor.Briefcase);
export const Buildings = createFillIcon(Phosphor.Buildings);
export const Calculator = createFillIcon(Phosphor.Calculator);
export const CalendarBlank = createFillIcon(Phosphor.CalendarBlank);
export const CaretDown = createFillIcon(Phosphor.CaretDown);
export const CaretRight = createFillIcon(Phosphor.CaretRight);
export const ChartBar = createFillIcon(Phosphor.ChartBar);
export const ChatCircleDots = createFillIcon(Phosphor.ChatCircleDots);
export const ChatTeardropDots = createFillIcon(Phosphor.ChatTeardropDots);
export const Check = createFillIcon(Phosphor.Check);
export const CheckCircle = createFillIcon(Phosphor.CheckCircle);
export const Circle = createFillIcon(Phosphor.Circle);
export const Clock = createFillIcon(Phosphor.Clock);
export const Cloud = createFillIcon(Phosphor.Cloud);
export const Code = createFillIcon(Phosphor.Code);
export const Coffee = createFillIcon(Phosphor.Coffee);
export const Copy = createFillIcon(Phosphor.Copy);
export const Cpu = createFillIcon(Phosphor.Cpu);
export const CreditCard = createFillIcon(Phosphor.CreditCard);
export const Database = createFillIcon(Phosphor.Database);
export const DeviceMobile = createFillIcon(Phosphor.DeviceMobile);
export const Envelope = createFillIcon(Phosphor.Envelope);
export const Eye = createFillIcon(Phosphor.Eye);
export const FileText = createFillIcon(Phosphor.FileText);
export const Funnel = createFillIcon(Phosphor.Funnel);
export const Gift = createFillIcon(Phosphor.Gift);
export const GitBranch = createFillIcon(Phosphor.GitBranch);
export const GitFork = createFillIcon(Phosphor.GitFork);
export const GitMerge = createFillIcon(Phosphor.GitMerge);
export const Globe = createFillIcon(Phosphor.Globe);
export const Handshake = createFillIcon(Phosphor.Handshake);
export const Headset = createFillIcon(Phosphor.Headset);
export const Heart = createFillIcon(Phosphor.Heart);
export const House = createFillIcon(Phosphor.House);
export const Info = createFillIcon(Phosphor.Info);
export const Lightning = createFillIcon(Phosphor.Lightning);
export const Link = createFillIcon(Phosphor.Link);
export const MagnifyingGlass = createFillIcon(Phosphor.MagnifyingGlass);
export const MapPin = createFillIcon(Phosphor.MapPin);
export const Minus = createFillIcon(Phosphor.Minus);
export const Moon = createFillIcon(Phosphor.Moon);
export const NavigationArrow = createFillIcon(Phosphor.NavigationArrow);
export const Package = createFillIcon(Phosphor.Package);
export const Palette = createFillIcon(Phosphor.Palette);
export const PaperPlaneTilt = createFillIcon(Phosphor.PaperPlaneTilt);
export const Percent = createFillIcon(Phosphor.Percent);
export const Phone = createFillIcon(Phosphor.Phone);
export const PhoneCall = createFillIcon(Phosphor.PhoneCall);
export const Plus = createFillIcon(Phosphor.Plus);
export const Pulse = createFillIcon(Phosphor.Pulse);
export const Question = createFillIcon(Phosphor.Question);
export const Radio = createFillIcon(Phosphor.Radio);
export const Robot = createFillIcon(Phosphor.Robot);
export const SealCheck = createFillIcon(Phosphor.SealCheck);
export const ShareNetwork = createFillIcon(Phosphor.ShareNetwork);
export const Shield = createFillIcon(Phosphor.Shield);
export const ShieldCheck = createFillIcon(Phosphor.ShieldCheck);
export const ShoppingBag = createFillIcon(Phosphor.ShoppingBag);
export const ShoppingCart = createFillIcon(Phosphor.ShoppingCart);
export const Shuffle = createFillIcon(Phosphor.Shuffle);
export const Smiley = createFillIcon(Phosphor.Smiley);
export const Sparkle = createFillIcon(Phosphor.Sparkle);
export const SpeakerHigh = createFillIcon(Phosphor.SpeakerHigh);
export const SpinnerGap = createFillIcon(Phosphor.SpinnerGap);
export const SquaresFour = createFillIcon(Phosphor.SquaresFour);
export const Stack = createFillIcon(Phosphor.Stack);
export const Star = createFillIcon(Phosphor.Star);
export const Sun = createFillIcon(Phosphor.Sun);
export const Tray = createFillIcon(Phosphor.Tray);
export const TreeStructure = createFillIcon(Phosphor.TreeStructure);
export const TrendUp = createFillIcon(Phosphor.TrendUp);
export const Trophy = createFillIcon(Phosphor.Trophy);
export const Truck = createFillIcon(Phosphor.Truck);
export const User = createFillIcon(Phosphor.User);
export const UserCheck = createFillIcon(Phosphor.UserCheck);
export const Users = createFillIcon(Phosphor.Users);
export const VideoCamera = createFillIcon(Phosphor.VideoCamera);
export const Wallet = createFillIcon(Phosphor.Wallet);
export const Warning = createFillIcon(Phosphor.Warning);
export const WarningCircle = createFillIcon(Phosphor.WarningCircle);
export const WarningOctagon = createFillIcon(Phosphor.WarningOctagon);
export const X = createFillIcon(Phosphor.X);
export const XCircle = createFillIcon(Phosphor.XCircle);

// Brand Icons
export interface BrandIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SiFacebook = React.forwardRef<SVGSVGElement, BrandIconProps>(function Facebook(
  { color = "default", className, ...props },
  ref
) {
  return <BaseSiFacebook ref={ref} color={color} className={className} aria-hidden="true" {...props} />;
});

export const SiInstagram = React.forwardRef<SVGSVGElement, BrandIconProps>(function Instagram(
  { color = "default", className, ...props },
  ref
) {
  return <BaseSiInstagram ref={ref} color={color} className={className} aria-hidden="true" {...props} />;
});

export const SiWhatsapp = React.forwardRef<SVGSVGElement, BrandIconProps>(function Whatsapp(
  { color = "default", className, ...props },
  ref
) {
  return <BaseSiWhatsapp ref={ref} color={color} className={className} aria-hidden="true" {...props} />;
});

export const SiMessenger = React.forwardRef<SVGSVGElement, BrandIconProps>(function Messenger(
  { color = "default", className, ...props },
  ref
) {
  return <BaseSiMessenger ref={ref} color={color} className={className} aria-hidden="true" {...props} />;
});

export const SiTelegram = React.forwardRef<SVGSVGElement, BrandIconProps>(function Telegram(
  { color = "default", className, ...props },
  ref
) {
  return <BaseSiTelegram ref={ref} color={color} className={className} aria-hidden="true" {...props} />;
});

export const SiShopify = React.forwardRef<SVGSVGElement, BrandIconProps>(function Shopify(
  { color = "default", className, ...props },
  ref
) {
  return <BaseSiShopify ref={ref} color={color} className={className} aria-hidden="true" {...props} />;
});

export const SiWoocommerce = React.forwardRef<SVGSVGElement, BrandIconProps>(function Woocommerce(
  { color = "default", className, ...props },
  ref
) {
  return <BaseSiWoocommerce ref={ref} color={color} className={className} aria-hidden="true" {...props} />;
});

export const SiGooglesheets = React.forwardRef<SVGSVGElement, BrandIconProps>(function Googlesheets(
  { color = "default", className, ...props },
  ref
) {
  return <BaseSiGooglesheets ref={ref} color={color} className={className} aria-hidden="true" {...props} />;
});

// X (formerly Twitter) with dark mode contrast exception: text-slate-900 dark:text-white
export const SiX = React.forwardRef<SVGSVGElement, BrandIconProps>(function XIcon(
  { className = "", ...props },
  ref
) {
  return (
    <BaseSiX
      ref={ref}
      color="currentColor"
      className={`text-slate-900 dark:text-white ${className}`}
      aria-hidden="true"
      {...props}
    />
  );
});

// LinkedIn Official Logo (Maintains brand blue #0A66C2 across themes)
export const LinkedinIcon = React.forwardRef<SVGSVGElement, BrandIconProps>(function Linkedin(
  { className = "", color = "#0A66C2", ...props },
  ref
) {
  return (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      fill={color === "currentColor" ? "currentColor" : color}
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
});

// Preserved aliases matching project naming
export const FacebookIcon = SiFacebook;
export const WhatsAppIcon = SiWhatsapp;
