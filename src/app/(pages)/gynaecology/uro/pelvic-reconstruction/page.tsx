import type { Metadata } from "next";
import PelvicReconstructionHero from "@/components/pelvic-reconstruction/hero";
import PelvicReconstructionContent from "@/components/pelvic-reconstruction/content";

export const metadata: Metadata = {
    title: "Pelvic Reconstruction Surgery — Restoring Pelvic Health | AMVI Hospitals",
    description:
        "Advanced pelvic reconstruction surgery in Hyderabad at AMVI Hospitals — non-surgical and surgical treatment options, robotic and traditional approaches, and recovery guidance.",
    alternates: { canonical: "/gynaecology/uro/pelvic-reconstruction" },
};

export default function PelvicReconstructionPage() {
    return (
        <main>
            <PelvicReconstructionHero />
            <PelvicReconstructionContent />
        </main>
    );
}