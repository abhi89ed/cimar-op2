import { ArrowRight } from "lucide-react";
import type { CSSProperties } from "react";
import { fl } from "@/lib/fluid";
import { AppLink } from "./AppLink";

/*
 * Figma “CTA”: a pill label plus a separate round arrow button, bottom-aligned.
 *   lg — 288×70 pill, 72px circle, 7px gap (hero, care team, stories)
 *   sm — 49px pill, 49.63px circle, 4.83px gap (news, locations, footer form)
 */
const sizes = {
  lg: { pillH: fl(70, 52), circle: fl(72, 54), gap: fl(7, 5), arrow: fl(24, 20), text: "text-cta" },
  sm: { pillH: fl(49, 40), circle: fl(49.63, 41), gap: fl(4.83, 4), arrow: fl(16.5, 15), text: "text-cta-sm" },
} as const;

const tones = {
  brand: "bg-brand text-white group-hover:bg-brand-deep",
  light: "bg-white text-brand group-hover:bg-cream",
} as const;

type CtaProps = {
  label: string;
  size?: keyof typeof sizes;
  tone?: keyof typeof tones;
  /** Pill width in Figma px at the canvas (it scales fluidly). */
  pillWidth?: number;
  className?: string;
};

function CtaInner({ label, size = "lg", tone = "brand" }: CtaProps) {
  const s = sizes[size];
  const pill = `flex items-center justify-center rounded-full px-[1em] whitespace-nowrap capitalize transition-colors ${s.text} ${tones[tone]}`;
  return (
    <>
      <span className={`${pill} h-(--pill-h) w-(--pill-w)`}>{label}</span>
      <span aria-hidden className={`grid size-(--circle) shrink-0 place-items-center rounded-full transition-colors ${tones[tone]}`}>
        <ArrowRight className="size-(--arrow) transition-transform duration-200 group-hover:translate-x-[3px]" strokeWidth={2} />
      </span>
    </>
  );
}

function vars(size: keyof typeof sizes, pillWidth: number): CSSProperties {
  const s = sizes[size];
  const floor = size === "lg" ? 200 : Math.min(pillWidth, 96);
  return {
    "--pill-h": s.pillH,
    "--pill-w": fl(pillWidth, floor),
    "--circle": s.circle,
    "--gap": s.gap,
    "--arrow": s.arrow,
  } as CSSProperties;
}

const wrapper =
  "group inline-flex items-end gap-(--gap) rounded-full outline-offset-4 active:scale-[0.98] transition-transform select-none cursor-pointer";

export function CtaLink({ href, className = "", ...props }: CtaProps & { href: string }) {
  return (
    <AppLink href={href} className={`${wrapper} ${className}`} style={vars(props.size ?? "lg", props.pillWidth ?? 288)}>
      <CtaInner {...props} />
    </AppLink>
  );
}

export function CtaButton({ className = "", type = "button", ...props }: CtaProps & { type?: "button" | "submit" }) {
  return (
    <button type={type} className={`${wrapper} ${className}`} style={vars(props.size ?? "lg", props.pillWidth ?? 288)}>
      <CtaInner {...props} />
    </button>
  );
}
