import PageHero from "@/shared/page-hero"

export default function QuadScreenHero() {
    return (
        <PageHero
            eyebrow="Maternity"
            title="Quad Screen Test — Prenatal Genetic Screening"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Maternity" },
                { label: "Chromosome Test" },
                { label: "Quad Screen" },
            ]}
            image="/images/hero/quad-screen-hero.png"
            imageAlt="Quad screen prenatal genetic screening at AMVI Hospital"
        />
    )
}