"use client"

import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import Counter from '@/shared/counter'
import { stats } from '@/constants/stats'

export default function Stats() {
    return (
        <Section className='bg-linear-to-br from-rose-700 to-rose-950'>
            <Wrapper bare className='md:py-16 py-10'>
                <StaggerContainer className='grid grid-cols-1 md:grid-cols-3'>
                    {stats.map((stat, i) => (
                        <StaggerItem
                            key={stat.label}
                            className={
                                'flex flex-col items-center text-center gap-3 py-6 md:py-0 ' +
                                (i !== 0 ? 'md:border-l border-petal-white/20' : '')
                            }
                        >
                            <stat.icon size={32} strokeWidth={1.5} className='text-petal-white' />
                            <p className='font-serif text-4xl text-petal-white'>
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </p>
                            <p className='text-sm text-rose-100'>{stat.label}</p>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Wrapper>
        </Section>
    )
}