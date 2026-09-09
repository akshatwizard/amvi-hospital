import type { Metadata } from "next";
import LaparoscopicHysterectomyHero from "@/components/laparoscopic-hysterectomy/hero";
import LaparoscopicHysterectomyContent from "@/components/laparoscopic-hysterectomy/content";

export const metadata: Metadata = {
    title: "Laparoscopic Hysterectomy in Hyderabad | AMVI Hospitals",
    description:
        "Minimally invasive laparoscopic hysterectomy at AMVI Hospitals, Hyderabad — faster recovery, smaller incisions, and expert surgical care from Dr. Shaivalini Kamarapu.",
    alternates: { canonical: "/laparoscopy/hysterectomy" },
};

export default function LaparoscopicHysterectomyPage() {
    return (
        <main>
            <LaparoscopicHysterectomyHero />
            <LaparoscopicHysterectomyContent />
        </main>
    );
}