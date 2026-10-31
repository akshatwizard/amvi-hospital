import PageHero from '@/shared/page-hero'

export default function AboutHero() {
    return (
        <PageHero
            eyebrow="About"
            title="About AMVI Hospital"
            description="A fertility and maternity hospital in Hyderabad — IVF and fertility care, pregnancy and delivery, and women's health, all under one roof. Open 24/7."
            breadcrumbs={[{ label: "Home", href: "/" }, { label: "About AMVI Hospital" }]}
            image="/images/hero/about-hero.png"
            imageAlt="AMVI Hospital doctors and nursing staff"
            cta={{ label: "Book a consultation", href: "/contact" }}
        />
    )
}