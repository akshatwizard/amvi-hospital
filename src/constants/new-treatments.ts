import type { TreatmentContent } from "@/components/treatment/treatment-page"

// Content for the treatment pages added in Batch 8. Written to match what the
// hospital's other pages already state; no success-rate figures or facility
// claims the client has not confirmed.

const REVIEWED = "Medically reviewed by Dr. Shaivalini Kamarapu, MBBS, MS (Obstetrics & Gynaecology), Fellowship in Reproductive Medicine, 20+ years of clinical experience."

export const endometriosisSurgery: TreatmentContent = {
    path: "/laparoscopy/endometriosis-surgery",
    eyebrow: "Robotics & Laparoscopy",
    title: "Endometriosis Surgery — Laparoscopic Excision & Fertility-Preserving Care",
    description: "Keyhole surgery to diagnose and remove endometriosis, relieve pain and protect your fertility, planned around your symptoms and pregnancy plans.",
    heroImage: "/images/gallery/laparoscopic-surgery-theatre.webp",
    heroImageAlt: "Laparoscopic surgery in progress at AMVI Hospitals",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Robotics & Laparoscopy", href: "/laparoscopy" }, { label: "Endometriosis Surgery" }],
    reviewedBy: REVIEWED,
    sections: [
        {
            heading: "What is endometriosis surgery?",
            paragraphs: [
                "Endometriosis is a condition in which tissue similar to the lining of the womb grows outside the womb: on the ovaries, fallopian tubes, the lining of the pelvis, and sometimes the bowel or bladder. It can cause severe period pain, pain during intercourse, chronic pelvic pain and difficulty getting pregnant.",
                "Endometriosis surgery is usually done laparoscopically (keyhole surgery). Through a few small incisions, the surgeon uses a camera to confirm the diagnosis, then removes or destroys the endometriosis, removes endometriosis cysts on the ovaries (endometriomas, also called chocolate cysts) and frees organs that are stuck together by scar tissue (adhesions).",
            ],
        },
        {
            heading: "When is surgery recommended?",
            paragraphs: ["Many women manage endometriosis well with medicines. Surgery is usually considered when:"],
            bullets: [
                "Pain is not controlled by hormonal treatment or painkillers",
                "There is an endometrioma (chocolate cyst) on the ovary that is large or growing",
                "Endometriosis may be affecting your fertility",
                "Deep endometriosis is affecting the bowel, bladder or other organs",
                "The diagnosis needs to be confirmed",
            ],
        },
        {
            heading: "Types of endometriosis surgery",
            items: [
                { title: "Diagnostic laparoscopy", text: "A look inside the pelvis to confirm endometriosis and see how far it has spread. Small areas are often treated at the same time." },
                { title: "Excision of endometriosis", text: "Cutting out the endometriosis tissue. Excision gives tissue for testing and is preferred for deep endometriosis." },
                { title: "Ovarian cystectomy for endometrioma", text: "Removing the chocolate cyst while preserving as much healthy ovarian tissue, and egg reserve, as possible." },
                { title: "Adhesiolysis", text: "Separating scar tissue that binds the ovaries, tubes, womb and bowel together, which can relieve pain and help fertility." },
                { title: "Robotic-assisted surgery", text: "For complex or deep endometriosis, robotic assistance gives a magnified 3D view and very precise instruments." },
                { title: "Hysterectomy", text: "For women who have completed their family and have severe symptoms, removing the womb (often with laparoscopy) may be discussed." },
            ],
        },
        {
            heading: "Endometriosis surgery and fertility",
            paragraphs: [
                "For women who want to conceive, surgery is planned to protect fertility. Removing endometriosis and adhesions can improve the chance of natural conception for some women. Because surgery on the ovaries can reduce egg reserve, your AMH (egg reserve) is usually checked first, and the approach to any ovarian cyst is planned carefully.",
                "Depending on your age, egg reserve and the extent of the disease, your doctor may recommend trying naturally after surgery, or moving to IUI or IVF. Some women go straight to IVF without surgery. The plan is made with you.",
            ],
        },
        {
            heading: "Before and after surgery",
            bullets: [
                "Before surgery: a pelvic ultrasound (and sometimes an MRI), blood tests and, if fertility matters to you, an AMH test",
                "Most women stay in hospital for 1–2 days",
                "Mild abdominal or shoulder-tip pain for a few days is common",
                "Most women return to light activities and desk work within 1–2 weeks",
                "Hormonal treatment after surgery may be advised to lower the chance of endometriosis coming back",
            ],
            note: "Like any surgery, endometriosis surgery has risks, including bleeding, infection and, rarely, injury to the bowel, bladder or blood vessels. Endometriosis can also come back after surgery. Your surgeon will explain your own risks before you decide.",
        },
        {
            heading: "Endometriosis surgery at AMVI Hospitals",
            paragraphs: [
                "Endometriosis surgery at AMVI Hospitals is led by Dr. Shaivalini Kamarapu, an advanced laparoscopic and robotic surgeon with a Diploma in Advanced Endometriosis Care and Robotic Surgery. With fertility, IVF and surgical care under one roof, your treatment can be planned around both your pain and your plans for a family.",
            ],
        },
    ],
    faqs: [
        { question: "Can endometriosis be cured with surgery?", answer: "Surgery can remove visible endometriosis and relieve pain for many women, but endometriosis can come back. Hormonal treatment after surgery and regular follow-up help lower the risk of recurrence." },
        { question: "Will endometriosis surgery help me get pregnant?", answer: "For some women, removing endometriosis and adhesions improves the chance of natural conception. If you have reduced egg reserve or other fertility factors, IUI or IVF may still be advised. Your doctor will plan surgery and fertility treatment together." },
        { question: "How long does it take to recover from endometriosis surgery?", answer: "Most women stay 1–2 days in hospital and return to light activities and desk work within 1–2 weeks. Recovery can take longer after extensive or deep endometriosis surgery." },
        { question: "Is endometriosis surgery done laparoscopically?", answer: "Yes. Most endometriosis surgery is done by laparoscopy (keyhole surgery) through a few small incisions. Robotic-assisted surgery may be used for complex or deep endometriosis." },
        { question: "Does removing an endometrioma affect egg reserve?", answer: "It can, because some healthy ovarian tissue may be removed with the cyst. That is why your AMH is usually checked before surgery and the operation is planned to preserve as much of the ovary as possible." },
    ],
    related: [
        { name: "Endometriosis", href: "/gynaecology/endometriosis" },
        { name: "Adenomyosis", href: "/gynaecology/adenomyosis" },
        { name: "Robotic surgery", href: "/laparoscopy/robotic-surgery" },
        { name: "Diagnostic laparoscopy", href: "/laparoscopy/diagnostic-laparoscopy" },
        { name: "IVF", href: "/infertility/ivf" },
        { name: "Low AMH", href: "/gynaecology/low-amh" },
    ],
}

export const roboticSurgery: TreatmentContent = {
    path: "/laparoscopy/robotic-surgery",
    eyebrow: "Robotics & Laparoscopy",
    title: "Robotic Gynaecological Surgery",
    description: "Robotic-assisted keyhole surgery for fibroids, endometriosis, hysterectomy and prolapse, with high precision, smaller incisions and a faster recovery.",
    heroImage: "/images/gallery/operation-theatre-1.webp",
    heroImageAlt: "Operation theatre at AMVI Hospitals",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Robotics & Laparoscopy", href: "/laparoscopy" }, { label: "Robotic Surgery" }],
    reviewedBy: REVIEWED,
    sections: [
        {
            heading: "What is robotic surgery?",
            paragraphs: [
                "Robotic surgery is an advanced form of laparoscopic (keyhole) surgery. The surgeon sits at a console and controls robotic arms that hold a high-definition 3D camera and fine, wristed instruments. Every movement is made by the surgeon; the robot translates it into smaller, steadier and more precise movements inside the body.",
                "It is especially useful in the narrow, deep spaces of the pelvis, where gynaecological operations take place.",
            ],
        },
        {
            heading: "Benefits of robotic surgery",
            bullets: [
                "A magnified 3D view of the pelvic organs",
                "Wristed instruments that move more freely than the human hand in tight spaces",
                "Small incisions and less visible scars",
                "Less blood loss and less pain after surgery",
                "A shorter hospital stay and a faster return to normal life",
                "Helpful in complex cases: large or multiple fibroids, severe endometriosis, previous surgery or a high BMI",
            ],
        },
        {
            heading: "Procedures that can be done robotically",
            items: [
                { title: "Robotic hysterectomy", text: "Removal of the womb for conditions such as fibroids, adenomyosis or heavy bleeding, when the family is complete." },
                { title: "Robotic myomectomy", text: "Removal of fibroids while preserving the womb, with careful repair of the uterine wall for future pregnancy." },
                { title: "Endometriosis excision", text: "Precise removal of deep or extensive endometriosis, including around the bowel and bladder." },
                { title: "Ovarian cystectomy", text: "Removal of ovarian cysts while preserving healthy ovarian tissue." },
                { title: "Sacrocolpopexy", text: "Repair of uterine or vaginal vault prolapse using a supportive mesh attached to the spine's sacrum." },
                { title: "Adhesiolysis", text: "Freeing pelvic organs from scar tissue caused by earlier surgery, infection or endometriosis." },
            ],
        },
        {
            heading: "Is robotic surgery right for you?",
            paragraphs: [
                "Not every patient needs robotic surgery. For many procedures, standard laparoscopy gives equally good results. Robotic surgery is most useful for complex cases, and it usually costs more. Your surgeon will explain which approach suits your condition, and why.",
            ],
        },
        {
            heading: "Recovery after robotic surgery",
            paragraphs: [
                "Most women walk the same day and go home within 1–2 days. Mild discomfort at the incision sites and shoulder-tip pain from the gas used during surgery usually settle within a few days. Many women return to desk work within 1–2 weeks, and you will be given clear advice on lifting, exercise, driving and intercourse.",
            ],
        },
        {
            heading: "Your surgeon",
            paragraphs: [
                "Dr. Shaivalini Kamarapu is an advanced laparoscopic and robotic gynaecological surgeon who has performed more than 100 robotic gynaecological procedures. She holds a Diploma in Advanced Endometriosis Care and Robotic Surgery and is a surgeon member of the Association of Robotic & Innovative Surgeons.",
            ],
        },
    ],
    faqs: [
        { question: "Does a robot perform the surgery?", answer: "No. The surgeon controls every movement from a console. The robotic system holds the camera and instruments and makes the surgeon's movements more precise." },
        { question: "Is robotic surgery safe?", answer: "Yes, when performed by a trained robotic surgeon. Like any surgery it carries risks such as bleeding and infection, which your surgeon will discuss with you before the operation." },
        { question: "What is the difference between laparoscopic and robotic surgery?", answer: "Both are keyhole surgery. In robotic surgery the instruments are held by robotic arms controlled by the surgeon, giving a 3D view and wristed instruments that help in complex cases. For many routine procedures, standard laparoscopy is just as effective." },
        { question: "How long is the hospital stay after robotic surgery?", answer: "Usually 1–2 days, depending on the procedure and how you recover." },
        { question: "Can I have children after robotic myomectomy?", answer: "Yes. Robotic myomectomy removes fibroids while keeping the womb. Your doctor will advise how long to wait before trying to conceive and whether a caesarean delivery is recommended later." },
    ],
    related: [
        { name: "Laparoscopic surgery overview", href: "/laparoscopy" },
        { name: "Endometriosis surgery", href: "/laparoscopy/endometriosis-surgery" },
        { name: "Laparoscopic hysterectomy", href: "/laparoscopy/hysterectomy" },
        { name: "Laparoscopic myomectomy", href: "/laparoscopy/myomectomy" },
        { name: "Pelvic reconstruction", href: "/gynaecology/uro/pelvic-reconstruction" },
        { name: "Certificates & awards", href: "/certificates" },
    ],
}

export const pgt: TreatmentContent = {
    path: "/infertility/pgt",
    eyebrow: "Infertility",
    title: "PGT — Preimplantation Genetic Testing of Embryos",
    description: "Testing IVF embryos for chromosomal and genetic problems before transfer, to lower the risk of miscarriage and of passing on a known genetic condition.",
    heroImage: "/images/hero/genetic-screening-hero.png",
    heroImageAlt: "Genetic testing consultation at AMVI Hospitals",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Infertility", href: "/infertility" }, { label: "PGT" }],
    reviewedBy: REVIEWED,
    sections: [
        {
            heading: "What is PGT?",
            paragraphs: [
                "Preimplantation genetic testing (PGT) is a test done on embryos created through IVF, before one is transferred to the womb. A few cells are taken from each embryo and tested for chromosomal or genetic problems, so that an embryo without the problem can be chosen for transfer.",
                "PGT is not needed by every couple having IVF. It is recommended in specific situations, after discussion with your fertility specialist and, where needed, a genetic counsellor.",
            ],
        },
        {
            heading: "Types of PGT",
            items: [
                { title: "PGT-A (aneuploidy)", text: "Checks embryos for an abnormal number of chromosomes, a common cause of failed implantation and early miscarriage, especially as women get older." },
                { title: "PGT-M (monogenic)", text: "Checks embryos for a specific single-gene condition that runs in the family, such as thalassaemia, sickle cell disease or spinal muscular atrophy." },
                { title: "PGT-SR (structural rearrangement)", text: "For couples where one partner carries a balanced chromosomal rearrangement, such as a translocation, which can cause repeated miscarriages." },
            ],
        },
        {
            heading: "Who may benefit from PGT?",
            bullets: [
                "Couples with recurrent miscarriages",
                "Couples with repeated IVF failure despite good-quality embryos",
                "Women of an older reproductive age, when chromosomal problems in eggs are more common",
                "Couples who carry, or have a child with, a known genetic condition such as thalassaemia",
                "Couples where one partner carries a chromosomal rearrangement",
                "A previous pregnancy affected by a chromosomal abnormality",
            ],
        },
        {
            heading: "How PGT works, step by step",
            bullets: [
                "IVF stimulation and egg collection, usually with ICSI for fertilisation",
                "Embryos are grown in the laboratory to the blastocyst stage (day 5–6)",
                "A few cells are carefully taken from the outer layer of each embryo (the part that becomes the placenta)",
                "The embryos are frozen while the cells are tested in a specialised genetics laboratory",
                "An embryo found to be suitable is transferred in a later frozen embryo transfer cycle",
            ],
        },
        {
            heading: "Limitations of PGT",
            bullets: [
                "No test is 100% accurate; prenatal testing during pregnancy is still advised",
                "Some embryos give unclear or 'mosaic' results that need careful counselling",
                "Some couples may have no suitable embryo for transfer",
                "PGT adds to the cost of IVF and does not guarantee a pregnancy",
            ],
            note: "PGT is used only to check for medical conditions. Selecting an embryo by sex is illegal in India under the PCPNDT Act, and the sex of an embryo is never revealed or used for selection.",
        },
    ],
    faqs: [
        { question: "Does PGT harm the embryo?", answer: "The biopsy takes a few cells from the outer layer of the blastocyst, which forms the placenta, not the baby. In experienced laboratories it does not appear to reduce the embryo's chance of implanting." },
        { question: "Is PGT recommended for everyone having IVF?", answer: "No. PGT is recommended for specific situations such as recurrent miscarriage, repeated IVF failure, older maternal age or a known genetic condition in the family. Your doctor will advise whether it would help you." },
        { question: "How long do PGT results take?", answer: "Results usually take one to three weeks. The embryos stay frozen in the meantime, and a suitable embryo is transferred in a later frozen embryo transfer cycle." },
        { question: "What is the difference between PGT and genetic screening?", answer: "Genetic screening usually tests the parents, for example to find out whether both carry thalassaemia. PGT tests the embryos created through IVF. Screening results often decide whether PGT is needed." },
        { question: "Can PGT be used to choose the baby's sex?", answer: "No. Sex selection is illegal in India under the PCPNDT Act. PGT is used only to check for chromosomal and genetic conditions." },
    ],
    related: [
        { name: "Genetic screening", href: "/infertility/genetic-screening" },
        { name: "IVF", href: "/infertility/ivf" },
        { name: "ICSI", href: "/infertility/icsi" },
        { name: "IVF failure", href: "/infertility/ivf-failure" },
        { name: "Fertility preservation", href: "/fertility-preservation" },
    ],
}

export const stemCellTherapy: TreatmentContent = {
    path: "/infertility/stem-cell-therapy",
    eyebrow: "Infertility",
    title: "Stem Cell Therapy in Fertility Care",
    description: "What regenerative stem cell treatments may offer for very low egg reserve, a thin or scarred womb lining and male testicular failure, and what the evidence says today.",
    heroImage: "/images/gallery/ivf-lab-laminar-flow-workstation.webp",
    heroImageAlt: "Laboratory workstation at AMVI Hospitals",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Infertility", href: "/infertility" }, { label: "Stem Cell Therapy" }],
    reviewedBy: REVIEWED,
    sections: [
        {
            heading: "What is stem cell therapy?",
            paragraphs: [
                "Stem cells are cells that can renew themselves and develop into specialised cell types. In regenerative medicine, a patient's own (autologous) stem cells, usually collected from the bone marrow, are concentrated and placed in a damaged organ, with the aim of helping the tissue repair and work better.",
                "In fertility care, stem cell treatments are being studied for conditions where the ovaries, the womb lining or the testes have stopped working well, and where conventional treatments have limited options.",
            ],
        },
        {
            heading: "Conditions where it is being studied",
            items: [
                { title: "Premature ovarian insufficiency and very low egg reserve", text: "When the ovaries stop producing eggs early. Stem cells are placed into the ovary, usually by laparoscopy, with the aim of improving ovarian function." },
                { title: "Thin endometrium and Asherman's syndrome", text: "When the womb lining stays too thin, or is scarred and stuck together, so an embryo cannot implant. Stem cells are placed in the lining to help it regenerate." },
                { title: "Testicular failure", text: "When the testes produce no sperm (non-obstructive azoospermia). Stem cell approaches are being researched to restore sperm production." },
            ],
        },
        {
            heading: "What does the evidence say?",
            paragraphs: [
                "Early studies have reported encouraging results in some women, such as higher hormone levels, a return of periods or a thicker womb lining. However, the studies are small, results vary widely between women, and stem cell therapy is not yet a standard, proven treatment for infertility. No clinic can promise a pregnancy from it.",
            ],
            note: "In India, the ICMR National Guidelines for Stem Cell Research treat stem cell therapy for infertility as investigational, to be offered only within approved clinical research. Your doctor will explain whether any stem cell–based option is appropriate for you, and how it compares with established treatments.",
        },
        {
            heading: "Established options to discuss first",
            bullets: [
                "For low egg reserve: timely IVF with your own eggs, or IVF with donor eggs",
                "For women who want children later: egg freezing at a younger age",
                "For Asherman's syndrome: hysteroscopic surgery to free the scarred lining, followed by hormonal treatment",
                "For a thin endometrium: hormonal and other treatments to improve the lining before embryo transfer",
                "For azoospermia: surgical sperm retrieval (TESA or micro-TESE) with ICSI",
            ],
        },
        {
            heading: "Talking to your fertility specialist",
            paragraphs: [
                "If you have been told your egg reserve is very low, your womb lining is too thin, or there are no sperm in the semen, Dr. Shaivalini Kamarapu will review your reports, explain every option honestly, including what is proven and what is still being researched, and help you choose a plan that suits you.",
            ],
        },
    ],
    faqs: [
        { question: "Is stem cell therapy a proven treatment for infertility?", answer: "Not yet. Small studies have shown encouraging results in some patients, but it is still considered investigational. Established treatments such as IVF, donor eggs and hysteroscopic surgery remain the standard options." },
        { question: "Can stem cell therapy reverse early menopause or premature ovarian insufficiency?", answer: "Some women in early studies have had improved hormone levels or a return of periods, but results are not consistent and a pregnancy cannot be promised. Your doctor will discuss realistic expectations and alternatives." },
        { question: "Where do the stem cells come from?", answer: "In most fertility studies, the patient's own stem cells are used, usually collected from the bone marrow. Using your own cells avoids rejection." },
        { question: "How is stem cell therapy different from stem cell IVF?", answer: "They describe the same regenerative approach used alongside fertility treatment. Our Stem Cell IVF page explains how it is combined with IVF; this page explains the conditions being studied and the current evidence." },
    ],
    related: [
        { name: "Stem cell IVF", href: "/infertility/stem-cell-ivf" },
        { name: "Low AMH", href: "/gynaecology/low-amh" },
        { name: "IVF", href: "/infertility/ivf" },
        { name: "Azoospermia", href: "/infertility/male/azoospermia" },
        { name: "Operative hysteroscopy", href: "/laparoscopy/operative-hysteroscopy" },
        { name: "Fertility preservation", href: "/fertility-preservation" },
    ],
}

export const paediatrics: TreatmentContent = {
    path: "/pediatrics",
    eyebrow: "Maternity",
    title: "Paediatrics & NICU — Care for Newborns and Children",
    description: "Newborn and child care at AMVI Hospitals: a neonatal intensive care unit (NICU) for babies who need extra care, vaccinations, check-ups and treatment of childhood illnesses.",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Maternity", href: "/maternity" }, { label: "Paediatrics & NICU" }],
    sections: [
        {
            heading: "Nurturing little lives",
            paragraphs: [
                "At AMVI Hospitals, care doesn't stop at delivery. Our paediatric team looks after your baby from birth, and continues to care for your child as they grow, with preventive care, timely vaccinations, developmental check-ups and treatment of childhood illnesses.",
                "The paediatric team works closely with our obstetricians, so babies born after a high-risk pregnancy, IVF or a premature delivery get the right care from their first minutes.",
            ],
        },
        {
            heading: "Our NICU: special care for newborns",
            paragraphs: [
                "Some newborns need closer monitoring and support in their first days. Our neonatal intensive care unit (NICU) provides continuous care for these babies, with the right equipment and a trained team. Being admitted to the NICU doesn't always mean something is seriously wrong; often a baby simply needs a little extra help.",
            ],
            image: { src: "/images/gallery/newborn-radiant-warmer.webp", alt: "Newborn radiant warmer at AMVI Hospitals" },
            bullets: [
                "Babies born early (premature) or with a low birth weight",
                "Breathing difficulties after birth",
                "Newborn jaundice needing phototherapy",
                "Suspected infection or low blood sugar",
                "Babies of mothers with diabetes or other pregnancy complications",
                "Any newborn who needs close observation",
            ],
        },
        {
            heading: "What NICU care includes",
            items: [
                { title: "Continuous monitoring", text: "Heart rate, breathing, oxygen levels and temperature are watched closely around the clock." },
                { title: "Breathing support", text: "Oxygen and other breathing support for babies who need help in their first days." },
                { title: "Phototherapy", text: "Special light treatment for newborn jaundice." },
                { title: "Warmth and feeding support", text: "Radiant warmers to keep babies warm, and help with feeding, including tube or IV feeding when needed." },
            ],
            note: "Parents are kept informed at every step and are encouraged to spend time with their baby. Ask your doctor about the reason for admission and the care your baby is receiving.",
        },
        {
            heading: "Care for your growing child",
            bullets: [
                "Routine newborn and child check-ups",
                "Vaccinations, following the recommended schedule",
                "Growth and developmental monitoring",
                "Nutrition and feeding guidance",
                "Treatment of fevers, infections, allergies and breathing problems",
            ],
        },
        {
            heading: "When to see a paediatrician",
            paragraphs: ["Early attention helps prevent complications. Book a visit if your child has:"],
            bullets: [
                "Recurring fevers or frequent infections",
                "Delayed milestones",
                "Breathing difficulties or a chronic cough",
                "Poor weight gain",
            ],
        },
        {
            heading: "Our paediatrician",
            paragraphs: [
                "Paediatric care at AMVI Hospitals is led by Dr. Ganesh, MBBS, MD (Paediatrics), DCH, a senior consultant paediatrician with more than 25 years of experience, including the care of preterm and extremely preterm babies. AMVI Hospitals is open 24/7.",
            ],
        },
    ],
    faqs: [
        { question: "Does AMVI Hospitals have a NICU?", answer: "Yes. AMVI Hospitals has a neonatal intensive care unit for newborns who need extra monitoring or support, such as premature babies, babies with breathing difficulties or newborn jaundice." },
        { question: "Why would my baby be taken to the NICU?", answer: "Common reasons include premature birth, low birth weight, breathing difficulties, jaundice needing phototherapy or a suspected infection. Admission doesn't always mean something is seriously wrong; often a baby just needs closer observation for a short time." },
        { question: "Can parents be with their baby in the NICU?", answer: "Yes. Parents are encouraged to spend time with their baby and are kept informed about the care their baby is receiving." },
        { question: "Do you give childhood vaccinations?", answer: "Yes. Our paediatrician provides routine vaccinations following the recommended schedule, along with regular growth and development check-ups." },
        { question: "Who is the paediatrician at AMVI Hospitals?", answer: "Dr. Ganesh, MBBS, MD (Paediatrics), DCH, a senior consultant paediatrician with more than 25 years of experience, including caring for preterm babies." },
    ],
    related: [
        { name: "Maternity care", href: "/maternity" },
        { name: "High-risk pregnancy", href: "/maternity/high-risk-pregnancy" },
        { name: "Twins & triplets", href: "/maternity/twins-triplets" },
        { name: "Our doctors", href: "/about/doctors" },
    ],
}
