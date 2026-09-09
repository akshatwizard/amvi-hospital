import type { Metadata } from "next";
import StemCellIvfHero from "@/components/stem-cell-ivf/hero";
import StemCellIvfContent from "@/components/stem-cell-ivf/content";

export const metadata: Metadata = {
    title: "Stem Cell IVF Treatment in Hyderabad | AMVI Hospitals",
    description:
        "Explore advanced stem cell IVF treatment in Hyderabad at AMVI Hospitals, offering innovative regenerative fertility solutions to improve conception success.",
    alternates: { canonical: "/infertility/stem-cell-ivf" },
};

export default function StemCellIvfPage() {
    return (
        <main>
            <StemCellIvfHero />
            <StemCellIvfContent />
        </main>
    );
}