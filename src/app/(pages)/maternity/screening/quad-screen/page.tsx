import type { Metadata } from "next"
import QuadScreenHero from "@/components/quad-screen/hero"
import QuadScreenContent from "@/components/quad-screen/content"

export const metadata: Metadata = {
    title: "Quadruple Marker Test in Hyderabad | Quad Screen | AMVI Hospitals",
    description:
        "Quad screen testing at AMVI Hospitals, Hyderabad — second-trimester prenatal screening for chromosomal conditions and certain birth defects under expert obstetric care.",
    alternates: {
        canonical: "/maternity/screening/quad-screen",
    },
}

export default function QuadScreenPage() {
    return (
        <main>
            <QuadScreenHero />
            <QuadScreenContent />
        </main>
    )
}