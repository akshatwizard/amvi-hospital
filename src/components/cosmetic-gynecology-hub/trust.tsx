"use client"

import { Section, Wrapper } from '@/shared/sections'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import IconItemGrid from '@/shared/icon-item-grid'
import { cosmeticGynecologyTrust } from '@/constants/cosmetic-gynecology-hub'

export default function CosmeticGynecologyTrust() {
    return (
        <Section className='bg-petal-white'>
            <Wrapper>
                <div className='max-w-xl'>
                    <Reveal>
                        <span className='inline-flex items-center gap-2 text-xs text-rose-700 bg-rose-50 rounded-full px-3.5 py-1.5 w-fit'>
                            Why choose AMVI
                        </span>
                    </Reveal>
                    <RevealText
                        as="h2"
                        text="Care built around your privacy and comfort"
                        className='font-serif text-3xl md:text-4xl text-plum-ink leading-[1.15] mt-4 mb-8'
                        delay={0.1}
                    />
                </div>
                <IconItemGrid items={cosmeticGynecologyTrust} />
            </Wrapper>
        </Section>
    )
}
