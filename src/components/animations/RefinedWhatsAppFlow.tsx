import React, { useState, useEffect } from 'react';
import { MessageSquare, Users, Check, CheckCheck, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
interface Candidate {
  id: string;
  name: string;
  status: string;
  score: number;
}
interface Message {
  id: string;
  sender: 'recruiter' | 'candidate';
  text: string;
  timestamp?: string;
}
interface RefinedWhatsAppFlowProps {
  isPreview?: boolean;
}
const initialCandidates: Candidate[] = [{
  id: 'wa1',
  name: 'Alok Nath',
  status: 'Selected for Outreach',
  score: 80
}, {
  id: 'wa2',
  name: 'Meera Desai',
  status: 'Selected for Outreach',
  score: 75
}, {
  id: 'wa3',
  name: 'Ravi Teja',
  status: 'Not Selected',
  score: 60
}];
const messageTemplates: Message[] = [{
  id: 'msg1',
  sender: 'recruiter',
  text: 'Hi [CandidateName], I am Pradyumna from Think41. You applied for Eng. Manager via Naukri. This role is in HSR Layout, Bangalore. Comfortable?'
}, {
  id: 'msg2',
  sender: 'candidate',
  text: 'Yes, I am comfortable working from HSR Layout.'
}, {
  id: 'msg3',
  sender: 'recruiter',
  text: 'Great! What is your current CTC and expected CTC?'
}, {
  id: 'msg4',
  sender: 'candidate',
  text: 'Current is 25LPA, expecting 30-32LPA.'
}];
const RefinedWhatsAppFlow: React.FC<RefinedWhatsAppFlowProps> = ({
  isPreview = false
}) => {
  const [step, setStep] = useState(0);
  const [candidates, setCandidates] = useState(initialCandidates);
  const [selectedCandidates, setSelectedCandidates] = useState<string[]>([]);
  const [chatMessages, setChatMessages] = useState<Message[]>([]);
  const [activeChatCandidate, setActiveChatCandidate] = useState<Candidate | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  useEffect(() => {
    if (isPreview) {
      setStep(4);
      const previewCandidate = candidates[0];
      setActiveChatCandidate(previewCandidate);
      setChatMessages(messageTemplates.slice(0, 2).map(m => ({
        ...m,
        text: m.text.replace('[CandidateName]', previewCandidate.name)
      })));
      setCandidates(prev => prev.map(c => c.id === previewCandidate.id ? {
        ...c,
        status: 'Responded: HSR OK'
      } : c));
      return;
    }
    let timerId: NodeJS.Timeout;
    if (step === 0 && selectedCandidates.length === 2) {
      timerId = setTimeout(() => setStep(1), 500);
    } else if (step === 1) {
      const firstCandidate = candidates.find(c => c.id === selectedCandidates[0]);
      setActiveChatCandidate(firstCandidate || null);
      setIsTyping(true);
      timerId = setTimeout(() => {
        const personalizedMessage = {
          ...messageTemplates[0],
          text: messageTemplates[0].text.replace('[CandidateName]', firstCandidate?.name || 'Candidate')
        };
        setChatMessages([personalizedMessage]);
        setIsTyping(false);
        setStep(2);
      }, 1500);
    } else if (step === 2) {
      setIsTyping(true);
      timerId = setTimeout(() => {
        setChatMessages(prev => [...prev, messageTemplates[1]]);
        setIsTyping(false);
        setCandidates(prev => prev.map(c => c.id === selectedCandidates[0] ? {
          ...c,
          status: 'Responded: HSR OK'
        } : c));
        const secondCandidate = candidates.find(c => c.id === selectedCandidates[1]);
        setActiveChatCandidate(secondCandidate || null);
        const personalizedMessage = {
          ...messageTemplates[0],
          text: messageTemplates[0].text.replace('[CandidateName]', secondCandidate?.name || 'Candidate')
        };
        setChatMessages([personalizedMessage]);
        setStep(3);
      }, 2000);
    } else if (step === 3) {
      setIsTyping(true);
      timerId = setTimeout(() => {
        setChatMessages(prev => [...prev, {
          ...messageTemplates[1],
          text: 'Sorry, I am looking for remote only.'
        }]);
        setIsTyping(false);
        setCandidates(prev => prev.map(c => c.id === selectedCandidates[1] ? {
          ...c,
          status: 'Responded: Remote Only'
        } : c));
        setStep(4);
      }, 2500);
    }
    return () => clearTimeout(timerId);
  }, [step, selectedCandidates, candidates, isPreview]);
  const toggleCandidateSelection = (id: string) => {
    if (step > 0) return;
    setSelectedCandidates(prev => prev.includes(id) ? prev.filter(candId => candId !== id) : [...prev, id]);
  };
  const getStatusText = () => {
    if (step === 0) return "Select candidates for WhatsApp outreach";
    if (step === 1) return `Sending messages to ${selectedCandidates.length} candidates...`;
    if (step === 2 || step === 3) return `Waiting for ${activeChatCandidate?.name}'s response...`;
    return "WhatsApp conversations logged in ATS!";
  };
  const resetFlow = () => {
    setStep(0);
    setSelectedCandidates([]);
    setCandidates(initialCandidates);
    setChatMessages([]);
    setActiveChatCandidate(null);
    setIsTyping(false);
  };
  if (isPreview) {
    return <Card className="w-full h-40 bg-slate-50 border-2 border-dashed border-slate-300">
        <CardContent className="flex flex-col items-center justify-center h-full p-4 text-center">
          <MessageSquare className="w-8 h-8 mb-2 text-orange-500" />
          <p className="text-sm font-semibold text-slate-900">WhatsApp CRM</p>
          <div className="mt-2 w-full max-w-xs bg-white p-2 rounded shadow text-left">
            <p className="text-xs font-medium truncate">{activeChatCandidate?.name}</p>
            <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
              Responded: HSR OK
            </Badge>
          </div>
          <p className="text-xs text-slate-600 mt-2">WhatsApp Outreach Done</p>
        </CardContent>
      </Card>;
  }
  return <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {/* Candidate List Panel */}
        <Card className="bg-slate-50 rounded-xl">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-slate-900">
              <Users className="w-5 h-5 text-orange-500" />
              Candidate List
            </CardTitle>
            <p className="text-sm text-slate-600">{getStatusText()}</p>
          </CardHeader>
          <CardContent className="space-y-3">
            {candidates.map(candidate => <div key={candidate.id} onClick={() => toggleCandidateSelection(candidate.id)} className={`p-3 border rounded-lg flex justify-between items-center transition-all cursor-pointer
                  ${selectedCandidates.includes(candidate.id) ? 'bg-orange-50 border-orange-200' : 'hover:bg-slate-50'}
                  ${candidate.status === 'Not Selected' ? 'opacity-50 cursor-not-allowed' : ''}
                `}>
                <div className="flex-1">
                  <p className="font-medium text-slate-900">{candidate.name}</p>
                  <p className={`text-sm ${candidate.status?.includes('Responded') ? candidate.status?.includes('HSR OK') ? 'text-green-600' : 'text-red-600' : 'text-slate-600'}`}>
                    {candidate.status}
                  </p>
                </div>
                
                {candidate.status !== 'Not Selected' && step === 0 && <input type="checkbox" readOnly checked={selectedCandidates.includes(candidate.id)} className="h-4 w-4 text-orange-500 rounded" />}
                
                {candidate.status?.includes('Responded') && <CheckCheck className="w-5 h-5 text-green-500" />}
              </div>)}
            
            {step === 0 && selectedCandidates.length > 0 && <Button onClick={() => setStep(1)} className="w-full bg-orange-500 hover:bg-orange-600">
                <Send className="w-4 h-4 mr-2" />
                Send WhatsApp to Selected ({selectedCandidates.length})
              </Button>}
            
            {step === 4 && <Button onClick={resetFlow} className="w-full bg-orange-500 hover:bg-orange-600">
                Start New Outreach
              </Button>}
          </CardContent>
        </Card>

        {/* WhatsApp Chat Panel */}
        <Card>
          <CardHeader className="pb-4 bg-green-50">
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-slate-900">{activeChatCandidate?.name || "WhatsApp Chat"}</p>
                {(step === 1 || activeChatCandidate && (step === 2 || step === 3)) && <p className="text-xs text-green-600">Online</p>}
              </div>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-0">
            <div className="h-64 bg-slate-50 p-4 overflow-y-auto space-y-3">
              {chatMessages.length === 0 && step === 0 && <div className="flex flex-col items-center justify-center h-full text-slate-400">
                  <MessageSquare className="w-12 h-12 mb-2" />
                  <p className="text-center">Select candidates to start a chat</p>
                </div>}
              
              {chatMessages.map(message => <div key={message.id} className={`flex ${message.sender === 'recruiter' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-lg text-sm ${message.sender === 'recruiter' ? 'bg-green-500 text-white' : 'bg-white text-slate-900 shadow border'}`}>
                    {message.text}
                  </div>
                </div>)}
              
              {isTyping && <div className="flex justify-start">
                  <div className="max-w-[80%] p-3 rounded-lg text-sm bg-white text-slate-500 shadow border italic">
                    typing...
                  </div>
                </div>}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default RefinedWhatsAppFlow;