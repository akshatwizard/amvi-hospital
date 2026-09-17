import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/shared/page-hero";
import LocationAreaContent from "@/components/location-area/content";
import { locationAreas } from "@/constants/location-areas";

type Props = {
    params: Promise<{ area: string }>;
};

export function generateStaticParams() {
    return locationAreas.map((area) => ({ area: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { area: slug } = await params;
    const area = locationAreas.find((a) => a.slug === slug);
    if (!area) return {};

    return {
        title: `Fertility & Maternity Center near ${area.name}, Hyderabad | AMVI Hospitals`,
        description: `AMVI Hospitals serves ${area.name} and nearby areas with IVF, maternity, gynaecology and laparoscopic care from our ${area.nearestBranch} branch. Book a consultation today.`,
        alternates: { canonical: `/location/${area.slug}` },
    };
}

export default async function LocationAreaPage({ params }: Props) {
    const { area: slug } = await params;
    const area = locationAreas.find((a) => a.slug === slug);
    if (!area) notFound();

    return (
        <main>
            <PageHero
                eyebrow="Location"
                title={`AMVI Hospitals — Serving ${area.name}, Hyderabad`}
                description={`IVF, maternity, gynaecology and laparoscopic care for patients in and around ${area.name}, from our ${area.nearestBranch} branch.`}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Location" },
                    { label: area.name },
                ]}
                cta={{ label: "Book a consultation", href: "/contact" }}
            />
            <LocationAreaContent area={area} />
        </main>
    );
}
