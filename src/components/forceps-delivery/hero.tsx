import PageHero from '@/shared/page-hero'

export default function ForcepsDeliveryHero() {
    return (
        <PageHero
            eyebrow="Maternity"
            title="Forceps Delivery — Assisted Vaginal Birth"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Maternity" },
                { label: "Forceps Delivery" },
            ]}
            image="/images/hero/forceps-hero.png"
            imageAlt="Forceps delivery care at AMVI Hospital"
        />
    )
}