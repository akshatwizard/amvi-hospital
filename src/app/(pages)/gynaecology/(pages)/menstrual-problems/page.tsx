import type { Metadata } from "next";
import MenstrualProblemsHero from "@/components/menstrual-problems/hero";
import MenstrualProblemsContent from "@/components/menstrual-problems/content";

export const metadata: Metadata = {
    title: "Menstrual Problems Treatment in Hyderabad | AMVI Hospitals",
    description:
        "Expert care for irregular periods, heavy bleeding, and other menstrual disorders in Hyderabad — diagnosis and treatment led by Dr. Shaivalini Kamarapu at AMVI Hospitals.",
    alternates: { canonical: "/gynaecology/menstrual-problems" },
};

export default function MenstrualProblemsPage() {
    return (
        <main>
            <MenstrualProblemsHero />
            <MenstrualProblemsContent />
        </main>
    );
}