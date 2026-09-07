import { CalendarX, Zap, Droplets, CalendarClock, CalendarDays, Droplet, TrendingDown, CloudRain, ClipboardList, Pill, Scissors } from "lucide-react"
import { IconItem, DiagnosisStep, Testimonial, FaqItem } from "@/types/condition-page"

export const menstrualIntro: string[] = [
    "Menstrual problems cover a range of abnormalities in the menstrual cycle — irregular timing, unusual bleeding patterns, and the physical or emotional symptoms that come with them. They can show up at any stage of reproductive life, from adolescence through to menopause, and vary widely in severity and frequency.",
    "These issues are often shaped by hormonal shifts, lifestyle factors, and underlying reproductive health conditions. An occasional irregular cycle is usually nothing to worry about, but problems that persist over several cycles are worth a proper evaluation, since they can point to deeper hormonal or reproductive health concerns.",
]

export const menstrualTypes: IconItem[] = [
    { icon: CalendarX, title: "Amenorrhea", description: "Absence of menstrual periods." },
    { icon: Zap, title: "Dysmenorrhea", description: "Painful menstrual cramps." },
    { icon: Droplets, title: "Menorrhagia", description: "Excessive or heavy menstrual bleeding." },
    { icon: CalendarClock, title: "Oligomenorrhea", description: "Infrequent or irregular periods." },
    { icon: CalendarDays, title: "Polymenorrhea", description: "Frequent menstrual cycles." },
    { icon: Droplet, title: "Metrorrhagia", description: "Bleeding between periods." },
    { icon: TrendingDown, title: "Hypomenorrhea", description: "Abnormally light menstrual flow." },
    { icon: CloudRain, title: "Premenstrual Syndrome (PMS)", description: "Physical and emotional symptoms before periods." },
]

export const menstrualCauses: string[] = [
    "Hormonal imbalance in the body",
    "Polycystic ovary syndrome (PCOS)",
    "Thyroid disorders",
    "High stress and anxiety",
    "Sudden weight gain or loss",
    "Poor nutrition and deficiencies",
    "Excessive exercise or dieting",
    "Endometriosis or adenomyosis",
    "Reproductive tract infections",
    "Puberty or perimenopause changes",
]

export const menstrualSymptoms: string[] = [
    "Irregular menstrual cycles — unpredictable timing of periods",
    "Heavy menstrual bleeding — excessive blood flow during periods",
    "Severe pelvic or abdominal pain affecting daily activities",
    "Missed or delayed periods for one or more cycles",
    "Abnormal bleeding — spotting or bleeding between periods",
    "Extreme fatigue and mood changes, including irritability",
]

export const menstrualWhenToSeeDoctor: string =
    "See a gynaecologist if menstrual problems persist for several cycles or start interfering with daily life, work, or emotional wellbeing — persistent irregularities often point to an underlying hormonal or reproductive issue worth investigating. Seek medical attention right away for sudden heavy bleeding, severe pain, frequently missed periods, or symptoms like dizziness, unexplained weight change, or fertility concerns."

export const menstrualDiagnosis: DiagnosisStep[] = [
    { title: "Detailed Medical History", description: "A thorough review of cycle patterns, duration, flow, pain severity, lifestyle, stress levels, and family medical history." },
    { title: "Physical & Gynaecological Examination", description: "A pelvic exam checks the uterus, ovaries, and reproductive organs for fibroids, cysts, infections, or structural issues." },
    { title: "Hormonal & Blood Tests", description: "FSH, LH, oestrogen, progesterone, prolactin, and thyroid function tests, alongside a complete blood count to rule out anaemia and check blood sugar and vitamin levels." },
    { title: "Imaging & Advanced Diagnostics", description: "Pelvic and transvaginal ultrasound, with a Pap smear, endometrial biopsy, hysteroscopy, laparoscopy, or MRI used in more complex cases." },
    { title: "Fertility & Ovulation Assessment", description: "Ovulation tracking, hormonal profiling, and an assessment of ovarian reserve when fertility is a concern." },
]

export const menstrualTreatments: IconItem[] = [
    { icon: Pill, title: "Hormonal therapy & medication", description: "Oral contraceptives, progesterone therapy, pain relief for cramps, and targeted medication for thyroid disorders, PCOS, infections, or anaemia." },
    { icon: Scissors, title: "Advanced gynaecological treatment", description: "Treatment for fibroids and ovarian cysts, management of endometriosis and adenomyosis, and minimally invasive procedures like hysteroscopy or laparoscopy." },
    { icon: ClipboardList, title: "Long-term management", description: "An individualised plan with regular monitoring of hormonal and reproductive health, combining medical therapy with lifestyle changes." },
]

export const menstrualLifestyle: string[] = [
    "Follow a balanced diet rich in iron, protein, and essential vitamins",
    "Maintain a healthy body weight to support hormonal balance",
    "Engage in regular moderate exercise to improve circulation",
    "Practice stress management techniques such as yoga and meditation",
    "Maintain proper sleep hygiene and a regular sleep cycle",
    "Avoid excessive caffeine and processed foods",
    "Stay hydrated to reduce fatigue and cramps",
    "Track your cycle using an app or diary",
    "Limit alcohol and smoking exposure",
    "Keep up with regular reproductive health check-ups",
]

// Real testimonials from amvihospitals.com/menstrual-problems, paraphrased
export const menstrualTestimonials: Testimonial[] = [
    { quote: "Years of irregular periods were properly diagnosed and treated here — my cycle is regular now and I feel noticeably healthier.", name: "Priya Sharma" },
    { quote: "Severe pain and heavy bleeding were explained clearly and treated effectively, with care and support I was genuinely satisfied with.", name: "Anjali Verma" },
    { quote: "Personalised, professional treatment for a hormonal imbalance helped me recover quickly — I'd recommend it for menstrual problems in Hyderabad.", name: "Sneha Reddy" },
    { quote: "Excellent diagnosis and treatment from a highly experienced, supportive gynaecology team.", name: "Neha Patel" },
]

export const menstrualFaqs: FaqItem[] = [
    { question: "Can menstrual problems indicate a serious underlying condition?", answer: "Yes, chronic menstrual disorders can point to conditions such as PCOS, endometriosis, uterine fibroids, thyroid disorders, or hormonal imbalances that are worth investigating." },
    { question: "How do hormonal imbalances affect the menstrual cycle?", answer: "Hormonal imbalances disrupt ovulation and cycle regulation, which can lead to irregular cycles, heavy bleeding, or missed periods." },
    { question: "Can menstrual disorders affect fertility?", answer: "Yes — untreated menstrual problems can affect ovulation and fertility, which is why early diagnosis and treatment matter." },
    { question: "How long should irregular periods be monitored before seeing a doctor?", answer: "If irregular periods persist for more than two to three cycles, it's worth getting a medical evaluation." },
    { question: "Are lifestyle changes actually effective for managing menstrual problems?", answer: "Balanced nutrition, stress management, and weight control can meaningfully support medical treatment, though they typically work alongside it rather than replacing it." },
    { question: "Is fertility evaluation available alongside menstrual problem treatment?", answer: "Yes, fertility assessment and treatment are available for women with ovulatory or menstrual disorders." },
    { question: "How can I book a consultation for menstrual problems?", answer: "You can schedule a consultation at either the Attapur or Puppalaguda branch by contacting the hospital directly, and it helps to bring any previous records." },
]