import { FlaskConical, Microscope, Target } from "lucide-react"
import { IconItem, DiagnosisStep, Testimonial, FaqItem } from "@/types/condition-page"

export const picsiIntro: string[] = [
    "PICSI (Physiological Intracytoplasmic Sperm Injection) is an advanced fertility technique designed to improve IVF success by selecting healthier, more mature sperm. It closely mimics natural fertilisation by allowing sperm to bind to hyaluronan — the same substance naturally found around a human egg.",
    "Unlike standard ICSI, where sperm selection relies mainly on how sperm look and move under a microscope, PICSI focuses on biological maturity and DNA integrity. Only sperm capable of binding to hyaluronan are chosen, aiming to improve the odds of successful fertilisation and healthy embryo development.",
]

export const picsiPrinciple: string[] = [
    "Hyaluronic acid is a natural component of the egg's outer layer",
    "Only mature sperm carry the receptors needed to bind to hyaluronic acid",
    "This binding process occurs naturally during fertilisation",
    "In PICSI, sperm are placed in a hyaluronic acid–coated dish",
    "Sperm that successfully bind are selected for fertilisation",
    "The selected sperm are then injected into the egg using the ICSI technique",
    "Hyaluronic acid–bound sperm tend to show better morphology, stronger DNA integrity, and fewer chromosomal abnormalities",
]

export const picsiWhoNeedsIt: string[] = [
    "High sperm DNA fragmentation (high DFI)",
    "Women above 38 years of age",
    "Previous failed ICSI cycles",
    "Poor embryo quality",
    "History of recurrent miscarriages",
    "Male factor infertility with low sperm quality",
    "Low sperm motility or abnormal sperm morphology",
]

export const picsiProcedure: DiagnosisStep[] = [
    { title: "Preparation of the PICSI dish", description: "A special dish coated with hyaluronan — mimicking the natural layer around the egg — is prepared using ready-to-use dishes common in modern labs." },
    { title: "Semen sample collection", description: "A semen sample is collected from the male partner and processed to separate healthy sperm from other components." },
    { title: "Sperm binding process", description: "The prepared sperm sample is placed onto the hyaluronan-coated dish, where only mature, functionally healthy sperm bind to the surface." },
    { title: "Selection of healthy sperm", description: "Sperm bound to the hyaluronan are identified under a microscope as the higher-quality candidates." },
    { title: "Sperm injection", description: "The selected sperm are individually injected into the egg using the ICSI technique to achieve fertilisation." },
]

export const picsiComparison: IconItem[] = [
    { icon: FlaskConical, title: "IVF", description: "Fertilisation happens naturally by placing eggs and sperm together in a lab dish." },
    { icon: Microscope, title: "ICSI", description: "A single sperm is selected by appearance and movement, then injected directly into the egg." },
    { icon: Target, title: "PICSI", description: "An advanced form of ICSI where sperm are first tested for natural hyaluronan-binding ability before injection, as a marker of maturity and quality." },
]

export const picsiSuccessNote: string =
    "Some clinical research suggests PICSI can improve embryo quality and reduce miscarriage risk in select cases — particularly where male factor infertility or high sperm DNA fragmentation is involved — by favouring sperm with more intact DNA. Evidence on how much it improves outcomes across all patients is still evolving, so whether it's likely to help in your specific case is best discussed directly with your fertility specialist."

// Real testimonials from amvihospitals.com/physiological-intracytoplasmic-sperm-injection, paraphrased
export const picsiTestimonials: Testimonial[] = [
    { quote: "Chose PICSI at the Attapur centre and found the whole process genuinely reassuring — every step was explained clearly and patiently.", name: "Anjali R" },
    { quote: "Our PICSI treatment at the Puppalaguda branch was handled with real care, with transparent counselling tailored to our specific situation.", name: "Suresh & Kavya M" },
    { quote: "Felt well supported throughout PICSI at the Attapur centre — everything was explained calmly and professionally.", name: "Neha P." },
    { quote: "After a previous IVF failure, we tried PICSI at Puppalaguda, and the personalised approach gave us real renewed confidence.", name: "Rahul & Sneha K" },
    { quote: "A smooth, well-organised PICSI experience at Attapur, with the team patiently answering every question we had.", name: "Pooja S" },
]

export const picsiFaqs: FaqItem[] = [
    { question: "What scientific support exists for PICSI?", answer: "Research suggests PICSI can enhance embryo quality and improve pregnancy outcomes in some cases by selecting sperm with better maturity and genetic stability, particularly in male infertility cases." },
    { question: "Is PICSI a safe fertility technique?", answer: "Yes — it follows the same core steps as ICSI, with an added sperm-selection step, and doesn't carry extra risk to the egg or embryo." },
    { question: "How is PICSI different from IVF and ICSI?", answer: "IVF lets fertilisation happen naturally in a dish; ICSI injects a single selected sperm directly into the egg; PICSI adds a hyaluronan-binding selection step to ICSI to favour more mature sperm." },
    { question: "What does PICSI cost?", answer: "Cost depends on your individual treatment plan and whether it's combined with IVF or ICSI — detailed pricing is shared during your fertility consultation." },
    { question: "Can PICSI reduce sperm DNA fragmentation impact?", answer: "It can help in cases with high DNA fragmentation, since it allows embryologists to choose sperm with more intact genetic material." },
    { question: "How much time does the PICSI process take?", answer: "Sperm selection is completed the same day as egg retrieval and fertilisation, so it doesn't meaningfully extend the treatment timeline." },
    { question: "Are there added risks with PICSI?", answer: "No additional risks beyond standard ICSI when performed by trained fertility specialists." },
    { question: "Can PICSI be combined with other fertility treatments?", answer: "Yes — it's often used alongside IVF or ICSI as part of a broader treatment plan based on medical advice." },
    { question: "What lifestyle habits support better PICSI outcomes?", answer: "Balanced nutrition, regular exercise, avoiding tobacco and alcohol, managing stress, and following your doctor's guidance can all support treatment success." },
    { question: "What happens after the PICSI procedure?", answer: "Embryos are monitored for growth and development, followed by embryo transfer, a pregnancy test, and ongoing follow-up care." },
    { question: "How can I book a PICSI consultation at AMVI Hospital?", answer: "You can schedule a consultation at either the Attapur or Puppalaguda branch by contacting the hospital directly, and it helps to bring any previous fertility records." },
]