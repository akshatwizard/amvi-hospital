import { HeartPulse, Brain, Shuffle, Activity, Leaf, Pill, Disc, Wrench, MessageCircle, Sparkles, Scissors } from "lucide-react"
import { IconItem, DiagnosisStep, Testimonial, FaqItem } from "@/types/condition-page"

export const edIntro: string[] = [
    "Erectile Dysfunction (ED) is a common male sexual health condition in which a man is unable to achieve or maintain an erection firm enough for satisfactory intercourse. Occasional difficulty from stress, fatigue, or anxiety is normal — but frequent or ongoing problems can point to an underlying medical or hormonal issue worth a proper evaluation.",
]

export const erectionProcess: DiagnosisStep[] = [
    { title: "Arousal signal", description: "Sexual thoughts or physical stimulation activate signals in the brain." },
    { title: "Nerve transmission", description: "Those signals travel through nerves down to the penis." },
    { title: "Blood vessel relaxation", description: "Blood vessels in the penile tissue relax and widen." },
    { title: "Increased blood flow", description: "Blood flow increases and fills the erectile chambers of the penis." },
    { title: "Venous restriction", description: "Veins temporarily restrict blood from flowing back out." },
    { title: "Erection maintained", description: "This combination allows the penis to become firm and stay erect during sexual activity." },
]

export const edTypes: IconItem[] = [
    { icon: HeartPulse, title: "Organic ED", description: "Caused by physical conditions affecting blood flow, nerves, or hormones — diabetes, high blood pressure, heart disease, or low testosterone are common causes. Usually develops gradually and needs medical treatment." },
    { icon: Brain, title: "Psychogenic ED", description: "Rooted in psychological or emotional factors like stress, anxiety, depression, or relationship difficulties. Erections may be normal at other times but difficult during intercourse specifically." },
    { icon: Shuffle, title: "Mixed ED", description: "Involves both physical and psychological causes — a medical issue often triggers the initial problem, which then leads to anxiety or lost confidence. Treatment addresses both sides together." },
]

export const edSymptoms: string[] = [
    "Difficulty getting an erection during sexual activity",
    "Inability to maintain an erection for satisfactory intercourse",
    "Weak or inconsistent erections",
    "Reduced sexual desire or low libido",
    "Problems with ejaculation",
    "Emotional stress, embarrassment, or anxiety",
    "Strain in intimate or marital relationships",
    "Persistent fatigue tied to sexual performance concerns",
]

export const edPhysicalCauses: string[] = [
    "Chronic diseases like diabetes, hypertension, and heart disease",
    "Poor blood circulation affecting penile blood flow",
    "Neurological disorders or nerve damage",
    "Side effects of certain medications",
    "Age-related hormonal changes, including low testosterone",
    "Structural or anatomical abnormalities of the penis",
    "Sleep disorders such as sleep apnoea",
    "Obesity and lack of physical activity",
]

export const edPsychologicalCauses: string[] = [
    "High stress levels or work-related pressure",
    "Performance anxiety during intercourse",
    "Depression or mood disorders",
    "Ongoing relationship or marital difficulties",
    "Low self-confidence or poor self-esteem",
    "Past negative sexual experiences",
    "Body image concerns affecting sexual confidence",
]

export const edDiagnosis: DiagnosisStep[] = [
    { title: "Medical consultation & health history", description: "A confidential discussion covering how often and how severe the problem is, other sexual concerns, existing medical conditions, current medications, and lifestyle habits." },
    { title: "Physical examination", description: "Checks blood pressure, heart and vascular health, and examines for structural abnormalities or signs of hormonal or nerve-related issues." },
    { title: "Blood tests & lab investigations", description: "Measures testosterone and other hormones, blood sugar, thyroid function, and cholesterol to rule out underlying medical conditions." },
    { title: "Psychological evaluation", description: "Used when emotional or mental factors are suspected — assessing stress, anxiety, depression, or relationship concerns, which are common and highly treatable when caught early." },
    { title: "Specialised diagnostic tests", description: "Penile Doppler ultrasound assesses blood circulation in the penile arteries and veins, while a nocturnal penile tumescence (NPT) test measures natural sleep erections to help distinguish physical from psychological causes." },
]

export const edTreatments: IconItem[] = [
    { icon: Activity, title: "Lifestyle modifications", description: "Regular activity, a healthy weight, quitting smoking, reducing alcohol, managing stress, and better sleep all support blood flow and hormonal balance." },
    { icon: Leaf, title: "Nutritional supplements", description: "Zinc, L-arginine, and antioxidants are sometimes recommended in selected cases — always under medical supervision, since effectiveness varies and interactions are possible." },
    { icon: Pill, title: "Medications", description: "PDE-5 inhibitors (like sildenafil or tadalafil) improve blood flow to the penis; testosterone replacement therapy helps men with low testosterone; alprostadil can be given as an injection or suppository in select cases." },
    { icon: Disc, title: "Vacuum erection devices", description: "Create negative pressure around the penis to draw blood into erectile tissue — safe and non-invasive when used correctly." },
    { icon: Wrench, title: "Penile implants", description: "A surgically implanted option for men who don't respond to other treatments, typically considered only after thorough evaluation." },
    { icon: MessageCircle, title: "Psychological counselling", description: "Individual counselling, couples therapy, or sexual performance counselling can be highly effective when stress, anxiety, or relationship concerns contribute to ED." },
    { icon: Sparkles, title: "Alternative therapies", description: "Pelvic floor (Kegel) exercises, acupuncture, or other complementary approaches may help some patients, with results varying — best used under medical guidance." },
    { icon: Scissors, title: "Surgical treatment", description: "Reserved for rare cases involving significant blood vessel damage, such as penile revascularisation or vascular repair." },
]

export const edPrevention: string[] = [
    "Maintain a healthy body weight",
    "Exercise regularly",
    "Follow a balanced, nutritious diet",
    "Limit alcohol consumption",
    "Quit smoking and tobacco use",
    "Manage stress effectively",
    "Get adequate sleep",
    "Control diabetes, blood pressure, and cholesterol",
    "Avoid prolonged or excessive cycling",
    "Communicate openly with your partner",
    "Attend regular health check-ups",
    "Be cautious with medications that may affect sexual function",
]

// Real testimonials from amvihospitals.com/erectile-dysfunction, paraphrased
export const edTestimonials: Testimonial[] = [
    { quote: "Regained real confidence here — the doctors explained everything clearly and treated the whole visit with genuine privacy.", name: "Rahul S" },
    { quote: "Years of suffering silently ended with a proper diagnosis and treatment plan — extremely satisfied with the care and support.", name: "Suresh" },
    { quote: "Professional doctors, polite staff, and felt comfortable from the very first visit.", name: "Anil R" },
    { quote: "Treated with respect and understanding throughout, and my condition has genuinely improved a lot.", name: "Vikram Reddy" },
    { quote: "Chose the Attapur centre after reading reviews online, and the results were excellent.", name: "Ramesh" },
    { quote: "A clean hospital with experienced doctors and honest treatment throughout.", name: "Karthik" },
]

export const edFaqs: FaqItem[] = [
    { question: "Is erectile dysfunction a common problem in men?", answer: "Yes — it's very common, especially after age 40, though younger men can experience it too due to stress, lifestyle habits, diabetes, or hormonal imbalance." },
    { question: "What happens if erectile dysfunction is left untreated?", answer: "It can lead to emotional stress, low confidence, and relationship strain, and may point to an underlying health issue that needs attention." },
    { question: "Can erectile dysfunction improve without treatment?", answer: "Mild cases from temporary stress or fatigue sometimes improve on their own, but persistent problems generally need proper evaluation and treatment." },
    { question: "Does erectile dysfunction reduce male fertility?", answer: "ED doesn't directly affect sperm count or quality, but it can make natural conception harder — fertility support can help couples plan around it." },
    { question: "Is it possible to conceive if a man has erectile dysfunction?", answer: "Yes, if ejaculation occurs and sperm parameters are normal — your doctor can guide you toward suitable fertility options if needed." },
    { question: "When should I consult a doctor for erectile dysfunction?", answer: "If erection problems persist for more than a few weeks, affect your confidence, or interfere with your relationship, it's worth seeing a specialist." },
    { question: "How can I tell whether my ED is physical or psychological?", answer: "Physical ED usually develops gradually and occurs consistently, while psychological ED often appears suddenly and varies with situation or stress — proper testing helps identify the exact cause." },
    { question: "Can overthinking about erection problems make ED worse?", answer: "Yes — performance anxiety and constant worry can interfere with normal erection signals, and medical guidance or counselling can help break that cycle." },
    { question: "How safe are medicines used for erectile dysfunction?", answer: "Generally safe when taken under medical supervision, with prescriptions given only after a thorough health evaluation to minimise side effects." },
    { question: "How can I book a consultation at AMVI Hospital?", answer: "You can schedule a consultation at either the Attapur or Puppalaguda branch by contacting the hospital directly, and it helps to bring any previous medical records." },
]