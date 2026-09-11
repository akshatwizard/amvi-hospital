import type { Metadata } from "next";
import PrePregnancyCounsellingHero from "@/components/pre-pregnancy-counselling/hero";
import PrePregnancyCounsellingContent from "@/components/pre-pregnancy-counselling/content";

export const metadata: Metadata = {
    title: "Pre-Pregnancy Counselling in Hyderabad | AMVI Hospitals",
    description:
        "Expert pre-pregnancy counselling in Hyderabad at AMVI Hospitals, guiding couples with personalised care, fertility advice, and safe pregnancy planning.",
    alternates: { canonical: "/maternity/pre-pregnancy-counselling" },
};

export default function PrePregnancyCounsellingPage() {
    return (
        <main>
            <PrePregnancyCounsellingHero />
            <PrePregnancyCounsellingContent />
        </main>
    );
}