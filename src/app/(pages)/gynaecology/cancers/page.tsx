import type { Metadata } from "next";
import PageHero from "@/shared/page-hero";
import ConditionHub from "@/components/hub/condition-hub";
import ContactBanner from "@/components/home/contact_banner";
import { gynaeCancersHub } from "@/constants/gynae-cancers";

export const metadata: Metadata = {
    title: "Gynaecological Cancer Care in Hyderabad | AMVI Hospitals",
    description:
        "Screening, early diagnosis and treatment planning for cervical, endometrial, ovarian, vulvar and breast cancer at AMVI Hospitals, Hyderabad.",
    alternates: { canonical: "/gynaecology/cancers" },
};

export default function GynaeCancersPage() {
    return (
        <main>
            <PageHero
                eyebrow="Gynaecological cancers"
                title="Gynaecological Cancers — Screening, Diagnosis & Care"
                description="Prevention, early detection and treatment planning for cancers of the cervix, womb, ovaries and vulva, and for breast cancer."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Gynaecology", href: "/gynaecology" },
                    { label: "Cancers" },
                ]}
                cta={{ label: "Book a consultation", href: "/contact" }}
                image="/images/hero/ovarian-cancer-hero.png"
                imageAlt="Women's cancer care at AMVI Hospitals, Hyderabad"
            />
            <ConditionHub content={gynaeCancersHub} />
            <ContactBanner />
        </main>
    );
}
