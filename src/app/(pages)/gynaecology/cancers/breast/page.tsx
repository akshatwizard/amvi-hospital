import type { Metadata } from "next";
import BreastCancerHero from "@/components/breast-cancer/hero";
import BreastCancerContent from "@/components/breast-cancer/content";

export const metadata: Metadata = {
    title: "Breast Cancer Treatment & Diagnosis | AMVI Hospitals",
    description:
        "Comprehensive breast cancer care at AMVI Hospitals, Hyderabad — screening, diagnosis, surgical options, radiation and systemic therapies for every stage and type.",
    alternates: { canonical: "/gynaecology/cancers/breast" },
};

export default function BreastCancerPage() {
    return (
        <main>
            <BreastCancerHero />
            <BreastCancerContent />
        </main>
    );
}