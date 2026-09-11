"use client"

import Image from 'next/image'
import { Check } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import Counter from '@/shared/counter'
import ConditionSidebar from '@/shared/condition-sidebar'
import IconItemGrid from '@/shared/icon-item-grid'
import FaqAccordion from '@/shared/faq-accordion'
import { stats } from '@/constants/stats'
import { infertilityConditionNav } from '@/constants/gynaecology-nav'
import {
    oligoIntro, oligoWhoCanGetIt, oligoEffects, oligoTypes, oligoSymptoms, oligoCauses,
    oligoDiagnosis, oligoTreatments, oligoPrevention, oligoFaqs,
} from '@/constants/oligospermia'

function CheckList({ items }: { items: string[] }) {
    return (
        <StaggerContainer className='grid md:grid-cols-2 gap-x-10 gap-y-1'>
            {items.map((item) => (
                <StaggerItem key={item} className='flex items-start gap-3 py-3 border-b border-rose-100 last:border-0'>
                    <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'>
                        <Check size={12} strokeWidth={3} />
                    </span>
                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                </StaggerItem>
            ))}
        </StaggerContainer>
    )
}

export default function OligospermiaContent() {
    return (
        <Section className='bg-petal-white'>
            <Wrapper className='grid lg:grid-cols-[240px_1fr] gap-12 lg:gap-16'>
                <ConditionSidebar links={infertilityConditionNav} category='Infertility' />

                <div className='flex flex-col gap-20'>
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

                    <div className='grid md:grid-cols-2 gap-10 items-center'>
                        <div>
                            <RevealText as="h2" text="What is oligospermia (low sperm count)?" className='font-serif text-2xl md:text-3xl text-plum-ink' />
                            <div className='flex flex-col gap-4 mt-4'>
                                {oligoIntro.map((p, i) => (
                                    <Reveal key={i} delay={0.1 + i * 0.1}>
                                        <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{p}</p>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                        <Reveal delay={0.15} className='relative w-full aspect-4/3 rounded-card overflow-hidden'>
                            <Image src="/images/infertility/oligospermia-overview.png" alt="Male fertility consultation" fill sizes="(min-width: 768px) 480px, 90vw" className='object-cover' />
                        </Reveal>
                    </div>

                    <div>
                        <RevealText as="h2" text="Who can get oligospermia?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <CheckList items={oligoWhoCanGetIt} />
                    </div>

                    <div>
                        <RevealText as="h2" text="Effects on fertility" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <CheckList items={oligoEffects} />
                        <Reveal delay={0.2}>
                            <p className='text-sm text-warm-slate leading-relaxed mt-6 max-w-2xl'>
                                The degree of impact largely depends on how low the sperm count is, along with
                                overall sperm quality.
                            </p>
                        </Reveal>
                    </div>

                    <div>
                        <RevealText as="h2" text="Types of oligospermia" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <IconItemGrid items={oligoTypes} />
                    </div>

                    <div>
                        <RevealText as="h2" text="Symptoms of oligospermia" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <CheckList items={oligoSymptoms} />
                    </div>

                    <div>
                        <RevealText as="h2" text="Causes of oligospermia" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <IconItemGrid items={oligoCauses} />
                    </div>

                    <div>
                        <RevealText as="h2" text="Diagnosis of oligospermia" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <StaggerContainer className='flex flex-col'>
                            {oligoDiagnosis.map((step, i) => (
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

                    <div>
                        <RevealText as="h2" text="Treatment options" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <IconItemGrid items={oligoTreatments} />
                    </div>

                    <div>
                        <RevealText as="h2" text="How to help prevent oligospermia" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <CheckList items={oligoPrevention} />
                    </div>

                    <div>
                        <RevealText as="h2" text="FAQs related to low sperm count" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <FaqAccordion items={oligoFaqs} />
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}