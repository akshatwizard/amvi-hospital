import type { Metadata } from "next";
import IvfFailureHero from "@/components/ivf-failure/hero";
import IvfFailureContent from "@/components/ivf-failure/content";

export const metadata: Metadata = {
    title: "IVF Failure — Understanding & Next Steps | AMVI Hospitals",
    description:
        "Understanding why an IVF cycle may not succeed, and the diagnostic and support options available at AMVI Hospitals, Hyderabad, before planning your next attempt.",
    alternates: { canonical: "/infertility/ivf-failure" },
};

export default function IvfFailurePage() {
    return (
        <main>
            <IvfFailureHero />
            <IvfFailureContent />
        </main>
    );
}