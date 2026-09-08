import type { Metadata } from "next";
import HealthCheckupHero from "@/components/health-checkup/hero";
import HealthCheckupContent from "@/components/health-checkup/content";

export const metadata: Metadata = {
    title: "Preventive Health Checkups for Women | AMVI Hospitals",
    description:
        "Pap smear, sonomammography, and DEXA bone density screening for women at AMVI Hospitals, Hyderabad — comprehensive preventive care led by Dr. Shaivalini Kamarapu.",
    alternates: { canonical: "/gynaecology/health-checkup" },
};

export default function HealthCheckupPage() {
    return (
        <main>
            <HealthCheckupHero />
            <HealthCheckupContent />
        </main>
    );
}