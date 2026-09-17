export interface LocationArea {
    slug: string
    name: string
    nearestBranch: "Puppalaguda" | "Attapur"
    intro: string
    nearbyLocalities: string[]
    highlightServices: string[]
    testimonial: { quote: string; name: string }
    faqs: { question: string; answer: string }[]
}
