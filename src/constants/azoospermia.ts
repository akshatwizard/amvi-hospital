import { CalendarX, Droplet, AlertTriangle, Activity, HeartPulse, Dna, Pill, Syringe, Scissors, Wrench, FlaskConical } from "lucide-react"
import { IconItem, DiagnosisStep, FaqItem } from "@/types/condition-page"

export const azooIntro: string[] = [
    "Azoospermia is a condition in which no sperm is present in the semen — a significant cause of male infertility, usually confirmed through detailed semen analysis. Couples are generally advised to seek evaluation after a year of regular, unprotected intercourse without conceiving, since infertility can involve either partner, or both.",
    "Male factors are estimated to contribute to a substantial share of infertility cases overall, and azoospermia is one of the key contributors among them. While a diagnosis can feel overwhelming, modern diagnostic methods and treatment options mean many men with azoospermia go on to achieve biological parenthood.",
]

export const azooSymptoms: IconItem[] = [
    { icon: CalendarX, title: "Infertility", description: "Difficulty achieving pregnancy despite regular, unprotected intercourse is the most common sign." },
    { icon: Droplet, title: "Normal-looking semen", description: "Semen volume and appearance can look entirely normal even when lab testing reveals zero sperm count." },
    { icon: AlertTriangle, title: "Testicular pain or swelling", description: "Discomfort in the testicles or scrotum can point to infection, blockage, or a sperm-production problem." },
    { icon: Activity, title: "Hormonal imbalance symptoms", description: "Breast enlargement, reduced facial or body hair, or fatigue can stem from low testosterone." },
    { icon: HeartPulse, title: "Sexual dysfunction", description: "Reduced libido, erectile dysfunction, or ejaculation issues may be linked to hormonal or reproductive disorders." },
    { icon: Dna, title: "Abnormal testicular development", description: "Small, firm, or undescended testicles can be associated with conditions that affect sperm production." },
]

export const azooObstructiveCauses: string[] = [
    "Vasectomy — a permanent birth control procedure cutting or sealing the vas deferens",
    "Congenital absence of the vas deferens — a birth defect missing the sperm-transport tubes",
    "Infections — STIs or other reproductive tract infections causing inflammation or scarring",
    "Post-surgical scarring from previous groin, testicular, or prostate surgery",
]

export const azooNonObstructiveCauses: string[] = [
    "Genetic conditions — Klinefelter syndrome or Y-chromosome abnormalities affecting sperm development",
    "Hormonal imbalances from pituitary or hypothalamus dysfunction",
    "Testicular damage from injury, mumps, cancer, chemotherapy, or radiation",
    "Environmental & lifestyle factors — long-term chemical exposure, excessive heat, smoking, or radiation",
]

export const azooDiagnosis: DiagnosisStep[] = [
    { title: "Semen analysis (spermogram)", description: "The ejaculate is examined under a microscope against WHO reference standards. If no sperm is detected, the sample is centrifuged to confirm complete absence." },
    { title: "Repeat semen testing", description: "Since sperm production takes about 72 days, two to three semen analyses are done roughly three months apart before azoospermia is confirmed." },
    { title: "Clinical examination", description: "A physical exam assesses testicular size and volume, the epididymis and vas deferens, and any signs of blockage or abnormality." },
    { title: "Hormonal evaluation", description: "Blood tests measure FSH, testosterone, thyroid hormones, and prolactin — high FSH can suggest testicular failure, while low FSH points toward pituitary dysfunction." },
    { title: "Imaging & laboratory tests", description: "Seminal fluid biochemistry, scrotal ultrasound, infection screening, and pituitary MRI or X-ray (if hormonal results suggest it) help pinpoint structural causes." },
    { title: "Genetic testing & testicular biopsy", description: "If no obstruction is found, genetic testing and karyotyping check for chromosomal causes, and a testicular biopsy under local anaesthesia can assess sperm production directly in the tissue." },
]

export const azooTreatments: IconItem[] = [
    { icon: Pill, title: "Hormonal treatment", description: "For hormone-related azoospermia, medication is given for at least three months. In selected patients, natural sperm production can restart, sometimes allowing natural conception; any sperm that appears can also be frozen." },
    { icon: Syringe, title: "Treatment for infection", description: "Infections affecting sperm flow or production are identified through history, exam, and semen culture, then treated with a targeted course of antibiotics based on sensitivity testing." },
    { icon: Scissors, title: "Surgical treatment for blockage", description: "Microsurgery may be considered for vas deferens blockages — outcomes depend on the location and severity, and men who've had a vasectomy often respond particularly well." },
    { icon: Activity, title: "Varicocele treatment", description: "Varicocele rarely causes complete azoospermia on its own, but surgical correction in carefully selected patients may improve testicular function and sperm recovery chances." },
    { icon: Wrench, title: "Testicular fixation surgery", description: "For undescended testicles, early fixation in childhood helps preserve fertility — the same surgery performed in adulthood generally has limited benefit." },
    { icon: FlaskConical, title: "Sperm retrieval with IVF–ICSI", description: "If sperm exists in the testicles but not in semen, it can be retrieved via a minor procedure under local anaesthesia, then frozen and used for fertilisation via ICSI." },
]

export const azooSuccessNote: string =
    "Published research on ICSI using surgically retrieved testicular sperm reports pregnancy success rates in the range of roughly 55–60% per treatment cycle when healthy eggs are available — comparable to results seen with ejaculated sperm in many cases. Actual outcomes vary based on the woman's age, egg quality, embryo development, and the couple's overall fertility health, and any centre-specific results should be discussed directly with your treating team."

export const azooFaqs: FaqItem[] = [
    { question: "Can azoospermia be confirmed without visiting a hospital?", answer: "No — it can only be diagnosed through laboratory testing of semen samples. Home testing methods can't accurately detect a complete absence of sperm." },
    { question: "Does azoospermia mean permanent infertility?", answer: "Not always. Many men with azoospermia can still become fathers with proper evaluation and the right treatment approach, depending on the underlying cause." },
    { question: "Can daily habits influence treatment results?", answer: "Yes — balanced nutrition, stress management, avoiding tobacco and alcohol, good sleep, and limiting heat exposure can all support treatment outcomes." },
    { question: "Why is genetic evaluation advised in some cases?", answer: "It helps identify inherited conditions affecting sperm production, which guides treatment choices and future reproductive planning." },
    { question: "How often are patients reviewed during treatment?", answer: "Follow-up schedules vary by patient, but regular monitoring every few weeks is typical to track progress and adjust treatment if needed." },
    { question: "Can azoospermia be linked to other health issues?", answer: "In some men, it's associated with hormonal disturbances or developmental conditions that can also affect sexual health or general wellbeing." },
    { question: "How does azoospermia affect mental and emotional health?", answer: "A diagnosis can be emotionally difficult and may bring anxiety or distress — counselling and supportive care can help couples manage this." },
    { question: "What fertility services are available for azoospermia?", answer: "Comprehensive diagnostic testing, sperm retrieval procedures, and assisted reproductive treatments including IVF with ICSI." },
    { question: "What determines treatment success?", answer: "Sperm availability, the female partner's age, egg quality, embryo development, and overall reproductive health all play a role." },
    { question: "Are newer treatment methods improving outcomes?", answer: "Yes — advances in microsurgery, lab techniques, and sperm selection continue to improve success rates for men with azoospermia." },
    { question: "How can I book a consultation at AMVI Hospital?", answer: "You can schedule a consultation at either the Attapur or Puppalaguda branch by contacting the hospital directly, and it helps to bring any previous fertility records." },
]