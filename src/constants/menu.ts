import { MenuItem } from "@/types/menu.types";

export const navItems: MenuItem[] = [
    // { name: "Home", href: "/" },
    {
        name: "About",
        href: "/about",
        description: "Two decades of specialised women's care in Hyderabad.",
        sub_menu: [
            { name: "About AMVI Hospital", href: "/about" },
            { name: "About Our Doctors", href: "/about/doctors" },
            { name: "Contact Us", href: "/contact" },
        ],
    },
    {
        name: "Gynaecology",
        href: "/gynaecology",
        description: "Comprehensive gynaecological care for every stage of life.",
        mega: true,
        columns: [
            {
                title: "Common conditions",
                items: [
                    { name: "Gynaecology overview", href: "/gynaecology" },
                    { name: "PCOD", href: "/gynaecology/pcod" },
                    { name: "PCOS", href: "/gynaecology/pcos" },
                    { name: "Endometriosis", href: "/gynaecology/endometriosis" },
                    { name: "Menstrual problems", href: "/gynaecology/menstrual-problems" },
                    { name: "Uterine fibroids", href: "/gynaecology/uterine-fibroids" },
                ],
            },
            {
                title: "Screening & prevention",
                items: [
                    { name: "Endocrine disorders", href: "/gynaecology/endocrine-disorders" },
                    { name: "Contraception", href: "/gynaecology/contraception" },
                    { name: "HPV vaccination", href: "/gynaecology/hpv-vaccination" },
                    { name: "Health checkup", href: "/gynaecology/health-checkup" },
                    { name: "Adenomyosis", href: "/gynaecology/adenomyosis" },
                    { name: "Low AMH", href: "/gynaecology/low-amh" },
                ],
            },
            {
                title: "Cancers",
                items: [
                    { name: "Cervical cancer", href: "/gynaecology/cancers/cervical" },
                    { name: "Endometrial cancer", href: "/gynaecology/cancers/endometrial" },
                    { name: "Vulvar cancer", href: "/gynaecology/cancers/vulvar" },
                    { name: "Ovarian cancer", href: "/gynaecology/cancers/ovarian" },
                    { name: "Breast cancer", href: "/gynaecology/cancers/breast" },
                ],
            },
            {
                title: "Urogynecology",
                items: [
                    { name: "Prolapse", href: "/gynaecology/uro/prolapse" },
                    { name: "Urinary incontinence", href: "/gynaecology/uro/urinary-incontinence" },
                    { name: "Pelvic reconstruction", href: "/gynaecology/uro/pelvic-reconstruction" },
                    { name: "Cystoscopy", href: "/gynaecology/uro/cystoscopy" },
                ],
            },
        ],
    },
    {
        name: "Infertility",
        href: "/infertility",
        description: "Personalised fertility assessment and advanced IVF care.",
        mega: true,
        columns: [
            {
                title: "Assessment & diagnosis",
                items: [
                    { name: "Infertility assessment", href: "/infertility/assessment" },
                    { name: "Genetic screening", href: "/infertility/genetic-screening" },
                    { name: "Follicular monitoring", href: "/infertility/follicular-monitoring" },
                    { name: "Ovulation induction", href: "/infertility/ovulation-induction" },
                    { name: "CASA", href: "/infertility/casa" },
                ],
            },
            {
                title: "Male fertility",
                items: [
                    { name: "Oligospermia", href: "/infertility/male/oligospermia" },
                    { name: "Erectile dysfunction", href: "/infertility/male/erectile-dysfunction" },
                    { name: "Varicocele", href: "/infertility/male/varicocele" },
                    { name: "Asthenospermia", href: "/infertility/male/asthenospermia" },
                    { name: "Azoospermia", href: "/infertility/male/azoospermia" },
                ],
            },
            {
                title: "IVF & advanced techniques",
                items: [
                    { name: "IVF", href: "/infertility/ivf" },
                    { name: "ICSI", href: "/infertility/icsi" },
                    { name: "IMSI", href: "/infertility/imsi" },
                    { name: "Stem cell IVF", href: "/infertility/stem-cell-ivf" },
                    { name: "IUI", href: "/infertility/iui" },
                    { name: "PICSI", href: "/infertility/picsi" },
                    { name: "IVF failure", href: "/infertility/ivf-failure" },
                ],
            },
        ],
    },
    {
        name: "Laparoscopic Surgery",
        href: "/laparoscopy",
        description: "Minimally invasive procedures with faster recovery.",
        sub_menu: [
            // { name: "Laparoscopic surgery overview", href: "/laparoscopy" },
            { name: "Laparoscopic hysterectomy", href: "/laparoscopy/hysterectomy" },
            { name: "Laparoscopic myomectomy", href: "/laparoscopy/myomectomy" },
            { name: "Tubal recanalization", href: "/laparoscopy/tubal-recanalization" },
            { name: "Laparoscopic ovarian cyst surgery", href: "/laparoscopy/ovarian-cyst" },
            { name: "Operative hysteroscopy", href: "/laparoscopy/operative-hysteroscopy" },
            { name: "Diagnostic laparoscopy", href: "/laparoscopy/diagnostic" },
        ],
    },
    {
        name: "Cosmetic Gynecology",
        href: "/cosmetic-gynecology",
        description: "Confidential, specialist care for intimate wellness.",
        mega: true,
        columns: [
            {
                title: "Reconstructive care",
                items: [
                    { name: "Vaginal reconstruction", href: "/cosmetic-gynecology/vaginal-reconstruction" },
                    { name: "Labial reconstruction", href: "/cosmetic-gynecology/labial-reconstruction" },
                    { name: "Hymenoplasty", href: "/cosmetic-gynecology/hymenoplasty" },
                    { name: "Vaginal tightening surgery", href: "/cosmetic-gynecology/vaginal-tightening" },
                ],
            },
            {
                title: "Aesthetic & wellness",
                items: [
                    { name: "Clitoral hood reduction", href: "/cosmetic-gynecology/clitoral-hood-reduction" },
                    { name: "Designer vagina", href: "/cosmetic-gynecology/designer-vagina" },
                    { name: "O-Shot", href: "/cosmetic-gynecology/o-shot" },
                    { name: "G-Shot", href: "/cosmetic-gynecology/g-shot" },
                    { name: "Tummy tuck", href: "/cosmetic-gynecology/tummy-tuck" },
                ],
            },
        ],
    },
    {
        name: "Maternity",
        href: "/maternity",
        description: "Complete pregnancy, delivery and newborn care.",
        mega: true,
        columns: [
            {
                title: "Pregnancy care",
                items: [
                    { name: "Pre-pregnancy counselling", href: "/maternity/pre-pregnancy-counselling" },
                    { name: "3D/4D ultrasound", href: "/maternity/3d-4d-ultrasound" },
                    { name: "High risk pregnancy", href: "/maternity/high-risk-pregnancy" },
                    { name: "OB/GYN ultrasound", href: "/maternity/ob-gyn-ultrasound" },
                    { name: "Twins / triplet pregnancy", href: "/maternity/twins-triplets" },
                ],
            },
            {
                title: "Delivery services",
                items: [
                    { name: "Normal delivery", href: "/maternity/delivery/normal" },
                    { name: "Cesarean delivery", href: "/maternity/delivery/cesarean" },
                    { name: "Painless delivery", href: "/maternity/delivery/painless" },
                    { name: "Forceps delivery", href: "/maternity/delivery/forceps" },
                    { name: "Vacuum delivery", href: "/maternity/delivery/vacuum" },
                ],
            },
            {
                title: "Prenatal screening",
                items: [
                    { name: "Amniocentesis test", href: "/maternity/screening/amniocentesis" },
                    { name: "NIPT", href: "/maternity/screening/nipt" },
                    { name: "Quad screen", href: "/maternity/screening/quad-screen" },
                    { name: "Triple marker test", href: "/maternity/screening/triple-marker" },
                    { name: "Double marker test", href: "/maternity/screening/double-marker" },
                ],
            },
        ],
    },
    {
        name: "Patient Guide",
        href: "/patient-guide",
        description: "Everything you need before and after your visit.",
        sub_menu: [
            { name: "Reviews", href: "https://www.google.com/maps/place/AMVI+Hospital", new_tab: true },
            { name: "Videos", href: "#" },
            { name: "Video testimonials", href: "#" },
            { name: "Blogs", href: "/blog" },
            { name: "Image gallery", href: "/patient-guide/gallery" },
        ],
    },
    {
        name: "Location",
        href: "/location",
        description: "Two centers, easy to reach across Hyderabad.",
        mega: true,
        columns: [
            {
                title: "Our centers",
                items: [
                    { name: "Puppalaguda", href: "/location/puppalaguda" },
                    { name: "Attapur", href: "/location/attapur" },
                ],
            },
            {
                title: "Areas we serve",
                items: [
                    { name: "Financial District", href: "/location/financial-district", new_tab: true },
                    { name: "Gachibowli", href: "/location/gachibowli", new_tab: true },
                    { name: "Kokapet", href: "/location/kokapet", new_tab: true },
                    { name: "Manikonda", href: "/location/manikonda", new_tab: true },
                    { name: "Mehdipatnam", href: "/location/mehdipatnam", new_tab: true },
                    { name: "Nanakramguda", href: "/location/nanakramguda", new_tab: true },
                    { name: "Narsingi", href: "/location/narsingi", new_tab: true },
                    { name: "Rajendranagar", href: "/location/rajendranagar", new_tab: true },
                    { name: "Shaikpet", href: "/location/shaikpet", new_tab: true },
                    { name: "Tolichowki", href: "/location/tolichowki", new_tab: true },
                ],
            },
        ],
    },
]