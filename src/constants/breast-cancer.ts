import { DiagnosisStep, NamedGroup } from "@/types/condition-page"

export const breastCancerIntro: string =
    "AMVI Hospital offers comprehensive breast cancer treatment services, including minimally invasive procedures and surgical techniques designed for minimal postoperative discomfort and issues such as lymphedema. The holistic evaluation and treatment plan includes breast cancer risk assessment and screening, breast imaging, breast cancer surgery (lumpectomy, mastectomy), breast reconstruction, and support services for women living with breast cancer."

export const breastCancerWhatIs: string =
    "Breast cancer is a form of cancer that develops due to the uncontrolled growth of the cells of the breast. It is one of the most prominent forms of cancer found in women, but can also occur in men."

export const breastCancerOrigins: DiagnosisStep[] = [
    { title: "The Luminal Cells", description: "The milk-producing glands." },
    { title: "The Ducts", description: "Passages that drain milk from the lobules to the nipple." },
    { title: "The Stromal Tissues", description: "Includes the fatty and fibrous connective tissues of the breast." },
]

export const breastCancerSymptoms: string[] = [
    "A lump in the breast",
    "Nipple discharge",
    "Nipple retraction",
    "Dimpling or ulceration of the skin",
    "A lump in the armpit",
]

export const breastCancerRiskFactors: string[] = [
    "Early onset of periods",
    "Late menopause",
    "Null parity or late childbirth",
    "Lack of breastfeeding",
    "Obesity",
    "Hormone replacement therapy",
    "Previous history of radiation",
    "Previous history of breast surgery",
]

export const breastCancerDiagnosisIntro: string =
    "Cancer doctors conduct various tests to diagnose breast cancer and ascertain whether it has spread to other parts of the body. Breast cancer is often diagnosed using the following tests:"

export const breastCancerDiagnosisTests: string[] = [
    "Breast Ultrasound",
    "Diagnostic Mammography",
    "3T Magnetic Resonance Imaging (MRI)",
    "Image-guided Breast Core Biopsy",
    "Immunohistochemistry (IHC)",
    "PET / CT",
    "Sophisticated Interventional Radiology Procedures (Wire Localisation)",
    "Stereotactic Biopsy",
    "Sentinel Node Evaluation (SLNB) using Gamma Probe",
    "Staging Tests",
]

export const breastCancerTypesIntro: string =
    "Breast cancer is not one disease — there are different types and subtypes referred to as breast cancer. This is why the treatment received may be quite different from other treatments women may have."

export const breastCancerTypeGroups: NamedGroup[] = [
    {
        heading: "Non-invasive Breast Cancers",
        items: ["Ductal carcinoma in situ", "Lobular carcinoma in situ"],
    },
    {
        heading: "Invasive Breast Cancers",
        items: [
            "Invasive ductal carcinoma",
            "Invasive lobular carcinoma",
            "Paget's disease of the nipple",
            "Inflammatory breast cancer",
            "Phyllodes tumours of the breast",
            "Locally advanced breast cancer",
            "Metastatic breast cancer",
        ],
    },
]

export const breastCancerSurgicalOptions: DiagnosisStep[] = [
    { title: "Mastectomy", description: "A skin-sparing surgery that removes the whole breast along with the tumour." },
    { title: "Lumpectomy / Breast Conservation Surgery", description: "Removal of the lump around the breast, with 1 cm of axillary lymph clearance." },
    { title: "Breast Reconstruction Surgery", description: "Reconstructive surgery to correct deformities and restore normal function after cancer-related treatment, achieving the best possible repair outcome. Done alongside or after mastectomy/lumpectomy." },
]

export const breastCancerRadiationIntro: string =
    "Radiation therapy uses high-energy waves to kill cancer cells. Advanced radiation therapy techniques used for breast cancer treatment include:"

export const breastCancerRadiationTechniques: string[] = [
    "Single Dose Intra-operative Radiation Therapy (IORT)",
    "3D Conformal Partial Breast Irradiation (CPBI)",
]

export const breastCancerOtherTreatments: DiagnosisStep[] = [
    { title: "Chemotherapy", description: "Involves the use of powerful medicines to kill cancer cells." },
    { title: "Hormone Therapy", description: "Involves the use of hormonal drugs to prevent hormones from fuelling the growth of breast cancer cells." },
    { title: "Targeted Therapy", description: "Targets cancer-specific genes, proteins, or the tissue environment that contribute to cancer growth and survival." },
    { title: "Immunotherapy", description: "Involves the use of medicines that prompt the body's immune system or natural defences to destroy cancer." },
]

export const breastCancerTreatmentNote: string =
    "A patient might receive chemotherapy, hormone therapy or targeted therapy alongside surgery or radiation. This combined approach helps kill any remaining cancer cells during other forms of treatment."

export const breastCancerTreatmentFactors: string[] = [
    "The type of hospital you choose",
    "The fee structure of your care team (surgeons, surgical and radiation oncologists, anaesthetist, diagnostic radiologist, physiotherapist, dietician)",
    "Medicines",
    "Regular evaluation and diagnostic processes",
    "The number of chemotherapy cycles required",
    "Whether radiotherapy is needed",
]