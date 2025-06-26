
import React from 'react';
import Navigation from "@/components/sections/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import TrustedCompaniesSection from "@/components/sections/TrustedCompaniesSection";
import StatsSection from "@/components/sections/StatsSection";
import FeatureShowcases from "@/components/sections/FeatureShowcases";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import FaqSection from "@/components/sections/FaqSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <FeatureShowcases />
      <FeaturesGrid />
      <FaqSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
