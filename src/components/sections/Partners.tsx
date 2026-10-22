import Image from "next/image";
import { partners } from "@/data/site";
import { fl } from "@/lib/fluid";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Partners() {
  return (
    <section aria-labelledby="partners-title" className="container-page" style={{ paddingTop: fl(99, 56) }}>
      <div
        className="rounded-panel bg-white"
        style={{ paddingLeft: fl(78.4, 20), paddingRight: fl(58, 20), paddingTop: fl(78.4, 40), paddingBottom: fl(70, 40) }}
      >
        <div className="max-w-[13.84em] text-h2 max-md:max-w-none">
          <Eyebrow>{partners.eyebrow}</Eyebrow>
          <SectionHeading id="partners-title" className="mt-[clamp(6px,0.567vw,9.8px)]">
            {partners.heading}
          </SectionHeading>
        </div>
        <p className="mt-[clamp(12px,1.134vw,19.6px)] max-w-[33.18em] text-body-sm text-ink first-letter:uppercase">{partners.text}</p>

        <ul
          className="flex items-center justify-between max-lg:grid max-lg:grid-cols-4 max-lg:justify-items-center max-lg:gap-x-6 max-lg:gap-y-8 max-sm:grid-cols-2"
          style={{ marginTop: fl(65, 32) }}
        >
          {partners.logos.map((logo) => (
            <li key={logo.src} className="flex items-center justify-center" style={{ width: fl(logo.box[0], logo.box[0] * 0.55), aspectRatio: `${logo.box[0]} / ${logo.box[1]}` }}>
              <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="h-full w-full object-contain" sizes="175px" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
