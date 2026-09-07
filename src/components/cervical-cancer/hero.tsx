import PageHero from '@/shared/page-hero'

export default function CervicalCancerHero() {
    return (
        <PageHero
            eyebrow="Gynecologic Cancers"
            title="Cervical Cancer Treatment — Expert Gynecologic Oncologists"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Gynecologic Cancers" },
                { label: "Cervical Cancer" },
            ]}
            image="/images/hero/cervical-cancer-hero.png"
            imageAlt="Cervical cancer consultation at AMVI Hospital"
        />
    )
}