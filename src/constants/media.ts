// Videos come from the hospital's own YouTube channel (youtube.com/@AMVIHospital)
// plus one TV interview with Dr. Shaivalini. Photos are the hospital's own,
// carried over from the previous website's image gallery.

export const YOUTUBE_CHANNEL = "https://www.youtube.com/@AMVIHospital"

export type Video = { id: string; title: string; language?: "Telugu" }

export const videoGroups: { heading: string; videos: Video[] }[] = [
    {
        heading: "Fertility & IVF",
        videos: [
            { id: "4xLjenc1l_8", title: "What is the right age to freeze your eggs?" },
            { id: "sGyANWjWdTQ", title: "How to get pregnant after IVF failure" },
            { id: "cxA0WZ0FS6k", title: "IVF failure: understanding the reasons and next steps" },
            { id: "919QwGjurE4", title: "How much sperm motility is needed for pregnancy?" },
            { id: "QaBI9QktbIg", title: "Chances of having twins with IVF", language: "Telugu" },
            { id: "QHB-dbBkkj0", title: "Blocked fallopian tubes: causes and symptoms", language: "Telugu" },
            { id: "G6yMBL9a0DU", title: "Should couples have genetic tests before marriage?", language: "Telugu" },
            { id: "Qw0sMv0jkZk", title: "Ozempic, PCOS and pregnancy: what is the truth?", language: "Telugu" },
            { id: "bMg5teEEffY", title: "Natural pregnancy tips and treatments for infertility" },
        ],
    },
    {
        heading: "Pregnancy & delivery",
        videos: [
            { id: "HbKz2J8RAp0", title: "Top tips for a normal delivery" },
            { id: "e9plO9wf9OU", title: "Spotting in pregnancy: myths vs facts" },
            { id: "t5jqw6MltUI", title: "Yoga for a happy and healthy pregnancy" },
            { id: "P4T1MeRIS1c", title: "Is long-distance travel safe during pregnancy?" },
            { id: "D5hAM1XmLcc", title: "What is an ectopic pregnancy? Treatment by laparoscopic surgery" },
            { id: "KM4Ad8h-Ll0", title: "What is a caesarean scar defect? Dr. Shaivalini Kamarapu on Hi9" },
        ],
    },
    {
        heading: "Women's health",
        videos: [
            { id: "Ja1SvPNSbn4", title: "What causes irregular periods, and how to manage them" },
            { id: "LCReyY4rhm8", title: "Pain during intercourse in women", language: "Telugu" },
            { id: "VsCdAeCnoKo", title: "What causes low libido in women?" },
        ],
    },
    {
        heading: "Life at AMVI",
        videos: [
            { id: "p1o5K7CowoU", title: "Dr. Shaivalini honoured with the APJ Kalam Excellency Award 2024" },
            { id: "vyH6DroHDJQ", title: "Doctors' Day 2026 at AMVI Hospitals" },
            { id: "46Woo8nQfG8", title: "Celebrating our staff's baby shower (Seemantham)" },
        ],
    },
]

// Patient stories (shown on the Video Testimonials page)
export const testimonialVideos: Video[] = [
    { id: "lJBBniNgvXg", title: "IVF success after 4 years of marriage" },
    { id: "cwr4jQ1Pedg", title: "A patient's inspiring story" },
    { id: "eqZY6x_PaPA", title: "A beautiful normal delivery birth story", language: "Telugu" },
    { id: "WUDEfbCZVSQ", title: "The biggest gift: an emotional baby handover", language: "Telugu" },
]

export type GalleryPhoto = { src: string; alt: string; caption: string }

export const galleryPhotos: GalleryPhoto[] = [
    { src: "/images/gallery/reception-waiting-area-pharmacy.webp", alt: "Reception and waiting area with in-house pharmacy at AMVI Hospitals", caption: "Reception, waiting area and in-house pharmacy" },
    { src: "/images/gallery/waiting-area.webp", alt: "Patient waiting area at AMVI Hospitals", caption: "Patient waiting area" },
    { src: "/images/gallery/ultrasound-scan-room.webp", alt: "Ultrasound scanning room at AMVI Hospitals", caption: "Ultrasound and scanning room" },
    { src: "/images/gallery/ivf-lab-laminar-flow-workstation.webp", alt: "Laminar flow workstation in the laboratory at AMVI Hospitals", caption: "Laboratory workstation" },
    { src: "/images/gallery/andrology-lab-centrifuge-microscope.webp", alt: "Microscope and centrifuge in the laboratory at AMVI Hospitals", caption: "Laboratory microscope and centrifuge" },
    { src: "/images/gallery/laboratory-analysers.webp", alt: "Blood test analysers in the laboratory at AMVI Hospitals", caption: "On-site laboratory" },
    { src: "/images/gallery/laparoscopic-surgery-theatre.webp", alt: "Laparoscopic surgery in progress in the operation theatre at AMVI Hospitals", caption: "Laparoscopic surgery in progress" },
    { src: "/images/gallery/operation-theatre-1.webp", alt: "Operation theatre with laparoscopy tower at AMVI Hospitals", caption: "Operation theatre" },
    { src: "/images/gallery/operation-theatre-2.webp", alt: "Operation theatre with anaesthesia workstation at AMVI Hospitals", caption: "Operation theatre" },
    { src: "/images/gallery/operation-theatre-3.webp", alt: "Operation theatre at AMVI Hospitals", caption: "Operation theatre" },
    { src: "/images/gallery/newborn-radiant-warmer.webp", alt: "Newborn radiant warmer at AMVI Hospitals", caption: "Newborn care: radiant warmer" },
    { src: "/images/gallery/private-patient-room.webp", alt: "Private patient room at AMVI Hospitals", caption: "Private room" },
    { src: "/images/gallery/patient-room-bed.webp", alt: "Patient bed in a private room at AMVI Hospitals", caption: "Private room" },
    { src: "/images/gallery/recovery-ward.webp", alt: "Recovery ward at AMVI Hospitals", caption: "Recovery ward" },
    { src: "/images/gallery/ward-beds.webp", alt: "Ward beds at AMVI Hospitals", caption: "Ward" },
]
