/** Figma canvas width the design was drawn at. */
export const CANVAS = 1728;

const round = (n: number, d = 3) => +n.toFixed(d);

/**
 * Fluid length: exact Figma px at the canvas width, proportional below it,
 * never smaller than `min` (defaults to 60% of the design value).
 *   fl(47) → "clamp(28.2px, 2.72vw, 47px)"
 */
export function fl(px: number, min = px * 0.6) {
  return `clamp(${round(min, 2)}px, ${round((px / CANVAS) * 100)}vw, ${round(px, 2)}px)`;
}
