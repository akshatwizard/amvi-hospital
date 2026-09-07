import { Shield, CalendarX, CircleDot, Ban, Pill, PillBottle, PenLine, Syringe, Square, Circle, XCircle, Scissors } from "lucide-react"
import { IconItem } from "@/types/condition-page"

export const contraceptionIntro: string[] = [
    "Contraception refers to any medication or device used to prevent pregnancy. There's no single right choice — the best method depends on your health, lifestyle, and what you're looking for, whether that's daily convenience, long-term protection, or a permanent solution.",
]

export const contraceptionHowItWorks: IconItem[] = [
    { icon: Shield, title: "Barrier methods", description: "Physically prevent sperm from reaching the egg — condoms, diaphragms, cervical caps, and contraceptive sponges." },
    { icon: CalendarX, title: "Ovulation suppression", description: "Prevent the ovaries from releasing eggs that could be fertilised — birth control pills, patches, injections, vaginal rings, and emergency contraception." },
    { icon: CircleDot, title: "Intrauterine devices (IUDs)", description: "Implanted into the uterus and left in place for several years, depending on the type." },
    { icon: Ban, title: "Sterilisation", description: "A permanent procedure that prevents pregnancy for good, for either partner." },
]

export const contraceptionBenefits: string[] = [
    "Regulates and predicts menstrual periods",
    "Reduces uncomfortable period symptoms",
    "Can improve acne",
    "Eases symptoms linked to endometriosis and PCOS",
]

export const contraceptionMethods: IconItem[] = [
    { icon: Pill, title: "Oral contraceptives", description: "A daily pill containing oestrogen and progestin that prevents ovulation by regulating pituitary hormone secretion." },
    { icon: PillBottle, title: "Mini-pill", description: "A progestin-only daily pill that thickens cervical mucus, with the added benefit of some protection against pelvic inflammatory disease and certain cancers — often used for breastfeeding mothers." },
    { icon: PenLine, title: "Implant (Implanon)", description: "A small rod inserted under the skin that releases hormone for up to three years, preventing ovulation and thickening cervical mucus." },
    { icon: CircleDot, title: "Intrauterine device (IUD)", description: "A small T-shaped device placed in the uterus. Hormonal IUDs are typically replaced yearly, while copper IUDs can last up to 10 years." },
    { icon: Ban, title: "Non-surgical sterilisation", description: "A thin tube placed through the vagina into each fallopian tube causes scar tissue to form, permanently sealing them." },
    { icon: Syringe, title: "Depo-Provera", description: "A progestin injection given every three months that prevents ovulation and thickens cervical mucus." },
    { icon: Square, title: "Patch", description: "A thin patch worn on the skin that releases oestrogen and progestin into the bloodstream." },
    { icon: Circle, title: "Vaginal ring", description: "A small flexible ring inserted into the vagina, releasing hormones for three weeks at a time." },
    { icon: Shield, title: "Cervical cap & diaphragm", description: "Dome-shaped rubber devices inserted to shield the cervix — the cap is smaller and can stay in place longer than a diaphragm." },
]

export const contraceptionSurgical: IconItem[] = [
    { icon: XCircle, title: "Hysterectomy", description: "Surgical removal of the uterus — an irreversible form of permanent birth control." },
    { icon: Scissors, title: "Tubal ligation", description: "The fallopian tubes are cut, sealed, or banded to prevent an egg from reaching the uterus. Reversal is possible but not always successful." },
]