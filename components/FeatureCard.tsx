// This component is no longer used directly on the HomePage for feature showcases.
// Its functionality has been integrated into HomePage.tsx with direct animation embedding.
// This file can be deleted if it's not used elsewhere.
// For now, keeping the content but noting its obsolescence for this specific use case.

import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button'; // Assuming you have a Button component

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  linkTo: string;
  animationPreview?: React.ReactNode; // For a static or mini animation preview on homepage
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, linkTo, animationPreview }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      {animationPreview && (
        <div className="mb-4 h-40 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
         {animationPreview}
        </div>
      )}
      {icon && !animationPreview && <div className="text-brandOrange-DEFAULT mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold text-brandGray-dark mb-2">{title}</h3>
      <p className="text-brandGray-DEFAULT text-sm mb-4 flex-grow">{description}</p>
      <Link to={linkTo}>
        <Button variant="outline" size="sm" className="w-full sm:w-auto">Learn More</Button>
      </Link>
    </div>
  );
};

export default FeatureCard;
