"use client"

import { Check } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import Counter from '@/shared/counter'
import ConditionSidebar from '@/shared/condition-sidebar'
import IconItemGrid from '@/shared/icon-item-grid'
import ComparisonTableView from '@/shared/comparison-table'
import FaqAccordion from '@/shared/faq-accordion'
import { stats } from '@/constants/stats'
import { infertilityConditionNav } from '@/constants/gynaecology-nav'
import {
    icsiIntro, icsiConditionsIntro, icsiConditions, icsiConditionsOutro,
    icsiVsIvfTable, icsiBeforeGroups, icsiProcess, icsiAfterCare,
    icsiTechnicalTable, icsiWarningSigns, icsiRisks, icsiFaqs,
} from '@/constants/icsi'

export default function IcsiContent() {
    return (
        <Section className='bg-petal-white'>
            <Wrapper className='grid lg:grid-cols-[240px_1fr] gap-12 lg:gap-16'>
                <ConditionSidebar links={infertilityConditionNav} category='Infertility' />

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

                    {/* Intro */}
                    <div>
                        <RevealText as="h2" text="What is ICSI and when is it recommended?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{icsiIntro}</p>
                        </Reveal>
                    </div>

                    {/* Conditions treated */}
                    <div>
                        <RevealText as="h2" text="ICSI for male infertility — Azoospermia, low sperm count & poor morphology" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-6'>{icsiConditionsIntro}</p>
                        </Reveal>
                        <StaggerContainer className='flex flex-col mb-6'>
                            {icsiConditions.map((item) => (
                                <StaggerItem key={item} className='flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0'>
                                    <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'>
                                        <Check size={12} strokeWidth={3} />
                                    </span>
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                        <Reveal delay={0.1}>
                            <p className='text-sm text-warm-slate leading-relaxed'>{icsiConditionsOutro}</p>
                        </Reveal>
                    </div>

                    {/* ICSI vs IVF */}
                    <div>
                        <RevealText as="h2" text="ICSI vs IVF — what is the difference?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                        <ComparisonTableView data={icsiVsIvfTable} />
                    </div>

                    {/* Before ICSI */}
                    <div>
                        <RevealText as="h2" text="What happens before ICSI?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <div className='grid md:grid-cols-2 gap-8'>
                            {icsiBeforeGroups.map((group) => (
                                <div key={group.heading}>
                                    <p className='font-serif text-base text-plum-ink mb-3'>{group.heading}</p>
                                    <StaggerContainer className='flex flex-col'>
                                        {group.items.map((item) => (
                                            <StaggerItem key={item} className='flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0'>
                                                <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'>
                                                    <Check size={12} strokeWidth={3} />
                                                </span>
                                                <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                            </StaggerItem>
                                        ))}
                                    </StaggerContainer>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Process */}
                    <div>
                        <RevealText as="h2" text="ICSI process at AMVI Hospitals — step by step" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <StaggerContainer className='flex flex-col'>
                            {icsiProcess.map((step, i) => (
                                <StaggerItem key={step.title} className='flex gap-5 py-5 border-b border-rose-100 last:border-0'>
                                    <span className='font-serif text-sm text-sage-500 shrink-0 w-6'>{String(i + 1).padStart(2, "0")}</span>
                                    <div>
                                        <p className='font-serif text-base text-plum-ink'>{step.title}</p>
                                        <p className='text-sm text-warm-slate leading-relaxed mt-1'>{step.description}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* After ICSI */}
                    <div>
                        <RevealText as="h2" text="What happens after ICSI at AMVI Hospital" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <IconItemGrid items={icsiAfterCare} />
                    </div>

                    {/* Technical comparison */}
                    <div>
                        <RevealText as="h2" text="ICSI vs IVF — additional technical differences" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                        <ComparisonTableView data={icsiTechnicalTable} />
                    </div>

                    {/* Warning signs */}
                    <div>
                        <RevealText as="h2" text="When to contact your doctor during ICSI treatment" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <StaggerContainer className='grid sm:grid-cols-2 gap-4'>
                            {icsiWarningSigns.map((item) => (
                                <StaggerItem key={item.title}>
                                    <div className='p-5 rounded-card bg-rose-50 border border-rose-200'>
                                        <p className='font-serif text-base text-plum-ink mb-1'>{item.title}</p>
                                        <p className='text-sm text-warm-slate leading-relaxed'>{item.description}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Risks */}
                    <div>
                        <RevealText as="h2" text="Risks associated with ICSI treatment" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <IconItemGrid items={icsiRisks} />
                    </div>

                    {/* FAQ */}
                    <div>
                        <RevealText as="h2" text="FAQs related to ICSI" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <FaqAccordion items={icsiFaqs} />
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}