import PageHero from '@/shared/page-hero'

export default function AboutHero() {
    return (
        <PageHero
            eyebrow="About"
            title="About AMVI Hospital"
            description="A daycare surgery centre in Hyderabad dedicated entirely to women's health — gynaecology, fertility, maternity and cosmetic gynaecology, all under one roof."
            breadcrumbs={[{ label: "Home", href: "/" }, { label: "About AMVI Hospital" }]}
            image="/images/hero/about-hero.png"
            imageAlt="AMVI Hospital doctors and nursing staff"
            cta={{ label: "Book a consultation", href: "/contact" }}
        />
    )
}