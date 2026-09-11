"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import Counter from '@/shared/counter'
import ConditionSidebar from '@/shared/condition-sidebar'
import IconItemGrid from '@/shared/icon-item-grid'
import TreatmentOptionList from '@/shared/treatment-option-list'
import FaqAccordion from '@/shared/faq-accordion'
import { stats } from '@/constants/stats'
import { gynaecologyConditionNav } from '@/constants/gynaecology-nav'
import {
    pcosIntro, pcosQuickSymptoms, pcosSymptoms, pcosCauses,
    pcosPregnancyIntro, pcosPregnancyOptions, pcosPregnancyOutro,
    pcosDiagnosisIntro, pcosDiagnosisCriteria, pcosDiagnosisOutro,
    pcosTreatments, pcosTestimonials, pcosFaqs,
} from '@/constants/pcos'

export default function PcosContent() {
    return (
        <Section className='bg-petal-white'>
            <Wrapper className='grid lg:grid-cols-[240px_1fr] gap-12 lg:gap-16'>
                <ConditionSidebar links={gynaecologyConditionNav} category='Gynaecology' />

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

                    {/* What is PCOS */}
                    <div className='grid md:grid-cols-2 gap-10 items-center'>
                        <div>
                            <RevealText as="h2" text="What is PCOS?" className='font-serif text-2xl md:text-3xl text-plum-ink' />
                            <Reveal delay={0.1}>
                                <p className='text-sm md:text-base text-warm-slate leading-relaxed mt-4'>{pcosIntro[0]}</p>
                            </Reveal>
                            <Reveal delay={0.15}>
                                <p className='font-serif text-sm text-plum-ink mt-5 mb-2'>Common PCOS symptoms include:</p>
                            </Reveal>
                            <ul className='flex flex-col gap-1.5'>
                                {pcosQuickSymptoms.map((item) => (
                                    <li key={item} className='flex items-start gap-2'>
                                        <Check size={14} strokeWidth={3} className='text-rose-500 shrink-0 mt-1' />
                                        <span className='text-sm text-warm-slate'>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Reveal delay={0.2}>
                                <p className='text-sm md:text-base text-warm-slate leading-relaxed mt-5'>{pcosIntro[1]}</p>
                            </Reveal>
                        </div>
                        <Reveal delay={0.15} className='relative w-full aspect-4/3 rounded-card overflow-hidden'>
                            <Image src="/images/gynaecology/pcos-overview.jpeg" alt="PCOS diagram" fill sizes="(min-width: 768px) 480px, 90vw" className='object-cover' />
                        </Reveal>
                    </div>

                    {/* Common symptoms (detailed) */}
                    <div>
                        <RevealText as="h2" text="Common symptoms of PCOS" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <IconItemGrid items={pcosSymptoms} />
                    </div>

                    {/* Causes */}
                    <div>
                        <RevealText as="h2" text="Causes of PCOS" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <StaggerContainer className='grid md:grid-cols-2 gap-x-10 gap-y-1'>
                            {pcosCauses.map((item) => (
                                <StaggerItem key={item} className='flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0'>
                                    <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'>
                                        <Check size={12} strokeWidth={3} />
                                    </span>
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Can you get pregnant with PCOS */}
                    <div>
                        <RevealText as="h2" text="Can You Get Pregnant with PCOS?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{pcosPregnancyIntro}</p>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <p className='font-serif text-sm text-plum-ink mt-5 mb-2'>Treatment options for PCOS-related infertility include:</p>
                        </Reveal>
                        <ul className='flex flex-col gap-2'>
                            {pcosPregnancyOptions.map((opt) => (
                                <li key={opt.label} className='flex items-start gap-2'>
                                    <Check size={14} strokeWidth={3} className='text-rose-500 shrink-0 mt-1' />
                                    {opt.href ? (
                                        <Link href={opt.href} className='text-sm text-rose-700 hover:underline'>{opt.label}</Link>
                                    ) : (
                                        <span className='text-sm text-warm-slate'>{opt.label}</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <Reveal delay={0.15}>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mt-5'>{pcosPregnancyOutro}</p>
                        </Reveal>
                    </div>

                    {/* Diagnosis */}
                    <div>
                        <RevealText as="h2" text="Diagnosis of PCOS" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-8'>{pcosDiagnosisIntro}</p>
                        </Reveal>
                        <IconItemGrid items={pcosDiagnosisCriteria} />
                        <Reveal delay={0.1}>
                            <p className='text-sm text-warm-slate leading-relaxed mt-6'>{pcosDiagnosisOutro}</p>
                        </Reveal>
                    </div>

                    {/* Treatment options */}
                    <div>
                        <RevealText as="h2" text="PCOS Treatment Options — Hormonal, Lifestyle and Medical" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-4'>
                                The treatment of PCOS depends on the patient's symptoms, age, body weight, and fertility goals. At AMVI Hospital, PCOS management follows a stepwise, personalized approach, starting with lifestyle changes and progressing to advanced fertility treatments when required.
                            </p>
                        </Reveal>
                        <TreatmentOptionList options={pcosTreatments} />
                    </div>

                    {/* Testimonials */}
                    <div>
                        <RevealText as="h2" text="Testimonials" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <StaggerContainer className='grid sm:grid-cols-2 gap-6'>
                            {pcosTestimonials.map((t) => (
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
                        <RevealText as="h2" text="FAQs related to PCOS" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <FaqAccordion items={pcosFaqs} />
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}