import type { Metadata } from "next";
import TreatmentPage from "@/components/treatment/treatment-page";
import { paediatrics } from "@/constants/new-treatments";

export const metadata: Metadata = {
    title: "Paediatrics & NICU | Newborn and Child Care | AMVI Hospitals",
    description:
        "Newborn and child care at AMVI Hospitals, Hyderabad: NICU for premature and sick newborns, phototherapy, vaccinations, check-ups and treatment of childhood illnesses.",
    alternates: { canonical: "/pediatrics" },
};

export default function PediatricsPage() {
    return <TreatmentPage content={paediatrics} />;
}
