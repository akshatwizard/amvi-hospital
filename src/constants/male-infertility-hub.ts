import { Pill, Syringe, Wrench, FlaskConical } from "lucide-react"
import { Condition } from "@/types/condition"
import { IconItem, FaqItem } from "@/types/condition-page"

export const maleInfertilityIntro: string[] = [
    "Male fertility issues are responsible for around 40% of infertility cases — far more common than most couples realise, and far more treatable too. At AMVI Hospitals, Dr. Shaivalini Kamarapu evaluates both partners together, because fertility is a shared journey, not a one-sided investigation.",
    "A simple semen analysis is usually the starting point, and it can rule in or rule out a male factor within a day. Whether the right path turns out to be a lifestyle change, medication, IUI, or ICSI, there's an effective option available for almost every case of male infertility.",
]

export const maleInfertilityConditions: Condition[] = [
    {
        name: "Oligospermia (Low Sperm Count)",
        description: "A lower-than-average sperm count that can still allow natural conception, or respond well to treatment.",
        image: "/images/infertility/oligospermia-overview.png",
        href: "/infertility/male/oligospermia",
    },
    {
        name: "Asthenospermia (Low Sperm Motility)",
        description: "Reduced sperm movement, which can make it harder for sperm to reach and fertilise the egg naturally.",
        image: "/images/infertility/asthenospermia-overview.png",
        href: "/infertility/male/asthenospermia",
    },
    {
        name: "Azoospermia (Zero Sperm Count)",
        description: "The complete absence of sperm in semen — evaluated to distinguish obstructive from non-obstructive causes.",
        image: "/images/infertility/azoospermia-overview.png",
        href: "/infertility/male/azoospermia",
    },
    {
        name: "Varicocele",
        description: "Enlarged veins in the scrotum, one of the most common — and most treatable — causes of male infertility.",
        image: "/images/infertility/varicocele-overview.png",
        href: "/infertility/male/varicocele",
    },
    {
        name: "Erectile Dysfunction",
        description: "Difficulty achieving or maintaining an erection, which can be medical, psychological, or both in origin.",
        image: "/images/infertility/erectile-dysfunction-overview.png",
        href: "/infertility/male/erectile-dysfunction",
    },
]

export const maleInfertilitySigns: string[] = [
    "You and your partner have been trying to conceive for over 12 months without success",
    "No sperm found in semen after ejaculation — this needs urgent evaluation",
    "A history of undescended testicles, testicular injury, or surgery in that area",
    "Previous cancer treatment — chemotherapy or radiotherapy can affect sperm production",
    "Known hormonal issues, such as low testosterone",
    "A visible or felt swelling in the scrotum (possible varicocele)",
    "Difficulty with erections or ejaculation",
    "A family history of fertility problems",
]

export const maleInfertilityTreatments: IconItem[] = [
    { icon: Pill, title: "Medications", description: "Hormonal treatment for underlying imbalances, or antioxidant therapy to improve sperm quality." },
    { icon: Wrench, title: "Varicocele repair", description: "Surgical or microsurgical correction to improve sperm count and quality where a varicocele is the cause." },
    { icon: Syringe, title: "IUI", description: "Prepared sperm placed directly into the uterus — suitable for mild male-factor infertility." },
    { icon: FlaskConical, title: "IVF with ICSI", description: "A single healthy sperm injected directly into each egg — the most effective option for severe male infertility, even with very low counts." },
]

export const maleInfertilityFaqs: FaqItem[] = [
    {
        question: "How common is male infertility?",
        answer: "Male factors are involved in around 40% of infertility cases — either alone or alongside a female factor. It's far more common than most couples expect, and a semen analysis is a quick way to check.",
    },
    {
        question: "What's the first test for male infertility?",
        answer: "A semen analysis — checking sperm count, motility, and morphology. It takes about 30 minutes to produce a sample and can give answers that shape the entire treatment plan.",
    },
    {
        question: "Can male infertility be treated without IVF?",
        answer: "Often, yes. Lifestyle changes, medication, or varicocele repair can resolve milder cases. IUI is an option for mild male-factor infertility. IVF with ICSI is typically reserved for more severe cases.",
    },
    {
        question: "What is ICSI and when is it recommended?",
        answer: "ICSI (Intracytoplasmic Sperm Injection) involves injecting a single healthy sperm directly into a mature egg under a microscope, bypassing natural fertilisation barriers. It's recommended when sperm count, motility, or quality is significantly affecting the chances of standard IVF working.",
    },
    {
        question: "Does azoospermia mean I can never have biological children?",
        answer: "Not necessarily. In many cases of azoospermia, sperm can still be surgically retrieved directly from the testicle or epididymis (TESA/PESA) and used for ICSI — this has helped many men with azoospermia achieve biological parenthood.",
    },
    {
        question: "How long does it take to see results from male infertility treatment?",
        answer: "This depends on the cause. Lifestyle changes and medication may take 2–3 months to show a measurable improvement in semen parameters (sperm takes about 74 days to mature), while surgical or assisted reproduction options work on a different, procedure-specific timeline.",
    },
    {
        question: "What lifestyle factors affect male fertility?",
        answer: "Smoking, excessive alcohol, obesity, prolonged heat exposure (hot tubs, saunas, laptops on the lap), and high stress can all reduce sperm count and quality. Maintaining a healthy weight and stopping smoking are two of the most impactful changes.",
    },
    {
        question: "Should both partners be tested together?",
        answer: "Yes — at AMVI Hospitals, Dr. Shaivalini evaluates both partners simultaneously. Since infertility can involve either partner or both, testing together avoids delays and gives a complete picture from the start.",
    },
]
