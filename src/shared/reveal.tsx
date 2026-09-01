"use client";

import { motion, useReducedMotion, Variants } from "motion/react";

type RevealProps = React.ComponentProps<typeof motion.div> & {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    y?: number;
    duration?: number;
};

const variants = (y: number, duration: number, delay: number, reduced: boolean): Variants => ({
    hidden: reduced ? { opacity: 0 } : { opacity: 0, y, filter: "blur(12px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0)",
        transition: { duration: reduced ? 0.3 : duration, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] },
    },
});

export default function Reveal({
    children,
    className,
    delay = 0,
    y = 60,
    duration = 0.9,
}: RevealProps) {
    const reduced = useReducedMotion();

    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={variants(y, duration, delay, !!reduced)}
        >
            {children}
        </motion.div>
    );
}