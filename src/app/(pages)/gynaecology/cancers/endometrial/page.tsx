import type { Metadata } from "next";
import EndometrialCancerHero from "@/components/endometrial-cancer/hero";
import EndometrialCancerContent from "@/components/endometrial-cancer/content";

export const metadata: Metadata = {
    title: "Endometrial Cancer Treatment in Hyderabad | AMVI Hospitals",
    description:
        "Advanced care for endometrial (uterine) cancer at AMVI Hospitals, Hyderabad — symptoms, risk factors, diagnosis and treatment from expert gynecologic oncologists.",
    alternates: { canonical: "/gynaecology/cancers/endometrial" },
};

export default function EndometrialCancerPage() {
    return (
        <main>
            <EndometrialCancerHero />
            <EndometrialCancerContent />
        </main>
    );
}