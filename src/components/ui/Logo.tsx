import Image from "next/image";
import type { CSSProperties } from "react";
import { logo } from "@/data/site";

type LogoProps = {
  /** `color` is the full-colour mark; `mono` paints the logo in currentColor (white, cream…). */
  variant?: "color" | "mono";
  className?: string;
  /** Pass false when the logo sits inside a link that already names it. */
  label?: string | false;
  eager?: boolean;
};

/** The Figma logo box is 213×73 (the image-fill crop), so the SVG viewBox matches it. */
export function Logo({ variant = "color", className = "", label = logo.alt, eager }: LogoProps) {
  if (variant === "color") {
    return (
      <Image
        src={logo.color}
        alt={label || ""}
        width={213}
        height={73}
        unoptimized
        loading={eager ? "eager" : undefined}
        className={`aspect-213/73 h-auto ${className}`}
      />
    );
  }
  return <MaskedArt src={logo.mono} label={label} className={`aspect-213/73 ${className}`} />;
}

/** The oversized footer wordmark: the “CIMAR” letters of the logo, filled with currentColor. */
export function Wordmark({ className = "" }: { className?: string }) {
  return <MaskedArt src={logo.wordmark} label={false} className={`aspect-[1699/450.09] ${className}`} />;
}

function MaskedArt({ src, label, className }: { src: string; label?: string | false; className: string }) {
  const style: CSSProperties = {
    WebkitMaskImage: `url(${src})`,
    maskImage: `url(${src})`,
    WebkitMaskSize: "100% 100%",
    maskSize: "100% 100%",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
  };
  return (
    <span
      {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}
      className={`block bg-current ${className}`}
      style={style}
    />
  );
}
