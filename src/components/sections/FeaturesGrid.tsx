
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Users, Clock, Zap, Shield, Target } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturesGrid = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-orange-500" />,
      title: "AI-Powered Screening",
      description: "Intelligent resume parsing and candidate matching using advanced AI algorithms",
      badge: "AI",
      href: null
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Bulk Candidate Sourcing",
      description: "Import and process thousands of candidates from multiple platforms simultaneously",
      badge: "Automation",
      href: null
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      title: "Automated Interviews",
      description: "Conduct AI-driven interviews with real-time assessment and scoring",
      badge: "Smart",
      href: null
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      title: "WhatsApp Integration",
      description: "Seamless candidate communication through automated WhatsApp workflows",
      badge: "Integration",
      href: "/features/whatsapp"
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-500" />,
      title: "AI Proctoring",
      description: "Advanced monitoring and fraud detection for remote assessments",
      badge: "Security",
      href: null
    },
    {
      icon: <Target className="h-8 w-8 text-orange-500" />,
      title: "Smart Matching",
      description: "Precision candidate-job matching with ML-powered recommendations",
      badge: "ML",
      href: null
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gray-100 text-gray-700 hover:bg-gray-200">
            Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Everything You Need to Hire Better
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of AI-powered tools covers every aspect of modern recruitment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            if (feature.href) {
              return (
                <Link key={index} to={feature.href}>
                  <Card className="bg-white/70 backdrop-blur-sm border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-gray-100 transition-colors">
                          {feature.icon}
                        </div>
                        <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                          {feature.badge}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-semibold text-gray-900">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              );
            } else {
              return (
                <div key={index}>
                  <Card className="bg-white/70 backdrop-blur-sm border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-gray-100 transition-colors">
                          {feature.icon}
                        </div>
                        <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                          {feature.badge}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-semibold text-gray-900">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
