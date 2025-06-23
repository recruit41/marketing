import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

// New interactive components for the homepage
const ScrollytellingFunnel: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoOpacity = Math.max(0, 1 - scrollY / 300);
  const funnelProgress = Math.min(1, scrollY / 500);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background logos that blur and flow into funnel */}
      <div 
        className="absolute inset-0 transition-opacity duration-300"
        style={{ opacity: logoOpacity }}
      >
        <div className="relative w-full h-full">
          {/* Floating logos */}
          <div className="absolute top-20 left-10 opacity-30 transform animate-bounce">
            <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
              Naukri
            </div>
          </div>
          <div className="absolute top-40 right-20 opacity-30 transform animate-pulse">
            <div className="w-16 h-16 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold">
              LI
            </div>
          </div>
          <div className="absolute top-60 left-1/4 opacity-30 transform animate-bounce delay-100">
            <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold">
              Gmail
            </div>
          </div>
          <div className="absolute top-32 right-1/3 opacity-30 transform animate-pulse delay-200">
            <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold">
              Excel
            </div>
          </div>
        </div>
      </div>

      {/* Funnel effect */}
      <div 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-500"
        style={{ 
          opacity: funnelProgress,
          transform: `translateX(-50%) scale(${0.5 + funnelProgress * 0.5})` 
        }}
      >
        <div className="w-32 h-32 bg-brandOrange rounded-full flex items-center justify-center shadow-2xl">
          <span className="text-white font-bold text-lg">R41</span>
        </div>
      </div>
    </div>
  );
};

const AIRankerSandbox: React.FC = () => {
  const [isRanked, setIsRanked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const jobDescription = `Senior Software Engineer
  
Looking for a seasoned software engineer with 5+ years of experience in full-stack development. Must have strong leadership experience and experience scaling engineering teams.

Required: React, Node.js, PostgreSQL, AWS
Preferred: Previous team lead experience, startup background`;

  const candidates = [
    {
      name: "Priya Sharma",
      experience: "3 years",
      skills: "React, Node.js, MongoDB",
      background: "Fresher from tier-1 college",
      score: isRanked ? 65 : null,
      reasoning: "Good technical skills but lacks leadership experience"
    },
    {
      name: "Rajesh Kumar",
      experience: "7 years",
      skills: "React, Node.js, PostgreSQL, AWS, Team Leadership",
      background: "Led teams at 2 startups, scaled from 5 to 20 engineers",
      score: isRanked ? 92 : null,
      reasoning: "Perfect match: senior experience + leadership + tech stack alignment"
    },
    {
      name: "Anita Desai",
      experience: "4 years",
      skills: "Angular, Java, MySQL",
      background: "Enterprise software development",
      score: isRanked ? 55 : null,
      reasoning: "Solid experience but technology stack mismatch"
    },
    {
      name: "Vikram Singh",
      experience: "6 years",
      skills: "React, Node.js, PostgreSQL, AWS",
      background: "Senior developer, no management experience",
      score: isRanked ? 78 : null,
      reasoning: "Strong technical fit, but no proven leadership experience"
    }
  ];

  const handleRankCandidates = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsRanked(true);
      setIsAnimating(false);
    }, 2000);
  };

  const sortedCandidates = isRanked 
    ? [...candidates].sort((a, b) => (b.score || 0) - (a.score || 0))
    : candidates;

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 max-w-4xl mx-auto">
      <h3 className="text-xl font-bold text-brandGray-dark mb-4">AI Candidate Ranking Demo</h3>
      
      {/* Job Description */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-brandGray-dark mb-2">Job Description:</h4>
        <pre className="text-sm text-brandGray whitespace-pre-wrap font-sans">{jobDescription}</pre>
      </div>

      {/* Candidates */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h4 className="font-semibold text-brandGray-dark">Candidates:</h4>
          {!isRanked && (
            <button
              onClick={handleRankCandidates}
              disabled={isAnimating}
              className="bg-brandOrange text-white px-6 py-2 rounded-lg font-semibold hover:bg-brandOrange-dark disabled:opacity-50 transition-all duration-200"
            >
              {isAnimating ? 'AI Analyzing...' : 'Let AI Rank Candidates'}
            </button>
          )}
        </div>

        <div className={`space-y-3 transition-all duration-500 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
          {sortedCandidates.map((candidate, index) => (
            <div 
              key={candidate.name}
              className={`p-4 border rounded-lg transition-all duration-500 ${
                isRanked && candidate.score 
                  ? candidate.score >= 80 
                    ? 'border-green-300 bg-green-50' 
                    : candidate.score >= 70 
                      ? 'border-yellow-300 bg-yellow-50'
                      : 'border-gray-300 bg-gray-50'
                  : 'border-gray-300 bg-white'
              }`}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h5 className="font-semibold text-brandGray-dark">{candidate.name}</h5>
                    {isRanked && candidate.score && (
                      <span className={`px-2 py-1 rounded text-sm font-semibold ${
                        candidate.score >= 80 
                          ? 'bg-green-200 text-green-800'
                          : candidate.score >= 70
                            ? 'bg-yellow-200 text-yellow-800'
                            : 'bg-gray-200 text-gray-800'
                      }`}>
                        {candidate.score}% Match
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-brandGray mt-1">{candidate.experience} • {candidate.skills}</p>
                  <p className="text-sm text-brandGray-dark mt-1">{candidate.background}</p>
                  {isRanked && candidate.reasoning && (
                    <p className="text-sm text-blue-700 mt-2 italic">AI Reasoning: {candidate.reasoning}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AIInterviewSnapshot: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "AI: Hello! I'm excited to discuss your software engineering background. Can you start by telling me about your most challenging project?",
    "Candidate: I led the migration of our monolithic application to microservices. It involved coordinating with 3 teams...",
    "AI: That sounds complex. How did you handle the data consistency challenges during the migration?",
    "Candidate: We implemented an event-driven architecture with Apache Kafka for eventual consistency...",
    "AI: Excellent approach. Can you walk me through how you would design a system to handle 1 million concurrent users?"
  ];

  const analysis = [
    "Strong technical communication",
    "Real-world architecture experience",
    "Good system design knowledge",
    "Leadership experience evident",
    "Problem-solving approach is methodical"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
        {/* Interview Side */}
        <div className="bg-gray-900 text-white p-6">
          <h3 className="text-lg font-bold mb-4">Live AI Interview</h3>
          
          {/* Mock video interface */}
          <div className="bg-gray-800 rounded-lg p-4 mb-4 h-48 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-xl">👤</span>
              </div>
              <p className="text-sm text-gray-300">Candidate Video</p>
            </div>
          </div>

          {/* Conversation */}
          <div className="space-y-3 h-32 overflow-y-auto">
            {steps.slice(0, currentStep + 1).map((step, index) => (
              <div key={index} className={`text-sm ${step.startsWith('AI:') ? 'text-blue-300' : 'text-green-300'}`}>
                {step}
              </div>
            ))}
          </div>
        </div>

        {/* Analysis Side */}
        <div className="p-6 bg-gray-50">
          <h3 className="text-lg font-bold text-brandGray-dark mb-4">Real-time Analysis</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-brandGray-dark mb-2">AI Assessment</h4>
              <div className="space-y-2">
                {analysis.slice(0, Math.min(currentStep + 1, analysis.length)).map((item, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-brandGray-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-brandGray-dark mb-2">Skills Demonstrated</h4>
              <div className="flex flex-wrap gap-2">
                {['Microservices', 'System Design', 'Leadership', 'Apache Kafka'].slice(0, Math.min(currentStep, 4)).map((skill, index) => (
                  <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-brandGray-dark mb-2">Overall Score</h4>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(currentStep * 20, 85)}%` }}
                ></div>
              </div>
              <p className="text-sm text-brandGray mt-1">{Math.min(currentStep * 20, 85)}% Technical Fit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <div className="text-brandGray-dark">
      {/* Hero Section - The Hook */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-brandOrange-light overflow-hidden">
        <ScrollytellingFunnel />
        
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-brandGray-dark mb-8 leading-tight">
              Stop Drowning in Resumes.<br />
              <span className="text-brandOrange">Start Discovering Talent.</span>
            </h1>
            <p className="text-xl md:text-2xl text-brandGray-dark mb-12 max-w-4xl mx-auto leading-relaxed">
              Recruit41 is the AI-powered ATS that unifies your workflow, turning chaotic sourcing 
              into a streamlined search for India's best talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-brandOrange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brandOrange-dark transition-colors duration-200 shadow-lg">
                Request a Demo
              </button>
              <button className="border-2 border-brandOrange text-brandOrange px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brandOrange hover:text-white transition-colors duration-200">
                See it in Action
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDownIcon className="h-8 w-8 text-brandOrange" />
        </div>
      </section>

      {/* Section 2: The Transformation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-brandGray-dark mb-16">
            The Old Way is Broken. <span className="text-brandOrange">Welcome to the New Way.</span>
          </h2>

          {/* Feature 1: Sourcing */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center mb-24">
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold text-brandGray-dark mb-6">Unify Every Source</h3>
              <p className="text-lg text-brandGray mb-8 leading-relaxed">
                Stop juggling tabs. Whether it's a CSV from Naukri, resumes in your Gmail, 
                or a LinkedIn profile, bring them all into one intelligent talent pool instantly.
              </p>
              <Link 
                to="/features/sourcing"
                className="text-brandOrange font-semibold hover:text-brandOrange-dark transition-colors duration-200"
              >
                Learn more about Sourcing →
              </Link>
            </div>
            <div className="lg:col-span-3">
              {/* Sourcing Animation */}
              <div className="bg-gray-50 rounded-xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex justify-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">Excel</div>
                    <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold">Gmail</div>
                    <div className="w-16 h-16 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold">LI</div>
                  </div>
                  <div className="text-2xl mb-4">↓</div>
                  <div className="w-48 h-32 bg-brandOrange rounded-lg mx-auto flex items-center justify-center text-white font-bold text-lg">
                    Unified Talent Pool
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: Screening - AI Ranker */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center mb-24">
            <div className="lg:col-span-3 order-2 lg:order-1">
              <AIRankerSandbox />
            </div>
            <div className="lg:col-span-2 order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-brandGray-dark mb-6">Find the Perfect Fit in Seconds</h3>
              <p className="text-lg text-brandGray mb-8 leading-relaxed">
                Our AI doesn't just match keywords. It understands career trajectory, context, 
                and your specific criteria to rank candidates with unparalleled accuracy.
              </p>
              <Link 
                to="/features/screening"
                className="text-brandOrange font-semibold hover:text-brandOrange-dark transition-colors duration-200"
              >
                Learn more about AI Screening →
              </Link>
            </div>
          </div>

          {/* Feature 3: Interviews */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold text-brandGray-dark mb-6">Conduct Deep-Dive Interviews. Automatically.</h3>
              <p className="text-lg text-brandGray mb-8 leading-relaxed">
                Our conversational AI conducts in-depth technical and behavioral interviews 24/7. 
                Get rich data and full recordings, without ever needing to schedule a call.
              </p>
              <Link 
                to="/features/interviews"
                className="text-brandOrange font-semibold hover:text-brandOrange-dark transition-colors duration-200"
              >
                Learn more about AI Interviews →
              </Link>
            </div>
            <div className="lg:col-span-3">
              <AIInterviewSnapshot />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof & Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-brandGray-dark mb-4">
            Trusted by recruiters at...
          </h2>
          
          {/* Logo bar - placeholder */}
          <div className="flex justify-center items-center space-x-12 mb-16 opacity-60">
            <div className="text-2xl font-bold text-gray-400">TechCorp</div>
            <div className="text-2xl font-bold text-gray-400">StartupXYZ</div>
            <div className="text-2xl font-bold text-gray-400">IndiaTech</div>
            <div className="text-2xl font-bold text-gray-400">DevCorp</div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-brandGray mb-4 italic">
                "Recruit41's AI screening cut our resume review time by 80%. We're now focusing on 
                actual conversations with qualified candidates instead of drowning in paperwork."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-brandOrange rounded-full flex items-center justify-center text-white font-bold mr-4">
                  S
                </div>
                <div>
                  <p className="font-semibold text-brandGray-dark">Shruti Malhotra</p>
                  <p className="text-sm text-brandGray">Senior Recruiter, TechCorp</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-brandGray mb-4 italic">
                "The AI interviews are game-changing. Candidates love the flexibility, and we get 
                consistent, unbiased assessments that help us make better hiring decisions."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-brandOrange rounded-full flex items-center justify-center text-white font-bold mr-4">
                  R
                </div>
                <div>
                  <p className="font-semibold text-brandGray-dark">Rajesh Gupta</p>
                  <p className="text-sm text-brandGray">Head of Talent, StartupXYZ</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-brandGray mb-4 italic">
                "Finally, an ATS that understands the Indian market. The Gmail integration and 
                WhatsApp CRM have revolutionized how we engage with candidates."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-brandOrange rounded-full flex items-center justify-center text-white font-bold mr-4">
                  P
                </div>
                <div>
                  <p className="font-semibold text-brandGray-dark">Priya Nair</p>
                  <p className="text-sm text-brandGray">Recruitment Manager, IndiaTech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-brandGray-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Recruiting?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the evolution. Stop drowning in chaos. Start discovering talent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-brandOrange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brandOrange-dark transition-colors duration-200 shadow-lg">
              Request a Demo
            </button>
            <Link 
              to="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-brandGray-dark transition-colors duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;