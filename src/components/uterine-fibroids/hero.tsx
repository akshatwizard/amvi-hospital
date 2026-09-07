import PageHero from '@/shared/page-hero'

export default function UterineFibroidsHero() {
    return (
        <PageHero
            eyebrow="Uterine Fibroids"
            title="Uterine Fibroids Treatment in Hyderabad"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Gynaecology", href: "/gynaecology" },
                { label: "Uterine Fibroids" },
            ]}
            image="/images/hero/uterine-fibroids-hero.png"
            imageAlt="Uterine fibroids consultation at AMVI Hospital"
        />
    )
}