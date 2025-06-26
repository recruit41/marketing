
import React from 'react';
import { Users } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <Users className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">Recruit41</span>
            </div>
            <p className="text-slate-400 mb-4 max-w-md">
              The future of recruitment is here. Harness the power of AI to build better teams, faster.
            </p>
            <div className="text-sm text-slate-500">
              © 2024 Recruit41. All rights reserved.
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a 
                  href="https://docs.google.com/document/d/e/2PACX-1vTC4hPHpMdmyhSaVEkcf7t5IALiOxzTDIyF_0oVxkFzuWTeZd_xalJX-4jjTrvje51grw5SmFyMGOkw/pub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="/dpa" 
                  className="hover:text-white transition-colors"
                >
                  DPA
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
