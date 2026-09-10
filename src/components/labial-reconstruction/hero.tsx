import PageHero from '@/shared/page-hero'

export default function LabialReconstructionHero() {
    return (
        <PageHero
            eyebrow="Cosmetic Gynecology"
            title="Labial Reconstruction in Hyderabad"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Cosmetic Gynecology" },
                { label: "Labial Reconstruction" },
            ]}
            image="/images/hero/labial-reconstruction-hero.png"
            imageAlt="Labial reconstruction consultation at AMVI Hospital"
        />
    )
}