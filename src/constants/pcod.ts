import { Activity, Droplet, Dna, CalendarX, Utensils, Flame, Pill, Syringe, FlaskConical, CalendarCheck, HeartHandshake, Sparkles } from "lucide-react"
import { IconItem, DiagnosisStep, Complication, Testimonial, FaqItem } from "@/types/condition-page"

export const pcodIntro: string[] = [
    "Polycystic Ovarian Disease (PCOD) is a common hormonal condition that affects women during their reproductive years, usually between the ages of 12 and 45. It occurs when the ovaries produce higher-than-normal levels of male hormones, leading to hormonal imbalance. This imbalance can interfere with the normal release of eggs, causing irregular or missed menstrual periods.",
    "PCOD can impact a woman's overall health and fertility. Common problems associated with PCOD include irregular periods, difficulty in ovulation, weight gain, acne, excessive hair growth, and challenges in getting pregnant. Although it is a manageable condition, early diagnosis and proper treatment are important to prevent long-term complications and maintain hormonal and reproductive health.",
]

export const pcodCauses: IconItem[] = [
    { icon: Activity, title: "Hormonal imbalance", description: "An imbalance in reproductive hormones, especially increased androgen levels, is one of the main causes of PCOD and leads to irregular ovulation." },
    { icon: Droplet, title: "Insulin resistance", description: "High insulin levels can increase androgen production, which directly affects ovarian function and contributes to PCOD development." },
    { icon: Dna, title: "Genetic factors", description: "PCOD can run in families, and women with a family history of PCOD or PCOS have a higher risk of developing the condition." },
    { icon: CalendarX, title: "Irregular ovulation", description: "Poor or delayed ovulation causes multiple immature follicles to remain in the ovaries, forming cysts commonly seen in PCOD." },
    { icon: Utensils, title: "Unhealthy lifestyle", description: "Lack of physical activity, poor diet, stress, and weight gain can worsen hormonal imbalance and trigger PCOD symptoms." },
    { icon: Flame, title: "Chronic inflammation", description: "Low-grade inflammation in the body may stimulate the ovaries to produce excess male hormones, increasing the risk of PCOD." },
]

export const pcodSymptoms: string[] = [
    "Irregular or missed menstrual periods are one of the most common symptoms of PCOD.",
    "Difficulty in ovulation may lead to infertility problems in women with PCOD.",
    "Sudden weight gain, especially around the abdomen, is frequently seen.",
    "Excess facial or body hair growth occurs due to increased androgen levels.",
    "Acne and oily skin may appear or worsen over time.",
    "Thinning hair or hair fall from the scalp is another noticeable sign.",
    "Dark patches of skin around the neck or underarms may develop.",
    "Mood changes, fatigue, and stress are often linked with hormonal imbalance.",
]

export const pcodComplications: Complication[] = [
    { title: "Infertility issues", description: "Irregular ovulation can make natural conception difficult for women with PCOD." },
    { title: "Type 2 diabetes", description: "Insulin resistance associated with PCOD increases the risk of developing diabetes." },
    { title: "Irregular uterine bleeding", description: "Hormonal imbalance can cause prolonged or heavy menstrual bleeding." },
    { title: "Obesity and metabolic disorders", description: "PCOD may lead to unhealthy weight gain and metabolic syndrome." },
    { title: "High cholesterol and heart risk", description: "Women with PCOD may face an increased risk of heart-related problems." },
    { title: "Mental health concerns", description: "PCOD can contribute to anxiety, depression, and emotional stress due to hormonal changes." },
]

export const pcodWhenToSeeDoctor: string =
    "You should consult a doctor if you experience irregular periods, excessive hair growth, acne, or difficulty in getting pregnant. Early medical evaluation helps in managing PCOD symptoms effectively and prevents long-term complications. Timely treatment can improve hormonal balance, menstrual regularity, and overall reproductive health."

export const pcodDiagnosis: DiagnosisStep[] = [
    { title: "Medical History Evaluation", description: "Doctors review menstrual cycle patterns, weight changes, acne, hair growth, fertility concerns, and family history related to PCOD or hormonal disorders." },
    { title: "Physical Examination", description: "A physical check is done to assess body mass index (BMI), excessive facial or body hair, acne, hair thinning, and signs of hormonal imbalance." },
    { title: "Pelvic Ultrasound", description: "An ultrasound scan is one of the most important tests for PCOD diagnosis. It helps identify enlarged ovaries with multiple small cysts and irregular follicle development." },
    { title: "Hormonal Blood Tests", description: "Blood tests are performed to measure hormone levels such as LH, FSH, testosterone, estrogen, prolactin, and thyroid hormones to confirm hormonal imbalance." },
    { title: "Blood Sugar and Insulin Tests", description: "Fasting blood sugar, insulin levels, and glucose tolerance tests help detect insulin resistance commonly associated with PCOD." },
    { title: "Lipid Profile Test", description: "Cholesterol and triglyceride levels are checked to evaluate metabolic risks linked with PCOD." },
    { title: "Differential Diagnosis", description: "Other conditions such as thyroid disorders, hyperprolactinemia, and adrenal disorders are ruled out before confirming PCOD." },
]

export const pcodTreatments: IconItem[] = [
    { icon: Pill, title: "Medications for hormonal balance", description: "Hormonal medicines help regulate menstrual cycles, reduce androgen levels, and improve ovulation in women with PCOD." },
    { icon: Syringe, title: "Ovulation induction treatment", description: "For women facing infertility, ovulation-stimulating medications are used to promote egg release and increase pregnancy chances." },
    { icon: FlaskConical, title: "Insulin-sensitizing medicines", description: "These medicines help improve insulin resistance and support better hormonal control in PCOD patients." },
    { icon: CalendarCheck, title: "Management of irregular periods", description: "Treatment aims to normalize menstrual cycles and reduce abnormal uterine bleeding." },
    { icon: HeartHandshake, title: "Fertility treatment options", description: "If natural conception is difficult, assisted reproductive techniques may be recommended based on individual condition." },
    { icon: Sparkles, title: "Treatment for acne and excess hair growth", description: "Specific medications and therapies help reduce acne, unwanted hair growth, and other androgen-related symptoms." },
]

export const pcodLifestyle: string =
    "Lifestyle changes play a major role in managing PCOD naturally. Maintaining a healthy diet, regular physical activity, stress management, and adequate sleep can significantly improve hormonal balance. Even modest weight loss helps regulate periods, improve ovulation, and reduce PCOD symptoms effectively."

export const pcodTestimonials: Testimonial[] = [
    { quote: "I visited AMVI Hospital in Hyderabad for PCOD treatment after suffering from irregular periods for a long time. The doctors explained my condition very clearly and guided me properly. I saw good improvement within a few months.", name: "Sravani Reddy" },
    { quote: "My sister was treated for PCOD at AMVI Hospital, Hyderabad. The care and attention given by the doctors were excellent. Her cycles have become regular and her health has improved.", name: "Lakshmi Narayana" },
    { quote: "I had a severe hormonal imbalance due to PCOD and was very stressed. After starting treatment at AMVI Hospital in Hyderabad, I noticed positive changes. The doctors are very supportive and patient.", name: "Anusha Rao" },
    { quote: "AMVI Hospital helped me manage my PCOD problem effectively. The diagnosis was accurate and the treatment plan was personalized. I am very satisfied with the care provided.", name: "Kavya Srinivas" },
    { quote: "I was worried about fertility issues because of PCOD. At AMVI Hospital, Hyderabad, the doctors guided me step by step and gave me confidence. The environment is very comfortable and supportive.", name: "Divya Chaitanya" },
    { quote: "My experience at AMVI Hospital was very good. The doctors listened carefully and explained everything related to PCOD treatment. My symptoms have reduced significantly.", name: "Haritha Naidu" },
]

export const pcodFaqs: FaqItem[] = [
    { question: "What is PCOD and how is it different from PCOS?", answer: "PCOD (Polycystic Ovarian Disease) is a hormonal condition in which the ovaries release immature or partially mature eggs, leading to cyst formation. PCOS is a more severe metabolic disorder. PCOD is more common and usually manageable with timely treatment and lifestyle changes." },
    { question: "What are the early signs of PCOD in women?", answer: "Early symptoms of PCOD include irregular periods, delayed menstruation, acne, weight gain, excessive hair growth, hair fall, and difficulty in ovulation. Early diagnosis helps prevent long-term complications." },
    { question: "Can PCOD be cured permanently?", answer: "PCOD cannot be permanently cured, but it can be effectively controlled with proper medical treatment, lifestyle modification, and regular follow-up. Many women successfully manage symptoms and maintain normal menstrual cycles." },
    { question: "Does PCOD affect fertility and pregnancy?", answer: "Yes, PCOD can affect ovulation and make conception difficult. However, with proper fertility evaluation and treatment at AMVI Hospital, many women with PCOD successfully conceive naturally or with assisted reproductive techniques." },
    { question: "What tests are done to diagnose PCOD?", answer: "PCOD diagnosis includes pelvic ultrasound, hormonal blood tests, insulin resistance testing, thyroid evaluation, and metabolic screening to assess the severity of the condition." },
    { question: "What is the best treatment for PCOD?", answer: "PCOD treatment depends on symptoms and pregnancy goals. It may include hormonal medicines, ovulation induction therapy, insulin-sensitising treatment, and lifestyle management under expert medical supervision." },
    { question: "Can lifestyle changes help in controlling PCOD?", answer: "Yes, regular exercise, healthy diet, weight management, stress reduction, and good sleep play a major role in improving hormonal balance and reducing PCOD symptoms naturally." },
    { question: "Is PCOD dangerous if left untreated?", answer: "If untreated, PCOD may lead to infertility, type 2 diabetes, obesity, high cholesterol, endometrial problems, and long-term hormonal imbalance. Early treatment helps prevent these risks." },
    { question: "When should I consult a doctor for PCOD treatment?", answer: "You should consult a doctor if you have irregular periods, repeated cycle delays, acne, excess hair growth, or difficulty getting pregnant. Early medical care improves long-term reproductive health." },
    { question: "How can I book a PCOD consultation at AMVI Hospital in Hyderabad?", answer: "You can schedule a PCOD consultation at AMVI Hospital at the Attapur or Puppalaguda location by contacting the hospital directly and sharing any previous fertility records." },
]