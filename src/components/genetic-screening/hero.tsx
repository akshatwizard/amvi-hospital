import PageHero from '@/shared/page-hero'

export default function GeneticScreeningHero() {
    return (
        <PageHero
            eyebrow="Infertility"
            title="Preimplantation Genetic Screening (PGS)"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Infertility" },
                { label: "Genetic Screening" },
            ]}
            image="/images/hero/genetic-screening-hero.png"
            imageAlt="Genetic screening consultation at AMVI Hospital"
        />
    )
}