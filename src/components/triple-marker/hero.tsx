import PageHero from "@/shared/page-hero"

export default function TripleMarkerHero() {
    return (
        <PageHero
            eyebrow="Maternity"
            title="Triple Marker Test — Prenatal Screening"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Maternity" },
                { label: "Chromosome Test" },
                { label: "Triple Marker Test" },
            ]}
            image="/images/hero/triple-marker-hero.png"
            imageAlt="Triple Marker Test at AMVI Hospital"
        />
    )
}