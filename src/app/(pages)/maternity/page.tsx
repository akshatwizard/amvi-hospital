import type { Metadata } from "next";
import MaternityHero from "@/components/maternity-hub/hero";
import MaternityOverview from "@/components/maternity-hub/overview";
import MaternityServices from "@/components/maternity-hub/services";
import MaternityCareSigns from "@/components/maternity-hub/care-signs";
import MaternityJourney from "@/components/maternity-hub/journey";
import MaternityFaq from "@/components/maternity-hub/faq";

export const metadata: Metadata = {
    title: "Maternity & Delivery Care in Hyderabad | AMVI Hospitals",
    description:
        "Complete maternity care in Hyderabad at AMVI Hospitals — antenatal check-ups, high-risk pregnancy management, 3D/4D scans, normal, painless and cesarean delivery. Puppalaguda & Attapur.",
    alternates: { canonical: "/maternity" },
};

export default function MaternityPage() {
    return (
        <main>
            <MaternityHero />
            <MaternityOverview />
            <MaternityServices />
            <MaternityCareSigns />
            <MaternityJourney />
            <MaternityFaq />
        </main>
    );
}
