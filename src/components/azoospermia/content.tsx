"use client"

import Image from 'next/image'
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
    azooIntro, azooSymptoms, azooObstructiveCauses, azooNonObstructiveCauses,
    azooDiagnosis, azooTreatments, azooSuccessNote, azooFaqs,
} from '@/constants/azoospermia'

function CheckList({ items }: { items: string[] }) {
    return (
        <StaggerContainer className='flex flex-col'>
            {items.map((item) => (
                <StaggerItem key={item} className='flex items-start gap-3 py-2.5'>
                    <span className='mt-1 shrink-0 size-1.5 rounded-full bg-current' />
                    <p className='text-sm leading-relaxed'>{item}</p>
                </StaggerItem>
            ))}
        </StaggerContainer>
    )
}

export default function AzoospermiaContent() {
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
                            <RevealText as="h2" text="What is azoospermia (zero sperm count)?" className='font-serif text-2xl md:text-3xl text-plum-ink' />
                            <div className='flex flex-col gap-4 mt-4'>
                                {azooIntro.map((p, i) => (
                                    <Reveal key={i} delay={0.1 + i * 0.1}>
                                        <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{p}</p>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                        <Reveal delay={0.15} className='relative w-full aspect-4/3 rounded-card overflow-hidden'>
                            <Image src="/images/infertility/azoospermia-overview.png" alt="Male fertility consultation" fill sizes="(min-width: 768px) 480px, 90vw" className='object-cover' />
                        </Reveal>
                    </div>

                    <div>
                        <RevealText as="h2" text="Symptoms of azoospermia" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <IconItemGrid items={azooSymptoms} />
                    </div>

                    <div>
                        <RevealText as="h2" text="Causes of azoospermia" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <div className='grid md:grid-cols-2 gap-6'>
                            <div className='p-6 md:p-7 rounded-card bg-plum-ink text-rose-100/80'>
                                <p className='font-serif text-lg text-petal-white mb-1'>Obstructive azoospermia</p>
                                <p className='text-sm text-rose-100/60 mb-4'>
                                    Sperm is produced normally but can&apos;t reach the semen due to a blockage.
                                </p>
                                <CheckList items={azooObstructiveCauses} />
                            </div>
                            <div className='p-6 md:p-7 rounded-card bg-sage-50 border border-sage-100 text-plum-ink'>
                                <p className='font-serif text-lg text-plum-ink mb-1'>Non-obstructive azoospermia</p>
                                <p className='text-sm text-warm-slate mb-4'>
                                    Caused by impaired sperm production or hormonal dysfunction.
                                </p>
                                <CheckList items={azooNonObstructiveCauses} />
                            </div>
                        </div>
                    </div>

                    <div>
                        <RevealText as="h2" text="Diagnosis of azoospermia" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <StaggerContainer className='flex flex-col'>
                            {azooDiagnosis.map((step, i) => (
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
                        <IconItemGrid items={azooTreatments} />
                    </div>

                    <Reveal>
                        <div className='p-6 md:p-8 rounded-card bg-rose-50 border border-rose-100'>
                            <p className='font-serif text-lg text-plum-ink mb-2'>What does treatment success look like?</p>
                            <p className='text-sm text-warm-slate leading-relaxed'>{azooSuccessNote}</p>
                        </div>
                    </Reveal>

                    <div>
                        <RevealText as="h2" text="FAQs related to azoospermia" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <FaqAccordion items={azooFaqs} />
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}