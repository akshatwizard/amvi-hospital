import type { Metadata } from "next";
import AzoospermiaHero from "@/components/azoospermia/hero";
import AzoospermiaContent from "@/components/azoospermia/content";

export const metadata: Metadata = {
    title: "Azoospermia (Zero Sperm Count) Treatment | AMVI Hospitals",
    description:
        "Diagnosis and treatment for azoospermia at AMVI Hospitals, Hyderabad — from hormonal therapy and surgery to sperm retrieval with IVF-ICSI, led by Dr. Shaivalini Kamarapu.",
    alternates: { canonical: "/infertility/male/azoospermia" },
};

export default function AzoospermiaPage() {
    return (
        <main>
            <AzoospermiaHero />
            <AzoospermiaContent />
        </main>
    );
}