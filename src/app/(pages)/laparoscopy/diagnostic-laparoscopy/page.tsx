import type { Metadata } from "next";
import DiagnosticLaparoscopyHero from "@/components/diagnostic-laparoscopy/hero";
import DiagnosticLaparoscopyContent from "@/components/diagnostic-laparoscopy/content";

export const metadata: Metadata = {
    title: "Diagnostic Laparoscopy in Hyderabad | AMVI Hospitals",
    description:
        "Minimally invasive diagnostic laparoscopy at AMVI Hospitals, Hyderabad — a precise, low-risk way to investigate abdominal or pelvic symptoms without open surgery.",
    alternates: { canonical: "/laparoscopy/diagnostic-laparoscopy" },
};

export default function DiagnosticLaparoscopyPage() {
    return (
        <main>
            <DiagnosticLaparoscopyHero />
            <DiagnosticLaparoscopyContent />
        </main>
    );
}