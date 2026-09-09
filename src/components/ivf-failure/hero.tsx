import PageHero from '@/shared/page-hero'

export default function IvfFailureHero() {
    return (
        <PageHero
            eyebrow="Infertility"
            title="IVF Failure — Understanding & Next Steps"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Infertility" },
                { label: "IVF Failure" },
            ]}
            image="/images/hero/ivf-failure-hero.png"
            imageAlt="IVF failure consultation at AMVI Hospital"
        />
    )
}