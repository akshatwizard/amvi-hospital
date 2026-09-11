import { DiagnosisStep, FaqItem } from "@/types/condition-page"

export const painlessDeliveryIntro: string[] = [
    "Painless delivery follows the same process as a normal delivery, with one key difference — an epidural is given to almost eliminate labour pain. It's a natural question for any expecting mother to want to understand exactly how it works before deciding if it's right for her.",
]

export const epidiuralSteps: DiagnosisStep[] = [
    { title: "IV fluids", description: "Once active labour begins, IV fluids are given — typically 1–2 litres over the course of labour and delivery." },
    { title: "Positioning", description: "An anaesthetist helps you into a comfortable position that makes the injection easier and more effective." },
    { title: "Injection & catheter placement", description: "After cleaning the area, a small amount of local anaesthetic numbs the lower back, and a thin catheter is threaded into the epidural space — the area around the spinal nerves." },
    { title: "Onset", description: "The epidural typically takes 5 to 30 minutes to reach full effect." },
]

export const painlessDeliveryAdvantages: string[] = [
    "Avoids the stress hormones that labour pain triggers, which can distress both mother and baby",
    "Often shortens the overall duration of delivery",
    "Helps keep blood pressure, pulse, and heart rate under control",
    "Makes an emergency C-section easier to perform quickly if needed",
    "Allows for a natural vaginal birth with minimal intervention",
    "Can be requested at any point during labour if the pain becomes too much to manage",
    "Helps the mother stay focused and relaxed, reducing exhaustion and the risk of post-partum complications",
    "Relaxes the pelvic and vaginal muscles, helping the baby descend more easily",
    "Helps prevent labour-related blood pressure spikes",
]

export const painlessDeliveryDisadvantages: string[] = [
    "A sudden drop in blood pressure, in rare cases",
    "Backache, dizziness, or shivering",
    "Headache after the procedure",
    "Temporary difficulty passing urine, sometimes requiring a catheter",
    "Reduced pushing ability due to numbness, which may call for vacuum assistance or a C-section",
    "Labour can sometimes take longer with an epidural in place",
    "Numbness across the lower body, meaning it may be a while before you can walk",
    "In rare cases, a drop in the mother's blood pressure can also lower the baby's heart rate, occasionally requiring an emergency C-section",
]

export const epiduralExplainer: string =
    "An epidural is an injection-based method of pain relief during labour. An anaesthesiologist injects the lower back and places a thin plastic tube through which pain-relieving medication is released around the spinal cord. It's only given once you're in active labour — generally once you're having at least three contractions every ten minutes."

export const painlessDeliveryAlternatives = [
    { name: "Entonox", description: "A gas mixture breathed in through a mask, available to all pregnant women. It works within seconds and can be self-administered under a trained nurse's supervision." },
    { name: "Labouring in water", description: "Some women are offered the option to labour in a pool of warm water, which has a calming effect. Trained nurses help you find a comfortable, supported position." },
]

export const painlessDeliveryFaqs: FaqItem[] = [
    { question: "Is an epidural really painless?", answer: "It substantially reduces pain and sensation in the lower half of the body, but it doesn't always provide complete pain relief." },
    { question: "Is an epidural injection safe?", answer: "Yes — epidurals are considered safe for both mother and baby when administered by trained anaesthesiologists." },
]