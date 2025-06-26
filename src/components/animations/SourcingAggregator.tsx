
import React, { useState, useEffect } from 'react';
import { FileSpreadsheet, Mail, Linkedin, Users } from 'lucide-react';

const SourcingAggregator = () => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const candidateProfiles = [
    { name: "Rahul Sharma", role: "Full Stack Developer", source: "excel" },
    { name: "Priya Patel", role: "Data Scientist", source: "gmail" },
    { name: "Amit Kumar", role: "DevOps Engineer", source: "linkedin" },
  ];

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 overflow-hidden">
      {/* Source Icons */}
      <div className="absolute top-8 left-8">
        <div className={`flex items-center space-x-2 p-3 bg-green-100 rounded-lg transition-all duration-1000 ${
          animationStep >= 1 ? 'opacity-50 scale-90' : 'opacity-100 scale-100'
        }`}>
          <FileSpreadsheet className="h-6 w-6 text-green-600" />
          <span className="text-sm font-medium">Excel/CSV</span>
        </div>
      </div>

      <div className="absolute top-8 right-8">
        <div className={`flex items-center space-x-2 p-3 bg-red-100 rounded-lg transition-all duration-1000 ${
          animationStep >= 2 ? 'opacity-50 scale-90' : 'opacity-100 scale-100'
        }`}>
          <Mail className="h-6 w-6 text-red-600" />
          <span className="text-sm font-medium">Gmail</span>
        </div>
      </div>

      <div className="absolute top-32 left-8">
        <div className={`flex items-center space-x-2 p-3 bg-blue-100 rounded-lg transition-all duration-1000 ${
          animationStep >= 3 ? 'opacity-50 scale-90' : 'opacity-100 scale-100'
        }`}>
          <Linkedin className="h-6 w-6 text-blue-600" />
          <span className="text-sm font-medium">LinkedIn</span>
        </div>
      </div>

      {/* Animated Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0"/>
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="1"/>
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
          </linearGradient>
        </defs>
        
        {/* Excel to Center */}
        <path
          d="M 120 60 Q 200 60 280 180"
          fill="none"
          stroke="url(#flowGradient)"
          strokeWidth="3"
          className={`transition-opacity duration-1000 ${animationStep >= 1 ? 'opacity-100' : 'opacity-0'}`}
        />
        
        {/* Gmail to Center */}
        <path
          d="M 360 60 Q 320 100 280 180"
          fill="none"
          stroke="url(#flowGradient)"
          strokeWidth="3"
          className={`transition-opacity duration-1000 ${animationStep >= 2 ? 'opacity-100' : 'opacity-0'}`}
        />
        
        {/* LinkedIn to Center */}
        <path
          d="M 120 150 Q 200 150 280 180"
          fill="none"
          stroke="url(#flowGradient)"
          strokeWidth="3"
          className={`transition-opacity duration-1000 ${animationStep >= 3 ? 'opacity-100' : 'opacity-0'}`}
        />
      </svg>

      {/* Central ATS UI */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-80">
        <div className="bg-white rounded-lg shadow-lg p-4 border">
          <div className="flex items-center space-x-2 mb-3">
            <Users className="h-5 w-5 text-indigo-600" />
            <span className="font-semibold text-gray-800">Unified Talent Pool</span>
          </div>
          
          <div className="space-y-2">
            {candidateProfiles.map((candidate, index) => (
              <div
                key={candidate.name}
                className={`p-2 bg-gray-50 rounded border-l-4 transition-all duration-1000 transform ${
                  animationStep > index 
                    ? 'translate-x-0 opacity-100 border-l-indigo-500' 
                    : 'translate-x-full opacity-0 border-l-gray-300'
                }`}
                style={{ transitionDelay: `${index * 500}ms` }}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-gray-800">{candidate.name}</p>
                    <p className="text-xs text-gray-600">{candidate.role}</p>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${
                    candidate.source === 'excel' ? 'bg-green-500' :
                    candidate.source === 'gmail' ? 'bg-red-500' : 'bg-blue-500'
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SourcingAggregator;
