import type { NextConfig } from "next";

/**
 * Old WordPress page address  →  new page address.
 *
 * The old site used flat URLs (e.g. /3d-4d-ultrasound/). Google still sends
 * patients to those, so each one permanently redirects (308, treated like a
 * 301 by Google) to the matching new page. This passes the old rankings on to
 * the new pages.
 *
 * To add one: copy a line, put the old path on the left and the new path on
 * the right. Old paths are written without the trailing slash.
 */
const legacyRedirects: Record<string, string> = {
  // --- Confirmed old URLs still ranking in Google (Ubersuggest, Oct 2026) ---
  "/3d-4d-ultrasound": "/maternity/3d-4d-ultrasound",
  "/triple-marker-test": "/maternity/screening/triple-marker",
  "/follicular-monitoring": "/infertility/follicular-monitoring",
  "/nipt": "/maternity/screening/nipt",
  "/o-shot": "/cosmetic-gynecology/o-shot",
  "/g-shot": "/cosmetic-gynecology/g-shot",
  "/forceps-delivery": "/maternity/delivery/forceps",
  "/painless-delivery": "/maternity/delivery/painless",
  "/vacuum-delivery": "/maternity/delivery/vacuum",
  "/asthenospermia": "/infertility/male/asthenospermia",
  "/double-marker-test": "/maternity/screening/double-marker",
  "/contraception": "/gynaecology/contraception",
  "/best-maternity-hospital-in-hyderabad-amvi-hospital-for-normal-delivery": "/maternity/delivery/normal",
  "/hymenoplasty": "/cosmetic-gynecology/hymenoplasty",
  "/can-i-get-pregnant-with-pcos-complete-guide": "/gynaecology/pcos",
  "/amniocentesis-test": "/maternity/screening/amniocentesis",
  "/polycystic-ovarian-disease-pcod": "/gynaecology/pcod",
  "/high-risk-pregnancy": "/maternity/high-risk-pregnancy",
  "/quad-screen": "/maternity/screening/quad-screen",
  "/journey-to-parenthood-starts-here-discover-the-best-fertility-hospital-in-hyderabad": "/infertility",
  "/fertility-hospital-in-hyderabad": "/infertility",
  "/ivf-cost-in-hyderabad": "/infertility/ivf",
  "/cystoscopy": "/gynaecology/uro/cystoscopy",

  // --- Old URLs referenced in the original site's content ---
  "/erectile-dysfunction": "/infertility/male/erectile-dysfunction",
  "/physiological-intracytoplasmic-sperm-injection": "/infertility/picsi",
  "/low-amh": "/gynaecology/low-amh",
  "/uterine-fibroids-treatment-hospital": "/gynaecology/uterine-fibroids",
  "/menstrual-problems": "/gynaecology/menstrual-problems",

  // --- Old flat service URLs (one per service page on the old site) ---
  "/adenomyosis": "/gynaecology/adenomyosis",
  "/azoospermia": "/infertility/male/azoospermia",
  "/breast-cancer": "/gynaecology/cancers/breast",
  "/casa": "/infertility/casa",
  "/cervical-cancer": "/gynaecology/cancers/cervical",
  "/cesarean-delivery": "/maternity/delivery/cesarean",
  "/clitoral-hood-reduction": "/cosmetic-gynecology/clitoral-hood-reduction",
  "/designer-vagina": "/cosmetic-gynecology/designer-vagina",
  "/diagnostic-laparoscopy": "/laparoscopy/diagnostic-laparoscopy",
  "/double-marker": "/maternity/screening/double-marker",
  "/endocrine-disorders": "/gynaecology/endocrine-disorders",
  "/endometrial-cancer": "/gynaecology/cancers/endometrial",
  "/endometriosis": "/gynaecology/endometriosis",
  "/genetic-screening": "/infertility/genetic-screening",
  "/health-checkup": "/gynaecology/health-checkup",
  "/hpv-vaccination": "/gynaecology/hpv-vaccination",
  "/icsi": "/infertility/icsi",
  "/imsi": "/infertility/imsi",
  "/infertility-assessment": "/infertility/assessment",
  "/iui": "/infertility/iui",
  "/ivf": "/infertility/ivf",
  "/ivf-failure": "/infertility/ivf-failure",
  "/labial-reconstruction": "/cosmetic-gynecology/labial-reconstruction",
  "/laparoscopic-hysterectomy": "/laparoscopy/hysterectomy",
  "/hysterectomy": "/laparoscopy/hysterectomy",
  "/laparoscopic-myomectomy": "/laparoscopy/myomectomy",
  "/myomectomy": "/laparoscopy/myomectomy",
  "/laparoscopy-surgery": "/laparoscopy",
  "/laparoscopic-surgery": "/laparoscopy",
  "/male-infertility": "/infertility/male",
  "/female-infertility": "/infertility",
  "/maternity-care": "/maternity",
  "/normal-delivery": "/maternity/delivery/normal",
  "/ob-gyn-ultrasound": "/maternity/ob-gyn-ultrasound",
  "/oligospermia": "/infertility/male/oligospermia",
  "/operative-hysteroscopy": "/laparoscopy/operative-hysteroscopy",
  "/ovarian-cancer": "/gynaecology/cancers/ovarian",
  "/ovulation-induction": "/infertility/ovulation-induction",
  "/pcod": "/gynaecology/pcod",
  "/pcos": "/gynaecology/pcos",
  "/pelvic-reconstruction": "/gynaecology/uro/pelvic-reconstruction",
  "/picsi": "/infertility/picsi",
  "/pre-pregnancy-counselling": "/maternity/pre-pregnancy-counselling",
  "/prolapse": "/gynaecology/uro/prolapse",
  "/stem-cell-ivf": "/infertility/stem-cell-ivf",
  "/triple-marker": "/maternity/screening/triple-marker",
  "/tubal-recanalization": "/laparoscopy/tubal-recanalization",
  "/tummy-tuck": "/cosmetic-gynecology/tummy-tuck",
  "/twins-triplets-pregnancy": "/maternity/twins-triplets",
  "/urinary-incontinence": "/gynaecology/uro/urinary-incontinence",
  "/uterine-fibroids": "/gynaecology/uterine-fibroids",
  "/vaginal-reconstruction": "/cosmetic-gynecology/vaginal-reconstruction",
  "/vaginal-tightening": "/cosmetic-gynecology/vaginal-tightening",
  "/varicocele": "/infertility/male/varicocele",
  "/vulvar-cancer": "/gynaecology/cancers/vulvar",

  // --- New-site links that changed during development ---
  "/cosmetic-gynecology/vaginal-tightening-surgery": "/cosmetic-gynecology/vaginal-tightening",
  "/cosmetic-gynecology/perineal-reconstruction": "/cosmetic-gynecology/vaginal-tightening",
  "/maternity/delivery/normal-delivery": "/maternity/delivery/normal",
  "/maternity/delivery/cesarean-delivery": "/maternity/delivery/cesarean",
  "/maternity/delivery/painless-delivery": "/maternity/delivery/painless",
  "/maternity/delivery/forceps-delivery": "/maternity/delivery/forceps",
  "/maternity/delivery/vacuum-delivery": "/maternity/delivery/vacuum",
  "/maternity/chromosome-test/amniocentesis": "/maternity/screening/amniocentesis",
  // Remove this line once a Female Infertility page is built at /infertility/female.
  "/infertility/female": "/infertility",

  // --- Standard WordPress pages ---
  "/home": "/",
  "/about-us": "/about",
  "/contact-us": "/contact",
  "/our-doctors": "/about/doctors",
  "/blogs": "/blog",
};

// Must match the slugs in src/constants/location-areas.ts
const locationAreaSlugs = [
  "gachibowli", "kokapet", "manikonda", "financial-district", "nanakramguda",
  "narsingi", "mehdipatnam", "tolichowki", "rajendranagar", "shaikpet",
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "amvihospitals.com",
      },
    ],
  },

  async redirects() {
    return [
      ...Object.entries(legacyRedirects).map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
      // Old location pages: /fertility-maternity-center-near-narsingi → /location/narsingi
      // (areas listed here have a page; any other old area goes to /location)
      {
        source: `/fertility-maternity-center-near-:area(${locationAreaSlugs.join("|")})`,
        destination: "/location/:area",
        permanent: true,
      },
      {
        source: "/fertility-maternity-center-near-:area",
        destination: "/location",
        permanent: true,
      },
      // Old blog posts lived under /blogs/<post>/ on a separate WordPress install.
      {
        source: "/blogs/:path+",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
