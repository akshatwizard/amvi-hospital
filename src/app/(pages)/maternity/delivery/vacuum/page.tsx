import type { Metadata } from "next";
import VacuumDeliveryHero from "@/components/vacuum-delivery/hero";
import VacuumDeliveryContent from "@/components/vacuum-delivery/content";

export const metadata: Metadata = {
    title: "Best Hospital for Vacuum Delivery in Hyderabad | AMVI Hospitals",
    description:
        "AMVI Hospitals provides expert vacuum-assisted delivery care in Hyderabad — a safe alternative to forceps or caesarean delivery when labour has stalled.",
    alternates: { canonical: "/maternity/delivery/vacuum-delivery" },
};

export default function VacuumDeliveryPage() {
    return (
        <main>
            <VacuumDeliveryHero />
            <VacuumDeliveryContent />
        </main>
    );
}