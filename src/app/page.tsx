import HomeHero from "@/components/home/hero";
import Specialties from "@/components/home/specialties";
import Highlights from "@/components/home/highlights";
import AboutHospital from "@/components/home/about_hospital";
import AboutDoctor from "@/components/home/about_doctor";
import Testimonials from "@/components/home/testimonials";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <Specialties />
      <Highlights />
      <AboutHospital />
      <AboutDoctor />
      <Testimonials />
    </main>
  );
}
