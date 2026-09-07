import type { Metadata } from "next";
import CervicalCancerHero from "@/components/cervical-cancer/hero";
import CervicalCancerContent from "@/components/cervical-cancer/content";

export const metadata: Metadata = {
    title: "Cervical Cancer Treatment & Diagnosis | AMVI Hospitals",
    description:
        "Comprehensive cervical cancer care at AMVI Hospitals, Hyderabad — symptoms, risk factors, diagnosis, staging and treatment, led by expert gynecologic oncologists.",
    alternates: { canonical: "/gynaecology/cancers/cervical" },
};

export default function CervicalCancerPage() {
    return (
        <main>
            <CervicalCancerHero />
            <CervicalCancerContent />
        </main>
    );
}