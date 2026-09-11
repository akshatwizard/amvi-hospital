import PageHero from '@/shared/page-hero'

export default function VacuumDeliveryHero() {
    return (
        <PageHero
            eyebrow="Maternity"
            title="Vacuum Delivery — Assisted Vaginal Birth"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Maternity" },
                { label: "Vacuum Delivery" },
            ]}
            image="/images/hero/vacuum-hero.png"
            imageAlt="Vacuum delivery care at AMVI Hospital"
        />
    )
}