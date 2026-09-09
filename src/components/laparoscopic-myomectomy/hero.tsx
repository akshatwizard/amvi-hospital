import PageHero from '@/shared/page-hero'

export default function LaparoscopicMyomectomyHero() {
    return (
        <PageHero
            eyebrow="Laparoscopic Surgery"
            title="Laparoscopic Myomectomy in Hyderabad"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Laparoscopic Surgery" },
                { label: "Myomectomy" },
            ]}
            image="/images/hero/laparoscopic-myomectomy-hero.png"
            imageAlt="Laparoscopic myomectomy surgery at AMVI Hospital"
        />
    )
}