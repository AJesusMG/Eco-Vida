'use client'

import HeroSection from "@/components/HeroSection/HeroSection";
import NavBar from "@/components/NavBar/NavBar";
import PurposeSection from "@/components/PurposeSection/PurposeSection";

export default function LandingPage() {
  return (
    <div className="w-full h-full flex flex-col">
      <NavBar />
      <div className="flex-1 flex flex-col gap-8 justify-center items-center px-4 md:px-8">
        <HeroSection />
        <PurposeSection />
      </div>
    </div>
  )
}
