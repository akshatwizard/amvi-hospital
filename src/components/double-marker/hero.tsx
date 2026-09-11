import PageHero from "@/shared/page-hero"

export default function DoubleMarkerHero() {
    return (
        <PageHero
            eyebrow="Maternity"
            title="Double Marker Test — Early Pregnancy Screening"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Maternity" },
                { label: "Chromosome Test" },
                { label: "Double Marker Test" },
            ]}
            image="/images/hero/double-marker-hero.png"
            imageAlt="Double Marker Test at AMVI Hospital"
        />
    )
}