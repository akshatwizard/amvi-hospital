import type { Metadata } from "next";
import ObGynUltrasoundHero from "@/components/ob-gyn-ultrasound/hero";
import ObGynUltrasoundContent from "@/components/ob-gyn-ultrasound/content";

export const metadata: Metadata = {
    title: "Best Obstetrics and Gynecologic Ultrasound in Hyderabad | AMVI Hospitals",
    description:
        "Get the best obstetrics and gynecologic ultrasound in Hyderabad at AMVI Hospitals with advanced imaging, accurate diagnosis, and expert women's care.",
    alternates: { canonical: "/maternity/ob-gyn-ultrasound" },
};

export default function ObGynUltrasoundPage() {
    return (
        <main>
            <ObGynUltrasoundHero />
            <ObGynUltrasoundContent />
        </main>
    );
}