import PageHero from '@/shared/page-hero'

export default function PcodHero() {
    return (
        <PageHero
            eyebrow="PCOD"
            title="Polycystic Ovarian Disease (PCOD) Treatment in Hyderabad"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Gynaecology", href: "/gynaecology" },
                { label: "PCOD" },
            ]}
            image="/images/hero/pcod-hero.png"
            imageAlt="PCOD consultation at AMVI Hospital"
        />
    )
}