import type { Metadata } from "next";
import InfertilityHero from "@/components/infertility/hero";
import InfertilityContent from "@/components/infertility/content";

export const metadata: Metadata = {
    title: "Infertility Evaluation & Treatment in Hyderabad | AMVI Hospitals",
    description:
        "Comprehensive infertility diagnostics and treatment at AMVI Hospitals, Hyderabad — assessment, male and female fertility care, and assisted reproductive techniques.",
    alternates: { canonical: "/infertility" },
};

export default function InfertilityPage() {
    return (
        <main>
            <InfertilityHero />
            <InfertilityContent />
        </main>
    );
}