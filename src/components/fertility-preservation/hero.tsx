import PageHero from '@/shared/page-hero'

export default function FertilityPreservationHero() {
    return (
        <PageHero
            eyebrow="Fertility Preservation"
            title="Fertility Preservation in Hyderabad — Egg, Embryo & Sperm Freezing"
            description="Protect your future fertility on your own timeline — whether that's ahead of medical treatment, or simply your own choice."
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Infertility", href: "/infertility" },
                { label: "Fertility Preservation" },
            ]}
            cta={{ label: "Book a consultation", href: "/contact" }}
        // TODO: add image="/images/hero/fertility-preservation-hero.png" once a hero photo is ready — falls back to the gradient hero for now
        />
    )
}
