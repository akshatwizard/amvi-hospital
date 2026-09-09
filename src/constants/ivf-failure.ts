import { CalendarClock, Microscope, FlaskConical, Layers, Activity, ShieldAlert, Leaf, Settings, MessageCircle, Users, ScanLine, Stethoscope, RefreshCw } from "lucide-react"
import { IconItem, FaqItem } from "@/types/condition-page"

export const ivfFailureIntro: string[] = [
    "IVF offers higher pregnancy chances than many other fertility treatments, and a good number of couples conceive on an early attempt. But success can vary from cycle to cycle, and IVF failure is sometimes possible due to individual medical factors and clinical conditions that aren't always predictable in advance.",
    "A failed cycle is rarely the end of the road. Reviewing what happened at each stage — stimulation, fertilisation, embryo development, and implantation — often reveals useful information that helps refine the approach for a future attempt.",
]

export const ivfFailureReasons: IconItem[] = [
    { icon: CalendarClock, title: "Age & egg quality", description: "Egg quality and quantity naturally decline with age, especially after 35 — lower quality eggs are more prone to genetic abnormalities that reduce implantation success." },
    { icon: Microscope, title: "Sperm factors", description: "Low sperm count, poor motility, or DNA abnormalities can affect fertilisation and embryo development — often addressed through detailed semen analysis and techniques like ICSI." },
    { icon: FlaskConical, title: "Embryo development problems", description: "Not every fertilised egg develops into a healthy embryo — chromosomal abnormalities or growth arrest can lead to implantation failure or early miscarriage." },
    { icon: Layers, title: "Uterine & endometrial issues", description: "A receptive uterine lining is essential for implantation — thin endometrium, fibroids, polyps, scar tissue, or endometriosis can all interfere with embryo attachment." },
    { icon: Activity, title: "Hormonal imbalances", description: "Oestrogen, progesterone, and thyroid hormones all help prepare the uterus for implantation — imbalances in any of them can reduce the chance of a successful pregnancy." },
    { icon: ShieldAlert, title: "Immune or blood-clotting factors", description: "In some cases, an overactive immune response or a blood-clotting disorder can interfere with implantation and early embryo development." },
    { icon: Leaf, title: "Lifestyle & environmental factors", description: "Nutrition, stress, smoking, alcohol, and environmental toxins can all affect egg and sperm quality, hormone balance, and overall fertility." },
    { icon: Settings, title: "Technical & lab conditions", description: "Even with excellent clinical care, lab conditions — embryo culture environment, handling, timing, and equipment — play a real role in embryo viability." },
]

export const ivfFailureNextSteps: IconItem[] = [
    { icon: MessageCircle, title: "Fertility counselling", description: "A confidential space to process the emotional weight of a failed cycle, learn coping strategies, and regain footing before deciding on next steps." },
    { icon: Users, title: "IVF support networks", description: "Connecting with others going through similar experiences can ease the isolation and offer encouragement from people who genuinely understand." },
    { icon: ScanLine, title: "Endometrial receptivity testing (ERA)", description: "A small endometrial biopsy assessing gene activity to determine the most suitable timing for embryo transfer, aiming to improve implantation odds." },
    { icon: Stethoscope, title: "Uterine & tubal evaluation (HSG)", description: "A detailed look at uterine shape and tubal health to identify conditions that may be interfering with implantation." },
    { icon: RefreshCw, title: "Planning further IVF cycles", description: "Many successful pregnancies happen after more than one attempt — a failed cycle often provides insights that help refine the protocol going forward." },
]

export const ivfFailureFaqs: FaqItem[] = [
    { question: "What are the common causes of IVF failure?", answer: "Poor egg or sperm quality, embryo development issues, genetic abnormalities, uterine conditions, hormonal imbalance, or timing of embryo transfer can all play a role — each case needs individual evaluation to pin down the likely cause." },
    { question: "How is a failed IVF cycle evaluated?", answer: "A detailed review looks at each stage — ovarian stimulation, fertilisation, embryo development, and implantation — to understand what may have affected the result and refine the next plan." },
    { question: "What can improve egg and embryo quality in a future cycle?", answer: "Personalised ovarian stimulation protocols, optimised fertilisation techniques, and extended embryo culture to the blastocyst stage can all help select embryos with better implantation potential." },
    { question: "Is there specialised care for repeated IVF failure?", answer: "Yes — repeated failures typically call for deeper diagnostic testing, more personalised treatment plans, and advanced reproductive techniques to improve the odds next time." },
    { question: "How important is embryo transfer timing?", answer: "It plays a critical role — uterine receptivity assessments help pinpoint the best window for transfer, improving synchronisation between embryo and uterus." },
    { question: "How is poor fertilisation managed?", answer: "Further evaluation of egg and sperm quality is done, and advanced sperm selection or precision fertilisation techniques may be used in a future cycle." },
    { question: "What role does genetic testing play?", answer: "Testing embryos for chromosomal abnormalities can help identify a cause of implantation failure or miscarriage, and may be recommended in selected cases to improve outcomes." },
    { question: "When should couples consider another IVF cycle?", answer: "Timing depends on medical findings, emotional readiness, and overall health — your specialist can guide the right timing after reviewing the previous cycle." },
    { question: "How does counselling help after IVF failure?", answer: "Supportive counselling helps process the stress of a failed cycle, regain emotional balance, and prepare for whatever comes next in the fertility journey." },
    { question: "How can I book a consultation for IVF failure at AMVI Hospital?", answer: "You can schedule a consultation at either the Attapur or Puppalaguda branch by contacting the hospital directly, and it helps to bring your previous cycle records." },
]