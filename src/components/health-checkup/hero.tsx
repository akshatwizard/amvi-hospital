import PageHero from '@/shared/page-hero'

export default function HealthCheckupHero() {
    return (
        <PageHero
            eyebrow="Health Checkup"
            title="Preventive Health Checkups for Women"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Gynaecology", href: "/gynaecology" },
                { label: "Health Checkup" },
            ]}
            image="/images/hero/health-checkup-hero.png"
            imageAlt="Preventive health checkup at AMVI Hospital"
        />
    )
}