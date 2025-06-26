import React, { useState } from 'react';
import { Brain, Star, Clock, MapPin, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
interface BaseCandidate {
  id: number;
  name: string;
  experience: string;
  skills: string;
  location: string;
  currentRole: string;
}
interface RankedCandidate extends BaseCandidate {
  matchScore: number;
  justification: string;
}
type Candidate = BaseCandidate | RankedCandidate;
const AIRankerSandbox = () => {
  const [isRanked, setIsRanked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const jobDescription = {
    title: "Senior Software Engineer",
    company: "TechCorp India",
    requirements: "5+ years experience, React, Node.js, AWS, team leadership"
  };
  const initialCandidates: BaseCandidate[] = [{
    id: 1,
    name: "Arjun Mehta",
    experience: "6 years",
    skills: "React, Node.js, AWS, MongoDB",
    location: "Bangalore",
    currentRole: "Senior Developer at StartupXYZ"
  }, {
    id: 2,
    name: "Sneha Iyer",
    experience: "3 years",
    skills: "React, Python, Docker",
    location: "Mumbai",
    currentRole: "Frontend Developer at WebCorp"
  }, {
    id: 3,
    name: "Vikram Singh",
    experience: "8 years",
    skills: "Full Stack, React, Node.js, AWS, Team Lead",
    location: "Delhi",
    currentRole: "Tech Lead at Enterprise Solutions"
  }, {
    id: 4,
    name: "Ananya Gupta",
    experience: "4 years",
    skills: "React, JavaScript, CSS, UI/UX",
    location: "Pune",
    currentRole: "Frontend Specialist at DesignHub"
  }];
  const rankedCandidates: RankedCandidate[] = [{
    ...initialCandidates[2],
    // Vikram Singh
    matchScore: 95,
    justification: "Perfect experience + leadership skills match"
  }, {
    ...initialCandidates[0],
    // Arjun Mehta
    matchScore: 88,
    justification: "Strong technical skills, ideal experience level"
  }, {
    ...initialCandidates[3],
    // Ananya Gupta
    matchScore: 72,
    justification: "Solid React skills, growing into senior role"
  }, {
    ...initialCandidates[1],
    // Sneha Iyer
    matchScore: 65,
    justification: "Good potential but needs more backend experience"
  }];
  const handleRankCandidates = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsRanked(true);
      setIsAnimating(false);
    }, 2000);
  };
  const candidates: Candidate[] = isRanked ? rankedCandidates : initialCandidates;
  const isRankedCandidate = (candidate: Candidate): candidate is RankedCandidate => {
    return 'matchScore' in candidate && 'justification' in candidate;
  };
  return <div className="w-full max-w-2xl bg-white shadow-lg border rounded-xl">
      {/* Job Description */}
      <div className="p-6 border-b bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{jobDescription.title}</h3>
        <p className="text-sm text-gray-600 mb-1">{jobDescription.company}</p>
        <p className="text-sm text-gray-700">{jobDescription.requirements}</p>
      </div>

      {/* Candidates List */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-md font-semibold text-gray-800">Candidate Pool</h4>
          {!isRanked && <Button onClick={handleRankCandidates} disabled={isAnimating} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2">
              {isAnimating ? <>
                  <Brain className="h-4 w-4 mr-2 animate-spin" />
                  AI Ranking...
                </> : <>
                  <Zap className="h-4 w-4 mr-2" />
                  Let AI Rank Candidates
                </>}
            </Button>}
        </div>

        <div className="space-y-3">
          {candidates.map((candidate, index) => {
          const rankedCandidate = isRankedCandidate(candidate) ? candidate : null;
          return <div key={candidate.id} className={`p-4 border rounded-lg transition-all duration-1000 transform ${isAnimating ? 'animate-pulse' : ''} ${isRanked ? 'border-l-4' : 'border-gray-200'}`} style={{
            borderLeftColor: isRanked && rankedCandidate ? rankedCandidate.matchScore >= 90 ? '#10b981' : rankedCandidate.matchScore >= 80 ? '#f59e0b' : rankedCandidate.matchScore >= 70 ? '#3b82f6' : '#ef4444' : undefined,
            transitionDelay: isAnimating ? `${index * 200}ms` : '0ms'
          }}>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h5 className="font-semibold text-gray-800">{candidate.name}</h5>
                      {isRanked && rankedCandidate && <div className="flex items-center space-x-1 text-sm">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="font-semibold text-indigo-600">
                            {rankedCandidate.matchScore}% Match
                          </span>
                        </div>}
                    </div>
                    
                    <div className="text-sm text-gray-600 space-y-1">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{candidate.experience}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span>{candidate.location}</span>
                        </div>
                      </div>
                      <p>{candidate.currentRole}</p>
                      <p className="text-xs"><strong>Skills:</strong> {candidate.skills}</p>
                    </div>

                    {isRanked && rankedCandidate && <div className="mt-2 p-2 bg-gray-50 rounded text-xs text-gray-700 border-l-2 border-indigo-300">
                        <strong>AI Insight:</strong> {rankedCandidate.justification}
                      </div>}
                  </div>
                </div>
              </div>;
        })}
        </div>

        {isRanked && <div className="mt-4 p-3 bg-indigo-50 rounded-lg">
            <p className="text-sm text-indigo-700">
              <Brain className="h-4 w-4 inline mr-2" />
              AI analyzed candidate profiles against job requirements, considering experience depth, 
              skill alignment, and career progression patterns.
            </p>
          </div>}
      </div>
    </div>;
};
export default AIRankerSandbox;