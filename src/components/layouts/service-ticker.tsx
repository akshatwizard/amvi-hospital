"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"

const services = [
    "IVF & Fertility Treatment",
    "IUI",
    "ICSI",
    "High-Risk Pregnancy Care",
    "PCOS / PCOD Treatment",
    "Laparoscopic Surgery",
    "Cosmetic Gynecology",
]

export default function ServiceTicker() {
    const [active, setActive] = useState(0)
    const reduced = useReducedMotion()

    useEffect(() => {
        if (reduced) return
        const id = setInterval(() => {
            setActive((prev) => (prev + 1) % services.length)
        }, 2600)
        return () => clearInterval(id)
    }, [reduced])

    return (
        <span className='hidden lg:flex items-center gap-2 text-xs'>
            <span className='text-warm-slate'>Specialised in</span>
            <span className='relative inline-block overflow-hidden'>
                <AnimatePresence mode="wait">
                    <motion.span
                        key={active}
                        initial={reduced ? false : { y: 14, opacity: 0, filter: "blur(6px)" }}
                        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        exit={reduced ? undefined : { y: -14, opacity: 0, filter: "blur(6px)" }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="block whitespace-nowrap text-plum-ink"
                    >
                        {services[active]}
                    </motion.span>
                </AnimatePresence>
            </span>
        </span>
    )
}