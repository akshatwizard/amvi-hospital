import type { Metadata } from "next";
import TubalRecanalizationHero from "@/components/tubal-recanalization/hero";
import TubalRecanalizationContent from "@/components/tubal-recanalization/content";

export const metadata: Metadata = {
    title: "Tubal Recanalization in Hyderabad | AMVI Hospitals",
    description:
        "Minimally invasive tubal recanalization (fallopian tube reversal) at AMVI Hospitals, Hyderabad — restoring the chance of natural conception after tubal ligation.",
    alternates: { canonical: "/laparoscopy/tubal-recanalization" },
};

export default function TubalRecanalizationPage() {
    return (
        <main>
            <TubalRecanalizationHero />
            <TubalRecanalizationContent />
        </main>
    );
}