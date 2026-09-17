import { Egg, Baby, Snowflake } from "lucide-react"
import { IconItem, ProcessStep, FaqItem, ConditionNavLink } from "@/types/condition-page"

export const fertilityPreservationIntro: string[] = [
    "Fertility preservation means protecting your ability to have biological children in the future — on your own timeline, rather than one dictated by circumstance. At AMVI Hospitals, Dr. Shaivalini Kamarapu provides complete fertility assessments and preservation consultations at both our Puppalaguda and Attapur branches.",
    "It's a mainstream, well-established option — not a last resort. Whether you're focused on your career, waiting for the right partner, or need to preserve fertility before medical treatment like chemotherapy, freezing your eggs, embryos, or sperm today keeps that choice open for later.",
]

export const fertilityPreservationOptions: IconItem[] = [
    {
        icon: Egg,
        title: "Egg Freezing",
        description: "Ovarian stimulation followed by egg retrieval and vitrification (ultra-rapid freezing) — one of the most enquired-about fertility options among women aged 28–38.",
    },
    {
        icon: Baby,
        title: "Embryo Freezing",
        description: "Eggs are fertilised with sperm before freezing, typically chosen by couples who are further along in planning a family together.",
    },
    {
        icon: Snowflake,
        title: "Sperm Cryopreservation",
        description: "A simpler, same-day procedure for men — often recommended before cancer treatment, a vasectomy, or for future family planning.",
    },
]

export const fertilityPreservationWhoFor: string[] = [
    "Women focused on career or education who want to delay pregnancy without losing egg quality",
    "Anyone about to start chemotherapy or radiotherapy, which can affect egg or sperm quality",
    "Women diagnosed with conditions linked to declining ovarian reserve, such as low AMH or endometriosis",
    "Couples not yet ready to conceive but who want embryos preserved from a current IVF cycle",
    "Men undergoing a vasectomy, cancer treatment, or with a physically demanding job or deployment ahead",
    "Anyone building a family through surrogacy or reciprocal IVF, where timing needs flexibility",
]

export const fertilityPreservationProcess: ProcessStep[] = [
    {
        title: "Initial consultation & fertility assessment",
        points: [
            "Blood tests (AMH, FSH) and an antral follicle count via ultrasound assess your ovarian reserve.",
            "For sperm freezing, this step is a single semen analysis instead.",
        ],
    },
    {
        title: "Ovarian stimulation (10–14 days)",
        points: [
            "Daily hormone injections stimulate the ovaries to produce multiple eggs.",
            "Progress is monitored with 2–3 ultrasound scans during this window.",
        ],
    },
    {
        title: "Egg trigger & retrieval",
        points: [
            "A single trigger injection matures the eggs at a precisely timed point.",
            "Retrieval is a 20–30 minute procedure under light sedation — most women go home within 1–2 hours.",
        ],
    },
    {
        title: "Vitrification (freezing)",
        points: [
            "Mature eggs (or embryos) are immediately frozen using vitrification, an ultra-rapid technique that avoids ice-crystal damage.",
            "Frozen eggs and embryos can be stored indefinitely without loss of quality.",
        ],
    },
]

export const fertilityPreservationFaqs: FaqItem[] = [
    {
        question: "At what age should I consider egg freezing?",
        answer: "Egg quality and quantity decline with age, so earlier generally means better outcomes — most specialists suggest considering it before 35, ideally between 28–35. That said, an AMH and antral follicle count assessment gives a much clearer, individual picture than age alone.",
    },
    {
        question: "Is the egg retrieval procedure painful?",
        answer: "The daily stimulation injections cause mild discomfort, similar to a small pinch. The retrieval itself is done under light sedation, so you won't feel pain during the procedure — some bloating or mild cramping for 1–2 days afterwards is normal.",
    },
    {
        question: "How long can eggs, embryos or sperm stay frozen?",
        answer: "Indefinitely, with vitrification and proper storage in liquid nitrogen. There's no meaningful loss of quality over time — the eggs, embryos or sperm are viable whenever you're ready to use them.",
    },
    {
        question: "What's the difference between egg freezing and embryo freezing?",
        answer: "Egg freezing preserves unfertilised eggs, which are fertilised later when you're ready to use them. Embryo freezing fertilises the eggs with sperm first, then freezes the resulting embryo. Embryo freezing generally has a slightly higher success rate per cycle, but requires having a sperm source (partner or donor) at the time of freezing.",
    },
    {
        question: "Does fertility preservation guarantee a future pregnancy?",
        answer: "No method can guarantee pregnancy, but freezing eggs, embryos or sperm while you're younger and healthier meaningfully improves your chances compared to waiting. Success also depends on the number and quality of eggs or embryos frozen.",
    },
    {
        question: "Is sperm freezing a simpler process than egg freezing?",
        answer: "Yes — sperm freezing typically involves a single sample collection and freezing, without the hormone stimulation and retrieval procedure that egg or embryo freezing requires. It can usually be arranged within a single visit.",
    },
    {
        question: "How much does fertility preservation cost at AMVI Hospitals?",
        answer: "Cost depends on the option chosen (egg, embryo, or sperm freezing), the stimulation protocol used, and ongoing storage fees. We provide a full breakdown during your initial consultation — call +91-91000 09669 (Puppalaguda) or +91-80088 42200 (Attapur) to book.",
    },
]

export const fertilityPreservationNav: ConditionNavLink[] = [
    { name: "Fertility Preservation", href: "/fertility-preservation" },
    { name: "IVF", href: "/infertility/ivf" },
    { name: "ICSI", href: "/infertility/icsi" },
    { name: "IUI", href: "/infertility/iui" },
    { name: "Infertility Assessment", href: "/infertility/assessment" },
]
