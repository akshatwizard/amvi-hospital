import type { Metadata } from "next";
import EndometriosisHero from "@/components/endometriosis/hero";
import EndometriosisContent from "@/components/endometriosis/content";

export const metadata: Metadata = {
    title: "Endometriosis Treatment in Hyderabad | AMVI Hospitals",
    description:
        "Expert endometriosis diagnosis and treatment in Hyderabad at AMVI Hospitals — hormonal therapy, laparoscopic surgery, and fertility-focused care led by Dr. Shaivalini Kamarapu.",
    alternates: { canonical: "/gynaecology/endometriosis" },
};

export default function EndometriosisPage() {
    return (
        <main>
            <EndometriosisHero />
            <EndometriosisContent />
        </main>
    );
}