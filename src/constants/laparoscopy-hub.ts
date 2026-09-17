import { ShieldCheck, HeartPulse, Clock3, Sparkles, Activity, ScanEye } from "lucide-react"
import { Condition } from "@/types/condition"
import { IconItem, ProcessStep, FaqItem } from "@/types/condition-page"

export const laparoscopyIntro: string[] = [
    "Laparoscopic surgery — also called keyhole surgery or minimally invasive surgery — is performed through 2–3 tiny incisions instead of one large cut. A miniature camera gives Dr. Shaivalini Kamarapu a magnified, high-definition view inside the abdomen or pelvis, while specialised instruments work through the other openings.",
    "At AMVI Hospitals, all laparoscopic procedures are performed by Dr. Shaivalini, who has completed over 1,000 laparoscopic surgeries — from routine diagnostic laparoscopy to complex endometriosis excision and total laparoscopic hysterectomy. It remains one of the safest ways to treat gynaecological conditions, with less pain, a shorter hospital stay, and minimal scarring compared to open surgery.",
]

export const laparoscopyProcedures: Condition[] = [
    {
        name: "Laparoscopic Hysterectomy",
        description: "Minimally invasive removal of the uterus for fibroids, heavy bleeding, or other benign gynaecological conditions.",
        image: "/images/hero/laparoscopic-hysterectomy-hero.png",
        href: "/laparoscopy/hysterectomy",
    },
    {
        name: "Laparoscopic Myomectomy",
        description: "Removal of uterine fibroids while preserving the uterus — a key option for women who want to protect future fertility.",
        image: "/images/hero/laparoscopic-myomectomy-hero.png",
        href: "/laparoscopy/myomectomy",
    },
    {
        name: "Operative Hysteroscopy",
        description: "A camera-guided procedure to diagnose and treat conditions inside the uterine cavity, such as polyps or fibroids.",
        image: "/images/hero/operative-hysteroscopy-hero.png",
        href: "/laparoscopy/operative-hysteroscopy",
    },
    {
        name: "Diagnostic Laparoscopy",
        description: "A precise, minimally invasive way to investigate unexplained pelvic pain or infertility when other tests haven't found a cause.",
        image: "/images/hero/diagnostic-laparoscopy-hero.png",
        href: "/laparoscopy/diagnostic-laparoscopy",
    },
    {
        name: "Tubal Recanalization",
        description: "Microsurgical reconnection of the fallopian tubes for women who've had tubal ligation and now wish to conceive naturally.",
        image: "/images/hero/tubal-recanalization-hero.png",
        href: "/laparoscopy/tubal-recanalization",
    },
]

export const laparoscopyBenefits: IconItem[] = [
    { icon: ShieldCheck, title: "Smaller incisions", description: "2–3 tiny cuts (0.5–1 cm) instead of one large opening, meaning minimal, barely visible scarring once healed." },
    { icon: HeartPulse, title: "Less pain and blood loss", description: "Significantly less post-operative pain and bleeding during and after the procedure compared to open surgery." },
    { icon: Clock3, title: "Faster recovery", description: "Most patients go home the same day or after one overnight stay, and return to normal activity in 1–2 weeks instead of 4–6." },
    { icon: Sparkles, title: "Lower infection risk", description: "Smaller wounds mean a meaningfully lower risk of surgical site infection than traditional open surgery." },
    { icon: ScanEye, title: "Magnified precision", description: "The laparoscope gives Dr. Shaivalini an HD, magnified view of internal structures for greater surgical accuracy." },
    { icon: Activity, title: "Quicker return to life", description: "Most patients resume desk work within 3–5 days and full activity, including exercise, within 2–4 weeks." },
]

export const laparoscopyRecovery: ProcessStep[] = [
    { title: "Day 1", points: ["Rest at home.", "Mild bloating or shoulder discomfort from surgical gas is normal and resolves in 1–2 days."] },
    { title: "Days 3–5", points: ["Light activities — short walks and light household tasks.", "Most patients return to desk work by day 3–5."] },
    { title: "Week 1–2", points: ["Return to most daily activities.", "Follow-up review with Dr. Shaivalini to check healing."] },
    { title: "Week 2–4", points: ["Full recovery for most procedures.", "Clearance to resume exercise and normal physical activity."] },
]

export const laparoscopyFaqs: FaqItem[] = [
    {
        question: "Is laparoscopic surgery painful?",
        answer: "The procedure itself is performed under general anaesthesia, so you won't feel anything during surgery. Afterwards, most patients have mild soreness at the incision sites and brief shoulder discomfort (from the gas used during surgery) for 1–2 days — both manageable with standard pain relief.",
    },
    {
        question: "How long does recovery take after laparoscopy?",
        answer: "Most minor laparoscopic procedures recover within 2–5 days. More complex surgery — like endometriosis excision or fibroid removal — may take 1–2 weeks. Dr. Shaivalini will give you a recovery timeline specific to your procedure.",
    },
    {
        question: "What conditions can laparoscopy diagnose and treat?",
        answer: "Laparoscopy can diagnose and treat endometriosis, ovarian cysts, uterine fibroids, blocked fallopian tubes, ectopic pregnancy, PCOS (via ovarian drilling), pelvic adhesions, and unexplained pelvic pain — including cases where other tests haven't found a clear cause.",
    },
    {
        question: "Can laparoscopy improve fertility?",
        answer: "Yes. Removing endometriosis, clearing blocked fallopian tubes, draining ovarian cysts, and treating PCOS through laparoscopic ovarian drilling can all improve natural conception chances, and often improve IVF success rates too.",
    },
    {
        question: "Is laparoscopic surgery safe?",
        answer: "Yes — it's one of the safest surgical approaches available for gynaecological conditions when performed by an experienced surgeon. Dr. Shaivalini has completed over 1,000 laparoscopic procedures, and every surgery is carried out in a fully equipped operating theatre with continuous monitoring.",
    },
    {
        question: "How is laparoscopic surgery different from open surgery?",
        answer: "Open surgery uses a single larger incision, while laparoscopy uses 2–3 small incisions and a camera for guidance. That difference is what drives laparoscopy's shorter hospital stay, faster recovery, and smaller scars — though open surgery is occasionally still needed for very complex cases.",
    },
    {
        question: "What is the cost of laparoscopic surgery in Hyderabad?",
        answer: "Cost depends on the specific procedure, its complexity, anaesthesia and hospital stay involved. We provide a complete cost estimate during your consultation, before any procedure is scheduled. Call +91-91000 09669 (Puppalaguda) or +91-80088 42200 (Attapur) to discuss.",
    },
    {
        question: "Will I need general anaesthesia?",
        answer: "Most laparoscopic gynaecological procedures are performed under general anaesthesia so you feel nothing during surgery. Your anaesthetist will review your medical history beforehand to confirm it's the right approach for you.",
    },
]
