import type { Metadata } from "next";
import LaparoscopyHero from "@/components/laparoscopy-hub/hero";
import LaparoscopyOverview from "@/components/laparoscopy-hub/overview";
import LaparoscopyProcedures from "@/components/laparoscopy-hub/procedures";
import LaparoscopyBenefits from "@/components/laparoscopy-hub/benefits";
import LaparoscopyRecovery from "@/components/laparoscopy-hub/recovery";
import LaparoscopyFaq from "@/components/laparoscopy-hub/faq";

export const metadata: Metadata = {
    title: "Laparoscopic Surgery in Hyderabad | AMVI Hospitals",
    description:
        "Minimally invasive laparoscopic surgery in Hyderabad at AMVI Hospitals — hysterectomy, myomectomy, fibroid and ovarian cyst treatment. Faster recovery, smaller scars. Puppalaguda & Attapur.",
    alternates: { canonical: "/laparoscopy" },
};

export default function LaparoscopyPage() {
    return (
        <main>
            <LaparoscopyHero />
            <LaparoscopyOverview />
            <LaparoscopyProcedures />
            <LaparoscopyBenefits />
            <LaparoscopyRecovery />
            <LaparoscopyFaq />
        </main>
    );
}
