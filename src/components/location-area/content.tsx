"use client"

import Link from 'next/link'
import { MapPin, Phone, Check } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import Counter from '@/shared/counter'
import FaqAccordion from '@/shared/faq-accordion'
import { stats } from '@/constants/stats'
import { locations } from '@/constants/locations'
import { LocationArea } from '@/types/location-area'

export default function LocationAreaContent({ area }: { area: LocationArea }) {
    const branch = locations.find((l) => l.name === area.nearestBranch)!

    return (
        <>
            <Section className='bg-petal-white'>
                <Wrapper>
                    <div className='max-w-2xl'>
                        <Reveal>
                            <span className='inline-flex items-center gap-2 text-xs text-rose-700 bg-rose-50 rounded-full px-3.5 py-1.5 w-fit'>
                                Serving {area.name}
                            </span>
                        </Reveal>
                        <RevealText
                            as="h2"
                            text={`Women's healthcare for ${area.name}, Hyderabad`}
                            className='font-serif text-3xl md:text-4xl text-plum-ink leading-[1.15] mt-4'
                            delay={0.1}
                        />
                        <Reveal delay={0.15}>
                            <p className='text-warm-slate text-sm md:text-base leading-relaxed mt-5'>{area.intro}</p>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <div className='flex flex-col gap-2 mt-6 p-5 rounded-card bg-rose-50/60 border border-rose-100 w-fit'>
                                <p className='font-serif text-base text-plum-ink flex items-center gap-2'>
                                    <MapPin size={16} className='text-rose-600' /> Nearest branch: {branch.name}
                                </p>
                                <p className='text-sm text-warm-slate'>{branch.address}</p>
                                <Link href={`tel:${branch.phoneHref}`} className='text-sm text-rose-700 flex items-center gap-2 mt-1 hover:underline'>
                                    <Phone size={14} /> {branch.phoneDisplay}
                                </Link>
                            </div>
                        </Reveal>

                        <StaggerContainer className='grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-rose-100 max-w-md'>
                            {stats.map((stat) => (
                                <StaggerItem key={stat.label}>
                                    <p className='font-serif text-2xl md:text-3xl text-rose-700'>
                                        <Counter value={stat.value} suffix={stat.suffix} />
                                    </p>
                                    <p className='text-xs text-warm-slate mt-1'>{stat.label}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </Wrapper>
            </Section>

            <Section className='bg-rose-50/40'>
                <Wrapper>
                    <div className='grid md:grid-cols-2 gap-12'>
                        <div>
                            <RevealText as="h2" text="What we treat" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                            <StaggerContainer className='flex flex-col'>
                                {area.highlightServices.map((service) => (
                                    <StaggerItem key={service} className='flex items-start gap-3 py-3 border-b border-rose-100 last:border-0'>
                                        <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'>
                                            <Check size={12} strokeWidth={3} />
                                        </span>
                                        <p className='text-sm text-plum-ink leading-relaxed'>{service}</p>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>
                        <div>
                            <RevealText as="h2" text="Also close by" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                            <Reveal delay={0.1}>
                                <p className='text-sm text-warm-slate leading-relaxed mb-4'>
                                    We also see patients travelling from:
                                </p>
                            </Reveal>
                            <StaggerContainer className='flex flex-wrap gap-2'>
                                {area.nearbyLocalities.map((loc) => (
                                    <StaggerItem key={loc}>
                                        <span className='inline-flex text-sm text-rose-700 bg-petal-white border border-rose-100 rounded-full px-4 py-2'>
                                            {loc}
                                        </span>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>
                    </div>
                </Wrapper>
            </Section>

            <Section className='bg-petal-white'>
                <Wrapper className='max-w-2xl'>
                    <RevealText as="h2" text="What patients say" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                    <Reveal delay={0.1}>
                        <div className='flex flex-col gap-4 p-6 rounded-card bg-rose-50/60 border border-rose-100'>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed'>&ldquo;{area.testimonial.quote}&rdquo;</p>
                            <p className='text-sm text-rose-700'>{area.testimonial.name}</p>
                        </div>
                    </Reveal>
                </Wrapper>
            </Section>

            <Section className='bg-rose-50/40'>
                <Wrapper className='max-w-3xl'>
                    <RevealText as="h2" text={`FAQs for patients near ${area.name}`} className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                    <FaqAccordion items={area.faqs} />
                </Wrapper>
            </Section>
        </>
    )
}
