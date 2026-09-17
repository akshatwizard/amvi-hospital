import type { Metadata } from "next";
import MaleInfertilityHero from "@/components/male-infertility-hub/hero";
import MaleInfertilityOverview from "@/components/male-infertility-hub/overview";
import MaleInfertilityConditions from "@/components/male-infertility-hub/conditions";
import MaleInfertilitySigns from "@/components/male-infertility-hub/signs";
import MaleInfertilityTreatments from "@/components/male-infertility-hub/treatments";
import MaleInfertilityFaq from "@/components/male-infertility-hub/faq";

export const metadata: Metadata = {
    title: "Male Infertility Treatment in Hyderabad | Causes, Tests & ICSI | AMVI Hospitals",
    description:
        "Male infertility evaluation and treatment in Hyderabad at AMVI Hospitals — semen analysis, varicocele repair, IUI and ICSI. 40% of infertility involves a male factor. Puppalaguda & Attapur.",
    alternates: { canonical: "/infertility/male" },
};

export default function MaleInfertilityPage() {
    return (
        <main>
            <MaleInfertilityHero />
            <MaleInfertilityOverview />
            <MaleInfertilityConditions />
            <MaleInfertilitySigns />
            <MaleInfertilityTreatments />
            <MaleInfertilityFaq />
        </main>
    );
}
