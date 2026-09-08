import type { Metadata } from "next";
import ProlapseHero from "@/components/prolapse/hero";
import ProlapseContent from "@/components/prolapse/content";

export const metadata: Metadata = {
    title: "Prolapse Treatment — Pelvic Organ Prolapse Repair | AMVI Hospitals",
    description:
        "Advanced prolapse treatment in Hyderabad at AMVI Hospitals — types, causes, symptoms and both non-surgical and surgical treatment options for pelvic organ prolapse.",
    alternates: { canonical: "/gynaecology/uro/prolapse" },
};

export default function ProlapsePage() {
    return (
        <main>
            <ProlapseHero />
            <ProlapseContent />
        </main>
    );
}