import type { Metadata } from "next";
import VaginalTighteningHero from "@/components/vaginal-tightening/hero";
import VaginalTighteningContent from "@/components/vaginal-tightening/content";

export const metadata: Metadata = {
    title: "Vaginal Tightening Surgery in Hyderabad | AMVI Hospitals",
    description:
        "Vaginal tightening (vaginoplasty) at AMVI Hospitals, Hyderabad — surgical or laser treatment to restore vaginal tone and improve sexual and urinary function.",
    alternates: { canonical: "/cosmetic-gynecology/vaginal-tightening-surgery" },
};

export default function VaginalTighteningPage() {
    return (
        <main>
            <VaginalTighteningHero />
            <VaginalTighteningContent />
        </main>
    );
}