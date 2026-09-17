import type { Metadata } from "next";
import CosmeticGynecologyHero from "@/components/cosmetic-gynecology-hub/hero";
import CosmeticGynecologyOverview from "@/components/cosmetic-gynecology-hub/overview";
import CosmeticGynecologyProcedures from "@/components/cosmetic-gynecology-hub/procedures";
import CosmeticGynecologyTrust from "@/components/cosmetic-gynecology-hub/trust";
import CosmeticGynecologyFaq from "@/components/cosmetic-gynecology-hub/faq";

export const metadata: Metadata = {
    title: "Cosmetic Gynecology in Hyderabad | AMVI Hospitals",
    description:
        "Confidential cosmetic gynaecology in Hyderabad at AMVI Hospitals — vaginal reconstruction, labiaplasty, hymenoplasty and more, led by a specialist-certified surgeon. Puppalaguda & Attapur.",
    alternates: { canonical: "/cosmetic-gynecology" },
};

export default function CosmeticGynecologyPage() {
    return (
        <main>
            <CosmeticGynecologyHero />
            <CosmeticGynecologyOverview />
            <CosmeticGynecologyProcedures />
            <CosmeticGynecologyTrust />
            <CosmeticGynecologyFaq />
        </main>
    );
}
