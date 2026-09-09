import type { Metadata } from "next";
import IcsiHero from "@/components/icsi/hero";
import IcsiContent from "@/components/icsi/content";

export const metadata: Metadata = {
    title: "ICSI Treatment in Hyderabad | AMVI Hospitals",
    description:
        "Get ICSI treatment in Hyderabad at AMVI Hospitals. Learn how intracytoplasmic sperm injection works, when it's recommended, and what to expect at every step.",
    alternates: { canonical: "/infertility/icsi" },
};

export default function IcsiPage() {
    return (
        <main>
            <IcsiHero />
            <IcsiContent />
        </main>
    );
}