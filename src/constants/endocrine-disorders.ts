import { CalendarX, Activity, Clock, Sparkles, HeartHandshake, Droplet, Syringe, Pill, ShieldMinus, FlaskConical } from "lucide-react"
import { IconItem } from "@/types/condition-page"

export const endocrineIntro: string[] = [
    "Gynaecological endocrine disorders cover a range of hormonal imbalances that affect the reproductive system — from irregular ovulation to conditions like PCOS, where excess androgen production and disrupted ovulation are the underlying cause. Left unmanaged, these imbalances can raise oestrogen levels and increase the risk of endometrial changes over time, alongside metabolic effects like insulin resistance and elevated cardiovascular risk.",
    "Because the endocrine system regulates so many of the body's hormones, gynaecological endocrine disorders often overlap with wider metabolic and reproductive health — which is why evaluation typically looks beyond the ovaries alone, at thyroid function, insulin sensitivity, and overall hormonal balance.",
]

export const endocrineConditions: IconItem[] = [
    { icon: CalendarX, title: "Menstrual irregularities", description: "Includes amenorrhea (absent periods), oligomenorrhea (infrequent periods), and dysmenorrhea (painful periods)." },
    { icon: Activity, title: "Premenstrual syndrome (PMS)", description: "Hormonal fluctuations causing physical and emotional symptoms in the days before a period." },
    { icon: Droplet, title: "Inappropriate lactation", description: "Milk production unrelated to pregnancy or breastfeeding, often linked to a hormonal imbalance." },
    { icon: Clock, title: "Precocious & delayed puberty", description: "Puberty that begins notably earlier or later than expected, often rooted in a hormonal cause." },
    { icon: Sparkles, title: "Hirsutism", description: "Excessive hair growth in a male-pattern distribution, usually linked to elevated androgen levels." },
    { icon: HeartHandshake, title: "Infertility", description: "Initial evaluation and treatment is offered in-house, with referral to a reproductive endocrinology specialist arranged when needed." },
]

export const endocrineTreatments: IconItem[] = [
    { icon: Pill, title: "Oestrogen therapy", description: "Helps restore hormonal balance in women with low oestrogen levels." },
    { icon: Droplet, title: "Vaginal oestrogen", description: "A localised treatment option for hormone-related vaginal or urinary symptoms." },
    { icon: Syringe, title: "Hormonal birth control", description: "Regulates menstrual cycles and manages symptoms tied to hormonal fluctuation." },
    { icon: ShieldMinus, title: "Anti-androgen medication", description: "Reduces the effects of excess androgen, such as hirsutism and acne." },
    { icon: FlaskConical, title: "Testosterone therapy", description: "Used selectively to address certain hormone-related concerns under medical supervision." },
    { icon: Pill, title: "Metformin", description: "Commonly used to improve insulin sensitivity in conditions like PCOS." },
]