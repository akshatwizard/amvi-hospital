import type { Metadata } from "next";
import CesareanDeliveryHero from "@/components/cesarean-delivery/hero";
import CesareanDeliveryContent from "@/components/cesarean-delivery/content";

export const metadata: Metadata = {
    title: "Best Hospital for Cesarean Delivery in Hyderabad | AMVI Hospitals",
    description:
        "AMVI Hospitals offers expert cesarean delivery (C-section) care in Hyderabad, with advanced obstetric facilities at both Puppalaguda and Attapur.",
    alternates: { canonical: "/maternity/delivery/cesarean-delivery" },
};

export default function CesareanDeliveryPage() {
    return (
        <main>
            <CesareanDeliveryHero />
            <CesareanDeliveryContent />
        </main>
    );
}