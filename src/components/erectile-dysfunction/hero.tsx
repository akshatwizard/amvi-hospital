import PageHero from '@/shared/page-hero'

export default function ErectileDysfunctionHero() {
    return (
        <PageHero
            eyebrow="Infertility"
            title="Erectile Dysfunction Treatment in Hyderabad"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Infertility" },
                { label: "Erectile Dysfunction" },
            ]}
            image="/images/hero/erectile-dysfunction-hero.png"
            imageAlt="Men's health consultation at AMVI Hospital"
        />
    )
}