import { AlertCircle, HeartPulse, Zap, Scale, AlertTriangle, Waves } from "lucide-react"
import { IconItem, TreatmentOption, Testimonial, FaqItem } from "@/types/condition-page"

export const pcosIntro: string[] = [
    "PCOS (Polycystic Ovary Syndrome) is a hormonal disorder where the ovaries produce excess androgens (male hormones), disrupting normal ovulation. Women with PCOS often have multiple small follicles (cysts) on the ovaries — visible on an ultrasound scan.",
    "PCOS is diagnosed through a combination of symptoms, blood tests (hormonal profile) and pelvic ultrasound. At AMVI Hospitals, we provide a complete PCOS diagnosis package at both our Hyderabad branches.",
]

export const pcosQuickSymptoms: string[] = [
    "Irregular or missed periods",
    "Excess hair growth on face, chest or abdomen (hirsutism)",
    "Acne or oily skin",
    "Weight gain, especially around the abdomen",
    "Difficulty conceiving",
    "Thinning hair or hair loss on the scalp",
]

export const pcosSymptoms: IconItem[] = [
    { icon: AlertCircle, title: "Irregular menstrual cycles", description: "Women with PCOS often experience irregular, delayed, or missed periods due to disturbed ovulation caused by hormonal imbalance." },
    { icon: HeartPulse, title: "Infertility or difficulty in conceiving", description: "PCOS affects normal egg development and ovulation, making it harder for women to conceive naturally." },
    { icon: Zap, title: "Increased male hormones (Hyperandrogenism)", description: "Higher androgen levels may lead to excess facial and body hair growth (hirsutism), acne, pimples, and male-pattern hair thinning or baldness." },
    { icon: Scale, title: "Weight gain and metabolic problems", description: "Many women with PCOS have a tendency towards weight gain, obesity, abnormal lipid profile, and impaired glucose tolerance due to insulin resistance." },
    { icon: AlertTriangle, title: "Increased risk of miscarriage", description: "Hormonal imbalance and poor egg quality in PCOS can increase the chances of early pregnancy loss." },
    { icon: Waves, title: "Polycystic ovarian changes on ultrasound", description: "Multiple small follicles are seen in the ovaries that do not mature or ovulate, often in a necklace pattern along the outer ovarian wall." },
]

export const pcosCauses: string[] = [
    "PCOS mainly occurs due to hormonal imbalance.",
    "The ovaries produce excess male hormones.",
    "High androgen levels affect normal ovulation.",
    "This leads to irregular menstrual cycles.",
    "Insulin resistance is common in women with PCOS.",
    "High insulin increases androgen production.",
    "This worsens hormonal imbalance.",
    "Chronic low-grade inflammation may be present.",
    "Inflammation can disturb ovarian function.",
    "PCOS can run in families.",
    "Genetic factors increase the risk.",
    "Unhealthy lifestyle habits may trigger symptoms.",
    "Poor diet and inactivity worsen PCOS.",
    "Obesity increases insulin resistance and symptoms.",
]

export const pcosPregnancyIntro: string =
    "Yes — many women with PCOS can get pregnant, either naturally or with fertility treatment. PCOS is one of the most treatable causes of infertility."

export const pcosPregnancyOptions: { label: string; href?: string }[] = [
    { label: "Ovulation induction with medication (Letrozole or Clomiphene) — the most common first step" },
    { label: "IUI (Intrauterine Insemination) combined with ovulation induction", href: "/infertility/iui" },
    { label: "IVF (In Vitro Fertilisation) — recommended if other methods are unsuccessful", href: "/infertility/ivf" },
    { label: "Laparoscopic Ovarian Drilling — a surgical option that can trigger ovulation in some PCOS patients", href: "/laparoscopy" },
]

export const pcosPregnancyOutro: string =
    "At AMVI Hospitals, Dr. Shaivalini Kamarapu has helped many PCOS patients achieve successful pregnancies. The right treatment depends on your individual hormonal profile, age and partner's fertility. Book a consultation to get a personalised fertility plan."

export const pcosDiagnosisIntro: string =
    "PCOS is diagnosed using internationally accepted clinical criteria. A woman is diagnosed with PCOS when at least two out of the following three features are present:"

export const pcosDiagnosisCriteria: IconItem[] = [
    { icon: AlertCircle, title: "Irregular or absent menstrual cycles", description: "Infrequent, delayed, or absent periods indicate ovulation dysfunction, which is a key feature of PCOS." },
    { icon: Zap, title: "Elevated androgen levels", description: "Increased male hormones may be detected through blood tests or physical symptoms such as excessive facial or body hair, acne, or scalp hair thinning." },
    { icon: Waves, title: "Polycystic ovaries on ultrasound", description: "Ultrasound imaging may show enlarged ovaries with multiple small follicles arranged along the periphery, giving a typical polycystic appearance." },
]

export const pcosDiagnosisOutro: string =
    "AMVI Hospital uses advanced hormonal testing and high-resolution pelvic ultrasound to ensure accurate and early PCOS diagnosis."

export const pcosTreatments: TreatmentOption[] = [
    {
        title: "Lifestyle Modification",
        description: "Lifestyle modification is the foundation of PCOS treatment. Maintaining a healthy body weight helps restore hormonal balance and improves ovulation naturally.",
        stats: ["Ideal Body Mass Index (BMI): below 22.5", "Even 5–10% weight loss can significantly improve menstrual regularity and ovulation", "Improves insulin resistance and reduces androgen levels"],
    },
    {
        title: "Oral Medications for Ovulation Induction",
        description: "Oral fertility medicines are commonly used when lifestyle changes alone do not restore ovulation.",
        stats: ["Induces ovulation in approximately 70–80% of women with PCOS", "50–60% pregnancy success rate with regular monitoring", "Safe, effective, and widely used as first-line fertility treatment"],
    },
    {
        title: "Injectable Hormonal Treatment for Egg Growth",
        description: "Injectable hormones such as FSH and LH are used to stimulate egg development in women who do not respond to oral medications. There is a possibility of Ovarian Hyperstimulation Syndrome (OHSS) and multiple pregnancies, so these injections should always be administered under specialist supervision.",
        stats: ["Helps in controlled ovarian stimulation", "Requires close ultrasound and hormonal monitoring", "Higher risk of multiple follicle development"],
    },
    {
        title: "IUI (Intrauterine Insemination)",
        description: "IUI involves placing the partner's prepared semen directly into the uterus at the time of ovulation, often combined with ovulation induction for better results.",
        stats: ["Improves chances of conception in selected PCOS cases", "Average success rate: 12–16% per cycle", "Usually up to 3–4 cycles are recommended"],
    },
    {
        title: "IVF / ICSI for PCOS",
        description: "In Vitro Fertilization is an advanced fertility treatment and is particularly effective for women with PCOS, allowing freeze-all cycles for a hormonally balanced and safer uterine environment.",
        stats: ["Better control over the number of embryos transferred", "Reduced risk of multiple pregnancies", "Extra good-quality embryos can be frozen for future use", "Frozen embryo transfer provides success rates similar to fresh cycles", "Advanced protocols to prevent and manage OHSS"],
    },
    {
        title: "Long-Term PCOS Management and Follow-Up",
        description: "PCOS is a long-term condition that requires ongoing care, focused on improving quality of life, reproductive health, and overall wellness.",
        stats: ["Regular monitoring of hormonal and metabolic health", "Prevention of diabetes, hypertension, and cardiovascular disease", "Support for mental and emotional well-being"],
    },
]

export const pcosTestimonials: Testimonial[] = [
    { quote: "AMVI Hospital is truly one of the best hospitals in Hyderabad. I visited the Attapur center for PCOS treatment and received excellent care. The doctors were patient, knowledgeable, and very supportive.", name: "Anita Reddy" },
    { quote: "I had a wonderful experience at AMVI Fertility and Maternity Center in Puppalaguda. From diagnosis to treatment, everything was explained clearly. The staff is very caring and professional.", name: "Swathi Rao" },
    { quote: "After consulting multiple hospitals in Hyderabad, AMVI Hospital gave me the confidence I needed. The fertility treatment was well planned and stress-free.", name: "Priya Sharma" },
    { quote: "AMVI Fertility and Maternity Center in Attapur provides outstanding care. The doctors focus on personalized treatment and genuinely care about patient well-being.", name: "Kiranmayi Naidu" },
    { quote: "AMVI Hospital stands out as one of the best fertility hospitals in Hyderabad. The treatment approach is ethical, transparent, and very effective.", name: "Lakshmi Chaitanya" },
    { quote: "I visited the Puppalaguda branch of AMVI Hospital for fertility consultation. The environment was comfortable, and the medical team was extremely supportive throughout my journey.", name: "Bhavya Srinivas" },
]

export const pcosFaqs: FaqItem[] = [
    { question: "What is the difference between PCOS and PCOD?", answer: "PCOS (Polycystic Ovary Syndrome) and PCOD (Polycystic Ovarian Disease) refer to the same condition — PCOD is the older term still commonly used in India. Both describe a hormonal disorder affecting the ovaries. The symptoms, diagnosis and treatment are identical." },
    { question: "Can PCOS cause infertility?", answer: "PCOS is the most common cause of ovulatory infertility — but it is also one of the most treatable. Most women with PCOS can conceive with the right treatment, which may include lifestyle changes, medications to induce ovulation, IUI or IVF." },
    { question: "Is PCOS curable permanently?", answer: "PCOS cannot be cured permanently, but it can be effectively managed. With the right treatment — including lifestyle changes, weight management and medication — symptoms can be significantly reduced and fertility can be improved." },
    { question: "Does losing weight help PCOS?", answer: "Yes — even a 5–10% reduction in body weight can significantly improve PCOS symptoms and restore regular ovulation in overweight women with PCOS, since weight loss reduces insulin resistance, a key driver of the hormonal imbalance." },
    { question: "Can IVF help women with PCOS get pregnant?", answer: "Yes — IVF is highly effective for PCOS patients, especially when simpler treatments haven't worked. Women with PCOS often respond well to ovarian stimulation and produce good quality eggs, with tailored protocols used to minimise OHSS risk." },
]