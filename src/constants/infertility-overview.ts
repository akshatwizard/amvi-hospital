export const infertilityIntro: string[] = [
    "Infertility is generally defined as not conceiving after a year of regular, unprotected intercourse — or after six months if the woman is over 35. It's more common than many people realise, and it isn't automatically a reflection on either partner alone: fertility challenges can involve the female partner, the male partner, both, or occasionally neither identifiable cause at all.",
    "The right next step almost always starts with a proper assessment — bloodwork, imaging, and semen analysis where relevant — rather than guessing at a cause. From there, treatment ranges from simple monitoring and medication through to assisted reproductive techniques like IUI and IVF, tailored to what's actually driving the difficulty.",
]

export const infertilityWhenToSeekHelp: string[] = [
    "You haven't conceived after 12 months of regular, unprotected intercourse",
    "You're over 35 and haven't conceived after 6 months of trying",
    "You have irregular or absent menstrual cycles",
    "You have a known condition affecting fertility (PCOS, endometriosis, varicocele, etc.)",
    "You've experienced two or more pregnancy losses",
    "A previous fertility treatment cycle hasn't succeeded",
]

export type InfertilityLink = { name: string; href: string; description: string }
export type InfertilityGroup = { title: string; blurb: string; links: InfertilityLink[] }

export const infertilityGroups: InfertilityGroup[] = [
    {
        title: "Assessment & Diagnostics",
        blurb: "Where most fertility journeys start — understanding what's actually going on before deciding on treatment.",
        links: [
            { name: "Infertility Assessment", href: "/infertility/assessment", description: "What to expect at your first visit, and the full range of tests for both partners." },
            { name: "Genetic Screening", href: "/infertility/genetic-screening", description: "Preimplantation genetic screening to identify chromosomally healthy embryos." },
            { name: "Follicular Monitoring", href: "/infertility/follicular-monitoring", description: "Ultrasound tracking of egg development and ovulation timing." },
            { name: "CASA", href: "/infertility/casa", description: "Computer-assisted semen analysis for objective, reproducible sperm evaluation." },
        ],
    },
    {
        title: "Ovulation & Female Fertility",
        blurb: "Support for irregular or absent ovulation, one of the most common and treatable causes of difficulty conceiving.",
        links: [
            { name: "Ovulation Induction", href: "/infertility/ovulation-induction", description: "Medication-based treatment to encourage regular, predictable ovulation." },
        ],
    },
    {
        title: "Male Infertility",
        blurb: "Male factors contribute to a meaningful share of infertility cases — evaluation and treatment for both partners matters equally.",
        links: [
            { name: "Oligospermia", href: "/infertility/male/oligospermia", description: "Diagnosis and treatment for low sperm count." },
            { name: "Erectile Dysfunction", href: "/infertility/male/erectile-dysfunction", description: "Confidential evaluation and treatment for erectile difficulties." },
            { name: "Varicocele", href: "/infertility/male/varicocele", description: "The most common treatable cause of male infertility." },
            { name: "Asthenospermia", href: "/infertility/male/asthenospermia", description: "Treatment for reduced sperm motility." },
            { name: "Azoospermia", href: "/infertility/male/azoospermia", description: "Diagnosis and treatment pathways for zero sperm count." },
        ],
    },
    {
        title: "Assisted Reproductive Techniques",
        blurb: "When natural conception or simpler treatments aren't enough, these techniques offer a more direct path to pregnancy.",
        links: [
            { name: "IVF", href: "/infertility/ivf", description: "In vitro fertilisation — eggs and sperm are combined outside the body." },
            { name: "ICSI", href: "/infertility/icsi", description: "A single sperm is injected directly into the egg during IVF." },
            { name: "IMSI", href: "/infertility/imsi", description: "High-magnification sperm selection for improved fertilisation outcomes." },
            { name: "Stem Cell IVF", href: "/infertility/stem-cell-ivf", description: "Advanced regenerative techniques supporting ovarian and uterine health." },
            { name: "IUI", href: "/infertility/iui", description: "Intrauterine insemination — processed sperm placed directly into the uterus." },
            { name: "PICSI", href: "/infertility/picsi", description: "Physiological sperm selection based on natural maturity markers." },
            { name: "IVF Failure", href: "/infertility/ivf-failure", description: "Understanding a failed cycle and planning informed next steps." },
        ],
    },
]