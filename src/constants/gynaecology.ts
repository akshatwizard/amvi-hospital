import { Condition } from "@/types/condition"
import { AppointmentStep } from "@/types/appointment-step"

export const gynaecologyIntro: string[] = [
    "Gynaecology is the branch of medicine focused on the health of the female reproductive system — including the uterus, ovaries, fallopian tubes, cervix, vagina, and hormonal health. At AMVI Hospitals, our gynaecology clinic is led by Dr. Shaivalini Kamarapu, with 20+ years of experience treating women of all ages across Hyderabad.",
    "Whether you're experiencing period problems, pelvic pain, hormonal imbalances, or need regular preventive screening — AMVI Hospitals provides complete gynaecological care in a private, respectful, and compassionate environment.",
]

export const gynaecologyConditions: Condition[] = [
    {
        name: "PCOS",
        description: "Polycystic ovary syndrome (PCOS) is a hormonal disorder that's more common among women of reproductive age, often affecting periods, fertility and metabolic health.",
        image: "/images/gynaecology/pcoc.jpeg",
        href: "/gynaecology/pcos",
    },
    {
        name: "Endometriosis",
        description: "One of the most common gynaecological conditions, where tissue similar to the lining of the womb grows outside the uterus, often causing pain and affecting fertility.",
        image: "/images/gynaecology/endometriosis.jpeg",
        href: "/gynaecology/endometriosis",
    },
    {
        name: "Menstrual Problems",
        description: "Menstrual cycles can bring a range of uncomfortable symptoms leading up to your period, including premenstrual syndrome (PMS), irregular cycles and heavy bleeding.",
        image: "/images/gynaecology/menstrual-problems.jpeg",
        href: "/gynaecology/menstrual-problems",
    },
    {
        name: "Gynecological Endocrine Disorders",
        description: "Hormonal imbalances affecting the reproductive system, from thyroid-related irregularities to conditions that disrupt ovulation and the menstrual cycle.",
        image: "/images/gynaecology/endocrine-disorders.jpeg",
        href: "/gynaecology/endocrine-disorders",
    },
    {
        name: "Uterine Fibroids",
        description: "Non-cancerous growths in or around the uterus that can cause heavy periods, pelvic pressure and, in some cases, fertility complications.",
        image: "/images/gynaecology/uterine-fibroids.jpeg",
        href: "/gynaecology/uterine-fibroids",
    },
    {
        name: "Contraception",
        description: "Personalised guidance on contraceptive options — from short-term to long-acting methods — tailored to your health, lifestyle and family planning goals.",
        image: "/images/gynaecology/contraception.jpeg",
        href: "/gynaecology/contraception",
    },
]

export const gynaecologySymptoms: string[] = [
    "Periods that are very heavy, very painful, or highly irregular",
    "Periods that stopped for 3+ months (not due to pregnancy)",
    "Pain during or after sexual intercourse",
    "Unusual vaginal discharge — abnormal colour, odour, or amount",
    "Pelvic pain or lower abdominal discomfort",
    "A swelling or lump in the pelvic region",
    "Burning or pain during urination",
    "No pregnancy after 12 months of trying (6 months if over 35 years)",
    "Unexplained weight gain linked to hormonal changes",
]

export const appointmentSteps: AppointmentStep[] = [
    {
        title: "Consultation",
        description: "Dr. Shaivalini will ask about your symptoms, menstrual history, and health background. Everything is confidential.",
    },
    {
        title: "Examination",
        description: "Only if needed, and only with your full consent. You will always be told what is being done and why.",
    },
    {
        title: "Tests",
        description: "Blood work, pelvic ultrasound, Pap smear — all can be done at AMVI in the same visit.",
    },
    {
        title: "Diagnosis and plan",
        description: "Clear, honest advice in plain language. No unnecessary treatment will be recommended.",
    },
]