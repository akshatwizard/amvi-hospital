"use client"

import { Section, Wrapper } from '@/shared/sections'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import FaqAccordion from '@/shared/faq-accordion'
import { laparoscopyFaqs } from '@/constants/laparoscopy-hub'

export default function LaparoscopyFaq() {
    return (
        <Section className='bg-petal-white'>
            <Wrapper className='max-w-3xl'>
                <div>
                    <Reveal>
                        <span className='inline-flex items-center gap-2 text-xs text-rose-700 bg-rose-50 rounded-full px-3.5 py-1.5 w-fit'>
                            Common questions
                        </span>
                    </Reveal>
                    <RevealText
                        as="h2"
                        text="FAQs about laparoscopic surgery"
                        className='font-serif text-3xl md:text-4xl text-plum-ink leading-[1.15] mt-4 mb-8'
                        delay={0.1}
                    />
                </div>
                <FaqAccordion items={laparoscopyFaqs} />
            </Wrapper>
        </Section>
    )
}
