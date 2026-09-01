"use client";

import React, { useRef } from 'react'
import { Section, Wrapper } from './sections'
import { cn } from '@/lib/utils'
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react"

type Props = {
    children?: React.ReactNode
    className?: string
    variant?: "full" | "compact"
}

export default function HeroBg({ children, className, variant = "full" }: Props) {
    const sectionRef = useRef<HTMLDivElement>(null)
    const reduced = useReducedMotion()

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    })

    const parallaxRange = variant === "full" ? 180 : 60

    const leftBlobX = useTransform(scrollYProgress, [0, 1], [0, -parallaxRange])
    const leftBlobY = useTransform(scrollYProgress, [0, 1], [0, parallaxRange * 0.45])
    const rightBlobX = useTransform(scrollYProgress, [0, 1], [0, parallaxRange])
    const rightBlobY = useTransform(scrollYProgress, [0, 1], [0, -parallaxRange * 0.35])
    const glowY = useTransform(scrollYProgress, [0, 1], [0, parallaxRange * 0.2])

    return (
        <Section
            ref={sectionRef}
            className={cn(
                'relative bg-petal-white overflow-hidden',
                variant === "full"
                    ? 'min-h-[86svh] [clip-path:ellipse(115%_92%_at_50%_0%)]'
                    : 'min-h-[40svh]',
                className
            )}
        >
            <div className='absolute left-1/2 -translate-x-1/2 h-full w-full max-w-screen-2xl pointer-events-none select-none overflow-hidden' aria-hidden='true'>

                {/* Rose blob (left) — brand accent */}
                <motion.div
                    initial={{ opacity: 0, x: -50, filter: "blur(12px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    style={reduced ? undefined : { x: leftBlobX, y: leftBlobY }}
                    className={cn(
                        'absolute -left-60 -top-40 rounded-full border-100 border-rose-200/50',
                        variant === "full" ? 'size-120' : 'size-72'
                    )}
                >
                    {!reduced && (
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
                    )}
                </motion.div>

                {/* Sage blob (right) — secondary accent, balances the rose */}
                <motion.div
                    initial={{ opacity: 0, x: 50, filter: "blur(12px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }}
                    style={reduced ? undefined : { x: rightBlobX, y: rightBlobY }}
                    className={cn(
                        'absolute -right-40 top-1/3 rounded-full border-60 border-sage-300/40',
                        variant === "full" ? 'size-80' : 'size-48'
                    )}
                >
                    {!reduced && (
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
                    )}
                </motion.div>

                {/* Soft rose glow, faint and slow */}
                <motion.div
                    animate={reduced ? { opacity: 0.2 } : { opacity: [0.15, 0.3, 0.15], scale: [1, 1.1, 1] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    style={reduced ? undefined : { y: glowY }}
                    className={cn(
                        'absolute left-1/3 top-1/4 rounded-full bg-rose-100/60 blur-3xl',
                        variant === "full" ? 'size-140' : 'size-96'
                    )}
                />
            </div>
            <Wrapper className='relative w-full h-full' bare={variant === "compact"}>
                {children}
            </Wrapper>
        </Section>
    )
}