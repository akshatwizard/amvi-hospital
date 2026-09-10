import PageHero from '@/shared/page-hero'

export default function VaginalTighteningHero() {
    return (
        <PageHero
            eyebrow="Cosmetic Gynecology"
            title="Vaginal Tightening Surgery in Hyderabad"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Cosmetic Gynecology" },
                { label: "Vaginal Tightening Surgery" },
            ]}
            image="/images/hero/vaginal-tightening-hero.png"
            imageAlt="Vaginal tightening consultation at AMVI Hospital"
        />
    )
}