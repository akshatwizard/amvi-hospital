import { DiagnosisStep } from "@/types/condition-page"

export const diagnosticLapIntro: string[] = [
    "A laparoscope is a thin telescope connected to a high-intensity light and a high-resolution monitor. A small hollow tube (port) is placed through the abdominal wall, and the laparoscope is passed through it — giving the surgeon a magnified, real-time view of the inside of the abdomen on screen. In most cases, this alone is enough to diagnose or narrow down what's causing an abdominal problem.",
]

export const diagnosticLapReasons: string[] = [
    "Abdominal pain",
    "Ascites (fluid buildup in the abdomen)",
    "Liver disease",
    "\"Second look\" procedure or cancer staging",
    "Other unexplained abdominal findings",
]

export const diagnosticLapPreOpTests: string[] = [
    "Ultrasound",
    "CT scan",
    "Routine blood test analysis",
    "Chest X-ray or electrocardiogram",
]

export const diagnosticLapAnesthesia = {
    local: "Injected into the abdominal wall to numb the area completely, allowing safe placement of the laparoscope. Most patients feel only a brief, second-long \"bee sting\" sensation. Sedation is typically given alongside it.",
    general: "Used for patients who aren't candidates for sedation-based local anaesthesia, or who prefer to be fully asleep — often preferred for younger patients, those who can't stay still on the table, or those with a medical condition better managed this way. The right choice varies from patient to patient, decided together with your surgeon and anaesthesiologist.",
}

export const diagnosticLapSteps: DiagnosisStep[] = [
    { title: "Anaesthesia", description: "The chosen anaesthesia (local with sedation, or general) is administered so no pain is felt during the procedure." },
    { title: "Port placement", description: "A narrow, tube-like port is placed into the abdominal cavity, typically in the upper abdomen or flank just below the ribs." },
    { title: "Laparoscope insertion", description: "A tiny camera-equipped telescope is passed through the port, giving the surgeon a magnified view of the internal organs on screen." },
    { title: "Additional ports (if needed)", description: "Further ports may be added to help the surgeon examine the internal organs fully and decide on the right diagnosis or treatment." },
    { title: "Closure", description: "Once the procedure is complete, the small incisions are closed with absorbable sutures or surgical tape." },
]

export const diagnosticLapComplications: string[] = [
    "Bleeding — the most common complication of any operation",
    "Infection at the incision site",
    "A small risk of injury to abdominal organs, intestines, the bladder, or blood vessels",
    "Temporary leakage of ascitic fluid from an operative site, in patients who have ascites, before it resolves",
]

export const diagnosticLapConversionNote: string =
    "In a small number of patients, the laparoscopic approach isn't suitable and the surgeon may convert to an open procedure — a judgment call made before or during surgery based purely on what's safest for the patient. This is a sound surgical decision, not a complication."

export const diagnosticLapWarningSigns: string[] = [
    "Fever above 101°F (39°C)",
    "Drainage or redness at an incision site",
    "Continued nausea or vomiting",
    "Increasing abdominal swelling",
    "Bleeding",
    "Chills",
    "Persistent cough or shortness of breath",
    "Inability to urinate",
    "Pain not controlled by medication",
]