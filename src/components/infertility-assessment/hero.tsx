import PageHero from '@/shared/page-hero'

export default function InfertilityAssessmentHero() {
    return (
        <PageHero
            eyebrow="Infertility"
            title="Infertility Assessment — Comprehensive Fertility Evaluation"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Infertility" },
                { label: "Infertility Assessment" },
            ]}
            image="/images/hero/assessment-hero.png"
            imageAlt="Infertility assessment consultation at AMVI Hospital"
        />
    )
}