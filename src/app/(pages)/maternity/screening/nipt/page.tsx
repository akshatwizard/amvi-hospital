import type { Metadata } from "next";
import NiptHero from "@/components/nipt/hero";
import NiptContent from "@/components/nipt/content";

export const metadata: Metadata = {
    title: "NIPT Test in Hyderabad | Non-Invasive Prenatal Testing | AMVI Hospitals",
    description:
        "Non-invasive prenatal testing (NIPT) at AMVI Hospitals, Hyderabad — highly accurate prenatal screening for common chromosomal conditions under expert obstetric care.",
    alternates: { canonical: "/maternity/screening/nipt" },
};

export default function NiptPage() {
    return (
        <main>
            <NiptHero />
            <NiptContent />
        </main>
    );
}