"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"

interface OverlayProps {
    on_click?: () => void
    className?: string
}

export function Overlay({ on_click, className }: OverlayProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={on_click}
            className={cn(
                "fixed inset-0 z-40 bg-ink-900/40 backdrop-blur-sm",
                className
            )}
        />
    )
}