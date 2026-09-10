import PageHero from '@/shared/page-hero'

export default function TummyTuckHero() {
    return (
        <PageHero
            eyebrow="Cosmetic Gynecology"
            title="Tummy Tuck Surgery — Abdominoplasty in Hyderabad"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Cosmetic Gynecology" },
                { label: "Tummy Tuck" },
            ]}
            image="/images/hero/tummy-tuck-hero.png"
            imageAlt="Tummy tuck consultation at AMVI Hospital"
        />
    )
}