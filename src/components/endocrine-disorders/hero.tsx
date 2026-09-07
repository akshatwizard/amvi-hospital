import PageHero from '@/shared/page-hero'

export default function EndocrineDisordersHero() {
    return (
        <PageHero
            eyebrow="Endocrine Disorders"
            title="Gynaecological Endocrine Disorders Treatment in Hyderabad"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Gynaecology", href: "/gynaecology" },
                { label: "Endocrine Disorders" },
            ]}
            image="/images/hero/endocrine-disorders-hero.png"
            imageAlt="Hormonal imbalance consultation at AMVI Hospital"
        />
    )
}