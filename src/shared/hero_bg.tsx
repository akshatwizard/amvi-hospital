import React from 'react'
import { Section, Wrapper } from './sections'

export default function HeroBg({ children }: { children?: React.ReactNode }) {
    return (
        <Section
            className='relative h-[110svh] bg-lavender-blush-50 overflow-hidden [clip-path:ellipse(100%_100%_at_50%_0%)]'
        >
            <div className='absolute left-1/2 -translate-x-1/2 h-full w-full max-w-screen-2xl pointer-events-none select-none overflow-hidden' aria-hidden='true'>
                <div
                    className='absolute -left-60 -top-40 size-120 pointer-events-none select-none rounded-full border-100 border-lavender-blush-100'
                />
            </div>
            <Wrapper className='relative w-full h-full'>
                {children}
            </Wrapper>
        </Section >
    )
}
