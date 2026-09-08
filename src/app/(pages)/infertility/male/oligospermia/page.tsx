import type { Metadata } from "next";
import OligospermiaHero from "@/components/oligospermia/hero";
import OligospermiaContent from "@/components/oligospermia/content";

export const metadata: Metadata = {
  title: "Low Sperm Count (Oligospermia) Treatment | AMVI Hospitals",
  description:
    "Diagnosis and treatment for low sperm count (oligospermia) at AMVI Hospitals, Hyderabad — from lifestyle guidance to IUI, IVF, and ICSI, led by Dr. Shaivalini Kamarapu.",
  alternates: { canonical: "/infertility/male/oligospermia" },
};

export default function OligospermiaPage() {
  return (
    <main>
      <OligospermiaHero />
      <OligospermiaContent />
    </main>
  );
}