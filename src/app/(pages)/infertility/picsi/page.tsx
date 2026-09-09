import type { Metadata } from "next";
import PicsiHero from "@/components/picsi/hero";
import PicsiContent from "@/components/picsi/content";

export const metadata: Metadata = {
    title: "PICSI Treatment in Hyderabad | AMVI Hospitals",
    description:
        "Advanced PICSI sperm selection for IVF at AMVI Hospitals, Hyderabad — improving fertilisation and embryo quality outcomes for select male infertility cases.",
    alternates: { canonical: "/infertility/picsi" },
};

export default function PicsiPage() {
    return (
        <main>
            <PicsiHero />
            <PicsiContent />
        </main>
    );
}