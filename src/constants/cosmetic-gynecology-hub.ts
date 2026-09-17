import { Lock, HeartHandshake, Stethoscope, ShieldCheck } from "lucide-react"
import { Condition } from "@/types/condition"
import { IconItem, FaqItem } from "@/types/condition-page"

export const cosmeticGynecologyIntro: string[] = [
    "Cosmetic gynaecology covers reconstructive and aesthetic procedures for intimate wellness — addressing changes from childbirth, ageing, or simply how a woman feels in her own body. At AMVI Hospitals, every consultation is private, judgement-free, and led by Dr. Shaivalini Kamarapu, one of the few gynaecologists in Telangana certified specifically in cosmetic gynaecology.",
    "Dr. Shaivalini trained under specialists in the USA, France, Poland and Morocco, and is one of the few surgeons who exclusively performs both surgical and non-surgical vaginal laser procedures. Whether your goal is comfort, function, or confidence, treatment is planned around your concerns — not a standard package.",
]

export const cosmeticGynecologyProcedures: Condition[] = [
    {
        name: "Vaginal Reconstruction",
        description: "Restoring vaginal structure and tone after childbirth, age-related changes, or previous surgery.",
        image: "/images/hero/vaginal-reconstruction-hero.png",
        href: "/cosmetic-gynecology/vaginal-reconstruction",
    },
    {
        name: "Labial Reconstruction",
        description: "Reshaping or reducing the labia for improved comfort and confidence, with minimal downtime.",
        image: "/images/hero/labial-reconstruction-hero.png",
        href: "/cosmetic-gynecology/labial-reconstruction",
    },
    {
        name: "Hymenoplasty",
        description: "A confidential, precise procedure to reconstruct the hymen, performed with full patient privacy.",
        image: "/images/hero/hymenoplasty-hero.png",
        href: "/cosmetic-gynecology/hymenoplasty",
    },
    {
        name: "Vaginal Tightening Surgery",
        description: "Surgical tightening to restore muscle tone and address laxity, commonly sought after childbirth.",
        image: "/images/hero/vaginal-tightening-hero.png",
        href: "/cosmetic-gynecology/vaginal-tightening",
    },
    {
        name: "Clitoral Hood Reduction",
        description: "Reducing excess tissue around the clitoral hood to improve comfort and appearance.",
        image: "/images/hero/clitoral-hood-reduction-hero.png",
        href: "/cosmetic-gynecology/clitoral-hood-reduction",
    },
    {
        name: "Designer Vagina",
        description: "A customised combination of aesthetic procedures — labia contouring, pubic lift and more — tailored to your goals.",
        image: "/images/hero/designer-vagina-hero.png",
        href: "/cosmetic-gynecology/designer-vagina",
    },
    {
        name: "O-Shot",
        description: "A non-surgical PRP treatment aimed at improving intimate sensation and wellness.",
        image: "/images/hero/o-shot-hero.png",
        href: "/cosmetic-gynecology/o-shot",
    },
    {
        name: "G-Shot",
        description: "A non-surgical injectable treatment designed to enhance sensation and intimate comfort.",
        image: "/images/hero/g-shot-hero.png",
        href: "/cosmetic-gynecology/g-shot",
    },
    {
        name: "Tummy Tuck",
        description: "Abdominal contouring that's often combined with other cosmetic gynaecology procedures for a fuller result.",
        image: "/images/hero/tummy-tuck-hero.png",
        href: "/cosmetic-gynecology/tummy-tuck",
    },
]

export const cosmeticGynecologyTrust: IconItem[] = [
    { icon: Lock, title: "Complete confidentiality", description: "Every consultation and procedure is handled with full discretion, in a private, judgement-free environment." },
    { icon: Stethoscope, title: "Specialist-certified surgeon", description: "Dr. Shaivalini holds certifications in cosmetic gynaecology from international training programmes, not general gynaecology alone." },
    { icon: HeartHandshake, title: "Personalised treatment plans", description: "No standard packages — your goals, anatomy and health history shape the procedure recommended to you." },
    { icon: ShieldCheck, title: "Advanced, minimally invasive techniques", description: "Surgical and non-surgical laser options are available, chosen based on what will give you the safest, most comfortable outcome." },
]

export const cosmeticGynecologyFaqs: FaqItem[] = [
    {
        question: "Is cosmetic gynaecology safe?",
        answer: "Yes, when performed by a qualified, specifically trained specialist. Dr. Shaivalini is certified in cosmetic gynaecology internationally, and every procedure is carried out at AMVI's fully equipped facility with the same safety standards as any other surgery.",
    },
    {
        question: "Will these procedures affect sensation?",
        answer: "Procedures are planned specifically to preserve or improve sensation and function, not just appearance. This is discussed individually during your consultation, based on the procedure you're considering.",
    },
    {
        question: "How much privacy can I expect?",
        answer: "Complete privacy. Consultations are conducted one-on-one, records are kept strictly confidential, and appointments can be scheduled at times that suit your comfort.",
    },
    {
        question: "What's the recovery time for cosmetic gynaecology procedures?",
        answer: "This varies by procedure — non-surgical treatments like the O-Shot or G-Shot typically involve no downtime, while surgical procedures like vaginal reconstruction may need 2–4 weeks of recovery. Dr. Shaivalini will give you a specific timeline during consultation.",
    },
    {
        question: "Is there an age requirement for these procedures?",
        answer: "Most cosmetic gynaecology procedures are intended for adult women. Your suitability is assessed individually based on your health, goals and anatomy during consultation.",
    },
    {
        question: "Can these procedures be combined?",
        answer: "Yes — many patients combine procedures such as labial reconstruction with vaginal tightening, or a tummy tuck alongside other treatments, in a single planned surgery. This is discussed and planned during your consultation.",
    },
    {
        question: "How do I book a confidential consultation?",
        answer: "Call +91-91000 09669 (Puppalaguda) or +91-80088 42200 (Attapur), or book online. All cosmetic gynaecology consultations at AMVI Hospitals are private and confidential from the first call.",
    },
]
