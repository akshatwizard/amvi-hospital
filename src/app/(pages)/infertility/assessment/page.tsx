import type { Metadata } from "next";
import InfertilityAssessmentHero from "@/components/infertility-assessment/hero";
import InfertilityAssessmentContent from "@/components/infertility-assessment/content";

export const metadata: Metadata = {
    title: "Infertility Assessment in Hyderabad | AMVI Hospitals",
    description:
        "Comprehensive infertility assessment at AMVI Hospitals, Hyderabad — what to expect at your first visit, and the full range of tests for both men and women.",
    alternates: { canonical: "/infertility/assessment" },
};

export default function InfertilityAssessmentPage() {
    return (
        <main>
            <InfertilityAssessmentHero />
            <InfertilityAssessmentContent />
        </main>
    );
}