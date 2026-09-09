import PageHero from '@/shared/page-hero'

export default function InfertilityHero() {
    return (
        <PageHero
            eyebrow="Infertility"
            title="Infertility Evaluation & Treatment in Hyderabad"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Infertility" },
            ]}
            image="/images/hero/infertility-hero.png"
            imageAlt="Fertility consultation at AMVI Hospital"
        />
    )
}