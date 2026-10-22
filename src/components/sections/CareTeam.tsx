import Image from "next/image";
import { careTeam } from "@/data/site";
import { fl } from "@/lib/fluid";
import { AppLink } from "@/components/ui/AppLink";
import { CtaLink } from "@/components/ui/Cta";
import { SectionHeading } from "@/components/ui/SectionHeading";

/* Photos are blended LUMINOSITY over the white panel (renders them greyscale); hover reveals colour. */
const photo = "mix-blend-luminosity transition-transform duration-500 group-hover:scale-[1.03] group-hover:mix-blend-normal";

/** Fades the bottom of a teaser row into the white panel (Figma: white 0% → 100%). */
function Fade({ height }: { height: string }) {
  return <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-b from-white/0 to-white" style={{ height }} />;
}

export function CareTeam() {
  return (
    <section id="care-team" aria-labelledby="care-team-title" className="container-page scroll-mt-6" style={{ paddingTop: fl(110, 56) }}>
      <div
        className="isolate rounded-panel bg-white"
        style={{ paddingLeft: fl(79.4, 20), paddingRight: fl(75, 20), paddingTop: fl(115, 48), paddingBottom: fl(177, 48) }}
      >
        <SectionHeading id="care-team-title">{careTeam.heading}</SectionHeading>
        <div className="max-w-[38.05em] text-body tracking-[-0.02em] text-ink capitalize" style={{ marginTop: fl(45, 20) }}>
          {careTeam.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <CtaLink href={careTeam.cta.href} label={careTeam.cta.label} className="mt-[clamp(32px,3.819vw,66px)]" />

        {/* Expert panel — 3 × 442px, gap 63.5px */}
        <h3 className="text-subhead text-ink capitalize" style={{ marginTop: fl(88, 40) }}>
          {careTeam.panelHeading}
        </h3>
        <ul className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1" style={{ marginTop: fl(45, 20), columnGap: fl(63.5, 16), rowGap: fl(48, 32) }}>
          {careTeam.panel.map((m) => (
            <li key={m.name}>
              <AppLink href={m.href} className="group block cursor-pointer rounded-photo transition-opacity active:opacity-80">
                <div className="overflow-hidden rounded-photo">
                  <Image src={m.image.src} alt={m.image.alt} width={m.image.width} height={m.image.height} sizes="(max-width: 767px) 90vw, 26vw" className={`aspect-442/443 w-full object-cover ${photo}`} />
                </div>
                <p className="text-name text-ink uppercase transition-colors group-hover:text-brand" style={{ marginTop: fl(34, 16) }}>
                  {m.name}
                </p>
                <p className="text-role text-accent" style={{ marginTop: fl(20, 6) }}>
                  {m.role}
                </p>
              </AppLink>
            </li>
          ))}
        </ul>
        <div aria-hidden className="relative grid grid-cols-3 max-md:hidden" style={{ marginTop: fl(74, 32), columnGap: fl(63.5, 16) }}>
          {careTeam.panelTeaser.map((img) => (
            <Image key={img.src} src={img.src} alt="" width={img.width} height={img.height} sizes="26vw" className="aspect-442/443 w-full rounded-photo object-cover mix-blend-luminosity" />
          ))}
          <Fade height="23.25%" />
        </div>

        {/* Specialised doctors — 5 columns, fixed row pitch (captions may wrap to two lines) */}
        <h3 className="text-subhead text-ink capitalize" style={{ marginTop: fl(170, 56) }}>
          {careTeam.doctorsHeading}
        </h3>
        <ul
          className="grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2"
          style={{ marginTop: fl(88, 32), columnGap: fl(25, 12), rowGap: fl(29.2, 20) }}
        >
          {careTeam.doctors.map((d) => (
            <li key={d.name}>
              <AppLink href={d.href} className="group block cursor-pointer rounded-[8px] transition-opacity active:opacity-80">
                <div className="overflow-hidden rounded-[clamp(6px,0.463vw,8px)]">
                  <Image src={d.image} alt={d.name} width={282} height={230} sizes="(max-width: 639px) 45vw, (max-width: 1023px) 25vw, 16vw" className={`aspect-270/220 w-full object-cover ${photo}`} />
                </div>
                <p className="text-doctor text-ink transition-colors group-hover:text-brand" style={{ marginTop: fl(18, 10) }}>
                  {d.name}
                </p>
                <p className="line-clamp-2 min-h-[3.1648em] text-qual text-accent uppercase max-md:line-clamp-none max-md:min-h-0" style={{ marginTop: fl(8, 4) }}>
                  {d.qualifications}
                </p>
              </AppLink>
            </li>
          ))}
        </ul>
        <div aria-hidden className="relative grid grid-cols-5 max-lg:hidden" style={{ marginTop: fl(29.2, 20), columnGap: fl(25, 12) }}>
          {careTeam.doctorsTeaser.map((d) => (
            <Image key={d.image} src={d.image} alt="" width={282} height={230} sizes="16vw" className="aspect-270/221 w-full rounded-[clamp(6px,0.463vw,8px)] object-cover mix-blend-luminosity" />
          ))}
          <Fade height="52.5%" />
        </div>
      </div>
    </section>
  );
}
