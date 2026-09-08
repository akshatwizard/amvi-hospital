import { Pill, Syringe, Droplet, Brain, Activity, Waves, CalendarX, AlertTriangle } from "lucide-react"
import { IconItem, DiagnosisStep } from "@/types/condition-page"

export const oiIntro: string[] = [
    "For women with irregular periods, it can be genuinely hard to know when ovulation is happening — which makes natural conception harder too. Normally, one egg matures and is released each month. Ovulation induction uses medication to encourage the development of multiple eggs in a single cycle, improving the chances of conception, and is often recommended alongside other fertility treatments like IUI and IVF.",
]

export const oiWhatIsIt: string[] = [
    "Irregular periods affect a meaningful share of women, and ovulation induction (OI) is one of the primary treatments used to address the fertility challenges that come with them. Oral or injectable medication is prescribed to stimulate the ovarian follicles, supporting the development and release of multiple mature eggs — with the sole goal of improving the odds of conception.",
    "Throughout the process, ovulation is tracked through blood tests and ultrasound to confirm the follicles are developing properly and to time the next step correctly, whether that's IUI, egg retrieval, or continuing on to IVF.",
]

export const oiMedications: IconItem[] = [
    { icon: Pill, title: "Clomid (clomiphene citrate)", description: "An oral medication that stimulates the pituitary gland to release more of the hormones needed to trigger the ovaries — the most commonly used first-line treatment." },
    { icon: Syringe, title: "Gonadotropins", description: "Injectable medications — including Gonal-F, Bravelle, and Ovidrel — that act directly on the ovaries to develop multiple eggs and trigger their release." },
    { icon: Droplet, title: "Bromocriptine", description: "Used when excess prolactin from the pituitary gland is preventing eggs from maturing properly — bromocriptine helps bring prolactin levels back down." },
]

export const oiProcess: DiagnosisStep[] = [
    { title: "Oral medication (most common first step)", description: "Clomiphene citrate is typically prescribed for five days early in the menstrual cycle. Ovulation usually follows around 5 to 10 days after the course ends." },
    { title: "Monitoring", description: "Blood tests track hormone levels — including oestrogen — while ultrasound confirms whether the follicles are developing and maturing as expected." },
    { title: "Injectable medication (if needed)", description: "If oral medication alone isn't effective, an hCG injection is used to trigger ovulation once follicles appear mature on ultrasound, typically starting around day 2 or 3 of the cycle." },
    { title: "Continued monitoring", description: "FSH and hormone levels are monitored closely throughout to reduce the risk of an excessive ovarian response." },
]

export const oiWhoNeedsIt: IconItem[] = [
    { icon: Brain, title: "Neural disorders", description: "Disruption to the brain-to-ovary hormonal signal can prevent normal egg production — sometimes linked to heavy exercise, being underweight, or night-shift work." },
    { icon: Activity, title: "PCOS", description: "Polycystic ovarian syndrome is one of the most common hormonal causes of irregular ovulation." },
    { icon: Waves, title: "Hormone imbalance", description: "Elevated or reduced prolactin and other hormonal imbalances can disrupt normal ovulation." },
    { icon: CalendarX, title: "Premature menopause", description: "A temporary or permanent decline in egg supply, sometimes still responsive to treatment depending on severity." },
    { icon: AlertTriangle, title: "Ovarian failure", description: "Premature damage to ovarian follicles — often a milder, temporary issue that can respond well to ovulation induction." },
]