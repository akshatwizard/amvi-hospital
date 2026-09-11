import { Check, AlertTriangle } from "lucide-react";
import { Section, Wrapper } from "@/shared/sections";
import { StaggerContainer, StaggerItem } from "@/shared/stagger";
import RevealText from "@/shared/reveal_text";
import Reveal from "@/shared/reveal";
import Counter from "@/shared/counter";
import ConditionSidebar from "@/shared/condition-sidebar";
import { stats } from "@/constants/stats";
import { chromosomeTestNav } from "@/constants/chromosome-test-nav";
import {
    niptIntro,
    niptTestsFor,
    niptReasons,
    niptResults,
    niptPerformance,
    niptTiming,
    niptBenefits,
    niptLimitations,
    niptUnavailable,
} from "@/constants/nipt";

export default function NiptContent() {
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

                    {/* What is NIPT */}
                    <div className="grid sm:grid-cols-[1fr_auto] gap-6 items-start">
                        <div>
                            <RevealText
                                as="h2"
                                text="What is non-invasive prenatal testing (NIPT)?"
                                className="font-serif text-2xl md:text-3xl text-plum-ink mb-4"
                            />

                            {niptIntro.map((paragraph, index) => (
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
                                    Earliest testing
                                </p>
                                <p className="font-serif text-xl text-rose-700">
                                    9–10 weeks
                                </p>
                            </div>
                        </Reveal>
                    </div>

                    {/* What does it test for */}
                    <div>
                        <RevealText
                            as="h2"
                            text="What does NIPT test for?"
                            className="font-serif text-2xl md:text-3xl text-plum-ink mb-6"
                        />

                        <StaggerContainer className="flex flex-col">
                            {niptTestsFor.map((item) => (
                                <StaggerItem
                                    key={item}
                                    className="flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0"
                                >
                                    <span className="mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center">
                                        <Check size={12} strokeWidth={3} />
                                    </span>

                                    <p className="text-sm text-plum-ink leading-relaxed">
                                        {item}
                                    </p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Why NIPT */}
                    <div>
                        <RevealText
                            as="h2"
                            text="Why have an NIPT?"
                            className="font-serif text-2xl md:text-3xl text-plum-ink mb-6"
                        />

                        <StaggerContainer className="flex flex-col">
                            {niptReasons.map((item) => (
                                <StaggerItem
                                    key={item}
                                    className="flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0"
                                >
                                    <span className="mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center">
                                        <Check size={12} strokeWidth={3} />
                                    </span>

                                    <p className="text-sm text-plum-ink leading-relaxed">
                                        {item}
                                    </p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Results */}
                    <div>
                        <RevealText
                            as="h2"
                            text="What to expect from your NIPT results"
                            className="font-serif text-2xl md:text-3xl text-plum-ink mb-6"
                        />

                        <StaggerContainer className="grid sm:grid-cols-2 gap-4">
                            {niptResults.map((result) => (
                                <StaggerItem key={result.title}>
                                    <div className="flex flex-col gap-2 p-5 rounded-card bg-rose-50 border border-rose-100 h-full">
                                        <p className="font-serif text-sm text-plum-ink">
                                            {result.title}
                                        </p>

                                        <p className="text-sm text-warm-slate leading-relaxed">
                                            {result.description}
                                        </p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>

                        <Reveal delay={0.1}>
                            <div className="mt-5 p-5 rounded-card bg-sage-50 border border-sage-100">
                                <p className="text-sm text-warm-slate leading-relaxed">
                                    NIPT results can take up to 2 weeks. If a
                                    result is high risk, your doctor may
                                    recommend diagnostic testing such as CVS
                                    or amniocentesis to confirm the finding.
                                </p>
                            </div>
                        </Reveal>
                    </div>

                    {/* Performance */}
                    <div>
                        <RevealText
                            as="h2"
                            text="NIPT performance"
                            className="font-serif text-2xl md:text-3xl text-plum-ink mb-6"
                        />

                        <div className="overflow-x-auto">
                            <div className="min-w-155 border border-rose-100 rounded-card overflow-hidden">
                                <div className="grid grid-cols-[1.4fr_1fr_1fr] bg-rose-50 border-b border-rose-100">
                                    <p className="p-4 text-xs font-medium text-plum-ink">
                                        Chromosome difference
                                    </p>

                                    <p className="p-4 text-xs font-medium text-plum-ink">
                                        Detection rate
                                    </p>

                                    <p className="p-4 text-xs font-medium text-plum-ink">
                                        False positive rate
                                    </p>
                                </div>

                                {niptPerformance.map((item, index) => (
                                    <div
                                        key={item.chromosome}
                                        className={`grid grid-cols-[1.4fr_1fr_1fr] ${index !==
                                                niptPerformance.length - 1
                                                ? "border-b border-rose-100"
                                                : ""
                                            }`}
                                    >
                                        <p className="p-4 text-sm text-plum-ink">
                                            {item.chromosome}
                                        </p>

                                        <p className="p-4 text-sm text-warm-slate">
                                            {item.detectionRate}
                                        </p>

                                        <p className="p-4 text-sm text-warm-slate">
                                            {item.falsePositiveRate}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* When to get NIPT */}
                    <div>
                        <RevealText
                            as="h2"
                            text="When to get NIPT"
                            className="font-serif text-2xl md:text-3xl text-plum-ink mb-6"
                        />

                        <StaggerContainer className="flex flex-col">
                            {niptTiming.map((item) => (
                                <StaggerItem
                                    key={item}
                                    className="flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0"
                                >
                                    <span className="mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center">
                                        <Check size={12} strokeWidth={3} />
                                    </span>

                                    <p className="text-sm text-plum-ink leading-relaxed">
                                        {item}
                                    </p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Benefits */}
                    <div>
                        <RevealText
                            as="h2"
                            text="Benefits of NIPT"
                            className="font-serif text-2xl md:text-3xl text-plum-ink mb-6"
                        />

                        <StaggerContainer className="grid sm:grid-cols-3 gap-4">
                            {niptBenefits.map((item) => (
                                <StaggerItem key={item.title}>
                                    <div className="flex flex-col gap-2 p-5 rounded-card bg-sage-50 border border-sage-100 h-full">
                                        <p className="font-serif text-lg text-plum-ink">
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

                    {/* Limitations */}
                    <div>
                        <RevealText
                            as="h2"
                            text="Limitations of NIPT"
                            className="font-serif text-2xl md:text-3xl text-plum-ink mb-6"
                        />

                        <StaggerContainer className="grid sm:grid-cols-2 gap-4">
                            {niptLimitations.map((item) => (
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

                    {/* When NIPT is not available */}
                    <div>
                        <RevealText
                            as="h2"
                            text="When NIPT is not available"
                            className="font-serif text-2xl md:text-3xl text-plum-ink mb-6"
                        />

                        <StaggerContainer className="flex flex-col">
                            {niptUnavailable.map((item) => (
                                <StaggerItem
                                    key={item}
                                    className="flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0"
                                >
                                    <span className="mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center">
                                        <AlertTriangle
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
                </div>
            </Wrapper>
        </Section>
    );
}