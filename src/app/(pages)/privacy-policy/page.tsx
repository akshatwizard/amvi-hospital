import type { Metadata } from "next"
import LegalPage, { LegalSection } from "@/components/legal/legal-page"

// DRAFT — to be reviewed and approved by AMVI Hospitals before relying on it.

export const metadata: Metadata = {
    title: "Privacy Policy | AMVI Hospitals",
    description: "How AMVI Hospitals collects, uses and protects the information you share through this website.",
    alternates: { canonical: "/privacy-policy" },
}

const sections: LegalSection[] = [
    {
        heading: "Information we collect",
        paragraphs: [
            "When you fill in the appointment or enquiry form, we collect the details you choose to share: your name, phone number, the service you are interested in and your message.",
            "When you browse the website, basic technical information such as your browser type, device and pages visited may be collected automatically to help us understand how the site is used and to keep it secure.",
        ],
    },
    {
        heading: "How we use your information",
        paragraphs: [
            "We use the details you submit only to respond to your enquiry, arrange or confirm appointments, and contact you about the care you asked about.",
            "We do not sell or rent your personal information to anyone.",
        ],
    },
    {
        heading: "Health information",
        paragraphs: [
            "Please avoid sharing detailed medical history through the website form. Your doctor will discuss your health in person during consultation, where it is handled under medical confidentiality.",
        ],
    },
    {
        heading: "Sharing",
        paragraphs: [
            "Your information may be shared only with AMVI Hospitals staff who need it to respond to you, and with service providers who help us run the website or deliver messages, under confidentiality obligations. We may also disclose information where required by law.",
        ],
    },
    {
        heading: "Cookies and analytics",
        paragraphs: [
            "This website may use cookies and analytics tools to measure visits and improve the site. You can block or delete cookies through your browser settings; the website will still work.",
        ],
    },
    {
        heading: "Keeping your information secure",
        paragraphs: [
            "We take reasonable technical and organisational measures to protect the information you share. No method of transmission over the internet is completely secure, but we work to protect your data.",
        ],
    },
    {
        heading: "Your choices",
        paragraphs: [
            "You may ask us to update or delete the contact details you submitted through this website by writing to amvihospitals@gmail.com or calling either branch.",
        ],
    },
    {
        heading: "Contact us",
        paragraphs: [
            "AMVI Hospitals — Puppalaguda: +91 91000 09669 · Attapur: +91 80088 42200 · Email: amvihospitals@gmail.com",
            "We may update this policy from time to time. The latest version will always be on this page.",
        ],
    },
]

export default function PrivacyPolicyPage() {
    return (
        <LegalPage
            title="Privacy Policy"
            updated="October 2026"
            intro="AMVI Hospitals respects your privacy. This policy explains what information we collect through amvihospitals.com, why we collect it, and how we look after it."
            sections={sections}
        />
    )
}
