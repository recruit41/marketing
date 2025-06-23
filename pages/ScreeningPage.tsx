// This page is no longer directly used as its content (feature animations and details)
// has been integrated into the HomePage.tsx.
// This file can be deleted if no longer needed.

import React from 'react';
// import FeatureShowcaseLayout from '../components/FeatureShowcaseLayout'; // No longer used
// import { ALL_FEATURES_DATA } from '../constants';

const ScreeningPage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Screening Features</h1>
      <p>This page is deprecated. Screening features are now showcased on the homepage.</p>
      {/*
      <FeatureShowcaseLayout
        pageTitle="AI-Powered Candidate Screening"
        pageSubtitle="Filter, rank, and engage candidates with unparalleled precision and speed."
        features={ALL_FEATURES_DATA.screening}
      />
      */}
    </div>
  );
};

export default ScreeningPage;
