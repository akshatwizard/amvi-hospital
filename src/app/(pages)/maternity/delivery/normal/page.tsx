import type { Metadata } from "next";
import NormalDeliveryHero from "@/components/normal-delivery/hero";
import NormalDeliveryContent from "@/components/normal-delivery/content";

export const metadata: Metadata = {
    title: "Normal Delivery Hospital in Hyderabad | AMVI Hospitals",
    description:
        "AMVI Hospitals offers expert normal delivery care in Hyderabad with an experienced OB-GYN team and 24/7 support, at both Puppalaguda and Attapur.",
    alternates: { canonical: "/maternity/delivery/normal-delivery" },
};

export default function NormalDeliveryPage() {
    return (
        <main>
            <NormalDeliveryHero />
            <NormalDeliveryContent />
        </main>
    );
}