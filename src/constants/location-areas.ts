import { LocationArea } from "@/types/location-area"

export const locationAreas: LocationArea[] = [
    {
        slug: "gachibowli",
        name: "Gachibowli",
        nearestBranch: "Puppalaguda",
        intro: "AMVI Hospitals is a short drive from Gachibowli, offering the same fertility, maternity, gynaecology and laparoscopic care that IT-corridor patients from Hitech City and Kondapur travel here for. Dr. Shaivalini Kamarapu sees patients from Gachibowli regularly for both routine gynaecology and complex fertility treatment.",
        nearbyLocalities: ["Hitech City", "Kondapur", "Nanakramguda", "Financial District"],
        highlightServices: ["Advanced IVF Treatment", "PCOS / PCOD Management", "Painless Delivery", "Laparoscopic Surgery"],
        testimonial: {
            quote: "Working in Gachibowli, I needed a fertility clinic that could work around my schedule. AMVI's Puppalaguda branch was close enough for quick visits during IVF monitoring, and the whole process felt genuinely organised.",
            name: "Meghana Rao",
        },
        faqs: [
            {
                question: "Can AMVI Hospitals treat PCOS for patients from Gachibowli and Kondapur?",
                answer: "Yes — PCOS and PCOD management is one of AMVI's core specialities. Dr. Shaivalini provides complete management, from diagnosis and hormonal treatment through to ovulation induction, IUI and IVF for women trying to conceive.",
            },
            {
                question: "How far is AMVI Hospitals from Gachibowli?",
                answer: "Our Puppalaguda branch is a convenient drive from Gachibowli, Hitech City and Kondapur — most patients from this side of the city choose Puppalaguda for its shorter commute.",
            },
        ],
    },
    {
        slug: "kokapet",
        name: "Kokapet",
        nearestBranch: "Puppalaguda",
        intro: "For families in Kokapet's growing residential communities, AMVI Hospitals' Puppalaguda branch offers complete maternity and fertility care without the drive into the older parts of the city. Many patients from Kokapet come to us for both antenatal care and gynaecological check-ups.",
        nearbyLocalities: ["Narsingi", "Manikonda", "Neopolis"],
        highlightServices: ["Maternity & Delivery Care", "3D/4D Ultrasound", "High-Risk Pregnancy Care", "Gynaecology"],
        testimonial: {
            quote: "We chose AMVI for our pregnancy because it was close to home in Kokapet and Dr. Shaivalini's reputation for high-risk pregnancy care gave us real confidence.",
            name: "Sindhu & Karthik Reddy",
        },
        faqs: [
            {
                question: "Does AMVI Hospitals offer maternity care for patients in Kokapet?",
                answer: "Yes — full antenatal care, high-risk pregnancy monitoring, 3D/4D ultrasound, and delivery services are all available at our Puppalaguda branch, close to Kokapet.",
            },
        ],
    },
    {
        slug: "manikonda",
        name: "Manikonda",
        nearestBranch: "Puppalaguda",
        intro: "AMVI Hospitals' Puppalaguda branch sits right at the edge of Manikonda, making it one of the closest full-service women's hospitals for local families. From routine gynaecology to advanced IVF, Dr. Shaivalini Kamarapu treats patients from Manikonda across every specialty AMVI offers.",
        nearbyLocalities: ["Narsingi", "Puppalaguda", "Gachibowli"],
        highlightServices: ["Gynaecology", "Advanced IVF Treatment", "Laparoscopic Surgery", "Cosmetic Gynaecology"],
        testimonial: {
            quote: "Living in Manikonda, AMVI has genuinely become our family's go-to for women's health — from my own gynaecology visits to my daughter-in-law's IVF journey.",
            name: "Padma Venkatesh",
        },
        faqs: [
            {
                question: "Is AMVI Hospitals easy to reach from Manikonda?",
                answer: "Yes — our Puppalaguda branch is right on the Narsingi-Puppalaguda Main Road, a very short distance from Manikonda, opposite Sloka school.",
            },
            {
                question: "What gynaecology services are available for Manikonda residents?",
                answer: "The full range — PCOS/PCOD, endometriosis, fibroids, menstrual disorders, contraception counselling, and preventive screening — all available at the Puppalaguda branch near Manikonda.",
            },
        ],
    },
    {
        slug: "financial-district",
        name: "Financial District",
        nearestBranch: "Puppalaguda",
        intro: "AMVI Hospitals is a convenient option for working professionals in the Financial District who need fertility or gynaecological care that fits around demanding schedules. Our Puppalaguda branch is close enough for a consultation during a lunch break or straight after work.",
        nearbyLocalities: ["Nanakramguda", "Gachibowli", "Kokapet"],
        highlightServices: ["Advanced IVF Treatment", "Fertility Preservation", "Infertility Assessment", "Health Checkups"],
        testimonial: {
            quote: "Between meetings in the Financial District, fitting in fertility treatment felt impossible until we found AMVI. The team scheduled our monitoring visits early morning so it barely disrupted work.",
            name: "Ananya & Rohit Sharma",
        },
        faqs: [
            {
                question: "Can I schedule fertility monitoring around a Financial District work schedule?",
                answer: "Yes — many of our patients from the Financial District and Nanakramguda work with us to schedule IVF monitoring scans and consultations around their working hours. Speak with our team when you book to arrange timing.",
            },
        ],
    },
    {
        slug: "nanakramguda",
        name: "Nanakramguda",
        nearestBranch: "Puppalaguda",
        intro: "Families and professionals in Nanakramguda have easy access to AMVI Hospitals' full range of women's health services at our nearby Puppalaguda branch — from annual gynaecology check-ups to complete fertility evaluation and treatment.",
        nearbyLocalities: ["Gachibowli", "Financial District", "Kokapet"],
        highlightServices: ["Gynaecology", "Infertility Assessment", "Maternity & Delivery Care", "Laparoscopic Surgery"],
        testimonial: {
            quote: "AMVI was recommended to me by a colleague in Nanakramguda, and I'm glad I listened — the doctors take real time to explain things instead of rushing through appointments.",
            name: "Divya Krishnan",
        },
        faqs: [
            {
                question: "What infertility evaluation options are available near Nanakramguda?",
                answer: "A full fertility workup for both partners — semen analysis, hormone testing, HSG and ovarian reserve testing — is available at our nearby Puppalaguda branch before any treatment is recommended.",
            },
        ],
    },
    {
        slug: "narsingi",
        name: "Narsingi",
        nearestBranch: "Puppalaguda",
        intro: "AMVI Hospitals' Puppalaguda branch sits directly on the Narsingi–Puppalaguda Main Road, making it one of the most accessible full-service women's hospitals for Narsingi residents — for everything from prenatal care to laparoscopic surgery.",
        nearbyLocalities: ["Puppalaguda", "Manikonda", "Kokapet"],
        highlightServices: ["Maternity & Delivery Care", "Gynaecology", "Laparoscopic Surgery", "Cosmetic Gynaecology"],
        testimonial: {
            quote: "AMVI is practically in our neighbourhood in Narsingi, but what kept us coming back was how thoroughly Dr. Shaivalini explained every step of my delivery plan.",
            name: "Swathi Mahesh",
        },
        faqs: [
            {
                question: "Where exactly is AMVI Hospitals located relative to Narsingi?",
                answer: "Our Puppalaguda branch is on the Narsingi–Puppalaguda Main Road, opposite Sloka school — directly accessible from Narsingi.",
            },
        ],
    },
    {
        slug: "mehdipatnam",
        name: "Mehdipatnam",
        nearestBranch: "Attapur",
        intro: "AMVI Hospitals' Attapur branch is a short distance from Mehdipatnam, giving local families access to complete gynaecology, fertility and maternity care without travelling into the city centre. Dr. Shaivalini Kamarapu sees patients from Mehdipatnam across every specialty offered at AMVI.",
        nearbyLocalities: ["Tolichowki", "Rajendranagar", "Attapur"],
        highlightServices: ["Gynaecology", "Advanced IVF Treatment", "Maternity & Delivery Care", "Cosmetic Gynaecology"],
        testimonial: {
            quote: "AMVI's Attapur branch is easy to reach from Mehdipatnam, and the care felt personal from the first visit — not like being processed through a big hospital system.",
            name: "Farha Sultana",
        },
        faqs: [
            {
                question: "Does AMVI Hospitals Attapur treat patients from Mehdipatnam?",
                answer: "Yes — Mehdipatnam is one of the main areas served by our Attapur branch, along with Tolichowki and Rajendranagar, for the full range of women's health services.",
            },
        ],
    },
    {
        slug: "tolichowki",
        name: "Tolichowki",
        nearestBranch: "Attapur",
        intro: "For families in Tolichowki, AMVI Hospitals' Attapur branch offers a genuine alternative to travelling further into Hyderabad for specialist women's healthcare — covering everything from routine gynaecology to advanced fertility treatment and laparoscopic surgery.",
        nearbyLocalities: ["Mehdipatnam", "Rajendranagar", "Shaikpet"],
        highlightServices: ["Gynaecology", "Laparoscopic Surgery", "Infertility Assessment", "Cosmetic Gynaecology"],
        testimonial: {
            quote: "I'd put off a gynaecology check-up for years out of nervousness. The team at AMVI's Attapur branch made it easy — private, unhurried, and close enough to home in Tolichowki that I had no excuse left.",
            name: "Ruqaiya Begum",
        },
        faqs: [
            {
                question: "What laparoscopic procedures are available for patients near Tolichowki?",
                answer: "Fibroid removal (myomectomy), ovarian cyst surgery, endometriosis treatment, hysteroscopy, laparoscopic hysterectomy and diagnostic laparoscopy are all performed at our Attapur branch, near Tolichowki.",
            },
        ],
    },
    {
        slug: "rajendranagar",
        name: "Rajendranagar",
        nearestBranch: "Attapur",
        intro: "AMVI Hospitals' Attapur branch is directly accessible from Rajendranagar, on Rajendra Nagar Road itself — offering complete maternity, gynaecology and fertility care to families across this part of Hyderabad.",
        nearbyLocalities: ["Attapur", "Mehdipatnam", "Shamshabad"],
        highlightServices: ["Maternity & Delivery Care", "Gynaecology", "High-Risk Pregnancy Care", "Advanced IVF Treatment"],
        testimonial: {
            quote: "Our delivery at AMVI's Attapur branch, right here on Rajendra Nagar Road, went smoothly thanks to how closely they monitored my pregnancy in the final weeks.",
            name: "Lakshmi Prasanna",
        },
        faqs: [
            {
                question: "Is AMVI Hospitals directly on Rajendra Nagar Road?",
                answer: "Yes — our Attapur branch is located on Rajendra Nagar Road (Pillar No. 160, 3rd Floor), directly serving Rajendranagar and the surrounding area.",
            },
        ],
    },
    {
        slug: "shaikpet",
        name: "Shaikpet",
        nearestBranch: "Attapur",
        intro: "Patients from Shaikpet have easy access to AMVI Hospitals' Attapur branch for complete women's healthcare — from PCOS and menstrual health to maternity care and advanced laparoscopic surgery, all under Dr. Shaivalini Kamarapu.",
        nearbyLocalities: ["Tolichowki", "Attapur", "Mehdipatnam"],
        highlightServices: ["Gynaecology", "PCOS / PCOD Management", "Maternity & Delivery Care", "Laparoscopic Surgery"],
        testimonial: {
            quote: "I'd been managing PCOS symptoms on my own for years. AMVI's Attapur branch, close to Shaikpet, was the first place that gave me an actual treatment plan instead of just advice to 'manage stress'.",
            name: "Zainab Fatima",
        },
        faqs: [
            {
                question: "Can I get a PCOS diagnosis and treatment plan near Shaikpet?",
                answer: "Yes — our Attapur branch, close to Shaikpet, offers full PCOS/PCOD diagnosis and management, from hormonal treatment through to fertility support if needed.",
            },
        ],
    },
]
