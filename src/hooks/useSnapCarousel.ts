"use client";

import { useCallback, useLayoutEffect, useRef } from "react";

/**
 * Drives a native CSS scroll-snap track with prev/next buttons.
 *
 * The snap line is the track's *resolved* padding-left (read from computed style):
 * computed scroll-padding with %/max()/clamp() isn't resolved to px by browsers,
 * so the track sets the same value on both properties and we measure padding.
 * `loop` wraps from the last reachable slide to the first and vice versa.
 */
export function useSnapCarousel<T extends HTMLElement>({ loop = true, initialIndex = 0 } = {}) {
  const trackRef = useRef<T>(null);

  const metrics = useCallback(() => {
    const track = trackRef.current;
    if (!track) return null;
    const snap = parseFloat(getComputedStyle(track).paddingLeft) || 0;
    const items = Array.from(track.children) as HTMLElement[];
    const max = track.scrollWidth - track.clientWidth;
    const origin = track.getBoundingClientRect().left - track.scrollLeft;
    // Scroll position that puts each item's left edge on the snap line (clamped to what's reachable).
    const stops = items.map((el) => Math.min(max, Math.max(0, el.getBoundingClientRect().left - origin - snap)));
    return { track, stops, max };
  }, []);

  const scrollToIndex = useCallback(
    (i: number, behavior: ScrollBehavior = "smooth") => {
      const m = metrics();
      if (!m) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      m.track.scrollTo({ left: m.stops[i], behavior: reduce ? "instant" : behavior });
    },
    [metrics],
  );

  const step = useCallback(
    (dir: 1 | -1) => {
      const m = metrics();
      if (!m) return;
      const pos = m.track.scrollLeft;
      let current = 0;
      m.stops.forEach((s, i) => {
        if (Math.abs(s - pos) < Math.abs(m.stops[current] - pos)) current = i;
      });
      // The last few items can all clamp to `max`; stop at the first one that does.
      const reachable = m.stops.findIndex((s) => s >= m.max - 1);
      const last = reachable === -1 ? m.stops.length - 1 : reachable;
      let next = Math.min(current, last) + dir;
      if (next > last) next = loop ? 0 : last;
      if (next < 0) next = loop ? last : 0;
      scrollToIndex(next);
    },
    [loop, metrics, scrollToIndex],
  );

  // Start on `initialIndex` (lets the previous slide peek in on the left, as designed).
  useLayoutEffect(() => {
    if (initialIndex > 0) scrollToIndex(initialIndex, "instant");
  }, [initialIndex, scrollToIndex]);

  return {
    trackRef,
    prev: () => step(-1),
    next: () => step(1),
    scrollToIndex,
  };
}
