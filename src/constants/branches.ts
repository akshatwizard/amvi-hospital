// Branch page content, carried over from the hospital's previous website
// (/location/attapur and /location/puppalaguda) and lightly edited.
import { FaqItem } from "@/types/condition-page"

export type Branch = {
    slug: "attapur" | "puppalaguda"
    name: "Attapur" | "Puppalaguda"
    title: string
    description: string
    heading: string
    tagline: string
    intro: string[]
    servedAreasText: string
    aboutHeading: string
    aboutIntro: string
    helpHeading: string
    help: string[]
    helpOutro: string
    personalised: string
    doctorTitle: string
    doctor: string[]
    testimonials: { quote: string; name: string }[]
    faqs: FaqItem[]
}

export const branchServices = [
    { name: "Advanced IVF treatment", href: "/infertility/ivf" },
    { name: "IUI and ICSI", href: "/infertility/iui" },
    { name: "Male infertility", href: "/infertility/male" },
    { name: "Fertility preservation", href: "/fertility-preservation" },
    { name: "Maternity and delivery care", href: "/maternity" },
    { name: "High-risk pregnancy", href: "/maternity/high-risk-pregnancy" },
    { name: "3D/4D ultrasound", href: "/maternity/3d-4d-ultrasound" },
    { name: "Laparoscopic surgery", href: "/laparoscopy" },
    { name: "Gynaecology (PCOS, fibroids, endometriosis)", href: "/gynaecology" },
    { name: "Cosmetic gynaecology", href: "/cosmetic-gynecology" },
]

export const careHighlights = [
    { title: "Expert nursing", text: "Skilled nurses deliver evidence-based care to improve outcomes." },
    { title: "Space for relatives", text: "Comfortable areas near patients for family members to gather or wait." },
    { title: "Online gynaecology advice", text: "Get advice from our gynaecologists on hysterectomy, fibroids and endometriosis." },
    { title: "A calm hospital environment", text: "A pleasant, comfortable setting that supports healing and well-being." },
]

export const branches: Record<Branch["slug"], Branch> = {
    attapur: {
        slug: "attapur",
        name: "Attapur",
        title: "Fertility & Maternity Hospital in Attapur, Hyderabad | AMVI Hospitals",
        description:
            "AMVI Hospitals Attapur — IVF, fertility treatment, maternity care, laparoscopy and women's healthcare on Rajendra Nagar Road, Attapur. Call +91 80088 42200 to book.",
        heading: "Fertility & Maternity Centre in Attapur, Hyderabad",
        tagline: "Comprehensive women's health, fertility, gynaecology and maternity care at AMVI Hospital, Attapur.",
        intro: [
            "AMVI Hospital is a trusted women's and fertility care hospital in Attapur, Hyderabad, providing comprehensive gynaecology, maternity and reproductive healthcare with a patient-centred approach and modern medical facilities.",
            "We offer advanced IVF treatment, male and female infertility care, pregnancy and maternity services, high-risk pregnancy management, laparoscopic procedures, fertility preservation and specialised women's healthcare, with personalised treatment plans for safe and effective outcomes.",
        ],
        servedAreasText: "Our Attapur branch serves patients from Mehdipatnam, Rajendranagar, Tolichowki, Bandlaguda, Puppalaguda and the surrounding areas.",
        aboutHeading: "About AMVI Fertility & Maternity Centre, Attapur",
        aboutIntro: "Finding the right fertility and maternity centre can be stressful. At AMVI Hospital, Attapur, we provide comprehensive care under one roof, with personalised, compassionate and high-quality treatment.",
        helpHeading: "How we help you",
        help: [
            "Clear diagnosis and treatment planning",
            "Transparent communication at every step",
            "Evidence-based fertility and women's health care",
            "Focus on long-term health outcomes",
            "Compassionate support during treatment",
            "Advanced fertility and reproductive technologies",
            "Ethical, patient-centred practice",
        ],
        helpOutro: "Our specialists guide women and couples through every stage of their healthcare journey, helping them overcome fertility challenges and move forward with confidence.",
        personalised: "We believe every woman is unique and heals differently, which is why we provide individualised specialty care for women. Our services include infertility treatment, maternity care, gynaecological oncology, gynaecological endoscopy and urogynaecology, supported by modern facilities and advanced medical equipment.",
        doctorTitle: "Consultant Gynaecologist, Laparoscopic and Cosmetic Surgeon in Attapur",
        doctor: [
            "Dr. Shaivalini Kamarapu has over 20 years of experience in women's health and gynaecology. She treats amenorrhoea, irregular periods, heavy menstrual bleeding, hormonal imbalance, PCOS, fibroids, endometriosis, pelvic pain, PMS, PMDD, premature menopause and high-risk pregnancies, and has strong expertise in fertility evaluation and IVF.",
            "She manages female and male infertility, including ovulation disorders, unexplained infertility, recurrent pregnancy loss and male fertility concerns. Her clinical interests also include prolapse, sexual health, painful intercourse, abnormal vaginal bleeding, sexually transmitted infections and tubectomy.",
        ],
        testimonials: [],
        faqs: [
            { question: "What healthcare services does AMVI Hospitals offer at the Attapur branch?", answer: "Our Attapur centre provides women's health services including gynaecology, maternity care, fertility treatment (IVF, IUI and ICSI), prenatal and postnatal care, and minimally invasive surgery — all delivered by experienced specialists." },
            { question: "Can I get IVF and other fertility treatments at AMVI Hospitals Attapur?", answer: "Yes. AMVI Hospitals Attapur offers a full range of fertility treatments including IVF, ICSI, IUI and other assisted reproductive techniques, with a personalised plan for each couple." },
            { question: "What maternity care is available at the Attapur centre?", answer: "We provide complete maternity support, including routine pregnancy check-ups, high-risk pregnancy monitoring and labour and delivery services, for a safe and comfortable experience for expecting mothers." },
            { question: "Do you offer women's health services beyond pregnancy and fertility?", answer: "Yes. Our Attapur centre also treats PCOS, menstrual disorders, hormonal imbalance, pelvic pain, fibroids and other gynaecological conditions, with expert consultation and a tailored treatment plan." },
            { question: "How do I book an appointment at AMVI Hospitals Attapur?", answer: "Call the Attapur branch on +91 80088 42200, or use the appointment form on our contact page to request a consultation, scan or procedure." },
            { question: "Is prenatal ultrasound available at the Attapur branch?", answer: "Yes. We provide prenatal care including 2D, 3D and 4D ultrasound scans to monitor your baby's well-being at every stage of pregnancy." },
            { question: "Do you provide services for male infertility?", answer: "Yes. AMVI Hospitals offers male infertility evaluation and treatment, including semen analysis, sperm preparation and specialised fertility support, as part of a complete fertility programme." },
            { question: "What should I bring to my first visit?", answer: "Bring any previous medical reports, ultrasound scans and a list of the medicines you take. Our staff will guide you through registration, consultation and any tests you may need." },
            { question: "Do you offer personalised fertility counselling and treatment planning?", answer: "Yes. Our specialists review your medical history, arrange the right diagnostic tests and create a treatment plan tailored to you, to give you the best chance of a successful outcome." },
        ],
    },
    puppalaguda: {
        slug: "puppalaguda",
        name: "Puppalaguda",
        title: "Fertility & Maternity Hospital in Puppalaguda, Hyderabad | AMVI Hospitals",
        description:
            "AMVI Hospitals Puppalaguda — IVF, fertility treatment, maternity care, laparoscopy and women's healthcare near Narsingi, Manikonda and Gachibowli. Call +91 91000 09669 to book.",
        heading: "Women's Maternity & Fertility Hospital in Puppalaguda, Hyderabad",
        tagline: "Comprehensive women's health, fertility, gynaecology and maternity care at AMVI Hospital, Puppalaguda.",
        intro: [
            "AMVI Hospital is a trusted women's and fertility care hospital in Puppalaguda, Hyderabad, offering comprehensive gynaecology, maternity and reproductive healthcare with a patient-focused approach and modern medical facilities.",
            "We provide advanced IVF treatment, male and female infertility care, pregnancy and maternity services, high-risk pregnancy management, laparoscopic procedures, fertility preservation and specialised women's healthcare, with personalised treatment plans for safe and effective outcomes.",
        ],
        servedAreasText: "Our Puppalaguda branch serves patients from Manikonda, Narsingi, Khajaguda, Gachibowli, the Financial District and nearby areas.",
        aboutHeading: "About AMVI Hospital, Puppalaguda",
        aboutIntro: "Choosing the right women's and fertility hospital is an important decision. At AMVI Hospital, Puppalaguda, we offer complete women's healthcare and fertility services in a supportive, caring environment designed around your needs and goals.",
        helpHeading: "How AMVI Hospital supports you",
        help: [
            "Accurate evaluation with tailored treatment plans",
            "Honest and clear communication throughout your care",
            "Science-backed fertility and women's health treatments",
            "Emphasis on overall well-being and future health",
            "Emotional care and guidance at every stage",
            "Access to advanced fertility and reproductive treatments",
            "An ethical, patient-first approach to healthcare",
        ],
        helpOutro: "Our specialists at AMVI Hospital, Puppalaguda walk alongside women and couples at every step, providing expert care, reassurance and trusted guidance.",
        personalised: "Our approach is rooted in the understanding that every woman is unique and heals differently, which is why we focus on personalised specialty care for women. We offer infertility treatment, gynaecological oncology, gynaecological endoscopy, urogynaecology and maternity care, supported by modern facilities and advanced medical equipment under one roof.",
        doctorTitle: "Consultant Gynaecologist, Laparoscopic and Cosmetic Surgeon in Puppalaguda",
        doctor: [
            "Dr. Shaivalini Kamarapu, practising at AMVI Hospital, Puppalaguda, has over 20 years of clinical experience in women's healthcare. She diagnoses and treats conditions including amenorrhoea, painful periods, heavy menstrual bleeding, irregular periods, hormonal imbalance, female sexual dysfunction, fertility problems and high-risk pregnancy.",
            "She has a special clinical interest in fibroids, endometriosis, PCOS, infertility and pelvic organ prolapse, offering personalised, evidence-based care to women at every stage of life.",
        ],
        testimonials: [
            { quote: "I visited AMVI Hospital in Puppalaguda for help with irregular periods and PCOS. The gynaecology team was very thorough and explained my treatment clearly. I also liked how they checked everything under one roof — from hormone tests to ultrasound.", name: "Meera Singh" },
            { quote: "I had fertility concerns and came here for an infertility assessment and IVF guidance. The staff at AMVI Hospital, Puppalaguda were supportive and patient with all my questions. I felt cared for every step of the way.", name: "Richa Verma" },
            { quote: "When I needed maternity care, including 3D/4D ultrasound and regular pregnancy check-ups, AMVI Hospital was a great choice. The team made me feel comfortable and confident throughout my pregnancy.", name: "Anu Reddy" },
            { quote: "I underwent laparoscopic surgery for fibroid removal here, and the recovery was smooth. The doctors walked me through every detail beforehand, and the minimally invasive approach made a big difference.", name: "Nidhi Rao" },
            { quote: "I came in for a cosmetic gynaecology consultation and was pleasantly surprised by how professional and respectful the team was. The procedure and aftercare were explained kindly, which really eased my nerves.", name: "Shruti Kulkarni" },
        ],
        faqs: [
            { question: "What healthcare services does AMVI Hospital offer in Puppalaguda, Hyderabad?", answer: "AMVI Hospital in Puppalaguda provides comprehensive women's healthcare, including gynaecology, maternity care, fertility treatment and IVF, infertility management, laparoscopic surgery and preventive women's health care." },
            { question: "Is IVF treatment available at AMVI Hospital Puppalaguda?", answer: "Yes. AMVI Hospital Puppalaguda offers advanced IVF and fertility treatment, including complete evaluation and treatment of both male and female infertility." },
            { question: "What maternity and pregnancy care is available at the Puppalaguda branch?", answer: "The Puppalaguda centre offers full maternity care: antenatal check-ups, pregnancy monitoring, high-risk pregnancy care, delivery and postnatal care under expert supervision." },
            { question: "Does AMVI Hospital Puppalaguda treat male infertility?", answer: "Yes. We provide male infertility diagnosis and treatment, including fertility assessment, counselling and advanced reproductive care options." },
            { question: "Are gynaecology services available beyond pregnancy and fertility?", answer: "Yes. AMVI Hospital Puppalaguda offers urogynaecology, cosmetic gynaecology, hormonal treatment, laparoscopic procedures and women's cancer screening." },
            { question: "Is prenatal ultrasound available at AMVI Hospital Puppalaguda?", answer: "Yes. Prenatal ultrasound and fetal monitoring are available at the Puppalaguda branch as part of complete antenatal care." },
            { question: "Does AMVI Hospital Puppalaguda offer personalised fertility counselling?", answer: "Yes. Our fertility specialists provide personalised counselling and a treatment plan based on your health and your goals for a family." },
            { question: "How can I book an appointment at AMVI Hospital Puppalaguda?", answer: "Call the Puppalaguda branch on +91 91000 09669, use the appointment form on our contact page, or visit the centre directly." },
        ],
    },
}
