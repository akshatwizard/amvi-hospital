import type { Metadata } from "next";
import GeneticScreeningHero from "@/components/genetic-screening/hero";
import GeneticScreeningContent from "@/components/genetic-screening/content";

export const metadata: Metadata = {
    title: "Preimplantation Genetic Screening in Hyderabad | AMVI Hospitals",
    description:
        "Advanced preimplantation genetic screening (PGS) at AMVI Hospitals, Hyderabad — helping identify chromosomally healthy embryos and improve IVF success rates.",
    alternates: { canonical: "/infertility/genetic-screening" },
};

export default function GeneticScreeningPage() {
    return (
        <main>
            <GeneticScreeningHero />
            <GeneticScreeningContent />
        </main>
    );
}