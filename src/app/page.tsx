'use client'

import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import HeroSection from "@/components/HeroSection/HeroSection";
import PurposeSection from "@/components/PurposeSection/PurposeSection";

export default function LandingPage() {
  return (
    <div className="w-full h-full flex flex-col">
      <NavBar />
      <div className="flex-1 flex flex-col gap-8 justify-center items-center px-4 md:px-8">
        <HeroSection id="inicio" /> 
        <PurposeSection id="proposito" /> 
      </div>
    </div>
  );
};

