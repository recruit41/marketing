import React from 'react';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BookOpen, Mail, MessageCircle } from 'lucide-react';

interface DocsLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const DocsLayout: React.FC<DocsLayoutProps> = ({ children, title = "Documentation" }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">{title}</h1>
            <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
          </div>
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocsLayout;