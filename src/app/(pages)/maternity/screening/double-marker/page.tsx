import type { Metadata } from "next"
import DoubleMarkerHero from "@/components/double-marker/hero"
import DoubleMarkerContent from "@/components/double-marker/content"

export const metadata: Metadata = {
    title: "Double Marker Test in Hyderabad | Early Pregnancy Screening | AMVI Hospitals",
    description:
        "Double Marker Test at AMVI Hospitals, Hyderabad — first-trimester prenatal screening for chromosomal abnormalities including Down syndrome and Edwards syndrome.",
    alternates: {
        canonical: "/maternity/screening/double-marker",
    },
}

export default function DoubleMarkerPage() {
    return (
        <main>
            <DoubleMarkerHero />
            <DoubleMarkerContent />
        </main>
    )
}