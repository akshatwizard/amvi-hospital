import PageHero from '@/shared/page-hero'

export default function EndometriosisHero() {
    return (
        <PageHero
            eyebrow="Endometriosis"
            title="Endometriosis Treatment in Hyderabad"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Gynaecology", href: "/gynaecology" },
                { label: "Endometriosis" },
            ]}
            image="/images/hero/endometriosis-hero.png"
            imageAlt="Endometriosis consultation at AMVI Hospital"
        />
    )
}