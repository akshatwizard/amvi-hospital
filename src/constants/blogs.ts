export interface Blog {
    slug: string
    title: string
    excerpt: string
    category: string
    date: string
    readTime: string
    image: string
}

export const blogs: Blog[] = [
    {
        slug: "understanding-pcos",
        title: "Understanding PCOS: Symptoms, Causes and Treatment",
        excerpt:
            "Learn about PCOS, its common symptoms, causes, diagnosis and the treatment options available for managing the condition.",
        category: "Women's Health",
        date: "September 10, 2026",
        readTime: "6 min read",
        image: "https://picsum.photos/seed/amvi-blog-1/800/600",
    },
    {
        slug: "pregnancy-care-first-trimester",
        title: "Essential Pregnancy Care During the First Trimester",
        excerpt:
            "A guide to important check-ups, screenings, nutrition and lifestyle choices during the first trimester of pregnancy.",
        category: "Maternity",
        date: "September 5, 2026",
        readTime: "5 min read",
        image: "https://picsum.photos/seed/amvi-blog-2/800/600",
    },
    {
        slug: "nipt-prenatal-screening",
        title: "NIPT: Understanding Non-Invasive Prenatal Testing",
        excerpt:
            "Understand how NIPT works, when it is performed and what this prenatal screening test can tell you about your pregnancy.",
        category: "Maternity",
        date: "August 28, 2026",
        readTime: "7 min read",
        image: "https://picsum.photos/seed/amvi-blog-3/800/600",
    },
]