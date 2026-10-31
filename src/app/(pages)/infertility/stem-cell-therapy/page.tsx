import type { Metadata } from "next";
import TreatmentPage from "@/components/treatment/treatment-page";
import { stemCellTherapy } from "@/constants/new-treatments";

export const metadata: Metadata = {
    title: "Stem Cell Therapy in Fertility Care | AMVI Hospitals Hyderabad",
    description:
        "Stem cell therapy for very low egg reserve, thin endometrium, Asherman's syndrome and testicular failure: how it works, what the evidence says and established alternatives.",
    alternates: { canonical: "/infertility/stem-cell-therapy" },
};

export default function InfertilityStemCellTherapyPage() {
    return <TreatmentPage content={stemCellTherapy} />;
}
