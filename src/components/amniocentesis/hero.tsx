import PageHero from '@/shared/page-hero'

export default function AmniocentesisHero() {
    return (
        <PageHero
            eyebrow="Maternity"
            title="Amniocentesis Test — Prenatal Genetic Testing"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Maternity" },
                { label: "Chromosome Test" },
                { label: "Amniocentesis" },
            ]}
            image="/images/hero/amniocentesis-hero.png"
            imageAlt="Amniocentesis test at AMVI Hospital"
        />
    )
}