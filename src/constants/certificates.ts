// Dr. Shaivalini Kamarapu's certificates, as shown on the hospital's previous website.
export type Certificate = {
    slug: string
    title: string
    issuer: string
    detail: string
    date?: string
    image: string
    pdf?: string
}

export const certificates: Certificate[] = [
    {
        slug: "kiel-endometriosis-robotic-surgery-diploma",
        title: "Diploma in Advanced Endometriosis Care and Robotic Surgery",
        issuer: "University of Schleswig-Holstein, Kiel (Germany) — with CCMIG",
        detail: "Course held in Dubai, UAE.",
        date: "December 2025",
        image: "/images/certificates/kiel-endometriosis-robotic-surgery-diploma.webp",
        pdf: "/documents/dr-shaivalini-kamarapu-endometriosis-robotic-surgery-diploma.pdf",
    },
    {
        slug: "aris-robotic-surgeon-membership",
        title: "Surgeon Member — Association of Robotic & Innovative Surgeons",
        issuer: "Association of Robotic & Innovative Surgeons (ARIS)",
        detail: "Certificate of membership, no. SM-0378.",
        date: "July 2025",
        image: "/images/certificates/aris-robotic-surgeon-membership.webp",
    },
    {
        slug: "sunrise-laparoscopy-fellowship",
        title: "Fellowship in Advanced Laparoscopic Surgery",
        issuer: "Centre for Advanced Laparoscopic Surgery, Sunrise Hospital, New Delhi",
        detail: "Six-month hands-on laparoscopic training course.",
        image: "/images/certificates/sunrise-laparoscopy-fellowship.webp",
    },
    {
        slug: "cosmetic-gynecology-certificate",
        title: "Certificate Course in Cosmetic Plastic Gynaecology",
        issuer: "The Society of Cosmetic Gynecology, India — with the Academy of Reconstructive & Cosmetic Gynecology",
        detail: "Conducted jointly with international cosmetic-gynaecology societies.",
        image: "/images/certificates/cosmetic-gynecology-certificate.webp",
    },
    {
        slug: "art-academy-ivf-ovulation-induction",
        title: "Ovulation Induction, IVF, OPU-ET, Reproductive Ultrasound and QA/QC",
        issuer: "Clinical & Embryology Academy of ART",
        detail: "8-week certified hybrid ART training course with hands-on training.",
        date: "2022",
        image: "/images/certificates/art-academy-ivf-ovulation-induction.webp",
    },
    {
        slug: "art-academy-ivf-lab-embryology",
        title: "IVF Lab Set-Up, Clinical Embryology, Embryo Culture, ICSI and Cryobiology",
        issuer: "Clinical & Embryology Academy of ART",
        detail: "8-week certified hybrid ART training course with hands-on training.",
        date: "2021",
        image: "/images/certificates/art-academy-ivf-lab-embryology.webp",
    },
    {
        slug: "art-academy-andrology-iui",
        title: "Basic & Advanced Clinical Andrology, IUI and Reproductive Ultrasound",
        issuer: "Clinical & Embryology Academy of ART",
        detail: "8-week certified hybrid ART training course with hands-on training.",
        date: "2021",
        image: "/images/certificates/art-academy-andrology-iui.webp",
    },
]
