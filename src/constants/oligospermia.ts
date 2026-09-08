import { CircleDot, AlertCircle, AlertTriangle, Factory, Cigarette, Dna, HeartPulse, Zap, HelpCircle, Scissors, Pill, Salad, Ban, Activity, Leaf, Syringe, FlaskConical, Microscope } from "lucide-react"
import { IconItem, DiagnosisStep, FaqItem } from "@/types/condition-page"

export const oligoIntro: string[] = [
    "Oligospermia — commonly known as low sperm count — is a condition in which semen contains fewer sperm than normal, reducing the chances of natural conception. According to WHO guidelines, a sperm count below 16 million per millilitre is considered low.",
    "It's one of the most common causes of male infertility, but it's often treatable with timely diagnosis, medical care, and the right fertility treatment for the underlying cause.",
]

export const oligoWhoCanGetIt: string[] = [
    "Men planning pregnancy but facing repeated conception delays",
    "Men with hormonal or reproductive health issues",
    "Individuals exposed to environmental or occupational risk factors",
    "Men with past infections, injuries, or genetic conditions",
    "Younger and older men alike, depending on underlying causes",
]

export const oligoEffects: string[] = [
    "Decreased likelihood of natural pregnancy",
    "Fewer healthy sperm reaching the fallopian tubes",
    "Reduced sperm competition to fertilise the egg",
    "Increased time required to achieve conception",
    "Higher reliance on assisted reproductive techniques such as IUI, IVF, or ICSI",
]

export const oligoTypes: IconItem[] = [
    { icon: CircleDot, title: "Mild oligospermia", description: "Sperm count between 10 and 16 million/ml. Natural conception is still possible, though chances may be somewhat reduced." },
    { icon: AlertCircle, title: "Moderate oligospermia", description: "Sperm count between 5 and 10 million/ml. Fertility is moderately affected, and medical assistance may be needed." },
    { icon: AlertTriangle, title: "Severe oligospermia", description: "Sperm count below 5 million/ml. Natural conception becomes difficult, and advanced fertility treatment is often recommended." },
]

export const oligoSymptoms: string[] = [
    "Difficulty achieving pregnancy despite regular unprotected intercourse",
    "Often no obvious physical symptoms — usually found during fertility testing",
    "Reduced sexual desire due to hormonal imbalance",
    "Decreased facial or body hair growth in some men",
    "Erectile or ejaculation-related issues in rare cases",
    "Smaller or softer testicles in certain conditions",
]

export const oligoCauses: IconItem[] = [
    { icon: Factory, title: "Environmental & occupational causes", description: "Exposure to heat, radiation, chemicals, pollutants, or industrial toxins can reduce sperm production." },
    { icon: Cigarette, title: "Lifestyle-related causes", description: "Smoking, alcohol use, chronic stress, poor sleep, inactivity, and unhealthy eating can negatively affect sperm count." },
    { icon: Dna, title: "Medical & genetic causes", description: "Varicocele, hormonal imbalance, genetic disorders, and undescended testicles can all affect sperm development." },
    { icon: HeartPulse, title: "Health-related factors", description: "Reproductive tract infections, childhood mumps, chronic illness, obesity, and metabolic disorders may lower sperm count." },
    { icon: Zap, title: "Trauma & medication-related causes", description: "Testicular injury, along with certain medications or medical treatments, can interfere with sperm production." },
    { icon: HelpCircle, title: "Idiopathic oligospermia", description: "In many cases, no clear cause is identified even after thorough evaluation." },
]

export const oligoDiagnosis: DiagnosisStep[] = [
    { title: "Medical history evaluation", description: "Past illnesses, surgeries, medications, fertility history, and lifestyle habits like smoking, alcohol use, and occupational exposure are reviewed." },
    { title: "Physical examination", description: "A focused exam of the reproductive organs checks for varicocele, testicular abnormalities, or hormonal signs." },
    { title: "Semen analysis", description: "The most important diagnostic test — assessing sperm count, motility, morphology, and semen volume. More than one sample is often needed for accuracy." },
    { title: "Hormonal testing", description: "Blood tests measure testosterone, FSH, and LH — hormones that play a key role in sperm production." },
    { title: "Genetic testing", description: "For severe oligospermia, genetic testing may be advised to detect chromosomal or genetic conditions affecting fertility." },
    { title: "Ultrasound examination", description: "Scrotal or pelvic ultrasound identifies structural problems, varicoceles, blockages, or abnormalities in the reproductive tract." },
    { title: "Post-ejaculation urine test", description: "Checks for retrograde ejaculation, where semen flows backward into the bladder instead of exiting normally." },
    { title: "Advanced imaging (if required)", description: "Doppler ultrasound may be used to assess blood flow and confirm any vascular issues affecting sperm production." },
]

export const oligoTreatments: IconItem[] = [
    { icon: Scissors, title: "Varicocele treatment", description: "Surgical correction may be advised for a clinically significant varicocele, which can improve sperm count and quality in selected cases." },
    { icon: Pill, title: "Hormonal treatment", description: "When a hormonal imbalance is identified, medication can help restore normal hormone levels and support sperm production." },
    { icon: Salad, title: "Diet & physical activity", description: "A balanced diet, regular exercise, and a healthy weight can positively influence sperm health." },
    { icon: Ban, title: "Avoiding harmful exposures", description: "Quitting smoking, limiting alcohol, and reducing exposure to heat, pollution, and toxins can help improve sperm quality." },
    { icon: Activity, title: "Hormone-stimulating medication", description: "Certain medications can stimulate natural hormone production to support sperm development." },
    { icon: Leaf, title: "Antioxidant therapy", description: "Antioxidant supplements may help reduce oxidative stress and improve sperm function and motility." },
    { icon: Syringe, title: "Intrauterine insemination (IUI)", description: "Processed sperm is placed directly into the uterus during ovulation to improve the chance of fertilisation." },
    { icon: FlaskConical, title: "In vitro fertilisation (IVF)", description: "Eggs and sperm are fertilised outside the body, and healthy embryos are transferred into the uterus." },
    { icon: Microscope, title: "ICSI", description: "A single sperm is injected directly into an egg — especially effective for very low sperm count or poor sperm quality." },
]

export const oligoPrevention: string[] = [
    "Eat a balanced, nutrient-rich diet",
    "Exercise regularly",
    "Maintain a healthy body weight",
    "Avoid smoking and tobacco",
    "Limit alcohol consumption",
    "Stay away from illicit drugs",
    "Reduce exposure to toxins and chemicals",
    "Go for regular health check-ups",
    "Avoid excessive heat to the testicles",
    "Practice safe sex",
    "Treat infections promptly",
    "Manage stress effectively",
    "Get adequate sleep",
    "Avoid unnecessary medications",
]

export const oligoFaqs: FaqItem[] = [
    { question: "How long does oligospermia last?", answer: "It can be temporary or long-term depending on the cause. Sperm count linked to lifestyle factors, infections, or hormonal imbalance often improves with treatment, while some conditions need ongoing medical management." },
    { question: "Is oligospermia a serious condition?", answer: "It's a common cause of male infertility, but it's treatable in many cases. With early diagnosis and the right care, many men go on to achieve pregnancy with their partner." },
    { question: "Is low sperm count permanent?", answer: "Not always. Many men see improvement after the underlying cause is treated. Permanent low sperm count is less common and usually linked to genetic or severe testicular conditions." },
    { question: "Can pregnancy occur naturally with oligospermia?", answer: "Yes, especially in mild cases — chances depend on sperm count, motility, and the overall reproductive health of both partners." },
    { question: "Is IVF possible with oligospermia?", answer: "Yes, IVF is commonly used for low sperm count, and techniques like ICSI allow fertilisation even when sperm numbers are very low." },
    { question: "What treatments are available for oligospermia at AMVI Hospital?", answer: "Comprehensive evaluation, medical treatment, lifestyle guidance, and advanced fertility treatments including IUI, IVF, and ICSI, tailored to individual needs." },
    { question: "Is oligospermia common?", answer: "Yes — it's one of the most common male fertility issues, seen in a significant share of couples experiencing difficulty conceiving." },
    { question: "When should I consult a fertility specialist for low sperm count?", answer: "If pregnancy hasn't occurred after 12 months of regular unprotected intercourse — or earlier if known risk factors are present." },
    { question: "Can lifestyle changes improve sperm count?", answer: "Yes — quitting smoking, reducing alcohol, managing stress, eating well, and exercising regularly can meaningfully improve sperm health in many cases." },
    { question: "How can I book a consultation at AMVI Hospital?", answer: "You can schedule a consultation at either the Attapur or Puppalaguda branch by contacting the hospital directly, and it helps to bring any previous fertility records." },
]