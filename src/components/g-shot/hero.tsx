import PageHero from '@/shared/page-hero'

export default function GShotHero() {
    return (
        <PageHero
            eyebrow="Cosmetic Gynecology"
            title="G-Shot® — Non-Surgical Vaginal Rejuvenation"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Cosmetic Gynecology" },
                { label: "G-Shot" },
            ]}
            image="/images/hero/g-shot-hero.png"
            imageAlt="G-Shot consultation at AMVI Hospital"
        />
    )
}