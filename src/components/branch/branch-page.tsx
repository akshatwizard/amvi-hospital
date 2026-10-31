import Link from 'next/link'
import { ArrowUpRight, Check, Clock, MapPin, Navigation, Phone, Star } from 'lucide-react'
import PageHero from '@/shared/page-hero'
import { Section, Wrapper } from '@/shared/sections'
import Reveal from '@/shared/reveal'
import RevealText from '@/shared/reveal_text'
import FaqAccordion from '@/shared/faq-accordion'
import JsonLd from '@/shared/json-ld'
import ContactBanner from '@/components/home/contact_banner'
import { SITE_URL } from '@/lib/site'
import { locations } from '@/constants/locations'
import { locationAreas } from '@/constants/location-areas'
import { googleReviewLinks } from '@/constants/social'
import { Branch, branchServices, careHighlights } from '@/constants/branches'

export default function BranchPage({ branch }: { branch: Branch }) {
    const loc = locations.find((l) => l.name === branch.name)!
    const reviews = googleReviewLinks.find((g) => g.branch === branch.name)
    const nearby = locationAreas.filter((a) => a.nearestBranch === branch.name)

    return (
        <main>
            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Locations", item: `${SITE_URL}/location` },
                    { "@type": "ListItem", position: 3, name: branch.name, item: `${SITE_URL}/location/${branch.slug}` },
                ],
            }} />
            <PageHero
                eyebrow={`AMVI Hospitals ${branch.name}`}
                title={branch.heading}
                description={branch.tagline}
                breadcrumbs={[{ label: "Home", href: "/" }, { label: "Locations", href: "/location" }, { label: branch.name }]}
                cta={{ label: "Book a consultation", href: "/contact" }}
            />

            {/* Intro + branch card */}
            <Section className='bg-petal-white'>
                <Wrapper className='grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-start'>
                    <div className='flex flex-col gap-4 min-w-0'>
                        <RevealText as="h2" text={`Women's fertility and maternity care in ${branch.name}`} className='font-serif text-3xl md:text-4xl text-plum-ink leading-[1.15]' />
                        {branch.intro.map((p, i) => (
                            <p key={i} className='text-sm md:text-base text-warm-slate leading-relaxed'>{p}</p>
                        ))}
                        <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{branch.servedAreasText}</p>
                    </div>
                    <Reveal>
                        <aside className='flex flex-col gap-4 rounded-card border border-rose-100 bg-white p-6'>
                            <p className='font-serif text-xl text-plum-ink'>AMVI Hospitals, {branch.name}</p>
                            <p className='flex items-start gap-2.5 text-sm text-warm-slate'><MapPin size={16} className='mt-0.5 shrink-0 text-rose-700' aria-hidden="true" />{loc.address}</p>
                            <p className='flex items-center gap-2.5 text-sm text-warm-slate'><Clock size={16} className='shrink-0 text-rose-700' aria-hidden="true" />Open 24/7 · Call us any time</p>
                            <a href={`tel:${loc.phoneHref}`} className='flex items-center gap-2.5 text-sm text-rose-700 hover:underline'><Phone size={16} className='shrink-0' aria-hidden="true" />{loc.phoneDisplay}</a>
                            <div className='flex flex-wrap gap-3 pt-2'>
                                <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer" className='inline-flex items-center gap-2 rounded-full bg-rose-700 hover:bg-rose-800 text-petal-white text-sm px-5 py-2.5 transition-colors'>
                                    <Navigation size={15} aria-hidden="true" /> Get directions
                                </a>
                                {reviews && (
                                    <a href={reviews.href} target="_blank" rel="noopener noreferrer" className='inline-flex items-center gap-2 rounded-full border border-rose-200 text-rose-700 hover:bg-rose-50 text-sm px-5 py-2.5 transition-colors'>
                                        <Star size={15} aria-hidden="true" /> Google reviews
                                    </a>
                                )}
                            </div>
                        </aside>
                    </Reveal>
                </Wrapper>
            </Section>

            {/* About + how we help */}
            <Section className='bg-rose-50/40'>
                <Wrapper className='grid md:grid-cols-2 gap-10 md:gap-16'>
                    <div className='flex flex-col gap-4 min-w-0'>
                        <h2 className='font-serif text-2xl md:text-3xl text-plum-ink'>{branch.aboutHeading}</h2>
                        <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{branch.aboutIntro}</p>
                        <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{branch.personalised}</p>
                        <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{branch.helpOutro}</p>
                    </div>
                    <div className='min-w-0'>
                        <h3 className='font-serif text-xl md:text-2xl text-plum-ink mb-4'>{branch.helpHeading}</h3>
                        <ul className='flex flex-col'>
                            {branch.help.map((item) => (
                                <li key={item} className='flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0'>
                                    <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'><Check size={12} strokeWidth={3} /></span>
                                    <span className='text-sm text-plum-ink leading-relaxed'>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Wrapper>
            </Section>

            {/* Services */}
            <Section className='bg-petal-white'>
                <Wrapper className='gap-8!'>
                    <h2 className='font-serif text-2xl md:text-3xl text-plum-ink'>Treatments available in {branch.name}</h2>
                    <ul className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3'>
                        {branchServices.map((s) => (
                            <li key={s.href}>
                                <Link href={s.href} className='group flex items-center justify-between gap-3 rounded-card border border-rose-100 bg-white hover:border-rose-300 px-5 py-4 transition-colors'>
                                    <span className='text-sm md:text-base text-plum-ink'>{s.name}</span>
                                    <ArrowUpRight size={16} className='shrink-0 text-rose-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform' aria-hidden="true" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Wrapper>
            </Section>

            {/* Doctor */}
            <Section className='bg-rose-50/40'>
                <Wrapper className='max-w-4xl! gap-4!'>
                    <span className='inline-flex items-center gap-2 text-xs text-rose-700 bg-petal-white rounded-full px-3.5 py-1.5 w-fit'>Dr. Shaivalini Kamarapu</span>
                    <h2 className='font-serif text-2xl md:text-3xl text-plum-ink'>{branch.doctorTitle}</h2>
                    {branch.doctor.map((p, i) => (
                        <p key={i} className='text-sm md:text-base text-warm-slate leading-relaxed'>{p}</p>
                    ))}
                    <Link href="/about/doctors" className='group inline-flex items-center gap-1.5 text-sm text-rose-700 w-fit mt-2'>
                        Meet our doctors <ArrowUpRight size={16} className='group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform' aria-hidden="true" />
                    </Link>
                </Wrapper>
            </Section>

            {/* Care highlights */}
            <Section className='bg-petal-white'>
                <Wrapper className='gap-8!'>
                    <h2 className='font-serif text-2xl md:text-3xl text-plum-ink'>Professional care you can trust</h2>
                    <ul className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                        {careHighlights.map((h) => (
                            <li key={h.title} className='rounded-card border border-rose-100 bg-white p-5'>
                                <p className='font-serif text-lg text-plum-ink'>{h.title}</p>
                                <p className='text-sm text-warm-slate leading-relaxed mt-1.5'>{h.text}</p>
                            </li>
                        ))}
                    </ul>
                </Wrapper>
            </Section>

            {/* Testimonials */}
            {branch.testimonials.length > 0 && (
                <Section className='bg-rose-50/40'>
                    <Wrapper className='gap-8!'>
                        <h2 className='font-serif text-2xl md:text-3xl text-plum-ink'>What patients in {branch.name} say</h2>
                        <ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {branch.testimonials.map((t) => (
                                <li key={t.name} className='flex flex-col gap-3 rounded-card border border-rose-100 bg-white p-5'>
                                    <p className='text-sm text-warm-slate leading-relaxed'>&ldquo;{t.quote}&rdquo;</p>
                                    <p className='text-sm text-plum-ink mt-auto'>{t.name}</p>
                                </li>
                            ))}
                        </ul>
                    </Wrapper>
                </Section>
            )}

            {/* Areas served */}
            {nearby.length > 0 && (
                <Section className='bg-petal-white'>
                    <Wrapper className='gap-6!'>
                        <h2 className='font-serif text-2xl md:text-3xl text-plum-ink'>Areas served from our {branch.name} branch</h2>
                        <ul className='flex flex-wrap gap-2.5'>
                            {nearby.map((a) => (
                                <li key={a.slug}>
                                    <Link href={`/location/${a.slug}`} className='inline-flex rounded-full border border-rose-200 px-4 py-2 text-sm text-plum-ink hover:bg-rose-50 transition-colors'>{a.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </Wrapper>
                </Section>
            )}

            {/* FAQs */}
            <Section className='bg-rose-50/40'>
                <Wrapper className='max-w-4xl! gap-6!'>
                    <h2 className='font-serif text-2xl md:text-3xl text-plum-ink'>Frequently asked questions — {branch.name}</h2>
                    <FaqAccordion items={branch.faqs} />
                </Wrapper>
            </Section>

            <ContactBanner />
        </main>
    )
}
