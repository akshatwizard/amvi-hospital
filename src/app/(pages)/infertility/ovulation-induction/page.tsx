import type { Metadata } from "next";
import OvulationInductionHero from "@/components/ovulation-induction/hero";
import OvulationInductionContent from "@/components/ovulation-induction/content";

export const metadata: Metadata = {
    title: "Ovulation Induction in Hyderabad | AMVI Hospitals",
    description:
        "Personalised ovulation induction treatment at AMVI Hospitals, Hyderabad — medication-based fertility care for irregular cycles, often paired with IUI or IVF.",
    alternates: { canonical: "/infertility/ovulation-induction" },
};

export default function OvulationInductionPage() {
    return (
        <main>
            <OvulationInductionHero />
            <OvulationInductionContent />
        </main>
    );
}