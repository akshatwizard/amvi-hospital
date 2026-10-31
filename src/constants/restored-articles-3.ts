// More articles from the hospital's previous website, restored as blog posts
// (Batch 7, part 2). The fibroid and laparoscopy articles were promotional
// keyword pages; they were rewritten as patient guides without competitor
// names or unverifiable "best/top" claims.
import type { Blog } from "./blogs"

const PUBLISHED = "October 31, 2026"

export const restoredArticles3: Blog[] = [
    {
        slug: "egg-freezing-in-hyderabad",
        title: "Egg Freezing: Who Should Consider It, When, and What the Process Involves",
        excerpt:
            "Freezing your eggs preserves the option of having a baby later, on your own timeline. Who it suits, the best age to do it, and each step of the process.",
        category: "Fertility",
        date: PUBLISHED,
        readTime: "7 min read",
        image: "",
        published: true,
        sections: [
            {
                heading: "Planning a family on your own timeline",
                paragraphs: [
                    "More women in Hyderabad, many of them working in the Financial District, HITEC City and Gachibowli, are choosing to freeze their eggs now so they can focus on their careers and personal goals without biology setting the deadline for motherhood.",
                    "Egg freezing (oocyte cryopreservation) is no longer experimental: it has been considered an established fertility treatment since 2012. At AMVI Hospitals, it is one of the topics women aged 28–38 ask about most.",
                ],
            },
            {
                heading: "What is egg freezing?",
                paragraphs: [
                    "Egg freezing means stimulating the ovaries to produce several eggs, collecting them, and freezing them for later use. When you are ready to have a child, the eggs are thawed, fertilised with sperm in the laboratory (IVF), and the resulting embryo is transferred to the uterus.",
                    "The key advantage is that frozen eggs keep the quality they had when they were frozen. The chance of success later depends mainly on your age at the time of freezing, not your age when you use them.",
                ],
            },
            {
                heading: "Who should consider egg freezing?",
                paragraphs: [],
                bullets: [
                    "Women aged about 25–37 who are not ready for children now but want to preserve future fertility",
                    "Women who want to delay motherhood for their career or other personal reasons",
                    "Women about to have cancer treatment, since chemotherapy and radiotherapy can permanently damage the egg supply",
                    "Women with a low AMH or early decline in ovarian reserve",
                    "Women with endometriosis, which can gradually reduce ovarian reserve",
                    "Women with a family history of early menopause",
                ],
            },
            {
                heading: "What is the best age to freeze eggs?",
                paragraphs: [
                    "The ideal age to freeze eggs is roughly between 25 and 34, when egg numbers and quality are at their best: more eggs are collected per cycle, and a higher proportion are chromosomally normal. Egg freezing after 38 is still possible, but fewer eggs are collected per cycle and more cycles may be needed.",
                    "As a guide, many specialists recommend freezing at least 10–15 mature eggs for a reasonable chance of one pregnancy later. Younger women often achieve this in one or two stimulation cycles.",
                ],
            },
            {
                heading: "The egg freezing process, step by step",
                paragraphs: [],
                bullets: [
                    "Consultation and fertility assessment: blood tests (AMH, FSH) and an antral follicle count ultrasound to estimate your ovarian reserve and likely response",
                    "Ovarian stimulation (about 10–14 days): daily hormone injections help the ovaries develop several eggs, checked with 2–3 ultrasound scans",
                    "Trigger injection: a single injection, timed precisely, to mature the eggs before collection",
                    "Egg collection: a 20–30 minute procedure under light sedation, in which eggs are collected with a fine, ultrasound-guided needle. Most women go home a few hours later",
                    "Vitrification: mature eggs are frozen immediately using vitrification, an ultra-rapid method that prevents ice crystals and protects egg quality",
                    "Storage: frozen eggs are kept in liquid nitrogen and remain viable for many years",
                ],
            },
            {
                heading: "Tips to improve your results",
                paragraphs: [],
                bullets: [
                    "Start as early as you can; egg numbers and quality decline with age, especially after 35",
                    "Have an AMH test first, so you know your ovarian reserve before deciding",
                    "Stop smoking at least 3 months before egg collection",
                    "Aim for a healthy weight; a BMI over 30 can affect your response to stimulation",
                    "Take folic acid for at least a month before you start",
                    "Cut down on alcohol and caffeine during stimulation",
                    "If you are over 35 or have a low AMH, plan for the possibility of two cycles",
                ],
            },
            {
                heading: "Important things to consider",
                paragraphs: [],
                bullets: [
                    "Egg freezing doesn't guarantee a pregnancy; it preserves an option",
                    "Ovarian hyperstimulation syndrome (OHSS) is a possible side effect of stimulation, but most cases are mild",
                    "Women with a very low AMH may collect fewer eggs, so a pre-cycle assessment sets realistic expectations",
                    "Waiting until 38–40 significantly reduces the number and quality of eggs collected",
                    "Frozen eggs are not the same as frozen embryos: fertilisation happens later, and success then also depends on the sperm",
                ],
            },
            {
                heading: "Freedom to choose your timing",
                paragraphs: [
                    "Egg freezing gives women the freedom to plan their family on their own timeline. Whether you are focused on your career, waiting for the right partner, or preserving fertility before medical treatment, it is a proactive choice.",
                    "Dr. Shaivalini Kamarapu offers fertility assessments and egg freezing consultations at AMVI Hospitals in Puppalaguda and Attapur.",
                ],
            },
        ],
        faqs: [
            {
                question: "Is egg freezing painful?",
                answer: "The daily injections cause mild discomfort, like a small pinch. Egg collection is done under light sedation, so you won't feel pain during the procedure. Some bloating and mild cramping for a day or two afterwards is normal and settles with simple pain relief.",
            },
            {
                question: "How long can frozen eggs be stored?",
                answer: "Eggs frozen by vitrification can be stored for many years in liquid nitrogen. Studies show no fall in survival or pregnancy rates for eggs stored for 10 years. A yearly storage fee applies.",
            },
            {
                question: "What is the success rate of pregnancy from frozen eggs?",
                answer: "It depends mainly on your age when the eggs were frozen. For eggs frozen before 35, each egg has roughly a 5–7% chance of leading to a baby, which is why 10–15 eggs are usually recommended for a reasonable chance of one pregnancy. Eggs frozen after 38 have lower success rates per egg.",
            },
            {
                question: "What does egg freezing cost in Hyderabad?",
                answer: "The cost covers the stimulation medicines, monitoring scans, the egg collection procedure and vitrification, followed by a yearly storage fee. For a cost estimate for your own situation, book a consultation at AMVI Hospitals.",
            },
            {
                question: "What is the best age to freeze eggs?",
                answer: "Roughly between 25 and 34, when egg quality and numbers are at their best. Freezing is still possible after 35 and even after 38, but fewer eggs are collected per cycle and more than one cycle may be needed.",
            },
        ],
    },
    {
        slug: "male-infertility-causes-tests-treatment",
        title: "Male Infertility: Why It Is More Common Than You Think, and What Can Be Done",
        excerpt:
            "In nearly half of couples who can't conceive, the male partner is a cause or a contributing factor. The common causes, the tests, and the treatments that work.",
        category: "Fertility",
        date: PUBLISHED,
        readTime: "7 min read",
        image: "",
        published: true,
        sections: [
            {
                heading: "Half of the picture is often never checked",
                paragraphs: [
                    "When a couple struggles to conceive, the focus in India almost always falls on the woman. Tests, treatments and appointments are arranged for the female partner, while male infertility stays an uncomfortable, rarely discussed subject. Yet in about 40–50% of couples with infertility, the male partner is the main cause or a contributing factor.",
                    "Dr. Shaivalini Kamarapu regularly sees couples who have spent months or years on investigations for the woman without the man ever being tested. A simple semen analysis could have found the problem much sooner.",
                ],
            },
            {
                heading: "What is male infertility?",
                paragraphs: [
                    "Male infertility means a man is unable to make a fertile female partner pregnant after 12 months of regular, unprotected intercourse. It is usually caused by problems with the sperm: their number, quality or movement.",
                    "It has nothing to do with masculinity, sexual performance or general health. Many men with infertility have no symptoms at all and feel completely healthy. The only way to find a problem is a semen analysis.",
                ],
            },
            {
                heading: "Common causes of male infertility",
                paragraphs: [],
                bullets: [
                    "Low sperm count (oligospermia): fewer than 15 million sperm per millilitre of semen",
                    "No sperm in the semen (azoospermia), caused either by a blockage or by a production problem",
                    "Poor sperm motility (asthenospermia): sperm that can't swim well enough to reach the egg",
                    "Abnormal sperm shape (teratospermia)",
                    "Varicocele: enlarged veins in the scrotum that overheat the testes and reduce sperm quality",
                    "Hormone problems, such as low testosterone or high prolactin",
                    "Past infections, such as sexually transmitted infections or mumps affecting the testes",
                    "Genetic conditions, such as Klinefelter syndrome or Y-chromosome microdeletions",
                    "Lifestyle factors: smoking, alcohol, heat exposure, obesity and stress",
                    "Sperm DNA fragmentation: damage to the genetic material in sperm",
                ],
            },
            {
                heading: "How is male infertility diagnosed?",
                paragraphs: [
                    "The first and most important test is a semen analysis, which checks sperm count, movement, shape and semen volume. It is non-invasive and quick. If the first result is abnormal, the test is usually repeated after a few weeks to confirm it.",
                    "Depending on the results, further tests may include hormone blood tests (FSH, LH, testosterone, prolactin), a scrotal ultrasound to look for a varicocele, genetic tests, and sperm DNA fragmentation testing.",
                ],
            },
            {
                heading: "Treatment options",
                paragraphs: ["Treatment depends on the cause and how severe the problem is:"],
                bullets: [
                    "Lifestyle changes: losing weight, stopping smoking and alcohol, and avoiding heat, which can improve sperm within 3–6 months",
                    "Medicines: hormone treatment for hormone problems, and antioxidants to support sperm quality",
                    "Varicocele repair: surgical or microsurgical correction to improve sperm count and quality",
                    "IUI (intrauterine insemination): prepared sperm are placed directly in the uterus; suitable for mild male-factor infertility",
                    "IVF with ICSI: a single healthy sperm is injected into each egg; the most effective treatment for severe male infertility",
                    "Surgical sperm retrieval (TESA/PESA): for men with azoospermia, sperm can often be taken directly from the testis or epididymis and used for ICSI",
                ],
            },
            {
                heading: "Improving sperm health naturally",
                paragraphs: [],
                bullets: [
                    "Keep to a healthy weight; obesity lowers testosterone and sperm count",
                    "Stop smoking, which damages sperm DNA and reduces motility",
                    "Limit alcohol",
                    "Avoid tight underwear, hot baths and long periods with a laptop on your lap",
                    "Eat foods rich in antioxidants, zinc, selenium and vitamins C and E",
                    "Manage stress and exercise moderately",
                    "Repeat the semen analysis about 3 months after making changes, since sperm take around 72 days to develop",
                ],
            },
            {
                heading: "See a doctor promptly if you notice these",
                paragraphs: [],
                bullets: [
                    "Pain, swelling or a lump in the testicle area",
                    "A history of mumps as an adult",
                    "Previous chemotherapy or radiotherapy",
                    "No sperm in the semen",
                    "More than 12 months of trying to conceive without success; both partners should be tested together",
                ],
            },
            {
                heading: "Fertility is a shared journey",
                paragraphs: [
                    "Male infertility is far more common than people admit, and far more treatable than most couples realise. A semen analysis is the starting point. Whether the answer is a lifestyle change, medicine, IUI or ICSI, there are effective options for almost every situation.",
                    "At AMVI Hospitals, Dr. Shaivalini Kamarapu evaluates both partners together. Book a consultation at our Puppalaguda branch (+91 91000 09669) or Attapur branch (+91 80088 42200).",
                ],
            },
        ],
        faqs: [
            {
                question: "Can a man with zero sperm count (azoospermia) father a child?",
                answer: "Often, yes. Even when there are no sperm in the semen, sperm can often be retrieved surgically from the testis (TESA) or epididymis (PESA) and used for ICSI. Success depends on whether sperm are being produced in the testicular tissue, which is assessed during evaluation.",
            },
            {
                question: "Does male infertility affect sexual performance?",
                answer: "No. Male infertility is separate from erectile dysfunction or low libido. Most men with infertility have completely normal sexual function; the problem is with the sperm, not with sexual performance.",
            },
            {
                question: "How long does it take for sperm to improve after lifestyle changes?",
                answer: "Sperm take about 72–90 days to develop, so improvements from stopping smoking, losing weight or other changes usually show in a semen analysis done about 3 months later.",
            },
            {
                question: "Is ICSI the only option for severe male infertility?",
                answer: "ICSI is the most effective treatment for severe male infertility, but it isn't always the only option. Milder problems may respond to IUI with sperm preparation, hormone treatment or varicocele repair. Your doctor will recommend the least invasive treatment that is likely to work for you.",
            },
        ],
    },
    {
        slug: "how-icsi-helps-male-infertility",
        title: "How ICSI Treatment Helps Couples with Male Infertility Conceive",
        excerpt:
            "Even with a very low sperm count, or no sperm in the semen, ICSI makes fatherhood possible for many men. How it works, step by step.",
        category: "Fertility",
        date: PUBLISHED,
        readTime: "7 min read",
        image: "",
        published: true,
        sections: [
            {
                heading: "A common problem that is rarely talked about",
                paragraphs: [
                    "Male-factor infertility is involved in around 40% of couples who struggle to conceive. Yet many men delay seeking help, often out of embarrassment or the mistaken belief that fertility is \"a woman's problem\". ICSI has transformed the outlook: even men with extremely low sperm counts can now father children. At AMVI Hospitals, the complete male fertility assessment and ICSI pathway is available under one roof.",
                ],
            },
            {
                heading: "What is male infertility?",
                paragraphs: [
                    "Male infertility means a man's sperm can't fertilise an egg successfully. The most common reasons are a low sperm count, poor sperm movement, abnormal sperm shape, or a blockage that stops sperm being released. A simple, painless semen analysis can identify the problem.",
                ],
            },
            {
                heading: "Common causes, and how ICSI helps",
                paragraphs: [
                    "Low sperm count (oligospermia). A healthy sample contains at least 15 million sperm per millilitre. A lower count doesn't make conception impossible: ICSI needs only one healthy sperm for each egg.",
                    "No sperm in the semen (azoospermia). This can be caused by a blockage or a production problem. Even then, sperm can often be retrieved directly from the testis by TESA (testicular sperm aspiration) and used for ICSI.",
                    "Poor sperm motility (asthenospermia). Sperm that swim poorly can't reach the egg naturally. ICSI bypasses the problem by placing the sperm directly into the egg.",
                    "Abnormal sperm shape (teratospermia). Shape affects a sperm's ability to penetrate the egg. With ICSI, the embryologist selects the best-shaped sperm under the microscope.",
                ],
            },
            {
                heading: "What is ICSI?",
                paragraphs: [
                    "ICSI stands for intracytoplasmic sperm injection. In standard IVF, sperm and eggs are placed together and fertilisation happens on its own. In ICSI, a single healthy sperm is selected under a high-powered microscope and injected directly into a mature egg, bypassing problems with sperm count, movement and shape.",
                ],
                bullets: [
                    "It works even with an extremely low sperm count",
                    "It works when sperm can't swim",
                    "It works with sperm retrieved surgically (TESA) in azoospermia",
                    "Typically, around 70–80% of injected eggs fertilise",
                    "Most babies born after ICSI are healthy; your doctor can explain the small additional risks",
                ],
            },
            {
                heading: "ICSI treatment, step by step",
                paragraphs: [
                    "Step 1: ovarian stimulation. The female partner takes hormone injections for about 10–12 days to help several eggs develop, with follicle-monitoring scans to time the egg collection precisely.",
                    "Step 2: egg collection and sperm collection. The eggs are collected in a minor procedure under sedation. The male partner gives a semen sample the same day; if there is azoospermia, sperm are retrieved by TESA under local anaesthesia, which takes about 15 minutes.",
                    "Step 3: ICSI fertilisation. The embryologist examines the sperm under a high-powered microscope, selects the best-quality sperm, and injects one into each mature egg using a microscopic needle. Fertilisation is checked the next day.",
                    "Step 4: embryo development and transfer. Fertilised eggs develop into embryos over 3–5 days. The best embryo is transferred to the uterus in a simple procedure, and other good-quality embryos can be frozen for future attempts without repeating stimulation.",
                ],
            },
            {
                heading: "Dr. Shaivalini's advice",
                paragraphs: [
                    "\"The biggest mistake I see couples make is waiting. A semen analysis is quick and can give you answers that change everything. If you have been trying for 6 months and the female partner's tests are normal, get the male partner tested. Don't leave half of the picture unexplored.\" — Dr. Shaivalini Kamarapu",
                ],
            },
            {
                heading: "Things that temporarily reduce sperm quality",
                paragraphs: [],
                bullets: [
                    "Long periods with a laptop on the lap (heat)",
                    "Tight underwear, which raises the temperature of the testes",
                    "Smoking, which reduces sperm count and movement",
                    "Heavy drinking, which affects sperm DNA",
                    "A high fever, after which sperm quality can stay lower for up to 3 months",
                    "Anabolic steroids, which severely suppress sperm production",
                ],
            },
            {
                heading: "Key points",
                paragraphs: [],
                bullets: [
                    "Around 40% of infertility involves a male factor, so always test both partners",
                    "A semen analysis is simple, quick and painless; do it early",
                    "ICSI works even with a severely reduced sperm count or no sperm in the semen",
                    "Earlier treatment means more options and better outcomes",
                ],
                after: ["At AMVI Hospitals, every male fertility case is handled with complete privacy and sensitivity."],
            },
        ],
        faqs: [
            {
                question: "How long does a semen analysis take, and where can I have it done?",
                answer: "Giving the sample takes about 30 minutes, and results are usually ready within 24 to 48 hours. You can have the test at AMVI Hospitals, where complete privacy is maintained.",
            },
            {
                question: "Can male infertility be treated without IVF or ICSI?",
                answer: "Sometimes, yes. If the cause is hormonal (such as low testosterone or a thyroid problem), hormone treatment can restore sperm production. If it is caused by a varicocele, surgery can improve sperm quality. A proper evaluation shows which approach is right.",
            },
            {
                question: "Is TESA painful? What happens during the procedure?",
                answer: "TESA (testicular sperm aspiration) is done under local anaesthesia, so the area is numb. Most men feel only mild discomfort, similar to having blood taken. The procedure takes about 15 minutes, and recovery usually takes 24 to 48 hours.",
            },
            {
                question: "Can lifestyle changes improve sperm quality before ICSI?",
                answer: "Yes. Sperm take about 72 days (roughly 3 months) to develop, so changes you make today improve the sample used about 3 months later. Stopping smoking, cutting down alcohol, managing weight and avoiding heat all help. Your doctor will give you specific advice before your ICSI cycle.",
            },
            {
                question: "What does ICSI cost in Hyderabad?",
                answer: "ICSI adds to the cost of a standard IVF cycle, because of the extra embryology work involved; in Hyderabad it typically adds about ₹20,000 to ₹30,000. The full cost of your treatment plan is explained at your consultation.",
            },
        ],
    },
    {
        slug: "fibroid-treatment-options",
        title: "Uterine Fibroid Treatment Options: A Patient's Guide",
        excerpt:
            "Fibroids are very common, and many need no treatment. When they do, the options range from medicines to keyhole surgery that keeps the uterus. How to decide.",
        category: "Women's Health",
        date: PUBLISHED,
        readTime: "6 min read",
        image: "",
        published: true,
        sections: [
            {
                heading: "Fibroids are common, and very treatable",
                paragraphs: [
                    "Uterine fibroids are extremely common in women of reproductive age. Many cause no problems at all, but others lead to heavy bleeding, pain, pressure or difficulty getting pregnant. Today, most women prefer treatments that are minimally invasive and, where possible, keep the uterus and protect fertility.",
                    "This guide explains the main treatment options, so you can have an informed conversation with your gynaecologist.",
                ],
            },
            {
                heading: "What are uterine fibroids?",
                paragraphs: [
                    "Fibroids are non-cancerous growths of muscle tissue in or around the uterus. Many women don't know they have them until symptoms appear, such as:",
                ],
                bullets: [
                    "Heavy menstrual bleeding",
                    "Pelvic pain or pressure",
                    "Passing urine often",
                    "Pain during intercourse",
                    "Difficulty conceiving",
                ],
                after: ["Early diagnosis and the right treatment can make a big difference to quality of life."],
            },
            {
                heading: "Option 1: medicines to control symptoms",
                paragraphs: ["For mild symptoms, medicines can:"],
                bullets: [
                    "Reduce heavy bleeding",
                    "Control pain",
                    "Shrink fibroids temporarily in some cases, for example before surgery",
                ],
                after: ["Medicines don't remove fibroids permanently, but they can be a good first step."],
            },
            {
                heading: "Option 2: non-surgical procedures",
                paragraphs: [
                    "Uterine artery embolisation (UAE) blocks the blood supply to the fibroid so that it shrinks, and focused-ultrasound treatment uses high-intensity sound waves to destroy fibroid tissue. These suit some women, but not all fibroids or all women planning pregnancy. Your gynaecologist can tell you whether one of these is suitable and refer you if needed.",
                ],
            },
            {
                heading: "Option 3: minimally invasive surgery that keeps the uterus",
                paragraphs: [
                    "Laparoscopic myomectomy removes fibroids through a few small incisions, with less bleeding, less pain and a faster recovery than open surgery.",
                    "Hysteroscopic myomectomy removes fibroids that grow into the cavity of the uterus, through the vagina, with no cuts on the abdomen. It is often the best option for women trying to conceive whose fibroids affect the uterine lining.",
                    "Both procedures allow most women to return to normal life quickly.",
                ],
            },
            {
                heading: "Option 4: other surgery",
                paragraphs: [
                    "When fibroids are very large or numerous, open surgery may occasionally be needed. For women who have completed their family and have severe symptoms, a hysterectomy (removing the uterus), often done laparoscopically, is a permanent solution.",
                ],
            },
            {
                heading: "Fibroids and fertility",
                paragraphs: [
                    "Fibroids can sometimes interfere with conception or IVF, especially those that distort the inside of the uterus. If you are planning a pregnancy, treatment focuses on protecting your fertility:",
                ],
                bullets: [
                    "A detailed fertility assessment",
                    "Removing only the fibroids that are likely to affect conception",
                    "Minimally invasive surgery to limit scarring",
                    "Planning the right time to try for pregnancy after surgery",
                ],
            },
            {
                heading: "When should you see a doctor about fibroids?",
                paragraphs: ["Book a consultation if you have:"],
                bullets: [
                    "Heavy or irregular periods",
                    "Pelvic pressure or pain",
                    "Tiredness or weakness that may be due to anaemia from heavy bleeding",
                    "Difficulty getting pregnant or repeated miscarriages",
                ],
            },
            {
                heading: "Fibroid care at AMVI Hospitals",
                paragraphs: [
                    "AMVI Hospitals offers fibroid diagnosis, medical management and laparoscopic and hysteroscopic surgery, with a focus on preserving fertility. Treatment is planned around your age, symptoms and pregnancy plans. Book a consultation at our Puppalaguda or Attapur branch.",
                ],
            },
        ],
    },
    {
        slug: "laparoscopic-surgery-for-women",
        title: "Laparoscopic Surgery for Women: Procedures, Benefits and Recovery",
        excerpt:
            "Keyhole surgery has changed gynaecology, with smaller cuts, less pain and a faster recovery. Which conditions it treats, what to expect, and the questions women ask most.",
        category: "Women's Health",
        date: PUBLISHED,
        readTime: "6 min read",
        image: "",
        published: true,
        sections: [
            {
                heading: "How keyhole surgery changed gynaecology",
                paragraphs: [
                    "Laparoscopic surgery has transformed the way gynaecological operations are done. Instead of one large cut, the surgeon works through a few small incisions using a camera and fine instruments. For women, that means less pain, less scarring and a much faster return to normal life.",
                ],
            },
            {
                heading: "What can laparoscopy treat?",
                paragraphs: [
                    "Laparoscopic (keyhole) surgery is used to diagnose and treat many gynaecological problems, including fibroids, ovarian cysts, endometriosis, unexplained pelvic pain and some causes of infertility. Common procedures include:",
                ],
                bullets: [
                    "Laparoscopic myomectomy: removing fibroids while keeping the uterus",
                    "Laparoscopic hysterectomy: removing the uterus through small incisions",
                    "Ovarian cystectomy: removing ovarian cysts while preserving the ovary",
                    "Diagnostic laparoscopy: finding the cause of pelvic pain or infertility, such as endometriosis",
                    "Surgery for endometriosis and adhesions",
                    "Tubal recanalisation: rejoining the fallopian tubes to restore fertility",
                ],
            },
            {
                heading: "Benefits of laparoscopic surgery",
                paragraphs: [],
                bullets: [
                    "Smaller incisions and less visible scars",
                    "Less pain after surgery",
                    "Less blood loss and a lower risk of wound infection",
                    "A shorter hospital stay, often going home the same day or the next day",
                    "A faster return to work and daily life",
                ],
            },
            {
                heading: "Is laparoscopy right for you?",
                paragraphs: [
                    "If you have fibroids, ovarian cysts, endometriosis, ongoing pelvic pain or fertility problems, or have been told you need a hysterectomy, a gynaecologist trained in laparoscopy can assess whether keyhole surgery is suitable. Very large fibroids, extensive scarring from earlier operations or some medical conditions may mean open surgery is safer, and your surgeon will explain why.",
                ],
            },
            {
                heading: "Recovery after laparoscopic surgery",
                paragraphs: [
                    "Recovery depends on the procedure, but most women walk the same day and go home within a day or two. Mild shoulder-tip or abdominal discomfort for a few days is common, caused by the gas used during surgery. Most women return to light activities within a week or two, and you will be given clear advice on driving, lifting, exercise and intercourse.",
                ],
            },
            {
                heading: "Laparoscopic surgery at AMVI Hospitals",
                paragraphs: [
                    "AMVI Hospitals is a women's hospital in Hyderabad offering laparoscopic surgery alongside fertility, maternity, urogynecology and cosmetic gynaecology care. Surgery is led by Dr. Shaivalini Kamarapu, a gynaecologist and advanced laparoscopic surgeon with over 20 years of experience. Book a consultation at our Puppalaguda or Attapur branch.",
                ],
            },
        ],
        faqs: [
            {
                question: "Is laparoscopic surgery safe?",
                answer: "Yes. When done by a trained, experienced surgeon, laparoscopic surgery is very safe and usually carries fewer risks than open surgery, such as less blood loss and a lower risk of wound infection.",
            },
            {
                question: "How do I know if I need laparoscopic surgery?",
                answer: "If you have fibroids, ovarian cysts, endometriosis, ongoing pelvic pain or fertility problems, or need a hysterectomy, a gynaecologist who specialises in laparoscopy can assess whether a keyhole approach is right for you.",
            },
            {
                question: "Will I need a long hospital stay?",
                answer: "Usually not. Many laparoscopic procedures need only a short stay, often the same day or one night, although it depends on the complexity of the surgery.",
            },
            {
                question: "When can I go back to work after laparoscopy?",
                answer: "It depends on the procedure and your job. After a diagnostic laparoscopy, many women return within a few days; after a laparoscopic myomectomy or hysterectomy, it is usually 2–4 weeks. Your surgeon will advise you.",
            },
        ],
    },
]
