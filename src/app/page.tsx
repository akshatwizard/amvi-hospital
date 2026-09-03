import HomeHero from "@/components/home/hero";
import Specialties from "@/components/home/specialties";
import Highlights from "@/components/home/highlights";
import AboutHospital from "@/components/home/about_hospital";
import AboutDoctor from "@/components/home/about_doctor";
import Testimonials from "@/components/home/testimonials";
import CareJourney from "@/components/home/care_journey";
import Faq from "@/components/home/faq";
import BeforeYouGo from "@/components/home/before_you_go";
import Locations from "@/components/home/locations";
import ContactBanner from "@/components/home/contact_banner";
import CareTeam from "@/components/home/care_team";
import BlogPreview from "@/components/home/blog_preview";

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
      <CareTeam />
      <BeforeYouGo />
      <Faq />
      <BlogPreview />
      <Locations />
      <ContactBanner />
    </main>
  );
}
