/**
 * All page copy, image paths and link destinations.
 *
 * Copy is kept in sentence case; headings the design styles as Title Case get
 * `capitalize` in CSS. Hrefs are the intended destinations — while
 * `PAGES_LIVE` is false (see components/ui/AppLink.tsx) every non-anchor link
 * renders inert, so these routes don't need to exist yet.
 */

export type NavLink = { label: string; href: string };
export type NavItem = NavLink & { children?: NavLink[] };
export type Img = { src: string; alt: string; width: number; height: number };

export const site = {
  name: "CIMAR",
  fullName: "CIMAR — The Women's Hospital",
  description:
    "Complete healthcare designed for mothers and little ones. CIMAR makes expert fertility, maternity and paediatric care simple, safe and personal in Kochi, Thrissur and Edappal.",
};

export const logo = {
  color: "/images/logo.svg",
  mono: "/images/logo-mono.svg",
  wordmark: "/images/wordmark-mono.svg",
  alt: "CIMAR — The Women's Hospital",
};

/* ------------------------------------------------------------------ header */

// Dropdown contents aren't in the design; these are placeholder destinations.
export const nav: NavItem[] = [
  {
    label: "Healthcare services",
    href: "/services",
    children: [
      { label: "Obstetrics", href: "/services/obstetrics" },
      { label: "Gynaecology", href: "/services/gynaecology" },
      { label: "Neonatology", href: "/services/neonatology" },
      { label: "Infertility & IVF", href: "/services/infertility" },
      { label: "Fetal medicine", href: "/services/fetal-medicine" },
      { label: "All specialties", href: "#specialties" },
    ],
  },
  {
    label: "Training programmes",
    href: "/training",
    children: [
      { label: "Fellowship programmes", href: "/training/fellowships" },
      { label: "Clinical embryology", href: "/training/embryology" },
      { label: "Ultrasound training", href: "/training/ultrasound" },
    ],
  },
  {
    label: "About us",
    href: "/about",
    children: [
      { label: "Our story", href: "/about" },
      { label: "Our care team", href: "#care-team" },
      { label: "Our locations", href: "#locations" },
      { label: "News & blog", href: "#news" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const search = {
  label: "Search the site",
  placeholder: "Search here…",
  action: "/search",
};

/* -------------------------------------------------------------------- hero */

export const hero = {
  title: "Kindcare",
  features: [
    { label: "Unmedicated", icon: "activity" },
    { label: "Conception", icon: "cloud-rain" },
  ] as const,
  intro:
    "Looking for complete healthcare designed for mothers and little ones? Cimar makes expert care simple, safe, and personal.",
  cta: { label: "Book consultation", href: "/book-consultation" },
  image: {
    src: "/images/hero-mother-baby.webp",
    alt: "Smiling mother holding her baby wrapped in a yellow knitted blanket",
    width: 866,
    height: 1300,
  } satisfies Img,
};

/* ---------------------------------------------------------------- services */

export const services = [
  {
    title: "Instant video consultation.",
    titleBox: 262,
    text: "Connect within 60 seconds.",
    href: "/services/video-consultation",
    tone: "navy",
    illustration: { src: "/images/illustrations/video-consult.svg", width: 216.29, height: 199.5, right: 20, bottom: 20.5 },
  },
  {
    title: "Find the doctors near you.",
    titleBox: 262,
    text: "Confirmed appointments.",
    href: "/doctors",
    tone: "teal",
    illustration: { src: "/images/illustrations/find-doctors.svg", width: 203.44, height: 226.77, right: 22, bottom: 30 },
  },
  {
    title: "24/7 medicine.",
    titleBox: 179,
    text: "Essentials at your doorstep.",
    href: "/services/pharmacy",
    tone: "navy",
    illustration: { src: "/images/illustrations/medicine.svg", width: 240.96, height: 200.15, right: 15, bottom: 18 },
  },
  {
    title: "Lab tests.",
    titleBox: 112,
    text: "Simple pickup at your home.",
    href: "/services/lab-tests",
    tone: "teal",
    illustration: { src: "/images/illustrations/lab-tests.svg", width: 204.69, height: 219.52, right: 11, bottom: 19 },
  },
] as const;

/* -------------------------------------------------------------- highlights */

export const highlights = {
  heading: "Our doctors and clinics have earned over 5,000+ reviews on Google!",
  podcast: {
    tag: "Podcast",
    title: "Nutrition and mental health.",
    text: "The food we eat provide the nutrients that our bodies needs to function properly.",
    href: "/podcast/nutrition-and-mental-health",
    illustration: { src: "/images/illustrations/nutrition.svg", width: 222.7, height: 230.92 },
  },
  event: {
    tag: "Live event",
    title: "Healthy habits for a happy heart",
    href: "/events/healthy-habits-for-a-happy-heart",
    decor: { src: "/images/illustrations/decor-live-event.svg", width: 65, height: 106.16 },
  },
  stats: [
    { value: "09", label: "Years experience.", tone: "navy", decor: { src: "/images/illustrations/decor-experience.svg", width: 97.35, height: 70.67 } },
    { value: "150k", label: "Happy customers.", tone: "teal", decor: { src: "/images/illustrations/decor-customers.svg", width: 70.8, height: 44.78 } },
  ] as const,
};

/* ---------------------------------------------------------------- partners */

export const partners = {
  eyebrow: "Our commitment",
  heading: "Dedicated to excellence in healthcare through trusted partnerships",
  text: "We are committed to providing exceptional care by working with leading healthcare professionals, technology providers, and trusted partners.",
  logos: [
    { src: "/images/partner-aditya-birla.png", alt: "Aditya Birla Health Insurance", width: 88, height: 90, box: [131, 134] },
    { src: "/images/partner-religare.png", alt: "Religare Health Insurance", width: 140, height: 90, box: [175, 112] },
    { src: "/images/partner-apollo-munich.png", alt: "Apollo Munich Health Insurance", width: 139, height: 90, box: [167, 108] },
    { src: "/images/partner-future-generali.png", alt: "Future Generali Total Insurance Solutions", width: 139, height: 90, box: [167, 108] },
    { src: "/images/partner-liberty.png", alt: "Liberty General Insurance", width: 139, height: 90, box: [167, 108] },
    { src: "/images/partner-hdfc-ergo.png", alt: "HDFC ERGO General Insurance", width: 139, height: 90, box: [167, 108] },
    { src: "/images/partner-paramount-health.png", alt: "Paramount Health Services", width: 139, height: 90, box: [167, 108] },
  ],
};

/* ------------------------------------------------------------- specialties */

export const specialties = {
  eyebrow: "Always caring",
  heading: "Our specialties",
  /** Index highlighted by default, as drawn in the design. */
  featured: 1,
  // Labels have no text-case style in Figma, so they're kept as displayed.
  // `box` is the Figma text-box width (px) where the label wraps onto two lines.
  items: [
    { label: "Obstetrics", href: "/services/obstetrics" },
    { label: "Gynaecology", href: "/services/gynaecology" },
    { label: "Neonatology", href: "/services/neonatology" },
    { label: "Infertility", href: "/services/infertility" },
    { label: "Fetal Medicine/High-Risk Pregnancy", href: "/services/fetal-medicine", box: 289 },
    { label: "Cardiology", href: "/services/cardiology" },
    { label: "Endoscopy & Laparoscopy", href: "/services/endoscopy-laparoscopy" },
    { label: "Genetics", href: "/services/genetics" },
    { label: "Mind Body Medicine", href: "/services/mind-body-medicine" },
    { label: "Advanced Skin and Laser Centre", href: "/services/skin-and-laser", box: 283 },
    { label: "Dental", href: "/services/dental" },
    { label: "Andrology and Urogynecology", href: "/services/andrology-urogynecology" },
  ] as { label: string; href: string; box?: number }[],
};

/* --------------------------------------------------------------- directors */

export const directors = {
  eyebrow: "Directors",
  name: "Mr & Mrs Gopinath",
  // Placeholder copy from the design (lorem ipsum).
  text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
  portrait: { src: "/images/directors-portrait.jpg", alt: "Dr. K.K. Gopinathan and Mrs. Chitra Gopinathan", width: 308, height: 308 } satisfies Img,
  backdrop: { src: "/images/directors-backdrop.jpg", alt: "", width: 3468, height: 1736 } satisfies Img,
};

/* --------------------------------------------------------------- care team */

export const careTeam = {
  heading: "Meet your care team",
  paragraphs: [
    "We’re a group of kind, experienced, and industry-recognized healthcare professionals dedicated to helping you along your fertility journey. We bring together compassionate care and strong clinical expertise to support you every step of the way.",
    "We offer a safe, welcoming, respectful environment for our patients.",
  ],
  cta: { label: "More about our team", href: "/about/team" },
  panelHeading: "Our expert panel",
  panel: [
    { name: "Dr. K.K. Gopinathan, MBBS, MD, DGO", role: "Founder Chairman and Executive Director", href: "/about/team/dr-kk-gopinathan", image: { src: "/images/team-kk-gopinathan.jpg", alt: "Dr. K.K. Gopinathan", width: 278, height: 279 } },
    { name: "Mrs. Chitra Gopinathan", role: "Managing Director", href: "/about/team/chitra-gopinathan", image: { src: "/images/team-chitra-gopinathan.jpg", alt: "Mrs. Chitra Gopinathan", width: 384, height: 384 } },
    // Role duplicated from the first card in the design — confirm.
    { name: "Mr. Gokul Gopinath", role: "Founder Chairman and Executive Director", href: "/about/team/gokul-gopinath", image: { src: "/images/team-gokul-gopinath.jpg", alt: "Mr. Gokul Gopinath", width: 278, height: 279 } },
  ],
  /** Faded teaser row; the design gives no names for these portraits. */
  panelTeaser: [
    { src: "/images/team-panel-4.jpg", width: 278, height: 279 },
    { src: "/images/team-panel-5.jpg", width: 279, height: 279 },
    { src: "/images/team-panel-6.jpg", width: 278, height: 279 },
  ],
  doctorsHeading: "Our specialised doctors",
  doctors: [
    { name: "Dr. K.K. Gopinathan", qualifications: "MBBS, MD, DGO", image: "/images/doctor-kk-gopinathan.jpg", href: "/doctors/dr-kk-gopinathan" },
    { name: "Dr. Parasuram Gopinath", qualifications: "MBBS, MS(OBG), FICOG", image: "/images/doctor-parasuram-gopinath.jpg", href: "/doctors/dr-parasuram-gopinath" },
    { name: "Dr. Meenu Batra", qualifications: "MBBS, DMRD", image: "/images/doctor-meenu-batra.jpg", href: "/doctors/dr-meenu-batra" },
    { name: "Dr. Betty John Ferns", qualifications: "MD (OBG)", image: "/images/doctor-betty-john-ferns.jpg", href: "/doctors/dr-betty-john-ferns" },
    { name: "Dr. Shine Mary D’Cunha", qualifications: "MBBS, DGO", image: "/images/doctor-shine-mary-dcunha.jpg", href: "/doctors/dr-shine-mary-dcunha" },
    { name: "Dr. Aarti", qualifications: "MD", image: "/images/doctor-aarti.jpg", href: "/doctors/dr-aarti" },
    { name: "Dr. Sunil G", qualifications: "MBBS, DA", image: "/images/doctor-sunil-g.jpg", href: "/doctors/dr-sunil-g" },
    { name: "Dr. Thomas Ranjit", qualifications: "MBBS, MD, Fellowship in Neonatology", image: "/images/doctor-thomas-ranjit.jpg", href: "/doctors/dr-thomas-ranjit" },
    { name: "Dr. Shalini", qualifications: "DGO", image: "/images/doctor-shalini.jpg", href: "/doctors/dr-shalini" },
    { name: "Dr. Asha Anil Menon", qualifications: "MD", image: "/images/doctor-asha-anil-menon.jpg", href: "/doctors/dr-asha-anil-menon" },
  ],
  /** Faded teaser row — names from the Figma layer names, no captions in the design. */
  doctorsTeaser: [
    { name: "Dr. Anandanarayanan Aiyer", image: "/images/doctor-anandanarayanan-aiyer.jpg" },
    { name: "Dr. Ashokan Kumar T.N.", image: "/images/doctor-ashokan-kumar.jpg" },
    { name: "Dr. Lipi Madhusudanan", image: "/images/doctor-lipi-madhusudanan.jpg" },
    { name: "Dr. Laleet K. Sadanand", image: "/images/doctor-laleet-sadanand.jpg" },
    { name: "Sathish A.", image: "/images/doctor-sathish-a.jpg" },
  ],
};

/* ------------------------------------------------------------- clinic tour */

export const clinicTour = {
  eyebrow: "Hospital interior",
  heading: "Welcome to our clinic",
  /** Slide shown at the snap line on load; the one before it peeks in from the left. */
  initialIndex: 1,
  slides: [
    { src: "/images/clinic-waiting-lounge.jpg", alt: "Waiting lounge with colourful modular seating and a curved ceiling", width: 1450, height: 966 },
    { src: "/images/clinic-labour-room.jpg", alt: "Labour room with pink delivery beds and monitoring equipment", width: 1426, height: 950 },
    { src: "/images/clinic-nicu.jpg", alt: "Neonatal intensive care unit with incubators and a nurses’ station", width: 1424, height: 950 },
    { src: "/images/clinic-patient-room.jpg", alt: "Bright private patient room with a hospital bed and window", width: 1396, height: 932 },
  ] satisfies Img[],
};

/* ----------------------------------------------------------------- stories */

export const stories = {
  eyebrow: "Our patients are our practice",
  heading: "True stories",
  cta: { label: "More stories", href: "/stories" },
  testimonial: {
    quote:
      "The pediatric service at CIMAR is the best in kochi, maybe even in Kerala. We had a small complaint to them and it was taken care very fast and with great feedback regarding what changes that have been made. Totally satisfied with them and will continue on with their services for the foreseeable future.",
    name: "Aadil Sudhir",
    avatar: { src: "/images/testimonial-aadil-sudhir.jpg", alt: "", width: 234, height: 234 } satisfies Img,
  },
  videos: [
    { label: "Watch: a mother’s story at CIMAR", video: "https://videos.pexels.com/video-files/8047419/8047419-hd_1920_1080_25fps.mp4", image: { src: "/images/story-baby-tricycle.jpg", alt: "Baby on a wooden tricycle steadied by his mother", width: 1402, height: 1074 } },
    { label: "Watch: welcoming a new arrival", video: "https://videos.pexels.com/video-files/6181457/6181457-hd_1920_1080_25fps.mp4", image: { src: "/images/story-mother-baby.jpg", alt: "Mother holding her baby close", width: 2046, height: 1374 } },
  ],
};

/* -------------------------------------------------------------------- news */

const cochinHerald = {
  title: "Recognition by Cochin Herald for the year 2020-21",
  text: "Extremely proud to announce that our Managing Director – Mrs. Chitra Gopinathan is recognized amongst the top 50 Personalities for her contribution to the society by Cochin Herald for the year 2020-21.",
  image: { src: "/images/news-cochin-herald.jpg", alt: "Cochin Herald “50 Streaks of Legacy” cover", width: 999, height: 750 } satisfies Img,
};

export const news = {
  eyebrow: "Latest happenings",
  heading: "Fresh from our news & blog",
  readMore: "Read more",
  // Only one article exists in the design (shown twice); the later entries repeat it as placeholders.
  posts: [
    { ...cochinHerald, href: "/news/cochin-herald-recognition-2020-21" },
    { ...cochinHerald, href: "/news/placeholder-2" },
    { ...cochinHerald, href: "/news/placeholder-3" },
  ],
};

/* --------------------------------------------------------------- locations */

// The design repeats the Edappal description for all three hospitals (placeholder copy).
const edappalCopy =
  "Established in 1996 as a pioneer in South India's reproductive medicine, CIMAR Edappal is a premier tertiary fertility center known for introducing advanced IVF and fetal medicine technologies to Kerala. Set in a serene healing environment, the clinic delivers comprehensive fertility treatments, high-risk maternity care, and genetic diagnostics.";

export const locations = {
  eyebrow: "Our locations",
  heading: "Similar hospitals you may like",
  cta: "Visit us",
  items: [
    { name: "CIMAR Edappal", text: edappalCopy, rating: 4.4, reviews: "850+", href: "/locations/edappal", image: { src: "/images/location-edappal.jpg", alt: "Aerial view of CIMAR Edappal hospital", width: 412, height: 251 } },
    { name: "CIMAR Kochi", text: edappalCopy, rating: 4.4, reviews: "850+", href: "/locations/kochi", image: { src: "/images/location-kochi.jpg", alt: "CIMAR Kochi hospital building at dusk", width: 411, height: 251 } },
    { name: "CIMAR Thrissur", text: edappalCopy, rating: 4.4, reviews: "850+", href: "/locations/thrissur", image: { src: "/images/location-thrissur.jpg", alt: "CIMAR Thrissur hospital surrounded by paddy fields", width: 411, height: 251 } },
  ],
};

/* ------------------------------------------------------------------ footer */

export const footer = {
  intro: hero.intro,
  columns: [
    {
      heading: "More info",
      links: [
        { label: "Training programmes", href: "/training" },
        { label: "Healthcare services", href: "/services" },
        { label: "About us", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Locations", href: "#locations" },
      ],
    },
    {
      heading: "Follow us",
      links: [
        { label: "Instagram", href: "https://www.instagram.com/" },
        { label: "Facebook", href: "https://www.facebook.com/" },
        { label: "YouTube", href: "https://www.youtube.com/" },
      ],
    },
  ],
  newsletter: {
    heading: "Let's keep in touch",
    treatmentLabel: "Select treatment",
    treatmentPlaceholder: "Choose a treatment",
    treatments: ["Fertility & IVF", "Obstetrics", "Gynaecology", "Neonatology", "Fetal medicine", "Other"],
    emailLabel: "Email address",
    note: "By submitting your email you agree to our Terms of Use and agree that we can contact you as described in our Privacy Policy.",
    submit: "Send",
    success: "Thanks — we’ll be in touch soon.",
    errors: {
      treatment: "Please choose a treatment.",
      emailMissing: "Please enter your email address.",
      emailInvalid: "Please enter a valid email address.",
    },
  },
  legal: [
    { label: "Privacy policy", href: "/privacy-policy" },
    { label: "Terms & conditions", href: "/terms" },
  ],
  copyright: "© 2023 CIMAR, Inc. All rights reserved",
  credit: { prefix: "Powered by", label: "Explaineddigital", suffix: "the better agency", href: "https://explaineddigital.com" },
};
