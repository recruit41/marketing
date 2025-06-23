
import React, { useState, useEffect } from 'react';
import { FolderArrowDownIcon, DocumentTextIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

interface AnimatedResumeFile {
  id: string;
  name: string;
  type: 'pdf' | 'docx';
  status: 'pending' | 'uploading' | 'processing' | 'done';
}

interface AnimatedBulkUploadProps {
  isPreview?: boolean;
}

const resumeFilesData: AnimatedResumeFile[] = [
  { id: 'res1', name: 'Software_Engineer.pdf', type: 'pdf', status: 'pending' },
  { id: 'res2', name: 'Product_Manager_CV.docx', type: 'docx', status: 'pending' },
  { id: 'res3', name: 'Data_Analyst_Resume.pdf', type: 'pdf', status: 'pending' },
];

const AnimatedBulkUpload: React.FC<AnimatedBulkUploadProps> = ({ isPreview = false }) => {
  const [files, setFiles] = useState<AnimatedResumeFile[]>(resumeFilesData);
  const [currentStep, setCurrentStep] = useState(0); // 0: initial, 1: uploading, 2: processing, 3: all done

  useEffect(() => {
    if (isPreview) {
        setFiles(resumeFilesData.slice(0,1).map(f => ({...f, status: 'done'})));
        setCurrentStep(3);
        return;
    }
    let timerId: number | undefined;

    if (currentStep === 0) { // Initial state
        timerId = window.setTimeout(() => setCurrentStep(1), 1000); // Start "uploading"
    } else if (currentStep === 1 || currentStep === 2) { // Uploading or Processing
      const pendingFileIndex = files.findIndex(f => f.status === (currentStep === 1 ? 'pending' : 'uploading'));
      if (pendingFileIndex !== -1) {
        timerId = window.setTimeout(() => {
          setFiles(prevFiles => prevFiles.map((file, index) => 
            index === pendingFileIndex ? { ...file, status: (currentStep === 1 ? 'uploading' : 'processing') } : file
          ));
        }, 700);
      } else {
         // All files moved to next stage or done, transition currentStep
        const processingFileIndex = files.findIndex(f => f.status === 'processing');
        if (currentStep === 2 && processingFileIndex !== -1) { // Still processing files
            timerId = window.setTimeout(() => {
                setFiles(prevFiles => prevFiles.map((file, index) => 
                    index === processingFileIndex ? { ...file, status: 'done' } : file
                ));
            }, 700);
        } else if (files.every(f => f.status === (currentStep === 1 ? 'uploading' : 'done'))) {
            timerId = window.setTimeout(() => setCurrentStep(prev => prev + 1), 500);
        }
      }
    }
    return () => {
      if (timerId !== undefined) {
        window.clearTimeout(timerId);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files, currentStep, isPreview]);

  const getStatusIcon = (status: AnimatedResumeFile['status']) => {
    if (status === 'done') return <CheckCircleIcon className="w-5 h-5 text-green-500" />;
    if (status === 'processing' || status === 'uploading') return <div className="w-4 h-4 border-2 border-dashed border-brandOrange-DEFAULT rounded-full animate-spin"></div>;
    return <DocumentTextIcon className="w-5 h-5 text-gray-400" />;
  };

  const statusText = isPreview ? "Resumes Uploaded" : 
    currentStep === 0 ? "Ready for bulk upload..." :
    currentStep === 1 ? "Uploading files..." :
    currentStep === 2 ? "Processing resumes..." :
    "Bulk upload complete!";


  if (isPreview) {
    return (
      <div className="w-full h-40 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-2 text-center shadow-inner overflow-hidden">
        <FolderArrowDownIcon className="w-8 h-8 text-brandOrange-DEFAULT mb-1" />
        <p className="text-xs font-semibold text-brandGray-dark">Bulk Resume Upload</p>
        <div className="mt-1 w-full max-w-xs bg-white p-1 rounded shadow text-left">
           <div className="flex items-center justify-between text-xxs py-0.5 px-1 border-b">
              <DocumentTextIcon className={`w-3 h-3 ${files[0]?.type === 'pdf' ? 'text-red-500' : 'text-blue-500'} mr-1`} />
              <span className="font-medium truncate w-2/3">{files[0]?.name}</span>
              <CheckCircleIcon className="w-3 h-3 text-green-500" />
            </div>
        </div>
        <p className="text-xxs text-gray-500 mt-1">{statusText}</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-xl border border-gray-200 min-h-[300px] flex flex-col">
      <div className="flex items-center mb-4">
        <FolderArrowDownIcon className="w-8 h-8 text-brandOrange-DEFAULT mr-3" />
        <h3 className="text-lg font-semibold text-brandGray-dark">Bulk Resume Upload</h3>
      </div>
      <div className="bg-gray-50 p-3 rounded-md mb-4 text-sm text-brandGray-DEFAULT">
        {statusText} (Processed: {files.filter(f => f.status === 'done').length}/{files.length})
      </div>
      <div className="flex-grow space-y-2 overflow-y-auto max-h-60 pr-2">
        {files.map(file => (
          <div key={file.id} className="bg-white p-3 rounded shadow-md border border-gray-200 flex items-center justify-between">
            <div className="flex items-center">
              <DocumentTextIcon className={`w-5 h-5 mr-2 ${file.type === 'pdf' ? 'text-red-500' : 'text-blue-500'}`} />
              <span className="text-sm text-brandGray-dark">{file.name}</span>
            </div>
            {getStatusIcon(file.status)}
          </div>
        ))}
      </div>
       {currentStep === 3 && (
         <button 
            onClick={() => { setFiles(resumeFilesData.map(f => ({...f, status: 'pending'}))); setCurrentStep(0); }}
            className="mt-4 w-full bg-brandOrange-DEFAULT text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-brandOrange-dark transition duration-150"
          >
           Upload More
          </button>
      )}
    </div>
  );
};

export default AnimatedBulkUpload;
