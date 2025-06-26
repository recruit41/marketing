
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <Badge className="mb-6 bg-blue-100 text-slate-700 hover:bg-blue-200 px-4 py-2 text-sm font-medium">
            🇮🇳 India's Most Advanced ATS Platform
          </Badge>
          <h1 className="text-4xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Stop Drowning in 
            <span className="text-slate-600 block">
              Resumes.
            </span>
            Start Discovering Talent.
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Recruit41 is the AI-powered ATS that unifies your workflow, turning chaotic sourcing 
            into a streamlined search for <strong>India's best talent</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 group"
            >
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 group border-slate-300 text-slate-900 hover:bg-slate-100">
              <Play className="mr-2 h-5 w-5" />
              See it in Action
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
