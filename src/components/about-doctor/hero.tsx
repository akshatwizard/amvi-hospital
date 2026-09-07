import PageHero from '@/shared/page-hero'
import { leadDoctor } from '@/constants/doctors'

export default function AboutDoctorHero() {
    return (
        <PageHero
            eyebrow="About Our Doctors"
            title={leadDoctor.name}
            description={leadDoctor.tagline}
            breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Our Doctors" }]}
            image={"/images/hero/doctor-hero.png"}
            imageAlt={leadDoctor.name}
        />
    )
}