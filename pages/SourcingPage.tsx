import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, DocumentArrowUpIcon, InboxIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const SourcingAggregatorAnimation: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [candidatesAdded, setCandidatesAdded] = useState(0);

  const sources = [
    { 
      name: 'Excel/CSV', 
      icon: DocumentArrowUpIcon, 
      color: 'bg-green-500', 
      files: ['naukri_candidates.xlsx', 'hirist_export.csv', 'internal_db.xlsx'] 
    },
    { 
      name: 'Gmail', 
      icon: InboxIcon, 
      color: 'bg-red-500', 
      files: ['resume_attachment_1.pdf', 'candidate_inquiry.pdf', 'referral_resume.docx'] 
    },
    { 
      name: 'LinkedIn', 
      icon: GlobeAltIcon, 
      color: 'bg-blue-700', 
      files: ['linkedin_profile_1', 'linkedin_profile_2', 'linkedin_profile_3'] 
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        const next = (prev + 1) % (sources.length + 1);
        if (next === 0) {
          setCandidatesAdded(0);
        } else {
          setCandidatesAdded(prev => prev + 3);
        }
        return next;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [sources.length]);

  return (
    <div className="bg-white rounded-xl shadow-2xl p-8 max-w-6xl mx-auto">
      <h3 className="text-2xl font-bold text-brandGray-dark mb-8 text-center">
        Sourcing Aggregator in Action
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Sources Side */}
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-brandGray-dark mb-4">Multiple Sources</h4>
          
          {sources.map((source, index) => {
            const IconComponent = source.icon;
            const isActive = activeStep === index + 1;
            
            return (
              <div 
                key={source.name}
                className={`p-4 rounded-lg border-2 transition-all duration-500 ${
                  isActive 
                    ? 'border-brandOrange bg-brandOrange-light shadow-lg transform scale-105' 
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="flex items-center mb-3">
                  <div className={`w-10 h-10 ${source.color} rounded-lg flex items-center justify-center mr-3`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h5 className="font-semibold text-brandGray-dark">{source.name}</h5>
                  {isActive && (
                    <div className="ml-auto">
                      <div className="w-3 h-3 bg-brandOrange rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
                
                {isActive && (
                  <div className="space-y-1 text-sm text-brandGray">
                    {source.files.map((file, fileIndex) => (
                      <div key={fileIndex} className="flex items-center">
                        <ArrowRightIcon className="h-4 w-4 mr-2 text-brandOrange" />
                        <span>Processing: {file}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Arrow */}
        <div className="flex justify-center">
          <div className="text-6xl text-brandOrange transform rotate-0 lg:rotate-90">
            ↓
          </div>
        </div>

        {/* Unified Pool Side */}
        <div className="lg:col-start-2 lg:row-start-1">
          <h4 className="text-lg font-semibold text-brandGray-dark mb-4">Unified Talent Pool</h4>
          
          <div className="bg-brandOrange rounded-xl p-6 text-white">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold mb-2">{candidatesAdded}</div>
              <div className="text-brandOrange-light">Candidates Added</div>
            </div>
            
            <div className="space-y-3">
              <div className="bg-white bg-opacity-20 rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Priya Sharma</span>
                  <span className="text-xs bg-white bg-opacity-30 px-2 py-1 rounded">Excel</span>
                </div>
                <div className="text-sm opacity-90">Software Engineer • 3 years</div>
              </div>
              
              <div className="bg-white bg-opacity-20 rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Rajesh Kumar</span>
                  <span className="text-xs bg-white bg-opacity-30 px-2 py-1 rounded">Gmail</span>
                </div>
                <div className="text-sm opacity-90">Senior Developer • 7 years</div>
              </div>
              
              <div className="bg-white bg-opacity-20 rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Anita Desai</span>
                  <span className="text-xs bg-white bg-opacity-30 px-2 py-1 rounded">LinkedIn</span>
                </div>
                <div className="text-sm opacity-90">Team Lead • 5 years</div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <button className="bg-white text-brandOrange px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                View All Candidates
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SourcingPage: React.FC = () => {
  const features = [
    {
      title: "Universal Excel/CSV Import",
      description: "Import candidates from any Excel or CSV format, supporting exports from Hirist, Naukri, and more.",
      details: [
        "Seamlessly integrate candidate data from various job portals",
        "Supports custom column mapping for maximum flexibility",
        "Auto-downloads and parses resume links from Google Drive, Dropbox, etc.",
        "Handles multiple file formats: XLSX, CSV, XLS"
      ]
    },
    {
      title: "Bulk Resume Upload",
      description: "Easily upload multiple resumes at once using ZIP files or entire folders.",
      details: [
        "Drag and drop functionality for user-friendly uploads",
        "Supports PDF, DOCX, DOC, RTF formats",
        "Background processing ensures you can continue working",
        "Automatic duplicate detection and merging"
      ]
    },
    {
      title: "Gmail & Google Drive Integration",
      description: "Connect your Gmail or Google Drive to automatically identify and import resumes.",
      details: [
        "Secure OAuth 2.0 connection to your Google account",
        "Set custom date ranges, sender filters, or subject line keywords",
        "Identifies resume attachments and inline resumes automatically",
        "Scheduled sync to keep your talent pool updated"
      ]
    },
    {
      title: "Chrome Sourcing Plugin",
      description: "Add candidates directly from LinkedIn or other sourcing websites with our intelligent Chrome plugin.",
      details: [
        "One-click candidate import from professional networking sites",
        "AI-powered field detection automatically populates information",
        "Option to add notes or assign to specific jobs directly from plugin",
        "Works on LinkedIn, Naukri, AngelList, and other platforms"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brandOrange-light to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-brandGray-dark mb-6">
              From Many, <span className="text-brandOrange">to One</span>
            </h1>
            <p className="text-xl md:text-2xl text-brandGray max-w-4xl mx-auto mb-8">
              Stop juggling multiple tabs and spreadsheets. Recruit41's sourcing engine unifies 
              candidates from every channel into one intelligent talent pool.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-brandOrange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brandOrange-dark transition-colors duration-200 shadow-lg">
                Try Sourcing Features
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

      {/* Main Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SourcingAggregatorAnimation />
        </div>
      </section>

      {/* Features Breakdown */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brandGray-dark mb-4">
              Every Source, Every Format, Every Channel
            </h2>
            <p className="text-xl text-brandGray max-w-3xl mx-auto">
              Our sourcing suite handles the complexity so you can focus on what matters: finding the right talent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
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

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brandGray-dark mb-4">
              Real-World Sourcing Scenarios
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-brandGray-dark mb-4">Startup Speed</h3>
              <p className="text-brandGray mb-4">
                "We needed to hire 10 engineers fast. I uploaded our Naukri export, 
                Gmail resumes, and LinkedIn saves - 150 candidates organized in minutes."
              </p>
              <div className="text-sm text-brandGray">
                <strong>Priya, Startup Founder</strong>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-brandGray-dark mb-4">Agency Efficiency</h3>
              <p className="text-brandGray mb-4">
                "Managing candidates for 5 clients used to be chaos. Now everything flows 
                into one pool, tagged by source and client automatically."
              </p>
              <div className="text-sm text-brandGray">
                <strong>Rajesh, Recruitment Agency</strong>
              </div>
            </div>

            <div className="bg-orange-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-brandGray-dark mb-4">Enterprise Scale</h3>
              <p className="text-brandGray mb-4">
                "Our recruiters source from 10+ channels. The unified view gives us 
                unprecedented visibility into our talent pipeline."
              </p>
              <div className="text-sm text-brandGray">
                <strong>Anita, Enterprise HR</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brandGray-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Unify Your Sourcing?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Stop managing multiple spreadsheets. Start building your unified talent pool today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-brandOrange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brandOrange-dark transition-colors duration-200 shadow-lg">
              Start Free Trial
            </button>
            <Link 
              to="/features/screening"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-brandGray-dark transition-colors duration-200"
            >
              Next: AI Screening →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SourcingPage;