import type { Metadata } from "next";
import VulvarCancerHero from "@/components/vulvar-cancer/hero";
import VulvarCancerContent from "@/components/vulvar-cancer/content";

export const metadata: Metadata = {
    title: "Vulvar Cancer Treatment & Diagnosis | AMVI Hospitals",
    description:
        "Expert vulvar cancer care at AMVI Hospitals, Hyderabad — symptoms, diagnosis, staging, treatment and prevention from gynecologic oncology specialists.",
    alternates: { canonical: "/gynaecology/cancers/vulvar" },
};

export default function VulvarCancerPage() {
    return (
        <main>
            <VulvarCancerHero />
            <VulvarCancerContent />
        </main>
    );
}