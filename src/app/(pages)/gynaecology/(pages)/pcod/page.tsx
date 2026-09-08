import type { Metadata } from "next";
import PcodHero from "@/components/pcod/hero";
import PcodContent from "@/components/pcod/content";

export const metadata: Metadata = {
    title: "PCOD Treatment in Hyderabad | AMVI Hospitals",
    description:
        "Effective PCOD treatment in Hyderabad at AMVI Hospitals. Hormonal therapy, lifestyle management, and laparoscopic options — led by Dr. Shaivalini Kamarapu.",
    alternates: { canonical: "/gynaecology/pcod" },
};

export default function PcodPage() {
    return (
        <main>
            <PcodHero />
            <PcodContent />
        </main>
    );
}