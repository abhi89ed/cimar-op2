import Image from "next/image";
import { highlights } from "@/data/site";
import { fl } from "@/lib/fluid";
import { AppLink } from "@/components/ui/AppLink";

const { podcast, event, stats } = highlights;

function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex h-[clamp(22px,1.447vw,25px)] items-center rounded-[5px] bg-white/91 px-2.75 text-card-sub text-black capitalize">
      {children}
    </span>
  );
}

/* Art blended LUMINOSITY into the tile colour; positions are % of the tile so they scale with it. */
function Art({ src, width, height, style, className = "" }: { src: string; width: number; height: number; style: React.CSSProperties; className?: string }) {
  return (
    <Image
      src={src}
      alt=""
      // 2× intrinsic size: the attributes only carry the aspect ratio (CSS sets the width).
      width={Math.round(width * 2)}
      height={Math.round(height * 2)}
      unoptimized
      className={`pointer-events-none absolute h-auto mix-blend-luminosity transition-transform duration-500 group-hover:scale-[1.04] ${className}`}
      style={style}
    />
  );
}

const tile = "group relative isolate overflow-hidden rounded-panel";
const inset = { paddingLeft: fl(52, 24), paddingRight: fl(52, 24) };

export function Highlights() {
  return (
    <section aria-labelledby="highlights-title" className="container-page">
      <h2
        id="highlights-title"
        className="mx-auto max-w-[17.73em] text-center text-statement text-ink capitalize"
        style={{ paddingTop: fl(99, 56), paddingBottom: fl(81, 40) }}
      >
        {highlights.heading}
      </h2>

      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1" style={{ columnGap: fl(18, 12), rowGap: fl(20, 12) }}>
        {/* Podcast — 794×478 */}
        <AppLink
          href={podcast.href}
          className={`${tile} col-span-2 row-span-2 block aspect-794/478 cursor-pointer bg-teal transition-colors hover:bg-teal-deep max-sm:col-span-1 max-sm:flex max-sm:aspect-auto max-sm:flex-col max-sm:items-start max-sm:pb-6`}
          style={{ ...inset, paddingTop: fl(46, 24) }}
        >
          <Tag>{podcast.tag}</Tag>
          <h3 className="mt-[clamp(10px,0.868vw,15px)] max-w-[7.94em] text-tile-xl text-cream capitalize">{podcast.title}</h3>
          <p className="mt-[clamp(12px,1.215vw,21px)] max-w-[17.8em] text-body tracking-[-0.02em] text-cream capitalize">{podcast.text}</p>
          <Art
            {...podcast.illustration}
            style={{ right: "4.32%", bottom: "8.59%", width: "28.05%" }}
            className="max-sm:bottom-6! max-sm:w-[50%]!"
          />
          {/* Keeps room for the art when the tile is narrow. */}
          <span aria-hidden className="hidden max-sm:block max-sm:aspect-223/231 max-sm:w-[52%] max-sm:self-end" />
        </AppLink>

        {/* Live event — 794×229, content centred vertically */}
        <AppLink
          href={event.href}
          className={`${tile} col-span-2 flex aspect-794/229 cursor-pointer flex-col items-start justify-center bg-navy transition-colors hover:bg-navy-deep max-sm:col-span-1 max-sm:aspect-auto max-sm:py-8`}
          style={inset}
        >
          <Tag>{event.tag}</Tag>
          <h3 className="mt-[clamp(20px,3.356vw,58px)] max-w-[9.475em] text-tile-lg text-white capitalize">{event.title}</h3>
          <Art {...event.decor} style={{ right: "3.53%", top: "39.3%", width: "8.19%" }} />
        </AppLink>

        {/* Stats — 388×229 each */}
        {stats.map((s) => (
          <div
            key={s.label}
            className={`${tile} aspect-388/229 ${s.tone === "navy" ? "bg-navy" : "bg-teal"} max-lg:aspect-388/260 max-sm:aspect-388/210`}
            style={{ ...inset, paddingTop: fl(93, 40) }}
          >
            <p className="text-stat text-cream">{s.value}</p>
            <p className="text-stat-label text-cream capitalize">{s.label}</p>
            <Art
              {...s.decor}
              style={
                s.tone === "navy"
                  ? { right: "9.02%", top: "50.2%", width: "25.09%" }
                  : { right: "6.75%", top: "63.3%", width: "18.25%" }
              }
            />
          </div>
        ))}
      </div>
    </section>
  );
}
