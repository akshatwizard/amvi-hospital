"use client";

import React, { useRef } from 'react'
import { Section, Wrapper } from './sections'
import { cn } from '@/lib/utils'
import { motion, useScroll, useTransform } from "motion/react"

type Props = {
    children?: React.ReactNode
    className?: string
}

export default function HeroBg({ children, className }: Props) {
    const sectionRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    })

    // Left blob drifts further left as you scroll down
    const leftBlobX = useTransform(scrollYProgress, [0, 1], [0, -180])
    const leftBlobY = useTransform(scrollYProgress, [0, 1], [0, 80])

    // Right blob drifts further right as you scroll down
    const rightBlobX = useTransform(scrollYProgress, [0, 1], [0, 180])
    const rightBlobY = useTransform(scrollYProgress, [0, 1], [0, -60])

    // Glow moves slower than both (subtle depth layer)
    const glowY = useTransform(scrollYProgress, [0, 1], [0, 40])

    return (
        <Section
            ref={sectionRef}
            className={cn('relative min-h-[86svh] bg-lavender-blush-50 overflow-hidden [clip-path:ellipse(115%_92%_at_50%_0%)]', className)}
        >
            <div className='absolute left-1/2 -translate-x-1/2 h-full w-full max-w-screen-2xl pointer-events-none select-none overflow-hidden' aria-hidden='true'>

                {/* Primary blob (left) — ambient loop + scroll parallax pushing it further left */}
                <motion.div
                    initial={{ opacity: 0, x: -50, filter: "blur(12px)" }}
                    animate={{
                        opacity: 1,
                        filter: "blur(0px)",
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    style={{ x: leftBlobX, y: leftBlobY }}
                    className='absolute -left-60 -top-40 size-120 pointer-events-none select-none rounded-full border-100 border-lavender-blush-200/50'
                >
                    <motion.div
                        animate={{
                            x: [0, 24, -10, 0],
                            y: [0, -18, 12, 0],
                            scale: [1, 1.06, 0.97, 1],
                        }}
                        transition={{
                            x: { duration: 14, repeat: Infinity, ease: "easeInOut" },
                            y: { duration: 11, repeat: Infinity, ease: "easeInOut" },
                            scale: { duration: 9, repeat: Infinity, ease: "easeInOut" },
                        }}
                        className='size-full rounded-full'
                    />
                </motion.div>

                {/* Secondary blob (right) — ambient loop + scroll parallax pushing it further right */}
                <motion.div
                    initial={{ opacity: 0, x: 50, filter: "blur(12px)" }}
                    animate={{
                        opacity: 1,
                        filter: "blur(0px)",
                    }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }}
                    style={{ x: rightBlobX, y: rightBlobY }}
                    className='absolute -right-40 top-1/3 size-80 pointer-events-none select-none rounded-full border-60 border-lavender-blush-300/40'
                >
                    <motion.div
                        animate={{
                            x: [0, -30, 14, 0],
                            y: [0, 16, -10, 0],
                            scale: [1, 0.94, 1.05, 1],
                            rotate: [0, 8, -6, 0],
                        }}
                        transition={{
                            x: { duration: 16, repeat: Infinity, ease: "easeInOut" },
                            y: { duration: 13, repeat: Infinity, ease: "easeInOut" },
                            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                            rotate: { duration: 18, repeat: Infinity, ease: "easeInOut" },
                        }}
                        className='size-full rounded-full'
                    />
                </motion.div>

                {/* Subtle pulsing glow, faint and slow, with gentle scroll drift */}
                <motion.div
                    animate={{ opacity: [0.15, 0.35, 0.15], scale: [1, 1.1, 1] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    style={{ y: glowY }}
                    className='absolute left-1/3 top-1/4 size-140 rounded-full bg-lavender-blush-200/50 blur-3xl'
                />
            </div>
            <Wrapper className='relative w-full h-full'>
                {children}
            </Wrapper>
        </Section>
    )
}