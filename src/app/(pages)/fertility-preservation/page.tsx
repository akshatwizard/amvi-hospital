import type { Metadata } from "next";
import FertilityPreservationHero from "@/components/fertility-preservation/hero";
import FertilityPreservationContent from "@/components/fertility-preservation/content";

export const metadata: Metadata = {
    title: "Fertility Preservation in Hyderabad | Egg Freezing | AMVI Hospitals",
    description:
        "Egg freezing, embryo freezing and sperm cryopreservation in Hyderabad at AMVI Hospitals — protect your fertility on your own timeline. Puppalaguda & Attapur.",
    alternates: { canonical: "/fertility-preservation" },
};

export default function FertilityPreservationPage() {
    return (
        <main>
            <FertilityPreservationHero />
            <FertilityPreservationContent />
        </main>
    );
}
