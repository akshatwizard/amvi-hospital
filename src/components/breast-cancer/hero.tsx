import PageHero from '@/shared/page-hero'

export default function BreastCancerHero() {
    return (
        <PageHero
            eyebrow="Gynecologic Cancers"
            title="Breast Cancer Treatment — Comprehensive Breast Care"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Gynecologic Cancers" },
                { label: "Breast Cancer" },
            ]}
            image="/images/hero/breast-cancer-hero.png"
            imageAlt="Breast cancer consultation at AMVI Hospital"
        />
    )
}