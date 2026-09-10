import PageHero from '@/shared/page-hero'

export default function OperativeHysteroscopyHero() {
    return (
        <PageHero
            eyebrow="Laparoscopic Surgery"
            title="Operative Hysteroscopy in Hyderabad"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Laparoscopic Surgery" },
                { label: "Operative Hysteroscopy" },
            ]}
            image="/images/hero/operative-hysteroscopy-hero.png"
            imageAlt="Operative hysteroscopy procedure at AMVI Hospital"
        />
    )
}