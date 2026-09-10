import PageHero from '@/shared/page-hero'

export default function VaginalReconstructionHero() {
    return (
        <PageHero
            eyebrow="Cosmetic Gynecology"
            title="Vaginal Reconstruction in Hyderabad"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Cosmetic Gynecology" },
                { label: "Vaginal Reconstruction" },
            ]}
            image="/images/hero/vaginal-reconstruction-hero.png"
            imageAlt="Vaginal reconstruction consultation at AMVI Hospital"
        />
    )
}