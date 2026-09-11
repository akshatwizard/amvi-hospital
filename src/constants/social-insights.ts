export type SocialInsightType =
    | "Instagram Reel"
    | "Instagram Post"
    | "Facebook Post"

export interface SocialInsight {
    id: string
    type: SocialInsightType
    category: string
    title: string
    description: string
    date: string
    image: string
    imageAlt: string
    href: string
}

export const socialInsights: SocialInsight[] = [
    {
        id: "si-001",
        type: "Instagram Reel",
        category: "Women's Health",
        title: "Can PCOS affect your weight?",
        description:
            "PCOS is more than an irregular period. Hormonal changes and insulin resistance can also affect metabolism, appetite and weight. Understanding the underlying cause is an important part of managing PCOS.",
        date: "September 2026",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Doctor discussing women's health with a patient",
        href: "#",
    },
    {
        id: "si-002",
        type: "Instagram Post",
        category: "Maternity",
        title: "When should you have your pregnancy screening tests?",
        description:
            "Pregnancy screening tests are performed at different stages of pregnancy. Knowing when each test is recommended can help you stay informed and prepared throughout your pregnancy journey.",
        date: "September 2026",
        image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Pregnant woman receiving prenatal care",
        href: "#",
    },
    {
        id: "si-003",
        type: "Facebook Post",
        category: "Fertility",
        title: "When is it time to talk to a fertility specialist?",
        description:
            "If you have been trying to conceive without success, a fertility consultation can help identify possible causes and understand the options available for your individual situation.",
        date: "August 2026",
        image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Couple talking with a healthcare professional",
        href: "#",
    },
    {
        id: "si-004",
        type: "Instagram Reel",
        category: "Maternity",
        title: "What happens during your first pregnancy visit?",
        description:
            "Your first pregnancy appointment is an important step in establishing healthy prenatal care and understanding the tests and check-ups recommended during pregnancy.",
        date: "August 2026",
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Doctor consulting with a pregnant patient",
        href: "#",
    },
]