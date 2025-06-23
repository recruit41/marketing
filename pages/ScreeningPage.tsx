import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChatBubbleLeftRightIcon, PhoneIcon, SparklesIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const WhatsAppCRMShowcase: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedCandidates, setSelectedCandidates] = useState<number[]>([]);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [responses, setResponses] = useState<{[key: number]: string}>({});

  const candidates = [
    { id: 1, name: 'Priya Sharma', role: 'Frontend Developer', location: '', experience: '3 years', status: 'New' },
    { id: 2, name: 'Rajesh Kumar', role: 'Backend Engineer', location: '', experience: '5 years', status: 'New' },
    { id: 3, name: 'Anita Desai', role: 'Full Stack Developer', location: '', experience: '4 years', status: 'New' },
    { id: 4, name: 'Vikram Singh', role: 'DevOps Engineer', location: '', experience: '6 years', status: 'New' }
  ];

  const steps = [
    "Select candidates from ATS table",
    "Compose WhatsApp message with templates",
    "Send bulk personalized messages",
    "Responses automatically update ATS fields"
  ];

  const whatsappTemplate = `Hi {FirstName}, 

I am Shruti from TechCorp. You applied for {JobTitle} via {Source}. 

This role requires working out of {Location}. Are you comfortable with this location?

Please let me know your current location preference.

Best regards,
Shruti Malhotra
Senior Recruiter, TechCorp`;

  const simulatedResponses = {
    1: "Yes, I'm comfortable working from Bangalore. My current location is HSR Layout.",
    2: "I prefer Mumbai but can relocate to Bangalore if needed. Currently in Andheri.",
    3: "I'm already in Bangalore, Koramangala area. Very comfortable.",
    4: "I would prefer remote work but can visit Bangalore office as needed. Based in Pune."
  };

  useEffect(() => {
    if (currentStep === 3 && Object.keys(responses).length === 0) {
      setTimeout(() => {
        setResponses(simulatedResponses);
      }, 2000);
    }
  }, [currentStep]);

  const handleCandidateSelect = (candidateId: number) => {
    setSelectedCandidates(prev => 
      prev.includes(candidateId) 
        ? prev.filter(id => id !== candidateId)
        : [...prev, candidateId]
    );
  };

  const handleSendMessages = () => {
    setShowWhatsAppModal(true);
    setTimeout(() => {
      setCurrentStep(2);
      setShowWhatsAppModal(false);
      setTimeout(() => {
        setCurrentStep(3);
      }, 1500);
    }, 3000);
  };

  const candidatesWithLocation = candidates.map(candidate => ({
    ...candidate,
    location: responses[candidate.id] ? 
      responses[candidate.id].includes('HSR') ? 'HSR Layout, Bangalore' :
      responses[candidate.id].includes('Andheri') ? 'Andheri, Mumbai' :
      responses[candidate.id].includes('Koramangala') ? 'Koramangala, Bangalore' :
      responses[candidate.id].includes('Pune') ? 'Pune (Remote Preferred)' : ''
      : candidate.location,
    status: responses[candidate.id] ? 'Location Confirmed' : candidate.status
  }));

  return (
    <div className="bg-white rounded-xl shadow-2xl p-8 max-w-7xl mx-auto">
      <h3 className="text-2xl font-bold text-brandGray-dark mb-8 text-center">
        WhatsApp CRM in Action
      </h3>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                index <= currentStep ? 'bg-brandOrange text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                {index < currentStep ? <CheckCircleIcon className="h-5 w-5" /> : index + 1}
              </div>
              {index < steps.length - 1 && (
                <div className={`w-24 h-1 mx-2 ${
                  index < currentStep ? 'bg-brandOrange' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-brandGray font-medium">{steps[currentStep]}</p>
        </div>
      </div>

      {/* ATS Table */}
      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-semibold text-brandGray-dark">Software Engineer Candidates</h4>
          {currentStep === 1 && selectedCandidates.length > 0 && (
            <button
              onClick={handleSendMessages}
              className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200 flex items-center"
            >
              <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2" />
              Send WhatsApp Messages ({selectedCandidates.length})
            </button>
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-3">
                  {currentStep >= 1 && (
                    <input 
                      type="checkbox" 
                      className="mr-2"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedCandidates(candidates.map(c => c.id));
                          setCurrentStep(1);
                        } else {
                          setSelectedCandidates([]);
                        }
                      }}
                    />
                  )}
                  Select
                </th>
                <th className="text-left py-2 px-3">Name</th>
                <th className="text-left py-2 px-3">Role</th>
                <th className="text-left py-2 px-3">Experience</th>
                <th className="text-left py-2 px-3">Location</th>
                <th className="text-left py-2 px-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {candidatesWithLocation.map((candidate) => (
                <tr key={candidate.id} className={`border-b hover:bg-gray-100 ${
                  selectedCandidates.includes(candidate.id) ? 'bg-blue-50' : ''
                }`}>
                  <td className="py-3 px-3">
                    {currentStep >= 1 && (
                      <input
                        type="checkbox"
                        checked={selectedCandidates.includes(candidate.id)}
                        onChange={() => handleCandidateSelect(candidate.id)}
                      />
                    )}
                  </td>
                  <td className="py-3 px-3 font-medium">{candidate.name}</td>
                  <td className="py-3 px-3">{candidate.role}</td>
                  <td className="py-3 px-3">{candidate.experience}</td>
                  <td className="py-3 px-3">
                    <span className={`${
                      candidate.location && responses[candidate.id] 
                        ? 'text-green-700 font-medium' 
                        : 'text-gray-400'
                    }`}>
                      {candidate.location || 'Not specified'}
                    </span>
                  </td>
                  <td className="py-3 px-3">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      candidate.status === 'Location Confirmed' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {candidate.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* WhatsApp Modal */}
      {showWhatsAppModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center mb-4">
              <ChatBubbleLeftRightIcon className="h-6 w-6 text-green-500 mr-2" />
              <h4 className="text-lg font-semibold">Sending WhatsApp Messages</h4>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <h5 className="font-medium mb-2">Message Template:</h5>
              <div className="text-sm text-brandGray whitespace-pre-line font-mono bg-white p-3 rounded border">
                {whatsappTemplate}
              </div>
            </div>

            <div className="space-y-2">
              {selectedCandidates.map((candidateId) => {
                const candidate = candidates.find(c => c.id === candidateId);
                return (
                  <div key={candidateId} className="flex items-center text-sm">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span>Sending to {candidate?.name}...</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Response Preview */}
      {currentStep === 3 && Object.keys(responses).length > 0 && (
        <div className="bg-green-50 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-brandGray-dark mb-4 flex items-center">
            <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2 text-green-500" />
            Candidate Responses
          </h4>
          <div className="space-y-3">
            {Object.entries(responses).map(([candidateId, response]) => {
              const candidate = candidates.find(c => c.id === parseInt(candidateId));
              return (
                <div key={candidateId} className="bg-white rounded-lg p-4 border border-green-200">
                  <div className="font-medium text-brandGray-dark mb-2">{candidate?.name}:</div>
                  <div className="text-brandGray text-sm italic">"{response}"</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const ScreeningPage: React.FC = () => {
  const features = [
    {
      title: "AI-Powered Resume Screening",
      description: "Rank candidates based on their fitment to the job using natural language criteria.",
      details: [
        "Natural language criteria input - just describe what you're looking for",
        "Understands career trajectory and context, not just keywords",
        "Provides fitment scores with detailed reasoning",
        "Highlights relevant sections in resumes automatically"
      ]
    },
    {
      title: "WhatsApp CRM Integration",
      description: "Send personalized WhatsApp messages and automatically capture responses in your ATS.",
      details: [
        "Send bulk personalized messages using smart templates",
        "Auto-populates candidate names, job titles, and sources",
        "Responses automatically update custom ATS fields",
        "Works seamlessly with location preferences, availability, and more"
      ]
    },
    {
      title: "Click-to-Call",
      description: "Sync candidate phone numbers to your phone and call them directly from the ATS.",
      details: [
        "One-click calling directly from candidate profiles",
        "Integrates with your phone's default calling app",
        "Automatically logs call attempts and outcomes",
        "Reduces manual dialing errors and saves time"
      ]
    },
    {
      title: "Smart Filtering & Search",
      description: "Find the right candidates faster with AI-enhanced search and filtering capabilities.",
      details: [
        "Natural language search queries",
        "Smart filters that understand context",
        "Saved search templates for common requirements",
        "Boolean search with intelligent suggestions"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-brandGray-dark mb-6">
              From Guesswork, <span className="text-brandOrange">to Certainty</span>
            </h1>
            <p className="text-xl md:text-2xl text-brandGray max-w-4xl mx-auto mb-8">
              Stop manually sifting through hundreds of resumes. Our AI understands what you're looking for
              and finds the perfect candidates in seconds, not hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-brandOrange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brandOrange-dark transition-colors duration-200 shadow-lg">
                Try AI Screening
              </button>
              <Link 
                to="/pricing"
                className="border-2 border-brandOrange text-brandOrange px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brandOrange hover:text-white transition-colors duration-200"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CRM Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brandGray-dark mb-4">
              Engage Candidates Where They Are
            </h2>
            <p className="text-xl text-brandGray max-w-3xl mx-auto">
              WhatsApp is how India communicates. Our CRM integration lets you reach candidates 
              instantly and capture their responses automatically.
            </p>
          </div>
          <WhatsAppCRMShowcase />
        </div>
      </section>

      {/* AI Screening Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brandGray-dark mb-4">
              Beyond Keyword Matching
            </h2>
            <p className="text-xl text-brandGray max-w-3xl mx-auto">
              Our AI screening understands context, career progression, and nuanced requirements
              that traditional ATS systems miss.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-brandGray-dark mb-6">Natural Language Criteria</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="text-sm text-brandGray mb-2">Instead of this:</div>
                  <div className="text-sm font-mono bg-red-50 p-3 rounded text-red-700">
                    experience:5+ AND (javascript OR react OR node) AND (lead OR senior OR manager)
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 border border-green-200">
                  <div className="text-sm text-brandGray mb-2">Just say this:</div>
                  <div className="text-sm bg-green-50 p-3 rounded text-green-700">
                    "Looking for a senior developer with 5+ years who has led teams and worked on 
                    modern web applications using React or similar frameworks"
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-brandGray-dark mb-6">Context-Aware Results</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <SparklesIcon className="h-6 w-6 text-brandOrange mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-brandGray-dark">Career Trajectory Analysis</h4>
                    <p className="text-brandGray text-sm">Understands progression from junior to senior roles</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <SparklesIcon className="h-6 w-6 text-brandOrange mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-brandGray-dark">Technology Evolution</h4>
                    <p className="text-brandGray text-sm">Recognizes skill growth and technology adoption</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <SparklesIcon className="h-6 w-6 text-brandOrange mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-brandGray-dark">Industry Context</h4>
                    <p className="text-brandGray text-sm">Factors in industry-specific requirements and norms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Breakdown */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brandGray-dark mb-4">
              Complete Screening Suite
            </h2>
            <p className="text-xl text-brandGray max-w-3xl mx-auto">
              From AI-powered resume analysis to seamless candidate engagement, 
              we've got every step of your screening process covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-brandGray-dark mb-4">{feature.title}</h3>
                <p className="text-brandGray mb-6 text-lg">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-brandOrange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-brandGray-dark">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-brandOrange text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Screening Success Stories</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">80% Time Savings</h3>
              <p className="mb-4 opacity-90">
                "What used to take me 4 hours of resume screening now takes 30 minutes. 
                The AI finds candidates I would have missed."
              </p>
              <div className="text-sm opacity-75">
                <strong>Priya Malhotra, TechCorp</strong>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">95% Response Rate</h3>
              <p className="mb-4 opacity-90">
                "WhatsApp messages get instant responses. Our candidate engagement 
                has never been this effective."
              </p>
              <div className="text-sm opacity-75">
                <strong>Rajesh Gupta, StartupXYZ</strong>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">Better Quality Hires</h3>
              <p className="mb-4 opacity-90">
                "The AI understands nuances that keyword searches miss. 
                Our hire quality has improved significantly."
              </p>
              <div className="text-sm opacity-75">
                <strong>Anita Sharma, IndiaTech</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brandGray-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Screen Smarter?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Stop wasting time on manual screening. Let AI find your perfect candidates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-brandOrange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brandOrange-dark transition-colors duration-200 shadow-lg">
              Start Free Trial
            </button>
            <Link 
              to="/features/interviews"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-brandGray-dark transition-colors duration-200"
            >
              Next: AI Interviews →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScreeningPage;