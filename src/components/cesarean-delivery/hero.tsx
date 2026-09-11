import PageHero from '@/shared/page-hero'

export default function CesareanDeliveryHero() {
    return (
        <PageHero
            eyebrow="Maternity"
            title="Cesarean Delivery — C-Section Birth Procedure"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Maternity" },
                { label: "Cesarean Delivery" },
            ]}
            image="/images/hero/cesarean-hero.png"
            imageAlt="Cesarean delivery care at AMVI Hospital"
        />
    )
}