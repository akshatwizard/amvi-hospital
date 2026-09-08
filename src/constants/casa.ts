import { Move, Shapes } from "lucide-react"
import { IconItem } from "@/types/condition-page"

export const casaIntro: string[] = [
    "Computer Assisted Semen Analysis (CASA) is an umbrella term for automatic and semi-automatic techniques used to evaluate semen. It analyses sperm using image analysis and cell-movement tracking on a digitising tablet, producing fast, accurate, and objectively repeatable results — free of the variation that comes with a technician assessing samples by eye.",
]

export const semenAnalysisIntro: string =
    "A semen analysis screens for male fertility problems. A specimen is typically collected by masturbation into a sterile cup (or, in some cases, via a special condom during intercourse). Traditionally, evaluation was done manually — a lab technician looking through a microscope and counting sperm by hand."

export const manualParameters: string[] = [
    "Volume of ejaculate",
    "Concentration of sperm",
    "Motility (percentage of sperm that are moving)",
    "Progressive motility (scored 1, poor, to 4, best)",
    "pH (acidity of the fluid)",
    "Morphology (appearance of the sperm)",
]

export const casaComparison = {
    manual: "Manual analysis depends on a technician's individual judgement — what counts as \"fast,\" \"medium,\" or \"slow\" sperm movement was largely subjective. Studies found that different technicians would often produce noticeably different sperm counts or motility results from the very same sample.",
    computerised: "A high-resolution video camera captures the sample, feeding data to software that evaluates dozens of individual sperm parameters. Any technician running the same sample gets the same result, since the assessment no longer depends on individual visual judgement — making results both more detailed and more reproducible.",
}

export const casaMeasurements: IconItem[] = [
    { icon: Move, title: "Sperm motility", description: "Measures how many sperm move rapidly in a forward, progressive direction — one of the most important factors in evaluating male fertility." },
    { icon: Shapes, title: "Sperm morphology", description: "Assesses how many sperm have a normal shape and structure. Manual assessment shows significant variation between technicians, while computerised analysis applies precise, consistent measurements." },
]