
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MessageSquare, Users, Clock, Zap, Send, CheckCheck } from "lucide-react";
import { Link } from "react-router-dom";
import RefinedWhatsAppFlow from "@/components/animations/RefinedWhatsAppFlow";

const WhatsAppFeature = () => {
  const subFeatures = [
    {
      icon: <Send className="h-6 w-6 text-orange-500" />,
      title: "Bulk Message Sending",
      description: "Send personalized messages to multiple candidates simultaneously"
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-orange-500" />,
      title: "Real-time Chat Interface",
      description: "Manage conversations with an intuitive WhatsApp-like interface"
    },
    {
      icon: <CheckCheck className="h-6 w-6 text-orange-500" />,
      title: "Response Tracking",
      description: "Automatically track and categorize candidate responses"
    },
    {
      icon: <Zap className="h-6 w-6 text-orange-500" />,
      title: "ATS Integration",
      description: "Seamlessly update candidate status in your ATS based on responses"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-900">
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
              <Button className="bg-orange-500 hover:bg-orange-600">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-orange-100 text-orange-700 hover:bg-orange-200 px-4 py-2 text-sm font-medium">
            🚀 WhatsApp Integration
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Connect with Candidates
            <span className="text-orange-500 block">
              Through WhatsApp
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Streamline your recruitment process with automated WhatsApp messaging. 
            Send personalized messages, track responses, and update your ATS automatically.
          </p>
        </div>
      </section>

      {/* Main Showcase */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              See WhatsApp Integration in Action
            </h2>
            <p className="text-lg text-slate-600">
              Watch how candidate interactions flow seamlessly from selection to response tracking
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <RefinedWhatsAppFlow />
          </div>
        </div>
      </section>

      {/* Sub-features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Complete WhatsApp Solution
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Everything you need to efficiently communicate with candidates through WhatsApp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subFeatures.map((feature, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-slate-50 rounded-xl">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold text-slate-900">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed text-base">
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
          <Card className="bg-orange-500 border-0 text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Recruitment?
              </h2>
              <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                Start using WhatsApp integration today and see response rates improve dramatically.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-orange-500 hover:bg-slate-50 text-lg px-8 py-6"
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

export default WhatsAppFeature;
