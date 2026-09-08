import PageHero from '@/shared/page-hero'

export default function ProlapseHero() {
    return (
        <PageHero
            eyebrow="Urogynecology"
            title="Prolapse Treatment — Pelvic Organ Prolapse Repair"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Urogynecology" },
                { label: "Prolapse" },
            ]}
            image="/images/hero/prolapse-hero.png"
            imageAlt="Prolapse consultation at AMVI Hospital"
        />
    )
}