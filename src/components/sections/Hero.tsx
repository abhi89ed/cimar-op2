import Image from "next/image";
import { hero } from "@/data/site";
import { CtaLink } from "@/components/ui/Cta";
import { CloudRainIcon, PulseIcon } from "@/components/ui/icons";

const featureIcons = {
  activity: <PulseIcon className="w-[46.8%]" />,
  "cloud-rain": <CloudRainIcon className="w-[45%]" />,
};

/*
 * Composed artwork on a 1608×665 navy panel. Desktop positions are container-query
 * units of that panel (1cqw = 16.08px at the canvas), so the overlap of the wordmark,
 * the cut-out photo and the feature row holds at every desktop width. Below lg the
 * pieces stack into a simple column with the photo anchored to the bottom edge.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="container-page">
      <div className="@container relative isolate aspect-1608/665 overflow-hidden rounded-panel bg-navy max-lg:flex max-lg:aspect-auto max-lg:flex-col">
        <h1
          id="hero-title"
          className="absolute top-[-4.042cqw] left-[4.229cqw] text-[22.681cqw] leading-[1.26] font-bold tracking-[-0.02em] whitespace-nowrap text-teal capitalize max-lg:static max-lg:px-[4cqw] max-lg:pt-[3cqw] max-lg:leading-none"
        >
          {hero.title}
        </h1>

        <ul className="absolute top-[20.025cqw] left-[22.917cqw] flex gap-[29.851cqw] max-lg:static max-lg:mt-6 max-lg:flex-wrap max-lg:justify-center max-lg:gap-x-10 max-lg:gap-y-4 max-lg:px-6 max-sm:gap-x-4">
          {hero.features.map((f) => (
            <li key={f.label} className="flex items-center gap-[0.933cqw] text-white max-lg:gap-3 max-sm:gap-2">
              <span aria-hidden className="grid size-[max(32px,2.923cqw)] shrink-0 place-items-center rounded-full bg-white text-black max-lg:size-11 max-sm:size-9">
                {featureIcons[f.icon]}
              </span>
              <span className="text-[max(16px,1.555cqw)] leading-[1.26] tracking-[-0.02em] capitalize max-lg:text-[19px] max-sm:text-[16px]">{f.label}</span>
            </li>
          ))}
        </ul>

        <div className="absolute inset-x-[5.504cqw] bottom-[3.918cqw] flex items-start justify-between max-lg:static max-lg:mt-8 max-lg:flex-col max-lg:gap-6 max-lg:px-10 max-sm:px-6">
          <p className="max-w-[min(19.5em,29cqw)] text-body text-cream capitalize max-lg:max-w-[19.5em]">{hero.intro}</p>
          <CtaLink href={hero.cta.href} label={hero.cta.label} />
        </div>

        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          width={hero.image.width}
          height={hero.image.height}
          loading="eager"
          fetchPriority="high"
          quality={85}
          sizes="(max-width: 1023px) 70vw, 26vw"
          className="absolute top-[0.933cqw] left-[35.572cqw] z-10 h-[40.423cqw] w-[26.928cqw] object-cover max-lg:relative max-lg:inset-auto max-lg:mx-auto max-lg:mt-2 max-lg:h-auto max-lg:w-[min(58%,330px)]"
        />
      </div>
    </section>
  );
}
