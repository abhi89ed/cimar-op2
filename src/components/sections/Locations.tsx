import Image from "next/image";
import { locations } from "@/data/site";
import { fl } from "@/lib/fluid";
import { CtaLink } from "@/components/ui/Cta";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StarIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";

function Rating({ value, reviews, id }: { value: number; reviews: string; id: string }) {
  const stars = Array.from({ length: 5 }, (_, i) => Math.max(0, Math.min(1, value - i)));
  return (
    <p className="flex items-center text-rating text-ink" style={{ marginTop: fl(29, 12) }}>
      <span className="sr-only">
        Rated {value} out of 5 from {reviews} reviews
      </span>
      <span aria-hidden className="flex items-center gap-[clamp(2px,0.147vw,2.54px)] text-star">
        {stars.map((fill, i) => (
          <StarIcon key={i} amount={fill} id={`${id}-star-${i}`} className="h-auto" style={{ width: fl(15.27, 13) }} />
        ))}
      </span>
      <span aria-hidden className="ml-[clamp(6px,0.59vw,10.2px)]">{value}</span>
      <span aria-hidden className="ml-[5px] font-medium capitalize">({reviews} reviews)</span>
    </p>
  );
}

export function Locations() {
  return (
    <section id="locations" aria-labelledby="locations-title" className="container-page scroll-mt-6" style={{ paddingTop: fl(134, 56) }}>
      <Eyebrow>{locations.eyebrow}</Eyebrow>
      <SectionHeading id="locations-title" className="mt-[clamp(8px,1.678vw,29px)] max-w-[8.6em] max-sm:max-w-none">
        {locations.heading}
      </SectionHeading>

      <ul className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1" style={{ marginTop: fl(86, 32), columnGap: fl(36, 20), rowGap: fl(56, 48) }}>
        {locations.items.map((loc) => {
          const slug = loc.href.split("/").pop()!;
          return (
            <li key={loc.name} className="flex flex-col items-start">
              <Image
                src={loc.image.src}
                alt={loc.image.alt}
                width={loc.image.width}
                height={loc.image.height}
                sizes="(max-width: 767px) 92vw, (max-width: 1023px) 46vw, 30vw"
                className="aspect-514/313 w-full rounded-[clamp(10px,0.81vw,14px)] object-cover"
              />
              <h3 className="text-h3 text-accent" style={{ marginTop: fl(29, 16) }}>
                {loc.name}
              </h3>
              <p className="text-body-relaxed text-ink capitalize" style={{ marginTop: fl(17, 8) }}>
                {loc.text}
              </p>
              <Rating value={loc.rating} reviews={loc.reviews} id={slug} />
              <CtaLink href={loc.href} label={locations.cta} size="sm" pillWidth={113} className="mt-[clamp(16px,2.141vw,37px)]" />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
