
import React from 'react';
import { Link } from 'react-router-dom';
import { NAVIGATION_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brandGray-dark text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-brandOrange-DEFAULT mb-2">Recruit<span className="text-white">41</span></h3>
            <p className="text-sm text-gray-400">
              Modern ATS for Recruiters in India.
              Streamlining hiring from sourcing to onboarding.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Navigation</h3>
            <ul role="list" className="mt-4 space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-base text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
            <ul role="list" className="mt-4 space-y-2">
              <li>
                <Link to="/privacy" className="text-base text-gray-300 hover:text-white">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-base text-gray-300 hover:text-white">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-base text-gray-400">&copy; {new Date().getFullYear()} Recruit41. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
    