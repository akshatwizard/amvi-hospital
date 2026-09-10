import PageHero from '@/shared/page-hero'

export default function HymenoplastyHero() {
    return (
        <PageHero
            eyebrow="Cosmetic Gynecology"
            title="Hymenoplasty in Hyderabad"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Cosmetic Gynecology" },
                { label: "Hymenoplasty" },
            ]}
            image="/images/hero/hymenoplasty-hero.png"
            imageAlt="Hymenoplasty consultation at AMVI Hospital"
        />
    )
}