import type { Metadata } from "next";
import PcosHero from "@/components/pcos/hero";
import PcosContent from "@/components/pcos/content";

export const metadata: Metadata = {
    title: "PCOS Treatment in Hyderabad | AMVI Hospitals",
    description:
        "Expert PCOS treatment in Hyderabad at AMVI Hospitals — hormonal, lifestyle and fertility care led by Dr. Shaivalini Kamarapu, including IUI and IVF for PCOS-related infertility.",
    alternates: { canonical: "/gynaecology/pcos" },
};

export default function PcosPage() {
    return (
        <main>
            <PcosHero />
            <PcosContent />
        </main>
    );
}