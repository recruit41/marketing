import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  VideoCameraIcon, 
  ShieldCheckIcon, 
  ClockIcon, 
  UserGroupIcon,
  EyeIcon,
  MicrophoneIcon,
  ComputerDesktopIcon,
  ExclamationTriangleIcon,
  PlayIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

// Scrollytelling Interview Journey
const InterviewJourneyScrollytelling: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const journeySteps = [
    {
      title: "The Scheduling Nightmare",
      description: "Coordinating calendars, timezone confusion, last-minute cancellations. The traditional interview process wastes 40% of your time on logistics.",
      visual: "📅❌",
      problem: true
    },
    {
      title: "Candidate Gets Simple Link",
      description: "Your candidate receives one clean link. No downloads, no account creation. Available 24/7 for their convenience.",
      visual: "🔗✨",
      problem: false
    },
    {
      title: "AI Conducts Natural Interview",
      description: "Our AI interviewer adapts to the conversation. Technical questions, behavioral scenarios, even system design - all flowing naturally.",
      visual: "🤖💬",
      problem: false
    },
    {
      title: "Real-time Proctoring & Analysis",
      description: "Advanced eye-tracking, voice analysis, and behavior monitoring. Flags potential issues while building comprehensive evaluation data.",
      visual: "👁️📊",
      problem: false
    },
    {
      title: "Complete Interview Package",
      description: "Full video recording, transcript, behavioral analysis, technical assessment, and structured feedback - all delivered instantly.",
      visual: "📋✅",
      problem: false
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % journeySteps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [journeySteps.length]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-brandGray-dark mb-4">
          From Scheduling Hell to <span className="text-brandOrange">Interview Heaven</span>
        </h2>
        <p className="text-xl text-brandGray">
          Follow a candidate's journey through our revolutionary interview process
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center space-x-4">
          {journeySteps.map((_, index) => (
            <div key={index} className="flex items-center">
              <div className={`w-4 h-4 rounded-full transition-all duration-500 ${
                index <= currentStep ? 'bg-brandOrange' : 'bg-gray-300'
              }`} />
              {index < journeySteps.length - 1 && (
                <div className={`w-12 h-1 transition-all duration-500 ${
                  index < currentStep ? 'bg-brandOrange' : 'bg-gray-300'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Current Step Display */}
      <div className={`rounded-2xl p-12 transition-all duration-700 ${
        journeySteps[currentStep].problem 
          ? 'bg-red-50 border-2 border-red-200' 
          : 'bg-green-50 border-2 border-green-200'
      }`}>
        <div className="text-center">
          <div className="text-6xl mb-6">{journeySteps[currentStep].visual}</div>
          <h3 className={`text-3xl font-bold mb-4 ${
            journeySteps[currentStep].problem ? 'text-red-700' : 'text-green-700'
          }`}>
            {journeySteps[currentStep].title}
          </h3>
          <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${
            journeySteps[currentStep].problem ? 'text-red-600' : 'text-green-600'
          }`}>
            {journeySteps[currentStep].description}
          </p>
        </div>
      </div>
    </div>
  );
};

// Live Interview Demo
const LiveInterviewDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentDialogue, setCurrentDialogue] = useState(0);

  const conversation = [
    {
      speaker: "AI",
      message: "Hi there! I'm excited to learn about your experience. Can you start by telling me about your most challenging project?",
      timestamp: "00:15"
    },
    {
      speaker: "Candidate", 
      message: "Sure! I led the migration of our monolithic application to microservices. It was complex because we had to maintain zero downtime while serving 2 million daily users.",
      timestamp: "00:45",
      analysis: "Strong technical communication, quantifies impact"
    },
    {
      speaker: "AI",
      message: "That sounds impressive! How did you handle data consistency during the migration?",
      timestamp: "01:20"
    },
    {
      speaker: "Candidate",
      message: "We implemented an event-driven architecture using Apache Kafka. We used the Saga pattern for distributed transactions and built comprehensive monitoring to track data flow.",
      timestamp: "02:10",
      analysis: "Demonstrates deep technical knowledge, architectural thinking"
    },
    {
      speaker: "AI", 
      message: "Excellent! Now I'd like to do a quick system design exercise. Can you design a URL shortener like bit.ly that handles 100 million URLs per day?",
      timestamp: "02:45"
    },
    {
      speaker: "Candidate",
      message: "I'll start by breaking down the requirements... *shares screen and starts drawing*",
      timestamp: "03:00",
      analysis: "Good problem-solving approach, uses visual communication"
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentDialogue((prev) => {
          if (prev >= conversation.length - 1) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, conversation.length]);

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Interview Side */}
        <div className="bg-gray-900 text-white p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">Live AI Interview</h3>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm">Recording</span>
            </div>
          </div>
          
          {/* Mock Video Interface */}
          <div className="bg-gray-800 rounded-lg p-6 mb-6 h-48 flex items-center justify-center">
            <div className="text-center">
              <VideoCameraIcon className="h-16 w-16 mx-auto mb-4 text-blue-400" />
              <p className="text-sm text-gray-300">Candidate Video Feed</p>
              <p className="text-xs text-gray-400 mt-2">Screen sharing: system_design_sketch.png</p>
            </div>
          </div>

          {/* Conversation */}
          <div className="space-y-4 h-64 overflow-y-auto">
            {conversation.slice(0, currentDialogue + 1).map((entry, index) => (
              <div key={index} className="animate-fadeIn">
                <div className={`text-xs mb-1 ${
                  entry.speaker === 'AI' ? 'text-blue-300' : 'text-green-300'
                }`}>
                  {entry.speaker} • {entry.timestamp}
                </div>
                <div className={`p-3 rounded-lg text-sm ${
                  entry.speaker === 'AI' 
                    ? 'bg-blue-900 bg-opacity-50' 
                    : 'bg-green-900 bg-opacity-50'
                }`}>
                  {entry.message}
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center mt-6">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-brandOrange hover:bg-brandOrange-dark text-white px-6 py-2 rounded-lg flex items-center"
            >
              <PlayIcon className="h-5 w-5 mr-2" />
              {isPlaying ? 'Pause Demo' : 'Start Demo'}
            </button>
          </div>
        </div>

        {/* Analysis Side */}
        <div className="p-8 bg-gray-50">
          <h3 className="text-xl font-bold text-brandGray-dark mb-6">Real-time AI Analysis</h3>
          
          <div className="space-y-6">
            {/* Proctoring Status */}
            <div>
              <h4 className="font-semibold text-brandGray-dark mb-3 flex items-center">
                <ShieldCheckIcon className="h-5 w-5 mr-2 text-green-500" />
                Proctoring Status
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded-lg border border-green-200">
                  <div className="flex items-center">
                    <EyeIcon className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-green-700 font-medium">Eye Tracking: Normal</span>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-green-200">
                  <div className="flex items-center">
                    <MicrophoneIcon className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-green-700 font-medium">Voice: Consistent</span>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-green-200">
                  <div className="flex items-center">
                    <ComputerDesktopIcon className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-green-700 font-medium">Screen: Authorized</span>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-green-200">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-green-700 font-medium">Integrity: High</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Assessment */}
            <div>
              <h4 className="font-semibold text-brandGray-dark mb-3">Skills Demonstrated</h4>
              <div className="space-y-2">
                {currentDialogue >= 1 && (
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    Technical Communication
                  </div>
                )}
                {currentDialogue >= 3 && (
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    System Architecture
                  </div>
                )}
                {currentDialogue >= 5 && (
                  <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    Problem Solving
                  </div>
                )}
              </div>
            </div>

            {/* Real-time Analysis */}
            {conversation[currentDialogue]?.analysis && (
              <div>
                <h4 className="font-semibold text-brandGray-dark mb-3">AI Insights</h4>
                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <p className="text-sm text-brandGray-dark">
                    🤖 {conversation[currentDialogue].analysis}
                  </p>
                </div>
              </div>
            )}

            {/* Overall Score */}
            <div>
              <h4 className="font-semibold text-brandGray-dark mb-3">Interview Progress</h4>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-green-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min((currentDialogue + 1) / conversation.length * 100, 100)}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm text-brandGray mt-2">
                <span>Technical: {Math.min(currentDialogue * 15, 85)}%</span>
                <span>Communication: {Math.min(currentDialogue * 18, 92)}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Proctoring Feature Showcase
const ProctoringShowcase: React.FC = () => {
  const proctoringFeatures = [
    {
      title: "Eye Tracking Analysis",
      description: "Monitors gaze patterns to detect if candidates are reading from external sources or looking away from the screen suspiciously.",
      icon: EyeIcon,
      color: "blue",
      detection: "Unusual gaze patterns, looking away from screen for extended periods"
    },
    {
      title: "Voice Pattern Analysis", 
      description: "Analyzes speech patterns, tone changes, and response timing to identify potential coaching or preparation inconsistencies.",
      icon: MicrophoneIcon,
      color: "green",
      detection: "Unnatural speech patterns, coached responses, background voices"
    },
    {
      title: "Screen Monitoring",
      description: "Tracks screen sharing, application switching, and unauthorized browser activity during the interview.",
      icon: ComputerDesktopIcon,
      color: "purple",
      detection: "Unauthorized applications, external research, copy-paste activities"
    },
    {
      title: "Behavioral Consistency",
      description: "Correlates answer quality with behavioral patterns to identify potential malpractice or external assistance.",
      icon: ExclamationTriangleIcon,
      color: "orange",
      detection: "Answer quality inconsistent with demonstrated knowledge"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-brandGray-dark mb-4">
          Advanced Interview Proctoring
        </h2>
        <p className="text-xl text-brandGray max-w-3xl mx-auto">
          Our AI doesn't just conduct interviews - it ensures integrity through sophisticated monitoring that maintains fairness while detecting potential issues.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {proctoringFeatures.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className={`w-16 h-16 bg-${feature.color}-100 rounded-xl flex items-center justify-center mb-6`}>
                <IconComponent className={`h-8 w-8 text-${feature.color}-600`} />
              </div>
              
              <h3 className="text-2xl font-bold text-brandGray-dark mb-4">{feature.title}</h3>
              <p className="text-brandGray mb-6 leading-relaxed">{feature.description}</p>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm font-medium text-brandGray-dark mb-2">Detects:</div>
                <div className="text-sm text-brandGray italic">{feature.detection}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-xl p-8">
        <div className="flex items-start">
          <ExclamationTriangleIcon className="h-6 w-6 text-yellow-600 mt-1 mr-4 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-yellow-800 mb-2">Important: Ethics & Privacy</h4>
            <p className="text-yellow-700 leading-relaxed">
              Our proctoring system is designed to maintain interview integrity while respecting candidate privacy. 
              All monitoring data is used solely for evaluation purposes and is processed according to strict data protection standards. 
              Candidates are fully informed about monitoring before the interview begins.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const InterviewPage: React.FC = () => {
  const interviewFormats = [
    {
      title: "Technical Screening",
      description: "Coding challenges, algorithm discussions, technical concept exploration",
      duration: "30-45 minutes",
      icon: "💻"
    },
    {
      title: "System Design",
      description: "Architectural discussions, scalability challenges, design trade-offs",
      duration: "45-60 minutes", 
      icon: "🏗️"
    },
    {
      title: "Behavioral Assessment",
      description: "Leadership scenarios, team collaboration, problem-solving approach",
      duration: "30-40 minutes",
      icon: "🤝"
    },
    {
      title: "Domain Expertise",
      description: "Role-specific knowledge, industry experience, specialized skills",
      duration: "20-30 minutes",
      icon: "🎯"
    }
  ];

  const benefits = [
    {
      title: "Zero Scheduling Conflicts",
      description: "Candidates take interviews anytime within your deadline window",
      metric: "100% availability",
      icon: ClockIcon
    },
    {
      title: "Consistent Evaluation", 
      description: "Every candidate gets the same high-quality interview experience",
      metric: "0% interviewer bias",
      icon: UserGroupIcon
    },
    {
      title: "Instant Results",
      description: "Complete analysis, scores, and recordings delivered immediately",
      metric: "< 1 minute processing",
      icon: CheckCircleIcon
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-['Poppins']">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-brandGray-dark mb-6">
              24/7 AI Interviews <br />
              <span className="text-brandOrange">That Never Sleep</span>
            </h1>
            <p className="text-xl md:text-2xl text-brandGray max-w-4xl mx-auto mb-8">
              Let AI conduct your first and second round interviews. Natural conversations, 
              comprehensive evaluation, zero scheduling conflicts. Your candidates interview 
              when they want, you get perfect data when you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-brandOrange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brandOrange-dark transition-colors duration-200 shadow-lg">
                🎥 Watch AI Interview Demo
              </button>
              <Link 
                to="/pricing"
                className="border-2 border-brandOrange text-brandOrange px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brandOrange hover:text-white transition-colors duration-200"
              >
                See Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InterviewJourneyScrollytelling />
        </div>
      </section>

      {/* Live Demo */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brandGray-dark mb-4">
              See AI Interviews in Action
            </h2>
            <p className="text-xl text-brandGray max-w-3xl mx-auto">
              Watch how our AI conducts natural, engaging interviews while analyzing everything in real-time
            </p>
          </div>
          <LiveInterviewDemo />
        </div>
      </section>

      {/* Interview Formats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brandGray-dark mb-4">
              Every Interview Format You Need
            </h2>
            <p className="text-xl text-brandGray">
              From technical deep-dives to behavioral assessments - our AI adapts to any interview style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {interviewFormats.map((format, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-brandOrange hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{format.icon}</div>
                <h3 className="text-xl font-bold text-brandGray-dark mb-3">{format.title}</h3>
                <p className="text-brandGray mb-4 leading-relaxed">{format.description}</p>
                <div className="text-sm text-brandOrange font-semibold">{format.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proctoring Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProctoringShowcase />
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-brandOrange text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why AI Interviews Win</h2>
            <p className="text-xl opacity-90">
              The advantages are clear - for you and your candidates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-lg opacity-90 mb-4 leading-relaxed">{benefit.description}</p>
                  <div className="bg-white bg-opacity-20 rounded-full px-4 py-2 text-sm font-semibold inline-block">
                    {benefit.metric}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brandGray-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Interview Revolution?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Stop losing great candidates to scheduling conflicts. Start conducting better interviews today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-brandOrange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brandOrange-dark transition-colors duration-200 shadow-lg">
              🚀 Start Free Trial
            </button>
            <Link 
              to="/features/copilot"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-brandGray-dark transition-colors duration-200"
            >
              Next: Interview Copilot →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InterviewPage;