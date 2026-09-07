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
import { gynaecologyConditionNav } from '@/constants/gynaecology-nav'
import {
    amhIntro, amhLevels, amhCauses, amhSymptoms, amhPregnancyImpact, amhDiagnosis,
    amhTreatments, amhLifestyleTips, amhTestimonials, amhFaqs,
} from '@/constants/low-amh'

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

export default function LowAmhContent() {
    return (
        <Section className='bg-petal-white'>
            <Wrapper className='grid lg:grid-cols-[240px_1fr] gap-12 lg:gap-16'>
                <ConditionSidebar links={gynaecologyConditionNav} />

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
                            <RevealText as="h2" text="What is AMH?" className='font-serif text-2xl md:text-3xl text-plum-ink' />
                            <div className='flex flex-col gap-4 mt-4'>
                                {amhIntro.map((p, i) => (
                                    <Reveal key={i} delay={0.1 + i * 0.1}>
                                        <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{p}</p>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                        <Reveal delay={0.15} className='relative w-full aspect-4/3 rounded-card overflow-hidden'>
                            <Image src="/images/gynaecology/low-amh-overview.jpeg" alt="Low AMH consultation" fill sizes="(min-width: 768px) 480px, 90vw" className='object-cover' />
                        </Reveal>
                    </div>

                    <div className='grid sm:grid-cols-2 gap-6'>
                        <Reveal>
                            <div className='p-6 rounded-card bg-sage-50 border border-sage-100 h-full'>
                                <p className='font-serif text-base text-plum-ink mb-2'>Normal AMH range</p>
                                <p className='text-sm text-warm-slate leading-relaxed'>{amhLevels.normal}</p>
                            </div>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <div className='p-6 rounded-card bg-rose-50 border border-rose-100 h-full'>
                                <p className='font-serif text-base text-plum-ink mb-2'>Low AMH range</p>
                                <p className='text-sm text-warm-slate leading-relaxed'>{amhLevels.low}</p>
                            </div>
                        </Reveal>
                    </div>

                    <div>
                        <RevealText as="h2" text="Causes of low AMH" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <IconItemGrid items={amhCauses} />
                    </div>

                    <div>
                        <RevealText as="h2" text="Symptoms & signs of low AMH" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <CheckList items={amhSymptoms} />
                    </div>

                    <div>
                        <RevealText as="h2" text="Does low AMH affect pregnancy?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <CheckList items={amhPregnancyImpact} />
                    </div>

                    <div>
                        <RevealText as="h2" text="Diagnosis of low AMH" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <StaggerContainer className='flex flex-col'>
                            {amhDiagnosis.map((step, i) => (
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
                        <IconItemGrid items={amhTreatments} />
                    </div>

                    <div>
                        <RevealText as="h2" text="Lifestyle & care during treatment" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <CheckList items={amhLifestyleTips} />
                    </div>

                    <div>
                        <RevealText as="h2" text="Testimonials" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <StaggerContainer className='grid sm:grid-cols-2 gap-6'>
                            {amhTestimonials.map((t) => (
                                <StaggerItem key={t.name}>
                                    <div className='flex flex-col gap-4 p-6 rounded-card bg-rose-50/60 border border-rose-100 h-full'>
                                        <p className='text-sm text-warm-slate leading-relaxed'>&ldquo;{t.quote}&rdquo;</p>
                                        <p className='text-sm text-rose-700 mt-auto'>{t.name}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    <div>
                        <RevealText as="h2" text="FAQs related to low AMH" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <FaqAccordion items={amhFaqs} />
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}