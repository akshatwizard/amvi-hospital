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
import { infertilityConditionNav } from '@/constants/gynaecology-nav'
import {
    ivfIntro, ivfAdvantages, ivfCandidateIntro, ivfCandidateReasons, ivfCandidateOutro,
    ivfProcess, ivfSuccessRates, ivfCost, ivfRecommendedCases, ivfTestimonials, ivfFaqs,
} from '@/constants/ivf'

export default function IvfContent() {
    return (
        <Section className='bg-petal-white'>
            <Wrapper className='grid lg:grid-cols-[240px_1fr] gap-12 lg:gap-16'>
                <ConditionSidebar links={infertilityConditionNav} category='Infertility'/>

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
                        <RevealText as="h2" text="What is IVF treatment and how does it work?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <div className='flex flex-col gap-4'>
                            {ivfIntro.map((p, i) => (
                                <Reveal key={i} delay={i * 0.1}>
                                    <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{p}</p>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    {/* Advantages */}
                    <div>
                        <RevealText as="h2" text="Advantages of IVF" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <IconItemGrid items={ivfAdvantages} />
                    </div>

                    {/* Candidate */}
                    <div>
                        <RevealText as="h2" text="Who is a candidate for IVF in Hyderabad?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-8'>{ivfCandidateIntro}</p>
                        </Reveal>
                        <StaggerContainer className='grid md:grid-cols-2 gap-x-10 gap-y-1'>
                            {ivfCandidateReasons.map((item) => (
                                <StaggerItem key={item} className='flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0'>
                                    <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'>
                                        <Check size={12} strokeWidth={3} />
                                    </span>
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                        <Reveal delay={0.1}>
                            <p className='text-sm text-warm-slate leading-relaxed mt-6'>{ivfCandidateOutro}</p>
                        </Reveal>
                    </div>

                    {/* Process */}
                    <div>
                        <RevealText as="h2" text="IVF process step by step at AMVI Hospitals" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <ProcessSteps steps={ivfProcess} />
                    </div>

                    {/* Success rates */}
                    <div>
                        <RevealText as="h2" text="IVF success rates at AMVI Hospitals" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <div className='flex flex-col gap-4'>
                            {ivfSuccessRates.map((p, i) => (
                                <Reveal key={i} delay={i * 0.1}>
                                    <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{p}</p>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    {/* Cost */}
                    <div>
                        <RevealText as="h2" text="IVF treatment cost in Hyderabad — what's included?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <div className='flex flex-col gap-4'>
                            {ivfCost.map((p, i) => (
                                <Reveal key={i} delay={i * 0.1}>
                                    <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{p}</p>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    {/* Recommended cases */}
                    <div>
                        <RevealText as="h2" text="In which cases is IVF recommended?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <IconItemGrid items={ivfRecommendedCases} />
                    </div>

                    {/* Testimonials */}
                    <div>
                        <RevealText as="h2" text="Testimonials" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <StaggerContainer className='grid sm:grid-cols-2 gap-6'>
                            {ivfTestimonials.map((t) => (
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
                        <RevealText as="h2" text="FAQs related to IVF" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <FaqAccordion items={ivfFaqs} />
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}