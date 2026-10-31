import { Specialty } from "@/types/specialty.types"


export const specialties: Specialty[] = [
    {
        index: "01",
        name: "Advanced IVF Treatment",
        description:
            "IVF, ICSI, IUI and PICSI delivered with individualised protocols rather than one-size-fits-all cycles. We also work closely with couples navigating a previous IVF failure to understand what went wrong and adjust the approach accordingly.",
        href: "/infertility/ivf",
    },
    {
        index: "02",
        name: "Female Infertility",
        description:
            "Fertility-focused evaluation and treatment for PCOS, PCOD, low AMH, fibroids, endometriosis and menstrual irregularities — conditions that affect conception as much as everyday comfort, addressed with that dual lens in mind.",
        href: "/infertility", // TODO: change to "/infertility/female" once that page exists
    },
    {
        index: "03",
        name: "Male Infertility",
        description:
            "Diagnosis and treatment for low sperm count, poor motility, zero sperm count, varicocele and erectile dysfunction. Advanced techniques like ICSI are recommended where standard approaches aren't enough for a successful outcome.",
        href: "/infertility/male",
    },
    {
        index: "04",
        name: "Fertility Preservation",
        description:
            "Egg freezing, embryo freezing and sperm cryopreservation for those who want to protect their future fertility — whether that's ahead of medical treatment, or simply on their own timeline.",
        href: "/fertility-preservation",
    },
    {
        index: "05",
        name: "Maternity",
        description:
            "Complete pregnancy care from pre-pregnancy counselling through delivery and beyond, including high-risk pregnancy management, 3D/4D ultrasound and prenatal screening. Normal, painless, cesarean and assisted deliveries are all supported based on what's safest for you.",
        href: "/maternity",
    },
    {
        index: "06",
        name: "Gynaecology",
        description:
            "From everyday concerns like PCOD, PCOS and menstrual irregularities to fibroids, endometriosis and gynaecological cancers, our specialists provide accurate diagnosis and personalised treatment. Regular screening and preventive care, including HPV vaccination, are built into every visit.",
        href: "/gynaecology",
    },
    {
        index: "07",
        name: "Robotics & Laparoscopy",
        description:
            "Robotic-assisted and laparoscopic (keyhole) surgery as alternatives to open surgery for hysterectomy, myomectomy, ovarian cysts and more — smaller incisions mean less pain, shorter hospital stays and faster return to normal life. Diagnostic and operative hysteroscopy are also performed here.",
        href: "/laparoscopy",
    },
    {
        index: "08",
        name: "Cosmetic Gynecology",
        description:
            "Confidential reconstructive and aesthetic procedures — from vaginal and labial reconstruction to hymenoplasty and vaginal tightening — handled with the same clinical discretion and care as any other specialty here.",
        href: "/cosmetic-gynecology",
    },
    {
        index: "09",
        name: "Urogynecology",
        description:
            "Care for pelvic floor problems that many women silently live with — leaking urine, a bulge or heaviness in the vagina (prolapse) and bladder symptoms. Treatment starts with exercises, physiotherapy and pessaries, with pelvic reconstruction surgery and cystoscopy when needed.",
        href: "/gynaecology/uro",
    },
    {
        index: "10",
        name: "Gynaecological Cancers",
        description:
            "Screening, early diagnosis and treatment planning for cancers of the cervix, womb, ovaries and vulva, and for breast cancer — including HPV vaccination and regular checks that catch changes before they become cancer.",
        href: "/gynaecology/cancers",
    },
]
