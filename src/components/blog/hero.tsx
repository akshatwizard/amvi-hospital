import PageHero from "@/shared/page-hero"

export default function BlogHero() {
    return (
        <PageHero
            eyebrow="Blogs"
            title="Health & Wellness Insights"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Blog" },
            ]}
            image="/images/hero/blog-hero.png"
            imageAlt="AMVI Hospitals health and wellness blogs"
        />
    )
}