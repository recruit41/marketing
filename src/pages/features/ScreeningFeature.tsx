
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MessageSquare, Users, Clock, Target, Filter, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import WhatsAppCRMShowcase from "@/components/animations/WhatsAppCRMShowcase";

const ScreeningFeature = () => {
  const subFeatures = [
    {
      icon: <Filter className="h-6 w-6 text-blue-500" />,
      title: "Smart Candidate Filtering",
      description: "AI-powered filters that understand context, not just keywords"
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-green-500" />,
      title: "WhatsApp Integration",
      description: "Instant candidate communication through India's favorite messaging platform"
    },
    {
      icon: <Target className="h-6 w-6 text-purple-500" />,
      title: "Automated Follow-ups",
      description: "Smart scheduling and reminder systems that candidates actually respond to"
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      title: "Real-time Updates",
      description: "Live status tracking as candidates respond and engage with your process"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Recruit41
                </span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-green-100 text-green-700 hover:bg-green-200 px-4 py-2 text-sm font-medium">
            🇮🇳 Built for Indian Recruiters
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Candidates
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent block">
              Through WhatsApp
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Connect with candidates instantly through WhatsApp. Send personalized messages, 
            track responses, and update your ATS automatically.
          </p>
        </div>
      </section>

      {/* Main Showcase */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              See WhatsApp CRM in Action
            </h2>
            <p className="text-lg text-gray-600">
              Watch how candidate responses automatically update your ATS
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <WhatsAppCRMShowcase />
          </div>
        </div>
      </section>

      {/* Sub-features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Screening Solution
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to efficiently screen and engage with candidates in India's preferred communication style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subFeatures.map((feature, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-gray-50 rounded-xl">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-green-600 to-blue-600 border-0 text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Screening?
              </h2>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Start screening candidates through WhatsApp today and see response rates soar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-green-600 hover:bg-gray-50 text-lg px-8 py-6"
                >
                  Start Free Trial
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
                >
                  Book Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ScreeningFeature;
