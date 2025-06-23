
import React, { useState, useEffect } from 'react';
import { ChatBubbleLeftRightIcon, UserIcon, CpuChipIcon, VideoCameraIcon, ShareIcon as ScreenShareIcon } from '@heroicons/react/24/outline'; // Renamed ShareIcon
import { AnimatedMessage } from '../../types';

interface AnimatedAIInterviewProps {
  isPreview?: boolean;
}

const interviewScript: AnimatedMessage[] = [
  { id: 'ai1', sender: 'ai', text: "Hello! I'm Recruit41's AI Interviewer. Thanks for joining. Can you tell me about your experience with project management?" },
  { id: 'user1', sender: 'user', text: "Sure! In my previous role at TechCorp, I managed a team of 5 developers on a critical product launch..." },
  { id: 'ai2', sender: 'ai', text: "That sounds interesting. Could you describe a challenging situation you faced and how you resolved it?" },
  { id: 'user2', sender: 'user', text: "We had a major scope creep issue. I addressed it by re-prioritizing tasks and communicating transparently with stakeholders." },
  { id: 'ai3', sender: 'ai', text: "Good approach. This interview is now complete. We will be in touch. (Screenshare & Video recorded)" },
];

const AnimatedAIInterview: React.FC<AnimatedAIInterviewProps> = ({ isPreview = false }) => {
  const [messages, setMessages] = useState<AnimatedMessage[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isScreenSharing, setIsScreenSharing] = useState(false);

  useEffect(() => {
    if (isPreview) {
        setMessages(interviewScript.slice(0, 2));
        setIsScreenSharing(true);
        return;
    }
    let timerId: number | undefined;

    if (currentMessageIndex < interviewScript.length) {
      timerId = window.setTimeout(() => {
        setMessages(prev => [...prev, interviewScript[currentMessageIndex]]);
        if (interviewScript[currentMessageIndex].text.includes("share your screen")) {
            setIsScreenSharing(true);
        }
        if (interviewScript[currentMessageIndex].id === 'user2') { // Candidate mentions sharing screen
            setIsScreenSharing(true);
        }
        setCurrentMessageIndex(prev => prev + 1);
      }, currentMessageIndex === 0 ? 500 : (interviewScript[currentMessageIndex-1]?.sender === 'ai' ? 2500 : 1500) ); // AI speaks slower, check for currentMessageIndex-1 existence
    } else if (currentMessageIndex >= interviewScript.length && !isPreview) { // End of script
        timerId = window.setTimeout(() => setIsScreenSharing(true), 500); // Ensure screenshare icon is on at end
    }
    return () => {
      if (timerId !== undefined) {
        window.clearTimeout(timerId);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentMessageIndex, messages.length, isPreview]);
  
  const statusText = isPreview ? "AI Interview Simulation" :
    currentMessageIndex < interviewScript.length ? "AI Interview in Progress..." :
    "AI Interview Concluded";

  if (isPreview) {
    return (
      <div className="w-full h-40 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-2 text-center shadow-inner overflow-hidden">
        <ChatBubbleLeftRightIcon className="w-8 h-8 text-brandOrange-DEFAULT mb-1" />
        <p className="text-xs font-semibold text-brandGray-dark">AI Interview</p>
        <div className="flex space-x-2 mt-1">
            <div className="p-1 bg-white rounded shadow text-xxs w-1/2"><strong>AI:</strong> {messages[0]?.text.substring(0,15)}...</div>
            <div className="p-1 bg-white rounded shadow text-xxs w-1/2"><strong>User:</strong> {messages[1]?.text.substring(0,15)}...</div>
        </div>
        <p className="text-xxs text-gray-500 mt-1">{statusText}</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-xl border border-gray-200 min-h-[450px] flex flex-col">
      <div className="flex items-center mb-4">
        <ChatBubbleLeftRightIcon className="w-8 h-8 text-brandOrange-DEFAULT mr-3" />
        <h3 className="text-lg font-semibold text-brandGray-dark">AI-Conducted Interview</h3>
      </div>
       <p className="text-sm text-brandGray-DEFAULT mb-3 bg-gray-50 p-2 rounded-md">{statusText}</p>

      {/* Mock Video Call UI */}
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Candidate Video */}
        <div className="bg-gray-800 rounded-lg p-3 flex flex-col items-center justify-center relative aspect-video">
          <UserIcon className="w-16 h-16 md:w-24 md:h-24 text-gray-500" />
          <p className="text-gray-400 mt-2 text-sm">Candidate Vidhya</p>
          <div className="absolute bottom-2 right-2 flex space-x-2">
            <VideoCameraIcon className="w-5 h-5 text-green-400" title="Video On" />
            {isScreenSharing && <ScreenShareIcon className="w-5 h-5 text-blue-400" title="Screen Sharing Active" />}
          </div>
        </div>
        {/* AI Video / Screen Share Area */}
        <div className="bg-gray-700 rounded-lg p-3 flex flex-col items-center justify-center relative aspect-video">
          <CpuChipIcon className="w-16 h-16 md:w-24 md:h-24 text-brandOrange-light" />
          <p className="text-gray-300 mt-2 text-sm">AI Interviewer</p>
          {isScreenSharing && <p className="text-xs text-blue-300 mt-1">(Candidate Screen Share Active)</p>}
        </div>
      </div>

      {/* Chat Transcript */}
      <div className="mt-4 bg-gray-50 p-3 rounded-md max-h-40 overflow-y-auto">
        {messages.map(msg => (
          <div key={msg.id} className={`mb-2 text-sm ${msg.sender === 'ai' ? 'text-left' : 'text-right'}`}>
            <span className={`font-semibold ${msg.sender === 'ai' ? 'text-brandOrange-DEFAULT' : 'text-blue-600'}`}>
              {msg.sender === 'ai' ? 'AI' : 'Candidate'}:
            </span>
            <span className="text-brandGray-dark ml-1">{msg.text}</span>
          </div>
        ))}
        {currentMessageIndex < interviewScript.length && (
            <div className={`text-sm text-left ${interviewScript[currentMessageIndex].sender === 'ai' ? 'text-brandOrange-DEFAULT' : 'text-blue-600'} italic`}>
                {interviewScript[currentMessageIndex].sender === 'ai' ? 'AI is thinking...' : 'Candidate is responding...'}
            </div>
        )}
      </div>
      {currentMessageIndex >= interviewScript.length && !isPreview && (
         <button 
            onClick={() => { setMessages([]); setCurrentMessageIndex(0); setIsScreenSharing(false); }}
            className="mt-4 w-full bg-brandOrange-DEFAULT text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-brandOrange-dark transition duration-150"
          >
           Start New AI Interview
          </button>
      )}
    </div>
  );
};

export default AnimatedAIInterview;
