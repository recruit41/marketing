
import React, { useState, useEffect } from 'react';
import { ShareIcon, UserPlusIcon, CheckCircleIcon } from '@heroicons/react/24/outline'; // Using ShareIcon for plugin idea

interface AnimatedChromePluginProps {
  isPreview?: boolean;
}

const AnimatedChromePlugin: React.FC<AnimatedChromePluginProps> = ({ isPreview = false }) => {
  const [step, setStep] = useState(0); // 0: inactive, 1: plugin clicked, 2: parsing, 3: data extracted, 4: added to ATS
  const [candidateName, setCandidateName] = useState('');
  const [candidateRole, setCandidateRole] = useState('');

  useEffect(() => {
    if (isPreview) {
        setStep(4);
        setCandidateName('Aditya Verma (Preview)');
        setCandidateRole('Sr. Software Engineer');
        return;
    }

    let timerId: number | undefined;
    if (step === 1) { // Plugin clicked
      timerId = window.setTimeout(() => setStep(2), 500); // Start parsing
    } else if (step === 2) { // Parsing
      timerId = window.setTimeout(() => {
        setCandidateName('Aditya Verma');
        setCandidateRole('Senior Software Engineer at Tech Solutions Ltd.');
        setStep(3); // Data extracted
      }, 1500);
    } else if (step === 3) { // Data extracted
      timerId = window.setTimeout(() => setStep(4), 1000); // Added to ATS
    }
    return () => {
      if (timerId !== undefined) {
        window.clearTimeout(timerId);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, isPreview]);

  const handlePluginClick = () => {
    if (step === 0 || step === 4) {
      setCandidateName('');
      setCandidateRole('');
      setStep(1);
    }
  };
  
  const statusText = isPreview ? "Profile Imported" :
    step === 0 ? "Browse LinkedIn/Job Boards..." :
    step === 1 ? "Recruit41 Plugin Activated!" :
    step === 2 ? "Parsing profile data..." :
    step === 3 ? "Candidate data extracted!" :
    "Added to Recruit41 ATS!";


  if (isPreview) {
    return (
      <div className="w-full h-40 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-2 text-center shadow-inner overflow-hidden">
        <ShareIcon className="w-8 h-8 text-brandOrange-DEFAULT mb-1" />
        <p className="text-xs font-semibold text-brandGray-dark">Chrome Sourcing Plugin</p>
        <div className="mt-1 w-full max-w-xs bg-white p-1 rounded shadow text-left">
           <p className="text-xxs font-medium truncate">{candidateName}</p>
           <p className="text-xxs text-gray-500 truncate">{candidateRole}</p>
        </div>
        <CheckCircleIcon className="w-4 h-4 text-green-500 mt-1" />
        <p className="text-xxs text-gray-500 mt-0.5">{statusText}</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-xl border border-gray-200 min-h-[300px] flex flex-col items-center">
      {/* Mock Browser UI */}
      <div className="w-full max-w-md bg-gray-100 rounded-t-lg p-2 flex items-center space-x-1 shadow">
        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        <div className="flex-grow bg-white rounded px-2 py-1 text-xs text-gray-500">linkedin.com/in/adityaverma</div>
        <button onClick={handlePluginClick} title="Recruit41 Plugin" className={`p-1 rounded ${step > 0 && step < 4 ? 'bg-brandOrange-DEFAULT text-white' : 'bg-gray-200 hover:bg-gray-300'}`}>
          <ShareIcon className="w-4 h-4" />
        </button>
      </div>

      {/* Mock Profile Content & Plugin Window */}
      <div className="w-full max-w-md bg-white border-x border-b border-gray-300 p-4 rounded-b-lg shadow flex-grow">
        {step === 0 && (
          <div className="text-center text-gray-400 py-8">
            <p>Simulated LinkedIn Profile Page</p>
            <p className="text-sm mt-1">Click the plugin icon above to source.</p>
          </div>
        )}
        {(step > 0) && (
          <div className={`p-3 rounded-lg ${step === 4 ? 'bg-green-50' : 'bg-orange-50'}`}>
            <div className="flex items-center mb-2">
              <UserPlusIcon className={`w-6 h-6 mr-2 ${step === 4 ? 'text-green-600' : 'text-brandOrange-DEFAULT'}`} />
              <h4 className="font-semibold text-brandGray-dark">Recruit41 Sourcing Helper</h4>
            </div>
            <p className="text-sm text-brandGray-DEFAULT mb-3">{statusText}</p>
            
            {(step === 2 || step === 3 || step === 4) && (
              <div className="bg-white p-2 border border-gray-200 rounded text-xs space-y-1">
                <p><strong>Name:</strong> {candidateName || (step === 2 ? 'Parsing...' : 'N/A')}</p>
                <p><strong>Role:</strong> {candidateRole || (step === 2 ? 'Parsing...' : 'N/A')}</p>
              </div>
            )}
            {step === 2 && <div className="mt-2 h-2 bg-brandOrange-light rounded-full"><div className="h-2 bg-brandOrange-DEFAULT rounded-full w-1/2 animate-pulse"></div></div>}
            {step === 4 && <CheckCircleIcon className="w-8 h-8 text-green-500 mx-auto mt-3" />}
          </div>
        )}
      </div>
       {(step === 4 || step === 0) && (
         <button 
            onClick={handlePluginClick}
            className="mt-4 bg-brandOrange-DEFAULT text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-brandOrange-dark transition duration-150"
          >
           {step === 4 ? 'Source Another Profile' : 'Activate Plugin'}
          </button>
      )}
    </div>
  );
};

export default AnimatedChromePlugin;
