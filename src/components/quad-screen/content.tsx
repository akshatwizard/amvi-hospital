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
    quadScreenIntro,
    quadScreenMarkers,
    quadScreenWhenOffered,
    quadScreenRisks,
    quadScreenAccuracy,
    quadScreenResultInterpretation,
    quadScreenProcedure,
    quadScreenDetects,
} from "@/constants/quad-screen"

export default function QuadScreenContent() {
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

                    {/* What is Quad Screen */}
                    <div className="grid sm:grid-cols-[1fr_auto] gap-6 items-start">
                        <div>
                            <RevealText
                                as="h2"
                                text="What is a quad screen test?"
                                className="font-serif text-2xl md:text-3xl text-plum-ink mb-4"
                            />

                            {quadScreenIntro.map((paragraph, index) => (
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
                                    Screening
                                </p>

                                <p className="font-serif text-xl text-rose-700">
                                    2nd trimester
                                </p>
                            </div>
                        </Reveal>
                    </div>

                    {/* Four Markers */}
                    <div>
                        <RevealText
                            as="h2"
                            text="What does the quad screen measure?"
                            className="font-serif text-2xl md:text-3xl text-plum-ink mb-6"
                        />

                        <StaggerContainer className="grid sm:grid-cols-2 gap-4">
                            {quadScreenMarkers.map((item) => (
                                <StaggerItem key={item.title}>
                                    <div className="flex flex-col gap-2 p-5 rounded-card bg-rose-50 border border-rose-100 h-full">
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

                    {/* When Offered */}
                    <div>
                        <RevealText
                            as="h2"
                            text="When is the quad screen offered?"
                            className="font-serif text-2xl md:text-3xl text-plum-ink mb-6"
                        />

                        <StaggerContainer className="flex flex-col">
                            {quadScreenWhenOffered.map((item) => (
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

                    {/* Risks */}
                    <div>
                        <RevealText
                            as="h2"
                            text="What are the risks?"
                            className="font-serif text-2xl md:text-3xl text-plum-ink mb-6"
                        />

                        <StaggerContainer className="grid sm:grid-cols-3 gap-4">
                            {quadScreenRisks.map((item) => (
                                <StaggerItem key={item.title}>
                                    <div className="flex flex-col gap-2 p-5 rounded-card bg-plum-ink h-full">
                                        <div className="flex items-center gap-2">
                                            <AlertTriangle
                                                size={14}
                                                className="text-rose-300 shrink-0"
                                            />

                                            <p className="font-serif text-sm text-petal-white">
                                                {item.title}
                                            </p>
                                        </div>

                                        <p className="text-sm text-rose-100/80 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Accuracy */}
                    <div>
                        <RevealText
                            as="h2"
                            text="How accurate is the quad screen?"
                            className="font-serif text-2xl md:text-3xl text-plum-ink mb-6"
                        />

                        <div className="flex flex-wrap gap-4">
                            {quadScreenAccuracy.map((item) => (
                                <Reveal key={item.label}>
                                    <div className="p-5 rounded-card bg-sage-50 border border-sage-100 min-w-55 max-w-sm">
                                        <p className="text-xs text-warm-slate mb-1">
                                            {item.label}
                                        </p>

                                        <p className="font-serif text-xl text-plum-ink">
                                            {item.value}
                                        </p>

                                        <p className="text-sm text-warm-slate leading-relaxed mt-2">
                                            {item.description}
                                        </p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    {/* Result Interpretation */}
                    <div>
                        <RevealText
                            as="h2"
                            text="How to interpret the results"
                            className="font-serif text-2xl md:text-3xl text-plum-ink mb-6"
                        />

                        <p className="text-sm md:text-base text-warm-slate leading-relaxed max-w-2xl mb-6">
                            The quad screen does not tell you for certain
                            whether your baby has a condition. Instead, it
                            provides an estimated chance, which may be
                            classified as higher chance or lower chance.
                        </p>

                        <StaggerContainer className="grid sm:grid-cols-2 gap-4">
                            {quadScreenResultInterpretation.map((item) => (
                                <StaggerItem key={item.title}>
                                    <div className="p-5 rounded-card bg-rose-50 border border-rose-100 h-full">
                                        <p className="font-serif text-lg text-plum-ink">
                                            {item.title}
                                        </p>

                                        <p className="font-serif text-xl text-rose-700 mt-1">
                                            {item.value}
                                        </p>

                                        <p className="text-sm text-warm-slate leading-relaxed mt-2">
                                            {item.description}
                                        </p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* How Test is Done */}
                    <div>
                        <RevealText
                            as="h2"
                            text="How is the quad screen done?"
                            className="font-serif text-2xl md:text-3xl text-plum-ink mb-6"
                        />

                        <StaggerContainer className="flex flex-col">
                            {quadScreenProcedure.map((item) => (
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

                    {/* What it Screens For */}
                    <div>
                        <RevealText
                            as="h2"
                            text="What does the quad screen look for?"
                            className="font-serif text-2xl md:text-3xl text-plum-ink mb-6"
                        />

                        <div className="flex flex-wrap gap-2.5">
                            {quadScreenDetects.map((item) => (
                                <span
                                    key={item}
                                    className="inline-block text-sm text-plum-ink bg-rose-50 border border-rose-100 rounded-full px-5 py-2.5"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}