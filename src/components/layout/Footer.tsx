import type { CSSProperties } from "react";
import { footer } from "@/data/site";
import { fl } from "@/lib/fluid";
import { AppLink } from "@/components/ui/AppLink";
import { Logo, Wordmark } from "@/components/ui/Logo";
import { NewsletterForm } from "./NewsletterForm";

const link = "rounded-sm text-body font-medium text-white capitalize transition-opacity hover:opacity-75 active:opacity-60";

/*
 * 1608×963 panel with a sunset gradient (handles start 9% above the top edge).
 * Columns sit at 41 / 580 / 881 / 1171px, i.e. 539 : 301 : 290 : 368 of the inner width.
 * The oversized cream wordmark (1699px) bleeds past both sides and is clipped by the panel.
 */
export function Footer() {
  return (
    <footer className="container-page" style={{ marginTop: fl(170, 64), marginBottom: fl(54, 16) }}>
      <div className="overflow-hidden rounded-panel bg-[linear-gradient(180deg,var(--color-sunset)_-9.09%,var(--color-brand)_100%)]">
        <div className="text-white" style={{ paddingLeft: fl(41, 20), paddingRight: fl(69, 20), paddingTop: fl(51, 40) }}>
          <div className="grid grid-cols-[539fr_301fr_290fr_368fr] max-lg:grid-cols-2 max-lg:gap-x-10 max-lg:gap-y-12 max-sm:grid-cols-1">
            <div className="max-lg:col-span-2 max-sm:col-span-1" style={{ paddingTop: fl(9, 0) }}>
              <Logo variant="mono" className="w-[clamp(150px,11.863vw,205px)]" />
              <p className="max-w-[18.9em] text-body text-cream capitalize" style={{ marginTop: fl(10.9, 16) }}>
                {footer.intro}
              </p>
            </div>

            {footer.columns.map((col) => (
              <nav key={col.heading} aria-labelledby={`footer-${col.heading}`}>
                <h2 id={`footer-${col.heading}`} className="text-h3 text-white capitalize">
                  {col.heading}
                </h2>
                <ul className="flex flex-col items-start" style={{ marginTop: fl(35, 16), gap: fl(21, 12) }}>
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <AppLink href={l.href} className={link}>
                        {l.label}
                      </AppLink>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div className="max-lg:col-span-2 max-sm:col-span-1">
              <h2 className="text-h3 whitespace-nowrap text-white capitalize max-sm:whitespace-normal">{footer.newsletter.heading}</h2>
              <NewsletterForm />
            </div>
          </div>

          <div
            className="flex items-start justify-between gap-x-8 gap-y-3 text-body-relaxed text-white max-xl:flex-col"
            style={{ marginTop: fl(71, 48) }}
          >
            <p className="flex flex-wrap items-center gap-x-[0.3em]">
              <AppLink href={footer.legal[0].href} className={`${link} font-normal`}>
                {footer.legal[0].label}
              </AppLink>
              <span aria-hidden>|</span>
              <AppLink href={footer.legal[1].href} className={`${link} font-normal`}>
                {footer.legal[1].label}
              </AppLink>
            </p>
            <p className="text-right capitalize max-xl:text-left">
              {footer.copyright} | {footer.credit.prefix}{" "}
              <AppLink href={footer.credit.href} className={`${link} font-normal`}>
                {footer.credit.label}
              </AppLink>{" "}
              | {footer.credit.suffix}
            </p>
          </div>
        </div>

        {/*
          Figma: the wordmark box starts 55px above the bottom row's end and runs 29px past the panel.
          The clip-path is the mask group's fill rectangle (it trims the tagline below the letters).
        */}
        <div
          className="mt-(--wm-mt) max-xl:mt-4"
          style={{ "--wm-mt": `calc(-1 * ${fl(55, 20)})`, marginBottom: `calc(-1 * ${fl(29, 8)})` } as CSSProperties}
        >
          <Wordmark className="ml-[-2.8%] w-[105.66%] text-cream [clip-path:inset(10.43%_2.68%_7.93%_3.31%)]" />
        </div>
      </div>
    </footer>
  );
}
