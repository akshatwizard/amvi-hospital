import type { Metadata } from "next";
import TwinsTripletsHero from "@/components/twins-triplets-pregnancy/hero";
import TwinsTripletsContent from "@/components/twins-triplets-pregnancy/content";

export const metadata: Metadata = {
    title: "Twins or Triplets Pregnancy Care in Hyderabad | AMVI Hospitals",
    description:
        "AMVI Hospitals provides specialist care for twin or triplet pregnancies in Hyderabad, with close monitoring, pregnancy support, and maternity care.",
    alternates: { canonical: "/maternity/twins-triplets" },
};

export default function TwinsTripletsPage() {
    return (
        <main>
            <TwinsTripletsHero />
            <TwinsTripletsContent />
        </main>
    );
}