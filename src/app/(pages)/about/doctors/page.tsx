import type { Metadata } from "next";
import AboutDoctorHero from "@/components/about-doctor/hero";
import LeadProfile from "@/components/about-doctor/lead-profile";
import Team from "@/components/about-doctor/team";

export const metadata: Metadata = {
    title: "About Our Doctors | Dr. Shaivalini Kamarapu — AMVI Hospital",
    description:
        "Meet Dr. Shaivalini Kamarapu, Hyderabad's trusted IVF specialist and gynaecologist, and the full specialist team behind AMVI Hospital's women's health, fertility and maternity care.",
    alternates: { canonical: "/about/doctors" },
};

export default function AboutDoctorPage() {
    return (
        <main>
            <AboutDoctorHero />
            <LeadProfile />
            <Team />
        </main>
    );
}