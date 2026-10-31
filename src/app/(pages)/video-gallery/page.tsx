import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/shared/page-hero";
import { Section, Wrapper } from "@/shared/sections";
import VideoCard from "@/components/media/video-card";
import ContactBanner from "@/components/home/contact_banner";
import { videoGroups, YOUTUBE_CHANNEL } from "@/constants/media";

export const metadata: Metadata = {
    title: "Video Gallery | Fertility & Pregnancy Videos | AMVI Hospitals",
    description:
        "Watch Dr. Shaivalini Kamarapu and the AMVI Hospitals team explain egg freezing, IVF, sperm health, normal delivery, pregnancy care and women's health, in English and Telugu.",
    alternates: { canonical: "/video-gallery" },
};

export default function VideoGalleryPage() {
    return (
        <main>
            <PageHero
                eyebrow="Patient Guide"
                title="Video Gallery"
                description="Short videos from our doctors on fertility, IVF, pregnancy and women's health, in English and Telugu."
                breadcrumbs={[{ label: "Home", href: "/" }, { label: "Patient Guide", href: "/patient-guide" }, { label: "Video Gallery" }]}
            />
            <Section className='bg-petal-white'>
                <Wrapper>
                    <div className='flex flex-col gap-14 md:gap-20'>
                        {videoGroups.map((group) => (
                            <div key={group.heading} className='flex flex-col gap-6'>
                                <h2 className='font-serif text-2xl md:text-3xl text-plum-ink'>{group.heading}</h2>
                                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10'>
                                    {group.videos.map((v) => <VideoCard key={v.id} video={v} />)}
                                </div>
                            </div>
                        ))}
                        <a href={YOUTUBE_CHANNEL} target="_blank" rel="noopener noreferrer" className='group inline-flex items-center gap-2 rounded-full border border-rose-200 text-rose-700 hover:bg-rose-50 text-sm px-6 py-3 w-fit transition-colors'>
                            More videos on our YouTube channel
                            <ArrowUpRight size={16} aria-hidden="true" />
                        </a>
                    </div>
                </Wrapper>
            </Section>
            <ContactBanner />
        </main>
    );
}
