import PageHero from '@/shared/page-hero'

export default function AdenomyosisHero() {
    return (
        <PageHero
            eyebrow="Adenomyosis"
            title="Adenomyosis Treatment in Hyderabad"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Gynaecology", href: "/gynaecology" },
                { label: "Adenomyosis" },
            ]}
            image="/images/hero/adenomyosis-hero.png"
            imageAlt="Adenomyosis consultation at AMVI Hospital"
        />
    )
}