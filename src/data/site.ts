/**
 * All page copy, image paths and link destinations.
 *
 * The values live in /content so the admin portal can edit them without a code
 * change; this file only re-exports them with the types the components rely on.
 *   content/site.json – site name & SEO description, logo, navigation, search, footer
 *   content/home.json – the home page sections, top to bottom
 * cms.config.json (repo root) controls how the portal labels and shows each field.
 *
 * Copy is kept in sentence case; headings the design styles as Title Case get
 * `capitalize` in CSS. Hrefs are the intended destinations — while
 * `PAGES_LIVE` is false (see components/ui/AppLink.tsx) every non-anchor link
 * renders inert, so these routes don't need to exist yet.
 *
 * Layout numbers taken from the Figma frames (`titleBox`, `box`, illustration
 * sizes and offsets) stay in the JSON but are hidden from the portal.
 */
import siteContent from "../../content/site.json";
import homeContent from "../../content/home.json";

export type NavLink = { label: string; href: string };
export type NavItem = NavLink & { children?: NavLink[] };
export type Img = { src: string; alt: string; width: number; height: number };

/** Icons the hero feature row can draw (see components/sections/Hero.tsx). */
export type HeroIcon = "activity" | "cloud-rain";
/** Tile colours shared by the service and stat tiles. */
export type Tone = "navy" | "teal";

export type Service = {
  title: string;
  /** Figma title-box width (px); it sets where the title wraps. */
  titleBox: number;
  text: string;
  href: string;
  tone: Tone;
  illustration: { src: string; width: number; height: number; right: number; bottom: number };
};

export const site = siteContent.site;

export const logo = siteContent.logo;

/* ------------------------------------------------------------------ header */

export const nav: NavItem[] = siteContent.nav;

export const search = siteContent.search;

/* -------------------------------------------------------------------- hero */

export const hero = {
  ...homeContent.hero,
  features: homeContent.hero.features as { label: string; icon: HeroIcon }[],
  image: homeContent.hero.image satisfies Img,
};

/* ---------------------------------------------------------------- services */

export const services = homeContent.services as Service[];

/* -------------------------------------------------------------- highlights */

export const highlights = {
  ...homeContent.highlights,
  stats: homeContent.highlights.stats as ((typeof homeContent.highlights.stats)[number] & { tone: Tone })[],
};

/* ---------------------------------------------------------------- partners */

export const partners = homeContent.partners;

/* ------------------------------------------------------------- specialties */

export const specialties = {
  ...homeContent.specialties,
  /** `box` is the Figma text-box width (px) where the label wraps onto two lines. */
  items: homeContent.specialties.items as { label: string; href: string; box?: number }[],
};

/* --------------------------------------------------------------- directors */

export const directors = {
  ...homeContent.directors,
  portrait: homeContent.directors.portrait satisfies Img,
  backdrop: homeContent.directors.backdrop satisfies Img,
};

/* --------------------------------------------------------------- care team */

export const careTeam = homeContent.careTeam;

/* ------------------------------------------------------------- clinic tour */

export const clinicTour = {
  ...homeContent.clinicTour,
  slides: homeContent.clinicTour.slides satisfies Img[],
};

/* ----------------------------------------------------------------- stories */

export const stories = homeContent.stories;

/* -------------------------------------------------------------------- news */

export const news = homeContent.news;

/* --------------------------------------------------------------- locations */

export const locations = homeContent.locations;

/* ------------------------------------------------------------------ footer */

/** The footer intro repeats the hero intro, so it's edited in one place. */
export const footer = { ...siteContent.footer, intro: hero.intro };
