"use client"

import { useEffect, useRef } from "react"
import { animate, useInView, useReducedMotion } from "motion/react"

type CounterProps = {
    value: number
    suffix?: string
}

const format = (n: number, suffix: string) => Math.round(n).toLocaleString("en-IN") + suffix

// The final value is rendered on the server, so search engines, link
// previews and visitors without JavaScript see the real figure ("20+")
// rather than "0+". In the browser, a counter that is still below the fold
// is reset to 0 and counts up once it scrolls into view.
export default function Counter({ value, suffix = "" }: CounterProps) {
    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, { once: true, margin: "-10% 0px" })
    const reduced = useReducedMotion()
    const armed = useRef(false)

    // On mount: only arm the animation if the number is not already visible.
    useEffect(() => {
        const el = ref.current
        if (!el || reduced) return
        const rect = el.getBoundingClientRect()
        const visible = rect.top < window.innerHeight && rect.bottom > 0
        if (!visible) {
            el.textContent = format(0, suffix)
            armed.current = true
        }
    }, [reduced, suffix])

    useEffect(() => {
        const el = ref.current
        if (!el || !inView || !armed.current) return
        armed.current = false
        const controls = animate(0, value, {
            duration: 1.6,
            ease: [0.22, 1, 0.36, 1],
            onUpdate: (v) => { el.textContent = format(v, suffix) },
        })
        return () => controls.stop()
    }, [inView, value, suffix])

    return <span ref={ref}>{format(value, suffix)}</span>
}
