import { CircleDot, AlertCircle, AlertTriangle, ArrowDownUp, Dna, Activity, Gauge, Waves, Salad, Eye, ShieldCheck, Scissors, FlaskConical } from "lucide-react"
import { IconItem, DiagnosisStep, FaqItem } from "@/types/condition-page"

export const varicoceleIntro: string[] = [
    "Varicocele occurs when the veins inside the scrotum become abnormally enlarged and twisted — similar to varicose veins in the legs. These veins normally carry blood away from the testicles, and when they dilate, blood flow is affected.",
    "Many men have no noticeable symptoms and go undiagnosed for years. In others, it causes testicular discomfort, heaviness, reduced sperm quality, or infertility, which is why timely diagnosis matters when it is affecting fertility or comfort.",
]

export const varicoceleGrades: IconItem[] = [
    { icon: CircleDot, title: "Grade I (small / subclinical)", description: "The mildest form — enlarged veins aren't noticeable on routine exam and can only be felt during straining (a Valsalva manoeuvre). Usually no visible swelling, though sperm quality can still be affected in some cases." },
    { icon: AlertCircle, title: "Grade II (moderate)", description: "Easily felt without any special manoeuvre, simply by examining the scrotum while standing. Patients may notice dull pain, heaviness, or fertility concerns — medical evaluation is recommended." },
    { icon: AlertTriangle, title: "Grade III (large / severe)", description: "The most advanced stage — veins are clearly visible through the skin and felt easily. More likely to cause pain, testicular changes, and infertility, and treatment is often advised." },
]

export const varicoceleSymptoms: string[] = [
    "Dull or aching scrotal pain, often worse after prolonged standing or activity",
    "Heaviness or a dragging sensation in the scrotum",
    "Enlarged or twisted veins, sometimes described as a \"bag of worms\"",
    "Visible swelling of scrotal veins in moderate to severe cases",
    "Discomfort that eases when lying down",
    "Reduced size of the affected testicle in rare or advanced cases",
]

export const varicoceleCauses: IconItem[] = [
    { icon: ArrowDownUp, title: "Weak or malfunctioning venous valves", description: "Improper valve function allows blood to flow backward, pooling and raising pressure in the veins instead of moving efficiently toward the heart." },
    { icon: Dna, title: "Genetic or hereditary factors", description: "A family history of varicose veins or varicocele raises the risk, likely due to inherited vein structure or valve weakness." },
    { icon: Activity, title: "Impaired testicular circulation", description: "Restricted blood flow in the testicular veins can lead to progressive vein dilation over time." },
    { icon: Gauge, title: "Increased abdominal pressure", description: "Heavy lifting, chronic coughing, constipation, or prolonged straining raise abdominal pressure, affecting venous blood return." },
    { icon: Waves, title: "Hormonal imbalances", description: "Disruptions affecting blood vessel tone or testicular function may contribute to vein dilation." },
    { icon: Salad, title: "Nutritional deficiencies", description: "A lack of nutrients that support vascular health can weaken blood vessels, raising susceptibility to venous problems." },
]

export const varicoceleDiagnosis: DiagnosisStep[] = [
    { title: "Medical history evaluation", description: "A detailed discussion of scrotal pain, fertility concerns, changes in testicle size, and any past conditions, surgeries, or treatments." },
    { title: "Physical examination", description: "The scrotum is examined both standing and lying down to identify enlarged veins. A Valsalva manoeuvre (gentle straining) can make smaller varicoceles more noticeable." },
    { title: "Doppler ultrasound", description: "The most reliable imaging test — visualises blood flow, detects dilated veins and reflux, and assesses the grade and effect on testicular circulation." },
]

export const varicoceleTreatments: IconItem[] = [
    { icon: Eye, title: "Observation & monitoring", description: "For mild varicocele with no pain or fertility issues, regular follow-up and semen analysis track any change. Sperm freezing may be considered in select cases to preserve fertility." },
    { icon: ShieldCheck, title: "Lifestyle & supportive measures", description: "Avoiding prolonged sitting or standing, reducing heat exposure, and wearing supportive underwear can ease symptoms — supportive, not curative." },
    { icon: Scissors, title: "Surgical treatment (varicocelectomy)", description: "Recommended for persistent pain, testicular damage, or infertility. Options include open, laparoscopic, and microsurgical varicocelectomy — the microsurgical approach is widely considered most effective, with faster recovery and fewer complications." },
    { icon: FlaskConical, title: "Assisted reproductive techniques", description: "IVF or IUI may be recommended for varicocele-related infertility, particularly for those who aren't surgical candidates or need a faster path to conception." },
]

export const varicocelePrevention: string[] = [
    "Avoid long periods of sitting or standing",
    "Minimise heat exposure to the genital area — avoid laptops on the lap, limit saunas or steam baths",
    "Wear supportive underwear",
    "Follow a healthy lifestyle with regular exercise and a balanced diet",
]

export const varicoceleFaqs: FaqItem[] = [
    { question: "What happens if I choose not to be treated?", answer: "A mild varicocele without pain or fertility issues may stay stable, but in some men it can gradually affect sperm quality or testicular health over time — regular monitoring is worthwhile either way." },
    { question: "My teenage son was diagnosed with a varicocele — should it be treated?", answer: "It depends on testicular growth, pain, and ultrasound findings. If there's reduced testicular size or abnormal blood flow, early intervention may be considered to protect future fertility." },
    { question: "I have no symptoms but want children — should I still treat it?", answer: "If semen analysis shows reduced sperm count or quality, treatment can improve fertility outcomes even without symptoms. A full fertility evaluation helps guide this decision." },
    { question: "How long after surgery does semen quality improve?", answer: "Improvement typically begins within 3 to 6 months, since sperm production cycles take time, with continued improvement sometimes seen up to a year after repair." },
    { question: "Is varicocele a serious condition?", answer: "It's generally not life-threatening, but it can become significant if it affects fertility, causes chronic pain, or leads to testicular damage — early diagnosis helps prevent that." },
    { question: "Can varicocele affect testicular growth?", answer: "Yes — in adolescents and young adults, an untreated varicocele can interfere with normal testicular development on the affected side." },
    { question: "How long does recovery take after treatment?", answer: "Most patients return to normal activity within a few days to a week, with full recovery after microsurgical varicocelectomy typically taking 2–3 weeks." },
    { question: "Does varicocele cause erectile dysfunction?", answer: "Not directly — though hormonal changes or fertility-related stress may indirectly affect sexual health. Treating the varicocele often helps overall reproductive confidence." },
    { question: "How can I book a consultation at AMVI Hospital?", answer: "You can schedule a consultation at either the Attapur or Puppalaguda branch by contacting the hospital directly, and it helps to bring any previous fertility records." },
]