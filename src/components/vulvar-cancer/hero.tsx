import PageHero from '@/shared/page-hero'

export default function VulvarCancerHero() {
    return (
        <PageHero
            eyebrow="Gynecologic Cancers"
            title="Vulvar Cancer Treatment — Gynecologic Oncology Experts"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Gynecologic Cancers" },
                { label: "Vulvar Cancer" },
            ]}
            image="/images/hero/vulvar-cancer-hero.png"
            imageAlt="Vulvar cancer consultation at AMVI Hospital"
        />
    )
}