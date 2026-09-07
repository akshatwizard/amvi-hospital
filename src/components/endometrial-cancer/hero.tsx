import PageHero from '@/shared/page-hero'

export default function EndometrialCancerHero() {
    return (
        <PageHero
            eyebrow="Gynecologic Cancers"
            title="Endometrial Cancer Treatment — Expert Gynecologic Oncologists"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Gynecologic Cancers" },
                { label: "Endometrial Cancer" },
            ]}
            image="/images/hero/endometrial-cancer-hero.png"
            imageAlt="Endometrial cancer consultation at AMVI Hospital"
        />
    )
}