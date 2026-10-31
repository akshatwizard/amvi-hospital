import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/shared/page-hero";
import { Section, Wrapper } from "@/shared/sections";
import ContactBanner from "@/components/home/contact_banner";
import { galleryPhotos } from "@/constants/media";

export const metadata: Metadata = {
    title: "Image Gallery | Hospital Facilities | AMVI Hospitals Hyderabad",
    description:
        "Take a look inside AMVI Hospitals, Hyderabad: reception, ultrasound room, laboratory, operation theatres, newborn care, private rooms and recovery ward.",
    alternates: { canonical: "/image-gallery" },
};

export default function ImageGalleryPage() {
    return (
        <main>
            <PageHero
                eyebrow="Patient Guide"
                title="Image Gallery"
                description="A look inside AMVI Hospitals: our reception, scanning room, laboratory, operation theatres, newborn care and patient rooms."
                breadcrumbs={[{ label: "Home", href: "/" }, { label: "Patient Guide", href: "/patient-guide" }, { label: "Image Gallery" }]}
                image="/images/gallery/reception-waiting-area-pharmacy.webp"
                imageAlt="Reception and waiting area at AMVI Hospitals"
            />
            <Section className='bg-petal-white'>
                <Wrapper>
                    <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
                        {galleryPhotos.map((p) => (
                            <figure key={p.src} className='flex flex-col gap-2'>
                                <a href={p.src} target="_blank" rel="noopener noreferrer" className='relative block w-full aspect-square rounded-card overflow-hidden bg-rose-50'>
                                    <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 33vw, 50vw" className='object-cover hover:scale-105 transition-transform duration-500' />
                                </a>
                                <figcaption className='text-xs md:text-sm text-warm-slate'>{p.caption}</figcaption>
                            </figure>
                        ))}
                    </div>
                </Wrapper>
            </Section>
            <ContactBanner />
        </main>
    );
}
