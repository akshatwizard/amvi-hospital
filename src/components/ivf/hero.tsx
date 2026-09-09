import PageHero from '@/shared/page-hero'

export default function IvfHero() {
    return (
        <PageHero
            eyebrow="Infertility"
            title="IVF Treatment in Hyderabad — Advanced Fertility Care"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Infertility" },
                { label: "IVF" },
            ]}
            image="/images/hero/ivf-hero.png"
            imageAlt="IVF consultation at AMVI Hospital"
        />
    )
}