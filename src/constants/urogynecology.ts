import { FaqItem } from "@/types/condition-page"
import type { HubContent } from "@/components/hub/condition-hub"

// Content for the Urogynecology overview page (/gynaecology/uro).
// Facts here are summarised from the four urogynecology condition pages.

export const urogynecologyIntro: string[] = [
    "Urogynecology, also called female urology, is the branch of women's health that deals with the pelvic floor: the muscles and tissues that support the bladder, uterus, vagina and bowel. When this support weakens, usually after childbirth or with age and hormonal change, women can develop leaking urine, a feeling of heaviness or a bulge in the vagina, or difficulty emptying the bladder or bowel.",
    "These problems are very common. Prolapse alone affects about 1 in 3 women who have had children. Yet many women live with the symptoms in silence, assuming they are a normal part of motherhood or ageing. They are not something you have to put up with: most pelvic floor problems can be treated, and many improve without surgery.",
    "At AMVI Hospitals, urogynecology care is led by Dr. Shaivalini Kamarapu, a gynaecologist and advanced laparoscopic surgeon with over 20 years of experience. Every consultation is private and unhurried, and treatment is planned around your symptoms, your age and whether you plan further pregnancies.",
]

export type UroCondition = {
    name: string
    href: string
    description: string
}

export const urogynecologyConditions: UroCondition[] = [
    {
        name: "Pelvic organ prolapse",
        href: "/gynaecology/uro/prolapse",
        description: "When the bladder, uterus or rectum drops into the vagina, causing a bulge, heaviness or a dragging feeling. Treated with physiotherapy, a pessary or surgical repair.",
    },
    {
        name: "Urinary incontinence",
        href: "/gynaecology/uro/urinary-incontinence",
        description: "Leaking urine when you cough, sneeze or exercise (stress incontinence), or a sudden urge you can't hold (urgency incontinence). Treatment depends on the type and cause.",
    },
    {
        name: "Pelvic reconstruction",
        href: "/gynaecology/uro/pelvic-reconstruction",
        description: "Surgery to restore the support of the pelvic floor when exercises and pessaries are not enough, using vaginal, abdominal, laparoscopic or robotic-assisted approaches.",
    },
    {
        name: "Cystoscopy",
        href: "/gynaecology/uro/cystoscopy",
        description: "A camera examination of the bladder and urethra, used to find the cause of blood in the urine, painful urination, frequent infections or an overactive bladder.",
    },
]

export const urogynecologySymptoms: string[] = [
    "Leaking urine when you cough, sneeze, laugh, lift or exercise",
    "A sudden, strong urge to pass urine that you can't hold, or passing urine very often",
    "A feeling of a bulge, lump or heaviness in the vagina",
    "A dragging sensation in the vagina or lower back",
    "A slow urine stream or a feeling that the bladder hasn't emptied fully",
    "Difficulty emptying the bowel, or needing to press on the vagina to pass stools",
    "Discomfort during intercourse",
    "Blood in the urine, painful urination or repeated urinary infections",
]

export type UroStep = { title: string; description: string }

export const urogynecologyApproach: UroStep[] = [
    {
        title: "Assessment",
        description: "A detailed talk about your symptoms and history, followed by a gentle physical and vaginal examination to find the exact support problem. A cystoscopy may be advised if bladder symptoms need a closer look.",
    },
    {
        title: "Treatment without surgery",
        description: "Many women improve with pelvic floor (Kegel) exercises and physiotherapy, weight loss, a vaginal pessary to support the organs, or medication for bladder symptoms.",
    },
    {
        title: "Surgery when needed",
        description: "If symptoms still affect daily life, the weakened support is repaired surgically, through the vagina, the abdomen or laparoscopically, aiming to correct every weak area and lower the risk of recurrence.",
    },
    {
        title: "Recovery and follow-up",
        description: "Clear guidance on what to expect after any procedure, and follow-up visits to check healing and make sure your symptoms have settled.",
    },
]

export const urogynecologyFaqs: FaqItem[] = [
    {
        question: "What does a urogynecologist treat?",
        answer: "A urogynecologist treats pelvic floor disorders in women: pelvic organ prolapse, urinary incontinence (stress, urgency, mixed and overflow), difficulty emptying the bladder or bowel, and related bladder problems. The specialty is also called female urology.",
    },
    {
        question: "Is leaking urine after childbirth normal?",
        answer: "It is common, but it is not something you have to live with. Childbirth can weaken the pelvic floor and the bladder outlet, which leads to leakage on coughing, sneezing or exercise. Pelvic floor exercises, physiotherapy, medication and, if needed, surgery can all help, so it is worth getting it checked.",
    },
    {
        question: "Does prolapse always need surgery?",
        answer: "No. Prolapse affects about 1 in 3 women who have had children, but only around 1 in 9 women need surgery for it. Physiotherapy, pelvic floor exercises and a pessary can control symptoms for many women. Untreated prolapse tends to worsen over time, so early assessment gives you more non-surgical options.",
    },
    {
        question: "What happens at a urogynecology consultation?",
        answer: "The doctor asks about your symptoms, pregnancies and medical history, then performs a physical examination, including a vaginal examination, to identify which support has weakened. Depending on your symptoms, further tests such as a cystoscopy may be suggested before a treatment plan is agreed with you.",
    },
    {
        question: "Is a cystoscopy painful?",
        answer: "A sedative and anaesthetic are given before the procedure, so most women feel little discomfort. Mild burning when passing urine can occur afterwards. Contact your doctor if you see bright red blood in your urine, develop a fever over 100°F (38°C), or have pain or burning that lasts more than 2 days.",
    },
    {
        question: "How do I book a urogynecology appointment at AMVI Hospitals?",
        answer: "Use the appointment form on our Contact page, or call Puppalaguda on +91 91000 09669 or Attapur on +91 80088 42200. You can also message us on WhatsApp.",
    },
]

export const urogynecologyHub: HubContent = {
    overviewHeading: "Pelvic floor care for women at AMVI Hospitals",
    intro: urogynecologyIntro,
    image: "/images/doctor-consultation.jpg",
    imageAlt: "Doctor consultation at AMVI Hospitals, Hyderabad",
    conditionsHeading: "Urogynecology conditions and procedures",
    conditions: urogynecologyConditions,
    symptomsHeading: "Symptoms worth getting checked",
    symptomsLead: "These are common, and treatable. If any of them affect your day, book a consultation.",
    symptoms: urogynecologySymptoms,
    approachHeading: "From first visit to recovery",
    approach: urogynecologyApproach,
    faqHeading: "Questions about urogynecology",
    faqs: urogynecologyFaqs,
}
