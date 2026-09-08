import type { Metadata } from "next";
import OvarianCancerHero from "@/components/ovarian-cancer/hero";
import OvarianCancerContent from "@/components/ovarian-cancer/content";

export const metadata: Metadata = {
    title: "Ovarian Cancer Treatment & Diagnosis | AMVI Hospitals",
    description:
        "Expert ovarian cancer care at AMVI Hospitals, Hyderabad — types, symptoms, causes and treatment options including surgery, chemotherapy and targeted therapy.",
    alternates: { canonical: "/gynaecology/cancers/ovarian" },
};

export default function OvarianCancerPage() {
    return (
        <main>
            <OvarianCancerHero />
            <OvarianCancerContent />
        </main>
    );
}