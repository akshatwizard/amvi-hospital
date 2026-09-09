import { Microscope, Syringe, HeartPulse, HeartHandshake, Activity, ShieldAlert, Users, AlertTriangle, Wallet, Baby } from "lucide-react"
import { IconItem, NamedGroup, ComparisonTable, DiagnosisStep, FaqItem } from "@/types/condition-page"

export const icsiIntro: string =
    "ICSI (Intracytoplasmic Sperm Injection) is an advanced fertility treatment offered at AMVI Hospitals, Hyderabad, specifically designed for couples facing severe male infertility. In ICSI, a single healthy sperm is directly injected into a mature egg under high-powered microscopy — bypassing all natural fertilization barriers. This procedure has helped over 1,000 couples at AMVI Hospitals achieve successful pregnancies, including many where conventional IVF had not been possible due to male factor issues."

export const icsiConditionsIntro: string =
    "ICSI is the primary treatment recommended when male infertility is the main barrier to conception. Conditions we treat with ICSI include:"

export const icsiConditions: string[] = [
    "Azoospermia — no sperm in the ejaculate (sperm retrieved surgically via TESA/PESA)",
    "Severe oligospermia — very low sperm count",
    "Asthenospermia — poor sperm motility",
    "Teratospermia — poor sperm morphology (abnormal shape)",
    "Previous failed fertilisation with conventional IVF",
    "Sperm DNA fragmentation",
]

export const icsiConditionsOutro: string =
    "A semen analysis is the first step in diagnosing male infertility. If results indicate severe issues, Dr. Shaivalini will recommend ICSI as part of your treatment plan. In cases of azoospermia, sperm can often be retrieved surgically — even with zero sperm in the ejaculate, ICSI may still be possible."

export const icsiVsIvfTable: ComparisonTable = {
    columns: ["Aspect", "Standard IVF", "ICSI"],
    rows: [
        ["Fertilisation Process", "Eggs and sperm are placed together in a dish; fertilisation occurs naturally", "A single sperm is directly injected into each egg using a microscopic needle"],
        ["Technique Complexity", "Less complex", "More advanced and precise procedure"],
        ["When It's Recommended", "General infertility cases", "Severe male infertility, low sperm count, or fertilisation issues"],
        ["Sperm Function", "Sperm must penetrate the egg on its own", "Embryologist assists sperm to fertilise the egg"],
        ["Use in Previous Failures", "Not specifically for failed cycles", "Recommended if previous IVF had poor or zero fertilisation"],
        ["Surgical Sperm Retrieval Cases", "Not typically required", "Used when sperm is surgically retrieved"],
    ],
}

export const icsiBeforeGroups: NamedGroup[] = [
    {
        heading: "Fertility Evaluation",
        items: [
            "Detailed discussion of the couple's medical and reproductive history",
            "Complete health check-up for both partners",
            "Semen analysis for the male partner to assess sperm count, movement, and shape",
            "Hormone tests and ultrasound for the female partner to evaluate ovarian reserve and uterine health",
        ],
    },
    {
        heading: "Preparation & Counseling",
        items: [
            "Clear explanation of the ICSI procedure, success rates, and expectations",
            "Emotional and psychological support for the couple",
            "Guidance on lifestyle improvements such as a healthy diet, regular exercise, and avoiding smoking or alcohol to enhance treatment outcomes",
        ],
    },
]

export const icsiProcess: DiagnosisStep[] = [
    { title: "Egg Retrieval", description: "After ovarian stimulation, eggs are collected from the ovaries using a minimally invasive ultrasound-guided procedure performed under sedation. The retrieved eggs are carefully examined by an embryologist, and only mature, high-quality eggs are selected for ICSI." },
    { title: "Sperm Preparation", description: "On the same day, a semen sample is collected, or previously frozen or surgically retrieved sperm is used. The sample is processed in the laboratory to select the healthiest and most active sperm for fertilization." },
    { title: "Intracytoplasmic Sperm Injection (ICSI)", description: "Using advanced microscopic equipment, an expert embryologist injects a single selected sperm directly into each mature egg. The injected eggs are then kept in a controlled laboratory environment to allow fertilization to occur." },
    { title: "Embryo Development & Transfer", description: "Fertilized eggs are monitored as they develop into embryos. The best-quality embryos are chosen and gently transferred into the uterus after 3–5 days. Medications may be prescribed to support implantation." },
    { title: "Follow-Up", description: "A pregnancy test is done about two weeks after embryo transfer. If positive, AMVI Hospital provides ongoing care and monitoring to support a healthy pregnancy." },
]

export const icsiAfterCare: IconItem[] = [
    { icon: Microscope, title: "Embryo Development & Selection", description: "After fertilization, embryos are carefully monitored in the laboratory for 3 to 5 days to track healthy growth. The best-quality embryos are selected for transfer, while additional suitable embryos may be preserved through freezing for future use." },
    { icon: Syringe, title: "Embryo Transfer & Uterine Support", description: "The selected embryos are gently transferred into the uterus using a thin catheter under ultrasound guidance. To support implantation, hormone medications such as progesterone are prescribed to strengthen the uterine lining." },
    { icon: HeartPulse, title: "Post-Transfer Care & Pregnancy Testing", description: "Patients are advised to take adequate rest after the transfer, with regular blood tests or scans to monitor hormone levels. A pregnancy test is performed about two weeks later to confirm the outcome." },
    { icon: HeartHandshake, title: "Follow-Up & Emotional Support", description: "If the result is positive, AMVI Hospital provides ongoing prenatal monitoring and care. If not, fertility specialists offer guidance on the next steps. Emotional support and counseling are available throughout the journey." },
]

export const icsiTechnicalTable: ComparisonTable = {
    columns: ["Aspect", "IVF", "ICSI"],
    rows: [
        ["Number of Sperm Needed", "50,000–100,000 sperms per egg", "Only one sperm per egg"],
        ["Fertilization Method", "Sperm fertilizes the egg naturally in a lab dish", "Sperm is directly injected into the egg"],
        ["Technology Used", "Standard IVF laboratory setup", "Advanced micromanipulator machine"],
        ["Best Suited For", "Normal or mild male infertility", "Severe male infertility, low sperm count or motility"],
        ["Fertilization Control", "Less control over fertilization", "High precision and controlled fertilization"],
        ["Risk of Fertilization Failure", "Slightly higher in male factor cases", "Significantly reduced"],
        ["Use After IVF Failure", "Not always effective", "Commonly recommended after IVF failure"],
    ],
}

export const icsiWarningSigns: DiagnosisStep[] = [
    { title: "Medication Concerns", description: "If you experience side effects, miss a dose, or have any questions related to fertility medications, contact your care team." },
    { title: "Sudden Health Changes", description: "Contact the doctor immediately in case of severe abdominal pain, heavy vaginal bleeding, dizziness, or signs of infection." },
    { title: "After Egg Retrieval", description: "Seek medical attention if you have intense pain, persistent bloating, heavy bleeding, or fever." },
    { title: "After Embryo Transfer", description: "Inform your doctor if you notice severe cramps, heavy bleeding, or high temperature." },
    { title: "Positive Pregnancy Test", description: "Get in touch with AMVI Hospital for further guidance and pregnancy monitoring." },
    { title: "Emotional Well-being", description: "If you feel anxious, overwhelmed, or emotionally stressed, AMVI Hospital offers support and counseling to help you through your fertility journey." },
]

export const icsiRisks: IconItem[] = [
    { icon: Activity, title: "Ovarian Hyperstimulation (OHSS)", description: "Fertility medicines may cause temporary ovarian discomfort, which is closely monitored and managed." },
    { icon: ShieldAlert, title: "Infection Risk", description: "A rare risk during egg retrieval, minimized through strict safety and hygiene protocols." },
    { icon: Users, title: "Multiple Pregnancy", description: "ICSI can increase the chance of twins, which may carry higher pregnancy-related risks." },
    { icon: AlertTriangle, title: "Birth Defects", description: "The risk is slightly higher than natural conception, but overall remains low." },
    { icon: Wallet, title: "Emotional & Financial Stress", description: "ICSI treatment can be demanding, requiring emotional and financial preparedness." },
    { icon: Baby, title: "Long-Term Child Health", description: "Most children conceived through ICSI have normal growth and healthy development." },
]

export const icsiFaqs: FaqItem[] = [
    { question: "What is the difference between ICSI and IVF?", answer: "In IVF, eggs and sperm are placed together to fertilise naturally. In ICSI, a single sperm is injected directly into each egg. ICSI is used when sperm cannot fertilise an egg on its own — typically due to low sperm count, poor motility or poor morphology." },
    { question: "Is ICSI more successful than IVF?", answer: "For couples with male factor infertility, ICSI significantly improves fertilization rates compared to standard IVF. For couples with no male factor issues, success rates are broadly similar. ICSI is recommended specifically when there is a known sperm problem." },
    { question: "Is ICSI painful for the woman?", answer: "The ICSI procedure itself is performed in the lab — the woman's experience is identical to IVF. The egg retrieval is done under light sedation, so there is no pain during the procedure. Some bloating and mild discomfort after retrieval is normal and resolves quickly." },
    { question: "Can ICSI work with zero sperm count (azoospermia)?", answer: "Yes — in many cases of azoospermia, sperm can be surgically retrieved from the testicle or epididymis via TESA (Testicular Sperm Aspiration) or PESA (Percutaneous Epididymal Sperm Aspiration). These retrieved sperm can then be used for ICSI. Dr. Shaivalini will assess your case to determine if this is an option." },
    { question: "What is the cost of ICSI in Hyderabad?", answer: "ICSI is typically performed as part of an IVF cycle, with an additional charge for the ICSI procedure itself. The total cost varies based on the protocol and number of eggs. AMVI Hospitals provides a detailed cost breakdown before treatment begins." },
]