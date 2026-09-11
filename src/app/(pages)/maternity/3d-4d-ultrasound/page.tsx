import type { Metadata } from "next";
import UltrasoundHero from "@/components/3d-4d-ultrasound/hero";
import UltrasoundContent from "@/components/3d-4d-ultrasound/content";

export const metadata: Metadata = {
    title: "Best 3D 4D Ultrasound Scan in Hyderabad | AMVI Hospitals",
    description:
        "Get the best 3D 4D ultrasound scan in Hyderabad at AMVI Hospitals with advanced imaging technology for accurate pregnancy and fetal health monitoring.",
    alternates: { canonical: "/maternity/3d-4d-ultrasound" },
};

export default function UltrasoundPage() {
    return (
        <main>
            <UltrasoundHero />
            <UltrasoundContent />
        </main>
    );
}