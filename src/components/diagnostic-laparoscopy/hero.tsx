import PageHero from '@/shared/page-hero'

export default function DiagnosticLaparoscopyHero() {
    return (
        <PageHero
            eyebrow="Laparoscopic Surgery"
            title="Diagnostic Laparoscopy in Hyderabad"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Laparoscopic Surgery" },
                { label: "Diagnostic Laparoscopy" },
            ]}
            image="/images/hero/diagnostic-laparoscopy-hero.png"
            imageAlt="Diagnostic laparoscopy procedure at AMVI Hospital"
        />
    )
}