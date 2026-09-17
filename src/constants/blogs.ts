export interface BlogSection {
    heading: string
    paragraphs: string[]
}

export interface Blog {
    slug: string
    title: string
    excerpt: string
    category: string
    date: string
    readTime: string
    image: string
    sections: BlogSection[]
    // Only posts confirmed against the old site's own blog-archive markup
    // (pasted directly by the client) are published. Posts found only via
    // web-search excerpts are kept in the data but hidden until confirmed
    // the same way. Flip to true once verified.
    published: boolean
}

// NOTE ON IMAGES: amvihospitals.com blocks automated fetching of its /blogs/
// pages (robots.txt), so the original images couldn't be retrieved either.
// These use themed Unsplash photography as a placeholder — swap in real
// AMVI photography before launch (see Pre-Launch Action Plan, Images).
export const blogs: Blog[] = [
    {
        slug: "normal-delivery-vs-c-section",
        title: "Normal Delivery vs. C-Section: What's Best for You?",
        excerpt:
            "There's no single right answer — it depends on your health, your baby's health, and your medical situation. A clear, honest comparison of both delivery methods.",
        category: "Maternity",
        date: "September 12, 2026",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=900&h=600&fit=crop",
        published: false,
        sections: [
            {
                heading: "A question almost every expecting mother asks",
                paragraphs: [
                    "One of the most common questions we hear from expecting mothers in Hyderabad is: should I choose a normal delivery or a C-section? It's a question that brings real anxiety, especially for first-time mothers — and the honest answer is that there isn't a single right choice. It depends entirely on your health, your baby's health, and how your labour progresses.",
                    "A normal delivery, also called a vaginal birth, is the way babies have been born for as long as humans have existed — the baby moves through the birth canal, guided by uterine contractions. A C-section (caesarean section) is a surgical procedure where the baby is delivered through an incision in the abdomen and uterus. Both are safe when performed by the right medical team in a well-equipped hospital.",
                ],
            },
            {
                heading: "A quick fact worth knowing",
                paragraphs: [
                    "About 40–50% of deliveries in urban India are now C-sections. The World Health Organization recommends that C-section rates shouldn't exceed 10–15% of all births. That gap matters: it means most healthy pregnancies can, and should, aim for a normal delivery when there's no medical reason to do otherwise.",
                ],
            },
            {
                heading: "How a normal delivery works",
                paragraphs: [
                    "Labour begins when your body starts producing hormones that trigger contractions. These contractions gradually dilate the cervix, and once it reaches 10 cm, you push the baby out with each contraction, guided by your doctor or midwife. Recovery is typically faster and more comfortable — most mothers feel close to normal within 2–3 weeks, and the risk of infection is lower since there's no surgical incision.",
                ],
            },
            {
                heading: "When a C-section becomes the safer choice",
                paragraphs: [
                    "A C-section can be planned in advance, when your doctor already knows vaginal birth carries risk, or performed as an emergency if labour becomes complicated or your baby shows signs of distress. It's major surgery, so recovery takes longer and needs more careful post-delivery monitoring — but in the situations where it's genuinely needed, it can be life-saving for both mother and baby.",
                ],
            },
            {
                heading: "Recovery: what to expect either way",
                paragraphs: [
                    "After a normal delivery, recovery is usually faster with minimal discomfort, and most mothers are up and moving within a day. After a C-section, you'll need more rest and wound care, though walking early — under medical supervision — helps circulation and healing. Both paths require follow-up with your obstetrician, and both call for the same things underneath: proper nutrition, gentle self-care, and a medical team you trust.",
                ],
            },
            {
                heading: "The decision that actually matters",
                paragraphs: [
                    "At AMVI Hospitals, we don't decide your delivery method in advance unless there's a clear medical reason to. Dr. Shaivalini Kamarapu and the maternity team monitor your pregnancy closely and talk you through the safest option as things progress — and if a C-section does become necessary, you'll understand exactly why, not just be told it's happening.",
                ],
            },
        ],
    },
    {
        slug: "understanding-initial-stage-of-ivf",
        title: "Understanding the Initial Stage of IVF",
        excerpt:
            "Before any embryo transfer, IVF starts with assessment, testing and a personalised protocol. Here's what the first stage actually involves.",
        category: "Fertility",
        date: "September 8, 2026",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=900&h=600&fit=crop",
        published: false,
        sections: [
            {
                heading: "Where every IVF journey actually begins",
                paragraphs: [
                    "When people picture IVF, they usually picture the embryo transfer — the moment that feels like the 'real' treatment. But the initial stage, weeks before that, is what determines how the entire cycle goes. At AMVI Hospitals, every IVF journey starts with a thorough evaluation of both partners, not just a protocol handed out on day one.",
                ],
            },
            {
                heading: "Step one: a complete fertility workup",
                paragraphs: [
                    "This means hormonal blood tests (AMH, FSH, LH, and others), an ultrasound to assess ovarian reserve and antral follicle count, and a semen analysis for the male partner. If either partner has a relevant medical history — previous surgeries, PCOS, endometriosis, prior fertility treatment — that gets factored in here too, since it shapes everything that follows.",
                ],
            },
            {
                heading: "Choosing the right stimulation protocol",
                paragraphs: [
                    "Once the picture is clear, Dr. Shaivalini designs a stimulation protocol suited to your specific hormone levels and ovarian reserve — not a one-size-fits-all cycle. This decides which medications you'll take, at what dose, and for how long, aiming to stimulate the ovaries to produce multiple mature eggs while minimising risks like ovarian hyperstimulation.",
                ],
            },
            {
                heading: "Ovarian stimulation and monitoring",
                paragraphs: [
                    "Stimulation typically runs 10–14 days, with daily hormone injections. You'll come in for 2–3 monitoring visits — a quick blood test and ultrasound — so the team can track follicle growth and adjust medication if needed. This is the stage that requires the most patience, but it's also where the groundwork for a successful cycle actually gets laid.",
                ],
            },
            {
                heading: "What comes after",
                paragraphs: [
                    "Once follicles reach the right size, a trigger injection matures the eggs at a precisely timed point, followed by egg retrieval — a short procedure under light sedation. From there, fertilisation, embryo development and transfer follow. But none of that works as well without a properly assessed, properly personalised initial stage — which is exactly why AMVI treats it as the foundation of the whole process, not a formality before the 'real' treatment starts.",
                ],
            },
        ],
    },
    {
        slug: "endometriosis-diet-for-fertility",
        title: "Endometriosis Diet: Eating for Better Health & Fertility",
        excerpt:
            "Endometriosis is closely linked to inflammation and hormonal imbalance — and the right foods can genuinely help calm both.",
        category: "Women's Health",
        date: "September 3, 2026",
        readTime: "5 min read",
        image: "https://amvihospitals.com/blogs/wp-content/uploads/2025/08/fitness-healthy-lifestyle-concept-female-is-resting-eating-healthy-oatmeal-after-workout-top-view-1024x641.jpg",
        published: true,
        sections: [
            {
                heading: "The inflammation connection",
                paragraphs: [
                    "Endometriosis is closely linked with chronic inflammation and hormonal imbalance. Certain foods fuel that inflammation and worsen symptoms, while others help calm the body, balance hormones, and support overall wellbeing. Following an endometriosis-friendly diet isn't about strict restriction — it's about choosing foods that heal, energise, and support whatever fertility treatment you may also be pursuing, whether that's natural conception or something like IVF.",
                ],
            },
            {
                heading: "Foods that help",
                paragraphs: [
                    "Fresh fruits, vegetables, whole grains, nuts and seeds are rich in antioxidants and essential vitamins. Leafy greens like spinach and kale, along with berries and citrus fruits, help fight free radicals and ease inflammation. Omega-3 fatty acids — from salmon, flaxseed and walnuts — further reduce pain and swelling, making them one of the most useful additions to an endometriosis-conscious diet.",
                ],
            },
            {
                heading: "What to be more cautious about",
                paragraphs: [
                    "Highly processed foods, excess red meat, and foods high in trans fats tend to promote inflammation and can worsen endometriosis symptoms over time. Reducing these, rather than eliminating them entirely, is usually a more sustainable approach than an all-or-nothing restriction.",
                ],
            },
            {
                heading: "A note on supplements",
                paragraphs: [
                    "Supplements like omega-3s or magnesium may help some women manage symptoms, but they should only be taken under medical supervision — taking the wrong combination or dose can create its own imbalances rather than solving the underlying one.",
                ],
            },
            {
                heading: "Diet supports treatment — it doesn't replace it",
                paragraphs: [
                    "Nutrition is a genuinely useful part of managing endometriosis, but it works alongside proper diagnosis and treatment, not instead of it. If you're experiencing symptoms like pelvic pain, painful periods, or difficulty conceiving, that's worth a proper evaluation at AMVI Hospitals — diet is one part of the picture, and treatment plans work best when they're built around your specific case.",
                ],
            },
        ],
    },
    {
        slug: "what-is-monsplasty",
        title: "What Is Monsplasty? Benefits, Procedure and Recovery Guide",
        excerpt:
            "Also known as pubic lift surgery, monsplasty reshapes the mons pubis for a flatter, more comfortable contour. Here's what the procedure actually involves.",
        category: "Cosmetic Gynecology",
        date: "August 29, 2026",
        readTime: "5 min read",
        image: "https://amvihospitals.com/blogs/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-20-at-3.00.42-PM-1024x682.jpeg",
        published: true,
        sections: [
            {
                heading: "What monsplasty actually is",
                paragraphs: [
                    "Monsplasty, also known as pubic lift surgery, is a cosmetic procedure designed to reduce and reshape the mons pubis — the soft, fatty area above the pubic bone. This area can become enlarged or saggy due to weight fluctuations, ageing, hormonal changes, or pregnancy. Monsplasty helps achieve a flatter, more contoured appearance, which can improve comfort in clothing, during intimacy, and in daily life.",
                ],
            },
            {
                heading: "Why women consider it",
                paragraphs: [
                    "The reasons are rarely just cosmetic. A prominent or sagging mons pubis can cause chafing, discomfort during exercise, difficulty finding comfortable clothing, and self-consciousness during intimacy. For many women, the procedure is less about appearance alone and more about day-to-day physical comfort.",
                ],
            },
            {
                heading: "What the procedure involves",
                paragraphs: [
                    "Monsplasty typically involves removing excess fat and, where needed, excess skin from the mons pubis area, followed by careful contouring to create a smoother, flatter result. It's often performed alongside other procedures — a tummy tuck, for instance — though it can also be done on its own. The exact approach depends on how much correction is needed, which is assessed during consultation.",
                ],
            },
            {
                heading: "Recovery",
                paragraphs: [
                    "Recovery generally involves some swelling and discomfort in the first week or two, manageable with standard pain relief and rest. Most patients return to light daily activities within a week and to full activity, including exercise, within 4–6 weeks — though this varies depending on whether monsplasty was combined with another procedure.",
                ],
            },
            {
                heading: "Is it right for you?",
                paragraphs: [
                    "This is a personal decision, and the right first step is always a private consultation rather than a general guide like this one. At AMVI Hospitals, Dr. Shaivalini discusses your goals, anatomy and health history before recommending anything — the same discretion and care that applies across all of AMVI's cosmetic gynaecology services.",
                ],
            },
        ],
    },
    {
        slug: "vaginoplasty-comfort-and-confidence",
        title: "Rediscover Comfort and Confidence with Vaginoplasty",
        excerpt:
            "Vaginal reconstruction after childbirth or age-related changes isn't just about appearance — it's about restoring comfort and function too.",
        category: "Cosmetic Gynecology",
        date: "August 24, 2026",
        readTime: "5 min read",
        image: "https://amvihospitals.com/blogs/wp-content/uploads/2025/06/fpkdl.com_960_side-view-doctor-holding-anatomic-model_23-2149351653.jpg",
        published: true,
        sections: [
            {
                heading: "More than a cosmetic procedure",
                paragraphs: [
                    "Vaginoplasty is often thought of purely as a cosmetic procedure, but for many of the women who come to AMVI Hospitals, it's really about restoring comfort and confidence that changed after childbirth, ageing, or other life events. Vaginal tissue naturally stretches and loses tone over time and after delivery — vaginoplasty tightens and reconstructs that tissue, addressing both function and how a woman feels in her own body.",
                ],
            },
            {
                heading: "Who considers vaginoplasty",
                paragraphs: [
                    "Most commonly, women come to us after one or more vaginal deliveries, when muscle tone and tissue elasticity have changed. Others are addressing the natural effects of ageing, or looking to restore their pre-pregnancy anatomy. Whatever the reason, the goal is the same: comfort, tightness, and confidence restored.",
                ],
            },
            {
                heading: "What the procedure involves",
                paragraphs: [
                    "Vaginoplasty tightens the vaginal canal by removing excess lining and repairing the surrounding muscles, typically performed under general or regional anaesthesia as an outpatient or short-stay procedure. At AMVI, Dr. Shaivalini — trained internationally in cosmetic gynaecology — tailors the technique to each woman's anatomy rather than applying a standard approach.",
                ],
            },
            {
                heading: "Recovery and what to expect",
                paragraphs: [
                    "Most women need around 4–6 weeks before resuming sexual activity and strenuous exercise, though light daily activity typically resumes much sooner. Mild swelling and discomfort in the first week or two is normal and manageable with standard care. Results are usually long-lasting, since the underlying muscle repair — not just surface tightening — is what holds.",
                ],
            },
            {
                heading: "A private, judgement-free process",
                paragraphs: [
                    "Every consultation at AMVI is confidential and handled with complete discretion. If vaginal laxity or discomfort has been affecting your confidence, that's a conversation worth having directly with a specialist — not something to simply live with.",
                ],
            },
        ],
    },
    {
        slug: "o-shot-and-g-shot-intimate-wellness",
        title: "An Innovative Step in Women's Intimate Wellness: O-Shot & G-Shot",
        excerpt:
            "Two non-surgical treatments using the body's own regenerative properties to enhance intimate wellness, sensation and confidence.",
        category: "Cosmetic Gynecology",
        date: "August 19, 2026",
        readTime: "6 min read",
        image: "https://amvihospitals.com/blogs/wp-content/uploads/2025/09/gynecologist-talking-with-young-female-patient-medical-consultation-modern-clinic-patient-with-gynecologist-consultation-gynecological-office-1024x683.jpg",
        published: true,
        sections: [
            {
                heading: "A breakthrough that uses your own body's healing power",
                paragraphs: [
                    "Women today are prioritising their health, wellbeing and intimate wellness more openly than ever — and two treatments leading that shift are the O-Shot and G-Shot, both available at AMVI Hospitals, Hyderabad. Neither is surgical. Both use the body's own regenerative properties to enhance sexual health, sensation and confidence.",
                ],
            },
            {
                heading: "The O-Shot: how it works",
                paragraphs: [
                    "The O-Shot (Orgasm Shot) uses platelet-rich plasma (PRP) drawn from your own blood — the same regenerative principle used in orthopaedic and aesthetic medicine, applied here to intimate wellness. PRP is rich in growth factors that repair tissue, improve circulation and boost sensitivity, and is carefully injected into the vaginal and clitoral areas to rejuvenate tissue, improve natural lubrication and enhance arousal.",
                    "The entire process takes just 30–45 minutes, with minimal risk and no downtime. Women dealing with vaginal dryness, reduced sensitivity, post-menopausal changes, effects from childbirth, or mild urinary leakage often see noticeable improvement.",
                ],
            },
            {
                heading: "The G-Shot: how it's different",
                paragraphs: [
                    "The G-Shot takes a different approach. A safe, body-friendly filler is injected into the G-spot — a sensitive area inside the vaginal wall whose responsiveness varies for every woman — to make it more prominent and responsive during intimacy. The procedure is quick, performed under local numbing, and needs no hospital stay. Results typically last 4–6 months, after which repeat sessions can be considered.",
                ],
            },
            {
                heading: "Choosing between the two",
                paragraphs: [
                    "The O-Shot focuses on regeneration and natural tissue health — a good fit for dryness, sensitivity changes, or post-childbirth effects. The G-Shot focuses more directly on physical sensation in a specific area. Many women only need one; some choose to combine both, based on their individual goals. That decision is exactly what a private consultation with Dr. Shaivalini is for.",
                ],
            },
            {
                heading: "What makes this different from a typical clinic",
                paragraphs: [
                    "Both procedures are performed by an experienced gynaecologist specialising in intimate wellness, not a general aesthetics practitioner — which matters, since both treatments work directly with reproductive and urogynaecological anatomy. At AMVI, every consultation is private, and every plan is built around your specific concerns rather than a standard package.",
                ],
            },
        ],
    },
    {
        slug: "cosmetic-gynecology-redefining-intimate-wellness",
        title: "Cosmetic Gynecology at AMVI: Redefining Women's Intimate Wellness",
        excerpt:
            "Cosmetic gynaecology isn't a niche add-on — at AMVI, it's a full specialty built on the same medical rigour as any other, with complete discretion.",
        category: "Cosmetic Gynecology",
        date: "August 14, 2026",
        readTime: "5 min read",
        image: "https://amvihospitals.com/blogs/wp-content/uploads/2025/07/doctor-explaining-anatomic-model-patient-1024x683.jpg",
        published: true,
        sections: [
            {
                heading: "A specialty, not an afterthought",
                paragraphs: [
                    "Cosmetic gynaecology often gets treated as a niche add-on to general gynaecology. At AMVI Hospitals, it's the opposite — a full specialty led by Dr. Shaivalini Kamarapu, one of the few gynaecologists in Telangana specifically certified in cosmetic gynaecology, with training under specialists in the USA, France, Poland and Morocco.",
                ],
            },
            {
                heading: "What 'intimate wellness' actually covers",
                paragraphs: [
                    "The term covers more ground than most people expect: reconstructive procedures after childbirth or ageing (vaginal and labial reconstruction, vaginal tightening), confidential procedures like hymenoplasty, and non-surgical options like the O-Shot and G-Shot for sensation and comfort. What ties them together isn't the procedure type — it's that each addresses something a woman may have quietly lived with for years before ever raising it with a doctor.",
                ],
            },
            {
                heading: "Why the surgeon's specific training matters",
                paragraphs: [
                    "General gynaecological training doesn't automatically include cosmetic gynaecology technique — it's a distinct skill set, closer to reconstructive surgery than routine gynaecology. Dr. Shaivalini is one of the few surgeons who exclusively performs both surgical and non-surgical vaginal laser procedures, which is part of why patients travel to AMVI specifically for this specialty rather than treating it as a side offering of a general practice.",
                ],
            },
            {
                heading: "Discretion as a standard, not an exception",
                paragraphs: [
                    "Every cosmetic gynaecology consultation at AMVI is private and confidential from the first phone call. Appointments can be scheduled with that privacy in mind, and nothing about the process treats these conversations as more awkward or less clinical than any other specialty — because they aren't.",
                ],
            },
            {
                heading: "Where to start",
                paragraphs: [
                    "If something about your intimate health or comfort has been on your mind, a private consultation is the way to actually get answers, rather than guessing from general information. Every treatment plan at AMVI is personalised — there's no standard package, only what fits your goals, anatomy and health history.",
                ],
            },
        ],
    },
    {
        slug: "why-choose-laparoscopic-surgery",
        title: "Why Choose Laparoscopic Surgery: Purpose, Types & Benefits",
        excerpt:
            "Keyhole surgery treats the same conditions as open surgery, with smaller incisions, less pain, and a fraction of the recovery time.",
        category: "Laparoscopic Surgery",
        date: "August 9, 2026",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=900&h=600&fit=crop",
        published: false,
        sections: [
            {
                heading: "The same surgery, a very different experience",
                paragraphs: [
                    "Laparoscopic surgery treats the same range of gynaecological conditions as traditional open surgery — fibroids, endometriosis, ovarian cysts, and more — but through 2–3 small incisions instead of one large cut. At AMVI Hospitals, Dr. Shaivalini Kamarapu has performed over 1,000 laparoscopic procedures, and it remains one of the safest, most widely preferred approaches for gynaecological surgery today.",
                ],
            },
            {
                heading: "The types of laparoscopic surgery we perform",
                paragraphs: [
                    "This includes laparoscopic hysterectomy for fibroids or heavy bleeding, myomectomy for fibroid removal while preserving the uterus, diagnostic laparoscopy for unexplained pelvic pain or infertility, operative hysteroscopy for conditions inside the uterine cavity, and tubal recanalization for women who've had tubal ligation and now wish to conceive. Each uses the same core minimally-invasive approach, adapted to the specific procedure.",
                ],
            },
            {
                heading: "Why patients — and surgeons — prefer it",
                paragraphs: [
                    "Smaller incisions mean less post-operative pain, lower infection risk, and scarring that's barely visible once healed. The laparoscope also gives the surgeon a magnified, high-definition view of internal structures, often improving surgical precision compared to open surgery. For patients, the practical difference is enormous: most go home the same day or after one overnight stay, instead of a multi-day hospital admission.",
                ],
            },
            {
                heading: "Recovery: the real difference",
                paragraphs: [
                    "Recovery from laparoscopic surgery typically runs 2–5 days for lighter procedures, compared to 4–6 weeks for open surgery. Most patients return to desk work within 3–5 days and resume full activity, including exercise, within 2–4 weeks. That difference alone is why laparoscopy has become the default approach wherever it's medically appropriate.",
                ],
            },
            {
                heading: "Is it right for your condition?",
                paragraphs: [
                    "Not every case is suitable for a laparoscopic approach — very complex or advanced conditions sometimes still require open surgery. That decision is made individually, based on your specific diagnosis, not a blanket preference either way. If you're facing a gynaecological surgery and want to understand your options, that's exactly the conversation to have during consultation at AMVI Hospitals.",
                ],
            },
        ],
    },
    {
        slug: "episiotomy-procedure-recovery-care",
        title: "What Every Woman Should Know About Episiotomy: Procedure, Recovery & Care",
        excerpt:
            "A clear look at when episiotomy is performed during delivery, what recovery involves, and what it does and doesn't affect long-term.",
        category: "Maternity",
        date: "August 4, 2026",
        readTime: "5 min read",
        image: "https://amvihospitals.com/blogs/wp-content/uploads/2025/06/freepicdownloader.com-uterus-doctor-with-anatomy-model-study-diagnosis-treatment-hospital-large-1.webp",
        published: true,
        sections: [
            {
                heading: "What an episiotomy actually is",
                paragraphs: [
                    "An episiotomy is a small surgical cut made at the vaginal opening during delivery, used when it can help ease the baby's passage or prevent a more severe natural tear. It isn't performed routinely for every delivery — at AMVI Hospitals, it's used selectively, based on how labour is progressing and what's genuinely needed in the moment, not as a default step.",
                ],
            },
            {
                heading: "Recovery: what to actually expect",
                paragraphs: [
                    "Most women experience some soreness and swelling in the area for the first 1–2 weeks, manageable with standard pain relief, cold compresses, and keeping the area clean and dry. Gentle movement is encouraged early on, while sitting on a cushion and avoiding heavy lifting can ease discomfort in the first week. Full healing usually takes about 4–6 weeks, similar to natural tears of a comparable size.",
                ],
            },
            {
                heading: "Does it affect fertility?",
                paragraphs: [
                    "An episiotomy itself doesn't typically affect fertility. In rare cases where complications like scar tissue or pelvic discomfort develop, these can be addressed separately with the help of fertility specialists and pelvic health support — the kind of follow-up care AMVI's broader team is equipped to provide alongside maternity care itself.",
                ],
            },
            {
                heading: "Caring for the area at home",
                paragraphs: [
                    "Keep the area clean with warm water after using the bathroom, pat dry rather than rubbing, and change sanitary pads frequently in the first week. Watch for signs of infection — increasing pain, foul-smelling discharge, or fever — and contact your doctor promptly if any of these appear, rather than waiting for a scheduled follow-up.",
                ],
            },
            {
                heading: "Whole-person care, not just the delivery",
                paragraphs: [
                    "Whether your delivery was natural or assisted, postnatal recovery deserves the same attention as the pregnancy itself. AMVI Hospitals supports that recovery fully — from delivery through postnatal care, and any follow-up needs that come after, all under one roof.",
                ],
            },
        ],
    },
    {
        slug: "amh-test-ovarian-reserve",
        title: "AMH Test & Ovarian Reserve: What Your Results Mean",
        excerpt:
            "AMH is one of the most useful markers for understanding your ovarian reserve — here's what the number actually tells you.",
        category: "Fertility",
        date: "July 30, 2026",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=900&h=600&fit=crop",
        published: false,
        sections: [
            {
                heading: "What AMH actually measures",
                paragraphs: [
                    "Anti-Müllerian Hormone (AMH) is produced by small follicles in the ovaries, and its level in your blood gives a reasonably reliable picture of your ovarian reserve — roughly, how many eggs remain available. It's a simple blood test that can be done on any day of your menstrual cycle, which makes it one of the more convenient fertility markers to check.",
                ],
            },
            {
                heading: "Why it matters",
                paragraphs: [
                    "AMH helps guide decisions around fertility planning — whether that's timing a pregnancy, considering egg freezing, or planning an IVF stimulation protocol. A low AMH doesn't mean pregnancy is impossible, and a high AMH doesn't guarantee an easy conception; it's one important piece of a larger picture, not a verdict on its own.",
                ],
            },
            {
                heading: "Understanding a low result",
                paragraphs: [
                    "A lower-than-expected AMH suggests a reduced number of remaining eggs, which can happen with age, certain medical conditions, or sometimes for reasons that aren't fully clear. It's a signal to have a proper fertility conversation sooner rather than later — particularly if you're planning to conceive in the next few years — not a reason for alarm on its own.",
                ],
            },
            {
                heading: "Understanding a high result",
                paragraphs: [
                    "A higher AMH is often seen in women with PCOS, and while it can suggest a larger number of eggs, it also means stimulation protocols during IVF need to be managed carefully to avoid ovarian hyperstimulation. This is exactly why AMH results are interpreted alongside a full clinical picture, not read in isolation.",
                ],
            },
            {
                heading: "What to do with your result",
                paragraphs: [
                    "Whatever your AMH level, the right next step is a conversation with a fertility specialist who can put the number in context with your age, cycle history, and family planning goals. At AMVI Hospitals, AMH testing is available at both branches, with results reviewed directly with Dr. Shaivalini rather than handed over as a number alone.",
                ],
            },
        ],
    },
    // --- The 5 posts below are BASIC / first-pass content, matching real old-site topics.
    // --- Flagged for proper research and expansion later, per instruction.
    {
        slug: "vaginal-delivery-natural-birth-guide",
        title: "Your Guide to Vaginal Delivery: Experience the Joy of Natural Birth",
        excerpt:
            "Vaginal delivery follows the body's natural design and is the preferred path for most healthy pregnancies. A basic guide to what it involves.",
        category: "Maternity",
        date: "September 15, 2026",
        readTime: "4 min read",
        image: "https://amvihospitals.com/blogs/wp-content/uploads/2025/07/97233.jpg",
        published: true,
        sections: [
            {
                heading: "Why many mothers choose the natural path",
                paragraphs: [
                    "For most healthy pregnancies, vaginal delivery is the preferred and safest option — it works with the body's natural design and tends to mean a faster, more comfortable recovery than surgical delivery.",
                ],
            },
            {
                heading: "What to expect",
                paragraphs: [
                    "Labour progresses through stages of contractions that gradually open the cervix, followed by delivery. Every labour is different in length and intensity, which is why continuous monitoring and support matter throughout.",
                ],
            },
            {
                heading: "How AMVI supports a natural birth",
                paragraphs: [
                    "At AMVI Hospitals, the maternity team supports you through labour with continuous monitoring and pain-relief options where wanted, aiming for the safest possible natural delivery for both mother and baby.",
                ],
            },
        ],
    },
    {
        slug: "cosmetic-gynaecology-confidence-comfort-wellness",
        title: "Cosmetic Gynaecology: Restoring Confidence, Comfort, and Intimate Wellness",
        excerpt:
            "Cosmetic gynaecology addresses both function and appearance of intimate areas affected by childbirth, ageing or hormonal change — with comfort as the goal.",
        category: "Cosmetic Gynecology",
        date: "September 14, 2026",
        readTime: "4 min read",
        image: "https://amvihospitals.com/blogs/wp-content/uploads/2025/07/Cosmetic-Gynaecology-with-Restoring-Confidence-Comfort-and-Intimate-Wellness-1024x1024.webp",
        published: true,
        sections: [
            {
                heading: "Function and comfort, not just appearance",
                paragraphs: [
                    "Cosmetic gynaecology is often misunderstood as purely aesthetic. In practice, most procedures are about restoring comfort and function that changed after childbirth, ageing, or hormonal shifts — appearance is only part of the picture.",
                ],
            },
            {
                heading: "A growing, mainstream specialty",
                paragraphs: [
                    "What was once rarely discussed is now a recognised part of women's healthcare, blending medical precision with a genuine focus on how a woman feels in her own body.",
                ],
            },
            {
                heading: "The AMVI approach",
                paragraphs: [
                    "Every consultation is private and personalised — treatment is planned around individual anatomy and goals, not a standard package.",
                ],
            },
        ],
    },
    {
        slug: "birthing-exercises-for-normal-delivery",
        title: "Empower Your Body for Normal Delivery: Birthing Exercises That Help",
        excerpt:
            "Simple exercises during pregnancy can help prepare your body for a smoother, more confident natural delivery.",
        category: "Maternity",
        date: "September 13, 2026",
        readTime: "4 min read",
        image: "https://amvihospitals.com/blogs/wp-content/uploads/2025/06/fpkdl.com_960_operation-stomach-medical-procedure-treating-patient-with-surgical-intervention-operating-room_158518-20007.webp",
        published: true,
        sections: [
            {
                heading: "Preparing the body, not just waiting for the day",
                paragraphs: [
                    "Pregnancy is a period of steady change, and many expecting mothers find that gentle, guided exercise helps them feel more prepared — physically and mentally — for labour and a natural delivery.",
                ],
            },
            {
                heading: "The kinds of exercises that help",
                paragraphs: [
                    "Pelvic floor exercises, guided breathing techniques, and gentle walking are commonly recommended through pregnancy to support labour readiness — always suited to your individual stage and health.",
                ],
            },
            {
                heading: "Get a plan suited to you",
                paragraphs: [
                    "What's safe and useful varies by trimester and individual health, so it's worth discussing an exercise plan directly with your doctor at AMVI Hospitals rather than following generic advice alone.",
                ],
            },
        ],
    },
    {
        slug: "gynaecology-diseases-and-surgery-overview",
        title: "Gynaecology Diseases and Surgery: A Quick Overview",
        excerpt:
            "A woman's body goes through many changes over a reproductive lifetime — here's a basic look at the gynaecological issues we see most often.",
        category: "Women's Health",
        date: "September 11, 2026",
        readTime: "4 min read",
        image: "https://amvihospitals.com/blogs/wp-content/uploads/2025/06/gynaecology-diseases-and-surgery.webp",
        published: true,
        sections: [
            {
                heading: "Common issues across a reproductive lifetime",
                paragraphs: [
                    "From irregular periods to fibroids and endometriosis, gynaecological issues are common at different life stages — most are very manageable once properly diagnosed.",
                ],
            },
            {
                heading: "When surgery becomes part of the picture",
                paragraphs: [
                    "Some conditions are managed with medication or lifestyle changes; others benefit from surgery, often through minimally invasive laparoscopic techniques that mean a much easier recovery than older surgical approaches.",
                ],
            },
            {
                heading: "Getting the right diagnosis first",
                paragraphs: [
                    "Whatever the symptoms, the right starting point is always a proper evaluation — AMVI Hospitals treats the full range of gynaecological conditions under one roof, from diagnosis through treatment.",
                ],
            },
        ],
    },
    {
        slug: "fertility-and-healthy-living-overview",
        title: "Fertility and Healthy Living: Lifestyle Changes That Can Help",
        excerpt:
            "Simple, sustainable lifestyle changes can meaningfully improve fertility for many couples trying to conceive.",
        category: "Fertility",
        date: "September 9, 2026",
        readTime: "4 min read",
        image: "https://amvihospitals.com/blogs/wp-content/uploads/2025/06/fertility-and-healthy-living.webp",
        published: true,
        sections: [
            {
                heading: "Lifestyle plays a real role",
                paragraphs: [
                    "Alongside any medical treatment, everyday habits — diet, weight, sleep, stress and substance use — all have a genuine, evidence-backed effect on fertility for both partners.",
                ],
            },
            {
                heading: "Where to start",
                paragraphs: [
                    "Maintaining a healthy weight, eating a balanced diet, managing stress, and cutting back on smoking or alcohol are some of the most impactful changes couples can make while trying to conceive.",
                ],
            },
            {
                heading: "Pairing lifestyle with the right guidance",
                paragraphs: [
                    "Lifestyle changes work best alongside a proper fertility evaluation, not instead of one — if you've been trying to conceive for a while, that's the right next step at AMVI Hospitals.",
                ],
            },
        ],
    },
]
