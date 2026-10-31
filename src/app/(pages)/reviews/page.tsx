import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, PenLine, Quote, Star } from "lucide-react";
import PageHero from "@/shared/page-hero";
import { Section, Wrapper } from "@/shared/sections";
import ContactBanner from "@/components/home/contact_banner";
import { testimonials } from "@/constants/testimonials";
import { googleReviewLinks } from "@/constants/social";

export const metadata: Metadata = {
    title: "Patient Reviews | AMVI Hospitals Hyderabad",
    description:
        "Read what patients say about IVF, fertility, maternity and gynaecology care at AMVI Hospitals, Hyderabad, and read or write a Google review for our Puppalaguda and Attapur branches.",
    alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
    return (
        <main>
            <PageHero
                eyebrow="Patient Guide"
                title="Patient Reviews"
                description="What families say about their care at AMVI Hospitals, and where to read or share a review on Google."
                breadcrumbs={[{ label: "Home", href: "/" }, { label: "Patient Guide", href: "/patient-guide" }, { label: "Reviews" }]}
            />
            <Section className='bg-petal-white'>
                <Wrapper>
                    <div className='grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-12 items-start'>
                        <div className='rounded-card bg-rose-700 text-petal-white p-7 md:p-8 flex flex-col gap-4'>
                            <div className='flex items-end gap-3'>
                                <span className='font-serif text-6xl md:text-7xl leading-none'>4.9</span>
                                <span className='flex gap-0.5 pb-2' aria-hidden="true">
                                    {[0, 1, 2, 3, 4].map((i) => <Star key={i} size={18} className='text-yellow-300' fill="currentColor" />)}
                                </span>
                            </div>
                            <p className='text-sm text-rose-100'>Average rating from 352 Google reviews</p>
                            <p className='text-sm text-rose-100/90 leading-relaxed'>
                                Had your treatment or delivery with us? Your review helps other families choose with confidence.
                            </p>
                        </div>
                        <div className='grid sm:grid-cols-2 gap-6'>
                            {googleReviewLinks.map((b) => (
                                <div key={b.branch} className='rounded-card border border-rose-100 bg-white p-6 flex flex-col gap-4'>
                                    <h2 className='font-serif text-xl text-plum-ink'>AMVI Hospitals, {b.branch}</h2>
                                    <a href={b.href} target="_blank" rel="noopener noreferrer" className='inline-flex items-center justify-center gap-2 rounded-full bg-rose-700 hover:bg-rose-800 text-petal-white text-sm px-5 py-2.5 transition-colors'>
                                        <Star size={15} aria-hidden="true" /> Read Google reviews
                                    </a>
                                    <a href={b.href} target="_blank" rel="noopener noreferrer" className='inline-flex items-center justify-center gap-2 rounded-full border border-rose-200 text-rose-700 hover:bg-rose-50 text-sm px-5 py-2.5 transition-colors'>
                                        <PenLine size={15} aria-hidden="true" /> Write a review
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </Wrapper>
            </Section>
            <Section className='bg-rose-50/40'>
                <Wrapper>
                    <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-4'>
                        <h2 className='font-serif text-2xl md:text-3xl text-plum-ink'>What our patients say</h2>
                        <Link href="/video-testimonials" className='inline-flex items-center gap-1.5 text-sm text-rose-700 hover:text-rose-800'>
                            Watch patient stories <ArrowUpRight size={16} aria-hidden="true" />
                        </Link>
                    </div>
                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                        {testimonials.map((t) => (
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
