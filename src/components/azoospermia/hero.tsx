import PageHero from '@/shared/page-hero'

export default function AzoospermiaHero() {
    return (
        <PageHero
            eyebrow="Infertility"
            title="Azoospermia (Zero Sperm Count) Treatment"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Infertility" },
                { label: "Azoospermia" },
            ]}
            image="/images/hero/azoospermia-hero.png"
            imageAlt="Male fertility consultation at AMVI Hospital"
        />
    )
}