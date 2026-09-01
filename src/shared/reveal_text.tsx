"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type RevealTextProps = {
    text: string;
    className?: string;
    delay?: number;
    as?: "h1" | "h2" | "h3" | "p" | "span";
    serif?: boolean;
};

export default function RevealText({ text, className, delay = 0, as: Tag = "span", serif = true }: RevealTextProps) {
    const words = text.split(" ");
    const reduced = useReducedMotion();

    return (
        <Tag className={className}>
            {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden pb-1 -mb-1 mr-[0.25em] align-top">
                    <motion.span
                        className={cn("inline-block", serif && "font-serif!")}
                        initial={reduced ? { opacity: 0 } : { y: "110%", filter: "blur(12px)", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                        transition={{
                            duration: reduced ? 0.3 : 0.8,
                            delay: reduced ? 0 : delay + i * 0.05,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </Tag>
    );
}