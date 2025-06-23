import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDownIcon, 
  ClockIcon, 
  UserGroupIcon, 
  ChartBarIcon,
  CheckCircleIcon,
  XMarkIcon,
  ArrowRightIcon,
  PlayIcon
} from '@heroicons/react/24/outline';

// Enhanced scrollytelling component
const ScrollytellingFunnel: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoOpacity = Math.max(0, 1 - scrollY / 400);
  const funnelProgress = Math.min(1, scrollY / 600);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Chaos - Multiple scattered sources */}
      <div 
        className="absolute inset-0 transition-all duration-500"
        style={{ opacity: logoOpacity }}
      >
        <div className="relative w-full h-full">
          {/* Scattered recruitment sources */}
          <div className="absolute top-20 left-8 opacity-40 transform animate-bounce">
            <div className="w-20 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
              <span className="text-sm">Naukri</span>
            </div>
          </div>
          <div className="absolute top-40 right-16 opacity-40 transform animate-pulse">
            <div className="w-20 h-16 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
              <span className="text-sm">LinkedIn</span>
            </div>
          </div>
          <div className="absolute top-60 left-1/4 opacity-40 transform animate-bounce delay-100">
            <div className="w-20 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
              <span className="text-sm">Gmail</span>
            </div>
          </div>
          <div className="absolute top-32 right-1/3 opacity-40 transform animate-pulse delay-200">
            <div className="w-20 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
              <span className="text-sm">Excel</span>
            </div>
          </div>
          <div className="absolute bottom-40 left-12 opacity-40 transform animate-bounce delay-300">
            <div className="w-20 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
              <span className="text-sm">Hirist</span>
            </div>
          </div>
        </div>
      </div>

      {/* Unity - All flowing into Recruit41 */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700"
        style={{ 
          opacity: funnelProgress,
          transform: `translateX(-50%) scale(${0.7 + funnelProgress * 0.5})` 
        }}
      >
        <div className="relative">
          <div className="w-40 h-40 bg-gradient-to-r from-brandOrange to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl">
            <span className="text-white font-bold text-2xl">Recruit41</span>
          </div>
          {/* Flowing lines effect */}
          <div className="absolute -top-20 -left-20 w-60 h-60 opacity-30">
            <svg className="w-full h-full" viewBox="0 0 240 240">
              <path
                d="M20,20 Q120,80 220,20 Q120,160 20,220"
                stroke="url(#gradient)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#F97316', stopOpacity: 0.8}} />
                  <stop offset="100%" style={{stopColor: '#EA580C', stopOpacity: 0.2}} />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

// Problem/Solution showcase
const ProblemSolutionShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const scenarios = [
    {
      title: "The Excel Juggling Act",
      problem: "Managing 15+ Excel files from different job portals, losing track of candidates, duplicate entries everywhere.",
      solution: "One unified talent pool. Import from any source - Naukri, Hirist, LinkedIn, Gmail. Zero duplicates.",
      icon: "📊",
      beforeImage: "Multiple scattered spreadsheets",
      afterImage: "Single organized dashboard"
    },
    {
      title: "The Resume Screening Marathon", 
      problem: "Spending 4-6 hours daily reading resumes, missing great candidates hidden in the pile.",
      solution: "AI screens and ranks in minutes. 'Find senior developers with team leadership experience' - done.",
      icon: "🎯",
      beforeImage: "Stack of 200+ resumes",
      afterImage: "Top 10 ranked candidates"
    },
    {
      title: "The WhatsApp Chaos",
      problem: "Copying candidate details to WhatsApp, losing conversation history, no systematic follow-up.",
      solution: "Send templated messages directly from ATS. Responses auto-update candidate profiles.",
      icon: "💬",
      beforeImage: "Manual copy-paste messages",
      afterImage: "Automated personalized outreach"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % scenarios.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [scenarios.length]);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-brandGray-dark mb-4">
          Sound Familiar? <span className="text-brandOrange">You're Not Alone.</span>
        </h2>
        <p className="text-xl text-brandGray max-w-3xl mx-auto">
          Every recruiter in India faces these challenges. Here's how Recruit41 changes the game.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 rounded-lg p-1 flex">
          {scenarios.map((scenario, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === index
                  ? 'bg-brandOrange text-white shadow-md'
                  : 'text-brandGray hover:text-brandGray-dark'
              }`}
            >
              {scenario.icon} {scenario.title}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Problem Side */}
          <div className="bg-red-50 p-8 lg:p-12">
            <div className="flex items-center mb-6">
              <XMarkIcon className="h-8 w-8 text-red-500 mr-3" />
              <h3 className="text-2xl font-bold text-red-700">The Old Way</h3>
            </div>
            <p className="text-lg text-red-600 mb-6 leading-relaxed">
              {scenarios[activeTab].problem}
            </p>
            <div className="bg-red-100 rounded-lg p-6">
              <div className="text-sm text-red-500 mb-2">What you're dealing with:</div>
              <div className="text-lg font-semibold text-red-700">
                {scenarios[activeTab].beforeImage}
              </div>
            </div>
          </div>

          {/* Solution Side */}
          <div className="bg-green-50 p-8 lg:p-12">
            <div className="flex items-center mb-6">
              <CheckCircleIcon className="h-8 w-8 text-green-500 mr-3" />
              <h3 className="text-2xl font-bold text-green-700">The Recruit41 Way</h3>
            </div>
            <p className="text-lg text-green-600 mb-6 leading-relaxed">
              {scenarios[activeTab].solution}
            </p>
            <div className="bg-green-100 rounded-lg p-6">
              <div className="text-sm text-green-500 mb-2">What you get instead:</div>
              <div className="text-lg font-semibold text-green-700">
                {scenarios[activeTab].afterImage}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced AI Demo with more realistic scenarios
const AIScreeningDemo: React.FC = () => {
  const [isRanked, setIsRanked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedCriteria, setSelectedCriteria] = useState(0);

  const criteriaExamples = [
    {
      role: "Senior Software Engineer",
      criteria: "Has a career trajectory from hands-on software development to senior development roles to technical leadership positions across a decade or more.",
      candidates: [
        {
          name: "Rajesh Kumar",
          experience: "12 years",
          background: "Started as Jr. Developer → Sr. Developer → Tech Lead → Engineering Manager",
          score: 95,
          reasoning: "Perfect career progression showing technical depth and leadership growth"
        },
        {
          name: "Priya Sharma", 
          experience: "8 years",
          background: "Full-stack developer with team collaboration experience",
          score: 72,
          reasoning: "Strong technical skills but limited formal leadership experience"
        },
        {
          name: "Ankit Singh",
          experience: "6 years", 
          background: "Senior developer, mentored juniors, no management role",
          score: 68,
          reasoning: "Good technical growth but hasn't reached leadership positions yet"
        }
      ]
    },
    {
      role: "Python Developer",
      criteria: "At least 5 years of Python programming experience in a software engineering role. Disregard usage of python in a scripting, data analysis or academic context.",
      candidates: [
        {
          name: "Deepak Verma",
          experience: "7 years",
          background: "Built production Django applications, Flask APIs, Python microservices",
          score: 92,
          reasoning: "Extensive production Python development experience"
        },
        {
          name: "Suman Das",
          experience: "4 years",
          background: "Data scientist using Python for ML models and analysis",
          score: 45,
          reasoning: "Python experience primarily in data analysis, not software engineering"
        },
        {
          name: "Vikram Patel",
          experience: "6 years",
          background: "Full-stack developer, 3 years Python backend, 3 years other languages",
          score: 78,
          reasoning: "Solid Python engineering experience, though not exclusively Python"
        }
      ]
    }
  ];

  const handleRankCandidates = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsRanked(true);
      setIsAnimating(false);
    }, 2500);
  };

  const currentExample = criteriaExamples[selectedCriteria];
  const sortedCandidates = isRanked 
    ? [...currentExample.candidates].sort((a, b) => b.score - a.score)
    : currentExample.candidates;

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-brandGray-dark mb-4">
          AI Screening in Action: Real Examples
        </h3>
        <p className="text-brandGray">
          See how our AI understands complex requirements that keyword searches miss
        </p>
      </div>

      {/* Criteria Selector */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {criteriaExamples.map((example, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedCriteria(index);
                setIsRanked(false);
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                selectedCriteria === index
                  ? 'bg-brandOrange text-white'
                  : 'bg-gray-100 text-brandGray hover:bg-gray-200'
              }`}
            >
              {example.role}
            </button>
          ))}
        </div>
      </div>

      {/* Job Criteria */}
      <div className="bg-blue-50 rounded-lg p-6 mb-8">
        <h4 className="font-semibold text-brandGray-dark mb-3">Your Requirement:</h4>
        <div className="text-brandGray text-lg italic leading-relaxed">
          "{currentExample.criteria}"
        </div>
      </div>

      {/* Candidates */}
      <div className="space-y-4 mb-8">
        <div className="flex justify-between items-center">
          <h4 className="font-semibold text-brandGray-dark text-lg">Candidates:</h4>
          {!isRanked && (
            <button
              onClick={handleRankCandidates}
              disabled={isAnimating}
              className="bg-brandOrange text-white px-8 py-3 rounded-lg font-semibold hover:bg-brandOrange-dark disabled:opacity-50 transition-all duration-200 flex items-center"
            >
              {isAnimating ? (
                <>
                  <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                  AI Analyzing...
                </>
              ) : (
                <>
                  <PlayIcon className="h-5 w-5 mr-2" />
                  Let AI Rank These Candidates
                </>
              )}
            </button>
          )}
        </div>

        <div className={`space-y-4 transition-all duration-500 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
          {sortedCandidates.map((candidate, index) => (
            <div 
              key={candidate.name}
              className={`p-6 border-2 rounded-xl transition-all duration-500 ${
                isRanked 
                  ? candidate.score >= 85 
                    ? 'border-green-300 bg-green-50' 
                    : candidate.score >= 70 
                      ? 'border-yellow-300 bg-yellow-50'
                      : 'border-red-300 bg-red-50'
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <h5 className="font-bold text-brandGray-dark text-lg">{candidate.name}</h5>
                    {isRanked && (
                      <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                        candidate.score >= 85 
                          ? 'bg-green-200 text-green-800'
                          : candidate.score >= 70
                            ? 'bg-yellow-200 text-yellow-800'
                            : 'bg-red-200 text-red-800'
                      }`}>
                        {candidate.score}% Match
                      </span>
                    )}
                  </div>
                  <p className="text-brandGray mb-2">
                    <strong>Experience:</strong> {candidate.experience}
                  </p>
                  <p className="text-brandGray-dark mb-3">
                    <strong>Background:</strong> {candidate.background}
                  </p>
                  {isRanked && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-sm text-blue-700 font-medium">
                        🤖 AI Reasoning: {candidate.reasoning}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isRanked && (
        <div className="text-center">
          <p className="text-brandGray mb-4">
            ⚡ Analysis completed in 3.2 seconds • Traditional screening would take 45+ minutes
          </p>
          <Link 
            to="/features/screening"
            className="inline-flex items-center text-brandOrange font-semibold hover:text-brandOrange-dark"
          >
            See More AI Screening Features 
            <ArrowRightIcon className="h-5 w-5 ml-2" />
          </Link>
        </div>
      )}
    </div>
  );
};

// Stats showcase
const ImpactMetrics: React.FC = () => {
  const metrics = [
    {
      value: "15+ hours",
      label: "Saved per week",
      description: "Stop manual resume screening",
      icon: ClockIcon
    },
    {
      value: "3x faster",
      label: "Candidate sourcing",
      description: "Unified multi-source import",
      icon: ChartBarIcon
    },
    {
      value: "95%",
      label: "WhatsApp response rate",
      description: "Reach candidates where they are",
      icon: UserGroupIcon
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {metrics.map((metric, index) => {
        const IconComponent = metric.icon;
        return (
          <div key={index} className="text-center">
            <div className="bg-brandOrange-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <IconComponent className="h-8 w-8 text-brandOrange" />
            </div>
            <div className="text-4xl font-bold text-brandGray-dark mb-2">{metric.value}</div>
            <div className="text-xl font-semibold text-brandGray-dark mb-2">{metric.label}</div>
            <div className="text-brandGray">{metric.description}</div>
          </div>
        );
      })}
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <div className="text-brandGray-dark font-['Poppins']">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-brandOrange-light overflow-hidden">
        <ScrollytellingFunnel />
        
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <span className="inline-block bg-brandOrange text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
                🇮🇳 Built for Indian Recruiters
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-brandGray-dark mb-8 leading-tight">
              From Recruitment Chaos<br />
              to <span className="text-brandOrange">Hiring Clarity</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-brandGray-dark mb-8 max-w-4xl mx-auto leading-relaxed">
              The AI-powered ATS that understands Indian hiring. Unify Naukri, LinkedIn, Gmail into one intelligent system. 
              Screen with AI. Interview 24/7. <strong className="text-brandOrange">Finally, an ATS that gets it.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-brandOrange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brandOrange-dark transition-all duration-200 shadow-lg transform hover:scale-105">
                🚀 See Recruit41 in Action
              </button>
              <button className="border-2 border-brandOrange text-brandOrange px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brandOrange hover:text-white transition-colors duration-200">
                📞 Book a Demo Call
              </button>
            </div>

            <div className="text-sm text-brandGray">
              Trusted by 500+ recruiters across India • No credit card required
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDownIcon className="h-8 w-8 text-brandOrange" />
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProblemSolutionShowcase />
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-brandGray-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Recruit41 Impact</h2>
            <p className="text-xl opacity-90">Real results from real recruiters</p>
          </div>
          <ImpactMetrics />
        </div>
      </section>

      {/* AI Demo Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brandGray-dark mb-6">
              AI That Actually <span className="text-brandOrange">Understands Requirements</span>
            </h2>
            <p className="text-xl text-brandGray max-w-4xl mx-auto">
              Stop wasting time with keyword searches that miss the best candidates. Our AI reads between the lines.
            </p>
          </div>
          <AIScreeningDemo />
        </div>
      </section>

      {/* Feature Preview Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brandGray-dark mb-4">
              Complete Recruitment Suite
            </h2>
            <p className="text-xl text-brandGray max-w-3xl mx-auto">
              From sourcing to hiring decision. One platform, infinite possibilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Smart Sourcing",
                description: "Import from everywhere. Naukri, LinkedIn, Gmail, Excel. One click.",
                link: "/features/sourcing",
                icon: "🔄",
                highlight: "15+ sources supported"
              },
              {
                title: "AI Screening", 
                description: "Rank candidates by fit, not keywords. Natural language criteria.",
                link: "/features/screening",
                icon: "🎯",
                highlight: "95% accuracy rate"
              },
              {
                title: "24/7 AI Interviews",
                description: "Let AI conduct first rounds. Technical, behavioral, everything.",
                link: "/features/interviews", 
                icon: "🤖",
                highlight: "No scheduling conflicts"
              },
              {
                title: "Interview Copilot",
                description: "AI assistant for human interviews. Perfect documentation.",
                link: "/features/copilot",
                icon: "📝",
                highlight: "100% consistent feedback"
              }
            ].map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-brandOrange hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-brandGray-dark mb-3 group-hover:text-brandOrange transition-colors">
                  {feature.title}
                </h3>
                <p className="text-brandGray mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="bg-brandOrange-light text-brandOrange px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                  {feature.highlight}
                </div>
                <div className="flex items-center text-brandOrange font-semibold group-hover:text-brandOrange-dark">
                  Learn More 
                  <ArrowRightIcon className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-brandOrange text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Loved by Recruiters Across India</h2>
            <p className="text-xl opacity-90">From startups to enterprises, agencies to MNCs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                quote: "Recruit41 cut our time-to-hire from 45 days to 18 days. The AI screening is phenomenal - it finds candidates our keyword searches completely missed.",
                name: "Priya Malhotra",
                title: "Senior Recruiter, Flipkart",
                metric: "60% faster hiring"
              },
              {
                quote: "Managing 20+ clients was chaos until Recruit41. Now everything flows into one system. The WhatsApp integration alone saves us 10 hours per week.",
                name: "Rajesh Gupta", 
                title: "Founder, TalentFirst Agency",
                metric: "500% ROI in 6 months"
              },
              {
                quote: "Finally, an ATS built for India. It understands our job portals, our communication style, our hiring process. Game changer for our 50+ person team.",
                name: "Anita Sharma",
                title: "Head of Talent, Razorpay",
                metric: "300+ hires this year"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white bg-opacity-10 rounded-xl p-8">
                <div className="text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-lg mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-white border-opacity-20 pt-4">
                  <div className="font-semibold text-lg">{testimonial.name}</div>
                  <div className="opacity-90 mb-2">{testimonial.title}</div>
                  <div className="bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm font-semibold inline-block">
                    {testimonial.metric}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="mb-6">
              <div className="text-sm opacity-90 mb-2">Trusted by teams at:</div>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-75">
                <div className="text-2xl font-bold">Flipkart</div>
                <div className="text-2xl font-bold">Razorpay</div>
                <div className="text-2xl font-bold">Swiggy</div>
                <div className="text-2xl font-bold">Zomato</div>
                <div className="text-2xl font-bold">BYJU'S</div>
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
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Join 500+ recruiters who've already made the switch. See why Recruit41 is India's fastest-growing ATS.
          </p>
          
          <div className="bg-white bg-opacity-10 rounded-xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-brandOrange">14 days</div>
                <div className="text-sm opacity-90">Free trial</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-brandOrange">2 minutes</div>
                <div className="text-sm opacity-90">Setup time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-brandOrange">₹0</div>
                <div className="text-sm opacity-90">Setup cost</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-brandOrange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brandOrange-dark transition-all duration-200 shadow-lg transform hover:scale-105">
              🚀 Start Free Trial
            </button>
            <Link 
              to="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-brandGray-dark transition-colors duration-200"
            >
              💰 View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;