import { CalendarClock, Baby, Scissors, Stethoscope, Activity } from "lucide-react"
import { IconItem } from "@/types/condition-page"

export const adenomyosisIntro: string[] = [
    "Adenomyosis occurs when the inner lining of the uterus (the endometrium) breaks through into the muscle wall (the myometrium). In a healthy uterus, there's a clear boundary between these two layers — in adenomyosis, that boundary blurs, often leading to an enlarged, \"bulky\" uterus along with swelling and discomfort. Not every bulky uterus means adenomyosis, though, so an accurate diagnosis needs a proper evaluation rather than assumption from symptoms alone.",
]

export const adenomyosisSymptoms: string[] = [
    "Heavy or prolonged menstrual bleeding",
    "Severe menstrual cramps",
    "Pain during intercourse",
    "An enlarged uterus",
]

export const adenomyosisRiskFactors: IconItem[] = [
    { icon: CalendarClock, title: "Age", description: "Most commonly diagnosed in women in their 40s and 50s, though it can occur in anyone who has had menstrual periods." },
    { icon: Baby, title: "Childbirth", description: "Women who have given birth, particularly multiple times, appear to carry a higher risk — possibly linked to uterine inflammation during childbirth." },
    { icon: Scissors, title: "Prior uterine surgery", description: "Procedures like a C-section or fibroid removal can disrupt the boundary between the endometrium and myometrium." },
    { icon: Stethoscope, title: "Endometrial procedures", description: "Procedures affecting the endometrium, such as dilation and curettage (D&C), are sometimes associated with higher risk." },
    { icon: Activity, title: "Hormonal factors", description: "Excess oestrogen — from conditions like obesity or hormone replacement therapy — may play a role in development." },
]