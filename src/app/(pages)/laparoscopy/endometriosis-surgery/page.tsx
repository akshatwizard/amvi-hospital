import type { Metadata } from "next";
import TreatmentPage from "@/components/treatment/treatment-page";
import { endometriosisSurgery } from "@/constants/new-treatments";

export const metadata: Metadata = {
    title: "Endometriosis Surgery in Hyderabad | AMVI Hospitals",
    description:
        "Laparoscopic and robotic-assisted endometriosis surgery in Hyderabad: excision, endometrioma removal and fertility-preserving care, led by Dr. Shaivalini Kamarapu.",
    alternates: { canonical: "/laparoscopy/endometriosis-surgery" },
};

export default function LaparoscopyEndometriosisSurgeryPage() {
    return <TreatmentPage content={endometriosisSurgery} />;
}
