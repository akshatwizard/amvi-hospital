import { DiagnosisStep } from "@/types/condition-page"

export const hrpRiskCategories: string[] = [
    "Maternal age",
    "Lifestyle choices",
    "Pregnancy conditions",
    "Medical history",
]

export const hrpEmergencySigns: string[] = [
    "You lose consciousness — brief your partner, neighbour or colleague in advance on what to do in this situation, since you won't be able to take action yourself",
    "You experience vaginal bleeding",
    "You experience unbearable pain in your pelvis or belly",
    "You have fluid leaking from your vagina — this could mean the umbilical cord is bulging into your vagina",
]

export const hrpWarningSignsIntro: string =
    "The following warning signs require an immediate visit to the doctor or a health facility:"

export const hrpWarningSigns: string[] = [
    "Fever above 38.5°C for more than 24 hours",
    "Headache or blurring of vision",
    "Generalised swelling of the body and puffiness of the face",
    "Palpitations, easy fatigability, and breathlessness at rest",
    "Pain in the abdomen",
    "Vaginal bleeding or watery discharge",
    "Reduced fetal movements",
]

export const hrpManagementIntro: string =
    "Management of a high-risk pregnancy depends on the woman's specific risk factors. Healthcare providers keep a close watch on the woman and the pregnancy to detect any potential problems as quickly as possible, so treatment can start before the woman's or fetus's health is in danger."

export const hrpConditions: string[] = [
    "Severe anaemia (Hb less than 7 gm/dl)",
    "Pregnancy-induced hypertension, pre-eclampsia",
    "Syphilis, HIV positive",
    "Gestational diabetes mellitus",
    "Hypothyroidism",
    "Young primi (under 20 years), or elderly gravida (over 35 years)",
    "Twin or multiple pregnancy",
    "Malpresentation",
    "Previous caesarean delivery",
    "Low-lying placenta, placenta praevia",
    "Positive bad obstetric history (history of stillbirth, abortion, congenital malformation, obstructed labour, premature birth, etc.)",
    "Rh negative",
    "History of any current or past systemic illness",
]

export const hrpPreventionIntro: string =
    "If you are planning to get pregnant, it is natural to want to take every measure possible to prevent a high-risk pregnancy. Practicing healthy behaviour and undertaking tests early can minimize the chance of complications. A high-risk pregnancy typically arises from one or more of the following:"

export const hrpPreventionFactors: string[] = [
    "A pre-existing medical condition in the mother, such as diabetes or hypertension",
    "A pregnancy-related problem that leads to complications, such as premature labour",
    "The age of the expecting mother",
    "Lifestyle-related disorders",
]

export const hrpDiagnosisIntro: string =
    "High-risk pregnancies can be diagnosed in a number of ways by a medical practitioner. The following tests help identify high-risk pregnancy problems and will be prescribed by your doctor depending on your condition or symptoms:"

export const hrpDiagnosisTests: string[] = [
    "Ultrasounds",
    "Blood testing",
    "Urinalysis",
]

export const hrpTreatmentIntro: string =
    "Depending on the risk factors you are diagnosed with, high-risk pregnancy treatment will be prescribed. AMVI Hospital is equipped with state-of-the-art infrastructure and a highly skilled, experienced team of professionals to provide the best possible care for every type of high-risk pregnancy situation. Common methods of treatment include:"

export const hrpTreatments: DiagnosisStep[] = [
    { title: "Gestational Diabetes", description: "This condition can increase the risk of complications in pregnancy. However, you can have a healthy pregnancy and birth by following a diet and treatment plan prescribed by a doctor." },
    { title: "High Blood Pressure", description: "During pregnancy, some changes to blood pressure medication may be recommended. Lifestyle changes such as limiting salt intake and regular exercise may also be prescribed." },
    { title: "Pre-eclampsia", description: "If you are experiencing mild symptoms, bed rest may be prescribed. You may also be asked to take vitamins E and C. Generally, this condition resolves after delivery." },
]