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
import { stats } from '@/constants/stats'
import { infertilityConditionNav } from '@/constants/gynaecology-nav'
import { casaIntro, semenAnalysisIntro, manualParameters, casaComparison, casaMeasurements } from '@/constants/casa'

export default function CasaContent() {
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
                            <RevealText as="h2" text="What is CASA?" className='font-serif text-2xl md:text-3xl text-plum-ink' />
                            <div className='flex flex-col gap-4 mt-4'>
                                {casaIntro.map((p, i) => (
                                    <Reveal key={i} delay={0.1 + i * 0.1}>
                                        <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{p}</p>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                        <Reveal delay={0.15} className='relative w-full aspect-4/3 rounded-card overflow-hidden'>
                            <Image src="/images/infertility/casa-overview.jpeg" alt="Computer assisted semen analysis lab" fill sizes="(min-width: 768px) 480px, 90vw" className='object-cover' />
                        </Reveal>
                    </div>

                    <div>
                        <RevealText as="h2" text="What is a semen analysis?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-8 max-w-2xl'>{semenAnalysisIntro}</p>
                        </Reveal>
                        <p className='font-serif text-lg text-plum-ink mb-4'>A standard manual analysis measures</p>
                        <StaggerContainer className='grid md:grid-cols-2 gap-x-10 gap-y-1'>
                            {manualParameters.map((item) => (
                                <StaggerItem key={item} className='flex items-start gap-3 py-3 border-b border-rose-100 last:border-0'>
                                    <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'>
                                        <Check size={12} strokeWidth={3} />
                                    </span>
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    <div>
                        <RevealText as="h2" text="Manual analysis vs. computer assisted analysis" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <div className='grid sm:grid-cols-2 gap-6'>
                            <Reveal>
                                <div className='p-6 rounded-card bg-plum-ink h-full'>
                                    <p className='font-serif text-base text-petal-white mb-2'>Manual analysis</p>
                                    <p className='text-sm text-rose-100/70 leading-relaxed'>{casaComparison.manual}</p>
                                </div>
                            </Reveal>
                            <Reveal delay={0.1}>
                                <div className='p-6 rounded-card bg-sage-50 border border-sage-100 h-full'>
                                    <p className='font-serif text-base text-plum-ink mb-2'>Computer assisted analysis</p>
                                    <p className='text-sm text-warm-slate leading-relaxed'>{casaComparison.computerised}</p>
                                </div>
                            </Reveal>
                        </div>
                    </div>

                    <div>
                        <RevealText as="h2" text="What CASA measures" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <IconItemGrid items={casaMeasurements} />
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}