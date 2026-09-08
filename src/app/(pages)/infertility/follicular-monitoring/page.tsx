import type { Metadata } from "next";
import FollicularMonitoringHero from "@/components/follicular-monitoring/hero";
import FollicularMonitoringContent from "@/components/follicular-monitoring/content";

export const metadata: Metadata = {
    title: "Follicular Monitoring in Hyderabad | AMVI Hospitals",
    description:
        "Follicular monitoring and ovulation tracking at AMVI Hospitals, Hyderabad — ultrasound-guided fertility diagnosis to support natural conception, IUI, or IVF.",
    alternates: { canonical: "/infertility/follicular-monitoring" },
};

export default function FollicularMonitoringPage() {
    return (
        <main>
            <FollicularMonitoringHero />
            <FollicularMonitoringContent />
        </main>
    );
}