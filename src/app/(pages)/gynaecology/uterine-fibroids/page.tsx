import type { Metadata } from "next";
import UterineFibroidsHero from "@/components/uterine-fibroids/hero";
import UterineFibroidsContent from "@/components/uterine-fibroids/content";

export const metadata: Metadata = {
    title: "Uterine Fibroids Treatment in Hyderabad | AMVI Hospitals",
    description:
        "Expert diagnosis and fertility-preserving treatment for uterine fibroids in Hyderabad — from medical management to minimally invasive myomectomy, led by Dr. Shaivalini Kamarapu.",
    alternates: { canonical: "/gynaecology/uterine-fibroids" },
};

export default function UterineFibroidsPage() {
    return (
        <main>
            <UterineFibroidsHero />
            <UterineFibroidsContent />
        </main>
    );
}