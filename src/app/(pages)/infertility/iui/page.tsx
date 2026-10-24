import type { Metadata } from "next";
import IuiHero from "@/components/iui/hero";
import IuiContent from "@/components/iui/content";

export const metadata: Metadata = {
    title: "IUI (Intrauterine Insemination) in Hyderabad | AMVI Hospitals",
    description:
        "IUI treatment in Hyderabad at AMVI Hospitals. Non-invasive fertility option with high success rates. Ideal for unexplained infertility, PCOS and low sperm count.",
    alternates: { canonical: "/infertility/iui" },
};

export default function IuiPage() {
    return (
        <main>
            <IuiHero />
            <IuiContent />
        </main>
    );
}