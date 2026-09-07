import type { Metadata } from "next";
import GynaecologyHero from "@/components/gynaecology/hero";
import GynaecologyOverview from "@/components/gynaecology/overview";
import GynaecologyConditions from "@/components/gynaecology/conditions";
import GynaecologySymptoms from "@/components/gynaecology/symptoms";
import AppointmentSteps from "@/components/gynaecology/appointment-steps";

export const metadata: Metadata = {
    title: "Gynaecology Services & Women's Health Care | AMVI Hospital",
    description:
        "AMVI Hospitals offers comprehensive gynaecology services in Hyderabad, led by Dr. Shaivalini Kamarapu — PCOS, endometriosis, menstrual problems, uterine fibroids and more.",
    alternates: { canonical: "/gynaecology" },
};

export default function GynaecologyPage() {
    return (
        <main>
            <GynaecologyHero />
            <GynaecologyOverview />
            <GynaecologyConditions />
            <GynaecologySymptoms />
            <AppointmentSteps />
        </main>
    );
}