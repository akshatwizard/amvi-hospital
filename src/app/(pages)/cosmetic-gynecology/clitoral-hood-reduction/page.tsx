import type { Metadata } from "next";
import ClitoralHoodReductionHero from "@/components/clitoral-hood-reduction/hero";
import ClitoralHoodReductionContent from "@/components/clitoral-hood-reduction/content";

export const metadata: Metadata = {
    title: "Clitoral Hood Reduction in Hyderabad | AMVI Hospitals",
    description:
        "Safe and expert clitoral hood reduction surgery in Hyderabad at AMVI Hospitals, offering advanced cosmetic gynecology care with trusted specialists.",
    alternates: { canonical: "/cosmetic-gynecology/clitoral-hood-reduction" },
};

export default function ClitoralHoodReductionPage() {
    return (
        <main>
            <ClitoralHoodReductionHero />
            <ClitoralHoodReductionContent />
        </main>
    );
}