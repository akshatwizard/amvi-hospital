import { DiagnosisStep } from "@/types/condition-page"

export const vulvarCancerIntro: string =
    "A lump on the vulva causing intense itching and pain in the area may be a sign of vulvar cancer. Cancer is the abnormal growth of cells that clump together to form tumours — if a tumour is malignant, the cancer cells can spread through the bloodstream to other parts of the body."

export const vulvarCancerSymptoms: string[] = [
    "Persistent itching",
    "Pain and tenderness",
    "Bleeding not related to menstruation",
    "Discoloration",
    "Skin thickening",
    "A lump or sores",
    "Abnormal bleeding",
    "Burning",
]

export const vulvarCancerDiagnosisIntro: string =
    "To diagnose the condition, the doctor may perform a physical examination. Any abnormality of the vulva can be detected through colposcopy, a procedure using a device that works like a magnifying glass to check for abnormalities."

export const vulvarCancerBiopsyNote: string =
    "A biopsy is done to check for cancer cells in the area — local anaesthesia is given, and a small part of the affected area is removed for testing using a scalpel. Stitches may be needed depending on how much tissue is removed."

export const vulvarCancerStagingNote: string =
    "Staging tests are done to determine the stage or extent of the cancer's spread — the doctor examines the pelvis for signs of spread."

export const vulvarCancerImaging: DiagnosisStep[] = [
    { title: "CT scan", description: "Computerized Tomography creates 2D and 3D images of the affected areas." },
    { title: "X-ray", description: "Used to check the chest and abdomen for signs of cancer spread." },
    { title: "MRI", description: "Magnetic Resonance Imaging uses a magnetic field to produce clear images of the organs." },
    { title: "Ultrasound", description: "Uses high-frequency sound waves to create images of the organs." },
]

export const vulvarCancerStages: DiagnosisStep[] = [
    { title: "Stage I", description: "The tumour is present on the vulva with no spread of cancer to other parts of the body or lymph nodes." },
    { title: "Stage II", description: "The tumour spreads to nearby areas like the urethra, anus and vagina." },
    { title: "Stage III", description: "Lymph nodes are affected by cancer spread." },
    { title: "Stage IV A", description: "Cancer spreads to the lymph nodes, bladder, urethra, vagina, rectum and pelvic bone." },
    { title: "Stage IV B", description: "Distant parts of the body are affected by cancer spread." },
]

export const vulvarCancerTreatmentIntro: string =
    "Treatment depends on the stage of cancer and the general health of the patient. A procedure involving excision of tissue affected with cancer, along with a margin of normal tissue, is done to ensure all cancer cells are removed."

export const vulvarCancerProcedures: DiagnosisStep[] = [
    { title: "Partial vulvectomy", description: "A surgical procedure in which the affected part of the vulva is removed." },
    { title: "Radical vulvectomy", description: "The entire vulva, including the clitoris and surrounding tissues, is surgically removed." },
    { title: "Pelvic exenteration", description: "For severe cancer that has spread beyond the vulva, the entire vulva and all affected organs are surgically removed." },
    { title: "Reconstructive surgery", description: "Performed if the removal of skin is extensive, to restore form and function." },
    { title: "Lymph node removal", description: "Affected lymph nodes are also surgically removed." },
    { title: "Radiation therapy", description: "High-power X-rays are used to kill cancer cells." },
    { title: "Chemotherapy", description: "Chemical drugs, given orally or intravenously, are used in combination with radiation therapy." },
]

export const vulvarCancerFollowUp: string =
    "Regular checkups after treatment are essential. The doctor recommends follow-up examinations twice every year for the first 5 years after treatment."

export const vulvarCancerPrevention: string[] = [
    "Practice safe sex — HPV, which spreads through sexual transmission, can cause vulvar cancer, so using a condom helps protect against it.",
    "Limiting the number of sexual partners reduces exposure to HPV.",
    "Having sex at an early age increases the risk of HPV infection.",
    "Undergo regular pelvic exams in which the vulva is examined for any abnormalities.",
    "Gardasil and Cervarix are two vaccinations developed to give protection against HPV.",
]