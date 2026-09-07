import PageHero from '@/shared/page-hero'

export default function HpvVaccinationHero() {
    return (
        <PageHero
            eyebrow="HPV Vaccination"
            title="HPV Vaccination & Cervical Cancer Prevention"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Gynaecology", href: "/gynaecology" },
                { label: "HPV Vaccination" },
            ]}
            image="/images/hero/hpv-vaccination-hero.png"
            imageAlt="HPV vaccination consultation at AMVI Hospital"
        />
    )
}