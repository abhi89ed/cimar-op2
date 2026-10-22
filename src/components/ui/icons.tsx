import type { SVGProps } from "react";

/* Custom icons with the exact Figma geometry (outlined strokes, so they fill with currentColor). */

type IconProps = SVGProps<SVGSVGElement>;

const base = { fill: "currentColor", "aria-hidden": true, focusable: false } as const;

/** Pulse line used for “Unmedicated” (20×18, 2px stroke). */
export function PulseIcon(props: IconProps) {
  return (
    <svg viewBox="-1 -1 22 20" {...base} {...props}>
      <path d="M20 10a1 1 0 1 0 0-2zm-4-1V8a1 1 0 0 0-.95.68zm-3 9-.95.32a1 1 0 0 0 1.9 0zM7 0l.95-.32a1 1 0 0 0-1.9 0zM4 9v1a1 1 0 0 0 .95-.68zM0 8a1 1 0 1 0 0 2zm20 1V8h-4v2h4zm-4 0-.95-.32-3 9L13 18l.95.32 3-9zm-3 9 .95-.32-6-18L7 0l-.95.32 6 18zM7 0l-.95-.32-3 9L4 9l.95.32 3-9zM4 9V8H0v2h4z" />
    </svg>
  );
}

/** Cloud with rain used for “Conception” (19×19, 2px stroke). */
export function CloudRainIcon(props: IconProps) {
  return (
    <svg viewBox="-1 -1 21.15 21.15" {...base} {...props}>
      <path d="M14.06 10.44a1 1 0 1 0-2 0zm-2 6.97a1 1 0 1 0 2 0zm1-6.97h-1v6.97h2v-6.97zm-5.96 0a1 1 0 1 0-2 0zm-2 6.97a1 1 0 1 0 2 0zm1-6.97h-1v6.97h2v-6.97zm4.48 1.75a1 1 0 1 0-2 0zm-2 6.96a1 1 0 1 0 2 0zm1-6.96h-1v6.96h2v-6.96zm6.56.45a1 1 0 0 0 .8 1.84l-.4-.92zM14.8 5.22v-1zm-1.1 0-.96.25a1 1 0 0 0 .96.75zM2 13.18a1 1 0 1 0 1.24-1.56l-.62.78zm14.54.38.4.92a5.4 5.4 0 0 0 2.61-2.45l-.89-.46-.88-.46a3.4 3.4 0 0 1-1.64 1.53zm2.12-2 .9.47a5.4 5.4 0 0 0 .48-3.55l-.98.2-.98.2c.15.76.05 1.55-.3 2.23zm.4-2.88.98-.2a5.4 5.4 0 0 0-1.87-3.06l-.63.78-.63.77a3.4 3.4 0 0 1 1.17 1.92zM17.54 6.2l.63-.78a5.4 5.4 0 0 0-3.37-1.2v2c.77 0 1.52.27 2.11.75zm-2.74-.98v-1h-1.1v2h1.1zm-1.1 0 .97-.25a8 8 0 0 0-1.75-3.3l-.75.67-.75.66a6 6 0 0 1 1.32 2.47zm-1.53-2.88.75-.66A8 8 0 0 0 9.86-.46l-.37.94-.36.93q1.34.52 2.3 1.6zM9.5.48l.37-.94a8 8 0 0 0-3.7-.5l.1 1 .1 1q1.43-.15 2.77.37zM6.26.04l-.1-1A8 8 0 0 0 2.63.28l.55.84.54.84q1.22-.78 2.64-.93zM3.18 1.12 2.63.28a8 8 0 0 0-2.57 2.7l.87.5.87.5a6 6 0 0 1 1.92-2.02zM.93 3.49l-.87-.5A8 8 0 0 0-.99 6.57l1 .05 1 .05q.07-1.44.79-2.69zM.01 6.62l-1-.05a8 8 0 0 0 .7 3.66l.9-.4.92-.42A6 6 0 0 1 1 6.67zm.6 3.2-.9.41a8 8 0 0 0 2.28 2.95l.63-.78.62-.78a6 6 0 0 1-1.71-2.2z" />
    </svg>
  );
}

/** Heart with a pulse line, the specialty tile icon (81×71). */
export function HeartPulseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 81 71.28" {...base} {...props}>
      <path d="M13.7 35.62h-1.54l28.36 28.46L63.8 40.71h7.17L40.52 71.28 6.26 36.93a20 20 0 0 1-2.46-3 23 23 0 0 1-1.86-3.4h9.63l11.2-11.21 17.75 17.77 12.67-12.68 6.14 6.12H73.4q1.28-2.02 1.94-4.3.68-2.25.68-4.64A16 16 0 0 0 71.2 9.96a16.4 16.4 0 0 0-11.66-4.71q-3.33 0-5.9 1.05t-4.75 2.76a36 36 0 0 0-4.18 3.88q-2 2.15-4.18 4.4A159 159 0 0 1 36.36 13a38 38 0 0 0-4.22-3.94 21 21 0 0 0-4.8-2.86 15 15 0 0 0-5.83-1.11q-3.4 0-6.4 1.29a16.6 16.6 0 0 0-8.75 8.79q-1.29 3-1.29 6.42a18 18 0 0 0 .44 3.85H.3a14 14 0 0 1-.25-1.9A31 31 0 0 1 0 21.62q0-4.5 1.68-8.43A21.45 21.45 0 0 1 21.5 0q3.3 0 5.87.76t4.77 2.08q2.2 1.34 4.2 3.2 2 1.87 4.18 4.1 2.17-2.23 4.18-4.1a26 26 0 0 1 4.2-3.2A20 20 0 0 1 53.67.76Q56.24 0 59.53 0q4.44 0 8.36 1.69A21.46 21.46 0 0 1 79.65 29a22 22 0 0 1-3.84 6.62H57.19l-4-4.06-12.67 12.77-17.75-17.85z" />
    </svg>
  );
}

/** Rounded medical cross used in section eyebrows (21.43 square). */
export function CrossIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 21.43 21.43" {...base} {...props}>
      <path d="M8.27 0a2.14 2.14 0 0 0-2.15 2.14v3.98H2.14A2.14 2.14 0 0 0 0 8.27v4.9c0 1.18.96 2.14 2.14 2.14h3.98v3.98c0 1.18.96 2.14 2.15 2.14h4.9a2.14 2.14 0 0 0 2.14-2.14v-3.98h3.98a2.14 2.14 0 0 0 2.14-2.14v-4.9a2.14 2.14 0 0 0-2.14-2.15h-3.98V2.14A2.14 2.14 0 0 0 13.17 0z" />
    </svg>
  );
}

/** Long arrow with open head used on carousel buttons (points right; rotate for left). */
export function CarouselArrowIcon(props: IconProps) {
  return (
    <svg viewBox="-1.5 -11 30.6 22" {...base} {...props}>
      <path d="M0-1.5a1.5 1.5 0 0 0 0 3zM0 0v1.5h27.59v-3H0zm28.64 1.05a1.5 1.5 0 0 0 0-2.1l-9.49-9.5a1.5 1.5 0 0 0-2.1 2.11L25.47 0l-8.44 8.44a1.5 1.5 0 0 0 2.11 2.1z" />
    </svg>
  );
}

/** Play triangle (Figma polygon rotated 90°, 50×50 box). */
export function PlayIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 50 50" {...base} {...props}>
      <path d="M50 25 12.5 46.65V3.35z" />
    </svg>
  );
}

/** Five-point rating star; `amount` 0–1 renders a partial star with the design's soft gradient. */
export function StarIcon({ amount = 1, id, ...props }: Omit<IconProps, "fill"> & { amount?: number; id?: string }) {
  const path = "m7.63 0 1.72 4.98h5.54l-4.48 3.08 1.7 4.98-4.48-3.08-4.48 3.08 1.71-4.98L.37 4.98h5.55z";
  if (amount >= 1) {
    return (
      <svg viewBox="0 0 15.27 14.42" {...base} {...props}>
        <path d={path} />
      </svg>
    );
  }
  const gid = id ?? "star-partial";
  // Design: yellow → cream over 0–56% for the 4th-tenths star.
  return (
    <svg viewBox="0 0 15.27 14.42" aria-hidden focusable={false} {...props}>
      <defs>
        <linearGradient id={gid} x1=".85" x2="15.27" y1="7.63" y2="7.63" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="currentColor" />
          <stop offset={Math.min(1, amount * 1.4)} stopColor="var(--color-cream)" />
        </linearGradient>
      </defs>
      <path fill={`url(#${gid})`} d={path} />
    </svg>
  );
}
