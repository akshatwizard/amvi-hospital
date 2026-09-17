"use client"

import { Check } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import Counter from '@/shared/counter'
import ConditionSidebar from '@/shared/condition-sidebar'
import IconItemGrid from '@/shared/icon-item-grid'
import ProcessSteps from '@/shared/process-steps'
import FaqAccordion from '@/shared/faq-accordion'
import { stats } from '@/constants/stats'
import {
    fertilityPreservationIntro, fertilityPreservationOptions, fertilityPreservationWhoFor,
    fertilityPreservationProcess, fertilityPreservationFaqs, fertilityPreservationNav,
} from '@/constants/fertility-preservation'

export default function FertilityPreservationContent() {
    return (
        <Section className='bg-petal-white'>
            <Wrapper className='grid lg:grid-cols-[240px_1fr] gap-12 lg:gap-16'>
                <ConditionSidebar links={fertilityPreservationNav} category='Fertility' />

                <div className='flex flex-col gap-20'>
                    {/* Author byline + stats */}
                    <div>
                        <Reveal>
                            <p className='text-xs text-warm-slate'>
                                Written &amp; medically reviewed by <span className='text-rose-700'>Dr. Shaivalini Kamarapu</span>
                                <br />
                                MBBS · MS (Obstetrics &amp; Gynaecology) · Fellowship in Reproductive Medicine · 20+ years of clinical experience
                            </p>
                        </Reveal>
                        <StaggerContainer className='grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-rose-100 max-w-md'>
                            {stats.map((stat) => (
                                <StaggerItem key={stat.label}>
                                    <p className='font-serif text-xl md:text-2xl text-rose-700'>
                                        <Counter value={stat.value} suffix={stat.suffix} />
                                    </p>
                                    <p className='text-xs text-warm-slate mt-1'>{stat.label}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* What is fertility preservation */}
                    <div>
                        <RevealText as="h2" text="What is fertility preservation?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <div className='flex flex-col gap-4 max-w-2xl'>
                            {fertilityPreservationIntro.map((p, i) => (
                                <Reveal key={i} delay={0.1 + i * 0.1}>
                                    <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{p}</p>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    {/* Your options */}
                    <div>
                        <RevealText as="h2" text="Your fertility preservation options" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <IconItemGrid items={fertilityPreservationOptions} />
                    </div>

                    {/* Who should consider it */}
                    <div>
                        <RevealText as="h2" text="Who should consider fertility preservation?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <StaggerContainer className='flex flex-col'>
                            {fertilityPreservationWhoFor.map((item) => (
                                <StaggerItem key={item} className='flex items-start gap-3 py-3 border-b border-rose-100 last:border-0'>
                                    <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'>
                                        <Check size={12} strokeWidth={3} />
                                    </span>
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* The process */}
                    <div>
                        <RevealText as="h2" text="The egg &amp; embryo freezing process" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <ProcessSteps steps={fertilityPreservationProcess} />
                    </div>

                    {/* FAQ */}
                    <div>
                        <RevealText as="h2" text="FAQs about fertility preservation" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <FaqAccordion items={fertilityPreservationFaqs} />
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
