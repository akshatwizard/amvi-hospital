import type { Metadata } from "next";
import CasaHero from "@/components/casa/hero";
import CasaContent from "@/components/casa/content";

export const metadata: Metadata = {
    title: "Computer Assisted Semen Analysis (CASA) in Hyderabad | AMVI Hospitals",
    description:
        "Advanced computer assisted semen analysis (CASA) at AMVI Hospitals, Hyderabad — accurate, reproducible male fertility evaluation using digital imaging and analysis.",
    alternates: { canonical: "/infertility/casa" },
};

export default function CasaPage() {
    return (
        <main>
            <CasaHero />
            <CasaContent />
        </main>
    );
}