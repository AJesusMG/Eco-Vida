'use client'

import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import HeroSection from "@/components/HeroSection/HeroSection";
import PurposeSection from "@/components/PurposeSection/PurposeSection";
import ActionsSections from "@/components/ActionsSection/ActionsSection";

export default function LandingPage() {
  return (
    <div className="w-full h-full flex flex-col">
      <NavBar />
      <div className="flex-1 flex flex-col gap-2 lg:gap-16 justify-center items-center px-4 md:px-8 py-16 ">
        <HeroSection id="inicio" /> 
        <PurposeSection id="proposito" />
        <ActionsSections id="acciones"/>
      </div>
    </div>
  );
};

