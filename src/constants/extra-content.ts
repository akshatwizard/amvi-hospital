// Content carried over from the hospital's previous website, cleaned up and
// added to the matching pages of the new site. Keyed by page path.
// Sections render via <ExtraSections path="..." />; FAQs are appended to each page's FAQ list.
import { FaqItem } from "@/types/condition-page"

export type ExtraItem = { title: string; text?: string; bullets?: string[]; outro?: string }
export type ExtraSection = { heading: string; paragraphs?: string[]; bullets?: string[]; items?: ExtraItem[]; outro?: string }

export const extraContent: Record<string, { sections?: ExtraSection[]; faqs?: FaqItem[] }> = {
    "/gynaecology/endometriosis": {
        "sections": [
            {
                "heading": "Where endometriosis is found",
                "paragraphs": [
                    "Most commonly, endometriosis is found on the ovaries, fallopian tubes, tissues that support the uterus, and the outer surface of the uterus. It may also affect areas such as the vagina, cervix, vulva, bowel, bladder, or rectum. In rare cases, endometriosis can occur in distant organs like the lungs, brain, or skin."
                ]
            },
            {
                "heading": "More about the symptoms",
                "items": [
                    {
                        "title": "Pain during or after sexual intercourse (Dyspareunia)",
                        "text": "Deep pelvic pain during or following intercourse is commonly reported and may be due to endometriotic lesions behind the uterus or in the pelvic region."
                    },
                    {
                        "title": "Chronic pelvic pain",
                        "text": "Persistent pain in the lower abdomen or pelvic area, even outside the menstrual cycle, is a frequent symptom and can affect quality of life."
                    },
                    {
                        "title": "Adhesions affecting ovaries and fallopian tubes",
                        "text": "Endometriosis can cause adhesions where the ovaries and fallopian tubes become stuck together. This can interfere with the egg being picked up by the fallopian tube, reducing fertility."
                    },
                    {
                        "title": "Progressive worsening of symptoms",
                        "text": "Endometriosis is a progressive condition. Without treatment, endometriotic lesions may grow in size, leading to increased pain, more severe symptoms, and greater reproductive complications over time."
                    }
                ]
            },
            {
                "heading": "Why endometriosis occurs",
                "paragraphs": [
                    "The exact reason why endometriosis occurs is not fully understood. It is believed to develop due to a combination of factors, including retrograde menstruation, where menstrual blood flows backwards into the pelvic cavity, allowing endometrial-like tissue to grow outside the uterus. An altered immune or autoimmune response may also play a role by failing to eliminate this misplaced tissue. In addition, a familial or genetic tendency increases the risk, as endometriosis is more common in women with a family history of the condition."
                ]
            },
            {
                "heading": "How endometriosis is diagnosed at AMVI Hospital",
                "paragraphs": [
                    "Accurate diagnosis of endometriosis is essential for effective treatment and long-term symptom relief. At AMVI Hospital, advanced imaging and minimally invasive techniques are used to identify the condition and assess its severity."
                ],
                "items": [
                    {
                        "title": "Sonography (ultrasound)",
                        "text": "Pelvic ultrasound helps detect certain forms of endometriosis, especially ovarian endometriomas (chocolate cysts). It may also show reduced mobility of the uterus and ovaries, suggesting adhesions. An experienced doctor can identify the disease early and assess its extent."
                    },
                    {
                        "title": "Diagnostic laparoscopy",
                        "text": "Laparoscopy is the gold standard for diagnosing endometriosis. A small camera is inserted through a tiny incision near the navel to directly view pelvic organs. It allows confirmation by biopsy and staging of the disease as minimal, mild, moderate, or severe, while also enabling treatment during the same procedure."
                    },
                    {
                        "title": "Other imaging tests",
                        "text": "Investigations such as MRI or CT scans are used in selected cases to evaluate deep or complex endometriosis, especially when organs like the bowel or bladder may be involved."
                    }
                ]
            },
            {
                "heading": "Treatment pathways at AMVI Hospital",
                "paragraphs": [
                    "The treatment of endometriosis is individualized and depends on several factors, including the severity of symptoms, extent of disease, ovarian reserve (egg count), and the woman's desire to conceive. At AMVI Hospital, treatment is planned with a strong focus on pain relief, fertility preservation, and long-term disease control."
                ],
                "items": [
                    {
                        "title": "If you are planning pregnancy",
                        "text": "Endometriosis can temporarily be suppressed during pregnancy and breastfeeding, as these phases stop regular menstrual cycles. However, women wishing to conceive are advised to plan pregnancy early, as endometriosis is a progressive condition. Endometriosis usually has minimal impact on pregnancy and child development. Surgical removal of endometriotic lesions is recommended only if natural conception is difficult or when pain and disease severity interfere with fertility."
                    },
                    {
                        "title": "Laparoscopic surgery",
                        "text": "Laparoscopic surgery is the preferred and most effective surgical approach for endometriosis. It allows clear visualisation of the uterus, ovaries, fallopian tubes, and surrounding structures. Advanced endometriosis surgery requires a high level of surgical expertise to safely remove lesions, chocolate cysts, and adhesions while preserving ovarian function. There is a risk of recurrence after surgery; therefore, women are advised to plan pregnancy as soon as possible for optimal fertility outcomes. Any pelvic surgery carries a risk of reducing ovarian reserve due to removal of normal ovarian tissue or the use of cautery. Hence, evaluation of egg count (AMH) is essential before surgery. If ovarian reserve is low, IVF may be a better treatment option. In most cases, removal of endometriosis before IVF is not mandatory, as it does not significantly affect IVF success rates."
                    },
                    {
                        "title": "If you are not planning pregnancy",
                        "text": "For women who are not planning pregnancy or have completed their family, treatment depends on symptom severity and disease extent and may include medical therapy, surgery, or a combination of both.",
                        "bullets": ["Pain relievers: Mild endometriosis-related pain can be managed with simple analgesics such as ibuprofen, mefenamic acid, or other anti-inflammatory medications.", "GnRH analogues: These medications suppress ovarian oestrogen production, creating a temporary menopausal state that reduces endometriotic activity. Side effects may include hot flushes, vaginal dryness, and bone thinning, which are reversible after stopping treatment. Calcium and add-back therapy may be advised to protect bone health.", "Dienogest: A synthetic progesterone with a better safety profile, shown to be equally effective to GnRH analogues in controlling pain and disease progression."]
                    },
                    {
                        "title": "Surgical treatment",
                        "text": "Surgical treatment is similar to that for women planning pregnancy. In severe or recurrent cases, hysterectomy with or without removal of ovaries may be recommended after careful counselling."
                    }
                ]
            },
            {
                "heading": "Adenomyosis and its treatment",
                "paragraphs": [
                    "Adenomyosis is a condition closely related to endometriosis, where endometrial tissue grows within the muscular wall of the uterus. As menstrual blood cannot escape from this muscle layer, it causes uterine thickening, painful periods, and heavy menstrual bleeding.",
                    "Adenomyosis can significantly affect embryo implantation, leading to infertility and recurrent miscarriages. It may be diffuse, involving the entire uterus, or localised, forming an adenoma.",
                    "Treatment options include medical therapy similar to endometriosis. In selected cases, adenomas can be surgically removed, although uterus-preserving surgeries often have limited success. In severe cases, hysterectomy may be required.",
                    "At AMVI Hospital, specialised IVF protocols for adenomyosis have been developed to improve implantation rates and achieve better reproductive outcomes."
                ]
            },
            {
                "heading": "How to reduce the risk of endometriosis",
                "paragraphs": [
                    "While endometriosis cannot always be completely prevented, certain lifestyle measures may help reduce the risk and manage symptoms:"
                ],
                "bullets": [
                    "Consult your doctor regularly for early evaluation and timely management of menstrual pain or pelvic discomfort.",
                    "Engage in regular exercise, which helps balance hormones and reduce inflammation.",
                    "Limit alcohol intake, as excessive alcohol can increase oestrogen levels in the body.",
                    "Reduce consumption of caffeinated drinks, as high caffeine intake may aggravate hormonal imbalance."
                ],
                "outro": "Early awareness and healthy lifestyle choices, along with expert guidance at AMVI Hospital, can help in better long-term management of endometriosis."
            },
            {
                "heading": "Your specialist: Dr. Shaivalini Kamarapu",
                "bullets": [
                    "Dr. Shaivalini Kamarapu is a highly experienced endometriosis and infertility specialist at AMVI Hospital, Hyderabad, with over 20 years of expertise in women's reproductive health and advanced gynaecological care.",
                    "She specialises in the diagnosis and treatment of endometriosis, providing personalised, evidence-based care for women with chronic pelvic pain, painful menstruation, painful intercourse, and endometriosis-related infertility.",
                    "Her clinical expertise includes early detection of endometriosis, detailed pelvic ultrasound assessment, accurate staging of the disease, and comprehensive fertility evaluation to determine the impact on reproductive potential.",
                    "Dr. Kamarapu is highly skilled in laparoscopic surgery for endometriosis, including excision of endometriotic lesions, removal of ovarian chocolate cysts, and release of pelvic adhesions to restore normal pelvic anatomy.",
                    "She has extensive experience managing complex and recurrent endometriosis cases, including deep infiltrating endometriosis, infertility associated with endometriosis, and patients with previous surgical or IVF failures.",
                    "Known for her ethical, patient-centred approach, she offers transparent counselling, realistic expectations, and customised treatment plans that may include medical therapy, laparoscopic surgery, or assisted reproductive techniques such as IVF.",
                    "In addition to her role at AMVI Hospital, Dr. Shaivalini Kamarapu is also a Consultant at Rainbow Hospitals, Apollo Hospitals, and Ankura Hospitals, making her a trusted specialist for endometriosis treatment in Hyderabad."
                ]
            }
        ],
        "faqs": [
            {
                "question": "How is endometriosis accurately diagnosed?",
                "answer": "Diagnosis involves clinical evaluation, pelvic ultrasound, and confirmation through laparoscopy. AMVI Hospital uses advanced imaging and minimally invasive techniques to accurately assess disease severity and stage."
            },
            {
                "question": "When is laparoscopic surgery recommended for endometriosis?",
                "answer": "Laparoscopic surgery is advised when symptoms are severe, fertility is affected, or medical treatment is ineffective. At AMVI Hospital, Hyderabad, surgery is planned carefully to relieve symptoms while preserving ovarian reserve."
            },
            {
                "question": "Is hormonal treatment safe for long-term management?",
                "answer": "Hormonal therapies such as Dienogest and GnRH analogues are effective in controlling symptoms. When monitored by specialists at AMVI Hospital, these treatments are safe, and most side effects are reversible."
            },
            {
                "question": "What are the main symptoms of endometriosis?",
                "answer": "The most common symptoms of endometriosis are: severe period pain that gets worse over time, chronic pelvic pain (not just during periods), pain during or after sexual intercourse, heavy or irregular menstrual bleeding, pain when passing urine or stools (especially during periods), bloating and digestive discomfort, and difficulty conceiving. Importantly, some women have no symptoms at all and are only diagnosed when they investigate fertility problems. If you experience any of these symptoms regularly, consult Dr. Shaivalini at AMVI Hospitals for a proper evaluation."
            },
            {
                "question": "Does endometriosis affect fertility?",
                "answer": "Yes, endometriosis is one of the leading causes of infertility in women. It can affect fertility by causing inflammation around the ovaries and fallopian tubes, forming adhesions (scar tissue) that block the tubes, impairing egg quality, and creating a hostile environment for fertilization and implantation. However, many women with endometriosis do conceive — either naturally after treatment, or with the help of IUI or IVF. At AMVI, we assess each case individually to recommend the best fertility approach."
            },
            {
                "question": "How does AMVI Hospital personalise endometriosis treatment?",
                "answer": "AMVI Hospital tailors treatment based on disease stage, pain severity, ovarian reserve, age, and pregnancy plans. This personalized approach ensures optimal pain control and fertility outcomes."
            },
            {
                "question": "What role does IVF play in endometriosis-related infertility?",
                "answer": "IVF is recommended when natural conception is difficult or ovarian reserve is low. AMVI Fertility and Maternity Center in Attapur and Puppalaguda offers specialized IVF protocols for women with endometriosis and adenomyosis."
            },
            {
                "question": "Why choose AMVI Hospital for endometriosis treatment in Hyderabad?",
                "answer": "AMVI Hospital is considered one of the best hospitals in Hyderabad for endometriosis care due to its experienced specialists, advanced laparoscopy, fertility-focused treatment strategies, and comprehensive services at Attapur and Puppalaguda."
            },
            {
                "question": "Is laparoscopy the only treatment for endometriosis?",
                "answer": "No — treatment depends on severity, age, and whether fertility is a priority. Mild to moderate endometriosis can be managed with hormonal medication (birth control pills, GnRH analogues, progestins) to suppress the growth of endometrial tissue and relieve pain. Laparoscopic surgery is recommended when medication doesn't provide enough relief, when there are large cysts (endometriomas), or when endometriosis is significantly affecting fertility. Dr. Shaivalini will recommend the most suitable approach based on your specific situation."
            },
            {
                "question": "What is the recovery time after endometriosis laparoscopic surgery?",
                "answer": "Recovery after laparoscopic endometriosis surgery at AMVI Hospitals is typically: Day 1–2: Rest at home, mild bloating or shoulder discomfort (normal). Days 3–5: Light activities, short walks. Week 1–2: Return to desk work and daily activities. Week 2–4: Full recovery. The procedure is done under general anaesthesia, and most patients go home within 24 hours. Post-operative follow-up is scheduled at 1 week and 6 weeks."
            }
        ]
    },
    "/gynaecology/uterine-fibroids": {
        "sections": [
            {
                "heading": "Why uterine fibroids develop",
                "paragraphs": [
                    "Uterine fibroids develop due to a combination of hormonal, genetic, and lifestyle factors. Although the exact cause is not always clear, several influences are known to increase the likelihood of fibroid formation in the uterus.",
                    "The exact cause of uterine fibroids is not fully known. However, fibroids are strongly influenced by female hormones, particularly oestrogen. They tend to grow during the reproductive years when hormone levels are high and often shrink or stop growing after menopause when oestrogen levels decline."
                ]
            },
            {
                "heading": "How fibroids are diagnosed at AMVI Hospital",
                "paragraphs": [
                    "Accurate diagnosis of uterine fibroids is essential for choosing the right treatment approach. At AMVI Hospital, advanced imaging techniques are used to confirm the presence, size, number, and location of fibroids, while also ruling out other uterine conditions."
                ],
                "items": [
                    {
                        "title": "Ultrasound examination",
                        "text": "Ultrasound is the first-line and most commonly used test for diagnosing uterine fibroids.",
                        "bullets": [
                            "A transabdominal ultrasound provides a general view of the uterus and surrounding pelvic organs.",
                            "A transvaginal ultrasound offers a clearer and more detailed image of the uterine structure, especially for smaller fibroids.",
                            "Ultrasound helps identify the size, location, and number of fibroids.",
                            "It is a safe, painless, and widely available diagnostic tool.",
                            "In most cases, an ultrasound is sufficient to confirm the diagnosis of uterine fibroids."
                        ]
                    },
                    {
                        "title": "Magnetic resonance imaging (MRI)",
                        "text": "MRI is used when further evaluation is required or when ultrasound findings are unclear.",
                        "bullets": [
                            "MRI provides high-resolution, detailed images of the uterus.",
                            "It is especially helpful in differentiating fibroids from adenomyosis, another benign uterine condition that may appear similar on ultrasound.",
                            "MRI accurately maps the exact location and type of fibroids, aiding treatment planning.",
                            "It is useful for women with multiple fibroids or large uterine masses.",
                            "MRI assists doctors in selecting the most appropriate medical or surgical treatment option."
                        ]
                    },
                    {
                        "title": "Why accurate diagnosis matters",
                        "text": "Proper diagnosis helps avoid unnecessary surgery.",
                        "bullets": [
                            "It ensures fertility-preserving treatment when pregnancy is a concern.",
                            "Accurate imaging allows for personalized and effective management."
                        ],
                        "outro": "At AMVI Hospital, our specialists use advanced diagnostic tools and clinical expertise to ensure precise diagnosis and optimal treatment outcomes for women with uterine fibroids."
                    }
                ]
            },
            {
                "heading": "Treatment options for uterine fibroids",
                "paragraphs": [
                    "Treatment for uterine fibroids depends on several factors such as the patient's age, symptoms, fibroid size and location, overall health, and future fertility plans. At AMVI Hospital, we offer individualized treatment plans focused on safety, effectiveness, and fertility preservation whenever possible."
                ],
                "items": [
                    {
                        "title": "Medical management (medication)",
                        "text": "Medical treatment may help control fibroid-related symptoms and reduce fibroid size in selected patients.",
                        "bullets": [
                            "Hormonal therapies such as GnRH agonists may temporarily shrink fibroids.",
                            "Hormone-releasing intrauterine devices (IUDs) can help reduce heavy menstrual bleeding.",
                            "Birth control pills may help regulate menstrual cycles and control symptoms.",
                            "Medical treatment is not suitable for every patient.",
                            "The choice of medication depends on age, fibroid size, ovarian function, and symptom severity."
                        ],
                        "outro": "At AMVI Hospital, specialists carefully evaluate each patient to determine whether medical management is appropriate."
                    },
                    {
                        "title": "Surgical treatment",
                        "text": "Surgery is often the most effective option for fibroids, especially when symptoms are severe or fertility needs to be preserved."
                    },
                    {
                        "title": "Myomectomy (fibroid removal)",
                        "text": "Myomectomy involves removing only the fibroids while preserving the uterus.",
                        "bullets": [
                            "It is the preferred option for women who wish to maintain fertility.",
                            "The uterus may or may not require suturing depending on fibroid depth.",
                            "Hysteroscopic myomectomy is used for fibroids inside the uterine cavity and is performed through the vagina without external cuts.",
                            "Laparoscopic myomectomy is performed through small abdominal incisions (5–10 mm) using a camera and specialized instruments."
                        ],
                        "outro": "This minimally invasive approach allows faster recovery and less pain."
                    },
                    {
                        "title": "Hysterectomy (removal of the uterus)",
                        "text": "Hysterectomy involves complete removal of the uterus and provides a permanent solution for fibroids.",
                        "bullets": [
                            "It can be performed using laparoscopic, abdominal, or vaginal methods.",
                            "This option is usually considered for women who have completed their family.",
                            "Hysterectomy may affect ovarian function in some cases.",
                            "When possible, it is generally advisable to delay hysterectomy until after 40 years of age."
                        ],
                        "outro": "AMVI Hospital evaluates all alternative treatments before recommending this option."
                    }
                ]
            },
            {
                "heading": "Personalised fibroid care at AMVI Hospital",
                "paragraphs": [
                    "At AMVI Hospital, our experts provide:"
                ],
                "bullets": [
                    "Comprehensive evaluation",
                    "Fertility-focused treatment planning",
                    "Advanced surgical and non-surgical options",
                    "High standards of safety and patient care"
                ],
                "outro": "We guide every patient towards the most effective and appropriate fibroid treatment for her individual needs."
            },
            {
                "heading": "Your specialist: Dr. Shaivalini Kamarapu",
                "bullets": [
                    "Dr. Shaivalini Kamarapu is a highly experienced uterine fibroids and infertility specialist at AMVI Hospital, Hyderabad, with over 20 years of expertise in women's reproductive health and advanced gynaecological care.",
                    "She specialises in the diagnosis and comprehensive management of uterine fibroids, offering personalised, evidence-based treatment for women experiencing heavy menstrual bleeding, pelvic pain, pressure symptoms, recurrent pregnancy loss, and fibroid-related infertility.",
                    "Her clinical expertise includes early detection of fibroids, advanced pelvic ultrasound evaluation, precise mapping of fibroid size and location, and detailed fertility assessment to understand the impact of fibroids on reproductive outcomes.",
                    "Dr. Kamarapu is highly skilled in minimally invasive fibroid surgeries, including laparoscopic and hysteroscopic myomectomy, focusing on uterus- and fertility-preserving techniques whenever possible.",
                    "She has extensive experience managing complex and recurrent fibroid cases, including large fibroids, multiple fibroids, fibroids affecting fertility or pregnancy outcomes, and patients with previous surgical or IVF failures.",
                    "Known for her ethical and patient-centred approach, she provides transparent counselling, realistic expectations, and customised treatment plans that may include medical therapy, minimally invasive surgery, or assisted reproductive techniques such as IVF when indicated.",
                    "In addition to her role at AMVI Hospital, Dr. Shaivalini Kamarapu also serves as a Consultant at Rainbow Hospitals, Apollo Hospitals, and Ankura Hospitals, making her a trusted and sought-after specialist for uterine fibroid treatment in Hyderabad."
                ]
            }
        ],
        "faqs": [
            {
                "question": "Can uterine fibroids decrease in size naturally?",
                "answer": "In some cases, fibroids may shrink on their own, especially after hormonal changes such as menopause. However, most fibroids need regular medical monitoring."
            },
            {
                "question": "Can fibroids cause abdominal bloating or a feeling of heaviness?",
                "answer": "Yes, fibroids can cause pelvic pressure, bloating, or abdominal fullness, particularly when they grow larger in size."
            },
            {
                "question": "Is there a chance that fibroids can return after treatment?",
                "answer": "Fibroids can recur after treatment, especially in younger women. Regular follow-up helps in early detection and timely management."
            }
        ]
    },
    "/laparoscopy/hysterectomy": {
        "sections": [
            {
                "heading": "When is a hysterectomy needed?",
                "items": [
                    {
                        "title": "Uterine fibroids",
                        "text": "Large or multiple fibroids that cause severe pelvic pain, pressure symptoms, or heavy menstrual bleeding may require hysterectomy when medications fail."
                    },
                    {
                        "title": "Abnormal uterine bleeding",
                        "text": "Persistent heavy or irregular bleeding that does not respond to hormonal treatment or minor procedures may indicate the need for hysterectomy surgery."
                    },
                    {
                        "title": "Severe endometriosis",
                        "text": "Severe endometriosis causing chronic pelvic pain and infertility may require Advanced Laparoscopic Hysterectomy when conservative treatment is ineffective."
                    },
                    {
                        "title": "Adenomyosis",
                        "text": "A condition where the uterine lining grows into the muscle wall, causing severe cramps and heavy periods, sometimes requiring surgical removal."
                    },
                    {
                        "title": "Uterine prolapse",
                        "text": "When the uterus descends into the vaginal canal due to weakened pelvic muscles, hysterectomy may be recommended for permanent correction."
                    }
                ]
            },
            {
                "heading": "Types of hysterectomy",
                "items": [
                    {
                        "title": "Subtotal (partial) hysterectomy",
                        "text": "Subtotal hysterectomy, also known as partial hysterectomy, involves removal of the upper portion of the uterus while preserving the cervix. This option may be considered when the cervix is healthy and does not require removal. Since the cervix remains intact, regular cervical cancer screening (Pap smear tests) must continue after surgery. Subtotal hysterectomy is less commonly performed compared to total hysterectomy but may be suitable in selected benign cases."
                    },
                    {
                        "title": "Pan hysterectomy",
                        "text": "A pan hysterectomy surgery involves removal of the uterus along with the cervix and may also include removal of the fallopian tubes and ovaries depending on the patient's pathology. Depending on the patient's condition, it may be a total hysterectomy with unilateral salpingo-oophorectomy (one tube and ovary removed) or with bilateral salpingo-oophorectomy (both tubes and ovaries removed)."
                    },
                    {
                        "title": "Radical hysterectomy",
                        "text": "A radical hysterectomy surgery involves removal of the entire uterus, cervix, surrounding supportive tissues (parametrium), pelvic lymph nodes, and the upper portion of the vagina. This procedure is primarily performed in cases of gynecological cancers such as cervical cancer or early-stage uterine cancer. Radical hysterectomy may be performed through open surgery or laparoscopic radical hysterectomy depending on the stage and spread of cancer."
                    },
                    {
                        "title": "Ultra-radical (extensive) surgery",
                        "text": "An ultra-radical (extensive) hysterectomy involves removal of the uterus, cervix, surrounding tissues (parametrium), pelvic lymph nodes, upper vagina, and may also include removal of parts of the bladder and rectum. This complex surgery is generally performed when gynecologic cancers are in an advanced stage and require extensive surgical management to control disease spread."
                    }
                ]
            }
        ]
    },
    "/infertility/male/varicocele": {
        "sections": [
            {
                "heading": "How varicocele is diagnosed at AMVI Hospital",
                "paragraphs": [
                    "Varicocele is diagnosed through a combination of clinical evaluation and imaging tests. At AMVI Hospital, Hyderabad, specialists follow a thorough diagnostic approach to accurately assess the condition and its impact on fertility and testicular health."
                ],
                "items": [
                    {
                        "title": "Medical history",
                        "text": "The diagnostic process begins with a detailed discussion of symptoms. The doctor may ask about:",
                        "bullets": [
                            "Scrotal pain or discomfort",
                            "Fertility concerns or difficulty conceiving",
                            "Changes in testicle size or consistency",
                            "Past medical conditions, surgeries, or treatments"
                        ],
                        "outro": "This information helps determine whether varicocele may be contributing to the symptoms."
                    },
                    {
                        "title": "Physical examination",
                        "text": "A physical examination is a key step in diagnosing varicocele. The doctor examines the scrotum while the patient is both standing and lying down to identify enlarged or twisted veins along the spermatic cord. A Valsalva maneuver may be performed, where the patient is asked to strain gently, as this can make smaller varicoceles more noticeable. Clinically detected varicoceles may require treatment depending on semen analysis results and symptom severity."
                    },
                    {
                        "title": "Doppler ultrasound",
                        "text": "A scrotal Doppler ultrasound is the most reliable imaging test used to confirm varicocele. It allows doctors to:",
                        "bullets": [
                            "Visualize blood flow within the scrotal veins",
                            "Detect dilated veins and reflux of blood",
                            "Assess the grade and severity of varicocele",
                            "Evaluate its effect on testicular circulation"
                        ],
                        "outro": "High-grade (Grade 3 or 4) varicocele identified on Doppler ultrasound may require treatment if semen parameters are abnormal."
                    }
                ]
            },
            {
                "heading": "Your specialist: Dr. Shaivalini Kamarapu",
                "bullets": [
                    "Dr. Shaivalini Kamarapu is a highly experienced infertility specialist at AMVI Hospital, Hyderabad, with over 20 years of expertise in male and female reproductive health.",
                    "She specialises in the diagnosis and treatment of varicocele-related male infertility, offering personalised, evidence-based care for men with low sperm count, poor sperm motility, and abnormal semen parameters.",
                    "Her clinical expertise includes comprehensive male infertility evaluation, hormonal profiling, advanced semen analysis, and interpretation of scrotal Doppler ultrasound for accurate varicocele diagnosis and grading.",
                    "Dr. Kamarapu has extensive experience managing complex fertility cases, including varicocele associated with azoospermia, repeated IVF failures, and unexplained male infertility.",
                    "She provides expert guidance on varicocele treatment options, including conservative management, surgical referral for varicocelectomy, and assisted reproductive techniques such as IVF and ICSI, based on individual fertility goals.",
                    "Known for her ethical and patient-centric approach, she ensures transparent counselling and realistic expectations for couples undergoing treatment for varicocele and infertility in Hyderabad.",
                    "In addition to male fertility care, she is skilled in laparoscopic surgery and treats associated female fertility conditions such as endometriosis, fibroids, and tubal blockages, helping improve overall reproductive outcomes.",
                    "Dr. Shaivalini Kamarapu is also a Consultant at Rainbow Hospitals, Apollo Hospitals, and Ankura Hospitals."
                ]
            }
        ]
    },
    "/infertility/male/erectile-dysfunction": {
        "sections": [
            {
                "heading": "How erectile dysfunction is diagnosed at AMVI Hospital",
                "paragraphs": [
                    "The diagnosis of Erectile Dysfunction (ED) involves a detailed and step-by-step evaluation to identify the exact cause of erection problems. At AMVI Hospital, Hyderabad, our specialists focus on understanding both physical and psychological factors before planning treatment."
                ],
                "items": [
                    {
                        "title": "Medical consultation and health history",
                        "text": "The doctor begins with a confidential discussion to understand the patient's condition in detail. This includes:",
                        "bullets": [
                            "Frequency and duration of erectile problems",
                            "Severity of erection difficulty",
                            "Presence of other sexual concerns such as low libido or ejaculation issues",
                            "Existing medical conditions like diabetes, blood pressure, or heart disease",
                            "Current medications or long-term drug use",
                            "Lifestyle habits such as smoking, alcohol intake, stress levels, and physical activity"
                        ],
                        "outro": "This step helps in identifying possible risk factors contributing to erectile dysfunction."
                    },
                    {
                        "title": "Physical examination",
                        "text": "A complete physical examination is performed to assess overall health. The doctor may:",
                        "bullets": [
                            "Measure blood pressure and pulse",
                            "Evaluate heart and vascular health",
                            "Examine the penis and testicles for structural abnormalities",
                            "Check signs of hormonal imbalance or nerve-related issues"
                        ],
                        "outro": "This examination helps detect physical causes of erectile dysfunction."
                    },
                    {
                        "title": "Blood tests and laboratory investigations",
                        "text": "Blood tests play a crucial role in ED diagnosis and may be done to:",
                        "bullets": [
                            "Measure testosterone and other hormone levels",
                            "Check blood sugar levels for diabetes",
                            "Evaluate thyroid function",
                            "Identify cholesterol abnormalities",
                            "Detect hormonal imbalances affecting sexual performance"
                        ],
                        "outro": "These tests help rule out internal medical conditions."
                    },
                    {
                        "title": "Psychological evaluation",
                        "text": "If emotional or mental factors are suspected, a psychological assessment may be advised. This helps identify:",
                        "bullets": [
                            "Stress or performance anxiety",
                            "Depression or mood disorders",
                            "Relationship or marital concerns",
                            "Emotional factors affecting sexual confidence"
                        ],
                        "outro": "Psychological causes are common and highly treatable when diagnosed early."
                    }
                ]
            },
            {
                "heading": "Treatment for erectile dysfunction",
                "items": [
                    {
                        "title": "Lifestyle changes",
                        "text": "Improving daily habits plays an important role in restoring erectile function. Doctors may advise:",
                        "bullets": [
                            "Regular physical activity",
                            "Maintaining a healthy body weight",
                            "Quitting smoking and tobacco use",
                            "Reducing alcohol intake",
                            "Managing stress and anxiety",
                            "Improving sleep quality"
                        ],
                        "outro": "These changes help enhance blood flow, hormone balance, and overall sexual health."
                    },
                    {
                        "title": "Medication",
                        "bullets": [
                            "PDE-5 inhibitors: Commonly prescribed medicines such as sildenafil (Viagra), tadalafil (Cialis), vardenafil (Levitra), and avanafil help improve blood flow to the penis, enabling stronger and longer-lasting erections.",
                            "Testosterone replacement therapy: For men with low testosterone levels, hormone therapy may be advised to improve sexual desire and erectile strength.",
                            "Alprostadil therapy: This medication may be given as a penile injection or urethral suppository to increase blood circulation and induce erection.",
                            "Other medical options: In some cases, topical creams or hormone patches may also be considered based on individual needs."
                        ]
                    },
                    {
                        "title": "Psychological counselling",
                        "text": "When stress, anxiety, depression, or relationship concerns contribute to ED, counselling or sex therapy can be highly effective. Treatment may include:",
                        "bullets": [
                            "Individual counselling",
                            "Couples therapy",
                            "Sexual performance counselling"
                        ],
                        "outro": "This approach helps restore confidence and emotional well-being."
                    }
                ]
            }
        ],
        "faqs": [
            {
                "question": "At what age does erectile dysfunction usually start?",
                "answer": "There is no fixed age for erectile dysfunction. While it is more frequently seen in men above 40 years, it can occur at any age depending on health, stress levels, and medical conditions."
            },
            {
                "question": "What emotional effects does erectile dysfunction cause?",
                "answer": "Men with ED may experience embarrassment, anxiety, frustration, or low self-esteem. These feelings are common and treatable with professional support and proper care."
            },
            {
                "question": "How should I support my partner who has erectile dysfunction?",
                "answer": "Being supportive, patient, and communicative is very important. Encouraging medical consultation and avoiding blame can help improve both emotional well-being and treatment outcomes."
            }
        ]
    },
    "/infertility/ivf-failure": {
        "sections": [
            {
                "heading": "How we approach IVF failure",
                "paragraphs": [
                    "IVF offers higher chances of pregnancy compared to other fertility treatments, and many couples conceive in early attempts. However, success can vary, and IVF failure is sometimes possible due to individual medical factors and clinical conditions.",
                    "At AMVI Hospital – Fertility & Maternity Care, we combine advanced IVF laboratory infrastructure with personalized treatment planning. Our modern labs, advanced equipment, and optimized embryo culture systems support healthy embryo development at every stage.",
                    "With strong experience in handling complex fertility cases, our specialists design individualized ovarian stimulation and treatment protocols to improve outcomes. We also provide comprehensive care plans that include advanced fertility techniques, offering complete support for couples facing IVF failure."
                ]
            },
            {
                "heading": "Support after an unsuccessful cycle",
                "items": [
                    {
                        "title": "Fertility counselling",
                        "text": "IVF failure can be emotionally overwhelming. Fertility counselling provides a safe and confidential space where individuals and couples can openly share their thoughts and emotions. With professional guidance, patients learn healthy coping strategies, manage stress, and regain emotional balance before planning the next steps."
                    },
                    {
                        "title": "IVF support networks",
                        "text": "Connecting with others who are going through similar experiences can offer comfort and reassurance. IVF support groups help reduce feelings of isolation, provide encouragement, and allow patients to learn from shared experiences within a supportive community."
                    },
                    {
                        "title": "Uterine and tubal evaluation (HSG)",
                        "text": "A detailed assessment of the uterus and fallopian tubes helps identify conditions that may interfere with implantation. Tests such as HSG provide valuable information about uterine shape and tubal health, allowing specialists to reduce the risk of IVF failure in future cycles."
                    }
                ]
            },
            {
                "heading": "Your specialist: Dr. Shaivalini Kamarapu",
                "bullets": [
                    "Dr Shaivalini Kamarapu is a highly experienced IVF and infertility specialist with over 20 years of expertise in women's reproductive health.",
                    "She specialises in the diagnosis and treatment of female and male infertility, offering personalised IVF and assisted reproductive solutions.",
                    "Her clinical expertise includes IVF, IUI, ovulation induction, fertility preservation, PCOS-related infertility, and unexplained infertility.",
                    "She has extensive experience managing advanced fertility cases, including low ovarian reserve, recurrent IVF failure, and age-related infertility.",
                    "Dr Kamarapu follows a patient-centric and ethical approach, ensuring transparent counselling and evidence-based fertility treatments.",
                    "She is skilled in laparoscopic surgery, helping improve fertility outcomes in conditions like endometriosis, fibroids, and tubal blockages."
                ]
            }
        ],
        "faqs": [
            {
                "question": "Does AMVI Hospital offer specialized care for repeated IVF failures?",
                "answer": "Yes. AMVI Hospital provides advanced fertility evaluations and enhanced treatment strategies for couples facing repeated IVF failures. These include deeper diagnostic testing, personalized treatment plans, and advanced reproductive techniques to improve success rates."
            },
            {
                "question": "How does AMVI Hospital manage poor fertilization during IVF?",
                "answer": "In cases of low fertilization rates, we conduct further evaluations of egg and sperm quality. Advanced sperm selection and precision fertilization techniques may be used to improve fertilization and embryo development in future IVF cycles."
            },
            {
                "question": "How can counseling and emotional support help after IVF failure?",
                "answer": "IVF failure can be emotionally challenging. AMVI Hospital offers supportive counseling to help individuals and couples cope with stress, regain emotional balance, and prepare mentally for the next steps in their fertility journey."
            },
            {
                "question": "Where can I consult AMVI Hospital for IVF failure treatment in Hyderabad?",
                "answer": "You can consult AMVI Fertility & Maternity Care at our Hyderabad locations in Attapur and Puppalaguda, where experienced fertility specialists provide compassionate, advanced care for IVF failure and infertility."
            }
        ]
    },
    "/cosmetic-gynecology/g-shot": {
        "sections": [
            {
                "heading": "Side effects, benefits and limitations",
                "paragraphs": [
                    "Side effects of the G-Shot can include bleeding, urinary retention issues, constant awareness of the G-Spot, a sensation of always being sexually aroused, constant vaginal wetness, hematoma, hematuria, UTI, increased need to wake up to urinate during the night, alteration of vaginal sensations, scar formation, pelvic pains, and overall varied results."
                ],
                "items": [
                    {
                        "title": "Possible benefits",
                        "bullets": [
                            "Increased sexual satisfaction",
                            "More sensitivity"
                        ]
                    },
                    {
                        "title": "Limitations",
                        "bullets": [
                            "Results vary from person to person",
                            "Not FDA-approved"
                        ]
                    }
                ]
            }
        ]
    },
    "/about/doctors": {
        "sections": [
            {
                "heading": "20+ years of clinical experience in Hyderabad",
                "paragraphs": [
                    "Dr. Shaivalini Kamarapu has been practising in Hyderabad for over two decades, building one of the city's most trusted fertility and maternity practices. She founded AMVI Hospitals with a vision to provide world-class reproductive healthcare accessible to families across Hyderabad — from Puppalaguda and Gachibowli in the west to Attapur and Rajendranagar in the south.",
                    "Over the course of her career, Dr. Shaivalini has personally supervised over 1,000 successful IVF cycles, handled more than 5,000 deliveries, and treated thousands of women with PCOS, endometriosis and other complex gynaecological conditions. Her patient-first approach, combined with evidence-based medicine and the latest reproductive technologies, is at the heart of care at AMVI Hospitals."
                ]
            },
            {
                "heading": "Robotic and advanced laparoscopic surgery",
                "paragraphs": [
                    "Recognized as one of the leading Robotic Gynecological Surgeons in Hyderabad, she has successfully performed more than 100 robotic gynecological procedures using the advanced SSi Mantra Surgical Robotic System at Jade Hospital. Her expertise includes the treatment of complex gynecological conditions such as severe endometriosis, large and multiple fibroids, ovarian cysts, and hysterectomies for benign gynecological disorders.",
                    "Throughout her distinguished career, Dr. Shaivalini has completed over 1,000 complex gynecological, cosmetic, laparoscopic, and robotic surgeries with exceptional clinical outcomes. Her advanced surgical skills enable greater precision, enhanced safety, minimal scarring, reduced hospital stays, and faster recovery for patients.",
                    "She is associated with some of Hyderabad's most prestigious healthcare institutions, including Apollo Hospitals, Ankura Hospitals, and Rainbow Hospitals, where she provides comprehensive, patient-centered care using the latest surgical and fertility treatment technologies. Her commitment to excellence, compassionate approach, and consistent results have earned her recognition as one of Hyderabad's most trusted consultants in gynecology and reproductive health."
                ]
            }
        ]
    },
    "/location/narsingi": {
        "faqs": [
            {
                "question": "Is there an IVF centre near Narsingi at AMVI Hospitals?",
                "answer": "Yes. AMVI Hospitals' Puppalaguda clinic is located on the Narsingi-Puppalaguda Main Road — making it one of the closest IVF and fertility centres for patients from Narsingi, Tellapur, Gopanpally, and Nanakramguda. We offer a complete range of IVF, IUI, ICSI, and fertility services. Call +91-9100009669 to book a consultation."
            },
            {
                "question": "What fertility treatments are available near Narsingi at AMVI?",
                "answer": "AMVI Hospitals offers a complete range of fertility treatments including IVF, IUI, ICSI, IMSI, PICSI, PGT, and treatment for recurrent pregnancy loss. We also provide a full fertility workup for both partners — semen analysis, hormone testing, HSG, and ovarian reserve testing — before recommending the most suitable treatment path."
            },
            {
                "question": "Can AMVI Hospitals treat PCOS for patients from Narsingi and Gopanpally?",
                "answer": "Yes. PCOS and PCOD treatment is one of AMVI Hospitals' core specialities. Dr. Shaivalini provides complete PCOS management — from diagnosis and hormonal treatment to ovulation induction, IUI, and IVF for women who want to conceive. Most patients see significant improvement within 3–6 months with the right personalised plan."
            },
            {
                "question": "Is normal delivery and painless delivery available near Narsingi at AMVI?",
                "answer": "Yes. AMVI Hospitals offers both normal delivery and painless delivery (epidural analgesia). Our maternity team provides complete antenatal care from the first trimester, 3D/4D ultrasound, fetal medicine, high-risk pregnancy management, and postnatal care. Dr. Shaivalini has handled more than 5,000 deliveries."
            },
            {
                "question": "How do I book an appointment at AMVI Hospitals from Narsingi?",
                "answer": "You can book by calling +91-9100009669 (Puppalaguda) or +91-80088 42200 (Attapur), by using the appointment form on our website, or via WhatsApp on +91-9100009669. Walk-ins are also welcome. OPD hours: Monday to Saturday, 10:00 AM to 6:00 PM."
            },
            {
                "question": "Is laparoscopic surgery available near Narsingi at AMVI Hospitals?",
                "answer": "Yes. AMVI has a fully equipped operation theatre for laparoscopic procedures — including fibroid removal (myomectomy), ovarian cyst surgery, endometriosis treatment, hysteroscopy, and laparoscopic hysterectomy. Most laparoscopic procedures involve a hospital stay of just 1–2 days and 1–2 weeks of recovery at home."
            },
            {
                "question": "Do you offer male infertility treatment near Narsingi at AMVI?",
                "answer": "Yes. AMVI Hospitals provides complete male infertility evaluation and treatment — including semen analysis, ICSI for low sperm count, azoospermia management, varicocele surgery, and sperm retrieval (TESE/PESA). Male factor is identified in about 40–50% of infertility cases and we offer the right solutions for every situation."
            }
        ]
    },
    "/location/rajendranagar": {
        "faqs": [
            {
                "question": "Is there an IVF clinic near Rajendranagar at AMVI Hospitals?",
                "answer": "Yes. AMVI Hospitals' Attapur clinic is located on Rajendra Nagar Road — making it the closest and most convenient IVF and fertility clinic for patients from Rajendranagar, Bandlaguda, Mir Alam, and Kishanbagh. We offer a complete range of IVF, IUI, ICSI, fertility, and women's health services. Call +91-80088 42200 to book your consultation."
            },
            {
                "question": "What fertility treatments are available near Rajendranagar at AMVI Hospitals?",
                "answer": "AMVI Hospitals offers a complete range of fertility treatments including IVF, IUI, ICSI, IMSI, PICSI, PGT, and treatment for recurrent pregnancy loss. We provide a full fertility workup for both partners — semen analysis, hormone testing, HSG, ovarian reserve testing — before recommending the right treatment path."
            },
            {
                "question": "Can AMVI Hospitals treat PCOS for patients from Rajendranagar and Bandlaguda?",
                "answer": "Yes. PCOS and PCOD treatment is one of AMVI Hospitals' core specialities. Dr. Shaivalini provides complete PCOS management — from diagnosis and hormonal treatment to ovulation induction, IUI, and IVF for women who want to conceive. Most patients see significant improvement within 3–6 months."
            },
            {
                "question": "Is normal delivery and painless delivery available at AMVI Hospitals near Rajendranagar?",
                "answer": "Yes. AMVI Hospitals offers both normal delivery and painless delivery (using epidural analgesia). Our maternity team provides complete antenatal care, 3D/4D ultrasound, fetal medicine, high-risk pregnancy management, and postnatal care. Dr. Shaivalini has handled more than 5,000 deliveries."
            },
            {
                "question": "How do I book an appointment at AMVI Hospitals from Rajendranagar?",
                "answer": "You can book an appointment by calling +91-80088 42200 (Attapur) or +91-9100009669 (Puppalaguda), by using the appointment form on our website, or by WhatsApp on +91-9100009669. Walk-in appointments are welcome. OPD hours are Monday to Saturday, 10:00 AM to 6:00 PM."
            },
            {
                "question": "Is laparoscopic surgery available near Rajendranagar at AMVI Hospitals?",
                "answer": "Yes. AMVI Hospitals has a fully equipped operation theatre for laparoscopic procedures — including fibroid removal (myomectomy), ovarian cyst surgery, endometriosis treatment, hysteroscopy, laparoscopic hysterectomy, and diagnostic laparoscopy. Most procedures have a recovery of 1–2 days in hospital and 1–2 weeks at home."
            },
            {
                "question": "Do you offer male infertility treatment near Rajendranagar at AMVI Hospitals?",
                "answer": "Yes. AMVI Hospitals provides complete male infertility evaluation and treatment — including semen analysis, ICSI for low sperm count, treatment for azoospermia (zero sperm), varicocele surgery, and sperm retrieval procedures (TESE/PESA). Male factor is identified in about 40–50% of infertility cases."
            }
        ]
    },
    "/location/manikonda": {
        "faqs": [
            {
                "question": "What fertility treatments are available near Manikonda at AMVI Hospitals?",
                "answer": "AMVI Hospitals offers a complete range of fertility treatments including IVF, IUI, ICSI, IMSI, PICSI, PGT, and treatment for recurrent pregnancy loss. We provide a full fertility workup for both partners — semen analysis, hormone testing, HSG, ovarian reserve testing — before recommending the right treatment path."
            },
            {
                "question": "Can AMVI Hospitals treat PCOS for patients from Manikonda and Financial District?",
                "answer": "Yes. PCOS and PCOD treatment is one of AMVI Hospitals' core specialities. Dr. Shaivalini provides complete PCOS management — from diagnosis and hormonal treatment to ovulation induction, IUI, and IVF for women who want to conceive. Many working professionals from the Financial District and Manikonda visit AMVI for PCOS treatment."
            },
            {
                "question": "Is normal delivery and painless delivery available at AMVI Hospitals near Manikonda?",
                "answer": "Yes. AMVI Hospitals offers both normal delivery and painless delivery (using epidural analgesia). Our maternity team provides complete antenatal care, 3D/4D ultrasound, fetal medicine, high-risk pregnancy management, and postnatal care. Dr. Shaivalini has handled more than 5,000 deliveries."
            },
            {
                "question": "How do I book an appointment at AMVI Hospitals from Manikonda?",
                "answer": "You can book an appointment by calling +91-9100009669 (Puppalaguda) or +91-80088 42200 (Attapur), by using the appointment form on our website, or by WhatsApp on +91-9100009669. Walk-in appointments are welcome. OPD hours are Monday to Saturday, 10:00 AM to 6:00 PM."
            },
            {
                "question": "Is laparoscopic surgery available near Manikonda at AMVI Hospitals?",
                "answer": "Yes. AMVI Hospitals has a fully equipped operation theatre for laparoscopic procedures — including fibroid removal (myomectomy), ovarian cyst surgery, endometriosis treatment, hysteroscopy, laparoscopic hysterectomy, and diagnostic laparoscopy. Most procedures have a recovery of 1–2 days in hospital and 1–2 weeks at home."
            },
            {
                "question": "Do you offer egg freezing and fertility preservation near Manikonda?",
                "answer": "Yes. AMVI Hospitals offers complete fertility preservation services — egg freezing, embryo freezing, sperm freezing, and cryopreservation. This is particularly sought-after by working professionals in Manikonda and the Financial District who wish to preserve their fertility options. Call to discuss this with Dr. Shaivalini."
            }
        ]
    },
    "/location/mehdipatnam": {
        "faqs": [
            {
                "question": "What fertility treatments are available near Mehdipatnam at AMVI Hospitals?",
                "answer": "AMVI Hospitals offers a complete range of fertility treatments including IVF, IUI, ICSI, IMSI, PICSI, PGT, and treatment for recurrent pregnancy loss. We also provide a full fertility workup for both partners — semen analysis, hormone testing, HSG, ovarian reserve testing — before recommending treatment. Call +91-80088 42200 to book."
            },
            {
                "question": "Is normal delivery and painless delivery available near Mehdipatnam?",
                "answer": "Yes. AMVI Hospitals offers both normal delivery and painless delivery (using epidural analgesia). Our maternity team provides complete antenatal care, 3D/4D ultrasound, fetal medicine, high-risk pregnancy management, and postnatal care. Dr. Shaivalini has handled more than 5,000 deliveries."
            },
            {
                "question": "Is laparoscopic surgery available near Mehdipatnam at AMVI Hospitals?",
                "answer": "Yes. AMVI Hospitals has a fully equipped OT for laparoscopic procedures — including fibroid removal, ovarian cyst surgery, endometriosis treatment, hysteroscopy, and laparoscopic hysterectomy. Most procedures require only 1–2 days in hospital."
            },
            {
                "question": "How do I book an appointment at AMVI Hospitals from Mehdipatnam?",
                "answer": "Call +91-80088 42200 (Attapur) or +91-9100009669 (Puppalaguda), use the appointment form on our website, or WhatsApp +91-9100009669. Walk-ins also welcome. OPD: Monday to Saturday, 10:00 AM to 6:00 PM."
            },
            {
                "question": "Do you offer male infertility treatment at AMVI Hospitals?",
                "answer": "Yes. AMVI Hospitals provides complete male infertility evaluation and treatment — including semen analysis, ICSI for low sperm count, treatment for azoospermia, varicocele surgery, and sperm retrieval procedures (TESE/PESA)."
            }
        ]
    },
    "/location/gachibowli": {
        "faqs": [
            {
                "question": "What fertility treatments are available near Gachibowli at AMVI Hospitals?",
                "answer": "AMVI Hospitals offers a complete range of fertility treatments including IVF, IUI, ICSI, IMSI, PICSI, PGT, and treatment for recurrent pregnancy loss. We provide a full fertility workup for both partners — semen analysis, hormone testing, HSG, ovarian reserve testing — before recommending the right treatment path."
            },
            {
                "question": "Is normal delivery and painless delivery available at AMVI Hospitals near Gachibowli?",
                "answer": "Yes. AMVI Hospitals offers both normal delivery and painless delivery (using epidural analgesia). Our maternity team provides complete antenatal care, 3D/4D ultrasound, fetal medicine, high-risk pregnancy management, and postnatal care. Dr. Shaivalini has handled more than 5,000 deliveries."
            },
            {
                "question": "How do I book an appointment at AMVI Hospitals from Gachibowli?",
                "answer": "Call +91-80088 42200 (Attapur) or +91-9100009669 (Puppalaguda), or use the appointment form on our website. Walk-ins are also welcome. OPD: Monday to Saturday, 10:00 AM to 6:00 PM."
            },
            {
                "question": "Is laparoscopic surgery available near Gachibowli at AMVI Hospitals?",
                "answer": "Yes. AMVI Hospitals has a fully equipped operation theatre for laparoscopic procedures — including fibroid removal (myomectomy), ovarian cyst surgery, endometriosis treatment, hysteroscopy, laparoscopic hysterectomy, and diagnostic laparoscopy. Most procedures have a recovery of 1–2 days in hospital and 1–2 weeks at home."
            },
            {
                "question": "Do you offer egg freezing and fertility preservation near Gachibowli?",
                "answer": "Yes. AMVI Hospitals offers complete fertility preservation services — egg freezing, embryo freezing, sperm freezing, and cryopreservation. This is particularly popular among working professionals in Gachibowli and the IT corridor who wish to preserve their fertility while focusing on their careers. Call to discuss your options with Dr. Shaivalini."
            }
        ]
    }
}

export const extraFaqs = (path: string): FaqItem[] => extraContent[path]?.faqs ?? []
export const extraSections = (path: string): ExtraSection[] => extraContent[path]?.sections ?? []
