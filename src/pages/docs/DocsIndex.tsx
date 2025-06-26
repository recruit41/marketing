import React from 'react';
import DocsLayout from '@/components/docs/DocsLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Users, BookOpen, Mail, MessageCircle, Bot, Shield, TrendingUp, Settings, PlayCircle, FileText, Phone, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const DocsIndex = () => {
  return (
    <DocsLayout title="Welcome to Recruit41 Documentation">
      <div className="space-y-8">
        {/* Quick Start Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow border-slate-200">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Candidate Guide</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                Everything you need to know about your AI-powered interview experience with Kiran, our virtual interviewer.
              </p>
              <Link to="/docs/candidate">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Get started with your interview
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-slate-200">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Recruiter Guide</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                Resources for recruiters to effectively use the Recruit41 platform and manage candidate interviews.
              </p>
              <Link to="/docs/recruiter">
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Manage your recruitment process
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-lg p-6 border border-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">About Recruit41</h2>
          <p className="text-slate-600 leading-relaxed">
            Recruit41 is an AI-driven automated interview platform that helps organizations streamline their hiring process. 
            Our platform features <strong>Kiran</strong>, our AI recruitment bot, who conducts professional, consistent interviews 
            to help you identify the best candidates efficiently.
          </p>
        </div>

        {/* Key Features */}
        <div className="bg-white rounded-lg p-6 border border-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Bot className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">AI-Powered Interviews</h3>
                <p className="text-slate-600">
                  Kiran, our virtual interviewer, conducts professional, consistent interviews that adapt to each candidate.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Shield className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Data Privacy & Security</h3>
                <p className="text-slate-600">
                  Complete separation of data with dedicated subsites for each company. Your data belongs to you.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Streamlined Hiring Process</h3>
                <p className="text-slate-600">
                  Evaluate candidates through dynamic conversations and tasks, with comprehensive assessment reports.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Settings className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Customizable Experience</h3>
                <p className="text-slate-600">
                  Tailor interviews based on required skills and behaviors specific to your organization's needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Getting Started */}
        <div className="bg-white rounded-lg p-6 border border-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Getting Started</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                <Users className="h-5 w-5 mr-2 text-blue-600" />
                For Candidates
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FileText className="h-4 w-4 text-slate-500" />
                  <Link to="/docs/candidate" className="text-blue-600 hover:text-blue-800 transition-colors">
                    Interview Instructions – Complete guide to your interview process
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <PlayCircle className="h-4 w-4 text-slate-500" />
                  <a 
                    href="https://demo.recruit41.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Practice Interview – Try a mock interview with Kiran
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-green-600" />
                For Recruiters
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-slate-500" />
                  <Link to="/docs/recruiter/email-templates" className="text-green-600 hover:text-green-800 transition-colors">
                    Email Templates – Ready-to-use templates for candidate communication
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-4 w-4 text-slate-500" />
                  <Link to="/docs/recruiter" className="text-green-600 hover:text-green-800 transition-colors">
                    Platform Overview – Learn how to use the Recruit41 platform effectively
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-slate-900 text-white rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Support</h2>
          <p className="text-slate-300 mb-6">
            For any questions or issues, please contact our support team:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-orange-400" />
              <div>
                <p className="font-medium">Email</p>
                <a href="mailto:support@recruit41.com" className="text-orange-400 hover:text-orange-300 transition-colors">
                  support@recruit41.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <MessageCircle className="h-5 w-5 text-orange-400" />
              <div>
                <p className="font-medium">Live Chat</p>
                <p className="text-slate-400">Available during your interview session</p>
              </div>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-white rounded-lg p-6 border border-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Resources & Company</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Resources</h3>
              <div className="space-y-2">
                <Link to="/docs/candidate#frequently-asked-questions-faqs" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <FileText className="h-4 w-4" />
                  <span>FAQ</span>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Company</h3>
              <div className="space-y-2">
                <a href="https://recruit41.com/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <Globe className="h-4 w-4" />
                  <span>About Recruit41</span>
                </a>
                <a href="https://www.linkedin.com/company/recruit41" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <Users className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
                <a href="mailto:support@recruit41.com" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <Mail className="h-4 w-4" />
                  <span>Contact Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
};

export default DocsIndex;