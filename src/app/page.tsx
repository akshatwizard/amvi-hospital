import HomeHero from "@/components/home/hero";
import HeroBg from "@/shared/hero_bg";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <div className="h-screen"></div>
    </main>
  );
}
