import PageHero from '@/shared/page-hero'

export default function PainlessDeliveryHero() {
    return (
        <PageHero
            eyebrow="Maternity"
            title="Painless Delivery — Epidural Analgesia for Labour"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Maternity" },
                { label: "Painless Delivery" },
            ]}
            image="/images/hero/painless-hero.png"
            imageAlt="Painless delivery care at AMVI Hospital"
        />
    )
}