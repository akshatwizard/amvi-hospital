import type { Metadata } from "next"
import TripleMarkerHero from "@/components/triple-marker/hero"
import TripleMarkerContent from "@/components/triple-marker/content"

export const metadata: Metadata = {
    title: "Triple Marker Test in Hyderabad | Prenatal Screening | AMVI Hospitals",
    description:
        "Triple Marker Test at AMVI Hospitals, Hyderabad — second-trimester prenatal screening for Down syndrome, Trisomy 18 and certain birth defects under expert obstetric care.",
    alternates: {
        canonical: "/maternity/screening/triple-marker",
    },
}

export default function TripleMarkerPage() {
    return (
        <main>
            <TripleMarkerHero />
            <TripleMarkerContent />
        </main>
    )
}