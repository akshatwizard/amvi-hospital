import { CalendarClock, Dna, Scissors, Zap, Activity, Cigarette, Pill, Syringe, FlaskConical, Microscope, Droplet, Snowflake, CircleDot, HeartHandshake } from "lucide-react"
import { IconItem, DiagnosisStep, Testimonial, FaqItem } from "@/types/condition-page"

export const amhIntro: string[] = [
    "Anti-Müllerian Hormone (AMH) is produced by the small developing follicles in a woman's ovaries — follicles that contain immature eggs. The AMH level in blood reflects roughly how many eggs remain in the ovaries, known as ovarian reserve, and it's widely used in fertility evaluation to assess reproductive potential and guide pregnancy planning.",
    "Unlike other reproductive hormones, AMH stays relatively stable throughout the menstrual cycle, making it a reliable marker at any point in the month. Low AMH doesn't mean a woman can't conceive — it simply means fewer eggs remain than expected for her age. Many women with low AMH still conceive naturally or with fertility support, and early testing helps with timely planning and better outcomes.",
]

export const amhLevels = {
    normal: "AMH levels between roughly 1.0–4.0 ng/mL are generally considered normal for reproductive age. Levels above this range are sometimes seen in conditions like PCOS.",
    low: "0.5–1.0 ng/mL indicates reduced ovarian reserve, and below 0.5 ng/mL is often categorised as very low. Interpretation is always age-specific — the same level means something different at 25 versus 38.",
}

export const amhCauses: IconItem[] = [
    { icon: CalendarClock, title: "Age-related decline", description: "Ovarian reserve naturally decreases with age, especially after 30–35 years." },
    { icon: Dna, title: "Genetic factors", description: "Some women have a genetically lower ovarian reserve or a family history of early menopause." },
    { icon: Scissors, title: "Previous ovarian surgery", description: "Surgery for ovarian cysts, endometriosis, or other conditions can reduce egg reserve." },
    { icon: Zap, title: "Chemotherapy or radiation", description: "Cancer treatments can damage ovarian follicles and significantly lower AMH." },
    { icon: Activity, title: "Endometriosis", description: "Severe endometriosis can affect ovarian function and reduce AMH levels." },
    { icon: Cigarette, title: "Autoimmune & lifestyle factors", description: "Autoimmune disease, smoking, excessive stress, obesity, and poor diet may all negatively affect ovarian reserve." },
]

export const amhSymptoms: string[] = [
    "Difficulty conceiving",
    "Delayed pregnancy",
    "Irregular menstrual cycles",
    "Shorter menstrual cycles",
    "Poor response to IVF stimulation",
    "Family history of early menopause",
    "Reduced antral follicle count on ultrasound",
    "Previous failed IVF cycles",
    "Hormonal imbalance symptoms",
    "Signs of premature ovarian insufficiency",
]

export const amhPregnancyImpact: string[] = [
    "Low AMH means fewer eggs are available, indicating reduced ovarian reserve",
    "It may affect pregnancy chances, but does not mean infertility",
    "Natural pregnancy is still possible, especially for younger women",
    "Egg quality depends mainly on age rather than AMH level itself",
    "IVF response may be lower, though outcomes vary by individual case",
    "Early testing and a personalised treatment plan improve overall chances",
    "Lifestyle plays a supporting role alongside medical treatment",
    "Proper diagnosis helps rule out other conditions affecting fertility",
]

export const amhDiagnosis: DiagnosisStep[] = [
    { title: "AMH blood test", description: "The main test for ovarian reserve — a simple blood draw that can be done on any day of the cycle, since AMH doesn't fluctuate much month to month." },
    { title: "Antral follicle count (AFC) scan", description: "A transvaginal ultrasound, usually on day 2 or 3 of the period, counting the small follicles in both ovaries — a lower count typically matches lower AMH." },
    { title: "FSH test (day 2–3)", description: "High FSH levels can suggest the ovaries aren't responding well; doctors compare this against AMH for a fuller picture of ovarian function." },
    { title: "LH and estradiol test", description: "Checks whether ovulation is happening properly and whether hormone imbalance is affecting egg development or cycle regularity." },
    { title: "Thyroid and prolactin test", description: "Thyroid issues are common and can affect fertility; high prolactin can disturb ovulation. Treating either can sometimes improve fertility naturally." },
    { title: "Detailed medical history", description: "Age, cycle pattern, previous pregnancies or miscarriages, surgeries, lifestyle, stress, and family history of early menopause all help build the full picture." },
    { title: "Partner evaluation", description: "For couples, semen analysis is also assessed — fertility challenges sometimes involve both partners, and treating both improves overall success chances." },
]

export const amhTreatments: IconItem[] = [
    { icon: Activity, title: "Natural conception with monitoring", description: "Younger women with mildly low AMH may try naturally with ovulation tracking and timed intercourse." },
    { icon: Pill, title: "Ovulation induction", description: "Medicines like Letrozole or Clomiphene stimulate egg release to improve pregnancy chances." },
    { icon: Syringe, title: "Controlled ovarian stimulation", description: "Hormonal injections help produce multiple eggs, typically ahead of IUI or IVF." },
    { icon: FlaskConical, title: "IVF", description: "Commonly recommended for moderate to severe cases — eggs are collected, fertilised in the lab, and the embryo transferred to the uterus." },
    { icon: Microscope, title: "ICSI", description: "A single sperm is injected directly into the egg during IVF to improve fertilisation." },
    { icon: Droplet, title: "Mild stimulation IVF", description: "Lower-dose medication used in some cases, focusing on egg quality over quantity." },
    { icon: Snowflake, title: "Embryo freezing", description: "Embryos can be frozen for future transfer, increasing overall chances across attempts." },
    { icon: CircleDot, title: "Egg freezing", description: "Allows women to preserve fertility early, ahead of future family planning." },
    { icon: HeartHandshake, title: "Donor egg IVF", description: "Considered in cases of very low ovarian reserve, after thorough counselling." },
]

export const amhLifestyleTips: string[] = [
    "Take all prescribed medications and injections exactly as advised",
    "Eat a balanced diet rich in antioxidants — leafy greens, fruits, whole grains, nuts, and lean protein",
    "Include omega-3s from fish, flaxseed, or walnuts to support hormonal balance",
    "Maintain a healthy BMI — being under or overweight can affect ovulation",
    "Get moderate exercise like walking or yoga, but avoid overly strenuous workouts",
    "Manage stress through meditation, breathing exercises, or relaxation techniques",
    "Avoid smoking, alcohol, and excess caffeine",
    "Get 7–8 hours of sleep a night",
    "Attend every follow-up appointment and avoid self-medicating",
    "Contact your doctor promptly if you notice unusual pain or bleeding during treatment",
]

// Real testimonials from amvihospitals.com/low-amh, paraphrased
export const amhTestimonials: Testimonial[] = [
    { quote: "Diagnosed with low AMH at 32 and felt anxious about fertility — the team guided me clearly through every step, and I'm now happily pregnant.", name: "Priyanka Reddy" },
    { quote: "After two failed attempts elsewhere, a personalised IVF plan and real transparency throughout made all the difference.", name: "Swathi N" },
    { quote: "Very low AMH levels made pregnancy feel impossible, but the right treatment and support led to a successful conception.", name: "Anusha K" },
    { quote: "Honest counselling and realistic expectations throughout — the treatment plan was built specifically around my condition, and it worked.", name: "Meghana Rao" },
    { quote: "A careful evaluation of my ovarian reserve led to the right IVF approach — genuinely commendable experience with low AMH cases.", name: "Deepika S" },
    { quote: "Every step from diagnosis to treatment was handled with care and clarity, and I felt hopeful throughout the whole journey.", name: "Lakshmi Priya" },
]

export const amhFaqs: FaqItem[] = [
    { question: "What is considered a low AMH level?", answer: "Levels below 1.0 ng/mL are generally considered low, though interpretation depends on your age, menstrual history, and overall fertility profile." },
    { question: "Can I get pregnant naturally with low AMH?", answer: "Yes, especially in younger women — low AMH indicates reduced egg quantity, not necessarily poor egg quality." },
    { question: "Does low AMH mean early menopause?", answer: "It can indicate reduced ovarian reserve, but doesn't always mean menopause is imminent — proper evaluation is needed to understand your specific timeline." },
    { question: "Does low AMH affect IVF success rates?", answer: "It may mean fewer eggs are retrieved during IVF, but with personalised stimulation protocols and advanced techniques, pregnancy is still achievable." },
    { question: "Can AMH levels be increased naturally?", answer: "Not significantly — but a healthy lifestyle, balanced diet, and proper medical care can improve your overall fertility potential." },
    { question: "At what age should I test my AMH levels?", answer: "Women above 30, those planning a delayed pregnancy, or anyone facing difficulty conceiving should consider AMH testing." },
    { question: "What other tests are done alongside AMH?", answer: "Doctors typically recommend Antral Follicle Count, FSH, LH, Estradiol, thyroid testing, and sometimes semen analysis for a complete fertility picture." },
    { question: "Is IVF the only option for low AMH?", answer: "No — treatment depends on age and severity, and can range from ovulation induction and natural monitoring to IVF, ICSI, or fertility preservation." },
    { question: "How soon should I seek help if I have low AMH?", answer: "As soon as it's diagnosed or suspected — ovarian reserve only declines further with time, so earlier evaluation gives more treatment options to work with." },
    { question: "How can I book a low AMH consultation at AMVI Hospital?", answer: "You can schedule a consultation at either the Attapur or Puppalaguda branch by contacting the hospital directly, and it helps to bring any previous fertility records." },
]