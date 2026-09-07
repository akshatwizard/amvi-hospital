import type { Metadata } from "next";
import EndocrineDisordersHero from "@/components/endocrine-disorders/hero";
import EndocrineDisordersContent from "@/components/endocrine-disorders/content";

export const metadata: Metadata = {
    title: "Gynaecological Endocrine Disorders Treatment | AMVI Hospitals",
    description:
        "Evaluation and treatment for hormonal imbalances and gynaecological endocrine disorders in Hyderabad, led by a multidisciplinary team at AMVI Hospitals.",
    alternates: { canonical: "/gynaecology/endocrine-disorders" },
};

export default function EndocrineDisordersPage() {
    return (
        <main>
            <EndocrineDisordersHero />
            <EndocrineDisordersContent />
        </main>
    );
}