
import React, { useState, useEffect } from 'react';
import { DocumentTextIcon, SparklesIcon, MicrophoneIcon } from '@heroicons/react/24/outline'; // Replaced UserVoiceIcon with MicrophoneIcon

interface AnimatedCopilotFeedbackProps {
  isPreview?: boolean;
}

const interviewSnippets = [
  "Candidate showed strong problem-solving skills when discussing the database scaling challenge.",
  "Communication was clear and concise throughout the technical explanation.",
  "Mentioned using Agile methodologies in previous projects.",
  "Lacked specific examples for conflict resolution experience.",
  "Overall, a positive interaction with good technical depth.",
];

const AnimatedCopilotFeedback: React.FC<AnimatedCopilotFeedbackProps> = ({ isPreview = false }) => {
  const [feedbackPoints, setFeedbackPoints] = useState<string[]>([]);
  const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0);
  const [isProcessingAudio, setIsProcessingAudio] = useState(false);

  useEffect(() => {
    if (isPreview) {
        setFeedbackPoints(interviewSnippets.slice(0, 2));
        setIsProcessingAudio(false);
        return;
    }

    let timerId: number | undefined;
    if (currentSnippetIndex < interviewSnippets.length) {
      setIsProcessingAudio(true);
      timerId = window.setTimeout(() => {
        setFeedbackPoints(prev => [...prev, interviewSnippets[currentSnippetIndex]]);
        setCurrentSnippetIndex(prev => prev + 1);
        setIsProcessingAudio(false);
      }, currentSnippetIndex === 0 ? 1000 : 2000); // Simulate processing time
    }
    return () => {
      if (timerId !== undefined) {
        window.clearTimeout(timerId);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSnippetIndex, feedbackPoints.length, isPreview]);

  const statusText = isPreview ? "Copilot Active" :
    currentSnippetIndex < interviewSnippets.length ? "Copilot processing interview..." :
    "Interview feedback documented by Copilot!";

  if (isPreview) {
    return (
      <div className="w-full h-40 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-2 text-center shadow-inner overflow-hidden">
        <SparklesIcon className="w-8 h-8 text-brandOrange-DEFAULT mb-1" />
        <p className="text-xs font-semibold text-brandGray-dark">Copilot Feedback</p>
         <div className="mt-1 w-full max-w-xs bg-white p-1 rounded shadow text-left space-y-0.5">
            <p className="text-xxs text-gray-700 truncate"><span className="font-bold text-brandOrange-DEFAULT">&bull;</span> {feedbackPoints[0]?.substring(0,25)}...</p>
            {feedbackPoints[1] && <p className="text-xxs text-gray-700 truncate"><span className="font-bold text-brandOrange-DEFAULT">&bull;</span> {feedbackPoints[1]?.substring(0,25)}...</p>}
        </div>
        <p className="text-xxs text-gray-500 mt-1">{statusText}</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-xl border border-gray-200 min-h-[400px] flex flex-col md:flex-row gap-4">
      {/* Mock Interview Progress */}
      <div className="md:w-1/2 border rounded-lg p-3 flex flex-col items-center justify-center bg-gray-50">
        <MicrophoneIcon className={`w-24 h-24 mb-4 ${isProcessingAudio ? 'text-brandOrange-DEFAULT animate-pulse' : 'text-gray-400'}`} />
        <h4 className="font-semibold text-brandGray-dark mb-2">Live Interview Feed</h4>
        <p className="text-sm text-brandGray-DEFAULT text-center">
          {isProcessingAudio ? "Analyzing audio stream..." : (currentSnippetIndex < interviewSnippets.length ? "Interview in progress..." : "Interview ended.")}
        </p>
        {isProcessingAudio && (
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3">
                <div className="bg-brandOrange-DEFAULT h-2.5 rounded-full" style={{width: `${(currentSnippetIndex / interviewSnippets.length) * 100}%`}}></div>
            </div>
        )}
      </div>

      {/* Copilot Feedback Document */}
      <div className="md:w-1/2 border rounded-lg p-3 flex flex-col bg-white">
        <div className="flex items-center mb-3">
          <SparklesIcon className="w-6 h-6 text-brandOrange-DEFAULT mr-2" />
          <h4 className="font-semibold text-brandGray-dark">Copilot: Interview Feedback</h4>
        </div>
        <p className="text-xs text-brandGray-DEFAULT mb-3 bg-blue-50 p-2 rounded-md">{statusText}</p>
        <div className="flex-grow space-y-2 overflow-y-auto max-h-72 border p-3 rounded-md bg-gray-50 shadow-inner">
          {feedbackPoints.length === 0 && !isProcessingAudio && currentSnippetIndex === 0 && (
            <div className="text-center text-gray-400 py-8">
                <DocumentTextIcon className="w-12 h-12 mx-auto mb-2"/>
                <p>Waiting for interview to generate feedback...</p>
            </div>
          )}
          {feedbackPoints.map((point, index) => (
            <div key={index} className="text-sm text-brandGray-dark flex items-start">
              <span className="text-brandOrange-DEFAULT font-bold mr-2">&bull;</span>
              <span>{point}</span>
            </div>
          ))}
          {isProcessingAudio && (
             <div className="text-sm text-gray-500 italic flex items-center">
                <SparklesIcon className="w-4 h-4 text-brandOrange-DEFAULT animate-spin mr-1.5" />
                Generating next point...
             </div>
          )}
        </div>
         {currentSnippetIndex >= interviewSnippets.length && !isPreview && (
             <button 
                onClick={() => { setFeedbackPoints([]); setCurrentSnippetIndex(0); setIsProcessingAudio(false); }}
                className="mt-3 w-full bg-brandOrange-DEFAULT text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-brandOrange-dark transition duration-150"
            >
                Process Another Interview
            </button>
         )}
      </div>
    </div>
  );
};

export default AnimatedCopilotFeedback;
