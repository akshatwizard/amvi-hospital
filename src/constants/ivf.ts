import { Eye, CheckCircle2, Snowflake, FlaskConical, Dna, Globe, RotateCcw, Ban, AlertCircle, Hourglass, User, HelpCircle } from "lucide-react"
import { IconItem, ProcessStep, Testimonial, FaqItem } from "@/types/condition-page"

export const ivfIntro: string[] = [
    "In Vitro Fertilization (IVF) is an advanced assisted reproductive treatment that helps couples conceive when natural pregnancy is not possible. In this procedure, a woman's eggs are collected and fertilized with sperm in a specialized laboratory. The resulting embryos are then transferred into the uterus to achieve pregnancy.",
    "IVF stands for fertilization that occurs outside the body, which is why it is commonly known as the test tube baby procedure. This treatment allows doctors to closely monitor embryo development and place healthy embryos directly into the uterus, improving the chances of a successful pregnancy.",
    "AMVI Hospitals, Hyderabad, offers advanced IVF treatment led by Dr. Shaivalini Kamarapu — a fertility specialist with over 20 years of experience and 1,000+ successful IVF cycles. Our two branches in Puppalaguda and Attapur provide world-class reproductive care combining the latest technology with personalized, compassionate support for every couple on their fertility journey.",
]

export const ivfAdvantages: IconItem[] = [
    { icon: Eye, title: "Embryo Monitoring", description: "IVF allows doctors to know exactly how many embryos are formed and to assess their quality at every stage of development." },
    { icon: CheckCircle2, title: "Selection of Best Embryos", description: "Only the healthiest and best-quality embryos are selected for transfer, increasing the chances of successful implantation and pregnancy." },
    { icon: Snowflake, title: "Embryo Freezing", description: "Extra embryos can be safely frozen and stored for future use, reducing the need for repeated treatment cycles." },
    { icon: FlaskConical, title: "Advanced Fertility Techniques", description: "IVF enables the use of advanced fertilization and implantation techniques that help improve success rates." },
    { icon: Dna, title: "Genetic Testing Option", description: "When required, embryos can undergo genetic testing to detect inherited or chromosomal conditions before transfer." },
    { icon: Globe, title: "Proven Global Success", description: "More than five million healthy babies have been born worldwide through IVF, and the number continues to grow each year." },
]

export const ivfCandidateIntro: string =
    "Infertility has been estimated to affect more than 7 million people in the United States alone. Many individuals or couples can be treated with less aggressive measures. However, when these more conservative measures fail, or in circumstances where they are not appropriate, IVF may become necessary."

export const ivfCandidateReasons: string[] = [
    "Tubal blockage or damage",
    "Male factor infertility",
    "Age-related fertility decline",
    "Endometriosis-related infertility",
    "Genetic or hereditary conditions",
    "Failed fertility treatments",
    "Recurrent miscarriages",
    "Unexplained fertility issues",
    "Uterine growths (fibroids)",
    "Polycystic ovary syndrome (PCOS)",
    "Reduced ovarian function",
    "Poor egg quality",
    "Weight-related fertility issues",
    "Ovulatory disorders",
    "Irregular menstrual cycles",
    "Early egg development issues",
    "Diabetes-related fertility concerns",
    "Other medical conditions affecting fertility",
]

export const ivfCandidateOutro: string =
    "IVF is an extremely safe and effective process. The pregnancy rate by age is greater than that achieved with natural conception, although the rate of miscarriages with IVF pregnancies is about the same as those conceived naturally — unless comprehensive chromosome screening (CCS) of embryos is performed, in which case the miscarriage rate is significantly lower."

export const ivfProcess: ProcessStep[] = [
    {
        title: "Ovarian Stimulation",
        points: [
            "Fertility medications are prescribed to stimulate the ovaries to produce multiple eggs in one cycle.",
            "The treatment plan is customized based on age, medical history, hormone levels, and ultrasound results.",
            "Medications are given as daily injections under medical supervision.",
            "Regular clinic visits are required for ultrasound scans and blood tests.",
            "Continuous monitoring helps ensure healthy egg development and proper timing for egg retrieval.",
        ],
    },
    {
        title: "Egg Retrieval",
        points: [
            "Once the eggs are fully mature, they are collected through a minor medical procedure called egg retrieval.",
            "The procedure is performed under mild anesthesia to ensure patient comfort.",
            "Ultrasound guidance is used to safely retrieve eggs from the ovaries.",
            "The process usually takes 20–30 minutes.",
            "Patients can go home the same day after a short recovery period.",
        ],
    },
    {
        title: "Fertilization",
        points: [
            "Retrieved eggs are fertilized with healthy sperm in a specialised IVF laboratory.",
            "Fertilization may be done using standard IVF or ICSI (Intracytoplasmic Sperm Injection), depending on sperm quality.",
            "This controlled process increases the chances of successful fertilization.",
            "Fertilized eggs develop into early-stage embryos.",
        ],
    },
    {
        title: "Embryo Culture",
        points: [
            "Fertilized embryos are cultured and monitored in the lab for 3 to 5 days.",
            "Embryologists assess cell division, growth rate and overall embryo quality.",
            "Advanced lab technology supports optimal embryo development.",
            "Only the healthiest embryos are selected for transfer or freezing.",
        ],
    },
    {
        title: "Embryo Transfer & Freezing",
        points: [
            "High-quality embryos not transferred immediately can be safely frozen for future use.",
            "Embryo freezing helps preserve quality without reducing success rates.",
            "Frozen embryos can be used in future IVF cycles, avoiding repeat stimulation and egg retrieval.",
            "This option offers greater flexibility and improves overall pregnancy success.",
            "About 9 to 11 days after the embryo transfer, you will take a pregnancy test via blood work.",
        ],
    },
]

export const ivfSuccessRates: string[] = [
    "At AMVI Hospitals, Dr. Shaivalini Kamarapu has completed over 1,000 successful IVF cycles with pregnancy rates among the highest in Hyderabad. Success rates vary based on age, embryo quality and individual case factors — our team provides a personalised assessment at your first consultation.",
    "For women under 35, IVF success rates at AMVI Hospitals average 45–55% per cycle. For women aged 35–40, rates range from 30–40% per cycle. We recommend a complete fertility evaluation before beginning treatment to determine your personalised success outlook.",
]

export const ivfCost: string[] = [
    "IVF treatment cost in Hyderabad at AMVI Hospitals typically includes ovarian stimulation medications, the egg retrieval procedure, embryology lab charges (fertilisation and embryo culture), and the embryo transfer procedure.",
    "Additional procedures such as ICSI (required for male factor infertility), PGT (preimplantation genetic testing), and embryo freezing are charged separately based on medical need. We believe in full transparency — your treatment plan will include a complete cost breakdown before any procedure begins.",
]

export const ivfRecommendedCases: IconItem[] = [
    { icon: RotateCcw, title: "Failed Previous Fertility Treatments", description: "IVF is recommended when simpler treatments like IUI or ovulation induction have not resulted in pregnancy." },
    { icon: Ban, title: "Blocked or Damaged Fallopian Tubes", description: "Women with blocked, damaged, or absent fallopian tubes, including conditions like hydrosalpinx, often require IVF to conceive." },
    { icon: AlertCircle, title: "Endometriosis or Ovarian Conditions", description: "Moderate to severe endometriosis or chocolate cysts can affect egg quality and fertility, making IVF a suitable treatment option." },
    { icon: Hourglass, title: "Low Egg Count or Advanced Maternal Age", description: "IVF is advised in cases of low ovarian reserve, reduced egg quality, early menopause, or advanced age to maximise pregnancy chances." },
    { icon: User, title: "Male Factor Infertility", description: "IVF is effective for low sperm count, poor motility, abnormal sperm shape, and severe male infertility such as azoospermia (with surgical sperm retrieval)." },
    { icon: HelpCircle, title: "Unexplained Infertility", description: "IVF is often the preferred treatment when no clear cause of infertility is found, as it ensures fertilisation and allows selection of the best-quality embryos." },
]

export const ivfTestimonials: Testimonial[] = [
    { quote: "Our IVF treatment at AMVI Hospitals was a positive experience. Dr. Shaivalini Kamarapu explained the entire IVF process clearly and guided us at every stage.", name: "Anjali Reddy" },
    { quote: "We chose AMVI Hospitals for IVF treatment, and it was the right decision. Dr. Shaivalini Kamarapu's personalized approach gave us confidence throughout the fertility journey.", name: "Rahul & Sneha Verma" },
    { quote: "From the first consultation to embryo transfer, the IVF care at AMVI Hospitals was excellent. Dr. Shaivalini Kamarapu was patient, supportive, and very knowledgeable.", name: "Pooja Sharma" },
    { quote: "IVF treatment was handled professionally with great attention to detail. The staff was kind, and the doctors were very reassuring.", name: "Ritu Agarwal" },
    { quote: "Choosing this hospital for IVF was the best decision we made. The support and care we received helped us stay positive throughout.", name: "Nikhil & Priya Malhotra" },
]

export const ivfFaqs: FaqItem[] = [
    { question: "When is IVF treatment recommended?", answer: "IVF is advised when natural conception is not possible due to factors such as tubal blockage, male infertility, age-related fertility decline, repeated pregnancy loss, or previous failed fertility treatments." },
    { question: "What is the first step before starting IVF at AMVI Hospital?", answer: "The IVF journey begins with a detailed consultation, fertility evaluation, and diagnostic tests to create a personalized IVF treatment plan." },
    { question: "What does the IVF treatment process involve?", answer: "IVF includes ovarian stimulation, egg retrieval, sperm fertilization in the lab, embryo development, and embryo transfer into the uterus." },
    { question: "How long does one IVF cycle take?", answer: "One complete IVF cycle takes approximately 4–6 weeks from the start of hormone injections to the pregnancy test. This includes ovarian stimulation (10–14 days), egg retrieval, embryo development in the lab (5–6 days), and the embryo transfer followed by a 2-week wait." },
    { question: "Is IVF treatment painful or uncomfortable?", answer: "Most patients find IVF manageable. The injections used for ovarian stimulation cause minimal discomfort, and the egg retrieval procedure is performed under light sedation, so you will not feel pain during the procedure itself. Some bloating and mild cramping may occur after retrieval, which resolves within a few days." },
    { question: "How does age affect IVF success rates?", answer: "IVF success rates are generally higher in younger women due to better egg quality. However, advanced IVF techniques and customized treatment protocols can improve outcomes at later ages." },
    { question: "How many IVF cycles are needed before success?", answer: "Most couples achieve pregnancy within 1–3 IVF cycles. The number of cycles recommended depends on age, diagnosis, embryo quality and response to stimulation. Dr. Shaivalini will advise based on your individual case after a full fertility evaluation." },
    { question: "What is the IVF success rate for women over 35?", answer: "For women aged 35–40, IVF success rates in Hyderabad typically range from 30–40% per cycle. After 40, success rates decrease — however, options such as donor egg IVF can significantly improve outcomes. A consultation with Dr. Shaivalini will give you a personalised prognosis." },
    { question: "Can IVF help in cases of male infertility?", answer: "Yes, IVF combined with advanced techniques like ICSI is highly effective for treating male infertility caused by low sperm count or poor sperm motility." },
    { question: "Can women with low AMH levels undergo IVF?", answer: "Yes, women with low AMH can still pursue IVF using individualized stimulation protocols designed to maximize success." },
    { question: "What factors influence IVF success?", answer: "IVF success depends on age, egg and sperm quality, underlying medical conditions, embryo quality, and adherence to the recommended treatment plan." },
    { question: "How does AMVI Hospital support patients during IVF treatment?", answer: "AMVI Hospital provides expert medical care, emotional counselling, transparent communication, and continuous support throughout the IVF journey." },
    { question: "What happens if the first IVF cycle is not successful?", answer: "If an IVF cycle is unsuccessful, the medical team reviews the case and advises the next best steps, which may include another IVF cycle or alternative approaches." },
    { question: "How can I book an IVF consultation at AMVI Hospital in Hyderabad?", answer: "You can schedule an IVF consultation at AMVI Hospital at the Attapur or Puppalaguda location by contacting the hospital directly and sharing any previous fertility records." },
    { question: "What is the cost of IVF treatment in Hyderabad?", answer: "IVF treatment cost in Hyderabad varies based on the protocol used, medications required and additional procedures needed. At AMVI Hospitals, we provide a full cost breakdown before starting any treatment." },
]