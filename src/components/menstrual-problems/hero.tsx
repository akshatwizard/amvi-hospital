import PageHero from '@/shared/page-hero'

export default function MenstrualProblemsHero() {
    return (
        <PageHero
            eyebrow="Menstrual Problems"
            title="Menstrual Problems Treatment in Hyderabad"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Gynaecology", href: "/gynaecology" },
                { label: "Menstrual Problems" },
            ]}
            image="/images/hero/menstrual-problems-hero.png"
            imageAlt="Menstrual health consultation at AMVI Hospital"
        />
    )
}