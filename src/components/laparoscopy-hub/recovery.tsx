"use client"

import { Section, Wrapper } from '@/shared/sections'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import ProcessSteps from '@/shared/process-steps'
import { laparoscopyRecovery } from '@/constants/laparoscopy-hub'

export default function LaparoscopyRecovery() {
    return (
        <Section className='bg-rose-50/40'>
            <Wrapper className='max-w-3xl'>
                <div>
                    <Reveal>
                        <span className='inline-flex items-center gap-2 text-xs text-rose-700 bg-rose-100 rounded-full px-3.5 py-1.5 w-fit'>
                            Recovery
                        </span>
                    </Reveal>
                    <RevealText
                        as="h2"
                        text="Recovery timeline after laparoscopic surgery"
                        className='font-serif text-3xl md:text-4xl text-plum-ink leading-[1.15] mt-4 mb-6'
                        delay={0.1}
                    />
                    <Reveal delay={0.2}>
                        <p className='text-warm-slate mb-4'>
                            Recovery at AMVI Hospitals is typically 2–5 days, compared to 4–6 weeks for open surgery. Your exact timeline depends on the procedure performed.
                        </p>
                    </Reveal>
                </div>
                <ProcessSteps steps={laparoscopyRecovery} />
            </Wrapper>
        </Section>
    )
}
