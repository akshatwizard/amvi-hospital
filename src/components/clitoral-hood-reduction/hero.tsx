import PageHero from '@/shared/page-hero'

export default function ClitoralHoodReductionHero() {
    return (
        <PageHero
            eyebrow="Cosmetic Gynecology"
            title="Clitoral Hood Reduction in Hyderabad"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Cosmetic Gynecology" },
                { label: "Clitoral Hood Reduction" },
            ]}
            image="/images/hero/clitoral-hood-reduction-hero.png"
            imageAlt="Clitoral hood reduction consultation at AMVI Hospital"
        />
    )
}