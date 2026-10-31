import type { Metadata } from "next";
import TreatmentPage from "@/components/treatment/treatment-page";
import { roboticSurgery } from "@/constants/new-treatments";

export const metadata: Metadata = {
    title: "Robotic Gynaecological Surgery in Hyderabad | AMVI Hospitals",
    description:
        "Robotic-assisted hysterectomy, myomectomy, endometriosis and prolapse surgery: high precision, smaller incisions and faster recovery, with Dr. Shaivalini Kamarapu.",
    alternates: { canonical: "/laparoscopy/robotic-surgery" },
};

export default function LaparoscopyRoboticSurgeryPage() {
    return <TreatmentPage content={roboticSurgery} />;
}
