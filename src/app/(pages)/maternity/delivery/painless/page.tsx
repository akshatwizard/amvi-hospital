import type { Metadata } from "next";
import PainlessDeliveryHero from "@/components/painless-delivery/hero";
import PainlessDeliveryContent from "@/components/painless-delivery/content";

export const metadata: Metadata = {
    title: "Painless Delivery in Hyderabad | Epidural Delivery | AMVI Hospitals",
    description:
        "Safe, comfortable painless delivery with epidural analgesia at AMVI Hospitals, Hyderabad, from expert obstetricians with over 20 years of experience.",
    alternates: { canonical: "/maternity/delivery/painless-delivery" },
};

export default function PainlessDeliveryPage() {
    return (
        <main>
            <PainlessDeliveryHero />
            <PainlessDeliveryContent />
        </main>
    );
}