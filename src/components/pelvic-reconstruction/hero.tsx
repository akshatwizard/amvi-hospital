import PageHero from '@/shared/page-hero'

export default function PelvicReconstructionHero() {
    return (
        <PageHero
            eyebrow="Urogynecology"
            title="Pelvic Reconstruction Surgery — Restoring Pelvic Health"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Urogynecology" },
                { label: "Pelvic Reconstruction" },
            ]}
            image="/images/hero/pelvic-reconstruction-hero.png"
            imageAlt="Pelvic reconstruction consultation at AMVI Hospital"
        />
    )
}