import type { Metadata } from "next";
import ErectileDysfunctionHero from "@/components/erectile-dysfunction/hero";
import ErectileDysfunctionContent from "@/components/erectile-dysfunction/content";

export const metadata: Metadata = {
    title: "Erectile Dysfunction Treatment in Hyderabad | AMVI Hospitals",
    description:
        "Confidential diagnosis and treatment for erectile dysfunction at AMVI Hospitals, Hyderabad — from lifestyle guidance to medication, counselling, and advanced options.",
    alternates: { canonical: "/infertility/male/erectile-dysfunction" },
};

export default function ErectileDysfunctionPage() {
    return (
        <main>
            <ErectileDysfunctionHero />
            <ErectileDysfunctionContent />
        </main>
    );
}