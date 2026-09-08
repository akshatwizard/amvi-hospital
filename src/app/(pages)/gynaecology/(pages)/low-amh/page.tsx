import type { Metadata } from "next";
import LowAmhHero from "@/components/low-amh/hero";
import LowAmhContent from "@/components/low-amh/content";

export const metadata: Metadata = {
    title: "Low AMH Treatment in Hyderabad | AMVI Hospitals",
    description:
        "Diagnosis and personalised treatment for low AMH and diminished ovarian reserve in Hyderabad — from ovulation induction to IVF, led by Dr. Shaivalini Kamarapu.",
    alternates: { canonical: "/gynaecology/low-amh" },
};

export default function LowAmhPage() {
    return (
        <main>
            <LowAmhHero />
            <LowAmhContent />
        </main>
    );
}