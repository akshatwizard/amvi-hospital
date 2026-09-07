import { Activity, Repeat, Dna, ShieldAlert, Baby, HeartCrack, Pill, Syringe, Scissors, Salad, Stethoscope, Scan } from "lucide-react"
import { IconItem, DiagnosisStep, Complication, Testimonial, FaqItem } from "@/types/condition-page"

export const endometriosisIntro: string[] = [
    "Endometriosis is a condition in which tissue similar to the lining of the uterus grows outside the uterus — most often on the ovaries, fallopian tubes, or the tissue lining the pelvis. Like the uterine lining, this tissue thickens and breaks down with each menstrual cycle, but unlike a normal period, it has no way to leave the body, leading to inflammation, scarring, and pain.",
    "It affects women through their reproductive years and can range from mild discomfort to severe, cycle-disrupting pain. Endometriosis is also one of the leading causes of infertility, though many women with the condition do go on to conceive with the right diagnosis and treatment plan in place.",
]

export const endometriosisCauses: IconItem[] = [
    { icon: Repeat, title: "Retrograde menstruation", description: "Menstrual blood containing endometrial cells flows backward through the fallopian tubes into the pelvis instead of leaving the body, where the cells implant and grow." },
    { icon: Dna, title: "Genetic factors", description: "Endometriosis tends to run in families, and having a mother or sister with the condition raises the likelihood of developing it." },
    { icon: ShieldAlert, title: "Immune system dysfunction", description: "An immune system that struggles to identify and clear misplaced endometrial-like tissue may allow it to survive and grow outside the uterus." },
    { icon: Activity, title: "Hormonal influence", description: "Oestrogen encourages endometrial tissue growth, which is part of why symptoms often ease after menopause, when oestrogen levels naturally fall." },
    { icon: Baby, title: "Surgical scar implantation", description: "Following procedures such as a C-section, endometrial cells can occasionally attach to a surgical incision." },
    { icon: HeartCrack, title: "Cellular transformation", description: "Some researchers believe hormones or immune factors may transform cells outside the uterus into endometrial-like cells." },
]

export const endometriosisSymptoms: string[] = [
    "Pelvic pain that's often worse during menstrual periods, sometimes starting before and extending several days into the cycle.",
    "Pain during or after sexual intercourse.",
    "Pain with bowel movements or urination, particularly during a period.",
    "Heavy menstrual bleeding, or bleeding between periods.",
    "Difficulty conceiving — endometriosis is sometimes first discovered during fertility evaluation.",
    "Fatigue, bloating, nausea, or constipation, especially around menstruation.",
    "Lower back and abdominal pain that can persist beyond the menstrual window in more severe cases.",
]

export const endometriosisComplications: Complication[] = [
    { title: "Infertility", description: "Endometriosis is found in a significant share of women being evaluated for difficulty conceiving." },
    { title: "Ovarian cysts (endometriomas)", description: "Endometrial-like tissue on the ovaries can form dark, fluid-filled cysts that may affect ovarian function." },
    { title: "Pelvic adhesions", description: "Chronic inflammation can cause organs and tissues in the pelvis to stick together, sometimes complicating future surgery." },
    { title: "Chronic pelvic pain", description: "Ongoing inflammation and scarring can lead to persistent pain that extends beyond the menstrual period." },
    { title: "Bowel or bladder involvement", description: "In more advanced cases, endometrial tissue can affect the bowel or bladder, causing digestive or urinary symptoms." },
    { title: "Emotional impact", description: "Living with chronic pain and fertility uncertainty can contribute to anxiety, low mood, and stress." },
]

export const endometriosisWhenToSeeDoctor: string =
    "See a doctor if you have pelvic pain that disrupts your daily life, pain during intercourse, unusually heavy periods, or if you've been trying to conceive for a while without success. Endometriosis is often under-diagnosed because period pain is normalised — but persistent or worsening pain is worth a proper evaluation rather than being managed with painkillers alone."

export const endometriosisDiagnosis: DiagnosisStep[] = [
    { title: "Medical History Evaluation", description: "Your doctor will ask about your pain pattern, menstrual history, sexual health, bowel and bladder symptoms, and any family history of endometriosis." },
    { title: "Pelvic Examination", description: "A physical exam can sometimes detect cysts or scarring behind the uterus, though many cases show no findings on exam alone." },
    { title: "Transvaginal Ultrasound", description: "This imaging test can identify ovarian endometriomas and give a general picture of pelvic anatomy, though it can't detect all endometriosis." },
    { title: "MRI Scan", description: "An MRI offers more detailed imaging and is sometimes used to map the extent of disease before planning surgery." },
    { title: "Diagnostic Laparoscopy", description: "A minimally invasive surgical procedure remains the only way to definitively confirm endometriosis, allowing direct visualisation and biopsy of suspicious tissue." },
    { title: "Ruling Out Other Conditions", description: "Conditions like pelvic inflammatory disease, ovarian cysts, or irritable bowel syndrome are considered and ruled out, since symptoms can overlap." },
]

export const endometriosisTreatments: IconItem[] = [
    { icon: Pill, title: "Pain management", description: "Anti-inflammatory painkillers are often the first step for managing period-related pelvic pain." },
    { icon: Syringe, title: "Hormonal therapy", description: "Birth control pills, progestins, or GnRH agonists can suppress the menstrual cycle and slow the growth of endometrial tissue." },
    { icon: Scissors, title: "Laparoscopic surgery", description: "Minimally invasive surgery to remove or destroy visible endometrial implants can relieve pain and improve fertility outcomes." },
    { icon: Stethoscope, title: "Fertility-focused treatment", description: "For those trying to conceive, treatment is tailored to protect and support fertility, sometimes alongside assisted reproduction." },
    { icon: Scan, title: "Ongoing monitoring", description: "Regular follow-up and imaging help track the condition over time, since endometriosis can recur even after treatment." },
    { icon: Salad, title: "Supportive care", description: "Pelvic physiotherapy and dietary adjustments are sometimes used alongside medical treatment to help manage symptoms." },
]

export const endometriosisLifestyle: string =
    "While lifestyle changes don't cure endometriosis, regular low-impact exercise, an anti-inflammatory diet, stress management, and adequate sleep can help take the edge off symptoms for many women. Heat therapy and pelvic floor physiotherapy are also commonly used alongside medical treatment to manage pain day to day."

export const endometriosisTestimonials: Testimonial[] = [
    { quote: "One of the best hospitals in Hyderabad — the team at the Attapur centre was supportive throughout, and every step was explained clearly enough to feel confident and comfortable.", name: "Thomas" },
    { quote: "Visited the Puppalaguda centre for a fertility consultation and came away impressed — knowledgeable, caring doctors and genuinely high medical standards.", name: "Suresh Kumar" },
    { quote: "Outstanding, patient-focused care for endometriosis treatment, with personalised guidance handled ethically from start to finish.", name: "Pooja Sharma" },
    { quote: "A smooth, reassuring journey at the Attapur centre — realistic expectations and proper counselling made all the difference.", name: "Rahul Mehta" },
    { quote: "Chose the Puppalaguda centre after a lot of research and it was the right call — well-equipped, with a genuinely caring staff.", name: "Neha Patel" },
]

export const endometriosisFaqs: FaqItem[] = [
    { question: "What is the difference between endometriosis and normal period pain?", answer: "Ordinary period pain is usually manageable with over-the-counter medication and doesn't significantly disrupt daily life. Endometriosis pain tends to be more severe, can last beyond the period itself, and often comes with other symptoms like pain during intercourse or bowel movements." },
    { question: "Can endometriosis be cured?", answer: "There's currently no permanent cure, but it can be effectively managed with hormonal therapy, surgery, or a combination of both, and many women achieve significant symptom relief." },
    { question: "Does endometriosis always cause infertility?", answer: "No — many women with endometriosis conceive naturally. It does raise the risk of fertility difficulty, so it's worth discussing your specific case with a fertility specialist if you're trying to conceive." },
    { question: "Is surgery always necessary for endometriosis?", answer: "Not always. Many women manage symptoms with hormonal therapy alone. Surgery is typically considered when pain is severe, fertility is a concern, or medication hasn't provided enough relief." },
    { question: "How is endometriosis definitively diagnosed?", answer: "Imaging like ultrasound or MRI can suggest endometriosis, but diagnostic laparoscopy — a minimally invasive surgical procedure — is the only way to confirm it with certainty." },
    { question: "Can endometriosis come back after surgery?", answer: "Yes, it's possible for endometriosis to recur even after surgical removal, which is why ongoing follow-up care is an important part of long-term management." },
    { question: "How can I book an endometriosis consultation at AMVI Hospital?", answer: "You can schedule a consultation at either the Attapur or Puppalaguda branch by contacting the hospital directly, and it helps to bring any previous scans or test results with you." },
]