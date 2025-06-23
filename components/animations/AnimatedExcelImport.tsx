
import React, { useState, useEffect } from 'react';
import { DocumentArrowUpIcon, TableCellsIcon, CheckCircleIcon, LinkIcon } from '@heroicons/react/24/outline';
import { AnimatedCandidate } from '../../types';

interface AnimatedExcelImportProps {
  isPreview?: boolean;
}

const initialCandidates: AnimatedCandidate[] = [
  { id: '1', name: 'Priya Sharma', source: 'Naukri.csv', score: 'Pending', resumeLink: true },
  { id: '2', name: 'Amit Singh', source: 'Hirist.xlsx', score: 'Pending' },
  { id: '3', name: 'Sneha Reddy', source: 'Internal.csv', score: 'Pending', resumeLink: true },
];

const AnimatedExcelImport: React.FC<AnimatedExcelImportProps> = ({ isPreview = false }) => {
  const [candidates, setCandidates] = useState<AnimatedCandidate[]>([]);
  const [step, setStep] = useState(0); // 0: initial, 1: uploading, 2: processing, 3: done

  useEffect(() => {
    if (isPreview) {
        setCandidates(initialCandidates.slice(0,1).map(c => ({...c, imported: true, status: 'Imported'})));
        setStep(3);
        return;
    }

    let timeoutId: number | undefined;
    if (step === 0) { // Initial state, trigger upload animation
        timeoutId = window.setTimeout(() => setStep(1), 1000);
    } else if (step === 1) { // "Uploading"
      timeoutId = window.setTimeout(() => {
        setCandidates([initialCandidates[0]]);
        setStep(2); // Start "processing"
      }, 1500);
    } else if (step === 2 && candidates.length < initialCandidates.length) { // "Processing" more candidates
      timeoutId = window.setTimeout(() => {
        setCandidates(prev => [...prev, initialCandidates[prev.length]]);
      }, 1000);
    } else if (step === 2 && candidates.length === initialCandidates.length) { // Done processing
      timeoutId = window.setTimeout(() => {
        setCandidates(prev => prev.map(c => ({ ...c, status: 'Imported', score: c.resumeLink ? 'Resume Parsed' : 'Data Added' })));
        setStep(3);
      }, 1000);
    }
    return () => {
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, candidates.length, isPreview]);


  const getStatusMessage = () => {
    if (isPreview) return "Excel Data Imported";
    switch(step) {
      case 0: return "Ready to import...";
      case 1: return "Uploading Excel/CSV...";
      case 2: return `Processing candidates (${candidates.length}/${initialCandidates.length})...`;
      case 3: return "All candidates imported successfully!";
      default: return "";
    }
  };

  if (isPreview) {
    return (
      <div className="w-full h-40 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-2 text-center shadow-inner overflow-hidden">
        <DocumentArrowUpIcon className="w-8 h-8 text-brandOrange-DEFAULT mb-1" />
        <p className="text-xs font-semibold text-brandGray-dark">Excel/CSV Import</p>
        <div className="mt-1 w-full max-w-xs bg-white p-1 rounded shadow text-left">
           <div className="flex items-center justify-between text-xxs py-0.5 px-1 border-b">
              <span className="font-medium truncate w-1/2">{initialCandidates[0].name}</span>
              <span className="text-gray-500 truncate w-1/4">{initialCandidates[0].source}</span>
              <CheckCircleIcon className="w-3 h-3 text-green-500" />
            </div>
        </div>
        <p className="text-xxs text-gray-500 mt-1">{getStatusMessage()}</p>
      </div>
    );
  }


  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-xl border border-gray-200 min-h-[300px] flex flex-col">
      <div className="flex items-center mb-4">
        <TableCellsIcon className="w-8 h-8 text-brandOrange-DEFAULT mr-3" />
        <h3 className="text-lg font-semibold text-brandGray-dark">Universal Excel/CSV Importer</h3>
      </div>
      <div className="bg-gray-50 p-3 rounded-md mb-4 text-sm text-brandGray-DEFAULT">
        {getStatusMessage()}
      </div>
      
      <div className="flex-grow space-y-2 overflow-y-auto max-h-60 pr-2">
        {candidates.map((candidate, index) => (
          <div 
            key={candidate.id} 
            className="bg-white p-3 rounded shadow-md border border-gray-200 animate-fadeIn"
            style={{animationDelay: `${index * 100}ms`}}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-brandGray-dark">{candidate.name}</span>
              {step === 3 && candidate.status === 'Imported' ? (
                <CheckCircleIcon className="w-5 h-5 text-green-500" />
              ) : (
                <div className="w-4 h-4 border-2 border-dashed border-brandOrange-DEFAULT rounded-full animate-spin"></div>
              )}
            </div>
            <p className="text-xs text-gray-500">From: {candidate.source}</p>
            {candidate.resumeLink && (
              <div className="flex items-center text-xs text-blue-500 mt-1">
                <LinkIcon className="w-3 h-3 mr-1" />
                <span>Resume Link Detected {step === 3 && candidate.score === 'Resume Parsed' ? '(Processed)' : ''}</span>
              </div>
            )}
          </div>
        ))}
        {step < 3 && candidates.length === 0 && (
            <div className="text-center py-8">
                <DocumentArrowUpIcon className="w-16 h-16 text-gray-300 mx-auto"/>
                <p className="text-gray-400 mt-2">Awaiting file upload...</p>
            </div>
        )}
      </div>
      {step === 3 && (
         <button 
            onClick={() => { setCandidates([]); setStep(0); }}
            className="mt-4 w-full bg-brandOrange-DEFAULT text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-brandOrange-dark transition duration-150"
          >
           Import Another File
          </button>
      )}
    </div>
  );
};

export default AnimatedExcelImport;

// Add this to your global CSS or a style tag if not using a CSS file for animations
// @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
// .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; }
