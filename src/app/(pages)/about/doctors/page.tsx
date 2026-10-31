import type { Metadata } from "next";
import AboutDoctorHero from "@/components/about-doctor/hero";
import LeadProfile from "@/components/about-doctor/lead-profile";
import Team from "@/components/about-doctor/team";
import { Section, Wrapper } from "@/shared/sections";
import ExtraSections from "@/shared/extra-sections";

export const metadata: Metadata = {
    title: "Our Doctors | Dr. Shaivalini Kamarapu | AMVI Hospitals",
    description:
        "Meet Dr. Shaivalini Kamarapu, Hyderabad's trusted IVF specialist and gynaecologist, and the full specialist team behind AMVI Hospital's women's health, fertility and maternity care.",
    alternates: { canonical: "/about/doctors" },
};

export default function AboutDoctorPage() {
    return (
        <main>
            <AboutDoctorHero />
            <LeadProfile />
            <Section className="bg-rose-50/40">
                <Wrapper className="max-w-4xl! gap-16!">
                    <ExtraSections path="/about/doctors" />
                </Wrapper>
            </Section>
            <Team />
        </main>
    );
}