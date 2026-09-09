import PageHero from '@/shared/page-hero'

export default function IcsiHero() {
    return (
        <PageHero
            eyebrow="Infertility"
            title="ICSI Treatment in Hyderabad — Advanced Solution for Male Infertility"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Infertility" },
                { label: "ICSI" },
            ]}
            image="/images/hero/icsi-hero.png"
            imageAlt="ICSI consultation at AMVI Hospital"
        />
    )
}