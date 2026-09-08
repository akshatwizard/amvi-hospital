import PageHero from '@/shared/page-hero'

export default function UrinaryIncontinenceHero() {
    return (
        <PageHero
            eyebrow="Urogynecology"
            title="Urinary Incontinence Treatment — Female Urology Care"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Urogynecology" },
                { label: "Urinary Incontinence" },
            ]}
            image="/images/hero/urinary-incontinence-hero.png"
            imageAlt="Urinary incontinence consultation at AMVI Hospital"
        />
    )
}