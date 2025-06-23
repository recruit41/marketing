
import React, { useState, useEffect } from 'react';
import { DocumentMagnifyingGlassIcon, CheckCircleIcon, XCircleIcon, ArrowsUpDownIcon } from '@heroicons/react/24/outline';
import { AnimatedCandidate } from '../../types';

interface AnimatedResumeScreeningProps {
  isPreview?: boolean;
}

const initialScreenCandidates: AnimatedCandidate[] = [
  { id: 'cand1', name: 'Rohan Patel', status: 'Pending Review', score: 'N/A' },
  { id: 'cand2', name: 'Priya Kumari', status: 'Pending Review', score: 'N/A' },
  { id: 'cand3', name: 'Vikram Singh', status: 'Pending Review', score: 'N/A' },
  { id: 'cand4', name: 'Aisha Khan', status: 'Pending Review', score: 'N/A' },
];

const jobCriteria = "Looking for 5+ years Python (Software Engineering), leadership experience.";

const AnimatedResumeScreening: React.FC<AnimatedResumeScreeningProps> = ({ isPreview = false }) => {
  const [candidates, setCandidates] = useState<AnimatedCandidate[]>(initialScreenCandidates);
  const [screeningStep, setScreeningStep] = useState(0); // 0: initial, 1: criteria set, 2: screening, 3: ranked
  const [currentProcessingIndex, setCurrentProcessingIndex] = useState(-1);

  useEffect(() => {
    if (isPreview) {
        setCandidates(initialScreenCandidates.slice(0,1).map(c => ({...c, score: 85, status: 'Top Match'})));
        setScreeningStep(3);
        return;
    }
    let timerId: number | undefined;
    if (screeningStep === 1) { // Criteria set, start screening
      timerId = window.setTimeout(() => {
        setScreeningStep(2);
        setCurrentProcessingIndex(0);
      }, 1000);
    } else if (screeningStep === 2 && currentProcessingIndex < candidates.length) { // Screening
      timerId = window.setTimeout(() => {
        setCandidates(prev => prev.map((c, idx) => {
          if (idx === currentProcessingIndex) {
            // Simulate scoring
            let score = 50 + Math.floor(Math.random() * 50);
            if (c.name.includes('Vikram')) score = Math.min(95, score + 20); // Boost Vikram
            if (c.name.includes('Aisha')) score = Math.max(30, score - 20); // Lower Aisha
            return { ...c, score, status: 'Screening...' };
          }
          return c;
        }));
        setCurrentProcessingIndex(prev => prev + 1);
      }, 1000);
    } else if (screeningStep === 2 && currentProcessingIndex >= candidates.length) { // Done screening, rank
      timerId = window.setTimeout(() => {
        setCandidates(prev => 
          [...prev]
            .sort((a, b) => (b.score as number) - (a.score as number))
            .map(c => ({ ...c, status: (c.score as number) > 70 ? 'Good Match' : (c.score as number) > 50 ? 'Fair Match' : 'Low Match' }))
        );
        setScreeningStep(3);
      }, 1000);
    }
    return () => {
      if (timerId !== undefined) {
        window.clearTimeout(timerId);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screeningStep, currentProcessingIndex, isPreview]);

  const getStatusColor = (status: string | undefined) => {
    if (status?.includes('Top') || status?.includes('Good')) return 'text-green-500';
    if (status?.includes('Fair')) return 'text-yellow-500';
    if (status?.includes('Low')) return 'text-red-500';
    return 'text-gray-500';
  };

  const getScoreColor = (score: number | string | undefined) => {
    if (typeof score !== 'number') return 'text-gray-500';
    if (score > 70) return 'text-green-600 font-semibold';
    if (score > 50) return 'text-yellow-600 font-semibold';
    return 'text-red-600 font-semibold';
  };
  
  const statusText = isPreview ? "AI Screening Complete" :
    screeningStep === 0 ? "Define screening criteria..." :
    screeningStep === 1 ? "Criteria set! AI starting..." :
    screeningStep === 2 ? `AI Screening in progress... (${currentProcessingIndex}/${candidates.length})` :
    "AI Screening complete. Candidates ranked!";

  if (isPreview) {
    return (
      <div className="w-full h-40 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-2 text-center shadow-inner overflow-hidden">
        <DocumentMagnifyingGlassIcon className="w-8 h-8 text-brandOrange-DEFAULT mb-1" />
        <p className="text-xs font-semibold text-brandGray-dark">AI Resume Screener</p>
        <div className="mt-1 w-full max-w-xs bg-white p-1 rounded shadow text-left">
           <div className="flex items-center justify-between text-xxs py-0.5 px-1 border-b">
              <span className="font-medium truncate w-1/2">{candidates[0]?.name}</span>
              <span className={`${getScoreColor(candidates[0]?.score)} truncate w-1/4 text-right`}>{candidates[0]?.score}%</span>
              <span className={`${getStatusColor(candidates[0]?.status)} truncate w-1/4 text-right`}>{candidates[0]?.status}</span>
            </div>
        </div>
        <p className="text-xxs text-gray-500 mt-1">{statusText}</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-xl border border-gray-200 min-h-[400px] flex flex-col">
      <div className="flex items-center mb-4">
        <DocumentMagnifyingGlassIcon className="w-8 h-8 text-brandOrange-DEFAULT mr-3" />
        <h3 className="text-lg font-semibold text-brandGray-dark">AI-Powered Resume Screener</h3>
      </div>
      
      {screeningStep === 0 && (
        <div className="flex-grow flex flex-col items-center justify-center">
          <textarea 
            className="w-full p-2 border border-gray-300 rounded-md text-sm mb-4" 
            rows={3} 
            defaultValue={jobCriteria}
            placeholder="Recruiter explains the criteria here..."
          />
          <button 
            onClick={() => setScreeningStep(1)}
            className="bg-brandOrange-DEFAULT text-white px-6 py-2 rounded-md font-medium hover:bg-brandOrange-dark"
          >
            Start AI Screening
          </button>
        </div>
      )}

      {(screeningStep > 0) && (
        <>
          <div className="bg-gray-50 p-3 rounded-md mb-1 text-sm text-brandGray-DEFAULT">
            <strong>Criteria:</strong> <span className="italic">"{jobCriteria}"</span>
          </div>
          <div className="bg-blue-50 p-3 rounded-md mb-4 text-sm text-blue-700">
            {statusText}
          </div>
          <div className="flex-grow space-y-2 overflow-y-auto max-h-72 pr-2">
            {candidates.map((candidate, idx) => (
              <div 
                key={candidate.id} 
                className={`bg-white p-3 rounded shadow-md border flex items-center justify-between ${idx === currentProcessingIndex && screeningStep === 2 ? 'border-brandOrange-DEFAULT animate-pulse' : 'border-gray-200'}`}
              >
                <div>
                  <span className="font-medium text-brandGray-dark">{candidate.name}</span>
                  <p className={`text-xs ${getStatusColor(candidate.status)}`}>{candidate.status}</p>
                </div>
                <div className="flex items-center">
                    {screeningStep === 2 && idx === currentProcessingIndex && <div className="w-4 h-4 border-2 border-dashed border-brandOrange-DEFAULT rounded-full animate-spin mr-2"></div>}
                    {typeof candidate.score === 'number' && <span className={`text-lg ${getScoreColor(candidate.score)}`}>{candidate.score}%</span>}
                    {screeningStep === 3 && (candidate.status?.includes('Match') ? <CheckCircleIcon className={`w-5 h-5 ml-2 ${getStatusColor(candidate.status)}`} /> : <XCircleIcon className={`w-5 h-5 ml-2 ${getStatusColor(candidate.status)}`} />)}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
       {(screeningStep === 3) && (
         <button 
            onClick={() => { setCandidates(initialScreenCandidates.map(c => ({...c, score:'N/A', status: 'Pending Review'}))); setScreeningStep(0); setCurrentProcessingIndex(-1); }}
            className="mt-4 w-full bg-brandOrange-DEFAULT text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-brandOrange-dark transition duration-150"
          >
           Screen for Another Role
          </button>
      )}
    </div>
  );
};

export default AnimatedResumeScreening;
