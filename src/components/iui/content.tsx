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
    iuiIntro, iuiVsIvfTable, iuiTypesIntro, iuiTypes, iuiCandidates, iuiNotRecommendedNote,
    iuiBeneficiaryGroups, iuiFemaleProcess, iuiMaleProcess,
    iuiSemenWashingIntro, iuiSemenWashingSteps, iuiSemenWashingOutro,
    iuiInseminationProcess, iuiMedications, iuiEffectivenessIntro, iuiEffectivenessFactors,
    iuiTestimonials, iuiFaqs,
} from '@/constants/iui'

function CheckList({ items }: { items: string[] }) {
    return (
        <StaggerContainer className='flex flex-col'>
            {items.map((item) => (
                <StaggerItem key={item} className='flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0'>
                    <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'>
                        <Check size={12} strokeWidth={3} />
                    </span>
                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                </StaggerItem>
            ))}
        </StaggerContainer>
    )
}

export default function IuiContent() {
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
                        <RevealText as="h2" text="What is IUI treatment and how does it work?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <div className='flex flex-col gap-4'>
                            {iuiIntro.map((p, i) => (
                                <Reveal key={i} delay={i * 0.1}>
                                    <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{p}</p>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    {/* IUI vs IVF */}
                    <div>
                        <RevealText as="h2" text="IUI vs IVF — key differences and which to choose" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                        <ComparisonTableView data={iuiVsIvfTable} />
                    </div>

                    {/* Types */}
                    <div>
                        <RevealText as="h2" text="Types of IUI" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-8'>{iuiTypesIntro}</p>
                        </Reveal>
                        <div className='grid md:grid-cols-2 gap-8'>
                            {iuiTypes.map((group) => (
                                <div key={group.heading}>
                                    <p className='font-serif text-base text-plum-ink mb-3'>{group.heading}</p>
                                    <CheckList items={group.items} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Who should consider */}
                    <div>
                        <RevealText as="h2" text="Who should consider IUI treatment?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                        <CheckList items={iuiCandidates} />
                        <Reveal delay={0.1}>
                            <p className='text-sm text-warm-slate leading-relaxed mt-6'>{iuiNotRecommendedNote}</p>
                        </Reveal>
                    </div>

                    {/* Who can benefit */}
                    <div>
                        <RevealText as="h2" text="Who can benefit from IUI?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <div className='grid md:grid-cols-3 gap-8'>
                            {iuiBeneficiaryGroups.map((group) => (
                                <div key={group.heading}>
                                    <p className='font-serif text-base text-plum-ink mb-3'>{group.heading}</p>
                                    <CheckList items={group.items} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Process */}
                    <div>
                        <RevealText as="h2" text="IUI treatment process — step by step" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />

                        <p className='font-serif text-lg text-plum-ink mb-4'>For the female partner</p>
                        <CheckList items={iuiFemaleProcess} />

                        <p className='font-serif text-lg text-plum-ink mb-4 mt-8'>For the male partner</p>
                        <CheckList items={iuiMaleProcess} />

                        <p className='font-serif text-lg text-plum-ink mb-4 mt-8'>Laboratory process — semen washing</p>
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-4'>{iuiSemenWashingIntro}</p>
                        </Reveal>
                        <CheckList items={iuiSemenWashingSteps} />
                        <Reveal delay={0.1}>
                            <p className='text-sm text-warm-slate leading-relaxed mt-4'>{iuiSemenWashingOutro}</p>
                        </Reveal>
                    </div>

                    {/* Insemination */}
                    <div>
                        <RevealText as="h2" text="How is insemination done?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{iuiInseminationProcess}</p>
                        </Reveal>
                    </div>

                    {/* Medications */}
                    <div>
                        <RevealText as="h2" text="Medications used during IUI treatment" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <StaggerContainer className='flex flex-col'>
                            {iuiMedications.map((med) => (
                                <StaggerItem key={med.title} className='flex gap-5 py-5 border-b border-rose-100 last:border-0'>
                                    <div>
                                        <p className='font-serif text-base text-plum-ink'>{med.title}</p>
                                        <p className='text-sm text-warm-slate leading-relaxed mt-1'>{med.description}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Effectiveness */}
                    <div>
                        <RevealText as="h2" text="How effective is IUI in getting pregnant?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-8'>{iuiEffectivenessIntro}</p>
                        </Reveal>
                        <IconItemGrid items={iuiEffectivenessFactors} />
                    </div>

                    {/* Testimonials */}
                    <div>
                        <RevealText as="h2" text="Testimonials" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <StaggerContainer className='grid sm:grid-cols-2 gap-6'>
                            {iuiTestimonials.map((t) => (
                                <StaggerItem key={t.name}>
                                    <div className='flex flex-col gap-4 p-6 rounded-card bg-rose-50/60 border border-rose-100 h-full'>
                                        <p className='text-sm text-warm-slate leading-relaxed'>&ldquo;{t.quote}&rdquo;</p>
                                        <p className='text-sm text-rose-700 mt-auto'>{t.name}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* FAQ */}
                    <div>
                        <RevealText as="h2" text="FAQs related to IUI" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <FaqAccordion items={iuiFaqs} />
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}