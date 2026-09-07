import PageHero from '@/shared/page-hero'

export default function LowAmhHero() {
    return (
        <PageHero
            eyebrow="Low AMH"
            title="Low AMH Treatment in Hyderabad"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Gynaecology", href: "/gynaecology" },
                { label: "Low AMH" },
            ]}
            image="/images/hero/low-amh-hero.png"
            imageAlt="Low AMH and fertility consultation at AMVI Hospital"
        />
    )
}