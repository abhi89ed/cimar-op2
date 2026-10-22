"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { clinicTour } from "@/data/site";
import { fl } from "@/lib/fluid";
import { useSnapCarousel } from "@/hooks/useSnapCarousel";
import { CarouselButton } from "@/components/ui/CarouselButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";

/*
 * Full-bleed track: two 713px slides centred with a 44px gap, neighbours peeking in
 * from both edges. The snap line (padding-left) centres the visible pair; arrow
 * buttons sit on the gaps either side of it.
 */
export function ClinicTour() {
  const { trackRef, prev, next } = useSnapCarousel<HTMLUListElement>({ initialIndex: clinicTour.initialIndex });
  const vars = {
    "--slide": fl(713, 260),
    "--gap": fl(44, 16),
    "--snap": "calc((100% - 2 * var(--slide) - var(--gap)) / 2)",
    "--arrow-x": "calc(var(--snap) - var(--gap) / 2)",
  } as CSSProperties;

  return (
    <section aria-labelledby="clinic-title" style={{ paddingTop: fl(146, 64) }}>
      <div className="container-page text-center">
        <Eyebrow className="justify-center">{clinicTour.eyebrow}</Eyebrow>
        <SectionHeading id="clinic-title" className="mt-[clamp(6px,0.579vw,10px)]">
          {clinicTour.heading}
        </SectionHeading>
      </div>

      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Clinic photos"
        className="relative max-md:[--slide:82vw]"
        style={{ ...vars, marginTop: fl(150, 40) }}
      >
        <ul
          ref={trackRef}
          id="clinic-track"
          tabIndex={0}
          aria-label="Clinic photos, scroll horizontally"
          className="scrollbar-none flex snap-x snap-mandatory gap-(--gap) overflow-x-auto overscroll-x-contain scroll-smooth px-(--snap) scroll-px-(--snap) -outline-offset-4 max-md:[--snap:9vw]"
        >
          {clinicTour.slides.map((s, i) => (
            <li
              key={s.src}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${clinicTour.slides.length}`}
              className="w-(--slide) shrink-0 snap-start"
            >
              <Image src={s.src} alt={s.alt} width={s.width} height={s.height} sizes="(max-width: 767px) 82vw, 42vw" quality={85} className="aspect-713/475 w-full object-cover" />
            </li>
          ))}
        </ul>
        <CarouselButton
          direction="prev"
          onClick={prev}
          controls="clinic-track"
          label="Previous photo"
          className="absolute top-1/2 left-(--arrow-x) -translate-x-1/2 -translate-y-1/2 max-md:left-[9vw]"
        />
        <CarouselButton
          direction="next"
          onClick={next}
          controls="clinic-track"
          label="Next photo"
          className="absolute top-1/2 right-(--arrow-x) translate-x-1/2 -translate-y-1/2 max-md:right-[9vw]"
        />
      </div>
    </section>
  );
}
