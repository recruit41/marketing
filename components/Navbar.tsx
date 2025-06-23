import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { NAVIGATION_ITEMS } from '../constants';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (path: string, e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu if open
    navigate(path);
  };


  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0" onClick={(e) => handleNavClick('/', e)}>
              <span className="text-3xl font-extrabold text-brandOrange-DEFAULT">
                Recruit<span className="text-brandGray-dark">41</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAVIGATION_ITEMS.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={(e) => handleNavClick(item.path, e)}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition duration-150 ${
                      isActive
                        ? 'text-brandOrange bg-brandOrange-light'
                        : 'text-brandGray hover:bg-gray-100 hover:text-brandGray-dark'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
             <Link
                to="#request-demo" // Placeholder for demo link/modal
                onClick={(e) => {
                  e.preventDefault(); // Prevent default hash link behavior if it's just a trigger
                  alert('Demo request form would appear here!');
                }}
                className="bg-brandOrange-DEFAULT text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-brandOrange-dark transition duration-150"
              >
                Request Demo
              </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-brandGray-DEFAULT hover:text-brandOrange-DEFAULT hover:bg-brandOrange-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brandOrange-light focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAVIGATION_ITEMS.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={(e) => handleNavClick(item.path, e)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition duration-150 ${
                    isActive
                      ? 'text-brandOrange bg-brandOrange-light'
                      : 'text-brandGray hover:bg-gray-100 hover:text-brandGray-dark'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
               <Link
                to="#request-demo" // Placeholder
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  alert('Demo request form would appear here!');
                }}
                className="w-full text-center bg-brandOrange-DEFAULT text-white px-4 py-2 rounded-md text-base font-medium hover:bg-brandOrange-dark transition duration-150"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
