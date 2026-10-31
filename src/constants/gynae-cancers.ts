import type { HubContent } from "@/components/hub/condition-hub"

// Content for the Gynaecological Cancers overview page (/gynaecology/cancers).
// Facts are summarised from the five cancer condition pages.

export const gynaeCancersHub: HubContent = {
    overviewHeading: "Cancer care for women at AMVI Hospitals",
    intro: [
        "Gynaecological cancers start in a woman's reproductive organs: the cervix, the lining of the womb (endometrium), the ovaries and the vulva. Breast cancer is included here too, because breast checks and early detection are part of routine women's health care.",
        "Found early, many of these cancers can be treated successfully. Cervical cancer, one of the most common cancers in Indian women, can often be prevented with HPV vaccination and regular screening, which picks up cell changes years before cancer develops. Others, like ovarian cancer, cause only vague symptoms at first, so it is important not to ignore symptoms that keep coming back.",
        "At AMVI Hospitals, the focus is on prevention, screening and early diagnosis, with treatment planned around the type and stage of the cancer and your overall health. Each page below explains the symptoms, risk factors, tests and treatment options for one type of cancer.",
    ],
    image: "/images/hero/cervical-cancer-hero.png",
    imageAlt: "Gynaecological cancer consultation at AMVI Hospitals, Hyderabad",
    conditionsHeading: "Types of cancer we diagnose and treat",
    conditions: [
        {
            name: "Cervical cancer",
            href: "/gynaecology/cancers/cervical",
            description: "Cancer of the cervix, the lower part of the womb. Often preventable with HPV vaccination and screening; early signs include bleeding between periods or after sex.",
        },
        {
            name: "Endometrial (womb) cancer",
            href: "/gynaecology/cancers/endometrial",
            description: "Starts in the lining of the womb. The most common early sign is unusual bleeding, especially any bleeding after menopause.",
        },
        {
            name: "Ovarian cancer",
            href: "/gynaecology/cancers/ovarian",
            description: "The second most common gynaecological cancer. Early symptoms such as bloating, pelvic pain and feeling full quickly are easy to mistake for other problems.",
        },
        {
            name: "Vulvar cancer",
            href: "/gynaecology/cancers/vulvar",
            description: "Affects the outer genital skin. Signs include persistent itching, pain, a lump or sore, skin thickening or colour change on the vulva.",
        },
        {
            name: "Breast cancer",
            href: "/gynaecology/cancers/breast",
            description: "One of the most common cancers in women. Watch for a lump in the breast or armpit, nipple discharge or retraction, or dimpling of the skin.",
        },
    ],
    symptomsHeading: "Symptoms that should be checked",
    symptomsLead: "Most of these are caused by conditions that are not cancer. But they should be checked, especially if they persist or keep coming back.",
    symptoms: [
        "Bleeding after menopause, between periods or after sex",
        "Unusual vaginal discharge",
        "Pelvic or lower abdominal pain or pressure that doesn't go away",
        "Persistent bloating, feeling full quickly, or passing urine more often",
        "Persistent itching, a lump, sore or skin change on the vulva",
        "A lump in the breast or armpit, nipple discharge or dimpling of the breast skin",
        "Pain during intercourse",
        "Unexplained weight loss or tiredness",
    ],
    approachHeading: "Prevention, diagnosis and treatment",
    approach: [
        {
            title: "Prevention and screening",
            description: "HPV vaccination and regular cervical screening to catch changes before they become cancer, along with breast checks and a review of your family history.",
        },
        {
            title: "Diagnosis",
            description: "Examination and tests such as ultrasound, colposcopy and biopsy confirm the diagnosis. Scans like CT or MRI show whether the cancer has spread.",
        },
        {
            title: "Treatment plan",
            description: "Treatment depends on the type, stage and grade of the cancer and your general health. It may include surgery, and where needed chemotherapy, radiation, hormone or targeted therapy.",
        },
        {
            title: "Follow-up",
            description: "Regular check-ups after treatment to monitor recovery and catch any recurrence early.",
        },
    ],
    faqHeading: "Questions about gynaecological cancers",
    faqs: [
        {
            question: "What are gynaecological cancers?",
            answer: "Gynaecological cancers are cancers that start in the female reproductive organs: cervical, endometrial (womb), ovarian, vulvar and vaginal cancers. Breast cancer is not a gynaecological cancer in the strict sense, but breast checks are part of routine women's health care.",
        },
        {
            question: "Can cervical cancer be prevented?",
            answer: "In many cases, yes. Most cervical cancers are linked to the human papillomavirus (HPV). HPV vaccination lowers the risk, and regular screening finds abnormal cells on the cervix early, when they can be treated before cancer develops.",
        },
        {
            question: "What are the early signs of ovarian cancer?",
            answer: "Early ovarian cancer often causes few or no symptoms. When symptoms appear, they include bloating, pressure or pain in the abdomen or pelvis, feeling full quickly after eating, and passing urine more often. They are easy to mistake for common illnesses, so see a doctor if they keep coming back.",
        },
        {
            question: "Is bleeding after menopause serious?",
            answer: "Any bleeding after menopause should be checked by a doctor. It is the most common early sign of endometrial cancer, although it is often caused by non-cancerous conditions such as polyps or a thickened womb lining (endometrial hyperplasia).",
        },
        {
            question: "Who is at higher risk of gynaecological cancer?",
            answer: "Risk depends on the type of cancer. Common risk factors include a family history of breast, ovarian, womb or bowel cancer (including Lynch syndrome), increasing age, obesity, diabetes and PCOS for womb cancer, and smoking, HPV and a weakened immune system for cervical cancer.",
        },
        {
            question: "How do I book a consultation at AMVI Hospitals?",
            answer: "Use the appointment form on our Contact page, or call Puppalaguda on +91 91000 09669 or Attapur on +91 80088 42200. You can also message us on WhatsApp.",
        },
    ],
}
