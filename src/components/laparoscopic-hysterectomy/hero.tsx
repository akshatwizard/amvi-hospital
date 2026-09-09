import PageHero from '@/shared/page-hero'

export default function LaparoscopicHysterectomyHero() {
    return (
        <PageHero
            eyebrow="Laparoscopic Surgery"
            title="Laparoscopic Hysterectomy in Hyderabad"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Laparoscopic Surgery" },
                { label: "Hysterectomy" },
            ]}
            image="/images/hero/laparoscopic-hysterectomy-hero.png"
            imageAlt="Laparoscopic hysterectomy surgery at AMVI Hospital"
        />
    )
}