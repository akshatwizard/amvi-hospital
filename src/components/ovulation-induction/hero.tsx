import PageHero from '@/shared/page-hero'

export default function OvulationInductionHero() {
    return (
        <PageHero
            eyebrow="Infertility"
            title="Ovulation Induction for Irregular Cycles"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Infertility" },
                { label: "Ovulation Induction" },
            ]}
            image="/images/hero/ovulation-induction-hero.png"
            imageAlt="Ovulation induction consultation at AMVI Hospital"
        />
    )
}