import { Metadata } from 'next'
import ContactPage from '@/components/contact/contact_page'
import PageHero from '@/shared/page-hero'

export const metadata: Metadata = {
    title: "Contact Us | AMVI Hospital",
    description: "Reach AMVI Hospital's Puppalaguda and Attapur branches for gynaecology, fertility and maternity care. Book a consultation or call us directly.",
    openGraph: {
        title: "Contact Us | AMVI Hospital",
        description: "Reach AMVI Hospital's Puppalaguda and Attapur branches for gynaecology, fertility and maternity care. Book a consultation or call us directly.",
        url: "https://amvihospitals.com/contact",
        siteName: "AMVI Hospital",
        type: "website",
    },
    alternates: {
        canonical: "https://amvihospitals.com/contact",
    },
}

export default function Contact() {
    return (
        <main>
            <PageHero
                eyebrow="Get in touch"
                title="Book a consultation"
                description="Fill out the form and our team will get back to you, or reach either branch directly using the details alongside."
                breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
                image="/images/hero/contact-hero.png"
                imageAlt="AMVI Hospital doctors and nursing staff"
            />
            <ContactPage />
        </main>
    )
}