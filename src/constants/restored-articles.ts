// Articles from the hospital's previous website (they lived at the site root,
// e.g. /normal-delivery-vs-c-section/). Restored as blog posts; the old URLs
// redirect here (see next.config.ts). Promotional pieces were edited to remove
// competitor comparisons and unverifiable "best/top" claims.
import type { Blog } from "./blogs"

const PUBLISHED = "October 31, 2026"

export const restoredArticles: Blog[] = [
    {
        slug: "normal-delivery-vs-c-section",
        title: "Normal Delivery vs C-Section: What's Best for You?",
        excerpt:
            "There is no single right answer — it depends on your health, your baby's health and your medical situation. A clear, honest comparison of both delivery methods by Dr. Shaivalini Kamarapu.",
        category: "Maternity",
        date: "September 12, 2026",
        readTime: "8 min read",
        image: "",
        published: true,
        sections: [
            {
                heading: "A question almost every expecting mother asks",
                paragraphs: [
                    "One of the most common questions expecting mothers in Hyderabad ask is: should I choose a normal delivery or a C-section? It is a question that brings a lot of anxiety, especially for first-time mothers. The good news is that there is no single right answer — it depends entirely on your health, your baby's health and your medical situation.",
                    "A normal delivery (vaginal birth) is the natural way babies are born. A C-section (caesarean section) is a surgical procedure in which the baby is delivered through an incision in the abdomen. Both are safe when performed by the right medical team in a well-equipped hospital.",
                ],
            },
            {
                heading: "Normal delivery vs C-section — a side-by-side comparison",
                paragraphs: ["Here is a clear comparison of the two delivery methods on the points that matter most to mothers."],
                bullets: [
                    "Recovery time — Normal delivery: 1–2 days in hospital and 2–4 weeks at home. C-section: 3–5 days in hospital and 6–8 weeks at home.",
                    "Pain after delivery — Normal delivery: perineal soreness that is usually manageable. C-section: incision pain, controlled with medication.",
                    "Infection risk — Normal delivery: lower. C-section: slightly higher, because of the surgical wound.",
                    "Future pregnancies — Normal delivery: no restrictions. C-section: may limit the total number of C-sections advised.",
                    "Breastfeeding — Normal delivery: usually starts naturally within hours. C-section: may take slightly longer to establish.",
                    "Baby's breathing — Normal delivery: the birth canal helps squeeze fluid from the baby's lungs. C-section: a slightly higher chance of short-term breathing issues.",
                    "Cost — Normal delivery: generally lower. C-section: higher, because of the surgical team and longer stay.",
                ],
            },
            {
                heading: "Everything about normal delivery",
                paragraphs: [
                    "A normal delivery is the most natural way to bring a baby into the world. The baby moves through the birth canal with the help of uterine contractions. Most healthy pregnancies can result in a safe normal delivery with the right care and support.",
                    "Labour begins when your body produces hormones that trigger contractions. These contractions gradually open (dilate) the cervix. When the cervix is fully dilated to 10 cm, you push the baby out with each contraction while your doctor guides the baby out safely.",
                ],
                bullets: [
                    "Shorter recovery — most mothers feel normal within 2–3 weeks",
                    "Lower risk of infection, since there is no surgical incision",
                    "The baby gets a natural immunity boost from the birth canal",
                    "Breastfeeding can begin within the first hour",
                    "Shorter hospital stay — usually just 1–2 days",
                    "No restrictions on future pregnancies",
                ],
            },
            {
                heading: "Who is a good candidate for normal delivery?",
                paragraphs: ["A normal delivery is usually possible when:"],
                bullets: [
                    "It is a single pregnancy (one baby, not twins)",
                    "The baby is positioned head-down (vertex position)",
                    "There are no serious medical conditions such as preeclampsia",
                    "The placenta is in a normal position (not placenta previa)",
                    "There is no previous uterine surgery or complicated C-section",
                ],
            },
            {
                heading: "Everything about C-section",
                paragraphs: [
                    "A caesarean section is a surgical procedure in which the obstetrician makes an incision through the abdomen and uterus to deliver the baby. It is one of the most commonly performed operations in the world and, when done for the right reasons, it can be life-saving.",
                    "A planned (elective) C-section is scheduled in advance, usually after 39 weeks, when a medical reason is identified during pregnancy. An emergency C-section is done urgently during labour when a problem arises that cannot be resolved with a normal delivery.",
                ],
            },
            {
                heading: "What to expect during a C-section",
                paragraphs: [],
                bullets: [
                    "You receive spinal or epidural anaesthesia — you stay awake but feel no pain",
                    "A screen is placed so you do not see the incision",
                    "The baby is delivered in about 5–10 minutes",
                    "Closing the incision takes another 30–40 minutes",
                    "Your partner can usually be present in the room",
                    "You can hear your baby cry and see them immediately",
                ],
            },
            {
                heading: "Dr. Shaivalini's note on elective C-sections",
                paragraphs: [
                    "\"Many women choose C-sections out of fear of labour pain. While I fully understand this, I always encourage patients to try for a normal delivery first — with proper pain management such as epidural analgesia. The recovery is faster and your body heals more naturally. However, if a C-section is medically needed, rest assured that our team at AMVI performs it with the highest standards of care.\" — Dr. Shaivalini Kamarapu",
                ],
            },
            {
                heading: "When is a C-section medically necessary?",
                paragraphs: ["Not every C-section is elective. In many situations a C-section is the safest option for mother and baby, and your doctor will always discuss this with you clearly and honestly. Common medical reasons include:"],
                bullets: [
                    "Breech or transverse position — the baby is not head-down by 36 weeks",
                    "Placenta previa — the placenta is blocking the birth canal",
                    "Multiple pregnancy — twins or triplets in certain positions",
                    "Foetal distress — the baby's heart rate drops dangerously during labour",
                    "Failure to progress — labour stalls and does not move forward",
                    "A previous C-section with a uterine scar — risk of uterine rupture",
                    "Preeclampsia or eclampsia — severe blood pressure complications",
                    "A large baby (macrosomia) — too large to pass through the birth canal safely",
                    "Cord prolapse — the umbilical cord comes out before the baby",
                ],
            },
            {
                heading: "Painless normal delivery — is it possible?",
                paragraphs: ["Yes. Painless normal delivery uses epidural analgesia — a local anaesthetic injected into the space around the spinal cord. It blocks pain signals from the lower body while you stay fully awake and can push when needed."],
                bullets: [
                    "You feel pressure but not pain during contractions",
                    "You are fully alert and can take part in the birth",
                    "It reduces stress and anxiety during labour",
                    "It is safe for mother and baby when given by an experienced anaesthesiologist",
                    "It is available at AMVI Hospitals — ask Dr. Shaivalini at your next appointment",
                ],
            },
            {
                heading: "Recovery tips for both types of delivery",
                paragraphs: ["Recovery is one of the biggest differences between the two methods. Knowing what to expect helps you plan, especially if you have other children at home."],
                bullets: [
                    "Rest as much as possible in the first 2 weeks",
                    "Accept help from family — do not try to do everything alone",
                    "Eat iron-rich and protein-rich foods to heal faster",
                    "Keep the wound area (after a C-section) clean and dry",
                    "Attend all postnatal follow-up appointments",
                ],
            },
            {
                heading: "How to decide what's right for you",
                paragraphs: ["The decision between a normal delivery and a C-section should always be made together — by you and your doctor. It should never be driven by fear, convenience or social pressure alone. Questions worth asking your doctor:"],
                bullets: [
                    "Is my baby in the right position for a normal delivery?",
                    "Do I have any medical condition that makes a C-section necessary?",
                    "Is painless (epidural) delivery available at your hospital?",
                    "How likely is it that I would need an emergency C-section?",
                    "If I have had a C-section before, can I try for a VBAC (vaginal birth after caesarean)?",
                ],
                after: [
                    "The safest delivery is the one that is right for your situation. If your pregnancy is progressing normally, a natural delivery with proper support — including pain relief such as an epidural — is almost always the first choice. If your doctor recommends a C-section for medical reasons, it is a safe, well-established procedure.",
                    "At AMVI Hospitals, Dr. Shaivalini Kamarapu and our maternity team guide every mother through this decision with honesty, care and up-to-date medical knowledge.",
                ],
            },
        ],
        faqs: [
            { question: "Can I choose a C-section even if a normal delivery is possible?", answer: "In some cases an elective C-section is possible if you have a medical or psychological reason. However, Dr. Shaivalini will first discuss the real risks and benefits with you. A C-section is major surgery with a longer recovery, so it is usually better to try for a natural delivery if your health allows it." },
            { question: "Is normal delivery more painful than a C-section?", answer: "During labour, contractions can be very intense — but with epidural analgesia (painless delivery) the pain is greatly reduced. After delivery, recovering from a normal delivery is usually much less painful than recovering from a C-section, which involves surgical wound pain for several weeks." },
            { question: "What is a VBAC — can I have a normal delivery after a C-section?", answer: "VBAC stands for vaginal birth after caesarean. It is possible for many women, and a majority of women who attempt a VBAC are successful. It depends on the reason for your previous C-section and the type of uterine incision. Dr. Shaivalini can assess whether a VBAC is safe for you." },
            { question: "Does a C-section affect future pregnancies?", answer: "A previous C-section does not prevent future pregnancies. However, scar tissue from a C-section can sometimes complicate later pregnancies. After two or more C-sections, your doctor may recommend spacing pregnancies carefully, and regular prenatal monitoring is important." },
            { question: "Is normal delivery safer for the baby than a C-section?", answer: "For a normal, uncomplicated pregnancy, yes. Babies born vaginally are exposed to beneficial bacteria in the birth canal, and their lungs are naturally prepared for breathing as the birth canal squeezes out fluid. Babies born by C-section sometimes need short-term breathing support, though this is usually minor and temporary." },
            { question: "How long does a C-section take?", answer: "The baby is usually delivered within 5–10 minutes of the surgery starting. Closing the incision takes another 30–45 minutes, so the total time in the operation theatre is usually about 45–60 minutes. The hospital stay is typically 3–5 days." },
            { question: "Does AMVI Hospitals offer painless normal delivery?", answer: "Yes. AMVI Hospitals offers epidural analgesia for normal delivery, given by experienced anaesthesiologists. You stay awake and take part in the birth with significantly less pain. Ask about this option at your next antenatal visit." },
        ],
    },
    {
        slug: "can-i-get-pregnant-with-pcos",
        title: "Can I Get Pregnant With PCOS? A Complete Guide",
        excerpt:
            "Getting pregnant with PCOS is absolutely possible. The step-by-step treatment path — from lifestyle changes to ovulation induction, IUI and IVF — explained by the fertility team at AMVI Hospitals.",
        category: "Fertility",
        date: PUBLISHED,
        readTime: "7 min read",
        image: "",
        published: true,
        sections: [
            {
                heading: "Getting pregnant with PCOS is possible",
                paragraphs: [
                    "PCOS is the most common cause of ovulation-related infertility — and also one of the most treatable. Many women with PCOS go on to have healthy pregnancies. At AMVI Hospitals, Hyderabad, we have helped hundreds of couples with PCOS become parents. Here is what you need to know.",
                ],
            },
            {
                heading: "Does PCOS always cause infertility?",
                paragraphs: [
                    "No — PCOS does not automatically mean you cannot conceive, but it does make conception more challenging because it disrupts regular ovulation. Without ovulation, sperm cannot fertilise an egg. With the right treatment, most women with PCOS can ovulate and conceive, naturally or with assistance.",
                    "PCOS is very common in India and is one of the most frequent hormonal disorders in women of reproductive age.",
                ],
            },
            {
                heading: "Why does PCOS affect getting pregnant?",
                paragraphs: [
                    "PCOS causes a hormonal imbalance in which the ovaries produce too many androgens (male hormones). These disrupt the normal development and release of eggs. In some women eggs grow but are never released; in others ovulation is very irregular, which makes the fertile window hard to predict. Insulin resistance, which is common in PCOS, can also affect egg quality over time.",
                ],
            },
            {
                heading: "Step 1 — Lifestyle changes first",
                paragraphs: [
                    "For many women with PCOS, lifestyle changes alone can restore regular ovulation. Losing even 5–10% of body weight significantly improves hormone balance, and a low-glycaemic diet reduces insulin resistance — a key driver of PCOS. Your doctor will guide you with a personalised plan.",
                ],
                bullets: [
                    "Eat low-GI foods: brown rice, oats, vegetables and legumes",
                    "Exercise for 30 minutes, 5 days a week — brisk walking counts",
                    "Cut down on refined sugar and processed foods",
                    "Manage stress — cortisol worsens insulin resistance",
                    "Sleep 7–8 hours consistently — poor sleep disrupts ovulation hormones",
                ],
            },
            {
                heading: "Step 2 — Ovulation induction",
                paragraphs: ["If lifestyle changes alone are not enough, the next step is ovulation induction: tablets or injections that stimulate the ovaries to release an egg. At AMVI Hospitals this is monitored closely with follicular monitoring scans to get the timing right."],
            },
            {
                heading: "Step 3 — IUI (intrauterine insemination)",
                paragraphs: ["If ovulation induction does not lead to pregnancy after a few cycles, IUI is usually next. Prepared sperm is placed directly into the uterus at the time of ovulation. It is a simple, painless procedure that improves the chances of sperm reaching the egg."],
            },
            {
                heading: "Step 4 — IVF for PCOS",
                paragraphs: ["For women who do not respond to simpler treatments, IVF is highly effective. Women with PCOS usually respond well to IVF because their ovaries produce several eggs when stimulated, giving the lab more embryos to work with."],
            },
            {
                heading: "Dr. Shaivalini says",
                paragraphs: ["\"I always tell my PCOS patients — do not wait until you have been trying for 12 months. If your periods are irregular, come and see me at 6 months. Earlier evaluation means earlier treatment, and earlier treatment means better chances.\" — Dr. Shaivalini Kamarapu"],
            },
            {
                heading: "How long does it take to get pregnant with PCOS?",
                paragraphs: ["It varies for every woman. Some conceive within 3–6 months of starting treatment; others need 12–18 months. Starting earlier gives you more time and more options, and age matters — the younger you are when you start, the better the outcomes tend to be."],
            },
            {
                heading: "Can you have a normal pregnancy with PCOS?",
                paragraphs: ["Yes. Once you conceive, your doctor will monitor the pregnancy carefully, because women with PCOS have a slightly higher risk of gestational diabetes and high blood pressure. With regular antenatal care these risks are well managed, and most women with PCOS deliver healthy babies."],
            },
            {
                heading: "Key takeaways",
                paragraphs: [],
                bullets: [
                    "PCOS causes irregular ovulation — but ovulation can be restored with treatment",
                    "Start with lifestyle changes — even small improvements in weight and diet help",
                    "Treatment is stepped: lifestyle → ovulation induction → IUI → IVF",
                    "Women with PCOS often respond well to IVF",
                    "Do not wait — see a specialist if your periods have been irregular for 3 months or more",
                ],
            },
        ],
        faqs: [
            { question: "Can I get pregnant naturally with PCOS without treatment?", answer: "Some women with mild PCOS do conceive naturally, especially after lifestyle changes such as weight loss and a better diet. If you have been trying for 6 months without success (or 3 months if you are over 35), see a specialist." },
            { question: "Does PCOS get worse with age, and does that affect my chances?", answer: "PCOS symptoms can change with age, but ovarian reserve still declines naturally after 35. Fertility treatment is most effective when started earlier, and seeking help early keeps more options open." },
            { question: "Is IVF the only option for women with PCOS?", answer: "No. IVF is usually the last step, not the first. Most women with PCOS conceive with simpler treatments such as ovulation induction or IUI; IVF is recommended when these have not worked after a reasonable number of cycles." },
            { question: "Will my baby have PCOS too?", answer: "PCOS has a genetic component, so daughters of women with PCOS have a higher chance of developing it. It is also strongly influenced by lifestyle, and healthy habits from adolescence can reduce the risk." },
            { question: "How much does PCOS fertility treatment cost in Hyderabad?", answer: "Costs depend on the treatment needed. Ovulation induction is the most affordable, IUI is moderately priced and IVF involves a higher investment. At AMVI Hospitals, costs are discussed openly at your first consultation." },
        ],
    },
    {
        slug: "choosing-maternity-hospital-for-normal-delivery-hyderabad",
        title: "Choosing a Maternity Hospital for Normal Delivery in Hyderabad",
        excerpt:
            "What to look for in a maternity hospital if you are hoping for a normal delivery — and how AMVI Hospitals supports mothers from pre-pregnancy counselling to postnatal care.",
        category: "Maternity",
        date: PUBLISHED,
        readTime: "5 min read",
        image: "",
        published: true,
        sections: [
            {
                heading: "Why the choice of hospital matters",
                paragraphs: ["For many expecting mothers, a normal (vaginal) delivery is not just a medical choice but a deeply personal one. The hospital you choose shapes your safety, your comfort and your chances of the birth you hope for. Here is what to look for:"],
                bullets: [
                    "Safety and expertise — experienced obstetricians reduce the risk of complications during labour and delivery",
                    "A personalised birth experience — a supportive team can tailor the birth plan to you, including pain relief, birthing positions and family involvement",
                    "Continuity of care — the same team from antenatal visits to the delivery room and postnatal follow-up builds trust",
                    "Clear costs — the cost of a normal delivery varies widely in Hyderabad, so ask for a clear estimate",
                    "Postnatal support — lactation support, newborn care and follow-up after discharge",
                ],
            },
            {
                heading: "Maternity care at AMVI Hospitals",
                paragraphs: ["AMVI Hospitals is a women's hospital in Hyderabad offering gynaecology, fertility and maternity care under one roof, led by Dr. Shaivalini Kamarapu with more than 20 years of experience. Our maternity services include:"],
                bullets: [
                    "Pre-pregnancy counselling",
                    "High-risk pregnancy management",
                    "Twin and multiple pregnancies",
                    "3D/4D ultrasound",
                    "Labour, delivery (including normal and painless delivery) and postnatal care",
                ],
            },
            {
                heading: "How we support a normal delivery",
                paragraphs: [
                    "We encourage natural childbirth wherever it is medically safe. Antenatal care includes guidance on birthing exercises, breathing techniques and preparing for labour, so mothers feel more confident going into delivery.",
                    "If a pregnancy is high-risk, the team monitors it closely and makes individual decisions, so a caesarean is recommended only when it is truly needed. During labour, foetal monitoring helps keep mother and baby safe and allows timely intervention if required.",
                    "Nursing staff trained in maternity care support mothers through labour, recovery and the start of breastfeeding, and postnatal follow-up continues after discharge with guidance on newborn care.",
                ],
            },
            {
                heading: "Planning your birth",
                paragraphs: ["Every pregnancy is different. Talk to Dr. Shaivalini early in your pregnancy about your birth preferences, pain relief options and anything that might affect your delivery plan."],
            },
        ],
    },
    {
        slug: "choosing-ivf-clinic-hyderabad",
        title: "How to Choose an IVF Clinic in Hyderabad",
        excerpt:
            "Experienced doctors, a good IVF laboratory, transparent costs and emotional support — what to look for in an IVF clinic, and the fertility treatments available at AMVI Hospitals.",
        category: "Fertility",
        date: PUBLISHED,
        readTime: "6 min read",
        image: "",
        published: true,
        sections: [
            {
                heading: "What to look for in an IVF clinic",
                paragraphs: ["Choosing an IVF clinic is one of the most important decisions for couples facing infertility. A fertility journey needs experienced doctors, a well-equipped IVF laboratory, transparent communication and emotional support. When comparing clinics, look for:"],
                bullets: [
                    "Senior fertility doctors with years of experience",
                    "An IVF and ICSI laboratory with trained embryologists",
                    "An ethical, transparent approach to treatment",
                    "Clear pricing before treatment begins",
                    "Counselling and support throughout the process",
                ],
            },
            {
                heading: "The IVF laboratory",
                paragraphs: ["The laboratory plays a central role in IVF. Controlled conditions for embryo development, careful embryo handling, blastocyst culture and cryopreservation (vitrification) of embryos and eggs all contribute to safe, precise fertility care."],
            },
            {
                heading: "What affects IVF outcomes",
                paragraphs: ["Success rates are one of the first things couples ask about. They depend on age, diagnosis and embryo quality, so ask any clinic how its figures relate to your situation. Factors within the clinic's control include:"],
                bullets: [
                    "Customised ovarian stimulation",
                    "Skilled egg retrieval and embryo handling",
                    "Good embryo culture systems",
                    "Experienced embryologists",
                    "Precision during embryo transfer",
                ],
            },
            {
                heading: "Understanding IVF costs",
                paragraphs: ["IVF costs vary from couple to couple. At AMVI Hospitals you receive a clear cost breakdown before treatment begins. The cost depends on:"],
                bullets: [
                    "Medications",
                    "Laboratory procedures",
                    "The number of cycles needed",
                    "Whether ICSI or other advanced techniques are needed",
                ],
            },
            {
                heading: "Fertility treatments at AMVI Hospitals",
                paragraphs: [
                    "IUI — suitable for couples with mild male infertility, ovulation problems or unexplained infertility. It is a simple, minimally invasive procedure.",
                    "ICSI — recommended for severe male infertility, a low sperm count or poor motility, and previous fertilisation failure in IVF.",
                    "Female infertility care — hormonal evaluation, ovulation assessment, hysteroscopy, laparoscopy and egg reserve (AMH) testing.",
                    "Male infertility care — semen analysis, hormonal testing, surgical sperm retrieval (TESA/PESA), lifestyle evaluation and advanced sperm testing.",
                    "Frozen embryo transfer (FET) and genetic testing of embryos (PGT) are also available where appropriate.",
                ],
            },
            {
                heading: "Your next step",
                paragraphs: ["If you have been trying to conceive for a year (or six months if you are over 35), or you know of a fertility problem such as PCOS or a low sperm count, book a consultation. Dr. Shaivalini Kamarapu and the fertility team will review your history and explain your options clearly."],
            },
        ],
    },
    {
        slug: "choosing-fertility-hospital-hyderabad",
        title: "Choosing a Fertility Hospital in Hyderabad: A Checklist",
        excerpt:
            "Fertility treatment is more than IVF or IUI. A practical checklist for choosing a fertility doctor and hospital, and what to expect at each stage of treatment.",
        category: "Fertility",
        date: PUBLISHED,
        readTime: "5 min read",
        image: "",
        published: true,
        sections: [
            {
                heading: "Why choosing the right fertility centre matters",
                paragraphs: ["Fertility treatment isn't just about IVF or IUI. It involves a full range of diagnostic tests, personalised planning, emotional support and good clinical care. A good fertility doctor:"],
                bullets: [
                    "Understands your circumstances",
                    "Explains the process clearly and patiently",
                    "Uses up-to-date technology and evidence-based protocols",
                    "Offers holistic support — medical, emotional and lifestyle",
                ],
            },
            {
                heading: "Fertility care at AMVI Hospitals",
                paragraphs: [
                    "AMVI Hospitals specialises in women's health, with a particular focus on fertility and reproductive medicine, at two branches in Hyderabad — Puppalaguda (near Narsingi and Manikonda) and Attapur.",
                    "Diagnosis: from hormone profiling to imaging, the team looks for the root cause of infertility — female, male or combined. Treatment: IVF, ICSI, IUI, and laparoscopic and hysteroscopic surgery for structural problems. Every couple receives a personalised plan rather than a one-size-fits-all approach.",
                ],
            },
            {
                heading: "A checklist for choosing a fertility doctor",
                paragraphs: [],
                bullets: [
                    "Qualifications and expertise — check the specialist's credentials, training and focus",
                    "Communication — do they explain things in a way you understand?",
                    "Success rates — ask about them, but make sure they are put in context (age, diagnosis)",
                    "Ethical practice — transparency about costs, risks and alternatives",
                    "Holistic support — lifestyle advice, emotional support and counselling",
                    "Clinic environment — is the facility comfortable, well equipped and patient-friendly?",
                ],
            },
            {
                heading: "Your fertility journey — what to expect",
                paragraphs: [],
                bullets: [
                    "Consultation and assessment — reviewing medical history and tests, with evaluation of both partners",
                    "Treatment planning — options (IUI, IVF and others), timeline and costs",
                    "Preparation — lifestyle changes, hormonal treatment and psychological support",
                    "Procedure — egg retrieval, sperm preparation and embryo transfer for IVF, or insemination for IUI",
                    "Follow-up — pregnancy test and scan, then antenatal care if successful, or a review of next steps if not",
                ],
            },
        ],
        faqs: [
            { question: "How do I know it's the right time to consult a fertility clinic?", answer: "If you have been trying to conceive for a year (or six months if you are over 35), or you have a known fertility issue such as PCOS or a low sperm count, it is a good time to consult." },
            { question: "How do I compare fertility clinics?", answer: "Look at the services offered, how success rates are explained, the facilities, transparency about costs and patient reviews." },
            { question: "What are the costs involved?", answer: "Costs vary by procedure, diagnosis and age. AMVI Hospitals provides a clear estimate before treatment begins." },
            { question: "How can I cope with the emotional stress of treatment?", answer: "Counselling and support are part of fertility care at AMVI Hospitals, to help you manage stress and stay informed at every step." },
        ],
    },
]
