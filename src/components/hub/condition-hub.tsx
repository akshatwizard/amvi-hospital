import Link from 'next/link'
import Image from 'next/image'
import { AlertCircle, ArrowUpRight } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import FaqAccordion from '@/shared/faq-accordion'
import type { FaqItem } from '@/types/condition-page'

// Shared layout for specialty overview pages (Urogynecology, Gynaecological cancers…):
// overview text + photo, links to each condition page, symptoms, approach steps and FAQs.
export type HubContent = {
    overviewHeading: string
    intro: string[]
    image: string
    imageAlt: string
    conditionsHeading: string
    conditions: { name: string; href: string; description: string }[]
    symptomsHeading: string
    symptomsLead: string
    symptoms: string[]
    approachHeading: string
    approach: { title: string; description: string }[]
    faqHeading: string
    faqs: FaqItem[]
}

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
    return (
        <span
            className={
                dark
                    ? 'inline-flex items-center gap-2 text-xs text-rose-200 bg-petal-white/10 rounded-full px-3.5 py-1.5 w-fit'
                    : 'inline-flex items-center gap-2 text-xs text-rose-700 bg-rose-50 rounded-full px-3.5 py-1.5 w-fit'
            }
        >
            {children}
        </span>
    )
}

export default function ConditionHub({ content: c }: { content: HubContent }) {
    return (
        <>
            {/* Overview */}
            <Section className='bg-petal-white'>
                <Wrapper>
                    <div className='grid md:grid-cols-2 gap-12 md:gap-16 items-center'>
                        <div className='min-w-0'>
                            <Reveal><Eyebrow>Overview</Eyebrow></Reveal>
                            <RevealText
                                as="h2"
                                text={c.overviewHeading}
                                className='font-serif text-3xl md:text-4xl text-plum-ink leading-[1.15] mt-4'
                                delay={0.1}
                            />
                            <div className='flex flex-col gap-4 mt-5'>
                                {c.intro.map((para, i) => (
                                    <Reveal key={i} delay={0.2 + i * 0.1}>
                                        <p className='text-warm-slate text-sm md:text-base leading-relaxed'>{para}</p>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                        <Reveal delay={0.15} className='relative w-full aspect-4/3 rounded-card overflow-hidden'>
                            <Image
                                src={c.image}
                                alt={c.imageAlt}
                                fill
                                sizes="(min-width: 768px) 480px, 90vw"
                                className='object-cover'
                            />
                        </Reveal>
                    </div>
                </Wrapper>
            </Section>

            {/* Conditions */}
            <Section className='bg-rose-50/40'>
                <Wrapper>
                    <div className='max-w-xl'>
                        <Reveal><Eyebrow>Conditions we treat</Eyebrow></Reveal>
                        <RevealText
                            as="h2"
                            text={c.conditionsHeading}
                            className='font-serif text-3xl md:text-4xl text-plum-ink leading-[1.15] mt-4'
                            delay={0.1}
                        />
                    </div>
                    <StaggerContainer className={`grid sm:grid-cols-2 ${c.conditions.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6 mt-10`}>
                        {c.conditions.map((item, i) => (
                            <StaggerItem key={item.href}>
                                <Link
                                    href={item.href}
                                    className='group flex flex-col rounded-card overflow-hidden bg-petal-white border border-rose-100 h-full hover:border-rose-300 transition-colors'
                                >
                                    <div className='p-6 flex flex-col gap-3 flex-1'>
                                        <span className='font-serif text-sm text-sage-500'>{String(i + 1).padStart(2, "0")}</span>
                                        <div className='flex items-center justify-between gap-2'>
                                            <h3 className='font-serif text-lg text-plum-ink'>{item.name}</h3>
                                            <ArrowUpRight size={18} aria-hidden="true" className='text-warm-slate group-hover:text-rose-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0' />
                                        </div>
                                        <p className='text-sm text-warm-slate leading-relaxed'>{item.description}</p>
                                    </div>
                                </Link>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </Wrapper>
            </Section>

            {/* Symptoms */}
            <Section className='bg-plum-ink'>
                <Wrapper>
                    <div className='max-w-xl'>
                        <Reveal><Eyebrow dark>When to see a doctor</Eyebrow></Reveal>
                        <RevealText
                            as="h2"
                            text={c.symptomsHeading}
                            className='font-serif text-3xl md:text-4xl text-petal-white leading-[1.15] mt-4'
                            delay={0.1}
                        />
                        <Reveal delay={0.2}>
                            <p className='text-rose-100/70 mt-4'>
                                {c.symptomsLead}
                            </p>
                        </Reveal>
                    </div>
                    <StaggerContainer className='grid md:grid-cols-2 gap-x-10 gap-y-2 mt-10'>
                        {c.symptoms.map((item) => (
                            <StaggerItem key={item} className='flex items-start gap-3 py-4 border-b border-petal-white/10'>
                                <AlertCircle size={18} aria-hidden="true" className='text-rose-300 shrink-0 mt-0.5' />
                                <p className='text-sm md:text-base text-rose-50/90 leading-relaxed'>{item}</p>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </Wrapper>
            </Section>

            {/* Approach */}
            <Section className='bg-petal-white'>
                <Wrapper>
                    <div className='max-w-xl'>
                        <Reveal><Eyebrow>How we treat</Eyebrow></Reveal>
                        <RevealText
                            as="h2"
                            text={c.approachHeading}
                            className='font-serif text-3xl md:text-4xl text-plum-ink leading-[1.15] mt-4'
                            delay={0.1}
                        />
                    </div>
                    <StaggerContainer className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
                        {c.approach.map((step, i) => (
                            <StaggerItem key={step.title}>
                                <div className='flex flex-col gap-3 p-6 rounded-card bg-rose-50/60 border border-rose-100 h-full'>
                                    <span className='font-serif text-sm text-sage-500'>{String(i + 1).padStart(2, "0")}</span>
                                    <h3 className='font-serif text-lg text-plum-ink'>{step.title}</h3>
                                    <p className='text-sm text-warm-slate leading-relaxed'>{step.description}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </Wrapper>
            </Section>

            {/* FAQs */}
            <Section className='bg-rose-50/40'>
                <Wrapper>
                    <div className='grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16'>
                        <div className='max-w-md'>
                            <Reveal><Eyebrow>FAQs</Eyebrow></Reveal>
                            <RevealText
                                as="h2"
                                text={c.faqHeading}
                                className='font-serif text-3xl md:text-4xl text-plum-ink leading-[1.15] mt-4'
                                delay={0.1}
                            />
                        </div>
                        <div className='min-w-0'>
                            <FaqAccordion items={c.faqs} />
                        </div>
                    </div>
                </Wrapper>
            </Section>
        </>
    )
}
