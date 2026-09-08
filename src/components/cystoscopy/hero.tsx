import PageHero from '@/shared/page-hero'

export default function CystoscopyHero() {
    return (
        <PageHero
            eyebrow="Urogynecology"
            title="Cystoscopy Procedure — Diagnostic Urologic Examination"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Urogynecology" },
                { label: "Cystoscopy" },
            ]}
            image="/images/hero/cystoscopy-hero.png"
            imageAlt="Cystoscopy consultation at AMVI Hospital"
        />
    )
}