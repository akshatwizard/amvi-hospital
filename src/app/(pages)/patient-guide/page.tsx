import type { Metadata } from "next"
import PageHero from "@/shared/page-hero"
import CareJourney from "@/components/home/care_journey"
import BeforeYouGo from "@/components/home/before_you_go"
import Faq from "@/components/home/faq"
import Locations from "@/components/home/locations"
import ContactBanner from "@/components/home/contact_banner"

export const metadata: Metadata = {
    title: "Patient Guide | Preparing for Your Visit | AMVI Hospitals",
    description:
        "What to bring, how to prepare and what to expect at your visit to AMVI Hospitals, Puppalaguda and Attapur — plus answers to common patient questions.",
    alternates: { canonical: "/patient-guide" },
}

export default function PatientGuidePage() {
    return (
        <main>
            <PageHero
                eyebrow="Patient guide"
                title="Preparing for your visit"
                description="Everything you need to know before your first consultation — what to bring, how to prepare and what your care will look like."
                breadcrumbs={[{ label: "Home", href: "/" }, { label: "Patient guide" }]}
                cta={{ label: "Book a consultation", href: "/contact" }}
            />
            <BeforeYouGo />
            <CareJourney />
            <Faq />
            <Locations />
            <ContactBanner />
        </main>
    )
}
