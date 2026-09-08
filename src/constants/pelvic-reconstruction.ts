import { DiagnosisStep } from "@/types/condition-page"

export const pelvicReconstructionIntro: string =
    "Pelvic reconstruction is used to treat pelvic floor issues in women. Pelvic floor reconstruction covers a range of surgical procedures used to treat pelvic organ prolapse — helping to restore the integrity and strength of the pelvic floor when its muscles are weakened or damaged, often due to childbirth."

export const pelvicReconstructionContext: string =
    "These potential problems involve the urinary tract, rectum, vagina and other related structures. This field of medicine is called urogynecology."

export const pelvicReconstructionApproachNote: string[] = [
    "There are non-surgical strategies that can strengthen the pelvic floor in some cases, including physical exercises and pessaries.",
    "Surgery is considered once symptoms become too intrusive on daily life and non-surgical approaches haven't provided relief.",
]

export const pelvicNonSurgical: DiagnosisStep[] = [
    { title: "Pessary", description: "A device inserted into the vagina to support the pelvic organs — can also be fitted to target specific symptoms." },
    { title: "Kegel exercises", description: "Targeted pelvic floor exercises to strengthen the supporting muscles." },
    { title: "Weight loss", description: "Reducing pressure on the pelvic floor can ease symptoms in some cases." },
]

export const pelvicSurgicalOptions: DiagnosisStep[] = [
    { title: "Obliterative Surgery", description: "Narrows or closes off the vagina to provide support for prolapsed organs. Sexual intercourse is not possible after this procedure." },
    { title: "Reconstructive Surgery", description: "Reconstructs the pelvic floor with the goal of restoring the organs to their original position. Some approaches are done through an incision within the vagina; others through an incision in the abdomen, or with laparoscopy." },
]

export const pelvicRoboticNote: string =
    "A range of pelvic reconstruction procedures are available, using both robotic and traditional surgical approaches. Robotic-assisted surgery can be less invasive and more precise than traditional surgery, and may be used in some cases of vaginal prolapse. Surgery for pelvic organ prolapse can be approached through the vagina or through the abdomen."

export const pelvicReconstructiveTypes: string[] = [
    "Fixation or suspension using one's own tissues (uterosacral ligament suspension and sacrospinous fixation)",
    "Anterior and posterior colporrhaphy",
    "Sacrocolpopexy and sacrohysteropexy",
    "Surgery using vaginally placed mesh",
]

export const pelvicRecoveryNote: string =
    "After surgery, you can expect some discharge and spotting from the vagina for about 6 weeks, which reduces over time. If bleeding increases, contact your doctor immediately. Dissolving stitches are typically represented by a yellowish-white, watery vaginal discharge."