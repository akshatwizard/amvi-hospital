import type { Metadata } from "next";
import IvfHero from "@/components/ivf/hero";
import IvfContent from "@/components/ivf/content";

export const metadata: Metadata = {
    title: "Best IVF Treatment in Hyderabad | AMVI Hospitals",
    description:
        "Get the best IVF treatment in Hyderabad at AMVI Hospitals. Expert fertility specialists, advanced IVF lab and personalized care across Puppalaguda and Attapur.",
    alternates: { canonical: "/infertility/ivf" },
};

export default function IvfPage() {
    return (
        <main>
            <IvfHero />
            <IvfContent />
        </main>
    );
}