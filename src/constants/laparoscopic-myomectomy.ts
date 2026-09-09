import { DiagnosisStep, Testimonial } from "@/types/condition-page"

export const myomectomyIntro: string[] = [
    "Laparoscopic myomectomy is a minimally invasive surgery to remove fibroids — non-cancerous growths that can cause heavy periods, pelvic pain, infertility, or a feeling of pressure in the lower abdomen — while leaving the uterus intact.",
    "Small incisions are made in the abdomen, and a thin camera (laparoscope) is used to see inside while special instruments remove the fibroids safely. Compared to open surgery, it means less pain, smaller scars, and a faster recovery, and it's often the preferred option for women who want to preserve fertility and plan a future pregnancy.",
]

export const myomectomyIndications: string[] = [
    "Heavy or prolonged menstrual bleeding",
    "Anaemia from excessive blood loss",
    "Severe pelvic pain or pressure",
    "Infertility associated with fibroids",
    "Recurrent miscarriages",
    "Rapidly increasing fibroid size",
    "Large fibroids (more than 4–5 cm)",
    "Multiple fibroids distorting the uterus",
    "Pain during intercourse",
    "Frequent urination from bladder pressure",
    "Constipation from bowel compression",
    "Failed medical management",
]

export const myomectomyTesting = [
    { name: "Ultrasound scan", description: "A pelvic ultrasound identifies the size, number, and location of fibroids — the first and most important diagnostic test." },
    { name: "Blood tests", description: "Checks haemoglobin levels for anaemia, blood group, sugar levels, thyroid function, and overall health." },
    { name: "MRI (if required)", description: "Used in more complex cases to get a detailed view of fibroid position and uterine structure." },
    { name: "Hormonal evaluation", description: "Hormone levels may be checked if irregular periods or fertility concerns are present." },
    { name: "Pre-anaesthesia checkup", description: "A complete fitness evaluation confirms the patient is ready for surgery." },
]

export const myomectomyBenefits: string[] = [
    "Minimally invasive technique",
    "Less blood loss",
    "Faster recovery",
    "Uterus preservation",
    "Reduced post-operative pain",
    "Shorter hospital stay",
]

export const myomectomySteps: DiagnosisStep[] = [
    { title: "Pre-surgical evaluation & planning", description: "Pelvic ultrasound, blood tests, and sometimes MRI map the exact size, number, and location of fibroids ahead of surgery." },
    { title: "Pre-anaesthesia assessment", description: "A complete medical fitness check reduces surgical risk before the procedure begins." },
    { title: "General anaesthesia", description: "The patient remains asleep and pain-free throughout the surgery." },
    { title: "Small incisions", description: "Three to four small incisions (usually 0.5–1 cm) are made in the abdomen." },
    { title: "Laparoscope insertion", description: "A high-definition camera is inserted through one incision, giving a clear, magnified view of the uterus and fibroids." },
    { title: "Fibroid identification & removal", description: "Fibroids are carefully separated from the uterine wall using specialised instruments, preserving healthy tissue — even multiple fibroids can be removed safely." },
    { title: "Uterine reconstruction", description: "The uterine muscle is stitched layer by layer to restore strength and structure, which matters especially for future pregnancy." },
    { title: "Closure of incisions", description: "Small incisions are closed with minimal sutures or skin glue, leaving very small scars." },
]

export const myomectomyRecovery = [
    { title: "Hospital stay", description: "1–2 days of observation is usually sufficient." },
    { title: "Pain management", description: "Mild pain is managed with prescribed medication." },
    { title: "Early walking", description: "Patients are encouraged to walk within 24 hours." },
    { title: "Return to work", description: "Light activities can typically resume within 7–10 days." },
    { title: "Improved menstrual symptoms", description: "Bleeding and pain usually reduce significantly afterward." },
    { title: "Pregnancy planning", description: "Doctors generally advise waiting 3–6 months before planning a pregnancy." },
]

export const myomectomyRiskNote: string =
    "Laparoscopic myomectomy is generally safe when performed by experienced surgeons. Minor risks like infection, bleeding, or an anaesthesia reaction can occur but are uncommon. In rare cases — where fibroids are extremely large or numerous — conversion to open surgery may become necessary; thorough pre-surgical evaluation helps minimise that likelihood."

// Real testimonials from the source page, paraphrased
export const myomectomyTestimonials: Testimonial[] = [
    { quote: "My fibroid removal surgery was smooth and recovery was quick — the care at both branches was excellent throughout.", name: "Priyanka Reddy" },
    { quote: "After years of heavy bleeding, everything about the surgery was explained clearly at the Attapur centre, which gave me real confidence going in.", name: "Swetha Narayan" },
    { quote: "My laparoscopic myomectomy at the Puppalaguda branch was successful, and my periods are finally back to normal.", name: "Kavya Srinivas" },
    { quote: "I was worried about open surgery, but the laparoscopic approach turned out painless and safe, with a highly skilled surgical team.", name: "Deepika Rao" },
    { quote: "The fibroid removal surgery preserved my uterus, and I'm now planning pregnancy with real confidence.", name: "Harini Chowdary" },
    { quote: "One of the best places for fibroid surgery in Hyderabad — my recovery was fast and smooth.", name: "Meghana Reddy" },
]