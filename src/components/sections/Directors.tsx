import Image from "next/image";
import type { CSSProperties } from "react";
import { directors } from "@/data/site";
import { fl } from "@/lib/fluid";
import { Logo } from "@/components/ui/Logo";

/*
 * A 1288px white card whose lower part overlaps a full-bleed photo band.
 * The band starts 105px below the card's top and runs to the section's end.
 */
export function Directors() {
  const vars = { "--pt": fl(159, 64), "--overlap": fl(105, 48) } as CSSProperties;
  return (
    <section aria-labelledby="directors-title" className="relative isolate pt-(--pt)" style={vars}>
      <div aria-hidden className="absolute inset-x-0 top-[calc(var(--pt)+var(--overlap))] bottom-0 -z-10">
        <Image src={directors.backdrop.src} alt="" fill sizes="100vw" quality={75} className="object-cover" />
      </div>

      <div
        className="mx-auto w-[min(74.537vw,1288px)] rounded-panel bg-white text-center max-lg:w-[calc(100%-2*var(--spacing-gutter))]"
        style={{ paddingTop: fl(40, 28), paddingBottom: fl(132, 48), paddingInline: fl(48, 20) }}
      >
        <Image
          src={directors.portrait.src}
          alt={directors.portrait.alt}
          width={directors.portrait.width}
          height={directors.portrait.height}
          sizes="154px"
          className="mx-auto aspect-square rounded-full object-cover ring-3 ring-cream"
          style={{ width: fl(154, 104) }}
        />
        <p className="text-qual text-accent uppercase" style={{ marginTop: fl(32, 18) }}>
          {directors.eyebrow}
        </p>
        <h2 id="directors-title" className="mt-[clamp(2px,0.231vw,4px)] text-subhead font-bold text-ink">
          {directors.name}
        </h2>
        <p className="mx-auto max-w-[46.13em] text-lead text-ink capitalize" style={{ marginTop: fl(69, 24) }}>
          {directors.text}
        </p>
      </div>

      <div className="flex justify-center text-white" style={{ paddingTop: fl(139, 56), paddingBottom: fl(89, 40) }}>
        <Logo variant="mono" className="w-[clamp(180px,17.579vw,303.77px)]" />
      </div>
    </section>
  );
}
