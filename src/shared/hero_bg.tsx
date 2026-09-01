import React from 'react'
import { Section, Wrapper } from './sections'
import { cn } from '@/lib/utils'

type Props = {
    children?: React.ReactNode
    className?: string
}

export default function HeroBg({ children, className }: Props) {
    return (
        <Section
            className={cn('relative  min-h-[86svh] bg-lavender-blush-50/80 overflow-hidden [clip-path:ellipse(115%_92%_at_50%_0%)] ', className)}
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
