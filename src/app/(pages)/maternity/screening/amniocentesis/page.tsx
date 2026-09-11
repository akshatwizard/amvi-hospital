import type { Metadata } from "next";
import AmniocentesisHero from "@/components/amniocentesis/hero";
import AmniocentesisContent from "@/components/amniocentesis/content";

export const metadata: Metadata = {
    title: "Amniocentesis Test at Best Hospital in Hyderabad | AMVI Hospitals",
    description:
        "Safe, accurate amniocentesis testing at AMVI Hospitals, Hyderabad — advanced prenatal genetic diagnostics under expert obstetric care.",
    alternates: { canonical: "/maternity/chromosome-test/amniocentesis" },
};

export default function AmniocentesisPage() {
    return (
        <main>
            <AmniocentesisHero />
            <AmniocentesisContent />
        </main>
    );
}