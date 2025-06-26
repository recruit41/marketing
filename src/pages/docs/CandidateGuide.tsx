import React from 'react';
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, AlertTriangle, Info, CheckCircle, XCircle } from "lucide-react";

const CandidateGuide = () => {
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
              Welcome to Your Recruit41 Interview!
            </h1>
            <p className="text-xl text-slate-600">
              We're excited to have you interview with us! To ensure a smooth and successful experience on the Recruit41 platform, please carefully review this guide.
            </p>
          </div>

          <Card className="mb-8 border-blue-200 bg-blue-50">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Info className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-blue-900">Quick Overview</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-blue-800">
                This guide will help you prepare for your AI-powered interview with Kiran, our virtual interviewer. 
                Following these guidelines will ensure a fair and effective evaluation of your skills.
              </p>
            </CardContent>
          </Card>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Before Your Interview</h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Use Google Chrome Browser</h3>
              <p className="text-slate-600 mb-4">Our platform exclusively supports the official Google Chrome browser.</p>
              
              <Card className="border-yellow-200 bg-yellow-50">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-600" />
                    <CardTitle className="text-yellow-900">Unsupported Browsers</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-yellow-800">
                    Please avoid using Chromium-based browsers (e.g., Brave, Arc), Safari, Microsoft Edge, or any mobile browsers.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Check your Camera and Microphone</h3>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li><strong>Working Equipment</strong>: Ensure your camera and microphone are functioning correctly. Bluetooth headphones/earphones are recommended if available.</li>
                <li><strong>Bluetooth Users</strong>: If using Bluetooth, set your devices as the default microphone and speaker in your operating system settings.</li>
                <li><strong>Test Your Setup</strong>: Critically, test your camera and microphone at <a href="https://webcammictest.com" className="text-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">webcammictest.com</a> well before your interview.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Prepare for Screen Sharing</h3>
              <p className="text-slate-600 mb-4">During the interview, you might be asked to share your screen.</p>
              
              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    <CardTitle className="text-red-900">Important</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-red-800">
                    You must share your entire screen (not just a tab or window). This is crucial for us to evaluate any code you write. 
                    Without full screen sharing, we cannot grade your code.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-6">During Your Interview</h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Positioning the Camera</h3>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
                <li><strong>Clear View</strong>: Your entire upper body (including face, arms, and hands) must be clearly visible to the interviewer.</li>
                <li><strong>Distance</strong>: This typically means sitting approximately 3 feet or more away from your computer screen.</li>
                <li><strong>Pen & Paper</strong>: You may use pen and paper, but ensure your hands, pen, and paper remain visible.</li>
                <li><strong>Exception for Coding</strong>: When asked to write code, you may move closer to the screen.</li>
              </ul>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <CardTitle className="text-green-900">Correct Position</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-800">Sitting at a proper distance, hands visible.</p>
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <XCircle className="h-5 w-5 text-red-600" />
                      <CardTitle className="text-red-900">Incorrect Position</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-red-800">
                      Sitting too close, hands not visible, using your mobile phone, looking away during the interview and not wearing headphones.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Interacting with Kiran, your AI Interviewer</h3>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li><strong>Thoughtful Responses</strong>: Respond with a few complete sentences rather than 1-2 word answers. This helps Kiran (and any human reviewers) understand your thought process.</li>
                <li><strong>If Kiran seems stuck</strong>: If Kiran appears unresponsive, prompt it by saying, "Hey Kiran, are you there?"</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>The AI interviewer asks: 'Are you there?' while I am answering the question. What should I do?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">This usually means the AI cannot hear you. Please:</p>
                  <ol className="list-decimal pl-6 mt-2 space-y-1">
                    <li>Check if your audio is muted.</li>
                    <li>Ensure you've granted microphone and camera permissions to the browser.</li>
                    <li>Confirm the correct microphone is selected as default in your operating system.</li>
                    <li>Test your setup at <a href="https://webcammictest.com" className="text-orange-600 hover:underline">webcammictest.com</a></li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What if the AI interviewer isn't responding?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    First, try prompting it with "Hey Kiran, are you there?". If there's still no response, you can disconnect and rejoin the interview.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>I faced some platform-related issues during my interview. Will it affect my application?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    No, any platform-related errors will not negatively impact your application.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Ready to Start?</h3>
              <Button asChild className="bg-orange-500 hover:bg-orange-600">
                <a href="https://demo.recruit41.com/" target="_blank" rel="noopener noreferrer">
                  Try Demo Interview
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CandidateGuide;