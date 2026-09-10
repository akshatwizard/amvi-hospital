import type { Metadata } from "next";
import GShotHero from "@/components/g-shot/hero";
import GShotContent from "@/components/g-shot/content";

export const metadata: Metadata = {
    title: "G-Shot Treatment in Hyderabad | AMVI Hospitals",
    description:
        "Enhance intimacy and confidence with G-Shot treatment in Hyderabad at AMVI Hospitals, offering safe cosmetic gynecology care by experts.",
    alternates: { canonical: "/cosmetic-gynecology/g-shot" },
};

export default function GShotPage() {
    return (
        <main>
            <GShotHero />
            <GShotContent />
        </main>
    );
}