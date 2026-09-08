import type { Metadata } from "next";
import VaricoceleHero from "@/components/varicocele/hero";
import VaricoceleContent from "@/components/varicocele/content";

export const metadata: Metadata = {
    title: "Varicocele Treatment in Hyderabad | AMVI Hospitals",
    description:
        "Diagnosis and treatment for varicocele at AMVI Hospitals, Hyderabad — from monitoring and lifestyle care to microsurgical varicocelectomy and fertility support.",
    alternates: { canonical: "/infertility/male/varicocele" },
};

export default function VaricocelePage() {
    return (
        <main>
            <VaricoceleHero />
            <VaricoceleContent />
        </main>
    );
}