import PageHero from '@/shared/page-hero'

export default function CosmeticGynecologyHero() {
    return (
        <PageHero
            eyebrow="Cosmetic Gynecology"
            title="Cosmetic Gynaecology in Hyderabad — Confidential, Specialist Care"
            description="Reconstructive and aesthetic procedures for intimate wellness, handled with complete privacy and clinical discretion."
            breadcrumbs={[{ label: "Home", href: "/" }, { label: "Cosmetic Gynecology" }]}
            cta={{ label: "Book a confidential consultation", href: "/contact" }}
        // TODO: add image="/images/hero/cosmetic-gynecology-hero.png" once a hero photo is ready — falls back to the gradient hero for now
        />
    )
}
