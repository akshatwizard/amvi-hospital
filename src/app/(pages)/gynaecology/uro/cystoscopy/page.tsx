import type { Metadata } from "next";
import CystoscopyHero from "@/components/cystoscopy/hero";
import CystoscopyContent from "@/components/cystoscopy/content";

export const metadata: Metadata = {
    title: "Cystoscopy Procedure — Diagnostic Urologic Examination | AMVI Hospitals",
    description:
        "Expert cystoscopy in Hyderabad at AMVI Hospitals — what to expect, why it's recommended, potential risks, and how the procedure is performed.",
    alternates: { canonical: "/gynaecology/uro/cystoscopy" },
};

export default function CystoscopyPage() {
    return (
        <main>
            <CystoscopyHero />
            <CystoscopyContent />
        </main>
    );
}