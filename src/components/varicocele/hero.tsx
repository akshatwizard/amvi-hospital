import PageHero from '@/shared/page-hero'

export default function VaricoceleHero() {
    return (
        <PageHero
            eyebrow="Infertility"
            title="Varicocele Treatment in Hyderabad"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Infertility" },
                { label: "Varicocele" },
            ]}
            image="/images/hero/varicocele-hero.png"
            imageAlt="Varicocele consultation at AMVI Hospital"
        />
    )
}