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
  "/best-maternity-hospital-in-hyderabad-amvi-hospital-for-normal-delivery": "/blog/choosing-maternity-hospital-for-normal-delivery-hyderabad",
  "/hymenoplasty": "/cosmetic-gynecology/hymenoplasty",
  "/can-i-get-pregnant-with-pcos-complete-guide": "/blog/can-i-get-pregnant-with-pcos",
  "/amniocentesis-test": "/maternity/screening/amniocentesis",
  "/polycystic-ovarian-disease-pcod": "/gynaecology/pcod",
  "/high-risk-pregnancy": "/maternity/high-risk-pregnancy",
  "/quad-screen": "/maternity/screening/quad-screen",
  "/journey-to-parenthood-starts-here-discover-the-best-fertility-hospital-in-hyderabad": "/blog/choosing-fertility-hospital-hyderabad",
  "/fertility-hospital-in-hyderabad": "/infertility",
  "/ivf-cost-in-hyderabad": "/blog/ivf-cost-in-hyderabad",
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

  // --- Full old WordPress page list (page-sitemap.xml, 197 pages) ---
  "/about-amvi-hospital": "/about",
  "/about-our-doctors": "/about/doctors",
  "/general-physician": "/about/doctors",
  "/psychology": "/about/doctors",
  "/amvi-hospitals-best-ivf-clinic-in-attapur-puppalaguda-hyderabad": "/infertility/ivf",
  "/best-fertility-center-in-attapur": "/location/attapur",
  "/best-diagnostic-laparoscopy-treatment": "/laparoscopy/diagnostic-laparoscopy",
  "/best-hospital-for-normal-delivery": "/maternity/delivery/normal",
  "/best-laparoscopic-hysterectomy-hospital": "/laparoscopy/hysterectomy",
  "/best-laparoscopic-myomectomy-surgery-treatment": "/laparoscopy/myomectomy",
  "/best-operative-hysteroscopy-surgery-treatment": "/laparoscopy/operative-hysteroscopy",
  "/chromosome-test": "/maternity",
  "/computer-assisted-semen-analysis-casa": "/infertility/casa",
  "/cosmetic-gynecology-aesthetic-gynecologic-procedures": "/cosmetic-gynecology",
  "/delivery-services": "/maternity",
  "/gynaecology-services-comprehensive-womens-health-care": "/gynaecology",
  "/gynecologic-cancers-comprehensive-cancer-care-for-women": "/gynaecology/cancers",
  "/gynecological-endocrine-disorders": "/gynaecology/endocrine-disorders",
  "/in-vitro-fertilization": "/infertility/ivf",
  "/infertility-treatment-assisted-reproductive-techniques": "/infertility",
  "/intracytoplasmic-sperm-injection-icsi": "/infertility/icsi",
  "/intrauterine-insemination-iui": "/infertility/iui",
  "/laparoscopic-ovarian-cyst-surgery-minimally-invasive-procedure": "/laparoscopy",
  "/laparoscopic-surgery-minimally-invasive-procedures": "/laparoscopy",
  "/maternity-services-pregnancy-care-and-delivery": "/maternity",
  "/polycystic-ovarian-syndrome-pcos": "/gynaecology/pcos",
  "/pre-pregnancy-counseling": "/maternity/pre-pregnancy-counselling",
  "/stem-cell-ivf-treatment": "/infertility/stem-cell-ivf",
  "/top-gynecologist-tubal-recanalization-treatment": "/laparoscopy/tubal-recanalization",
  "/top-hospital-for-endometriosis-treatment": "/gynaecology/endometriosis",
  "/twins-or-triplets-pregnancy": "/maternity/twins-triplets",
  "/urogynecology-services-pelvic-floor-disorders-treatment": "/gynaecology/uro",
  "/vagina-or-labiaplasty-designer": "/cosmetic-gynecology/designer-vagina",
  "/vaginal-or-labiaplasty-reconstruction": "/cosmetic-gynecology/vaginal-reconstruction",
  "/vaginal-or-labiaplasty-tightening-surgery": "/cosmetic-gynecology/vaginal-tightening",
  "/fertility-maternity-center-near-mehdipatnam-hyderabad": "/location/mehdipatnam",

  // --- Old articles at the site root (post-sitemap.xml) ---
  "/normal-delivery-vs-c-section": "/blog/normal-delivery-vs-c-section",
  "/what-to-expect-after-ivf-embryo-transfer": "/blog/what-to-expect-after-ivf-embryo-transfer",
  "/best-gynaecologist-in-hyderabad-what-to-look-for-when-to-visit": "/blog/choosing-a-gynaecologist-hyderabad",
  "/how-icsi-treatment-helps-couples-conceive": "/blog/how-icsi-helps-male-infertility",
  "/male-infertility-treatment-in-hyderabad-causes-tests-icsi": "/blog/male-infertility-causes-tests-treatment",
  "/what-is-amh-test-ovarian-reserve": "/blog/amh-test-ovarian-reserve",
  "/thyroid-problems-and-fertility-how-it-affects-pregnancy": "/blog/thyroid-problems-and-fertility",
  "/egg-freezing-in-hyderabad": "/blog/egg-freezing-in-hyderabad",
  "/best-laparoscopic-surgery-in-hyderabad": "/blog/laparoscopic-surgery-for-women",
  "/best-ivf-clinic-centre-in-hyderabad-top-fertility-specialists-success-rates-treatments-at-amvi-hospital": "/blog/choosing-ivf-clinic-hyderabad",
  "/best-infertility-hospital-in-hyderabad-amvi-hospitals": "/blog/choosing-fertility-hospital-hyderabad",
  "/best-fibroid-treatment-in-hyderabad-amvi-hospital": "/blog/fibroid-treatment-options",

  // --- Old blog (/blogs/…) → the same article on the new blog ---
  "/blogs/an-innovative-step-in-womens-intimate-wellness-with-o-shot-treatment": "/blog/o-shot-and-g-shot-intimate-wellness",
  "/blogs/endometriosis-diet-that-nourish-your-body-for-better-health-fertility": "/blog/endometriosis-diet-for-fertility",
  "/blogs/cosmetic-gynecology-at-amvi-hospital-redefining-womens-intimate-wellness": "/blog/cosmetic-gynecology-redefining-intimate-wellness",
  "/blogs/your-guide-to-vaginal-delivery-to-experience-the-joy-of-natural-birth": "/blog/vaginal-delivery-natural-birth-guide",
  "/blogs/cosmetic-gynaecology-with-restoring-confidence-comfort-and-intimate-wellness": "/blog/cosmetic-gynaecology-confidence-comfort-wellness",
  "/blogs/rediscover-comfort-confidence-with-vaginoplasty-at-amvi-hospital": "/blog/vaginoplasty-comfort-and-confidence",
  "/blogs/what-is-monsplasty-benefits-procedure-and-recovery-guide": "/blog/what-is-monsplasty",
  "/blogs/empower-your-body-for-normal-delivery-unique-birthing-exercises-from-amvi-hospital": "/blog/birthing-exercises-for-normal-delivery",
  "/blogs/what-every-woman-should-know-about-the-procedure-recovery-care-of-episiotomy-at-amvi-hospital": "/blog/episiotomy-procedure-recovery-care",
  "/blogs/gynaecology-diseases-and-surgery-blogs": "/blog/gynaecology-diseases-and-surgery-overview",
  "/blogs/fertility-and-healthy-living-blogs": "/blog/fertility-and-healthy-living-overview",
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
      // Old area landing pages, e.g. /fertility-hospital-in-narsingi.
      // Areas with a new location page go there; others go to the service page.
      {
        source: `/fertility-hospital-in-:area(${locationAreaSlugs.join("|")})`,
        destination: "/location/:area",
        permanent: true,
      },
      { source: "/fertility-hospital-in-attapur", destination: "/location/attapur", permanent: true },
      { source: "/fertility-hospital-in-puppalaguda", destination: "/location/puppalaguda", permanent: true },
      { source: "/fertility-hospital-in-:area", destination: "/infertility", permanent: true },
      { source: "/fibroid-treatment-in-:area", destination: "/gynaecology/uterine-fibroids", permanent: true },
      { source: "/hysterectomy-treatment-in-:area", destination: "/laparoscopy/hysterectomy", permanent: true },
      { source: "/laparoscopy-doctors-in-:area", destination: "/laparoscopy", permanent: true },
      { source: "/laparoscopy-hospital-in-:area", destination: "/laparoscopy", permanent: true },
      // Any other old blog post under /blogs/<post>/ (a separate WordPress install).
      {
        source: "/blogs/:path+",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
