import type { Metadata } from "next";
import AsthenospermiaHero from "@/components/asthenospermia/hero";
import AsthenospermiaContent from "@/components/asthenospermia/content";

export const metadata: Metadata = {
    title: "Asthenospermia (Low Sperm Motility) Treatment | AMVI Hospitals",
    description:
        "Diagnosis and treatment for low sperm motility (asthenospermia) at AMVI Hospitals, Hyderabad — from lifestyle care and antioxidant therapy to IVF and ICSI.",
    alternates: { canonical: "/infertility/male/asthenospermia" },
};

export default function AsthenospermiaPage() {
    return (
        <main>
            <AsthenospermiaHero />
            <AsthenospermiaContent />
        </main>
    );
}