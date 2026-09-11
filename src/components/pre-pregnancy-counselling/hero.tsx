import PageHero from '@/shared/page-hero'

export default function PrePregnancyCounsellingHero() {
    return (
        <PageHero
            eyebrow="Maternity"
            title="Pre-Pregnancy Counselling — Plan for a Healthy Pregnancy"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Maternity" },
                { label: "Pre-Pregnancy Counselling" },
            ]}
            image="/images/hero/pre-pregnancy-counselling-hero.png"
            imageAlt="Pre-pregnancy counselling consultation at AMVI Hospital"
        />
    )
}