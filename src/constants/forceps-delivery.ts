import { DiagnosisStep } from "@/types/condition-page"

export const forcepsIntro: string[] = [
    "A forceps delivery is a type of assisted vaginal delivery, sometimes needed during the course of a vaginal birth. Forceps are an instrument made of two metal, ladle-shaped pieces — curved to fit snugly around the baby's head — manoeuvred to cradle and guide the baby out through the birth canal.",
]

export const forcepsIndications: string[] = [
    "Labour has stalled despite the mother actively pushing",
    "Immediate delivery is needed due to foetal distress, shown by a change in the baby's heartbeat",
    "The mother has a health condition that makes prolonged pushing unsafe — such as aortic valve stenosis, high blood pressure, an aneurysm, or glaucoma (a caesarean may be recommended instead if these are severe)",
    "The baby is facing up (occiput posterior) rather than down (occiput anterior)",
]

export const forcepsSteps: DiagnosisStep[] = [
    { title: "Positioning", description: "The doctor gently inserts two or more fingers into the vagina, beside the baby's head." },
    { title: "Placing the forceps", description: "One side of the forceps is slid between the fingers and the baby's head, then the other side is positioned on the opposite side." },
    { title: "Locking", description: "Both halves of the forceps are locked together, safely cradling the baby's head between them." },
    { title: "Repositioning (if needed)", description: "If the baby is facing upward, the doctor may use the forceps between contractions to gently shift the head into a better position." },
    { title: "Timing the hold", description: "As labour progresses, the doctor may remove the forceps before the widest part of the baby's head passes through, or keep hold of them a little longer." },
    { title: "Guiding delivery", description: "With the next contraction, the doctor gently guides the baby the rest of the way through the birth canal using the forceps." },
]

export const forcepsNotAdvisable: string[] = [
    "The mother's pelvis is too small for the baby to fit through",
    "The pregnancy is preterm (roughly before 34 weeks)",
    "The baby's head position isn't clear",
    "The baby has a known bleeding disorder (such as haemophilia) or a condition affecting bone strength",
    "The baby is in a breech position (buttocks or feet first)",
    "The baby is emerging shoulder first",
    "The baby is estimated to be large",
    "The baby's head hasn't yet moved past the midpoint of the birth canal",
]

export const forcepsBenefits: string[] = [
    "Associated with less procedural failure than vacuum extraction, which can matter when foetal distress is involved",
    "Typically means a shorter hospital stay and fewer readmissions compared to a caesarean section",
]

export const forcepsMotherRisks: string[] = [
    "Vaginal tears during delivery",
    "Bladder or urethra injury",
    "Faecal or urinary incontinence afterward",
    "Perineal pain",
    "Difficulty urinating",
    "Anaemia",
    "Weakening of the muscles supporting the pelvic organs",
]

export const forcepsBabyRisks: string[] = [
    "Facial bruising from the forceps, which fades within a few days",
    "Nerve damage to the face from forceps pressure",
    "Facial palsy",
    "Skull fracture (rare)",
    "Internal bleeding within the skull (rare)",
    "Temporary eye trauma from forceps pressure",
    "Seizures (rare)",
]

export const forcepsAfterProcedure: string =
    "After delivery, your healthcare provider will check for any tears the forceps may have caused and repair them as needed. Your baby will also be monitored closely for any signs of complications."

export const forcepsRecoveryTips: string[] = [
    "Include plenty of fibrous foods in your diet to avoid constipation, and use stool softeners if needed",
    "Drink plenty of water",
    "With your doctor's guidance, Kegel exercises can help tone and strengthen your pelvic floor muscles",
]