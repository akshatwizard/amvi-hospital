import type { Metadata } from "next";
import ForcepsDeliveryHero from "@/components/forceps-delivery/hero";
import ForcepsDeliveryContent from "@/components/forceps-delivery/content";

export const metadata: Metadata = {
    title: "Forceps Delivery in Hyderabad | AMVI Hospitals",
    description:
        "Understand forceps-assisted vaginal delivery — when it's recommended, how it's performed, and what to expect during recovery, from AMVI Hospitals, Hyderabad.",
    alternates: { canonical: "/maternity/delivery/forceps" },
};

export default function ForcepsDeliveryPage() {
    return (
        <main>
            <ForcepsDeliveryHero />
            <ForcepsDeliveryContent />
        </main>
    );
}