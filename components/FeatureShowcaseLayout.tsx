// This component is no longer used as the individual feature pages
// (SourcingPage, ScreeningPage, etc.) have been removed.
// Feature showcasing is now handled directly within HomePage.tsx.
// This file can be deleted.

import React from 'react';
import { Feature } from '../types';
import SectionTitle from './SectionTitle';

interface FeatureShowcaseLayoutProps {
  pageTitle: string;
  pageSubtitle: string;
  features: Feature[];
}

const FeatureShowcaseLayout: React.FC<FeatureShowcaseLayoutProps> = ({ pageTitle, pageSubtitle, features }) => {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={pageTitle} subtitle={pageSubtitle} />
        
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              id={feature.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 lg:gap-12 py-8`}
            >
              <div className="md:w-1/2">
                <h3 className="text-2xl lg:text-3xl font-semibold text-brandGray-dark mb-4">{feature.title}</h3>
                <p className="text-brandGray-DEFAULT mb-4 text-base lg:text-lg">{feature.description}</p>
                {feature.details && (
                  <ul className="list-disc list-inside space-y-2 text-brandGray-DEFAULT mb-6">
                    {feature.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )}
                 <a 
                    href="#request-demo" // Placeholder
                    onClick={(e) => { e.preventDefault(); alert('Demo request form would appear here!'); }}
                    className="inline-block bg-brandOrange-DEFAULT text-white px-6 py-3 rounded-md text-base font-medium hover:bg-brandOrange-dark transition duration-150"
                  >
                  Learn More & See Demo
                </a>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                {feature.animationComponent ? (
                  React.createElement(feature.animationComponent)
                ) : (
                  <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-500">
                    <p>Visual/Animation Placeholder</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureShowcaseLayout;
