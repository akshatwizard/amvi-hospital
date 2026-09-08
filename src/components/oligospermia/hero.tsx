import PageHero from '@/shared/page-hero'

export default function OligospermiaHero() {
    return (
        <PageHero
            eyebrow="Infertility"
            title="Low Sperm Count (Oligospermia) Treatment"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Infertility" },
                { label: "Oligospermia" },
            ]}
            image="/images/hero/oligospermia-hero.png"
            imageAlt="Male fertility consultation at AMVI Hospital"
        />
    )
}