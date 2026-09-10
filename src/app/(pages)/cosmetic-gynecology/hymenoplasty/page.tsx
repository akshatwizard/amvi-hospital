import type { Metadata } from "next";
import HymenoplastyHero from "@/components/hymenoplasty/hero";
import HymenoplastyContent from "@/components/hymenoplasty/content";

export const metadata: Metadata = {
    title: "Hymenoplasty in Hyderabad | AMVI Hospitals",
    description:
        "Hymenoplasty (hymen restoration) at AMVI Hospitals, Hyderabad — a private, respectful cosmetic gynaecological procedure for personal, cultural, or religious reasons.",
    alternates: { canonical: "/cosmetic-gynecology/hymenoplasty" },
};

export default function HymenoplastyPage() {
    return (
        <main>
            <HymenoplastyHero />
            <HymenoplastyContent />
        </main>
    );
}