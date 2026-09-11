import PageHero from '@/shared/page-hero'

export default function NormalDeliveryHero() {
    return (
        <PageHero
            eyebrow="Maternity"
            title="Normal Delivery — Natural Vaginal Childbirth"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Maternity" },
                { label: "Normal Delivery" },
            ]}
            image="/images/hero/normal-hero.png"
            imageAlt="Normal delivery care at AMVI Hospital"
        />
    )
}