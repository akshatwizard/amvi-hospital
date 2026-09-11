import PageHero from '@/shared/page-hero'

export default function ObGynUltrasoundHero() {
    return (
        <PageHero
            eyebrow="Maternity"
            title="Obstetrics & Gynecologic (OB-GYN) Ultrasound — Fetal Imaging"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Maternity" },
                { label: "OB/GYN Ultrasound" },
            ]}
            image="/images/hero/ob-gyn-ultrasound-hero.png"
            imageAlt="OB-GYN ultrasound at AMVI Hospital"
        />
    )
}