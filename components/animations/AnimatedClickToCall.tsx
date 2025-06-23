
import React, { useState, useEffect } from 'react';
import { PhoneArrowUpRightIcon, UserCircleIcon, ClockIcon } from '@heroicons/react/24/outline';

interface AnimatedClickToCallProps {
  isPreview?: boolean;
}

const candidateToCall = {
  name: "Sunita Sharma",
  phone: "+91 98XXXXXX01",
  role: "Marketing Manager Applicant"
};

const AnimatedClickToCall: React.FC<AnimatedClickToCallProps> = ({ isPreview = false }) => {
  const [callStatus, setCallStatus] = useState<'idle' | 'dialing' | 'connected' | 'ended'>('idle');
  const [callDuration, setCallDuration] = useState(0);

  useEffect(() => {
    let intervalId: number | undefined = undefined;

    if (callStatus === 'connected') {
      intervalId = window.setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
    } else {
      // Not connected. If duration is non-zero, reset it.
      // This handles cases where status changes from 'connected' to something else.
      if (callDuration !== 0) {
        setCallDuration(0);
      }
    }

    return () => {
      if (intervalId !== undefined) {
        window.clearInterval(intervalId);
      }
    };
  }, [callStatus, callDuration]);


  useEffect(() => {
    if (isPreview) {
        setCallStatus('ended');
        setCallDuration(15); // Show a brief call ended state
        return;
    }

    let timerId: number | undefined = undefined;

    if (callStatus === 'dialing') {
      timerId = window.setTimeout(() => setCallStatus('connected'), 2000); // Simulate connection time
    } else if (callStatus === 'connected' && callDuration > 5 && !isPreview) { // Auto end call after 5s for demo
        timerId = window.setTimeout(() => setCallStatus('ended'), 1000);
    }
    
    return () => {
      if (timerId !== undefined) {
        window.clearTimeout(timerId);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callStatus, isPreview, callDuration]);


  const handleCallAction = () => {
    if (isPreview) return;
    if (callStatus === 'idle' || callStatus === 'ended') {
      setCallStatus('dialing');
      // setCallDuration(0); // Duration reset is handled by the first useEffect when status is not 'connected'
    } else if (callStatus === 'connected') {
      setCallStatus('ended');
    }
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const buttonText = callStatus === 'idle' || callStatus === 'ended' ? 'Call Candidate' : 'End Call';
  const statusText = isPreview ? "Call Feature Ready" :
    callStatus === 'idle' ? 'Ready to call' :
    callStatus === 'dialing' ? `Dialing ${candidateToCall.name}...` :
    callStatus === 'connected' ? `Connected (${formatDuration(callDuration)})` :
    `Call ended (Duration: ${formatDuration(callDuration)})`;

  if (isPreview) {
    return (
      <div className="w-full h-40 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-2 text-center shadow-inner overflow-hidden">
        <PhoneArrowUpRightIcon className="w-8 h-8 text-brandOrange-DEFAULT mb-1" />
        <p className="text-xs font-semibold text-brandGray-dark">Click-to-Call</p>
        <p className="text-xxs text-gray-500 mt-1">{candidateToCall.name}</p>
        <p className="text-xxs text-gray-400 ">{statusText}</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-xl border border-gray-200 min-h-[300px] flex flex-col items-center justify-center text-center">
      <UserCircleIcon className="w-20 h-20 text-gray-300 mb-3" />
      <h3 className="text-xl font-semibold text-brandGray-dark">{candidateToCall.name}</h3>
      <p className="text-sm text-brandGray-DEFAULT">{candidateToCall.role}</p>
      <p className="text-sm text-brandGray-DEFAULT mb-6">{candidateToCall.phone}</p>

      <div className={`mb-6 p-3 rounded-md text-sm w-full max-w-xs
        ${callStatus === 'dialing' ? 'bg-yellow-100 text-yellow-700' : ''}
        ${callStatus === 'connected' ? 'bg-green-100 text-green-700' : ''}
        ${callStatus === 'ended' ? 'bg-red-100 text-red-700' : ''}
        ${callStatus === 'idle' ? 'bg-gray-100 text-gray-700' : ''}
      `}>
        {statusText}
      </div>

      <button
        onClick={handleCallAction}
        disabled={isPreview || callStatus === 'dialing'}
        className={`w-full max-w-xs px-6 py-3 rounded-md font-medium text-white transition-colors
          ${(callStatus === 'idle' || callStatus === 'ended') ? 'bg-brandOrange-DEFAULT hover:bg-brandOrange-dark' : ''}
          ${callStatus === 'connected' ? 'bg-red-500 hover:bg-red-600' : ''}
          ${callStatus === 'dialing' ? 'bg-gray-400 cursor-not-allowed' : ''}
        `}
      >
        <div className="flex items-center justify-center">
          <PhoneArrowUpRightIcon className="w-5 h-5 mr-2" />
          <span>{buttonText}</span>
          {callStatus === 'dialing' && <div className="w-4 h-4 border-t-2 border-white rounded-full animate-spin ml-2"></div>}
        </div>
      </button>
      {callStatus === 'ended' && <p className="text-xs text-gray-500 mt-2">Call log can be optionally saved to ATS.</p>}
    </div>
  );
};

export default AnimatedClickToCall;
