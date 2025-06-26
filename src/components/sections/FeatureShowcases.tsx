import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SourcingAggregator from "@/components/animations/SourcingAggregator";
import AIRankerSandbox from "@/components/animations/AIRankerSandbox";
import AIInterviewSnapshot from "@/components/animations/AIInterviewSnapshot";
const FeatureShowcases = () => {
  return <>
      {/* Feature 1: Sourcing - "From Many, to One" */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
                From Many, to One
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Unify Every Source.
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Stop juggling tabs. Whether it's a CSV from Naukri, resumes in your Gmail, 
                or a LinkedIn profile, bring them all into one intelligent talent pool instantly.
              </p>
            </div>
            <div>
              <SourcingAggregator />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Screening - "From Guesswork, to Certainty" */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <AIRankerSandbox />
            </div>
            <div className="order-1 lg:order-2">
              <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">
                From Guesswork, to Certainty
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Find the Perfect Fit in Seconds.
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Our AI doesn't just match keywords. It understands career trajectory, context, 
                and your specific criteria to rank candidates with unparalleled accuracy.
              </p>
              <Link to="/features/screening">
                <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-slate-50">
                  Explore Screening Features
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Interviews - "From Scheduling Nightmares, to On-Demand Conversations" */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">
                From Scheduling Nightmares, to On-Demand Conversations
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Conduct Deep-Dive Interviews. Automatically.
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Our conversational AI conducts in-depth technical and behavioral interviews 24/7. 
                Get rich data and full recordings, without ever needing to schedule a call.
              </p>
              <Link to="/features/interviews">
                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-slate-50">
                  Explore Interview Features
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div>
              <AIInterviewSnapshot />
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default FeatureShowcases;