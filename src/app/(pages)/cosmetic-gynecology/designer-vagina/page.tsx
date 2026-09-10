import type { Metadata } from "next";
import DesignerVaginaHero from "@/components/designer-vagina/hero";
import DesignerVaginaContent from "@/components/designer-vagina/content";

export const metadata: Metadata = {
    title: "Labiaplasty & Vaginal Surgery in Hyderabad | AMVI Hospital",
    description:
        "AMVI Hospitals offers specialist labiaplasty and vaginal surgery in Hyderabad with personalized care focused on comfort, intimate wellness and individual needs.",
    alternates: { canonical: "/cosmetic-gynecology/designer-vagina" },
};

export default function DesignerVaginaPage() {
    return (
        <main>
            <DesignerVaginaHero />
            <DesignerVaginaContent />
        </main>
    );
}