import type { Metadata } from "next"

import BlogHero from "@/components/blog/hero"
import BlogList from "@/components/blog/blog-list"

export const metadata: Metadata = {
    title: "Health & Wellness Blog | AMVI Hospitals",
    description:
        "Explore expert health and wellness insights from AMVI Hospitals covering maternity, women's health, fertility, treatments, diagnostics and more.",
    alternates: {
        canonical: "/blog",
    },
}

export default function BlogPage() {
    return (
        <main>
            <BlogHero />
            <BlogList />
        </main>
    )
}