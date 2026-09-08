import type { Metadata } from "next";
import UrinaryIncontinenceHero from "@/components/urinary-incontinence/hero";
import UrinaryIncontinenceContent from "@/components/urinary-incontinence/content";

export const metadata: Metadata = {
    title: "Urinary Incontinence Treatment — Female Urology Care | AMVI Hospitals",
    description:
        "Expert urinary incontinence treatment in Hyderabad at AMVI Hospitals — types of incontinence, triggers and personalised treatment options.",
    alternates: { canonical: "/gynaecology/uro/urinary-incontinence" },
};

export default function UrinaryIncontinencePage() {
    return (
        <main>
            <UrinaryIncontinenceHero />
            <UrinaryIncontinenceContent />
        </main>
    );
}