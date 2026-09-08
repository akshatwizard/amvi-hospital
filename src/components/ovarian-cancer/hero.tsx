import PageHero from '@/shared/page-hero'

export default function OvarianCancerHero() {
    return (
        <PageHero
            eyebrow="Gynecologic Cancers"
            title="Ovarian Cancer Treatment — Gynecologic Oncology Experts"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Gynecologic Cancers" },
                { label: "Ovarian Cancer" },
            ]}
            image="/images/hero/ovarian-cancer-hero.png"
            imageAlt="Ovarian cancer consultation at AMVI Hospital"
        />
    )
}