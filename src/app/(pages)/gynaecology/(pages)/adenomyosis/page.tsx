import type { Metadata } from "next";
import AdenomyosisHero from "@/components/adenomyosis/hero";
import AdenomyosisContent from "@/components/adenomyosis/content";

export const metadata: Metadata = {
    title: "Adenomyosis Treatment in Hyderabad | AMVI Hospitals",
    description:
        "Diagnosis and treatment for adenomyosis in Hyderabad — heavy bleeding, painful periods, and enlarged uterus care from Dr. Shaivalini Kamarapu at AMVI Hospitals.",
    alternates: { canonical: "/gynaecology/adenomyosis" },
};

export default function AdenomyosisPage() {
    return (
        <main>
            <AdenomyosisHero />
            <AdenomyosisContent />
        </main>
    );
}