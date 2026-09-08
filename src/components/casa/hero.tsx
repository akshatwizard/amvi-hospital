import PageHero from '@/shared/page-hero'

export default function CasaHero() {
    return (
        <PageHero
            eyebrow="Infertility"
            title="Computer Assisted Semen Analysis (CASA)"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Infertility" },
                { label: "CASA" },
            ]}
            image="/images/hero/casa-hero.png"
            imageAlt="Computer assisted semen analysis lab at AMVI Hospital"
        />
    )
}