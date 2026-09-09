import type { Metadata } from "next";
import LaparoscopicMyomectomyHero from "@/components/laparoscopic-myomectomy/hero";
import LaparoscopicMyomectomyContent from "@/components/laparoscopic-myomectomy/content";

export const metadata: Metadata = {
    title: "Laparoscopic Myomectomy in Hyderabad | AMVI Hospitals",
    description:
        "Fertility-preserving fibroid removal at AMVI Hospitals, Hyderabad — minimally invasive laparoscopic myomectomy with faster recovery, led by Dr. Shaivalini Kamarapu.",
    alternates: { canonical: "/laparoscopy/myomectomy" },
};

export default function LaparoscopicMyomectomyPage() {
    return (
        <main>
            <LaparoscopicMyomectomyHero />
            <LaparoscopicMyomectomyContent />
        </main>
    );
}