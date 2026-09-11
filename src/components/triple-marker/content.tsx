"use client"

import { Check, AlertTriangle } from "lucide-react"
import { Section, Wrapper } from "@/shared/sections"
import { StaggerContainer, StaggerItem } from "@/shared/stagger"
import RevealText from "@/shared/reveal_text"
import Reveal from "@/shared/reveal"
import Counter from "@/shared/counter"
import ConditionSidebar from "@/shared/condition-sidebar"
import { stats } from "@/constants/stats"
import { chromosomeTestNav } from "@/constants/chromosome-test-nav"
import {
    tripleMarkerIntro,
    tripleMarkerMeasures,
    tripleMarkerCandidates,
    tripleMarkerTiming,
    tripleMarkerReasons,
    tripleMarkerProcedure,
    tripleMarkerResultFactors,
    tripleMarkerResultTypes,
    tripleMarkerDetects,
} from "@/constants/triple-marker"

export default function TripleMarkerContent() {
    return (
        <Section className="bg-petal-white">
            <Wrapper className="grid lg:grid-cols-[240px_1fr] gap-12 lg:gap-16">
                <ConditionSidebar
                    links={chromosomeTestNav}
                    category="Chromosome Test"
                />

                <div className="flex flex-col gap-20">

                    {/* Medical Review + Stats */}
                    <div>
                        <Reveal>
                            <p className="text-xs text-warm-slate">
                                Written &amp; medically reviewed by{" "}
                                <span className="text-rose-700">
                                    Dr. Shaivalini Kamarapu
                                </span>
                                <br />
                                MBBS · MS (Obstetrics &amp; Gynaecology) ·
                                Fellowship in Reproductive Medicine · 20+ years
                                of clinical experience
                            </p>
                        </Reveal>

                        <StaggerContainer className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-rose-100 max-w-md">
                            {stats.map((stat) => (
                                <StaggerItem key={stat.label}>
                                    <p className="font-serif text-xl md:text-2xl text-rose-700">
                                        <Counter
                                            value={stat.value}
                                            suffix={stat.suffix}
                                        />
                                    </p>

                                    <p className="text-xs text-warm-slate mt-1">
                                        {stat.label}
                                    </p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Introduction */}
                    <div className="grid sm:grid-cols-[1fr_auto] gap-6 items-start">
                        <div>
                            <RevealText
                                as="h2"
                                text="What is a Triple Marker Test?"
                                className="font-serif text-2xl md:text-3xl text-plum-ink mb-4"
                            />

                            {tripleMarkerIntro.map((paragraph, index) => (
                                <Reveal
                                    key={index}
                                    delay={0.1 + index * 0.1}
                                >
                                    <p className="text-sm md:text-base text-warm-slate leading-relaxed max-w-2xl mb-3 last:mb-0">
                                        {paragraph}
                                    </p>
                                </Reveal>
                            ))}
                        </div>

                        <Reveal delay={0.15}>
                            <div className="p-5 rounded-card bg-rose-50/60 border border-rose-100 text-center shrink-0">
                                <p className="text-xs text-warm-slate mb-1">
                                    Common timing
                                </p>

                                <p className="font-serif text-xl text-rose-700">
                                    15–18 weeks
                                </p>
                            </div>
                        </Reveal>
                    </div>

                    {/* Three Markers */}
                    <div>
                        <RevealText
                            as="h2"
                            text="What does the Triple Marker Test measure?"
                            className="font-serif text-2xl md:text-3xl text-plum-ink mb-6"
                        />

                        <StaggerContainer className="grid sm:grid-cols-3 gap-4">
                            {tripleMarkerMeasures.map((item) => (
                                <StaggerItem key={item.title}>
                                    <div className="flex flex-col gap-3 p-5 rounded-card bg-rose-50 border border-rose-100 h-full">
                                        <div className="flex items-center gap-2">
                                            <span className="shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center">
                                                <Check
                                                    size={12}
                                                    strokeWidth={3}
                                                />
                                            </span>

                                            <p className="font-serif text-sm text-plum-ink">
                                                {item.title}
                                            </p>
                                        </div>

                                        <p className="text-sm text-warm-slate leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Who Should Consider */}
                    <div>
                        <RevealText
                            as="h2"
                            text="Who may be advised to have the test?"
                            className="font-serif text-2xl md:text-3xl text-plum-ink mb-6"
                        />

                        <StaggerContainer className="flex flex-col">
                            {tripleMarkerCandidates.map((item) => (
                                <StaggerItem
                                    key={item}
                                    className="flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0"
                                >
                                    <span className="mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center">
                                        <Check
                                            size={12}
                                            strokeWidth={3}
                                        />
                                    </span>

                                    <p className="text-sm text-plum-ink leading-relaxed">
                                        {item}
                                    </p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Timing */}
                    <div>
                        <RevealText
                            as="h2"
                            text="When is the Triple Marker Test performed?"
                            className="font-serif text-2xl md:text-3xl text-plum-ink mb-6"
                        />

                        <StaggerContainer className="flex flex-col">
                            {tripleMarkerTiming.map((item) => (
                                <StaggerItem
                                    key={item}
                                    className="flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0"
                                >
                                    <span className="mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center">
                                        <Check
                                            size={12}
                                            strokeWidth={3}
                                        />
                                    </span>

                                    <p className="text-sm text-plum-ink leading-relaxed">
                                        {item}
                                    </p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Reasons */}
                    <div>
                        <RevealText
                            as="h2"
                            text="Why have a Triple Marker Test?"
                            className="font-serif text-2xl md:text-3xl text-plum-ink mb-6"
                        />

                        <StaggerContainer className="flex flex-col">
                            {tripleMarkerReasons.map((item) => (
                                <StaggerItem
                                    key={item}
                                    className="flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0"
                                >
                                    <span className="mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center">
                                        <Check
                                            size={12}
                                            strokeWidth={3}
                                        />
                                    </span>

                                    <p className="text-sm text-plum-ink leading-relaxed">
                                        {item}
                                    </p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Procedure */}
                    <div>
                        <RevealText
                            as="h2"
                            text="How is the Triple Marker Test performed?"
                            className="font-serif text-2xl md:text-3xl text-plum-ink mb-6"
                        />

                        <StaggerContainer className="flex flex-col">
                            {tripleMarkerProcedure.map((item, index) => (
                                <StaggerItem
                                    key={item}
                                    className="flex items-start gap-4 py-3 border-b border-rose-100 last:border-0"
                                >
                                    <span className="shrink-0 size-7 rounded-full bg-rose-50 border border-rose-100 text-rose-700 flex items-center justify-center font-serif text-sm">
                                        {index + 1}
                                    </span>

                                    <p className="text-sm text-plum-ink leading-relaxed pt-1">
                                        {item}
                                    </p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Result Interpretation */}
                    <div>
                        <RevealText
                            as="h2"
                            text="How are Triple Marker Test results interpreted?"
                            className="font-serif text-2xl md:text-3xl text-plum-ink mb-4"
                        />

                        <Reveal>
                            <p className="text-sm md:text-base text-warm-slate leading-relaxed max-w-2xl mb-6">
                                The result estimates the likelihood of certain
                                genetic or chromosomal conditions. It does not
                                confirm that the baby has a condition.
                            </p>
                        </Reveal>

                        <StaggerContainer className="grid sm:grid-cols-2 gap-4">
                            {tripleMarkerResultTypes.map((item) => (
                                <StaggerItem key={item.title}>
                                    <div className="p-5 rounded-card bg-rose-50 border border-rose-100 h-full">
                                        <p className="font-serif text-lg text-plum-ink mb-2">
                                            {item.title}
                                        </p>

                                        <p className="text-sm text-warm-slate leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Factors */}
                    <div>
                        <RevealText
                            as="h2"
                            text="What factors affect the result?"
                            className="font-serif text-2xl md:text-3xl text-plum-ink mb-6"
                        />

                        <div className="flex flex-wrap gap-2.5">
                            {tripleMarkerResultFactors.map((item) => (
                                <span
                                    key={item}
                                    className="inline-block text-sm text-plum-ink bg-sage-50 border border-sage-100 rounded-full px-5 py-2.5"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Detects */}
                    <div>
                        <RevealText
                            as="h2"
                            text="What can the Triple Marker Test detect?"
                            className="font-serif text-2xl md:text-3xl text-plum-ink mb-6"
                        />

                        <div className="flex flex-wrap gap-2.5">
                            {tripleMarkerDetects.map((item) => (
                                <span
                                    key={item}
                                    className="inline-block text-sm text-plum-ink bg-rose-50 border border-rose-100 rounded-full px-5 py-2.5"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Important Note */}
                    <Reveal>
                        <div className="p-6 rounded-card bg-rose-50 border border-rose-100">
                            <div className="flex items-start gap-3">
                                <AlertTriangle
                                    size={16}
                                    className="text-rose-700 shrink-0 mt-0.5"
                                />

                                <div>
                                    <p className="font-serif text-lg text-plum-ink mb-2">
                                        A screening test, not a diagnosis
                                    </p>

                                    <p className="text-sm text-warm-slate leading-relaxed">
                                        A higher-risk Triple Marker Test result
                                        does not mean that your baby definitely
                                        has a genetic or chromosomal condition.
                                        Your obstetrician may recommend
                                        additional testing to understand the
                                        result more accurately.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                </div>
            </Wrapper>
        </Section>
    )
}