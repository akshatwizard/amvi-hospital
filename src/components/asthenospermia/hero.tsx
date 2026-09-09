import PageHero from '@/shared/page-hero'

export default function AsthenospermiaHero() {
    return (
        <PageHero
            eyebrow="Infertility"
            title="Asthenospermia (Low Sperm Motility) Treatment"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Infertility" },
                { label: "Asthenospermia" },
            ]}
            image="/images/hero/asthenospermia-hero.png"
            imageAlt="Sperm motility consultation at AMVI Hospital"
        />
    )
}