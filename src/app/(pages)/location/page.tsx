import type { Metadata } from "next"
import PageHero from "@/shared/page-hero"
import Locations from "@/components/home/locations"
import AreasServed from "@/components/location-hub/areas-served"
import ContactBanner from "@/components/home/contact_banner"

export const metadata: Metadata = {
    title: "Our Locations | Puppalaguda & Attapur | AMVI Hospitals",
    description:
        "AMVI Hospitals has two branches in Hyderabad — Puppalaguda and Attapur. Find addresses, timings, phone numbers and directions, and the areas we serve.",
    alternates: { canonical: "/location" },
}

export default function LocationPage() {
    return (
        <main>
            <PageHero
                eyebrow="Locations"
                title="Our hospital locations in Hyderabad"
                description="Visit us at Puppalaguda or Attapur, Monday to Saturday, 10:00 AM to 6:00 PM."
                breadcrumbs={[{ label: "Home", href: "/" }, { label: "Locations" }]}
                cta={{ label: "Book a consultation", href: "/contact" }}
            />
            <Locations />
            <AreasServed />
            <ContactBanner />
        </main>
    )
}
