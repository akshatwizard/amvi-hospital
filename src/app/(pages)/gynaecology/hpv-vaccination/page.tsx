import type { Metadata } from "next";
import HpvVaccinationHero from "@/components/hpv-vaccination/hero";
import HpvVaccinationContent from "@/components/hpv-vaccination/content";

export const metadata: Metadata = {
    title: "HPV Vaccination in Hyderabad | AMVI Hospitals",
    description:
        "HPV vaccination and cervical cancer prevention guidance at AMVI Hospitals, Hyderabad — vaccine types, dosing schedules, and screening advice from Dr. Shaivalini Kamarapu.",
    alternates: { canonical: "/gynaecology/hpv-vaccination" },
};

export default function HpvVaccinationPage() {
    return (
        <main>
            <HpvVaccinationHero />
            <HpvVaccinationContent />
        </main>
    );
}