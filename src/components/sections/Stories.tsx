import Image from "next/image";
import type { CSSProperties } from "react";
import { stories } from "@/data/site";
import { fl } from "@/lib/fluid";
import { AppLink } from "@/components/ui/AppLink";
import { CtaLink } from "@/components/ui/Cta";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PlayIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";

const { testimonial, videos } = stories;
const widths = [897, 1023];

/*
 * Story cards run off the right edge (517 / 897 / 1023px wide, 687px tall). The track
 * starts on the page column and scrolls natively; the design shows no arrows here.
 */
export function Stories() {
  const vars = {
    "--edge": "max(var(--spacing-gutter), (100% - var(--container-page)) / 2)",
    "--h": fl(687, 440),
  } as CSSProperties;

  return (
    <section aria-labelledby="stories-title" style={{ paddingTop: fl(229, 64) }}>
      <div className="container-page grid grid-cols-[1fr_auto] items-start gap-x-6 max-sm:grid-cols-1">
        <Eyebrow>{stories.eyebrow}</Eyebrow>
        <SectionHeading id="stories-title" className="col-start-1 mt-[clamp(8px,1.215vw,21px)]">
          {stories.heading}
        </SectionHeading>
        {/* The CTA is taller than the heading line; let it overhang so the cards keep their spacing from the heading. */}
        <div
          className="col-start-2 row-start-2 mt-[clamp(8px,1.215vw,21px)] mb-(--overhang) max-sm:col-start-1 max-sm:row-start-3 max-sm:mt-6 max-sm:mb-0"
          style={{ "--overhang": `calc(${fl(58.79, 37.53)} - ${fl(72, 54)})` } as CSSProperties}
        >
          <CtaLink href={stories.cta.href} label={stories.cta.label} />
        </div>
      </div>

      <ul
        aria-label="Patient stories"
        tabIndex={0}
        className="scrollbar-none flex snap-x snap-mandatory gap-[clamp(16px,2.402vw,41.5px)] overflow-x-auto overscroll-x-contain px-(--edge) scroll-px-(--edge) -outline-offset-4 max-md:flex-col max-md:overflow-visible"
        style={{ ...vars, marginTop: fl(67, 28) }}
      >
        <li className="flex snap-start">
          <figure
            className="relative min-h-(--h) w-[clamp(340px,29.919vw,517px)] overflow-hidden rounded-card bg-teal text-cream max-md:min-h-0 max-md:w-full"
            style={{ paddingLeft: fl(43, 24), paddingRight: fl(91, 24), paddingTop: fl(162, 110), paddingBottom: fl(48, 32) }}
          >
            <span aria-hidden className="absolute font-normal select-none" style={{ left: fl(21, 12), top: fl(-27, -16), fontSize: fl(242.67, 150), lineHeight: 1.5 }}>
              “
            </span>
            <blockquote className="max-w-[19.15em] text-body-relaxed capitalize">
              <p>{testimonial.quote}</p>
            </blockquote>
            <figcaption style={{ marginTop: fl(63, 28) }}>
              <Image
                src={testimonial.avatar.src}
                alt=""
                width={testimonial.avatar.width}
                height={testimonial.avatar.height}
                sizes="117px"
                className="aspect-square rounded-full bg-placeholder object-cover"
                style={{ width: fl(117, 80) }}
              />
              <span className="block text-quote-name capitalize" style={{ marginTop: fl(17, 10) }}>
                {testimonial.name}
              </span>
            </figcaption>
          </figure>
        </li>
        {videos.map((v, i) => (
          <li key={v.href} className="flex snap-start">
            <AppLink
              href={v.href}
              aria-label={v.label}
              className="group relative block min-h-(--h) w-(--w) cursor-pointer overflow-hidden rounded-card bg-placeholder max-md:aspect-897/687 max-md:min-h-0 max-md:w-full"
              style={{ "--w": fl(widths[i], widths[i] * 0.45) } as CSSProperties}
            >
              <Image src={v.image.src} alt={v.image.alt} fill sizes="(max-width: 767px) 92vw, 55vw" quality={85} className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              {v.playButton && (
                <span
                  aria-hidden
                  className="absolute top-1/2 left-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-brand shadow-lg transition-transform duration-300 group-hover:scale-110 group-active:scale-95"
                  style={{ width: fl(114, 72), height: fl(114, 72) }}
                >
                  <PlayIcon className="w-[43.9%]" />
                </span>
              )}
            </AppLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
