import type { Metadata } from "next";
import TummyTuckHero from "@/components/tummy-tuck/hero";
import TummyTuckContent from "@/components/tummy-tuck/content";

export const metadata: Metadata = {
    title: "Tummy Tuck Surgery in Hyderabad | AMVI Hospitals",
    description:
        "Achieve a toned abdomen with tummy tuck surgery in Hyderabad at AMVI Hospitals, offering safe cosmetic procedures by expert surgeons.",
    alternates: { canonical: "/cosmetic-gynecology/tummy-tuck" },
};

export default function TummyTuckPage() {
    return (
        <main>
            <TummyTuckHero />
            <TummyTuckContent />
        </main>
    );
}