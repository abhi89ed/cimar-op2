import { specialties } from "@/data/site";
import { fl } from "@/lib/fluid";
import { AppLink } from "@/components/ui/AppLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HeartPulseIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";

/*
 * 4×3 grid of 401.75×278.63 cells with hairline rules. The design highlights one
 * cell (Gynaecology); that highlight moves to whichever cell is hovered or focused
 * (see .specialties in globals.css).
 */
export function Specialties() {
  return (
    <section id="specialties" aria-labelledby="specialties-title" className="container-page scroll-mt-6" style={{ paddingTop: fl(117, 60) }}>
      <Eyebrow className="justify-center">{specialties.eyebrow}</Eyebrow>
      <SectionHeading id="specialties-title" className="mt-[clamp(6px,0.521vw,9px)] text-center">
        {specialties.heading}
      </SectionHeading>

      <ul className="specialties grid grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2" style={{ marginTop: fl(81, 40) }}>
        {specialties.items.map((item, i) => (
          <li key={item.label} className="specialty-cell">
            <AppLink
              href={item.href}
              data-featured={i === specialties.featured ? "" : undefined}
              className="specialty flex aspect-[401.75/278.63] cursor-pointer flex-col items-center px-3 text-center max-sm:aspect-auto max-sm:pb-8"
              style={{ paddingTop: fl(81, 28), borderRadius: fl(8.1, 6) }}
            >
              <HeartPulseIcon className="specialty-icon h-auto shrink-0" style={{ width: fl(81, 48) }} />
              <span
                className="mt-[clamp(8px,0.752vw,13px)] text-specialty"
                style={item.box ? { maxWidth: `${(item.box / 25.92).toFixed(2)}em` } : undefined}
              >
                {item.label}
              </span>
            </AppLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
