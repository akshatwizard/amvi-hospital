import type { Metadata } from "next";
import OShotHero from "@/components/o-shot/hero";
import OShotContent from "@/components/o-shot/content";

export const metadata: Metadata = {
    title: "O-Shot Treatment in Hyderabad | AMVI Hospitals",
    description:
        "Advanced O-Shot treatment in Hyderabad at AMVI Hospitals to enhance women's wellness, improve intimacy, and support natural rejuvenation.",
    alternates: { canonical: "/cosmetic-gynecology/o-shot" },
};

export default function OShotPage() {
    return (
        <main>
            <OShotHero />
            <OShotContent />
        </main>
    );
}