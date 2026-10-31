import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Check, Info } from 'lucide-react'
import PageHero from '@/shared/page-hero'
import { Section, Wrapper } from '@/shared/sections'
import RevealText from '@/shared/reveal_text'
import FaqAccordion from '@/shared/faq-accordion'
import JsonLd from '@/shared/json-ld'
import ContactBanner from '@/components/home/contact_banner'
import { SITE_URL } from '@/lib/site'
import type { FaqItem } from '@/types/condition-page'

// Shared layout for treatment pages added in Batch 8 (endometriosis surgery,
// robotic surgery, PGT, stem cell therapy, paediatrics & NICU).
export type TreatmentSection = {
    heading: string
    paragraphs?: string[]
    bullets?: string[]
    items?: { title: string; text: string }[]
    image?: { src: string; alt: string }
    note?: string
}

export type TreatmentContent = {
    path: string
    eyebrow: string
    title: string
    description: string
    heroImage?: string
    heroImageAlt?: string
    breadcrumbs: { label: string; href?: string }[]
    reviewedBy?: string
    sections: TreatmentSection[]
    faqs: FaqItem[]
    related: { name: string; href: string }[]
}

function Bullets({ items }: { items: string[] }) {
    return (
        <ul className='flex flex-col'>
            {items.map((b) => (
                <li key={b} className='flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0'>
                    <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'>
                        <Check size={12} strokeWidth={3} aria-hidden="true" />
                    </span>
                    <span className='text-sm md:text-base text-plum-ink leading-relaxed'>{b}</span>
                </li>
            ))}
        </ul>
    )
}

export default function TreatmentPage({ content: c }: { content: TreatmentContent }) {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: c.breadcrumbs.map((b, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: b.label,
            ...(b.href || i === c.breadcrumbs.length - 1 ? { item: `${SITE_URL}${b.href ?? c.path}` } : {}),
        })),
    }
    return (
        <main>
            <JsonLd data={breadcrumbSchema} />
            <PageHero
                eyebrow={c.eyebrow}
                title={c.title}
                description={c.description}
                breadcrumbs={c.breadcrumbs}
                image={c.heroImage}
                imageAlt={c.heroImageAlt}
                cta={{ label: "Book a consultation", href: "/contact" }}
            />
            <Section className='bg-petal-white'>
                <Wrapper>
                    <div className='grid lg:grid-cols-[minmax(0,1fr)_18rem] gap-12 lg:gap-16'>
                        <article className='flex flex-col gap-12 min-w-0'>
                            {c.reviewedBy && (
                                <p className='text-xs md:text-sm text-warm-slate border-l-2 border-rose-300 pl-3'>{c.reviewedBy}</p>
                            )}
                            {c.sections.map((s) => (
                                <section key={s.heading} className='flex flex-col gap-4'>
                                    <RevealText as="h2" text={s.heading} className='font-serif text-2xl md:text-3xl text-plum-ink' />
                                    {s.paragraphs?.map((p, i) => (
                                        <p key={i} className='text-sm md:text-base text-warm-slate leading-relaxed'>{p}</p>
                                    ))}
                                    {s.image && (
                                        <div className='relative w-full max-w-xl aspect-4/3 rounded-card overflow-hidden bg-rose-50'>
                                            <Image src={s.image.src} alt={s.image.alt} fill sizes="(min-width: 768px) 576px, 90vw" className='object-cover' />
                                        </div>
                                    )}
                                    {s.bullets && <Bullets items={s.bullets} />}
                                    {s.items && (
                                        <div className='grid sm:grid-cols-2 gap-4'>
                                            {s.items.map((it) => (
                                                <div key={it.title} className='flex flex-col gap-2 rounded-card border border-rose-100 bg-white p-5'>
                                                    <h3 className='font-serif text-lg text-plum-ink'>{it.title}</h3>
                                                    <p className='text-sm text-warm-slate leading-relaxed'>{it.text}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    {s.note && (
                                        <p className='flex items-start gap-3 rounded-card bg-rose-50 border border-rose-100 p-4 text-sm text-plum-ink leading-relaxed'>
                                            <Info size={18} className='shrink-0 mt-0.5 text-rose-700' aria-hidden="true" />
                                            <span>{s.note}</span>
                                        </p>
                                    )}
                                </section>
                            ))}
                            {c.faqs.length > 0 && (
                                <section className='flex flex-col gap-4'>
                                    <RevealText as="h2" text="Frequently asked questions" className='font-serif text-2xl md:text-3xl text-plum-ink' />
                                    <FaqAccordion items={c.faqs} />
                                </section>
                            )}
                        </article>
                        <aside className='lg:sticky lg:top-24 self-start flex flex-col gap-3 rounded-card border border-rose-100 bg-rose-50/50 p-6'>
                            <p className='text-xs uppercase tracking-wider text-rose-700'>Related care</p>
                            {c.related.map((r) => (
                                <Link key={r.href} href={r.href} className='group flex items-center justify-between gap-3 text-sm text-plum-ink hover:text-rose-700 py-1.5'>
                                    {r.name}
                                    <ArrowUpRight size={15} aria-hidden="true" className='shrink-0 text-warm-slate group-hover:text-rose-700' />
                                </Link>
                            ))}
                        </aside>
                    </div>
                </Wrapper>
            </Section>
            <ContactBanner />
        </main>
    )
}
