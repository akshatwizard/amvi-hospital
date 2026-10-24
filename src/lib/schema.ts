import { SITE_URL, SITE_NAME } from "@/lib/site"

// schema.org data describing the hospital and its two branches.
// Shown to Google on every page so it can connect the site to the
// Google Business Profiles and show branch details in search.
// No review/rating markup on purpose: Google does not allow businesses to
// mark up reviews about themselves.

const openingHours = [
    {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "18:00",
    },
]

// Values must come from schema.org's MedicalSpecialty list ("Fertility" is not one).
const medicalSpecialty = ["Gynecologic", "Obstetric", "Surgical", "Pediatric", "Radiography"]

export const hospitalSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo/amvi-logo.png`,
    email: "amvihospitals@gmail.com",
    medicalSpecialty,
    description:
        "Women's hospital in Hyderabad offering IVF and fertility treatment, maternity care, gynaecology, laparoscopic surgery and cosmetic gynaecology.",
    department: [
        {
            "@type": "MedicalClinic",
            "@id": `${SITE_URL}/#branch-puppalaguda`,
            name: `${SITE_NAME} — Puppalaguda`,
            url: SITE_URL,
            telephone: "+91-91000-09669",
            medicalSpecialty,
            openingHoursSpecification: openingHours,
            address: {
                "@type": "PostalAddress",
                streetAddress:
                    "Hallmark Empyrean Commercial Complex, Narsingi-Puppalaguda Main Road, opposite Sloka School",
                addressLocality: "Puppalaguda, Hyderabad",
                addressRegion: "Telangana",
                postalCode: "500089",
                addressCountry: "IN",
            },
        },
        {
            "@type": "MedicalClinic",
            "@id": `${SITE_URL}/#branch-attapur`,
            name: `${SITE_NAME} — Attapur`,
            url: SITE_URL,
            telephone: "+91-80088-42200",
            medicalSpecialty,
            openingHoursSpecification: openingHours,
            address: {
                "@type": "PostalAddress",
                streetAddress:
                    "Pillar No. 160, 3rd Floor, Survey No. 369, Plot No. 267/268, Rajendra Nagar Road",
                addressLocality: "Attapur, Hyderabad",
                addressRegion: "Telangana",
                postalCode: "500048",
                addressCountry: "IN",
            },
        },
    ],
}
