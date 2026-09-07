import { Shield, ShieldCheck, ShieldPlus } from "lucide-react"
import { IconItem, DiagnosisStep } from "@/types/condition-page"

export const hpvIntro: string[] = [
    "HPV vaccines protect against infection with human papillomavirus (HPV) — a group of more than 200 related viruses, over 40 of which spread through direct sexual contact. Some HPV types are considered \"high risk\" because they're linked to the development of certain cancers, while others cause conditions like warts. HPV infections usually cause no symptoms, so most people don't know they're infected.",
]

export const hpvLinkedCancers: string[] = [
    "Cervical cancer — high-risk HPV types are found in more than 99% of cases",
    "Vaginal cancer",
    "Vulval cancer",
    "Anal cancer",
    "Cancer of the penis",
    "Some cancers of the head and neck",
]

export const hpvVaccineTypes: IconItem[] = [
    { icon: ShieldCheck, title: "Quadrivalent (Gardasil)", description: "Targets HPV types 6, 11, 16, and 18." },
    { icon: ShieldPlus, title: "9-valent (Gardasil 9)", description: "Covers the same four types as the quadrivalent vaccine, plus types 31, 33, 45, 52, and 58." },
    { icon: Shield, title: "Bivalent (Cervarix)", description: "Targets HPV types 16 and 18 specifically." },
]

export const hpvSchedule: DiagnosisStep[] = [
    { title: "Before age 15", description: "Two doses are given at 0 and 6–12 months. The vaccine is ideally given before the start of sexual activity and can be administered as early as age 9." },
    { title: "Age 15 or older", description: "Three doses are given at 0, 1–2 months (typically 2), and 6 months. Minimum spacing is 4 weeks between the first two doses and 12 weeks between the second and third." },
    { title: "Age 27–45", description: "Recommended on an individual basis, particularly for previously unvaccinated adults with future HPV exposure risk or occupational exposure — though effectiveness is reduced compared to earlier vaccination, especially if already sexually active." },
    { title: "Testing & revaccination", description: "No HPV testing is required before vaccination, and no post-vaccination antibody testing is recommended. Protection lasts many years, so revaccination after a full course isn't typically needed." },
]

export const hpvContraindications: string =
    "The HPV vaccine isn't recommended for pregnant women, or for anyone who has had a life-threatening allergic reaction to any vaccine ingredient or a previous dose. Those who are moderately or severely unwell should wait until they've recovered before vaccinating — and any severe allergies should always be discussed with your doctor beforehand."

export const hpvSideEffects: string[] = [
    "Soreness, swelling, or redness at the injection site",
    "Fever",
    "Headache",
    "Fatigue",
    "Nausea",
    "Muscle or joint pain",
    "Brief fainting spells (possible after any injection, not unique to this vaccine)",
]