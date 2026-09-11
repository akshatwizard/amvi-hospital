import type { Metadata } from "next";
import HighRiskPregnancyHero from "@/components/high-risk-pregnancy/hero";
import HighRiskPregnancyContent from "@/components/high-risk-pregnancy/content";

export const metadata: Metadata = {
    title: "High Risk Pregnancy Hospital in Hyderabad | AMVI Hospitals",
    description:
        "AMVI Hospitals is a trusted high-risk pregnancy hospital in Hyderabad, offering expert care, advanced monitoring, and safe delivery for mother and baby.",
    alternates: { canonical: "/maternity/high-risk-pregnancy" },
};

export default function HighRiskPregnancyPage() {
    return (
        <main>
            <HighRiskPregnancyHero />
            <HighRiskPregnancyContent />
        </main>
    );
}