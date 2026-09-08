import type { Metadata } from "next";
import ContraceptionHero from "@/components/contraception/hero";
import ContraceptionContent from "@/components/contraception/content";

export const metadata: Metadata = {
    title: "Contraception & Birth Control Options | AMVI Hospitals",
    description:
        "Personalised guidance on birth control methods — pills, IUDs, implants, injections, and permanent options — from Dr. Shaivalini Kamarapu at AMVI Hospitals, Hyderabad.",
    alternates: { canonical: "/gynaecology/contraception" },
};

export default function ContraceptionPage() {
    return (
        <main>
            <ContraceptionHero />
            <ContraceptionContent />
        </main>
    );
}