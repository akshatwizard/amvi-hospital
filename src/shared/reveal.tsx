"use client";

import { motion, Variants } from "motion/react";

type RevealProps = React.ComponentProps<typeof motion.div> & {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    y?: number;
    duration?: number;
};

const variants = (y: number, duration: number, delay: number): Variants => ({
    hidden: { opacity: 0, y, filter: "blur(12px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0)",
        transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
    },
});

export default function Reveal({
    children,
    className,
    delay = 0,
    y = 60,
    duration = 0.9,
}: RevealProps) {
    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={variants(y, duration, delay)}
        >
            {children}
        </motion.div>
    );
}