import PageHero from '@/shared/page-hero'

export default function StemCellIvfHero() {
    return (
        <PageHero
            eyebrow="Infertility"
            title="Stem Cell IVF Treatment — Regenerative Medicine Approach"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Infertility" },
                { label: "Stem Cell IVF" },
            ]}
            image="/images/hero/stem-cell-ivf-hero.png"
            imageAlt="Stem cell IVF consultation at AMVI Hospital"
        />
    )
}