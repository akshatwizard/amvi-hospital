import PageHero from '@/shared/page-hero'

export default function TwinsTripletsHero() {
    return (
        <PageHero
            eyebrow="Maternity"
            title="Twins or Triplets Pregnancy — Multiple Gestation Care"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Maternity" },
                { label: "Twins / Triplet Pregnancy" },
            ]}
            image="/images/hero/twins-triplets-hero.png"
            imageAlt="Twins or triplets pregnancy care at AMVI Hospital"
        />
    )
}