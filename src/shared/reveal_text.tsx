"use client";

import { motion } from "motion/react";

type RevealTextProps = {
    text: string;
    className?: string;
    delay?: number;
    as?: "h1" | "h2" | "h3" | "p" | "span";
};

export default function RevealText({ text, className, delay = 0, as: Tag = "span" }: RevealTextProps) {
    const words = text.split(" ");

    return (
        <Tag className={className}>
            {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden pb-1 -mb-1 mr-[0.25em] align-top">
                    <motion.span
                        className="inline-block font-serif!"
                        initial={{ y: "110%", filter: "blur(12px)", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.8, delay: delay + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </Tag>
    );
}