import React from 'react';
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Mail, FileText, BarChart3 } from "lucide-react";

const RecruiterGuide = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <Button 
              variant="outline" 
              onClick={() => window.location.href = '/docs'}
              className="mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Documentation
            </Button>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Recruiter Guide
            </h1>
            <p className="text-xl text-slate-600">
              Welcome to the Recruit41 Recruiter Guide! This guide is designed to help you effectively use the Recruit41 platform to streamline your hiring process.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Getting Started</h2>
            
            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Mail className="h-8 w-8 text-orange-500" />
                  <div>
                    <CardTitle className="text-xl">Email Templates</CardTitle>
                    <CardDescription>
                      Professional email templates for candidate communication
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.location.href = '/docs/recruiter/email-templates'}
                >
                  View Email Templates
                  <FileText className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Features</h2>
            
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl">🤖</span>
                    </div>
                    <div>
                      <CardTitle>AI-Powered Interviews</CardTitle>
                      <CardDescription>
                        Conduct consistent, unbiased interviews with Kiran, our virtual interviewer
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Leverage our AI technology to ensure every candidate receives the same high-quality interview experience, 
                    eliminating human bias and scheduling conflicts.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl">👥</span>
                    </div>
                    <div>
                      <CardTitle>Candidate Management</CardTitle>
                      <CardDescription>
                        Track and manage candidates through the hiring pipeline
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Organize and monitor candidate progress with our comprehensive management system, 
                    making it easy to track interview status and results.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <BarChart3 className="w-10 h-10 text-orange-500" />
                    <div>
                      <CardTitle>Analytics</CardTitle>
                      <CardDescription>
                        Gain insights from interview performance data
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Access detailed analytics and reports to understand candidate performance trends, 
                    optimize your hiring process, and make data-driven decisions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Best Practices</h2>
            
            <div className="bg-slate-50 rounded-lg p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Setting Up Interviews</h3>
                  <p className="text-slate-600 text-sm">
                    Clearly communicate interview expectations to candidates and provide them with the candidate guide 
                    to ensure they're properly prepared.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Reviewing Results</h3>
                  <p className="text-slate-600 text-sm">
                    Take time to review interview recordings and AI assessments alongside candidate responses 
                    to make comprehensive hiring decisions.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Candidate Communication</h3>
                  <p className="text-slate-600 text-sm">
                    Use our provided email templates to maintain professional and consistent communication 
                    throughout the hiring process.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Support</h2>
            <p className="text-slate-600 mb-6">
              For additional assistance, please contact our support team
            </p>
            <Button variant="outline" asChild>
              <a href="mailto:support@recruit41.com">
                <Mail className="mr-2 h-4 w-4" />
                support@recruit41.com
              </a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RecruiterGuide;