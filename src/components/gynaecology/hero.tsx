import PageHero from '@/shared/page-hero'

export default function GynaecologyHero() {
    return (
        <PageHero
            eyebrow="Gynaecology"
            title="Gynaecology Services — Comprehensive Women's Health Care"
            breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gynaecology Services" }]}
            image="/images/hero/gynaecology-hero.png"
            imageAlt="Gynaecology consultation at AMVI Hospital"
        />
    )
}