import { Condition } from "@/types/condition"
import { AppointmentStep } from "@/types/appointment-step"
import { FaqItem } from "@/types/condition-page"

export const maternityIntro: string[] = [
    "At AMVI Hospitals, maternity care means being with you from the moment you start planning a pregnancy through to the day you bring your baby home — and beyond. Every pregnancy is monitored by Dr. Shaivalini Kamarapu and a dedicated maternity team, with on-site 3D/4D ultrasound, fetal medicine, and a NICU-ready delivery setup at both our Puppalaguda and Attapur centres.",
    "Whether your pregnancy is low-risk or needs closer monitoring, we build a birth plan around what's actually safest for you and your baby — not a one-size-fits-all protocol. Normal, painless (epidural), cesarean and assisted deliveries are all supported, and postnatal care continues right through recovery and your baby's first check-ups.",
]

export const maternityServices: Condition[] = [
    {
        name: "Pre-Pregnancy Counselling",
        description: "Health checks, vaccination review and lifestyle guidance before you start trying to conceive — so pregnancy begins on the strongest possible footing.",
        image: "/images/hero/pre-pregnancy-counselling-hero.png",
        href: "/maternity/pre-pregnancy-counselling",
    },
    {
        name: "High-Risk Pregnancy Care",
        description: "Close monitoring and specialist management for pregnancies complicated by conditions like gestational diabetes, hypertension, or a history of pregnancy loss.",
        image: "/images/hero/high-risk-pregnancy-hero.png",
        href: "/maternity/high-risk-pregnancy",
    },
    {
        name: "3D/4D Ultrasound",
        description: "High-resolution imaging that gives a clearer picture of your baby's growth and development at key stages of pregnancy.",
        image: "/images/hero/3d-4d-ultrasound-hero.png",
        href: "/maternity/3d-4d-ultrasound",
    },
    {
        name: "Twins / Triplet Pregnancy",
        description: "Specialised antenatal care for multiple pregnancies, which carry different risks and need closer, more frequent monitoring.",
        image: "/images/hero/twins-triplets-hero.png",
        href: "/maternity/twins-triplets",
    },
    {
        name: "Normal & Painless Delivery",
        description: "Vaginal delivery supported by epidural pain relief where wanted, with a full antenatal team present through labour.",
        image: "/images/hero/normal-hero.png",
        href: "/maternity/delivery/normal",
    },
    {
        name: "Cesarean Delivery",
        description: "Planned or emergency cesarean section, performed with modern surgical protocols for a safer, faster recovery.",
        image: "/images/hero/cesarean-hero.png",
        href: "/maternity/delivery/cesarean",
    },
    {
        name: "Prenatal Screening",
        description: "NIPT, quad screen, double and triple marker tests — non-invasive ways to assess your baby's genetic and chromosomal health.",
        image: "/images/hero/nipt-hero.png",
        href: "/maternity/screening/nipt",
    },
    {
        name: "OB/GYN Ultrasound",
        description: "Routine and diagnostic obstetric ultrasound scans through every trimester, tracking growth, position and wellbeing.",
        image: "/images/hero/ob-gyn-ultrasound-hero.png",
        href: "/maternity/ob-gyn-ultrasound",
    },
]

export const maternitySpecialistCareSigns: string[] = [
    "You're pregnant with twins, triplets, or a multiple pregnancy",
    "You've been diagnosed with gestational diabetes or high blood pressure",
    "You have a history of miscarriage, preterm labour, or pregnancy loss",
    "You're over 35 and pregnant for the first time",
    "You have an existing condition like PCOS, thyroid disorder, or a heart condition",
    "Your baby's growth or position needs closer monitoring",
    "You conceived through IVF or another fertility treatment",
    "You're experiencing unusual bleeding, pain, or reduced fetal movement",
]

export const maternityJourneySteps: AppointmentStep[] = [
    {
        title: "First consultation & dating scan",
        description: "We confirm your pregnancy, estimate your due date, and screen for any early risk factors that need closer attention.",
    },
    {
        title: "Regular antenatal visits",
        description: "Scheduled check-ups, blood work, and ultrasounds through each trimester, with prenatal screening offered at the right stages.",
    },
    {
        title: "Birth planning",
        description: "We talk through delivery options — normal, painless, or cesarean — so you go into labour knowing what to expect.",
    },
    {
        title: "Delivery & postnatal care",
        description: "Your delivery, followed by recovery support for you and early check-ups for your newborn, before you're discharged.",
    },
]

export const maternityFaqs: FaqItem[] = [
    {
        question: "How do I decide between a normal delivery and a C-section?",
        answer: "This depends on your health, your baby's position and size, and how labour progresses — it isn't usually a decision made in advance. Dr. Shaivalini will talk you through the safest option as your pregnancy and labour progress, and explain the reasoning clearly if a cesarean becomes necessary.",
    },
    {
        question: "Is painless delivery (epidural) safe?",
        answer: "Yes. Epidural analgesia is a well-established, safe way to manage labour pain and is available at both our Puppalaguda and Attapur centres. It's administered by an experienced anaesthetist and doesn't increase the chance of needing a cesarean.",
    },
    {
        question: "When should I start my antenatal check-ups?",
        answer: "Ideally as soon as you know you're pregnant, or even before conceiving if you'd like pre-pregnancy counselling. Early visits let us confirm dates, check for early risk factors, and plan the rest of your pregnancy care.",
    },
    {
        question: "What makes a pregnancy 'high-risk'?",
        answer: "Factors like gestational diabetes, high blood pressure, a multiple pregnancy, advanced maternal age, or a history of pregnancy complications can all classify a pregnancy as high-risk. It simply means we monitor you more closely — most high-risk pregnancies still result in a healthy delivery.",
    },
    {
        question: "How many ultrasounds will I need during pregnancy?",
        answer: "Most pregnancies involve around 4–6 scans, including a dating scan, an anomaly scan around 18–20 weeks, and growth scans later in pregnancy. High-risk pregnancies or twin pregnancies are monitored more frequently.",
    },
    {
        question: "Can I have a normal delivery after a previous cesarean?",
        answer: "In many cases, yes — this is called a VBAC (vaginal birth after cesarean). Whether it's suitable depends on why your previous cesarean was performed and how your current pregnancy is progressing; we'll assess this with you individually.",
    },
    {
        question: "What prenatal screening tests are recommended?",
        answer: "NIPT, the double marker test, and the quad/triple marker test are commonly used to screen for chromosomal conditions like Down syndrome. The right combination and timing depends on your age, history, and personal preference — we'll walk you through the options.",
    },
    {
        question: "What postnatal care is provided after delivery?",
        answer: "We monitor your recovery, support breastfeeding, and check your newborn before discharge. Follow-up visits cover your physical recovery, contraception planning if relevant, and your baby's early growth milestones.",
    },
    {
        question: "Which AMVI branch should I choose for delivery?",
        answer: "Both our Puppalaguda and Attapur centres offer full maternity and delivery services under Dr. Shaivalini Kamarapu. Choose whichever is more convenient for you — your care and delivery team stay consistent either way.",
    },
]
