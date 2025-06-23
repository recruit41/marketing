// This page is no longer directly used as its content (feature animations and details)
// has been integrated into the HomePage.tsx.
// This file can be deleted if no longer needed.

import React from 'react';
// import FeatureShowcaseLayout from '../components/FeatureShowcaseLayout'; // No longer used
// import { ALL_FEATURES_DATA } from '../constants';

const CopilotPage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Copilot Features</h1>
      <p>This page is deprecated. Copilot features are now showcased on the homepage.</p>
      {/*
      <FeatureShowcaseLayout
        pageTitle="Recruitment Copilot"
        pageSubtitle="Your AI assistant for smarter interviews, automated documentation, and interviewer alignment."
        features={ALL_FEATURES_DATA.copilot}
      />
      */}
    </div>
  );
};

export default CopilotPage;
