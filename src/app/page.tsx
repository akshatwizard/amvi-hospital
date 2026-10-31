import type { Metadata } from "next";
import HomeHero from "@/components/home/hero";
import Specialties from "@/components/home/specialties";
import Highlights from "@/components/home/highlights";
import AboutHospital from "@/components/home/about_hospital";
import AboutDoctor from "@/components/home/about_doctor";
import Awards from "@/components/home/awards";
import Testimonials from "@/components/home/testimonials";
import CareJourney from "@/components/home/care_journey";
import Faq from "@/components/home/faq";
import BeforeYouGo from "@/components/home/before_you_go";
import Locations from "@/components/home/locations";
import ContactBanner from "@/components/home/contact_banner";
import CareTeam from "@/components/home/care_team";
import BlogPreview from "@/components/home/blog_preview";
// import SocialInsights from "@/components/social-insights/social-insights";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <HomeHero />
      <Specialties />
      <CareJourney />
      <Highlights />
      <Testimonials />
      <AboutHospital />
      <AboutDoctor />
      <Awards />
      <CareTeam />
      <BeforeYouGo />
      {/* Hidden until real Instagram/Facebook posts are linked in src/constants/social-insights.ts */}
      {/* <SocialInsights /> */}
      <Faq />
      <BlogPreview />
      <Locations />
      <ContactBanner />
    </main>
  );
}
