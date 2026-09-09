import PageHero from '@/shared/page-hero'

export default function ImsiHero() {
    return (
        <PageHero
            eyebrow="Infertility"
            title="IMSI Fertility Treatment — Precise Sperm Selection"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Infertility" },
                { label: "IMSI" },
            ]}
            image="/images/hero/imsi-hero.png"
            imageAlt="IMSI consultation at AMVI Hospital"
        />
    )
}