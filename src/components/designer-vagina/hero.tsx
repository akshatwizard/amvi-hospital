import PageHero from '@/shared/page-hero'

export default function DesignerVaginaHero() {
    return (
        <PageHero
            eyebrow="Cosmetic Gynecology"
            title="Designer Vagina — Labiaplasty & Hymenoplasty in Hyderabad"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Cosmetic Gynecology" },
                { label: "Designer Vagina" },
            ]}
            image="/images/hero/designer-vagina-hero.png"
            imageAlt="Designer vagina consultation at AMVI Hospital"
        />
    )
}