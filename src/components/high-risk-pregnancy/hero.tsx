import PageHero from '@/shared/page-hero'

export default function HighRiskPregnancyHero() {
    return (
        <PageHero
            eyebrow="Maternity"
            title="High-Risk Pregnancy — Comprehensive Care for Complex Cases"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Maternity" },
                { label: "High-Risk Pregnancy" },
            ]}
            image="/images/hero/high-risk-pregnancy-hero.png"
            imageAlt="High-risk pregnancy care at AMVI Hospital"
        />
    )
}