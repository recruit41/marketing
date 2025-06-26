import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const CTASection = () => {
  return <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <Card className="bg-slate-900 border-0 text-white">
          <CardContent className="p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Revolutionize Your Hiring?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Join thousands of companies already using our platform to find the perfect candidates faster than ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600 text-lg px-8 py-6">
                Get Started Today
              </Button>
              <Button variant="outline" size="lg" className="border-white hover:bg-white/10 text-lg px-8 py-6 text-slate-50">
                Schedule Demo
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default CTASection;