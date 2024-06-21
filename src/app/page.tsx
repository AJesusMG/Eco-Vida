'use client'

import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import HeroSection from "@/components/HeroSection/HeroSection";
import PurposeSection from "@/components/PurposeSection/PurposeSection";
import ActionsSections from "@/components/ActionsSection/ActionsSection";
import RecommendedCarousel from "@/components/RecommendedCarousel/RecommendedCarousel";
import ResultsCarousel from "@/components/ResultsCarousel/ResultsCarousel";
import Footer from "@/components/Footer/Footer";

export default function LandingPage() {
  return (
    <div className="w-full h-full flex flex-col">
      <NavBar />
      <div className="flex-1 flex flex-col gap-16 lg:gap-32 justify-center items-center px-4 md:px-8 py-24 ">
        <HeroSection id="inicio" /> 
        <PurposeSection id="proposito" />
        <ActionsSections id="acciones"/>
        <RecommendedCarousel id="recomendaciones"/>
        <ResultsCarousel id="resultados"/>
      </div>
      <Footer/>
    </div>
  );
};

