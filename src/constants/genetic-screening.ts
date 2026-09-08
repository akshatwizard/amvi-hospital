import { DiagnosisStep } from "@/types/condition-page"

export const pgsIntro: string[] = [
    "Preimplantation Genetic Screening (PGS) checks an embryo's chromosomal material before it's transferred during an IVF cycle. It screens all 23 chromosome pairs for abnormalities — a major cause of failed implantation and early miscarriage — helping identify which embryos are chromosomally healthy before transfer.",
]

export const pgsBenefits: string[] = [
    "Higher successful implantation rates",
    "Better outcomes for single embryo transfer",
    "Improved fertility success rates for women above 35",
    "Detection of chromosomal abnormalities before implantation",
]

export const pgsConditions: string[] = [
    "Frequent or recurrent miscarriages",
    "Repeated IVF failures",
    "Either partner carrying a hereditary disorder, such as colour blindness or thalassemia",
]

export const pgsSteps: DiagnosisStep[] = [
    { title: "IVF cycle begins", description: "Eggs are collected and fertilised as part of a standard IVF cycle." },
    { title: "Embryo development", description: "Embryos are cultured and allowed to develop for 3 to 5 days." },
    { title: "Biopsy", description: "An embryologist carefully removes a small number of cells from the embryo for testing." },
    { title: "Chromosomal analysis", description: "The removed cells are screened across all 23 chromosome pairs for abnormalities." },
    { title: "Embryo selection", description: "A chromosomally healthy embryo is selected and transferred into the uterus." },
    { title: "Freezing remaining embryos", description: "Any additional healthy embryos are frozen for potential future use." },
]

export const pgsAdvantages: string[] = [
    "All 23 chromosome pairs are screened, unlike the older FISH technique which checks only five",
    "Array CGH — a modern micro-array procedure — is used for genetic screening",
    "Reports are turned around quickly to support a fresh blastocyst transfer where possible",
    "A dedicated team of IVF specialists and embryologists oversees the full screening process",
    "The lab follows international standards for genetic testing",
]

export const pgsRisks: string[] = [
    "Some embryos may be affected by the cell-removal process itself",
    "Results can occasionally be inconclusive due to technical factors",
    "Chromosomal mosaicism — where an embryo contains cells with different chromosomal makeups — can occasionally lead to an inaccurate result",
]