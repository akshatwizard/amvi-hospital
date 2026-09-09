import { UserRound, Stethoscope, Pill, Microscope, RotateCcw, HeartPulse } from "lucide-react"
import { NamedGroup, ComparisonTable, DiagnosisStep, IconItem, Testimonial, FaqItem } from "@/types/condition-page"

export const iuiIntro: string[] = [
    "Intrauterine Insemination (IUI) is a fertility treatment in which specially prepared, healthy sperm are placed directly into a woman's uterus at the time of ovulation, when the egg is released. The aim of this procedure is to increase the chances of pregnancy by bringing the sperm closer to the egg.",
    "In IUI, the sperm bypasses the cervix and is introduced straight into the uterus, reducing the distance it needs to travel. This helps the sperm reach the fallopian tubes more easily, where fertilization normally takes place, thereby improving the likelihood of successful conception.",
    "AMVI Hospitals offers affordable IUI treatment in Hyderabad led by Dr. Shaivalini Kamarapu — a fertility specialist with over 20 years of experience. IUI is one of the most commonly recommended first-line fertility treatments, offering a less invasive and more affordable alternative to IVF for couples with mild infertility challenges. Our IUI programme is available at both our Puppalaguda and Attapur branches.",
]

export const iuiVsIvfTable: ComparisonTable = {
    columns: ["Aspect", "IUI", "IVF"],
    rows: [
        ["Procedure Type", "Simple and less invasive", "Advanced and more complex"],
        ["Process", "Prepared sperm is placed directly into the uterus during ovulation", "Eggs are retrieved, fertilised in a lab, and embryos are transferred to the uterus"],
        ["Medical Involvement", "Minimal", "High (includes ovarian stimulation, egg retrieval, lab fertilisation)"],
        ["Best Suited For", "Unexplained infertility, mild male factor infertility, PCOS cases", "Blocked fallopian tubes, severe male infertility, multiple failed IUI cycles"],
        ["Success Rate", "Lower per cycle", "Higher per cycle"],
        ["Cost", "More affordable", "More expensive"],
        ["Time & Effort", "Less time-consuming", "Requires more time and monitoring"],
        ["Invasiveness", "Less invasive", "More invasive"],
    ],
}

export const iuiTypesIntro: string =
    "There are two main types of Intrauterine Insemination: Natural IUI and Medicated IUI. The choice depends on individual fertility needs, medical history, and the recommendation of the fertility specialist."

export const iuiTypes: NamedGroup[] = [
    {
        heading: "Natural IUI",
        items: [
            "Performed without the use of fertility medications",
            "The woman's natural menstrual cycle is closely monitored",
            "Ovulation is identified through ultrasound or hormonal tracking",
            "Sperm is inseminated at the time of natural egg release",
            "Suitable for women with regular cycles and normal ovulation",
        ],
    },
    {
        heading: "Medicated IUI",
        items: [
            "Fertility medications are used to stimulate the ovaries",
            "Helps in the development of one or more eggs",
            "Regular ultrasound and hormone monitoring are required",
            "Insemination is timed after ovulation is triggered",
            "Recommended for ovulation disorders, unexplained infertility, or low chances of natural conception",
        ],
    },
]

export const iuiCandidates: string[] = [
    "Unexplained infertility (no clear cause found after testing)",
    "Mild male factor infertility (low sperm count or motility)",
    "PCOS-related infertility (especially with ovulation induction)",
    "Cervical mucus problems affecting sperm movement",
    "Single women or same-sex couples using donor sperm",
]

export const iuiNotRecommendedNote: string =
    "IUI is generally not recommended when fallopian tubes are blocked, when there is severe male factor infertility, or when previous IUI cycles have not resulted in pregnancy — in these cases, IVF or ICSI is the more appropriate treatment."

export const iuiBeneficiaryGroups: NamedGroup[] = [
    {
        heading: "Male-related conditions",
        items: [
            "Reduced sperm count or quality",
            "Poor sperm movement or abnormal sperm shape",
            "Low semen volume or thick semen affecting sperm transport",
            "Ejaculation-related issues, including retrograde ejaculation",
            "Use of frozen or donor sperm",
            "Difficulty with timed intercourse due to work schedules, stress, or performance issues",
        ],
    },
    {
        heading: "Female-related conditions",
        items: [
            "Cervical factors that prevent sperm from entering the uterus",
            "Poor-quality or insufficient cervical mucus",
            "Ovulation-related problems or irregular cycles",
            "Mild anatomical variations of the reproductive tract",
            "Hormonal imbalances affecting egg release",
        ],
    },
    {
        heading: "Other situations",
        items: [
            "Couples with unexplained infertility where routine tests are normal",
            "Couples looking to enhance pregnancy chances with assisted fertility care",
        ],
    },
]

export const iuiFemaleProcess: string[] = [
    "Ovulation stimulation is achieved using oral medicines or injectable hormones to promote the development of one or more healthy eggs.",
    "Follicular growth is monitored using Transvaginal Sonography (TVS) at regular intervals.",
    "Once follicles reach optimal size, an hCG trigger injection is given to ensure final egg maturation and release.",
    "A washed and prepared sperm sample is placed directly into the uterus during the IUI procedure.",
    "IUI is a simple, safe, and non-surgical fertility treatment.",
    "The patient is advised to rest for about 10 minutes, after which she may continue routine activities, including work and travel.",
    "There are no restrictions on intercourse during the same cycle unless specifically advised by the fertility specialist.",
]

export const iuiMaleProcess: string[] = [
    "The husband's semen sample is usually collected on the day of the IUI procedure.",
    "Semen can be provided 1–2 hours before insemination or earlier in the day as per convenience.",
    "Semen collection is typically done at the hospital; however, home collection with proper transport is also allowed when advised.",
    "Frozen semen may be used if the male partner is unavailable on the day of IUI or has difficulty producing a sample on demand.",
    "Semen freezing is recommended for men undergoing medical or surgical treatments that may affect sperm quality in the future.",
    "Cryoaccumulation, where multiple semen samples are frozen and later used together, may be advised in cases of low sperm count or motility.",
    "Frozen semen can be safely preserved and used after days, months, or even years.",
]

export const iuiSemenWashingIntro: string =
    "Before insemination, the semen sample undergoes a specialised sperm washing procedure in our advanced fertility laboratory. Semen contains various substances other than sperm, which must be removed before placing sperm into the uterus. The sperm wash process helps:"

export const iuiSemenWashingSteps: string[] = [
    "Separate healthy, motile, and morphologically normal sperm",
    "Remove debris, dead sperm, and unwanted seminal fluid",
    "Achieve sperm capacitation, which is essential for fertilization",
]

export const iuiSemenWashingOutro: string =
    "The sperm preparation technique is selected based on individual semen parameters to ensure optimal results."

export const iuiInseminationProcess: string =
    "Insemination is a quick and straightforward procedure performed under sterile conditions at AMVI Hospital. The patient is comfortably positioned, and the cervix is gently accessed using a specialized instrument. A soft, thin cannula is then carefully passed through the cervix, and the prepared sperm sample is slowly placed directly into the uterus. The entire process is safe, painless, and completed within a few minutes."

export const iuiMedications: DiagnosisStep[] = [
    { title: "Ovulation Induction Medications", description: "These medicines help stimulate the ovaries to develop and release mature eggs at the correct time. Commonly used options include Clomiphene Citrate, Letrozole, and gonadotropin injections (FSH/LH), depending on the patient's condition." },
    { title: "HCG Injection", description: "A Human Chorionic Gonadotropin (hCG) injection is given once the follicles are ready. This injection triggers final egg maturation and timed ovulation, allowing the IUI procedure to be scheduled accurately." },
    { title: "Progesterone Support", description: "After the IUI procedure, progesterone supplements may be prescribed to support the uterine lining and help with successful implantation and early pregnancy support." },
]

export const iuiEffectivenessIntro: string =
    "On average, the success rate of IUI is around 10–20% per cycle, depending on individual factors."

export const iuiEffectivenessFactors: IconItem[] = [
    { icon: UserRound, title: "Age of the Woman", description: "Younger women generally have higher pregnancy success rates with IUI." },
    { icon: Stethoscope, title: "Cause of Infertility", description: "IUI works best for unexplained infertility and mild male factor infertility." },
    { icon: Pill, title: "Ovulation Induction", description: "Fertility medications used to stimulate ovulation can improve IUI outcomes." },
    { icon: Microscope, title: "Sperm Quality", description: "Good sperm count, motility, and normal shape increase the chances of pregnancy." },
    { icon: RotateCcw, title: "Number of IUI Cycles", description: "Some couples may need multiple IUI cycles to achieve successful results." },
    { icon: HeartPulse, title: "Overall Health & Lifestyle", description: "Factors such as body weight, stress, diet, and lifestyle habits also affect IUI success." },
]

export const iuiTestimonials: Testimonial[] = [
    { quote: "We struggled with infertility for over a year before finding AMVI Hospitals. The IUI treatment was smooth, affordable, and the doctors explained every step clearly. Thanks to the expert fertility team, we're now proud parents!", name: "Priya & Rohan" },
    { quote: "From consultation to the day of the procedure, the AMVI fertility specialists made us feel confident and supported. The intrauterine insemination procedure was quick and comfortable. Today we're expecting our first baby.", name: "Aditi Sharma" },
    { quote: "We chose AMVI Hospital for IUI because of their trusted reputation as a top fertility clinic. The team was compassionate, attentive, and dedicated. Our IUI cycle was successful, and we couldn't be more grateful.", name: "Sneha & Adil" },
    { quote: "After trying for months, we finally saw results with IUI at AMVI Hospitals. The doctors monitored us carefully, answered all our questions, and gave us hope when we needed it most.", name: "Meera Patel" },
    { quote: "AMVI Hospital made a difficult journey feel easy and hopeful. The intrauterine insemination success we experienced here is something we'll always cherish. The fertility team was supportive, experienced, and truly caring.", name: "Neha & Karan" },
]

export const iuiFaqs: FaqItem[] = [
    { question: "Is IUI treatment painful?", answer: "IUI is a straightforward, generally painless procedure that takes about 10–15 minutes. Most women experience mild cramping similar to period pain during and shortly after the procedure. No anaesthesia is required." },
    { question: "How many IUI cycles should I try before moving to IVF?", answer: "Most fertility specialists recommend trying 3–6 IUI cycles before considering IVF, depending on age and diagnosis. For women over 38 or those with more complex diagnoses, moving to IVF sooner may be advisable. Dr. Shaivalini will guide you based on your specific case." },
    { question: "What is the success rate of IUI in India?", answer: "IUI success rates in India typically range from 10–20% per cycle, depending on age, cause of infertility and whether ovulation induction was used. Success rates are higher in women under 35 with no other fertility issues." },
    { question: "What is the cost of IUI treatment in Hyderabad?", answer: "IUI treatment cost in Hyderabad depends on whether ovulation induction medications are used and the number of cycles recommended. At AMVI Hospitals, we offer transparent pricing with a full cost breakdown before starting." },
    { question: "Can IUI work for PCOS?", answer: "Yes — IUI combined with ovulation induction is one of the most effective treatments for PCOS-related infertility. Medications stimulate egg development and IUI is timed with ovulation for the best chance of conception." },
]