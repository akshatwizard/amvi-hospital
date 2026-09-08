import PageHero from '@/shared/page-hero'

export default function FollicularMonitoringHero() {
    return (
        <PageHero
            eyebrow="Infertility"
            title="Follicular Monitoring & Ovulation Tracking"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Infertility" },
                { label: "Follicular Monitoring" },
            ]}
            image="/images/hero/follicular-monitoring-hero.png"
            imageAlt="Follicular monitoring ultrasound at AMVI Hospital"
        />
    )
}