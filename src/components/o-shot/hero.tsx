import PageHero from '@/shared/page-hero'

export default function OShotHero() {
    return (
        <PageHero
            eyebrow="Cosmetic Gynecology"
            title="O-Shot® — Orgasm Enhancement & Sexual Wellness"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Cosmetic Gynecology" },
                { label: "O-Shot" },
            ]}
            image="/images/hero/o-shot-hero.png"
            imageAlt="O-Shot consultation at AMVI Hospital"
        />
    )
}