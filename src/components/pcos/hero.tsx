import PageHero from '@/shared/page-hero'

export default function PcosHero() {
    return (
        <PageHero
            eyebrow="PCOS"
            title="PCOS Treatment in Hyderabad — Expert Care at AMVI Hospitals"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Gynaecology", href: "/gynaecology" },
                { label: "PCOS" },
            ]}
            image="/images/hero/pcos-hero.png"
            imageAlt="PCOS consultation at AMVI Hospital"
        />
    )
}