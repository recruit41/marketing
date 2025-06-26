
import React from 'react';

const StatsSection = () => {
  const stats = [
    { number: "10,000+", label: "Candidates Processed" },
    { number: "500+", label: "Companies Trust Us" },
    { number: "95%", label: "Accuracy Rate" },
    { number: "80%", label: "Time Saved" }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
