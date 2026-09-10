import type { Metadata } from "next";
import OperativeHysteroscopyHero from "@/components/operative-hysteroscopy/hero";
import OperativeHysteroscopyContent from "@/components/operative-hysteroscopy/content";

export const metadata: Metadata = {
    title: "Operative Hysteroscopy in Hyderabad | AMVI Hospitals",
    description:
        "Minimally invasive operative hysteroscopy at AMVI Hospitals, Hyderabad — diagnosing and treating fibroids, polyps, adhesions, and abnormal bleeding in a single procedure.",
    alternates: { canonical: "/laparoscopy/operative-hysteroscopy" },
};

export default function OperativeHysteroscopyPage() {
    return (
        <main>
            <OperativeHysteroscopyHero />
            <OperativeHysteroscopyContent />
        </main>
    );
}