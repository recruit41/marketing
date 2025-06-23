// This page is no longer directly used as its content (feature animations and details)
// has been integrated into the HomePage.tsx.
// This file can be deleted if no longer needed.

import React from 'react';
// import FeatureShowcaseLayout from '../components/FeatureShowcaseLayout'; // No longer used
// import { ALL_FEATURES_DATA } from '../constants'; // Use ALL_FEATURES_DATA if planning to resurrect detailed pages

const SourcingPage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Sourcing Features</h1>
      <p>This page is deprecated. Sourcing features are now showcased on the homepage.</p>
      {/* 
      <FeatureShowcaseLayout
        pageTitle="Intelligent Candidate Sourcing"
        pageSubtitle="Automate and streamline how you discover talent from every corner."
        features={ALL_FEATURES_DATA.sourcing}
      /> 
      */}
    </div>
  );
};

export default SourcingPage;
