import type { Metadata } from "next";
import ImsiHero from "@/components/imsi/hero";
import ImsiContent from "@/components/imsi/content";

export const metadata: Metadata = {
    title: "IMSI Fertility Treatment in Hyderabad | AMVI Hospitals",
    description:
        "Advanced IMSI fertility treatment in Hyderabad at AMVI Hospitals for precise sperm selection, improved embryo quality, and higher IVF success rates.",
    alternates: { canonical: "/infertility/imsi" },
};

export default function ImsiPage() {
    return (
        <main>
            <ImsiHero />
            <ImsiContent />
        </main>
    );
}