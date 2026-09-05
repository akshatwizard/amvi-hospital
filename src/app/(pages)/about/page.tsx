import AboutHero from "@/components/about/hero";
import AboutOverview from "@/components/about/overview";
import AboutPillars from "@/components/about/pillars";
import AboutPrinciples from "@/components/about/principles";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "About AMVI Hospital | Women's Health Daycare Surgery Centre in Hyderabad",
    description:
        "AMVI Hospital is a state-of-the-art daycare surgery centre in Hyderabad dedicated to women's health — offering gynaecology, fertility, maternity and cosmetic gynaecology care across two air-conditioned operation theatres, in-house pharmacy and on-site diagnostics.",
    alternates: {
        canonical: "/about",
    },
    openGraph: {
        title: "About AMVI Hospital",
        description:
            "A daycare surgery centre in Hyderabad built for women's health — gynaecology, fertility, maternity and cosmetic gynaecology under one roof.",
        url: "/about",
        type: "website",
    },
};

export default function AboutPage() {
    return (
        <main>
            <AboutHero />
            <AboutOverview />
            <AboutPillars />
            <AboutPrinciples />
        </main>
    );
}