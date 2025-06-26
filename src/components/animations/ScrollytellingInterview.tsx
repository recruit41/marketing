
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Video, Brain, FileText, ArrowRight } from 'lucide-react';

const ScrollytellingInterview = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "The Scheduling Nightmare",
      description: "Traditional interview scheduling is chaotic",
      component: "calendar"
    },
    {
      title: "Simple Candidate Experience", 
      description: "Candidates get a clean, simple interview link",
      component: "link"
    },
    {
      title: "Live AI Interview",
      description: "Real-time conversational interview in progress",
      component: "interview"
    },
    {
      title: "Automatic Analysis",
      description: "Comprehensive analysis generated instantly",
      component: "analysis"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const renderCalendarChaos = () => (
    <div className="relative h-80 bg-gray-100 rounded-lg p-4 overflow-hidden">
      <h3 className="text-lg font-semibold mb-4 text-center">Traditional Scheduling</h3>
      
      {/* Overlapping calendar events */}
      <div className="relative">
        <div className="absolute top-4 left-4 w-48 h-16 bg-red-100 border-l-4 border-red-500 p-2 rounded rotate-2 shadow-md">
          <p className="text-xs font-medium text-red-800">Interview with John</p>
          <p className="text-xs text-red-600">2:00 PM - RESCHEDULED</p>
        </div>
        
        <div className="absolute top-8 left-20 w-48 h-16 bg-yellow-100 border-l-4 border-yellow-500 p-2 rounded -rotate-1 shadow-md">
          <p className="text-xs font-medium text-yellow-800">Sarah's Interview</p>
          <p className="text-xs text-yellow-600">3:30 PM - CONFLICTED</p>
        </div>
        
        <div className="absolute top-12 left-36 w-48 h-16 bg-blue-100 border-l-4 border-blue-500 p-2 rounded rotate-1 shadow-md">
          <p className="text-xs font-medium text-blue-800">Mike's Technical Round</p>
          <p className="text-xs text-blue-600">4:00 PM - PENDING</p>
        </div>
        
        <div className="absolute top-32 left-8 w-56 bg-white p-3 border border-gray-300 rounded shadow-lg">
          <p className="text-sm font-medium text-gray-800">Email Thread (47 messages)</p>
          <p className="text-xs text-gray-600 mt-1">"Can we reschedule for next week? I have a conflict..."</p>
          <p className="text-xs text-gray-600">"What about Thursday at 2 PM instead?"</p>
          <p className="text-xs text-gray-600">"Actually, that doesn't work either..."</p>
        </div>
      </div>
      
      <div className="absolute bottom-4 right-4 text-red-600 font-bold text-lg animate-pulse">
        CHAOS!
      </div>
    </div>
  );

  const renderSimpleLink = () => (
    <div className="h-80 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-8 flex flex-col items-center justify-center">
      <div className="text-center space-y-6">
        <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto">
          <Video className="h-10 w-10 text-white" />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-800">Your Interview is Ready!</h3>
          <p className="text-gray-600">Click the link below when you're ready to start</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg border-2 border-dashed border-gray-300 max-w-md">
          <p className="text-sm text-gray-500 mb-2">Interview Link:</p>
          <div className="bg-blue-50 p-3 rounded text-sm font-mono text-blue-800">
            recruit41.ai/interview/abc123
          </div>
        </div>
        
        <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
          Start Interview
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        
        <p className="text-xs text-gray-500">Available 24/7 • No scheduling needed</p>
      </div>
    </div>
  );

  const renderLiveInterview = () => (
    <div className="h-80 bg-gray-900 rounded-lg relative overflow-hidden">
      {/* Video call interface */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-white z-10">
        <Badge className="bg-red-600">● LIVE</Badge>
        <div className="flex items-center space-x-2 text-sm">
          <Clock className="h-4 w-4" />
          <span>12:34</span>
        </div>
      </div>

      {/* AI Avatar */}
      <div className="absolute top-16 left-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
        <Brain className="h-10 w-10 text-white" />
      </div>
      
      {/* Candidate Video */}
      <div className="absolute top-16 right-4 w-32 h-24 bg-gradient-to-br from-pink-400 to-red-500 rounded-lg flex items-center justify-center">
        <div className="text-white text-sm font-medium">Candidate</div>
      </div>

      {/* Live conversation */}
      <div className="absolute bottom-4 left-4 right-4 space-y-2">
        <div className="bg-purple-600 text-white p-3 rounded-lg rounded-bl-none text-sm max-w-xs">
          Can you explain how you would optimize a React app for performance?
        </div>
        <div className="bg-gray-700 text-white p-3 rounded-lg rounded-br-none text-sm max-w-xs ml-auto">
          I'd start with React.memo for component optimization, then implement code splitting...
        </div>
      </div>

      {/* Live analysis indicators */}
      <div className="absolute right-4 bottom-20 space-y-1">
        <div className="flex items-center space-x-2 text-xs text-green-400">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>Analyzing response...</span>
        </div>
        <div className="flex items-center space-x-2 text-xs text-blue-400">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <span>Technical depth: High</span>
        </div>
      </div>
    </div>
  );

  const renderAnalysis = () => (
    <div className="h-80 bg-white rounded-lg border p-4 overflow-y-auto">
      <div className="space-y-4">
        <div className="flex items-center space-x-2 mb-4">
          <FileText className="h-5 w-5 text-indigo-600" />
          <h3 className="font-semibold text-gray-800">Interview Analysis Complete</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-3">
              <div className="text-2xl font-bold text-green-700">8.5/10</div>
              <div className="text-sm text-green-600">Technical Score</div>
            </CardContent>
          </Card>
          
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-3">
              <div className="text-2xl font-bold text-blue-700">9.2/10</div>
              <div className="text-sm text-blue-600">Communication</div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-2">
          <h4 className="font-medium text-gray-700">Key Strengths:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Strong understanding of React optimization techniques</li>
            <li>• Clear communication of complex concepts</li>
            <li>• Practical experience with performance monitoring</li>
          </ul>
        </div>
        
        <div className="space-y-2">
          <h4 className="font-medium text-gray-700">Areas for Follow-up:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Deep-dive into system design patterns</li>
            <li>• Explore experience with microservices</li>
          </ul>
        </div>
        
        <div className="bg-indigo-50 p-3 rounded-lg">
          <p className="text-sm text-indigo-800">
            <strong>Recommendation:</strong> Strong candidate for Senior React Developer role. 
            Proceed to final round with engineering manager.
          </p>
        </div>
      </div>
    </div>
  );

  const renderStepComponent = () => {
    switch (steps[currentStep].component) {
      case "calendar": return renderCalendarChaos();
      case "link": return renderSimpleLink();
      case "interview": return renderLiveInterview();
      case "analysis": return renderAnalysis();
      default: return null;
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Progress indicators */}
      <div className="flex justify-center space-x-4 mb-8">
        {steps.map((step, index) => (
          <div 
            key={index}
            className={`flex items-center space-x-2 transition-all duration-300 ${
              index === currentStep ? 'text-indigo-600 font-semibold' : 'text-gray-400'
            }`}
          >
            <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentStep ? 'bg-indigo-600' : 'bg-gray-300'
            }`} />
            <span className="text-sm hidden md:block">{step.title}</span>
          </div>
        ))}
      </div>

      {/* Current step display */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {steps[currentStep].title}
        </h3>
        <p className="text-gray-600">
          {steps[currentStep].description}
        </p>
      </div>

      {/* Step component */}
      <div className="transition-all duration-500">
        {renderStepComponent()}
      </div>

      {/* Navigation */}
      <div className="flex justify-center space-x-4">
        {steps.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentStep(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentStep ? 'bg-indigo-600' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollytellingInterview;
