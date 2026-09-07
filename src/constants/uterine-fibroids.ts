import { ArrowUpFromLine, CircleDot, Layers, Activity, Dna, TrendingUp, Scale, CalendarClock, Users, AlertTriangle, HeartPulse, Baby, Stethoscope, ClipboardCheck, Pill, Scissors, XCircle, Syringe, Zap } from "lucide-react"
import { IconItem, DiagnosisStep, Testimonial, FaqItem } from "@/types/condition-page"

export const fibroidsIntro: string[] = [
    "Fibroids are common, non-cancerous growths that develop from the muscle layer of the uterus — also known as leiomyomas or myomas. They aren't linked to uterine cancer and almost never turn cancerous. A woman may have a single fibroid or several, ranging from very small to quite large.",
    "Fibroids can grow inside the uterine cavity, within the uterine wall, or on the outer surface. Many women have fibroids without any symptoms at all and simply need periodic monitoring — treatment is generally recommended only when fibroids start causing symptoms or affecting health or fertility.",
]

export const fibroidsTypes: IconItem[] = [
    { icon: ArrowUpFromLine, title: "Subserosal fibroids", description: "Develop on the outer surface of the uterus and tend to grow outward, sometimes pressing on the bladder or bowel and causing pelvic pressure, frequent urination, or lower back pain — usually without affecting menstrual flow." },
    { icon: CircleDot, title: "Intramural fibroids", description: "The most common type, growing within the muscular wall of the uterus. As they enlarge, they can cause heavy or prolonged bleeding, pelvic pain, and abdominal discomfort, and may affect fertility depending on size and location." },
    { icon: Layers, title: "Submucosal fibroids", description: "Grow just beneath the uterine lining, inside the cavity. Less common but often more symptomatic — even small ones can cause heavy bleeding, irregular periods, anaemia, and fertility problems, and usually need treatment." },
]

export const fibroidsSymptoms: string[] = [
    "Many fibroids cause no symptoms and are found incidentally during a routine ultrasound or exam",
    "Heavy and prolonged menstrual bleeding is the most common symptom",
    "Significant blood loss can lead to anaemia, fatigue, and shortness of breath",
    "Large fibroids can cause constant pelvic pressure or heaviness",
    "Pressure on the bladder may cause frequent urination",
    "Pressure on the bowel can cause constipation or lower back pain",
]

export const fibroidsCauses: IconItem[] = [
    { icon: Activity, title: "Hormonal influence", description: "Oestrogen and progesterone support fibroid growth, particularly during the reproductive years." },
    { icon: Dna, title: "Family history", description: "Having a close relative with uterine fibroids raises the likelihood of developing them." },
    { icon: TrendingUp, title: "Cell growth stimulators", description: "Certain natural growth substances in the body can encourage fibroid cells to multiply." },
    { icon: Layers, title: "Uterine tissue changes", description: "Increased extracellular matrix production can make fibroids firmer and allow further growth." },
    { icon: Scale, title: "Weight and metabolism", description: "Higher body fat can increase oestrogen production, raising fibroid risk." },
    { icon: CalendarClock, title: "Early menstrual onset", description: "Starting menstruation at a younger age has been linked to a greater chance of developing fibroids." },
]

export const fibroidsRiskFactors: IconItem[] = [
    { icon: CalendarClock, title: "Age", description: "Fibroids are most commonly seen in women in their 30s and 40s, with prevalence rising until menopause." },
    { icon: Dna, title: "Genetic background", description: "A family history of fibroids — especially in a mother — significantly raises individual risk." },
    { icon: Users, title: "Ethnic factors", description: "Fibroids are observed more frequently in Black women, while Asian women tend to have a comparatively lower incidence." },
    { icon: Scale, title: "Body weight", description: "Being overweight or obese raises oestrogen levels in the body, which may increase fibroid risk." },
]

export const fibroidsFertilityImpact: string[] = [
    "About 5–10% of infertile women are affected by fibroids",
    "Fibroids can alter the uterus's normal shape, making pregnancy harder to achieve",
    "Submucosal fibroids directly affect the uterine lining and embryo implantation",
    "Large fibroids may reduce blood flow to the uterus, affecting embryo development",
    "Fibroids near the fallopian tubes may block sperm or egg movement",
    "Fibroids can disturb normal uterine contractions and disrupt ovulation",
    "Fertility impact depends heavily on fibroid size and location, so not all fibroids need removal",
]

export const fibroidsPregnancy: IconItem[] = [
    { icon: AlertTriangle, title: "Increased complication risk", description: "Pregnant women with fibroids may face a higher chance of pain, bleeding, or uterine changes, depending on fibroid size and location." },
    { icon: Scissors, title: "Removal before pregnancy", description: "Fibroids are usually left alone before pregnancy unless they're very large or have caused complications previously." },
    { icon: HeartPulse, title: "Miscarriage risk", description: "Fibroids alone rarely cause miscarriage — many women with fibroids go on to have healthy pregnancies." },
    { icon: Baby, title: "Preterm birth risk", description: "Fibroids may raise the likelihood of preterm labour, which calls for closer antenatal monitoring." },
    { icon: Stethoscope, title: "Mode of delivery", description: "Women with fibroids have a higher chance of needing a C-section due to fetal position changes or uterine obstruction." },
    { icon: ClipboardCheck, title: "Regular monitoring", description: "Close antenatal follow-up and personalised care help manage risks and support a safe outcome for mother and baby." },
]

export const fibroidsDiagnosis: DiagnosisStep[] = [
    { title: "Ultrasound examination", description: "The first-line test for diagnosing fibroids. A transabdominal scan gives a general view, while a transvaginal scan offers more detail, especially for smaller fibroids — safe, painless, and usually sufficient on its own." },
    { title: "MRI (when needed)", description: "Used when ultrasound findings are unclear or further evaluation is needed. MRI gives high-resolution images, helps distinguish fibroids from adenomyosis, and maps fibroid location precisely to guide treatment planning." },
    { title: "Why accurate diagnosis matters", description: "Proper diagnosis avoids unnecessary surgery, supports fertility-preserving treatment where pregnancy is a concern, and allows for a personalised, effective management plan." },
]

export const fibroidsTreatments: IconItem[] = [
    { icon: Pill, title: "Medical management", description: "Hormonal therapies, hormone-releasing IUDs, or birth control pills can control symptoms or shrink fibroids in selected patients — not suitable for everyone, and chosen based on age, fibroid size, and symptom severity." },
    { icon: Scissors, title: "Myomectomy", description: "Removes only the fibroids while preserving the uterus — the preferred option for women who want to maintain fertility. Can be done hysteroscopically (through the vagina) or laparoscopically (small abdominal incisions) for faster recovery." },
    { icon: XCircle, title: "Hysterectomy", description: "Complete removal of the uterus, offering a permanent solution — usually considered for women who've completed their family, after all alternatives have been evaluated." },
    { icon: Syringe, title: "Uterine artery embolization", description: "A non-surgical procedure that injects tiny particles into the uterine arteries under X-ray guidance, cutting blood supply so fibroids shrink over time. May affect fertility, so careful counselling is needed first." },
    { icon: Zap, title: "MRI-guided focused ultrasound", description: "A non-invasive technique that uses focused ultrasound energy, guided by MRI, to heat and treat fibroid tissue while sparing surrounding organs. Suitable only for select fibroid types and may need multiple sessions." },
]

// Real testimonials from amvihospitals.com/uterine-fibroids-treatment-hospital, paraphrased
export const fibroidsTestimonials: Testimonial[] = [
    { quote: "Every treatment option was explained clearly, which made choosing the right path for my fibroid care straightforward — truly one of Hyderabad's better hospitals for it.", name: "Shalini Rao" },
    { quote: "An accurate diagnosis and a personalised treatment plan at the Attapur centre, backed by a genuinely professional and supportive team.", name: "Kiran Deshpande" },
    { quote: "Fibroid symptoms that were disrupting daily life found real relief here — patient, knowledgeable doctors at the Puppalaguda branch.", name: "Meenal Joshi" },
    { quote: "My wife's fibroid treatment focused on preserving fertility, which mattered enormously to us, and the results have been excellent.", name: "Rakesh Agarwal" },
    { quote: "A minimally invasive approach to fibroid treatment meant a quick recovery — genuinely recommend the Attapur centre for safe, effective care.", name: "Anusha Menon" },
    { quote: "After checking multiple hospitals, the Puppalaguda centre stood out for a smooth, transparent, reassuring fibroid treatment experience.", name: "Deepak Khanna" },
]

export const fibroidsFaqs: FaqItem[] = [
    { question: "Can uterine fibroids shrink on their own?", answer: "In some cases, particularly after menopause when hormone levels drop. Most fibroids, though, need regular monitoring rather than relying on natural shrinkage." },
    { question: "How often should asymptomatic fibroids be monitored?", answer: "If fibroids are small and not causing symptoms, follow-up ultrasounds are usually recommended every 6 to 12 months to track any changes." },
    { question: "Can fibroids come back after treatment?", answer: "Yes, particularly in younger women — regular follow-up helps catch any recurrence early." },
    { question: "Are there non-surgical options for fibroids?", answer: "Yes — medications, hormonal therapy, and uterine artery embolization can all help manage symptoms in selected patients without surgery." },
    { question: "Do fibroids affect fertility or IVF success?", answer: "Fibroids that distort the uterine cavity can reduce fertility and IVF success rates, so proper evaluation and treatment beforehand can improve outcomes." },
    { question: "Can lifestyle changes help with fibroid symptoms?", answer: "Balanced nutrition, regular exercise, and stress management can help manage symptoms, though they won't eliminate existing fibroids." },
    { question: "Is fertility-preserving fibroid treatment available?", answer: "Yes — medical management along with hysteroscopic and laparoscopic myomectomy are fertility-preserving options for eligible patients." },
    { question: "How can I book a fibroids consultation?", answer: "You can schedule a consultation at either the Attapur or Puppalaguda branch by contacting the hospital directly, and it helps to bring any previous fertility records." },
]