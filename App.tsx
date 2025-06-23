import React from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SourcingPage from './pages/SourcingPage';
import ScreeningPage from './pages/ScreeningPage';
import InterviewPage from './pages/InterviewPage';
import CopilotPage from './pages/CopilotPage';
import PricingPage from './pages/PricingPage';
import NotFoundPage from './pages/NotFoundPage';

// Helper component to handle scrolling for hash links
const ScrollToSection: React.FC = () => {
  const { hash } = useLocation();

  React.useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToSection />
      <div className="flex flex-col min-h-screen bg-gray-50 text-brandGray-dark">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features/sourcing" element={<SourcingPage />} />
            <Route path="/features/screening" element={<ScreeningPage />} />
            <Route path="/features/interviews" element={<InterviewPage />} />
            <Route path="/features/copilot" element={<CopilotPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
