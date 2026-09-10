import type { Metadata } from "next";
import LabialReconstructionHero from "@/components/labial-reconstruction/hero";
import LabialReconstructionContent from "@/components/labial-reconstruction/content";

export const metadata: Metadata = {
    title: "Labial Reconstruction (Labiaplasty) in Hyderabad | AMVI Hospitals",
    description:
        "Laser-assisted labiaplasty at AMVI Hospitals, Hyderabad — reducing labial size for improved comfort and confidence, with expert cosmetic gynaecological care.",
    alternates: { canonical: "/cosmetic-gynecology/labial-reconstruction" },
};

export default function LabialReconstructionPage() {
    return (
        <main>
            <LabialReconstructionHero />
            <LabialReconstructionContent />
        </main>
    );
}