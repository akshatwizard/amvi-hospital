"use client"

import { Check, AlertTriangle } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import Counter from '@/shared/counter'
import ProcedureNav from '@/shared/procedure-nav'
import { stats } from '@/constants/stats'
import { laparoscopyNav } from '@/constants/laparoscopy-nav'
import {
    recanalizationIntro, fallopianTubesInfo, recanalizationBenefits,
    recanalizationPreOpTests, recanalizationRisks, recanalizationExpectedResults,
} from '@/constants/tubal-recanalization'

export default function TubalRecanalizationContent() {
    return (
        <Section className='bg-petal-white'>
            <Wrapper className='gap-16!'>
                <ProcedureNav links={laparoscopyNav} category='Laparoscopic Surgery' />

                <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-6'>
                    <Reveal>
                        <p className='text-xs text-warm-slate max-w-sm'>
                            Written &amp; medically reviewed by <span className='text-rose-700'>Dr. Shaivalini Kamarapu</span>
                            <br />
                            MBBS · MS (Obstetrics &amp; Gynaecology) · Fellowship in Reproductive Medicine · 20+ years of clinical experience
                        </p>
                    </Reveal>
                    <div className='flex gap-6'>
                        {stats.map((stat) => (
                            <div key={stat.label} className='text-center'>
                                <p className='font-serif text-xl text-rose-700'>
                                    <Counter value={stat.value} suffix={stat.suffix} />
                                </p>
                                <p className='text-[11px] text-warm-slate mt-0.5'>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='max-w-2xl'>
                    <RevealText as="h2" text="What is tubal recanalization?" className='font-serif text-2xl md:text-3xl text-plum-ink' />
                    <div className='flex flex-col gap-4 mt-4'>
                        {recanalizationIntro.map((p, i) => (
                            <Reveal key={i} delay={0.1 + i * 0.1}>
                                <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{p}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>

                <div className='max-w-2xl'>
                    <RevealText as="h2" text="What are fallopian tubes?" className='font-serif text-2xl md:text-3xl text-plum-ink' />
                    <div className='flex flex-col gap-4 mt-4'>
                        {fallopianTubesInfo.map((p, i) => (
                            <Reveal key={i} delay={0.1 + i * 0.1}>
                                <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{p}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>

                <div>
                    <RevealText as="h2" text="Benefits of tubal recanalization" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                    <StaggerContainer className='flex flex-wrap gap-2.5'>
                        {recanalizationBenefits.map((item) => (
                            <StaggerItem key={item}>
                                <span className='inline-flex items-center gap-2 text-sm text-plum-ink bg-sage-50 border border-sage-100 rounded-full px-4 py-2'>
                                    <Check size={13} className='text-sage-600' />
                                    {item}
                                </span>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

                <div>
                    <RevealText as="h2" text="Fertility workup before considering reversal" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                    <StaggerContainer className='grid sm:grid-cols-2 gap-4'>
                        {recanalizationPreOpTests.map((item) => (
                            <StaggerItem key={item}>
                                <div className='p-5 rounded-card bg-rose-50/60 border border-rose-100 h-full'>
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

                <div>
                    <RevealText as="h2" text="Risks to consider" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                    <StaggerContainer className='flex flex-col'>
                        {recanalizationRisks.map((item) => (
                            <StaggerItem key={item} className='flex items-start gap-3 py-3 border-b border-rose-100 last:border-0'>
                                <AlertTriangle size={15} className='text-rose-500 shrink-0 mt-0.5' />
                                <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

                <Reveal>
                    <div className='p-6 md:p-8 rounded-card bg-rose-50 border border-rose-100'>
                        <p className='font-serif text-lg text-plum-ink mb-2'>What results can you expect?</p>
                        <p className='text-sm text-warm-slate leading-relaxed'>{recanalizationExpectedResults}</p>
                    </div>
                </Reveal>
            </Wrapper>
        </Section>
    )
}