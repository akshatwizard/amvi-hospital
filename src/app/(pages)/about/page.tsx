import AboutHero from "@/components/about/hero";
import AboutOverview from "@/components/about/overview";
import AboutPillars from "@/components/about/pillars";
import AboutPrinciples from "@/components/about/principles";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "About AMVI Hospitals | Women's Hospital in Hyderabad",
    description:
        "AMVI Hospitals is a fertility and maternity hospital in Hyderabad — IVF, IUI and ICSI, pregnancy care and delivery, gynaecology and laparoscopic surgery, with two operation theatres, an in-house pharmacy and on-site diagnostics. Open 24/7.",
    alternates: {
        canonical: "/about",
    },
    openGraph: {
        title: "About AMVI Hospital",
        description:
            "A fertility and maternity hospital in Hyderabad — IVF, pregnancy care and women's health under one roof. Open 24/7.",
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