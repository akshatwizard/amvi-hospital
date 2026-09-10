"use client"

import { Check, AlertTriangle, PhoneCall } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import Counter from '@/shared/counter'
import ProcedureNav from '@/shared/procedure-nav'
import { stats } from '@/constants/stats'
import { laparoscopyNav } from '@/constants/laparoscopy-nav'
import {
    hysteroscopyIntro, hysteroscopyIndications, hysteroscopyUses, hysteroscopyTechniques,
    hysteroscopyCommonEffects, hysteroscopyRisks, hysteroscopyWarningSigns,
} from '@/constants/operative-hysteroscopy'

export default function OperativeHysteroscopyContent() {
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
                    <RevealText as="h2" text="What is operative hysteroscopy?" className='font-serif text-2xl md:text-3xl text-plum-ink' />
                    <div className='flex flex-col gap-4 mt-4'>
                        {hysteroscopyIntro.map((p, i) => (
                            <Reveal key={i} delay={0.1 + i * 0.1}>
                                <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{p}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>

                <div>
                    <RevealText as="h2" text="When is hysteroscopy indicated?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                    <StaggerContainer className='flex flex-wrap gap-2.5'>
                        {hysteroscopyIndications.map((item) => (
                            <StaggerItem key={item}>
                                <span className='inline-block text-sm text-plum-ink bg-rose-50 border border-rose-100 rounded-full px-5 py-2.5'>
                                    {item}
                                </span>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

                <div>
                    <RevealText as="h2" text="Why is hysteroscopy carried out?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                    <StaggerContainer className='grid sm:grid-cols-2 gap-4'>
                        {hysteroscopyUses.map((item) => (
                            <StaggerItem key={item}>
                                <div className='p-5 rounded-card bg-rose-50/60 border border-rose-100 h-full'>
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

                <div>
                    <RevealText as="h2" text="Techniques used" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                    <StaggerContainer className='flex flex-col'>
                        {hysteroscopyTechniques.map((item) => (
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
                    <RevealText as="h2" text="What to expect afterward" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                    <StaggerContainer className='grid sm:grid-cols-2 gap-4'>
                        {hysteroscopyCommonEffects.map((item) => (
                            <StaggerItem key={item}>
                                <div className='flex items-start gap-2.5 p-5 rounded-card bg-sage-50 border border-sage-100 h-full'>
                                    <Check size={14} className='text-sage-600 shrink-0 mt-0.5' />
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

                <div>
                    <RevealText as="h2" text="Possible complications" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                    <StaggerContainer className='grid sm:grid-cols-2 gap-4'>
                        {hysteroscopyRisks.map((item) => (
                            <StaggerItem key={item}>
                                <div className='flex items-start gap-2.5 p-5 rounded-card bg-plum-ink h-full'>
                                    <AlertTriangle size={14} className='text-rose-300 shrink-0 mt-0.5' />
                                    <p className='text-sm text-rose-100/80 leading-relaxed'>{item}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

                <Reveal>
                    <div className='p-6 md:p-7 rounded-card bg-rose-50 border border-rose-100'>
                        <div className='flex items-center gap-2 mb-4'>
                            <PhoneCall size={18} className='text-rose-600' />
                            <p className='font-serif text-lg text-plum-ink'>Contact your doctor immediately if you notice</p>
                        </div>
                        <StaggerContainer className='flex flex-wrap gap-2.5'>
                            {hysteroscopyWarningSigns.map((item) => (
                                <StaggerItem key={item}>
                                    <span className='inline-block text-sm text-rose-800 bg-petal-white border border-rose-200 rounded-full px-4 py-2'>
                                        {item}
                                    </span>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </Reveal>
            </Wrapper>
        </Section>
    )
}