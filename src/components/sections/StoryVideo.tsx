"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import { fl } from "@/lib/fluid";
import { PlayIcon } from "@/components/ui/icons";

type Props = {
  label: string;
  video: string;
  poster: { src: string; alt: string };
  style?: CSSProperties;
};

/* Poster + play button; clicking swaps in the real <video> and starts playback. */
export function StoryVideo({ label, video, poster, style }: Props) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className="group relative block min-h-(--h) w-(--w) overflow-hidden rounded-card bg-placeholder max-md:aspect-897/687 max-md:min-h-0 max-md:w-full"
      style={style}
    >
      {playing ? (
        <video src={video} poster={poster.src} controls autoPlay playsInline preload="auto" aria-label={label} className="absolute inset-0 h-full w-full bg-black object-cover" />
      ) : (
        <button type="button" aria-label={label} onClick={() => setPlaying(true)} className="absolute inset-0 cursor-pointer">
          <Image src={poster.src} alt={poster.alt} fill sizes="(max-width: 767px) 92vw, 55vw" quality={85} className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
          <span
            aria-hidden
            className="absolute top-1/2 left-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-brand shadow-lg transition-transform duration-300 group-hover:scale-110 group-active:scale-95"
            style={{ width: fl(114, 72), height: fl(114, 72) }}
          >
            <PlayIcon className="w-[43.9%]" />
          </span>
        </button>
      )}
    </div>
  );
}
