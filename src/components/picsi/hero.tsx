import PageHero from '@/shared/page-hero'

export default function PicsiHero() {
    return (
        <PageHero
            eyebrow="Infertility"
            title="Physiological Intracytoplasmic Sperm Injection (PICSI)"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Infertility" },
                { label: "PICSI" },
            ]}
            image="/images/hero/picsi-hero.png"
            imageAlt="PICSI sperm selection procedure at AMVI Hospital"
        />
    )
}