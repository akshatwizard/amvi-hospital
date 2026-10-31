import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";
import PageHero from "@/shared/page-hero";
import { Section, Wrapper } from "@/shared/sections";
import VideoCard from "@/components/media/video-card";
import ContactBanner from "@/components/home/contact_banner";
import { testimonialVideos, YOUTUBE_CHANNEL } from "@/constants/media";
import { testimonials } from "@/constants/testimonials";

export const metadata: Metadata = {
    title: "Patient Video Testimonials | IVF & Birth Stories | AMVI Hospitals",
    description:
        "Real patient stories from AMVI Hospitals, Hyderabad: IVF success after years of trying, birth stories and families sharing their experience of fertility and maternity care.",
    alternates: { canonical: "/video-testimonials" },
};

export default function VideoTestimonialsPage() {
    return (
        <main>
            <PageHero
                eyebrow="Patient Guide"
                title="Patient Stories"
                description="Families share their journey with AMVI Hospitals, from years of trying to conceive to the day they met their baby."
                breadcrumbs={[{ label: "Home", href: "/" }, { label: "Patient Guide", href: "/patient-guide" }, { label: "Video Testimonials" }]}
            />
            <Section className='bg-petal-white'>
                <Wrapper>
                    <h2 className='font-serif text-2xl md:text-3xl text-plum-ink'>Video stories</h2>
                    <div className='grid sm:grid-cols-2 gap-x-6 gap-y-10 mt-6'>
                        {testimonialVideos.map((v) => <VideoCard key={v.id} video={v} />)}
                    </div>
                    <a href={YOUTUBE_CHANNEL} target="_blank" rel="noopener noreferrer" className='inline-flex items-center gap-2 rounded-full border border-rose-200 text-rose-700 hover:bg-rose-50 text-sm px-6 py-3 w-fit mt-10 transition-colors'>
                        More stories on our YouTube channel
                        <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                </Wrapper>
            </Section>
            <Section className='bg-rose-50/40'>
                <Wrapper>
                    <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-4'>
                        <h2 className='font-serif text-2xl md:text-3xl text-plum-ink'>What our patients say</h2>
                        <Link href="/reviews" className='inline-flex items-center gap-1.5 text-sm text-rose-700 hover:text-rose-800'>
                            All reviews <ArrowUpRight size={16} aria-hidden="true" />
                        </Link>
                    </div>
                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                        {testimonials.slice(0, 6).map((t) => (
                            <figure key={t.name} className='flex flex-col gap-4 rounded-card bg-petal-white border border-rose-100 p-6'>
                                <Quote size={22} className='text-rose-300' aria-hidden="true" />
                                <blockquote className='text-sm md:text-base text-plum-ink leading-relaxed'>{t.quote}</blockquote>
                                <figcaption className='mt-auto text-sm'>
                                    <span className='text-plum-ink font-medium'>{t.name}</span>
                                    <span className='text-warm-slate'> · {t.service}</span>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </Wrapper>
            </Section>
            <ContactBanner />
        </main>
    );
}
