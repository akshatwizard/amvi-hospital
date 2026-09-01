"use client";

import { motion, useReducedMotion, Variants } from "motion/react";

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
};

const itemVariants = (reduced: boolean): Variants => ({
    hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 60, filter: "blur(12px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: reduced ? 0.3 : 0.9, ease: [0.22, 1, 0.36, 1] },
    },
});

export function StaggerContainer({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const reduced = useReducedMotion();
    return (
        <motion.div className={className} variants={itemVariants(!!reduced)}>
            {children}
        </motion.div>
    );
}