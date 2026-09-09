import PageHero from '@/shared/page-hero'

export default function IuiHero() {
    return (
        <PageHero
            eyebrow="Infertility"
            title="IUI Treatment in Hyderabad — Intrauterine Insemination"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Infertility" },
                { label: "IUI" },
            ]}
            image="/images/hero/iui-hero.png"
            imageAlt="IUI consultation at AMVI Hospital"
        />
    )
}