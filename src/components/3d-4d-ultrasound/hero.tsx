import PageHero from '@/shared/page-hero'

export default function UltrasoundHero() {
    return (
        <PageHero
            eyebrow="Maternity"
            title="3D/4D Ultrasound — Real-Time Imaging of the Fetus"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Maternity" },
                { label: "3D/4D Ultrasound" },
            ]}
            image="/images/hero/3d-4d-ultrasound-hero.png"
            imageAlt="3D/4D ultrasound scan at AMVI Hospital"
        />
    )
}