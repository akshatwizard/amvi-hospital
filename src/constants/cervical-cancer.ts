import { DiagnosisStep, IconItem } from "@/types/condition-page"
import { Scissors, Radiation, Pill } from "lucide-react"

export const cervicalCancerIntro: string =
    "Cervical cancer refers to the cancer of the uterine cervix, i.e. the lower part of the uterus, which extends slightly into the top of the vagina. Cervical cancer is the most common cancer in Indian women and the second most frequent cancer worldwide."

export const cervicalCancerSymptoms: string[] = [
    "Abnormal vaginal bleeding",
    "Spotting or bleeding between periods",
    "Heavier or longer periods than usual",
    "Pain during sexual intercourse",
    "Back pain",
    "Fatigue",
    "Leg pain",
    "Pelvic pain",
    "Single swollen leg",
    "Weight loss",
    "Vaginal bleeding after sex",
    "Vaginal bleeding after menopause",
    "Other abnormal vaginal discharge",
]

export const cervicalCancerSymptomsNote: string =
    "Many initial symptoms may coincide with other reproductive conditions, making it harder to spot the issue early on."

export const cervicalCancerRiskFactors: string[] = [
    "Tobacco smoking",
    "Overweight",
    "HIV infection",
    "Current or past Chlamydia infection",
    "Immune system suppression",
    "Long-term use of oral contraceptives",
    "Having more than three full-term pregnancies",
    "Being pregnant before the age of 17",
    "Living in unhygienic conditions",
    "Family history of cervical cancer",
]

export const cervicalCancerDiagnosisIntro: string =
    "If there is a suspicion of cervical cancer, the doctor will suggest an examination of the cervix with a special magnifying instrument called a colposcope — a procedure called colposcopy, used to check for abnormal cell growth. A sample of cervical cells is then taken for biopsy or laboratory testing."

export const cervicalCancerDiagnosisMethods: DiagnosisStep[] = [
    { title: "Punch biopsy", description: "A sharp tool is used to pinch off sample cells from the cervical tissue for laboratory testing." },
    { title: "Endocervical curettage", description: "A small, spoon-shaped curette is used to scrape off a tissue sample from the cervix." },
    { title: "Cone biopsy", description: "Performed under general anaesthesia when initial results are concerning — lets the doctor obtain deeper layers of cervical cells for biopsy." },
    { title: "Electrical wire loop", description: "A thin, low-voltage electrical wire is used to obtain a small tissue sample, performed under local anaesthesia." },
]

export const cervicalCancerStages: DiagnosisStep[] = [
    { title: "Stage 0", description: "Abnormal cervical cells are only present on the surface of the cervix, known as CIN 3. This stage is referred to as carcinoma in situ (CIS) and is not included in the FIGO staging system." },
    { title: "Stage I", description: "A small number of tumours are present but have not spread to any tissue, lymph nodes, organs or distant body parts." },
    { title: "Stage II", description: "The tumour begins to spread beyond the cervix and uterus, but has not invaded the lower parts of the vagina or the pelvic walls." },
    { title: "Stage III", description: "Cancer cells grow into the pelvic walls and invade the lower part of the vagina, and the tumour blocks the ureter tubes carrying urine to the bladder — but has not spread to other body parts." },
    { title: "Stage IV", description: "The most advanced stage — cancer invades other parts of the body, including the bladder, rectum and other distant organs." },
]

export const cervicalCancerTreatmentIntro: string =
    "Common treatment options include Surgery, Radiation Therapy, Chemotherapy and Targeted Therapy. Different types of doctors are involved in treating this condition:"

export const cervicalCancerCareTeam: IconItem[] = [
    { icon: Scissors, title: "Gynecologic oncologist", description: "A surgeon who specialises in treating female reproductive cancers through surgical procedures." },
    { icon: Radiation, title: "Radiation oncologist", description: "Uses radiation therapy to treat different types of cancer, including cervical cancer." },
    { icon: Pill, title: "Medical oncologist", description: "Uses chemotherapy and other procedures like targeted therapies to treat cervical cancer." },
]