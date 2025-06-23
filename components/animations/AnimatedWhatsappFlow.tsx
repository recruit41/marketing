
import React, { useState, useEffect } from 'react';
import { ChatBubbleLeftEllipsisIcon, CheckCircleIcon, UserGroupIcon } from '@heroicons/react/24/outline'; // UserGroup for candidate list
import { AnimatedCandidate, AnimatedMessage } from '../../types';

interface AnimatedWhatsappFlowProps {
  isPreview?: boolean;
}

const initialCandidatesForWhatsapp: AnimatedCandidate[] = [
  { id: 'wa1', name: 'Alok Nath', status: 'Selected for Outreach', score: 80 },
  { id: 'wa2', name: 'Meera Desai', status: 'Selected for Outreach', score: 75 },
  { id: 'wa3', name: 'Ravi Teja', status: 'Not Selected', score: 60 },
];

const whatsappConversation: AnimatedMessage[] = [
  { id: 'msg1', sender: 'recruiter', text: 'Hi [CandidateName], I am Pradyumna from Think41. You applied for Eng. Manager via Naukri. This role is in HSR Layout, Bangalore. Comfortable?' },
  { id: 'msg2', sender: 'user', text: 'Yes, I am comfortable working from HSR Layout.' },
  { id: 'msg3', sender: 'recruiter', text: 'Great! What is your current CTC and expected CTC?' },
  { id: 'msg4', sender: 'user', text: 'Current is 25LPA, expecting 30-32LPA.' },
];

const AnimatedWhatsappFlow: React.FC<AnimatedWhatsappFlowProps> = ({ isPreview = false }) => {
  const [step, setStep] = useState(0); // 0: select candidates, 1: sending, 2: Alok responds, 3: Meera responds, 4: ATS updated
  const [candidates, setCandidates] = useState(initialCandidatesForWhatsapp);
  const [selectedCandidates, setSelectedCandidates] = useState<string[]>([]);
  const [chatMessages, setChatMessages] = useState<AnimatedMessage[]>([]);
  const [activeChatCandidate, setActiveChatCandidate] = useState<AnimatedCandidate | null>(null);

  useEffect(() => {
    if (isPreview) {
        setStep(4);
        const previewCand = candidates[0];
        setActiveChatCandidate(previewCand);
        setChatMessages(whatsappConversation.slice(0,2).map(m => ({...m, text: m.text.replace('[CandidateName]', previewCand.name) })));
        setCandidates(prev => prev.map(c => c.id === previewCand.id ? {...c, status: 'Responded: HSR OK'} : c));
        return;
    }

    let timerId: number | undefined;
    if (step === 0 && selectedCandidates.length === 2) { // Auto proceed after selecting 2
        timerId = window.setTimeout(() => setStep(1), 500);
    } else if (step === 1) { // Sending
      setActiveChatCandidate(candidates.find(c => c.id === selectedCandidates[0]) || null);
      timerId = window.setTimeout(() => {
        setChatMessages([
            {...whatsappConversation[0], text: whatsappConversation[0].text.replace('[CandidateName]', candidates.find(c => c.id === selectedCandidates[0])?.name || 'Candidate')}
        ]);
        setStep(2); // Alok responds
      }, 1500);
    } else if (step === 2) { // Alok responds (first message)
      timerId = window.setTimeout(() => {
        setChatMessages(prev => [...prev, whatsappConversation[1]]);
        // Update Alok's status in ATS view
        setCandidates(prevCands => prevCands.map(c => 
            c.id === selectedCandidates[0] ? {...c, status: 'Responded: HSR OK'} : c
        ));
        // Switch to Meera for next message
        setActiveChatCandidate(candidates.find(c => c.id === selectedCandidates[1]) || null);
        setChatMessages([
            {...whatsappConversation[0], text: whatsappConversation[0].text.replace('[CandidateName]', candidates.find(c => c.id === selectedCandidates[1])?.name || 'Candidate')}
        ]);
        setStep(3); // Meera responds
      }, 2000);
    } else if (step === 3) { // Meera responds
       timerId = window.setTimeout(() => {
        setChatMessages(prev => [...prev, {...whatsappConversation[1], text: 'Sorry, I am looking for remote only.'}]);
        setCandidates(prevCands => prevCands.map(c => 
            c.id === selectedCandidates[1] ? {...c, status: 'Responded: Remote Only'} : c
        ));
        setStep(4); // ATS updated
      }, 2500);
    }
    return () => {
      if (timerId !== undefined) {
        window.clearTimeout(timerId);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, selectedCandidates, isPreview]);

  const toggleCandidateSelection = (id: string) => {
    if (step > 0) return; // Don't allow selection after process starts
    setSelectedCandidates(prev => 
      prev.includes(id) ? prev.filter(candId => candId !== id) : [...prev, id]
    );
  };

  const statusText = isPreview ? "WhatsApp Outreach Done" :
    step === 0 ? "Select candidates for WhatsApp outreach..." :
    step === 1 ? `Sending messages to ${selectedCandidates.length} candidates...` :
    step === 2 ? `Waiting for ${activeChatCandidate?.name}'s response...` :
    step === 3 ? `Waiting for ${activeChatCandidate?.name}'s response...` :
    "WhatsApp conversations logged in ATS!";

  if (isPreview) {
    return (
      <div className="w-full h-40 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-2 text-center shadow-inner overflow-hidden">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png" alt="WhatsApp" className="w-8 h-8 mb-1"/>
        <p className="text-xs font-semibold text-brandGray-dark">WhatsApp CRM</p>
        <div className="mt-1 w-full max-w-xs bg-white p-1 rounded shadow text-left">
           <p className="text-xxs font-medium truncate">{activeChatCandidate?.name}</p>
           <p className="text-xxs text-green-600 truncate">Responded: HSR OK</p>
        </div>
        <p className="text-xxs text-gray-500 mt-1">{statusText}</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-xl border border-gray-200 min-h-[450px] flex flex-col md:flex-row gap-4">
      {/* ATS Candidate List */}
      <div className="md:w-1/2 border rounded-lg p-3">
        <div className="flex items-center mb-3">
            <UserGroupIcon className="w-6 h-6 text-brandOrange-DEFAULT mr-2"/>
            <h4 className="font-semibold text-brandGray-dark">Candidate List</h4>
        </div>
        <p className="text-xs text-brandGray-DEFAULT mb-2">{statusText}</p>
        <div className="space-y-2 max-h-80 overflow-y-auto">
          {candidates.map(c => (
            <div 
              key={c.id} 
              onClick={() => toggleCandidateSelection(c.id)}
              className={`p-2 border rounded flex justify-between items-center cursor-pointer 
                ${selectedCandidates.includes(c.id) ? 'bg-brandOrange-light border-brandOrange-DEFAULT' : 'hover:bg-gray-50'}
                ${c.status === 'Not Selected' ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <div>
                <p className="font-medium text-sm">{c.name}</p>
                <p className={`text-xs ${c.status?.includes('Responded') ? (c.status?.includes('HSR OK') ? 'text-green-600' : 'text-red-600') : 'text-gray-500'}`}>{c.status}</p>
              </div>
              {c.status !== 'Not Selected' && step === 0 &&
                <input type="checkbox" readOnly checked={selectedCandidates.includes(c.id)} className="form-checkbox h-4 w-4 text-brandOrange-DEFAULT"/>
              }
              {c.status?.includes('Responded') && <CheckCircleIcon className="w-5 h-5 text-green-500"/>}
            </div>
          ))}
        </div>
         {(step === 0 && selectedCandidates.length > 0) && (
             <button 
                onClick={() => setStep(1)}
                className="mt-3 w-full bg-brandOrange-DEFAULT text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-brandOrange-dark"
            >
                Send WhatsApp to Selected ({selectedCandidates.length})
            </button>
         )}
         {(step === 4) && (
             <button 
                onClick={() => {
                    setStep(0); 
                    setSelectedCandidates([]); 
                    setCandidates(initialCandidatesForWhatsapp);
                    setChatMessages([]);
                    setActiveChatCandidate(null);
                }}
                className="mt-3 w-full bg-brandOrange-DEFAULT text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-brandOrange-dark"
            >
                Start New Outreach
            </button>
         )}
      </div>

      {/* Mock WhatsApp Chat */}
      <div className="md:w-1/2 border rounded-lg p-3 flex flex-col bg-gray-50">
        <div className="flex items-center mb-3 p-2 bg-white rounded-t-md shadow">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png" alt="WhatsApp" className="w-8 h-8 mr-2"/>
          <div>
            <h4 className="font-semibold text-brandGray-dark">{activeChatCandidate?.name || "WhatsApp Chat"}</h4>
            { (step === 1 || (activeChatCandidate && (step === 2 || step === 3))) && <p className="text-xs text-green-500">Online</p> }
          </div>
        </div>
        <div className="flex-grow space-y-2 overflow-y-auto bg-whatsapp-bg p-3 rounded-b-md min-h-[250px] max-h-[250px] shadow-inner" style={{backgroundImage: `url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')`}}>
          {chatMessages.map(msg => (
            <div key={msg.id} className={`flex ${msg.sender === 'recruiter' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] p-2 rounded-lg text-sm ${msg.sender === 'recruiter' ? 'bg-green-100 text-gray-800' : 'bg-white text-gray-800 shadow'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {(step === 1 || (activeChatCandidate && (step === 2 || step === 3) && chatMessages.length % 2 !== 0 )) && ( // Show typing indicator
            <div className="flex justify-start">
                 <div className="max-w-[70%] p-2 rounded-lg text-sm bg-white text-gray-500 shadow italic">
                    typing...
                 </div>
            </div>
          )}
        </div>
        { (step === 0 && selectedCandidates.length === 0) &&
            <div className="flex-grow flex items-center justify-center text-gray-400 text-center">
                <ChatBubbleLeftEllipsisIcon className="w-12 h-12 mb-2"/>
                <p>Select candidates to start a chat.</p>
            </div>
        }
      </div>
    </div>
  );
};

export default AnimatedWhatsappFlow;
