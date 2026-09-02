"use client"

import { useEffect, useRef } from "react"
import { useInView, useMotionValue, useSpring, useReducedMotion } from "motion/react"

type CounterProps = {
    value: number
    suffix?: string
}

export default function Counter({ value, suffix = "" }: CounterProps) {
    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, { once: true, margin: "-10% 0px" })
    const reduced = useReducedMotion()
    const motionValue = useMotionValue(0)
    const spring = useSpring(motionValue, { duration: 1.6, bounce: 0 })

    useEffect(() => {
        if (inView) motionValue.set(value)
    }, [inView, value, motionValue])

    useEffect(() => {
        if (reduced) {
            if (ref.current) ref.current.textContent = value.toLocaleString() + suffix
            return
        }
        return spring.on("change", (v) => {
            if (ref.current) ref.current.textContent = Math.round(v).toLocaleString() + suffix
        })
    }, [spring, suffix, value, reduced])

    return <span ref={ref}>0{suffix}</span>
}