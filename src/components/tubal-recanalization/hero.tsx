import PageHero from '@/shared/page-hero'

export default function TubalRecanalizationHero() {
    return (
        <PageHero
            eyebrow="Laparoscopic Surgery"
            title="Tubal Recanalization in Hyderabad"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Laparoscopic Surgery" },
                { label: "Tubal Recanalization" },
            ]}
            image="/images/hero/tubal-recanalization-hero.png"
            imageAlt="Tubal recanalization consultation at AMVI Hospital"
        />
    )
}