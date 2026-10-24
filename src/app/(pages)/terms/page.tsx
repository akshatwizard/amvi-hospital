import type { Metadata } from "next"
import LegalPage, { LegalSection } from "@/components/legal/legal-page"

// DRAFT — to be reviewed and approved by AMVI Hospitals before relying on it.

export const metadata: Metadata = {
    title: "Terms of Use | AMVI Hospitals",
    description: "Terms that apply when you use the AMVI Hospitals website.",
    alternates: { canonical: "/terms" },
}

const sections: LegalSection[] = [
    {
        heading: "Medical information disclaimer",
        paragraphs: [
            "The content on this website is for general information only. It is not medical advice and is not a substitute for consultation, diagnosis or treatment by a qualified doctor.",
            "Please do not ignore professional medical advice or delay seeking it because of something you read here. In a medical emergency, contact your nearest hospital or emergency services immediately.",
        ],
    },
    {
        heading: "No doctor–patient relationship",
        paragraphs: [
            "Using this website, submitting a form or sending a message does not by itself create a doctor–patient relationship. That begins only when you consult a doctor at AMVI Hospitals.",
        ],
    },
    {
        heading: "Appointments",
        paragraphs: [
            "Appointment requests made through the website are subject to doctor availability and are confirmed only when our team contacts you.",
        ],
    },
    {
        heading: "Treatment outcomes",
        paragraphs: [
            "Every patient is different. Any figures, timelines or experiences described on this website are general and do not guarantee a particular result for any individual.",
        ],
    },
    {
        heading: "Accuracy and changes",
        paragraphs: [
            "We try to keep the website accurate and up to date, but we do not guarantee that all information is complete or current. We may change the content of the website at any time.",
        ],
    },
    {
        heading: "Content ownership",
        paragraphs: [
            "The text, images, logo and design of this website belong to AMVI Hospitals or are used with permission. Please do not copy or reuse them without written consent.",
        ],
    },
    {
        heading: "Links to other websites",
        paragraphs: [
            "This website may link to other sites such as Google Maps or social media. We are not responsible for the content or privacy practices of those sites.",
        ],
    },
    {
        heading: "Governing law",
        paragraphs: [
            "These terms are governed by the laws of India.",
        ],
    },
    {
        heading: "Contact us",
        paragraphs: [
            "Questions about these terms can be sent to amvihospitals@gmail.com, or call Puppalaguda: +91 91000 09669 · Attapur: +91 80088 42200.",
        ],
    },
]

export default function TermsPage() {
    return (
        <LegalPage
            title="Terms of Use"
            updated="October 2026"
            intro="By using amvihospitals.com you agree to these terms. Please read them along with our Privacy Policy."
            sections={sections}
        />
    )
}
