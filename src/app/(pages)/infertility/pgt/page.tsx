import type { Metadata } from "next";
import TreatmentPage from "@/components/treatment/treatment-page";
import { pgt } from "@/constants/new-treatments";

export const metadata: Metadata = {
    title: "PGT (Preimplantation Genetic Testing) in Hyderabad | AMVI Hospitals",
    description:
        "PGT-A, PGT-M and PGT-SR testing of IVF embryos for chromosomal and genetic conditions: who needs it, how it works and its limits. AMVI Hospitals, Hyderabad.",
    alternates: { canonical: "/infertility/pgt" },
};

export default function InfertilityPgtPage() {
    return <TreatmentPage content={pgt} />;
}
