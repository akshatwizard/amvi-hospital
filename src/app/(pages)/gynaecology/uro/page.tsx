import type { Metadata } from "next";
import PageHero from "@/shared/page-hero";
import UrogynecologyHub from "@/components/urogynecology/hub";
import ContactBanner from "@/components/home/contact_banner";

export const metadata: Metadata = {
    title: "Urogynecology & Pelvic Floor Care in Hyderabad | AMVI Hospitals",
    description:
        "Urogynecology care in Hyderabad for prolapse, urinary incontinence and pelvic floor problems: assessment, non-surgical options, pelvic reconstruction and cystoscopy.",
    alternates: { canonical: "/gynaecology/uro" },
};

export default function UrogynecologyPage() {
    return (
        <main>
            <PageHero
                eyebrow="Urogynecology"
                title="Urogynecology — Pelvic Floor Care for Women"
                description="Help for leaking urine, prolapse and other pelvic floor problems, from a private first consultation to non-surgical treatment and surgery when it is needed."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Gynaecology", href: "/gynaecology" },
                    { label: "Urogynecology" },
                ]}
                cta={{ label: "Book a consultation", href: "/contact" }}
                image="/images/hero/pelvic-reconstruction-hero.png"
                imageAlt="Pelvic floor care at AMVI Hospitals, Hyderabad"
            />
            <UrogynecologyHub />
            <ContactBanner />
        </main>
    );
}
