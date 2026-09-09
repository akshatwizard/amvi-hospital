import { DiagnosisStep, Testimonial, FaqItem } from "@/types/condition-page"

export const hysterectomyIntro: string[] = [
    "Laparoscopic hysterectomy is a minimally invasive surgical procedure to remove the uterus, performed using high-definition cameras and precision instruments through small abdominal incisions. Compared to traditional open surgery, it offers less pain, minimal blood loss, a faster recovery, and a shorter hospital stay.",
    "It's considered one of the safest and most effective approaches for treating fibroids, abnormal uterine bleeding, endometriosis, adenomyosis, uterine prolapse, and certain gynaecological cancers — helping women recover faster with better cosmetic results and less surgical trauma.",
]

export const hysterectomyIndications: string[] = [
    "Uterine fibroids",
    "Abnormal uterine bleeding",
    "Endometriosis",
    "Gynaecological cancers",
    "Adenomyosis",
    "Uterine prolapse",
    "Chronic pelvic pain",
    "Recurrent pelvic infections",
]

export const hysterectomyTypes = [
    {
        title: "Total hysterectomy",
        description: "Complete removal of the uterus along with the cervix. The ovaries and fallopian tubes are usually left in place unless there's a specific medical reason to remove them. This is the most commonly performed type, used for fibroids, abnormal bleeding, adenomyosis, and early-stage gynaecological conditions — it can be done via an abdominal or laparoscopic approach. Menstruation stops permanently and pregnancy is no longer possible afterward.",
    },
    {
        title: "Subtotal (partial) hysterectomy",
        description: "Removes the upper portion of the uterus while preserving the cervix, considered when the cervix is healthy and doesn't need removal. Since the cervix remains, regular Pap smear screening must continue afterward. Less commonly performed than a total hysterectomy, but suitable in selected benign cases.",
    },
    {
        title: "Pan hysterectomy",
        description: "Removes the uterus and cervix along with the fallopian tubes and ovaries, depending on the patient's condition. This comes in two forms: total hysterectomy with unilateral salpingo-oophorectomy (one ovary and tube removed) or with bilateral salpingo-oophorectomy (both sides removed).",
    },
    {
        title: "Radical hysterectomy",
        description: "Removes the entire uterus, cervix, surrounding supportive tissue (parametrium), pelvic lymph nodes, and the upper portion of the vagina. Primarily performed for gynaecological cancers such as cervical or early-stage uterine cancer, and can be done via open or laparoscopic surgery depending on the cancer's stage and spread.",
    },
    {
        title: "Ultra-radical (extensive) surgery",
        description: "The most extensive form — removing the uterus, cervix, surrounding tissue, pelvic lymph nodes, upper vagina, and sometimes parts of the bladder or rectum. Generally reserved for advanced-stage gynaecological cancers requiring extensive surgical management to control disease spread.",
    },
]

export const hysterectomyMethods = [
    { name: "Abdominal hysterectomy", description: "The uterus is removed through an incision in the lower abdomen — typically recommended for a large fibroid, an enlarged uterus, or suspected cancer. Recovery generally takes longer than minimally invasive approaches." },
    { name: "Laparoscopic hysterectomy", description: "A minimally invasive approach using small abdominal incisions and a camera, offering less pain, minimal scarring, a shorter hospital stay, and faster recovery." },
    { name: "Robotic hysterectomy", description: "Uses robotic-assisted technology for improved precision and visualisation — often chosen for complex cases, with faster recovery and fewer complications." },
    { name: "LAVH (laparoscopically assisted vaginal hysterectomy)", description: "Combines laparoscopy and vaginal surgery — the uterus is detached laparoscopically and removed through the vagina, avoiding large abdominal incisions." },
    { name: "Vaginal hysterectomy", description: "The uterus is removed entirely through the vagina with no external incisions — commonly recommended for uterine prolapse, with quick recovery and no visible scars." },
]

export const hysterectomyBenefits: string[] = [
    "Smaller incisions and minimal scarring",
    "Reduced post-operative pain",
    "Shorter hospital stay — typically 1–2 days",
    "Faster recovery and earlier return to normal activity",
    "Lower risk of infection",
    "Less blood loss during surgery",
    "Better visualisation through HD cameras",
    "A safer option for patients with obesity",
    "Lower overall hospital expenses",
    "High patient satisfaction — widely considered the gold standard in minimally invasive hysterectomy",
]

export const hysterectomySteps: DiagnosisStep[] = [
    { title: "Pre-surgical preparation", description: "Blood tests, scans, and a fitness assessment are done beforehand, with the procedure, risks, and recovery explained clearly. Fasting for 6–8 hours before surgery is required." },
    { title: "General anaesthesia", description: "The procedure is performed under general anaesthesia — the patient is fully asleep and pain-free throughout." },
    { title: "Keyhole incisions", description: "The surgeon makes 3–4 small incisions in the lower abdomen, and a laparoscope (thin camera) provides a clear internal view of the uterus and surrounding organs." },
    { title: "Detachment & removal", description: "The uterus is carefully separated from surrounding ligaments and blood vessels using laparoscopic instruments, then removed either through the vagina or via the small incisions." },
    { title: "Final inspection & closure", description: "The surgeon checks for bleeding, confirms surrounding organs are unaffected, and closes the incisions with sutures or surgical glue before recovery monitoring begins." },
]

export const hysterectomyRecovery: string[] = [
    "Walking is encouraged within 12–24 hours to support circulation and prevent blood clots",
    "Most patients are discharged within 1–2 days",
    "Light daily activity can usually resume within a week",
    "Heavy lifting and strenuous exercise should be avoided for 4–6 weeks",
    "A protein-rich diet supports faster healing",
    "Regular follow-up visits track recovery progress",
    "Most women return to office work within 2–3 weeks, depending on individual health",
]

export const hysterectomyRisks: string[] = [
    "Minor bleeding during surgery",
    "Infection, though rare with proper antibiotic care",
    "Uncommon injury to nearby organs like the bladder or bowel",
    "Rare anaesthesia-related complications",
    "Blood clots, in rare cases",
    "Temporary urinary issues after surgery",
    "Mild shoulder pain from laparoscopic gas",
    "Hormonal changes or earlier menopause if the ovaries are removed",
    "Emotional adjustment, which is a normal part of recovery for some women",
]

// Real testimonials from the source page, paraphrased (one mismatched IVF testimonial excluded)
export const hysterectomyTestimonials: Testimonial[] = [
    { quote: "Discharged within two days after my laparoscopic hysterectomy at the Attapur centre — quick recovery, minimal pain, and very small scars.", name: "Anjali Reddy" },
    { quote: "Everything was explained clearly before my surgery at Puppalaguda, which made me feel genuinely confident going in — back to normal activities within weeks.", name: "Kavitha Sharma" },
    { quote: "The team at the Attapur branch was supportive and professional throughout, and my recovery was faster than I expected.", name: "Sneha Rao" },
    { quote: "Felt completely cared for at Puppalaguda — the minimally invasive approach helped me recover much faster than I'd worried about.", name: "Priyanka Verma" },
]

export const hysterectomyFaqs: FaqItem[] = [
    { question: "How long does laparoscopic hysterectomy surgery take?", answer: "Usually 1 to 3 hours, depending on uterus size and the underlying condition being treated, such as fibroids or endometriosis." },
    { question: "How many days of hospital stay are needed?", answer: "Most patients are discharged within 24–48 hours after surgery." },
    { question: "Is laparoscopic hysterectomy safe?", answer: "Yes — it's a safe, effective procedure when performed by experienced surgeons using advanced laparoscopic technology." },
    { question: "How long does recovery take?", answer: "Light activity can usually begin within a few days, with complete recovery generally taking 4–6 weeks depending on individual health and surgical complexity." },
    { question: "Can the ovaries be preserved during hysterectomy?", answer: "Yes, in many cases — preserving the ovaries when medically appropriate helps maintain hormonal balance and avoid early menopause." },
    { question: "Where are AMVI Hospital's branches located?", answer: "Attapur (Rajendra Nagar Road) and Puppalaguda (Narsingi-Puppalaguda Main Road) — both offer laparoscopic hysterectomy consultation and treatment." },
    { question: "How can I book a consultation for laparoscopic hysterectomy?", answer: "You can schedule a consultation at either the Attapur or Puppalaguda branch by contacting the hospital directly — early consultation helps with proper diagnosis and treatment planning." },
]