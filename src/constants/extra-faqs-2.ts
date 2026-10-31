// FAQs from the hospital's previous website, added in Batch 7. Keyed by page
// path and appended to each page's FAQ list by extraFaqs() (extra-content.ts).
// Edited lightly: removed emergency-care claims (awaiting client confirmation),
// comparisons with other hospitals and unverified figures.
import { FaqItem } from "@/types/condition-page"

const bookingAnswer =
    "Call our Puppalaguda branch on +91 91000 09669 or our Attapur branch on +91 80088 42200, or use the appointment form on our Contact page. Please bring any previous fertility reports and semen analysis results to your first visit."

export const extraFaqs2: Record<string, FaqItem[]> = {
    "/infertility/male/erectile-dysfunction": [
        { question: "How can I book a consultation at AMVI Hospitals in Hyderabad?", answer: bookingAnswer },
    ],
    "/infertility/male/oligospermia": [
        { question: "How can I book a fertility consultation at AMVI Hospitals in Hyderabad?", answer: bookingAnswer },
    ],
    "/infertility/male/varicocele": [
        { question: "How can I book a consultation for varicocele at AMVI Hospitals?", answer: bookingAnswer },
    ],
    "/infertility/ivf-failure": [
        {
            question: "What methods are used at AMVI Hospitals to improve egg and embryo quality?",
            answer: "We use personalised ovarian stimulation protocols, carefully chosen fertilisation techniques and controlled embryo culture. When appropriate, embryos are cultured to the blastocyst stage (day 5) so that the embryos with the best chance of implanting can be selected.",
        },
    ],
    "/gynaecology/low-amh": [
        {
            question: "What other tests are needed along with AMH?",
            answer: "Doctors usually also recommend an antral follicle count (AFC) ultrasound, FSH, LH, oestradiol and thyroid tests, and a semen analysis for the partner, for a complete fertility assessment.",
        },
    ],
    "/gynaecology/menstrual-problems": [
        {
            question: "Does AMVI Hospitals provide specialised treatment for menstrual disorders?",
            answer: "Yes. AMVI Hospitals offers complete diagnosis and treatment of menstrual problems, from irregular, heavy or painful periods to hormonal causes, by experienced gynaecologists.",
        },
        {
            question: "Are menstrual problems treated at both the Attapur and Puppalaguda branches?",
            answer: "Yes. Gynaecology care for menstrual disorders is available at both our Attapur and Puppalaguda branches.",
        },
        {
            question: "Is long-term management available for chronic menstrual problems?",
            answer: "Yes. For long-standing problems such as PCOS-related irregular periods or endometriosis, we provide a personalised long-term treatment plan with regular follow-up.",
        },
    ],
    "/infertility/picsi": [
        {
            question: "What is the approximate cost of PICSI?",
            answer: "The cost of PICSI depends on your treatment plan and whether it is used with IVF or ICSI. Detailed cost information is shared at your fertility consultation.",
        },
        {
            question: "Are there any risks or complications linked to PICSI?",
            answer: "PICSI does not add risks beyond those of standard ICSI, and it is safe when performed by trained embryologists and fertility specialists.",
        },
        {
            question: "Where can I consult AMVI Hospitals for PICSI treatment in Hyderabad?",
            answer: "You can consult our fertility specialists at either of our Hyderabad branches, in Attapur and Puppalaguda.",
        },
    ],
    "/gynaecology/pcod": [
        {
            question: "Why choose AMVI Hospitals for PCOD treatment in Hyderabad?",
            answer: "AMVI Hospitals offers complete PCOD care: experienced gynaecologists, on-site diagnostics, a personalised treatment plan, fertility-focused care when you want to conceive, and regular follow-up to help restore hormonal balance.",
        },
    ],
    "/gynaecology/uterine-fibroids": [
        {
            question: "Why should I choose AMVI Hospitals for fibroid treatment?",
            answer: "Fibroid care at AMVI Hospitals is led by experienced specialists, with minimally invasive (laparoscopic and hysteroscopic) procedures, treatment planned around your symptoms and pregnancy plans, and a strong focus on safety and fertility.",
        },
    ],
    "/cosmetic-gynecology/vaginal-tightening": [
        {
            question: "What are the long-term results of vaginal tightening?",
            answer: "The main long-term result is a tighter vaginal canal, which many women find improves their sex life. The procedure is also used to correct some congenital conditions of the vagina. Future childbirth and ageing can affect the result.",
        },
        {
            question: "What are the options if vaginal tightening doesn't give the result I wanted?",
            answer: "If the result isn't satisfactory, your doctor may recommend a revision procedure or non-surgical vaginal rejuvenation.",
        },
    ],
    "/location/financial-district": [
        {
            question: "Is AMVI Hospitals close to the Financial District?",
            answer: "Yes. AMVI Hospitals Puppalaguda is about 6 km from the Financial District via the Nanakramguda–Puppalaguda road, usually 12–18 minutes by car or auto, depending on traffic.",
        },
        {
            question: "Do I need a referral to visit AMVI Hospitals from the Financial District?",
            answer: "No referral is needed. Call +91 91000 09669 to book a consultation with Dr. Shaivalini Kamarapu. Your first consultation includes a review of your medical history and a plan for any tests you need.",
        },
        {
            question: "Can I get my AMH test and semen analysis done at the Puppalaguda branch?",
            answer: "Yes. Fertility investigations, including AMH and other hormone blood tests, semen analysis and follicle-monitoring scans, can be arranged at AMVI Hospitals Puppalaguda. Your doctor will tell you when to expect each result.",
        },
        {
            question: "What treatments are available at AMVI Hospitals near the Financial District?",
            answer: "AMVI Hospitals Puppalaguda offers IVF, IUI and ICSI, PCOS treatment, laparoscopic surgery, high-risk pregnancy care and complete maternity services, including normal and painless delivery.",
        },
    ],
    "/location/gachibowli": [
        {
            question: "Is there an IVF centre near Gachibowli at AMVI Hospitals?",
            answer: "Yes. Both AMVI Hospitals branches can be reached from Gachibowli; Puppalaguda is the closer one, via Nanakramguda and the Financial District. We offer IVF, IUI, ICSI and complete fertility and women's health care. Call +91 91000 09669 to book.",
        },
    ],
    "/location/kokapet": [
        {
            question: "Which AMVI Hospitals branch is nearest to Kokapet?",
            answer: "AMVI Hospitals Puppalaguda is about 7 km from Kokapet via Narsingi Road. The Narsingi junction is about 4 km from Kokapet, so the route is straightforward.",
        },
        {
            question: "Can I have laparoscopy at AMVI Hospitals near Kokapet?",
            answer: "Yes. AMVI Hospitals offers laparoscopic surgery for endometriosis, ovarian cysts, fibroid removal and assessment of the fallopian tubes, performed by Dr. Shaivalini Kamarapu, an advanced laparoscopic surgeon.",
        },
        {
            question: "Does AMVI Hospitals manage high-risk pregnancies for patients from Kokapet?",
            answer: "Yes. High-risk pregnancy care at AMVI Hospitals covers twin pregnancies, gestational diabetes, pre-eclampsia, IVF pregnancies, pregnancy at an older age and pregnancy after a previous C-section. Patients from Kokapet can book at the Puppalaguda branch.",
        },
    ],
    "/location/manikonda": [
        {
            question: "Is there an IVF hospital near Manikonda at AMVI Hospitals?",
            answer: "Yes. Our Puppalaguda branch, on the Narsingi–Puppalaguda Main Road, is the most convenient for patients from Manikonda, the Financial District and Laxmi Nagar Colony. Call +91 91000 09669 to book a consultation.",
        },
    ],
    "/location/mehdipatnam": [
        {
            question: "Are urgent gynaecological and pregnancy services available at AMVI Hospitals?",
            answer: "Yes. Both AMVI Hospitals branches are open 24/7. For an urgent gynaecological or pregnancy problem, call the Attapur branch on +91 80088 42200 or Puppalaguda on +91 91000 09669. In a life-threatening emergency, call 108.",
        },
        {
            question: "What fertility services does AMVI Hospitals offer at the Attapur branch?",
            answer: "The Attapur branch offers IVF, IUI, ICSI, IMSI and PICSI, genetic screening and care for recurrent pregnancy loss, with a complete fertility work-up for both partners (semen analysis, hormone tests, tubal assessment and ovarian reserve testing) before treatment is recommended. Call +91 80088 42200 to book.",
        },
    ],
    "/location/nanakramguda": [
        {
            question: "Can I get PCOS treatment at AMVI Hospitals near Nanakramguda?",
            answer: "Yes. PCOS and PCOD care at AMVI Hospitals includes hormonal treatment, diet and lifestyle advice, ovulation induction, and IUI or IVF if natural conception doesn't happen. Dr. Shaivalini Kamarapu has extensive experience with PCOS-related fertility problems.",
        },
        {
            question: "What is the IVF success rate at AMVI Hospitals?",
            answer: "Success rates depend on your age, AMH level, test results and diagnosis, so generic statistics can be misleading. Dr. Shaivalini Kamarapu discusses a realistic, personalised estimate with you at your first consultation.",
        },
    ],
    "/location/shaikpet": [
        {
            question: "Which AMVI Hospitals branch is closest to Shaikpet?",
            answer: "AMVI Hospitals Attapur is about 5 km from Shaikpet via Tolichowki and Attapur Road, which also makes it convenient for patients from Banjara Hills and Jubilee Hills.",
        },
        {
            question: "Can I deliver my baby at AMVI Hospitals if I live in Shaikpet?",
            answer: "Yes. AMVI Hospitals Attapur offers normal delivery, painless delivery with an epidural and high-risk pregnancy care. Many families from Shaikpet, Tolichowki and Banjara Hills choose AMVI for the whole journey, from fertility treatment to delivery, with the same team.",
        },
        {
            question: "What if I have had recurrent pregnancy loss? Can AMVI Hospitals help?",
            answer: "Yes. Investigations for recurrent pregnancy loss include genetic testing, thrombophilia screening, assessment of the uterine cavity, hormone tests and immunological tests. Depending on the cause, treatment may include IVF with genetic testing of embryos (PGT-A). Call +91 80088 42200 to book.",
        },
    ],
    "/location/tolichowki": [
        {
            question: "Who is an experienced gynaecologist near Tolichowki, Hyderabad?",
            answer: "Dr. Shaivalini Kamarapu consults at AMVI Hospitals Attapur, about 4 km from Tolichowki. She has over 20 years of experience in fertility and IVF, PCOS, normal and painless delivery and high-risk pregnancy.",
        },
        {
            question: "Can patients from Tolichowki get IVF treatment at AMVI Hospitals?",
            answer: "Yes. AMVI Hospitals Attapur offers the complete IVF programme: stimulation, egg collection, fertilisation (including ICSI), embryo transfer and embryo freezing. The branch is about 4 km from Tolichowki, around 8–12 minutes by road.",
        },
        {
            question: "Do you offer PCOS treatment for patients near Tolichowki?",
            answer: "Yes. PCOS care at the Attapur branch includes hormone assessment, ultrasound, diet advice, ovulation induction and fertility treatment if needed. With the right plan, most women with PCOS can conceive.",
        },
        {
            question: "How do I reach AMVI Hospitals Attapur from Tolichowki?",
            answer: "Head towards Attapur on the main road. AMVI Hospitals is at Pillar No. 160, 3rd Floor, Rajendra Nagar Road, Attapur, about 4 km (8–12 minutes) from Tolichowki. Call +91 80088 42200 for directions.",
        },
    ],
}
