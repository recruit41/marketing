
import React, { useState, useEffect } from 'react';
import { Mic, Video, Clock, Brain, FileText, CheckCircle } from 'lucide-react';

const AIInterviewSnapshot = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const conversationSteps = [
    {
      ai: "Hello Priya! I'm excited to discuss your experience with React and Node.js. Can you walk me through a challenging project you've worked on?",
      candidate: "",
      analysis: "Opening engagement - assessing communication skills"
    },
    {
      ai: "Hello Priya! I'm excited to discuss your experience with React and Node.js. Can you walk me through a challenging project you've worked on?",
      candidate: "Hi! I recently led the development of a real-time analytics dashboard using React and Node.js. The main challenge was handling large datasets efficiently...",
      analysis: "Strong technical communication, shows leadership"
    },
    {
      ai: "That sounds impressive! How did you handle the performance optimization for large datasets?",
      candidate: "I implemented pagination, used React.memo for component optimization, and added Redis caching on the backend. We also used WebSocket connections for real-time updates.",
      analysis: "Demonstrates deep technical knowledge and problem-solving"
    },
    {
      ai: "Excellent approach! Tell me about a time when you had to debug a complex issue under pressure.",
      candidate: "During a production outage, I systematically traced through logs, identified a memory leak in our event listeners, and implemented a hotfix using proper cleanup in useEffect.",
      analysis: "Shows debugging skills, handles pressure well, knows React hooks deeply"
    }
  ];

  const recruiterNotes = [
    { time: "0:30", note: "Confident introduction, good eye contact", type: "positive" },
    { time: "2:15", note: "Technical depth in React optimization", type: "positive" },
    { time: "4:20", note: "Problem-solving methodology clear", type: "positive" },
    { time: "6:10", note: "Handle pressure well - production debugging", type: "positive" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % conversationSteps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-96 bg-white rounded-xl shadow-lg border overflow-hidden">
      <div className="flex h-full">
        {/* Left Side - Mock Video Call */}
        <div className="flex-1 bg-gray-900 relative">
          {/* Video Call Header */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-white z-10">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm">Recording</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Clock className="h-4 w-4" />
              <span>07:23</span>
            </div>
          </div>

          {/* AI Avatar */}
          <div className="absolute top-16 left-4 w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Brain className="h-8 w-8 text-white" />
          </div>
          <div className="absolute top-20 left-28 text-white">
            <p className="text-sm font-medium">Recruit41 AI</p>
            <p className="text-xs text-gray-300">Interview Agent</p>
          </div>

          {/* Candidate Video */}
          <div className="absolute bottom-20 right-4 w-24 h-18 bg-gradient-to-br from-pink-400 to-red-500 rounded-lg flex items-center justify-center">
            <div className="text-white text-xs font-medium">Priya P.</div>
          </div>

          {/* Conversation Bubbles */}
          <div className="absolute bottom-4 left-4 right-4 space-y-2 max-h-32 overflow-hidden">
            {/* AI Message */}
            <div className="bg-indigo-600 text-white p-2 rounded-lg rounded-bl-none text-sm max-w-xs">
              {conversationSteps[currentStep]?.ai}
            </div>
            
            {/* Candidate Response */}
            {conversationSteps[currentStep]?.candidate && (
              <div className="bg-gray-700 text-white p-2 rounded-lg rounded-br-none text-sm max-w-xs ml-auto">
                {conversationSteps[currentStep].candidate}
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <button className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center">
              <Mic className="h-5 w-5 text-white" />
            </button>
            <button className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center">
              <Video className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>

        {/* Right Side - Recruiter Panel */}
        <div className="flex-1 bg-gray-50 p-4">
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center space-x-2 mb-4">
              <FileText className="h-5 w-5 text-indigo-600" />
              <h3 className="font-semibold text-gray-800">Live Analysis</h3>
            </div>

            {/* Real-time Notes */}
            <div className="flex-1 space-y-3 overflow-y-auto">
              <div className="bg-white p-3 rounded-lg border">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Auto-Generated Notes</h4>
                <div className="space-y-2">
                  {recruiterNotes.slice(0, currentStep + 1).map((note, index) => (
                    <div 
                      key={index}
                      className={`p-2 rounded text-xs transition-all duration-500 ${
                        index === currentStep ? 'animate-fade-in-up' : ''
                      } ${
                        note.type === 'positive' 
                          ? 'bg-green-50 border-l-2 border-green-400 text-green-800'
                          : 'bg-yellow-50 border-l-2 border-yellow-400 text-yellow-800'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-gray-600">{note.time}</span>
                        <CheckCircle className="h-3 w-3 text-green-500" />
                      </div>
                      <p className="mt-1">{note.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Analysis */}
              <div className="bg-white p-3 rounded-lg border">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">AI Insights</h4>
                <div className="bg-indigo-50 p-2 rounded text-xs text-indigo-800">
                  <Brain className="h-3 w-3 inline mr-1" />
                  {conversationSteps[currentStep]?.analysis}
                </div>
              </div>

              {/* Skills Assessment */}
              <div className="bg-white p-3 rounded-lg border">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Skills Validation</h4>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>React.js</span>
                    <span className="text-green-600 font-semibold">Verified ✓</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>Problem Solving</span>
                    <span className="text-green-600 font-semibold">Strong ✓</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>Communication</span>
                    <span className="text-green-600 font-semibold">Excellent ✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInterviewSnapshot;
