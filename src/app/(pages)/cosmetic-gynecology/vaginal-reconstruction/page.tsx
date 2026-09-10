import type { Metadata } from "next";
import VaginalReconstructionHero from "@/components/vaginal-reconstruction/hero";
import VaginalReconstructionContent from "@/components/vaginal-reconstruction/content";

export const metadata: Metadata = {
    title: "Vaginal Reconstruction in Hyderabad | AMVI Hospitals",
    description:
        "Vaginal reconstruction surgery at AMVI Hospitals, Hyderabad — restoring vaginal structure and function with expert cosmetic gynaecological care.",
    alternates: { canonical: "/cosmetic-gynecology/vaginal-reconstruction" },
};

export default function VaginalReconstructionPage() {
    return (
        <main>
            <VaginalReconstructionHero />
            <VaginalReconstructionContent />
        </main>
    );
}