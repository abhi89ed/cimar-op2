import type { CSSProperties } from "react";
import { CarouselArrowIcon } from "./icons";

type CarouselButtonProps = {
  direction: "prev" | "next";
  onClick: () => void;
  controls: string;
  label: string;
  /** Figma diameter in px at the canvas. */
  size?: number;
  className?: string;
  style?: CSSProperties;
};

/** Round orange arrow button that drives a scroll-snap track. */
export function CarouselButton({ direction, onClick, controls, label, size = 85, className = "", style }: CarouselButtonProps) {
  const d = `clamp(44px, ${+((size / 1728) * 100).toFixed(3)}vw, ${size}px)`;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-controls={controls}
      aria-label={label}
      className={`grid shrink-0 cursor-pointer place-items-center rounded-full bg-brand text-white transition-[background-color,transform] duration-200 hover:bg-brand-deep active:scale-95 ${className}`}
      style={{ width: d, height: d, ...style }}
    >
      {/* Arrow is 27.6px long in an 85px circle. */}
      <CarouselArrowIcon className={`h-auto w-[36%] ${direction === "prev" ? "rotate-180" : ""}`} />
    </button>
  );
}
