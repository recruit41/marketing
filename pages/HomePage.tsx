import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HOME_PAGE_FEATURES } from '../constants';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import { ArrowPathIcon, CpuChipIcon, ChatBubbleLeftRightIcon as ChatIconHero } from '@heroicons/react/24/outline'; // Renamed to avoid conflict

// Individual Animation Components (assuming they are correctly imported in constants.ts or directly here)
// For example:
// import AnimatedExcelImport from '../components/animations/AnimatedExcelImport';
// import AnimatedResumeScreening from '../components/animations/AnimatedResumeScreening';
// etc.
// They are accessed via HOME_PAGE_FEATURES[category].animationComponent

interface FeatureSectionProps {
  id: string;
  feature: import('../types').Feature;
  index: number;
}

const FeatureDisplaySection: React.FC<FeatureSectionProps> = ({ id, feature, index }) => {
  const AnimationComponent = feature.animationComponent;
  const navigate = useNavigate();

  const handleRequestDemoClick = () => {
    // Placeholder for actual demo request logic, e.g., open modal or navigate
    alert('Demo request form would appear here!');
    // Or navigate to a specific demo request page:
    // navigate('/request-demo'); 
  };
  
  return (
    <section id={id} className={`py-16 md:py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-brandGray-light'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 lg:gap-16`}>
          <div className="md:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold text-brandGray-dark mb-4">
              {feature.title}
            </h2>
            <p className="text-brandGray-DEFAULT mb-6 text-base lg:text-lg">{feature.description}</p>
            {feature.details && feature.details.length > 0 && (
              <ul className="list-disc list-inside space-y-2 text-brandGray-DEFAULT mb-8">
                {feature.details.slice(0, 3).map((detail, i) => ( // Show up to 3 details
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            )}
            <Button variant="primary" size="md" onClick={handleRequestDemoClick}>
              Request Demo for {feature.title.split(' ')[0]}
            </Button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 w-full">
            {AnimationComponent ? (
              React.createElement(AnimationComponent, { isPreview: false }) // Full animation, not preview
            ) : (
              <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center text-gray-500">
                <p>Animation Placeholder</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};


const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handlePrimaryDemoClick = () => {
    alert('Demo request form would appear here!');
    // navigate('/request-demo'); 
  };
  
  const handleExploreFeaturesClick = () => {
    const firstFeatureSection = document.getElementById('sourcing-section');
    if (firstFeatureSection) {
      firstFeatureSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#sourcing-section')
    }
  };


  return (
    <div className="text-brandGray-dark">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brandOrange-light via-orange-50 to-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brandGray-dark">
            The <span className="text-brandOrange-DEFAULT">Future of Recruitment</span> for India Inc.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-brandGray-DEFAULT">
            Recruit41 is a modern Applicant Tracking System, supercharged with AI,
            designed to help Indian recruiters hire faster and smarter.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" variant="primary" onClick={handlePrimaryDemoClick}>
              Request a Demo
            </Button>
            <Button size="lg" variant="outline" onClick={handleExploreFeaturesClick}>
              Explore Features Below
            </Button>
          </div>
        </div>
      </section>

      {/* Why Recruit41 Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Why Choose Recruit41?"
            subtitle="Distinguish yourself with an ATS built for the nuances of the Indian market."
          />
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brandOrange-light text-brandOrange-DEFAULT mx-auto mb-4">
                <ArrowPathIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Built for India</h3>
              <p className="text-brandGray-DEFAULT text-sm">Understands Indian job portals, educational systems, and hiring practices.</p>
            </div>
            <div className="p-6">
               <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brandOrange-light text-brandOrange-DEFAULT mx-auto mb-4">
                <CpuChipIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Efficiency</h3>
              <p className="text-brandGray-DEFAULT text-sm">Leverage cutting-edge AI for screening, interviews, and workflow automation.</p>
            </div>
            <div className="p-6">
               <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brandOrange-light text-brandOrange-DEFAULT mx-auto mb-4">
                <ChatIconHero className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Seamless Collaboration</h3>
              <p className="text-brandGray-DEFAULT text-sm">Enhance teamwork between recruiters, hiring managers, and agencies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Features Sections */}
      <FeatureDisplaySection id="sourcing-section" feature={HOME_PAGE_FEATURES.sourcing} index={0} />
      <FeatureDisplaySection id="screening-section" feature={HOME_PAGE_FEATURES.screening} index={1} />
      <FeatureDisplaySection id="interview-section" feature={HOME_PAGE_FEATURES.interview} index={2} />
      <FeatureDisplaySection id="copilot-section" feature={HOME_PAGE_FEATURES.copilot} index={3} />
      
      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-brandOrange-DEFAULT text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Elevate Your Recruitment?</h2>
          <p className="mt-4 text-lg md:text-xl opacity-90">
            Join leading recruiters in India who trust Recruit41 to find and hire top talent.
          </p>
          <div className="mt-8">
            <Button 
              size="lg" 
              className="bg-white text-brandOrange-DEFAULT hover:bg-orange-50"
              onClick={handlePrimaryDemoClick}
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
