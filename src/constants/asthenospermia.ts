import { FlaskConical, ScanLine, Activity, Dna, Pill, Syringe, Scissors, Leaf, MessageCircle, Compass } from "lucide-react"
import { IconItem, Testimonial, FaqItem } from "@/types/condition-page"

export const asthenoIntro: string[] = [
    "Asthenospermia — also called asthenozoospermia, or low sperm motility — is a condition in which sperm have a reduced ability to move effectively. Since proper movement is essential for reaching and fertilising an egg, this can meaningfully affect the chances of natural conception, even when sperm count and shape fall within normal ranges.",
    "Sperm affected by asthenospermia may swim slowly, move abnormally, or fail to progress forward, meaning fewer of them are able to make the full journey to the egg.",
]

export const asthenoFertilityImpact: string[] = [
    "Infertility is defined as not conceiving after 12 months of regular, unprotected intercourse",
    "Poor sperm movement makes it harder for sperm to travel through the reproductive tract and reach the egg",
    "Even with a normal sperm count, low motility alone can reduce the chance of fertilisation",
    "Fertility challenges are often multifactorial — motility, shape, concentration, and female reproductive health all play a part",
    "Asthenospermia is typically assessed alongside other fertility parameters, not in isolation",
]

export const asthenoWhoShouldTest: string[] = [
    "A semen analysis indicates reduced sperm motility",
    "You've experienced repeated IVF or IUI treatment failures",
    "There's a known family history of male infertility",
    "You have lifestyle risk factors such as smoking, obesity, or high stress",
    "You've had a previous testicular injury or reproductive tract infection",
    "You've been diagnosed with varicocele or a hormonal imbalance",
]

export const asthenoComplications: string[] = [
    "Decreased fertility potential",
    "Longer time required to achieve pregnancy",
    "Higher reliance on assisted reproductive techniques",
    "Emotional and psychological stress",
    "Strain on relationships from ongoing fertility concerns",
    "Increased risk of recurrent pregnancy loss",
]

export const asthenoDiagnosis: IconItem[] = [
    { icon: FlaskConical, title: "Semen analysis", description: "The primary test — assesses sperm count, motility, and morphology to identify reduced movement." },
    { icon: ScanLine, title: "CASA (computer-assisted analysis)", description: "An objective, observer-independent assessment that measures sperm velocity and advanced parameters like the sperm motility index, useful for guiding treatment choice." },
    { icon: Activity, title: "Hormonal tests", description: "Blood tests evaluate testosterone and other hormones tied to sperm production." },
    { icon: Dna, title: "Genetic testing", description: "May be recommended to detect inherited conditions that can affect sperm motility." },
]

export const asthenoTreatments: IconItem[] = [
    { icon: Activity, title: "Lifestyle modifications", description: "A balanced diet, regular activity, avoiding excessive heat, limiting alcohol, quitting smoking, and managing stress can all support sperm motility." },
    { icon: Pill, title: "Hormonal therapy", description: "Medication or hormone therapy can restore normal hormone levels and support sperm production when an imbalance is identified." },
    { icon: Syringe, title: "Treatment of infections", description: "Appropriate antibiotics or antivirals treat identified infections and help improve sperm health." },
    { icon: Scissors, title: "Varicocele repair", description: "Surgery may be considered for severe varicoceles (grade 3 or 4), though it mainly improves sperm count — its effect on motility specifically can be limited." },
    { icon: Leaf, title: "Antioxidant supplements", description: "Vitamin C, Vitamin E, Coenzyme Q10, L-carnitine, and astaxanthin may help reduce oxidative stress and support sperm function." },
    { icon: MessageCircle, title: "Genetic counselling", description: "Helps patients understand hereditary risks when a genetic cause is identified, and explore family planning options." },
    { icon: FlaskConical, title: "Assisted reproductive technologies", description: "IVF or ICSI may be recommended in severe cases, fertilising the egg in a controlled environment before embryo transfer." },
    { icon: Compass, title: "Empirical treatment", description: "When no clear cause is found, treatment may still begin using medications or supplements aimed at improving motility generally." },
]

export const asthenoPrevention: string[] = [
    "Maintain a healthy lifestyle — balanced diet, regular exercise, and healthy weight",
    "Avoid excessive heat exposure, including hot tubs and saunas",
    "Quit smoking",
    "Limit alcohol and avoid recreational drug use",
    "Manage stress with proven techniques",
    "Practise safe hygiene and treat reproductive tract infections promptly",
    "Reduce exposure to environmental toxins, chemicals, and pesticides",
    "Treat conditions like varicocele or hormonal imbalance early",
    "Attend regular medical and fertility check-ups",
    "Consider genetic counselling if there's a family history of male infertility",
]

// Real testimonials from amvihospitals.com/asthenospermia, paraphrased
export const asthenoTestimonials: Testimonial[] = [
    { quote: "Consulted the Attapur centre for low sperm motility and got a clear diagnosis with a treatment plan explained in real detail — highly satisfied.", name: "Ramesh Verma" },
    { quote: "One of the best fertility hospitals in Hyderabad — the team guided us patiently after repeated treatment failures elsewhere.", name: "Imran" },
    { quote: "Chose the Attapur centre for a male infertility evaluation, and the advanced semen testing plus counselling gave us real confidence.", name: "Anil R" },
    { quote: "Excellent experience at the Puppalaguda branch — my low sperm motility issue was handled professionally with the right treatment options.", name: "Sameer Mehta" },
    { quote: "Ethical advice, transparent communication, and genuinely personalised treatment made a big difference for us.", name: "Vikas" },
]

export const asthenoFaqs: FaqItem[] = [
    { question: "Does the duration of sexual abstinence affect sperm motility?", answer: "Yes — very long or very short abstinence periods can affect sperm quality. Moderate abstinence, as advised by your specialist, gives the most accurate motility assessment." },
    { question: "Is natural pregnancy possible with low sperm motility, or is treatment always needed?", answer: "Natural conception may still happen in mild to moderate cases. Fertility treatment becomes more relevant when motility is significantly reduced or pregnancy is delayed." },
    { question: "Can pregnancy happen if all sperm are non-motile?", answer: "Natural conception is extremely unlikely in that case, but advanced treatments like ICSI can still achieve fertilisation." },
    { question: "What treatment options exist when the cause is unknown?", answer: "For idiopathic asthenospermia, options include lifestyle changes, antioxidant therapy, medical management, and assisted reproductive techniques based on individual goals." },
    { question: "When is sperm motility considered low?", answer: "When the percentage of actively moving sperm falls below normal reference values on semen analysis." },
    { question: "Is asthenospermia permanent?", answer: "Not always — many cases improve with appropriate treatment, lifestyle changes, or medical intervention, depending on the underlying cause." },
    { question: "Are there foods that should be avoided to improve sperm motility?", answer: "Highly processed foods, excessive sugar, trans fats, and excessive alcohol may negatively affect sperm health and are worth limiting." },
    { question: "Can low sperm motility be inherited?", answer: "Some genetic conditions can affect motility, but not all cases are hereditary — proper evaluation helps determine the cause." },
    { question: "Can frequent intercourse help in moderate cases?", answer: "In some moderate cases, regular, well-timed intercourse may help by ensuring fresher sperm with better movement." },
    { question: "How can I book a consultation at AMVI Hospital?", answer: "You can schedule a consultation at either the Attapur or Puppalaguda branch by contacting the hospital directly, and it helps to bring any previous fertility records." },
]