import type { Metadata } from "next"
import PageHero from "@/shared/page-hero"
import { Section, Wrapper } from "@/shared/sections"
import CertificateGrid from "@/components/certificates/certificate-grid"
import ContactBanner from "@/components/home/contact_banner"

export const metadata: Metadata = {
    title: "Certificates & Awards | Dr. Shaivalini Kamarapu | AMVI Hospitals",
    description:
        "Certifications of Dr. Shaivalini Kamarapu, AMVI Hospitals Hyderabad — robotic and endometriosis surgery (Kiel, Germany), advanced laparoscopy fellowship, IVF and clinical embryology, and cosmetic gynaecology.",
    alternates: { canonical: "/certificates" },
}

export default function CertificatesPage() {
    return (
        <main>
            <PageHero
                eyebrow="Certificates & awards"
                title="Training and certifications"
                description="Dr. Shaivalini Kamarapu's specialist training in robotic and laparoscopic surgery, IVF and embryology, and cosmetic gynaecology."
                breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Certificates" }]}
                cta={{ label: "Book a consultation", href: "/contact" }}
            />
            <Section className='bg-petal-white'>
                <Wrapper>
                    <CertificateGrid />
                </Wrapper>
            </Section>
            <ContactBanner />
        </main>
    )
}
