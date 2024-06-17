'use client'

import HeroSection from "@/components/HeroSection/HeroSection";
import NavBar from "@/components/NavBar/NavBar";

export default function LandingPage() {
  return (
    <div className="w-full h-full">
      <NavBar />
      <HeroSection/>
    </div>
  )
}