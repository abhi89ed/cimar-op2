import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { services } from "@/data/site";
import { fl } from "@/lib/fluid";
import { AppLink } from "@/components/ui/AppLink";

const tones = {
  navy: "bg-navy hover:bg-navy-deep",
  teal: "bg-teal hover:bg-teal-deep",
};

/* Four 388×478 cards. Illustrations are full-colour art blended LUMINOSITY into the card colour. */
export function Services() {
  return (
    <section aria-labelledby="services-title" className="container-page" style={{ paddingTop: fl(21, 12) }}>
      <h2 id="services-title" className="sr-only">
        Our services
      </h2>
      <ul className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1" style={{ gap: fl(18.67, 12) }}>
        {services.map((s) => {
          const art = s.illustration;
          return (
            <li key={s.title}>
              <AppLink
                href={s.href}
                className={`group relative isolate block aspect-388/478 cursor-pointer overflow-hidden rounded-tile transition-[background-color,transform] duration-300 hover:-translate-y-1 active:translate-y-0 ${tones[s.tone]}`}
                style={{ paddingLeft: fl(41, 24), paddingTop: fl(48, 28), paddingRight: fl(41, 24) }}
              >
                {/* Figma fixes each title box width (262 / 262 / 179 / 112px), which sets the line breaks. */}
                <h3 className="text-tile text-cream capitalize" style={{ maxWidth: `${(s.titleBox / 33).toFixed(3)}em` }}>
                  {s.title}
                </h3>
                <p className="mt-[clamp(6px,0.579vw,10px)] text-card-sub text-cream capitalize">{s.text}</p>
                <span
                  aria-hidden
                  className="absolute grid place-items-center rounded-full bg-accent text-white transition-colors group-hover:bg-brand"
                  style={{ left: fl(41, 24), bottom: fl(42, 24), width: fl(60, 48), height: fl(60, 48) }}
                >
                  <ArrowRight className="transition-transform duration-200 group-hover:translate-x-[3px]" style={{ width: fl(24, 20), height: fl(24, 20) }} />
                </span>
                <Image
                  src={art.src}
                  alt=""
                  // 2× intrinsic size: the attributes only carry the aspect ratio (CSS sets the width).
                  width={Math.round(art.width * 2)}
                  height={Math.round(art.height * 2)}
                  unoptimized
                  className="pointer-events-none absolute h-auto mix-blend-luminosity transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{
                    right: `${(art.right / 388) * 100}%`,
                    bottom: `${(art.bottom / 478) * 100}%`,
                    width: `${(art.width / 388) * 100}%`,
                  }}
                />
              </AppLink>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
