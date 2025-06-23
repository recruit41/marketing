// This page is no longer directly used as its content (feature animations and details)
// has been integrated into the HomePage.tsx.
// This file can be deleted if no longer needed.

import React from 'react';
// import FeatureShowcaseLayout from '../components/FeatureShowcaseLayout'; // No longer used
// import { ALL_FEATURES_DATA } from '../constants';

const InterviewPage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Interview Features</h1>
      <p>This page is deprecated. Interview features are now showcased on the homepage.</p>
      {/*
      <FeatureShowcaseLayout
        pageTitle="Next-Gen AI Interviews & Evaluation"
        pageSubtitle="Transform your interview process with AI-driven conversations, proctoring, and insights."
        features={ALL_FEATURES_DATA.interview}
      />
      */}
    </div>
  );
};

export default InterviewPage;
