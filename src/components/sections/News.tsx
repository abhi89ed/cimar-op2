"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { news } from "@/data/site";
import { fl } from "@/lib/fluid";
import { useSnapCarousel } from "@/hooks/useSnapCarousel";
import { CarouselButton } from "@/components/ui/CarouselButton";
import { CtaLink } from "@/components/ui/Cta";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";

/*
 * White panel with a carousel of 1129×573 navy cards. The track spans the panel and
 * is clipped by it; its padding-left (63px) is the snap line, so the next card peeks
 * in at the right edge.
 */
export function News() {
  const { trackRef, prev, next } = useSnapCarousel<HTMLUListElement>();
  const vars = { "--snap": fl(63, 16), "--gap": fl(78, 16) } as CSSProperties;

  return (
    <section id="news" aria-labelledby="news-title" className="container-page scroll-mt-6" style={{ paddingTop: fl(147, 56) }}>
      <div className="overflow-hidden rounded-panel bg-white" style={{ ...vars, paddingTop: fl(72, 40), paddingBottom: fl(106, 40) }}>
        <div className="grid grid-cols-[1fr_auto] gap-x-6" style={{ paddingLeft: fl(85, 20), paddingRight: fl(69, 20) }}>
          <Eyebrow>{news.eyebrow}</Eyebrow>
          <SectionHeading id="news-title" className="col-start-1 mt-[clamp(6px,0.637vw,11px)] max-w-[8.17em]">
            {news.heading}
          </SectionHeading>
          <div className="col-start-2 row-span-2 row-start-1 flex self-start max-sm:self-end" style={{ marginTop: fl(58, 0), gap: fl(13.46, 10) }}>
            <CarouselButton direction="prev" onClick={prev} controls="news-track" label="Previous article" size={80.77} />
            <CarouselButton direction="next" onClick={next} controls="news-track" label="Next article" size={80.77} />
          </div>
        </div>

        <ul
          ref={trackRef}
          id="news-track"
          tabIndex={0}
          aria-label="News articles, scroll horizontally"
          aria-roledescription="carousel"
          className="scrollbar-none flex snap-x snap-mandatory gap-(--gap) overflow-x-auto overscroll-x-contain px-(--snap) scroll-px-(--snap) -outline-offset-4"
          style={{ marginTop: fl(120, 40) }}
        >
          {news.posts.map((post, i) => (
            <li key={post.href} aria-roledescription="slide" aria-label={`${i + 1} of ${news.posts.length}`} className="w-[clamp(300px,65.336vw,1129px)] shrink-0 snap-start max-md:w-[85%]">
              <article
                className="grid h-full grid-cols-[1fr_auto] rounded-card bg-navy text-cream max-lg:grid-cols-1"
                style={{ paddingLeft: fl(34, 20), paddingRight: fl(41, 20), paddingTop: fl(41, 20), paddingBottom: fl(66, 24), columnGap: fl(32, 20) }}
              >
                <div className="flex flex-col items-start max-lg:order-2 max-lg:mt-6">
                  <h3 className="max-w-[9.11em] text-h3 capitalize">{post.title}</h3>
                  <p className="max-w-[18.05em] text-body-relaxed capitalize" style={{ marginTop: fl(29, 12) }}>
                    {post.text}
                  </p>
                  <div className="mt-auto pt-6">
                    <CtaLink href={post.href} label={news.readMore} size="sm" pillWidth={198.54} />
                  </div>
                </div>
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  width={post.image.width}
                  height={post.image.height}
                  sizes="(max-width: 1023px) 80vw, 36vw"
                  className="aspect-621/466 h-auto w-(--img-w) rounded-[clamp(16px,1.505vw,26px)] object-cover max-lg:order-1 max-lg:w-full"
                  style={{ "--img-w": fl(621, 260) } as CSSProperties}
                />
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
