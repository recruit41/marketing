
import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, X, Send, Check, CheckCheck } from 'lucide-react';

interface Candidate {
  id: number;
  name: string;
  role: string;
  experience: string;
  phone: string;
  status: string;
  locationConfirmed?: string;
  selected?: boolean;
}

const WhatsAppCRMShowcase = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([
    { id: 1, name: "Priya Sharma", role: "Senior Developer", experience: "5 years", phone: "+91 98765 43210", status: "Shortlisted" },
    { id: 2, name: "Rahul Singh", role: "Full Stack Developer", experience: "4 years", phone: "+91 87654 32109", status: "Shortlisted" },
    { id: 3, name: "Anita Gupta", role: "Frontend Developer", experience: "3 years", phone: "+91 76543 21098", status: "Shortlisted" },
    { id: 4, name: "Vikram Patel", role: "Backend Developer", experience: "6 years", phone: "+91 65432 10987", status: "Shortlisted" }
  ]);

  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [selectedCandidates, setSelectedCandidates] = useState<number[]>([]);
  const [messageTemplate, setMessageTemplate] = useState("Hi {FirstName}, we'd like to schedule an interview for the Software Engineer position. Are you available this week? Please confirm your preferred location: Remote/Bangalore/Mumbai.");
  const [currentStep, setCurrentStep] = useState(0);

  const handleCandidateSelect = (candidateId: number) => {
    setSelectedCandidates(prev => 
      prev.includes(candidateId) 
        ? prev.filter(id => id !== candidateId)
        : [...prev, candidateId]
    );
  };

  const handleSendMessages = () => {
    setShowWhatsAppModal(false);
    setCurrentStep(1);
    
    // Simulate responses coming in over time
    setTimeout(() => {
      setCandidates(prev => prev.map(candidate => 
        selectedCandidates.includes(candidate.id)
          ? { ...candidate, locationConfirmed: candidate.id === 1 ? "Remote" : candidate.id === 2 ? "Bangalore" : candidate.id === 3 ? "Mumbai" : "Remote" }
          : candidate
      ));
      setCurrentStep(2);
    }, 3000);
  };

  const renderPersonalizedMessage = (candidateName: string) => {
    const firstName = candidateName.split(' ')[0];
    return messageTemplate.replace('{FirstName}', firstName);
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-lg border overflow-hidden">
      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Candidate Management System</h3>
          <p className="text-gray-600">Select candidates and send automated WhatsApp messages</p>
        </div>

        {/* ATS Table */}
        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <input 
                    type="checkbox" 
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedCandidates(candidates.map(c => c.id));
                      } else {
                        setSelectedCandidates([]);
                      }
                    }}
                    className="rounded"
                  />
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Experience</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Status</TableHead>
                {currentStep >= 2 && <TableHead>Location Confirmed</TableHead>}
              </TableRow>
            </TableHeader>
            <TableBody>
              {candidates.map((candidate) => (
                <TableRow key={candidate.id} className={selectedCandidates.includes(candidate.id) ? "bg-blue-50" : ""}>
                  <TableCell>
                    <input 
                      type="checkbox"
                      checked={selectedCandidates.includes(candidate.id)}
                      onChange={() => handleCandidateSelect(candidate.id)}
                      className="rounded"
                    />
                  </TableCell>
                  <TableCell className="font-medium">{candidate.name}</TableCell>
                  <TableCell>{candidate.role}</TableCell>
                  <TableCell>{candidate.experience}</TableCell>
                  <TableCell className="text-gray-600">{candidate.phone}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      {candidate.status}
                    </Badge>
                  </TableCell>
                  {currentStep >= 2 && (
                    <TableCell>
                      {candidate.locationConfirmed ? (
                        <Badge className="bg-blue-100 text-blue-700">
                          <CheckCheck className="h-3 w-3 mr-1" />
                          {candidate.locationConfirmed}
                        </Badge>
                      ) : selectedCandidates.includes(candidate.id) ? (
                        <Badge variant="outline" className="animate-pulse">
                          Pending...
                        </Badge>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex gap-3">
          <Button 
            onClick={() => setShowWhatsAppModal(true)}
            disabled={selectedCandidates.length === 0 || currentStep >= 1}
            className="bg-green-600 hover:bg-green-700"
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Send WhatsApp Messages ({selectedCandidates.length})
          </Button>
          
          {currentStep >= 1 && (
            <Badge className="bg-green-100 text-green-700 px-3 py-2">
              <Check className="h-4 w-4 mr-1" />
              Messages Sent
            </Badge>
          )}
        </div>

        {/* Status Updates */}
        {currentStep >= 1 && currentStep < 2 && (
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800 font-medium">📱 Messages sent via WhatsApp...</p>
            <p className="text-yellow-600 text-sm mt-1">Waiting for candidate responses...</p>
          </div>
        )}

        {currentStep >= 2 && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-medium">✅ Responses received and automatically updated!</p>
            <p className="text-green-600 text-sm mt-1">Location preferences have been automatically populated in the table.</p>
          </div>
        )}
      </div>

      {/* WhatsApp Modal */}
      {showWhatsAppModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="w-96 max-w-md mx-4">
            <CardHeader className="bg-green-600 text-white">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  WhatsApp Message
                </CardTitle>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setShowWhatsAppModal(false)}
                  className="text-white hover:bg-green-700"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Recipients:</label>
                  <div className="mt-1">
                    {selectedCandidates.map(id => {
                      const candidate = candidates.find(c => c.id === id);
                      return candidate ? (
                        <Badge key={id} variant="outline" className="mr-2 mb-2">
                          {candidate.name}
                        </Badge>
                      ) : null;
                    })}
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">Message Template:</label>
                  <textarea 
                    value={messageTemplate}
                    onChange={(e) => setMessageTemplate(e.target.value)}
                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg resize-none"
                    rows={4}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Preview (for Priya):</label>
                  <div className="mt-1 p-3 bg-gray-50 border rounded-lg text-sm">
                    {renderPersonalizedMessage("Priya Sharma")}
                  </div>
                </div>

                <Button 
                  onClick={handleSendMessages}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Messages
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default WhatsAppCRMShowcase;
