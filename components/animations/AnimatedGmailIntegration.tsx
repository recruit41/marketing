
import React, { useState, useEffect } from 'react';
import { EnvelopeIcon, DocumentTextIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

interface GmailItem {
  id: string;
  subject: string;
  hasAttachment: boolean;
  status: 'pending' | 'scanning' | 'imported' | 'no_resume';
}

interface AnimatedGmailIntegrationProps {
  isPreview?: boolean;
}

const initialEmails: GmailItem[] = [
  { id: 'email1', subject: 'Application for SWE Role - John Doe', hasAttachment: true, status: 'pending' },
  { id: 'email2', subject: 'Fwd: Project Update', hasAttachment: false, status: 'pending' },
  { id: 'email3', subject: 'Resume - Jane Smith', hasAttachment: true, status: 'pending' },
];

const AnimatedGmailIntegration: React.FC<AnimatedGmailIntegrationProps> = ({ isPreview = false }) => {
  const [emails, setEmails] = useState<GmailItem[]>(initialEmails);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    if (isPreview) {
        setEmails(initialEmails.slice(0,1).map(e => ({...e, status: e.hasAttachment ? 'imported' : 'no_resume'})));
        setIsScanning(false);
        return;
    }

    let timerId: number | undefined;

    if (!isScanning && currentIndex < emails.length -1) {
      timerId = window.setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
        setIsScanning(true);
      }, 1000);
    } else if (isScanning && currentIndex !== -1) {
      timerId = window.setTimeout(() => {
        setEmails(prevEmails => prevEmails.map((email, index) => 
          index === currentIndex 
            ? { ...email, status: email.hasAttachment ? 'imported' : 'no_resume' }
            : email
        ));
        setIsScanning(false); 
      }, 1500);
    }
    return () => {
      if (timerId !== undefined) {
        window.clearTimeout(timerId);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, isScanning, emails.length, isPreview]);

  const getStatusContent = (email: GmailItem) => {
    if (email.status === 'imported') return <><CheckCircleIcon className="w-5 h-5 text-green-500 mr-1" /> Resume Imported</>;
    if (email.status === 'no_resume') return <span className="text-xs text-gray-500">No Resume</span>;
    if (email.status === 'scanning') return <div className="w-4 h-4 border-2 border-dashed border-brandOrange-DEFAULT rounded-full animate-spin"></div>;
    return <EnvelopeIcon className="w-5 h-5 text-gray-400" />;
  };

  const statusText = isPreview ? "Gmail Scanned" :
    currentIndex === -1 ? "Connecting to Gmail..." :
    isScanning ? `Scanning: "${emails[currentIndex]?.subject}"` :
    currentIndex >= emails.length - 1 ? "Gmail scan complete!" :
    "Scanning next email...";

  if (isPreview) {
    return (
      <div className="w-full h-40 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-2 text-center shadow-inner overflow-hidden">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/512px-Gmail_icon_%282020%29.svg.png" alt="Gmail" className="w-8 h-8 mb-1"/>
        <p className="text-xs font-semibold text-brandGray-dark">Gmail Integration</p>
         <div className="mt-1 w-full max-w-xs bg-white p-1 rounded shadow text-left">
           <div className="flex items-center justify-between text-xxs py-0.5 px-1 border-b">
                <span className="font-medium truncate w-2/3">{emails[0].subject}</span>
                {emails[0].status === 'imported' ? <CheckCircleIcon className="w-3 h-3 text-green-500" /> : <span className="text-xxs text-gray-400">No Res</span>}
            </div>
        </div>
        <p className="text-xxs text-gray-500 mt-1">{statusText}</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-xl border border-gray-200 min-h-[300px] flex flex-col">
      <div className="flex items-center mb-4">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/512px-Gmail_icon_%282020%29.svg.png" alt="Gmail" className="w-7 h-7 mr-2"/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/512px-Google_Drive_icon_%282020%29.svg.png" alt="Google Drive" className="w-7 h-7 mr-3"/>
        <h3 className="text-lg font-semibold text-brandGray-dark">Gmail & Drive Resume Discovery</h3>
      </div>
      <div className="bg-gray-50 p-3 rounded-md mb-4 text-sm text-brandGray-DEFAULT truncate">
        {statusText}
      </div>
      <div className="flex-grow space-y-2 overflow-y-auto max-h-60 pr-2">
        {emails.map((email, index) => (
          <div 
            key={email.id} 
            className={`bg-white p-3 rounded shadow-md border ${index === currentIndex && isScanning ? 'border-brandOrange-DEFAULT' : 'border-gray-200'} flex items-center justify-between`}
          >
            <div className="flex items-center overflow-hidden">
              {email.hasAttachment && <DocumentTextIcon className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0" />}
              {!email.hasAttachment && <EnvelopeIcon className="w-5 h-5 mr-2 text-gray-400 flex-shrink-0" />}
              <span className="text-sm text-brandGray-dark truncate" title={email.subject}>{email.subject}</span>
            </div>
            <div className="text-xs flex items-center text-gray-600 ml-2">
              {getStatusContent(email)}
            </div>
          </div>
        ))}
      </div>
      {currentIndex >= emails.length -1 && !isScanning && (
         <button 
            onClick={() => { setEmails(initialEmails.map(e => ({...e, status: 'pending'}))); setCurrentIndex(-1); setIsScanning(false); }}
            className="mt-4 w-full bg-brandOrange-DEFAULT text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-brandOrange-dark transition duration-150"
          >
           Rescan Gmail
          </button>
      )}
    </div>
  );
};

export default AnimatedGmailIntegration;
